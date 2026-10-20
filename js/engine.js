// js/engine.js - Mass Effect Visual Novel Engine (Baldur's Gate Style Dialogue & POV Camera)
import { characters } from "../data/characters.js";
import { stories } from "../data/stories.js";
import { testScene } from "../data/chapters/test-scene.js";
import { audio } from "./audio.js";

const SAVE_KEY = "mass-effect-vn-save-v1";

class VNEngine {
  constructor() {
    this.currentStoryIndex = 0;
    const activeStory = stories[this.currentStoryIndex] || { chapters: [] };
    const defaultChapter = activeStory.chapters.find(c => c.available && c.data) || { data: testScene };
    this.chapter = defaultChapter.data;

    this.hasStarted = false;
    this.currentNodeId = null;
    this.currentNode = null;
    this.readChoices = new Set();

    // Counters: Paragon / Renegade points and flags persist (localStorage); temp counters are scene-scoped helpers
    this.state = this.loadSave();

    // Typewriter state
    this.isTyping = false;
    this.typeInterval = null;
    this.fullText = "";

    // DOM Elements cache
    this.dom = {};
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.renderChapterModal();
    this.openChapterModal();
  }

  cacheDOM() {
    this.dom.stage = document.getElementById("stage");
    this.dom.bg = document.getElementById("scene-background");
    this.dom.portraitCenter = document.getElementById("portrait-center");
    this.dom.portraitLeft = document.getElementById("portrait-left");
    this.dom.portraitRight = document.getElementById("portrait-right");

    this.dom.dialogueLayer = document.getElementById("dialogue-layer");
    this.dom.dialogueBox = document.getElementById("dialogue-box");
    this.dom.speakerName = document.getElementById("speaker-name");
    this.dom.speakerTitle = document.getElementById("speaker-title");
    this.dom.dialogueText = document.getElementById("dialogue-text");
    this.dom.advancePrompt = document.getElementById("advance-prompt");

    // Baldur's Gate style choice container
    this.dom.choiceContainer = document.getElementById("choice-container");
    this.dom.choiceList = document.getElementById("choice-list");

    this.dom.interruptParagon = document.getElementById("interrupt-paragon");
    this.dom.interruptRenegade = document.getElementById("interrupt-renegade");

    this.dom.btnChapters = document.getElementById("btn-chapters");
    this.dom.btnMute = document.getElementById("btn-mute");
    this.dom.btnRestart = document.getElementById("btn-restart");
    this.dom.chapterTitle = document.getElementById("chapter-title");

    // Chapter & Story Selector Modal
    this.dom.chapterModal = document.getElementById("chapter-modal");
    this.dom.btnCloseModal = document.getElementById("btn-close-modal");
    this.dom.storyTitle = document.getElementById("story-title");
    this.dom.chaptersList = document.getElementById("chapters-list");
  }

  bindEvents() {
    // Click dialogue box to advance or speed up typewriter
    this.dom.dialogueBox.addEventListener("click", () => this.handleDialogueBoxClick());

    // Keyboard controls
    window.addEventListener("keydown", (e) => this.handleKeyDown(e));

    // Chapter selector modal triggers
    if (this.dom.btnChapters) {
      this.dom.btnChapters.addEventListener("click", () => this.openChapterModal());
    }
    if (this.dom.btnCloseModal) {
      this.dom.btnCloseModal.addEventListener("click", () => this.closeChapterModal());
    }

    // Event delegation on chapter list for infallible click handling
    if (this.dom.chaptersList) {
      this.dom.chaptersList.addEventListener("click", (e) => {
        const row = e.target.closest(".chapter-row.playable");
        if (!row) return;
        e.preventDefault();
        const num = parseInt(row.getAttribute("data-number"), 10);
        const story = stories[this.currentStoryIndex];
        if (story) {
          const ch = story.chapters.find(c => c.number === num);
          if (ch && ch.available && ch.data) {
            try { audio.playSelect(); } catch (err) {}
            this.loadChapter(ch.data);
            this.closeChapterModal();
          }
        }
      });
    }

    // Top HUD controls
    if (this.dom.btnMute) {
      this.dom.btnMute.addEventListener("click", () => {
        const muted = audio.toggleMute();
        this.dom.btnMute.textContent = muted ? "🔇 Audio Off" : "🔊 Audio On";
        this.dom.btnMute.classList.toggle("active", !muted);
      });
    }

    if (this.dom.btnRestart) {
      this.dom.btnRestart.addEventListener("click", () => {
        const first = window.confirm(
          "Restart the game?\n\nYou will return to the very beginning of Chapter 1 and all progress will be lost."
        );
        if (!first) return;
        const second = window.confirm(
          "Are you absolutely sure?\n\nThis cannot be undone."
        );
        if (!second) return;

        const activeStory = stories[this.currentStoryIndex] || { chapters: [] };
        const firstChapter = activeStory.chapters.find(c => c.available && c.data) || { data: testScene };
        this.clearSave();
        this.state = this.createState();
        this.loadChapter(firstChapter.data);
      });
    }

    // Interrupt click handlers
    this.dom.interruptParagon.addEventListener("click", () => this.triggerInterrupt("paragon"));
    this.dom.interruptRenegade.addEventListener("click", () => this.triggerInterrupt("renegade"));
  }

  loadChapter(chapterData) {
    if (!chapterData) return;
    this.chapter = chapterData;
    this.hasStarted = true;
    this.readChoices.clear();
    this.state.temp = {};
    const initialBg = this.chapter.nodes[this.chapter.startNode]?.background || this.chapter.background;
    if (initialBg) {
      this.dom.bg.src = initialBg;
      this.dom.bg.setAttribute("src", initialBg);
    }
    this.loadScene(this.chapter.startNode);
  }

  // -----------------------------------------------------------------
  // 🧮 COUNTERS: Paragon / Renegade points & temporary counters
  // -----------------------------------------------------------------
  createState() {
    return { paragon: 0, renegade: 0, flags: {}, temp: {} };
  }

  // Only paragon, renegade and flags are persisted; temp is never saved
  loadSave() {
    const state = this.createState();
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        state.paragon = Number(saved.paragon) || 0;
        state.renegade = Number(saved.renegade) || 0;
        state.flags = saved.flags && typeof saved.flags === "object" ? saved.flags : {};
      }
    } catch (err) {
      console.warn("Could not read save data:", err);
    }
    return state;
  }

  saveProgress() {
    try {
      const { paragon, renegade, flags } = this.state;
      localStorage.setItem(SAVE_KEY, JSON.stringify({ paragon, renegade, flags }));
    } catch (err) {
      console.warn("Could not write save data:", err);
    }
  }

  clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (err) {}
  }

  /**
   * requires: { paragon: 2, renegade: 1, flags: { saved_wrex: true }, temp: { briefing_questions: 2 } }
   * Points/temp are minimum thresholds; flags must match their truthiness. All conditions must be met.
   */
  meetsRequirements(requires) {
    if (!requires) return true;
    if (requires.paragon !== undefined && this.state.paragon < requires.paragon) return false;
    if (requires.renegade !== undefined && this.state.renegade < requires.renegade) return false;
    if (requires.flags) {
      for (const [key, value] of Object.entries(requires.flags)) {
        if (Boolean(this.state.flags[key]) !== Boolean(value)) return false;
      }
    }
    if (requires.temp) {
      for (const [key, min] of Object.entries(requires.temp)) {
        if ((this.state.temp[key] || 0) < min) return false;
      }
    }
    return true;
  }

  /**
   * effects: { paragon: 1, renegade: 1, flags: { saved_wrex: true }, temp: { key: 1 }, clearTemp: ["key"] }
   * Points and temp values are added; flags are set. Progress is saved after every change.
   */
  applyEffects(effects) {
    if (!effects) return;
    if (effects.paragon) this.state.paragon += effects.paragon;
    if (effects.renegade) this.state.renegade += effects.renegade;
    if (effects.flags) Object.assign(this.state.flags, effects.flags);
    if (effects.temp) {
      for (const [key, amount] of Object.entries(effects.temp)) {
        this.state.temp[key] = (this.state.temp[key] || 0) + amount;
      }
    }
    if (effects.clearTemp) {
      effects.clearTemp.forEach(key => delete this.state.temp[key]);
    }
    this.saveProgress();
  }

  loadScene(nodeId) {
    if (!nodeId || !this.chapter.nodes[nodeId]) {
      console.warn("End of scene or node not found:", nodeId);
      return;
    }

    this.currentNodeId = nodeId;
    this.currentNode = this.chapter.nodes[nodeId];

    // Update chapter title
    if (this.dom.chapterTitle) {
      this.dom.chapterTitle.textContent = this.chapter.title;
    }

    // Update background if specified on node (persists active background across dialogues)
    if (this.currentNode.background) {
      const targetBg = this.currentNode.background;
      const currentBg = this.dom.bg.getAttribute("src");
      if (currentBg !== targetBg) {
        this.dom.bg.src = targetBg;
        this.dom.bg.setAttribute("src", targetBg);
      }
    } else if (!this.dom.bg.getAttribute("src") && this.chapter.background) {
      this.dom.bg.src = this.chapter.background;
      this.dom.bg.setAttribute("src", this.chapter.background);
    }

    // 1. Update character stage layout & dynamic lighting
    this.updateStage(this.currentNode);

    // 2. Handle Moral Interrupts
    this.updateInterrupts(this.currentNode);

    // 3. Render dialogue or Baldur's Gate style choice list
    if (this.currentNode.type === "choice" || this.currentNode.choices) {
      this.renderChoices(this.currentNode);
    } else {
      this.hideChoices();
      this.renderDialogue(this.currentNode);
    }
  }

  // -----------------------------------------------------------------
  // 🎭 STAGE MANAGEMENT: Solo / Dual / Trio Mode & Dynamic Lighting
  // -----------------------------------------------------------------
  updateStage(node) {
    const present = node.present || [];
    const speakerId = node.speaker;

    this.dom.stage.classList.remove("mode-single", "mode-dual", "mode-trio");

    if (present.length <= 1) {
      // SOLO MODE: Single character centered on screen
      this.dom.stage.classList.add("mode-single");
      const charId = present[0];

      if (charId && characters[charId] && !characters[charId].isPlayer) {
        const char = characters[charId];
        this.dom.portraitCenter.src = char.sprite;
        this.dom.portraitCenter.alt = char.name;
        this.dom.portraitCenter.style.display = "block";

        // Dynamic lighting: lit if speaking; dimmed if Shepard (POV) is speaking
        if (speakerId === charId) {
          this.dom.portraitCenter.classList.add("speaking");
          this.dom.portraitCenter.classList.remove("dimmed");
        } else {
          this.dom.portraitCenter.classList.remove("speaking");
          this.dom.portraitCenter.classList.add("dimmed");
        }
      } else {
        this.dom.portraitCenter.style.display = "none";
      }

      this.dom.portraitLeft.style.display = "none";
      this.dom.portraitRight.style.display = "none";

    } else if (present.length === 2) {
      // DUAL MODE: 2 characters (Left & Right)
      this.dom.stage.classList.add("mode-dual");
      this.dom.portraitCenter.style.display = "none";

      const leftCharId = present[0];
      const rightCharId = present[1];

      // Left character
      if (leftCharId && characters[leftCharId]) {
        const leftChar = characters[leftCharId];
        this.dom.portraitLeft.src = leftChar.sprite;
        this.dom.portraitLeft.alt = leftChar.name;
        this.dom.portraitLeft.style.display = "block";

        if (speakerId === leftCharId) {
          this.dom.portraitLeft.classList.add("speaking");
          this.dom.portraitLeft.classList.remove("dimmed");
        } else {
          this.dom.portraitLeft.classList.remove("speaking");
          this.dom.portraitLeft.classList.add("dimmed");
        }
      }

      // Right character
      if (rightCharId && characters[rightCharId]) {
        const rightChar = characters[rightCharId];
        this.dom.portraitRight.src = rightChar.sprite;
        this.dom.portraitRight.alt = rightChar.name;
        this.dom.portraitRight.style.display = "block";

        if (speakerId === rightCharId) {
          this.dom.portraitRight.classList.add("speaking");
          this.dom.portraitRight.classList.remove("dimmed");
        } else {
          this.dom.portraitRight.classList.remove("speaking");
          this.dom.portraitRight.classList.add("dimmed");
        }
      }

      // If Shepard (POV) speaks, BOTH interlocutors are dimmed into listening shadows
      if (speakerId === "shepard") {
        this.dom.portraitLeft.classList.remove("speaking");
        this.dom.portraitLeft.classList.add("dimmed");
        this.dom.portraitRight.classList.remove("speaking");
        this.dom.portraitRight.classList.add("dimmed");
      }

    } else {
      // TRIO MODE: 3 characters (Left, Center & Right)
      this.dom.stage.classList.add("mode-trio");

      const leftCharId = present[0];
      const centerCharId = present[1];
      const rightCharId = present[2];

      const slots = [
        { id: leftCharId, el: this.dom.portraitLeft },
        { id: centerCharId, el: this.dom.portraitCenter },
        { id: rightCharId, el: this.dom.portraitRight }
      ];

      slots.forEach(slot => {
        if (slot.id && characters[slot.id]) {
          const char = characters[slot.id];
          slot.el.src = char.sprite;
          slot.el.alt = char.name;
          slot.el.style.display = "block";

          if (speakerId === slot.id) {
            slot.el.classList.add("speaking");
            slot.el.classList.remove("dimmed");
          } else {
            slot.el.classList.remove("speaking");
            slot.el.classList.add("dimmed");
          }
        } else {
          slot.el.style.display = "none";
        }
      });

      // If Shepard (POV) speaks, ALL THREE interlocutors are dimmed into listening shadows
      if (speakerId === "shepard") {
        this.dom.portraitLeft.classList.remove("speaking");
        this.dom.portraitLeft.classList.add("dimmed");
        this.dom.portraitCenter.classList.remove("speaking");
        this.dom.portraitCenter.classList.add("dimmed");
        this.dom.portraitRight.classList.remove("speaking");
        this.dom.portraitRight.classList.add("dimmed");
      }
    }
  }

  // -----------------------------------------------------------------
  // 💬 DIALOGUE BOX & TYPEWRITER EFFECT
  // -----------------------------------------------------------------
  renderDialogue(node) {
    const speaker = characters[node.speaker] || { name: node.speaker || "Unknown", title: "" };

    this.dom.speakerName.textContent = speaker.name;
    this.dom.speakerTitle.textContent = speaker.title ? `// ${speaker.title}` : "";

    this.fullText = node.text || "";
    this.dom.dialogueText.textContent = "";
    this.dom.advancePrompt.classList.remove("visible");

    // Smooth typewriter effect
    this.isTyping = true;
    let charIndex = 0;
    clearInterval(this.typeInterval);

    this.typeInterval = setInterval(() => {
      if (charIndex < this.fullText.length) {
        this.dom.dialogueText.textContent += this.fullText[charIndex];
        if (charIndex % 3 === 0 && this.fullText[charIndex] !== " ") {
          audio.playTypeBlip();
        }
        charIndex++;
      } else {
        this.finishTyping();
      }
    }, 18);
  }

  finishTyping() {
    clearInterval(this.typeInterval);
    this.isTyping = false;
    this.dom.dialogueText.textContent = this.fullText;
    if (this.currentNode.next) {
      this.dom.advancePrompt.classList.add("visible");
    }
  }

  handleDialogueBoxClick() {
    // If choice menu is active, don't advance via dialogue box click
    if (this.currentNode && (this.currentNode.type === "choice" || this.currentNode.choices)) {
      return;
    }

    if (this.isTyping) {
      this.finishTyping();
    } else if (this.currentNode && this.currentNode.next) {
      audio.playSelect();
      this.loadScene(this.currentNode.next);
    }
  }

  // -----------------------------------------------------------------
  // ⚡ MORAL INTERRUPTS (PARAGON / RENEGADE - NO TIMERS)
  // -----------------------------------------------------------------
  updateInterrupts(node) {
    this.dom.interruptParagon.classList.remove("visible");
    this.dom.interruptRenegade.classList.remove("visible");

    if (node.interrupt) {
      let playedCue = false;

      if (node.interrupt.paragon && this.meetsRequirements(node.interrupt.paragon.requires)) {
        this.dom.interruptParagon.classList.add("visible");
        playedCue = true;
      }

      if (node.interrupt.renegade && this.meetsRequirements(node.interrupt.renegade.requires)) {
        this.dom.interruptRenegade.classList.add("visible");
        playedCue = true;
      }

      if (playedCue) {
        audio.playInterruptCue();
      }
    }
  }

  triggerInterrupt(type) {
    if (!this.currentNode || !this.currentNode.interrupt) return;

    const interruptData = this.currentNode.interrupt[type];
    if (interruptData && interruptData.targetNode && this.meetsRequirements(interruptData.requires)) {
      audio.playInterruptTrigger(type);
      // Interrupts award +1 point of their own alignment unless `effects` overrides it
      this.applyEffects(interruptData.effects || { [type]: 1 });
      this.dom.interruptParagon.classList.remove("visible");
      this.dom.interruptRenegade.classList.remove("visible");
      this.loadScene(interruptData.targetNode);
    }
  }

  // -----------------------------------------------------------------
  // 📜 BALDUR'S GATE STYLE FULL-TEXT DIALOGUE CHOICES
  // -----------------------------------------------------------------
  renderChoices(node) {
    // Only show choices whose requirements are met (or locked ones flagged with `showLocked`)
    const choices = (node.choices || []).filter(
      c => this.meetsRequirements(c.requires) || c.showLocked
    );
    this.dom.choiceList.innerHTML = "";

    // Hide dialogue box so the choices cleanly take focus without redundant prompts
    if (this.dom.dialogueLayer) {
      this.dom.dialogueLayer.style.display = "none";
    }
    this.dom.choiceContainer.classList.add("visible");

    choices.forEach((choice, index) => {
      const choiceBtn = document.createElement("button");
      choiceBtn.className = "choice-item";
      choiceBtn.dataset.index = index + 1;

      // Mark previously explored choices
      if (this.readChoices.has(choice.targetNode)) {
        choiceBtn.classList.add("read");
      }

      // Locked choices stay visible but cannot be picked
      const locked = !this.meetsRequirements(choice.requires);
      let badgeHtml = "";
      if (locked) {
        choiceBtn.classList.add("locked");
        choiceBtn.disabled = true;
        if (choice.requires?.temp) {
          const parts = Object.entries(choice.requires.temp).map(([k, req]) => {
            const cur = (this.state.temp && this.state.temp[k]) || 0;
            return `${cur}/${req}`;
          });
          badgeHtml = ` <span class="choice-req-badge">[Investigate more (${parts.join(", ")})]</span>`;
        } else if (choice.requires?.paragon) {
          badgeHtml = ` <span class="choice-req-badge">[Requires ${choice.requires.paragon} Paragon]</span>`;
        } else if (choice.requires?.renegade) {
          badgeHtml = ` <span class="choice-req-badge">[Requires ${choice.requires.renegade} Renegade]</span>`;
        } else {
          badgeHtml = ` <span class="choice-req-badge">[Locked]</span>`;
        }
      }
      if (choice.type === "paragon" || choice.type === "renegade") {
        choiceBtn.dataset.alignment = choice.type;
      }

      // Number badge + full spoken line + locked requirement indicator
      choiceBtn.innerHTML = `
        <span class="choice-num">${index + 1}.</span>
        <span class="choice-text">${choice.text}${badgeHtml}</span>
      `;

      choiceBtn.addEventListener("mouseenter", () => {
        if (!locked) audio.playHover();
      });
      choiceBtn.addEventListener("click", () => {
        if (locked) {
          try { audio.playLocked(); } catch (err) {}
          return;
        }
        this.selectChoice(choice);
      });

      this.dom.choiceList.appendChild(choiceBtn);
    });
  }

  hideChoices() {
    this.dom.choiceContainer.classList.remove("visible");
    if (this.dom.dialogueLayer) {
      this.dom.dialogueLayer.style.display = "flex";
    }
  }

  selectChoice(choice) {
    if (!this.meetsRequirements(choice.requires)) return;
    audio.playSelect();
    // Effects apply only the first time a choice is picked
    if (choice.targetNode && !this.readChoices.has(choice.targetNode)) {
      this.applyEffects(choice.effects);
    } else if (!choice.targetNode) {
      this.applyEffects(choice.effects);
    }
    if (choice.targetNode) {
      this.readChoices.add(choice.targetNode);
    }
    this.hideChoices();
    if (choice.targetNode) {
      this.loadScene(choice.targetNode);
    }
  }

  // -----------------------------------------------------------------
  // 📂 CHAPTERS SCREEN & TERMINAL
  // -----------------------------------------------------------------
  openChapterModal() {
    audio.playHover();
    this.renderChapterModal();
    if (this.dom.chapterModal) {
      this.dom.chapterModal.classList.add("visible");
    }
  }

  closeChapterModal() {
    audio.playSelect();
    if (this.dom.chapterModal) {
      this.dom.chapterModal.classList.remove("visible");
    }
    // If scene hasn't started yet, launch default playable chapter
    if (!this.hasStarted) {
      const activeStory = stories[this.currentStoryIndex] || { chapters: [] };
      const defaultChapter = activeStory.chapters.find(c => c.available && c.data) || { data: testScene };
      if (defaultChapter && defaultChapter.data) {
        this.loadChapter(defaultChapter.data);
      }
    }
  }

  renderChapterModal() {
    const story = stories[this.currentStoryIndex];
    if (!story) return;

    if (this.dom.storyTitle) {
      this.dom.storyTitle.textContent = story.title;
    }

    if (this.dom.chaptersList) {
      this.dom.chaptersList.innerHTML = "";
      story.chapters.forEach(ch => {
        const isPlayable = ch.available && ch.data;
        const row = document.createElement(isPlayable ? "button" : "div");
        row.className = `chapter-row ${isPlayable ? "playable" : "locked"}`;
        row.setAttribute("data-number", ch.number);

        const isCurrentlyActive = this.hasStarted && this.chapter && this.chapter.id === ch.id;
        if (isCurrentlyActive) {
          row.classList.add("active");
        }

        const badgeText = isPlayable
          ? (isCurrentlyActive ? "▶ Resume" : "▶ Play")
          : (ch.status || "Coming Soon");

        row.innerHTML = `
          <span class="chapter-row-num">${ch.number}.</span>
          <span class="chapter-row-title">${ch.title}</span>
          <span class="chapter-row-badge ${isPlayable ? "badge-play" : "badge-coming-soon"}">${badgeText}</span>
        `;

        if (isPlayable) {
          row.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            try { audio.playSelect(); } catch (err) {}
            this.loadChapter(ch.data);
            this.closeChapterModal();
          });
        } else {
          row.addEventListener("click", () => {
            try { audio.playLocked(); } catch (err) {}
          });
        }

        this.dom.chaptersList.appendChild(row);
      });
    }
  }

  // -----------------------------------------------------------------
  // ⌨️ KEYBOARD CONTROLS
  // -----------------------------------------------------------------
  handleKeyDown(e) {
    const isModalOpen = this.dom.chapterModal && this.dom.chapterModal.classList.contains("visible");

    // Key Escape: toggle or close chapter modal
    if (e.key === "Escape") {
      if (isModalOpen) {
        this.closeChapterModal();
      } else {
        this.openChapterModal();
      }
      return;
    }

    // Number keys 1-4 while chapter modal is open
    if (isModalOpen) {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 4) {
        const targetRow = this.dom.chaptersList.querySelector(`.chapter-row[data-number="${num}"]`);
        if (targetRow) {
          targetRow.click();
          return;
        }
      }
      return;
    }

    // Space or Enter: advance dialogue
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      this.handleDialogueBoxClick();
      return;
    }

    // Key Q: trigger Paragon Interrupt if available
    if ((e.key === "q" || e.key === "Q" || e.code === "KeyQ") && this.dom.interruptParagon.classList.contains("visible")) {
      this.triggerInterrupt("paragon");
      return;
    }

    // Key E: trigger Renegade Interrupt if available
    if ((e.key === "e" || e.key === "E" || e.code === "KeyE") && this.dom.interruptRenegade.classList.contains("visible")) {
      this.triggerInterrupt("renegade");
      return;
    }

    // Numbers 1-9: Select Baldur's Gate style dialogue choices
    if (this.dom.choiceContainer.classList.contains("visible")) {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        const choiceBtn = this.dom.choiceList.querySelector(`.choice-item[data-index="${num}"]`);
        if (choiceBtn && !choiceBtn.disabled && !choiceBtn.classList.contains("locked")) {
          choiceBtn.click();
        } else if (choiceBtn && choiceBtn.classList.contains("locked")) {
          try { audio.playLocked(); } catch (err) {}
        }
      }
    }
  }
}

// Auto-initialize on DOM load or immediately if already loaded
function startEngine() {
  const engine = new VNEngine();
  engine.init();
  window.vnEngine = engine;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startEngine);
} else {
  startEngine();
}
