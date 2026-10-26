// data/chapters/2.dossier-shadow-broker/5.apartment-sanctum.js
// Act 5: The Apartment Sanctum (Weapon Standoff, Renegade Disarm & Unmasking)

export const nodesPart5 = {
  "penthouse_arrival": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[The private airlock slides open. I step across the threshold and freeze. The marble kitchen island. The leather lounge couch. The sweeping panoramic glass overlooking the neon-lit spires of the Silversun Strip. This is my home. The penthouse Admiral Anderson gave me. The room where our entire crew held our final party on the eve of the invasion.]",
    next: "penthouse_lockdown"
  },

  "penthouse_lockdown": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Before I can take another step, automated security protocols engage with a heavy hydraulic thud. Armored blast shutters slam down over the panoramic windows, sealing out the Citadel skyline. The main airlock deadbolts, and a military-grade electronic scrambler fills the air with a deep, deadening hum.]",
    next: "penthouse_standoff_draw"
  },

  "penthouse_standoff_draw": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Liara drops all academic gentleness. In a flash of lethal grace, azure dark-energy flares across her shoulders. She whips her heavy M-5 Phalanx pistol from beneath her coat and levels the barrel squarely between my eyes.]",
    next: "penthouse_liara_interrogate"
  },

  "penthouse_liara_interrogate": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "The apartment is sealed. Communications are dead. Scanners are scrambled. Nobody leaves this room until I have the truth. Who contracted you? How do you know the Admiralty was taken by Cerberus?",
    interrupt: {
      renegade: {
        targetNode: "penthouse_renegade_disarm",
        effects: { renegade: 3 }
      }
    },
    next: "penthouse_paragon_standoff"
  },

  "penthouse_renegade_disarm": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[In a blinding reflex drilled through hundreds of combat drops, I close the distance before her biotics can detonate. My left hand parries her wrist upward; my right hand twists the heavy pistol cleanly from her grip.]",
    next: "penthouse_disarm_strip"
  },

  "penthouse_disarm_strip": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Instead of aiming the weapon back at her, my fingers work with textbook N7 muscle memory: slide release tripped, magazine dropped into my palm, recoil guide disengaged. In two seconds flat, her M-5 Phalanx is completely field-stripped into harmless components across the kitchen floor.]",
    next: "penthouse_disarm_reaction"
  },

  "penthouse_disarm_reaction": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara stares at her empty hands, then down at the stripped barrel, spring, and slide resting on the granite counter. Her breath hitches in pure disorientation. Only one soldier in the galaxy ever handled a Phalanx with that exact muscle-memory cadence.] You... who are you?!",
    next: "penthouse_unmask_action"
  },

  "penthouse_paragon_standoff": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I keep my hands relaxed at my sides, refusing to raise them or flinch.] Finger off the trigger, Liara. Just like Therum. Sight alignment, controlled breath, evaluate target before squeezing. You taught me to trust your biotics; now trust your instincts.",
    next: "penthouse_paragon_reaction"
  },

  "penthouse_paragon_reaction": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara's aim wavers, the azure biotic glow around her shoulders flickering and dampening. She keeps the weapon leveled, but her voice drops to a sharp, guarded whisper.] Those words... Therum... Who are you?!",
    next: "penthouse_unmask_action"
  },

  "penthouse_unmask_action": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I reach up to the collar of my reinforced jacket, unfastening the high cowl and tapping off the subtle vocal modulator.]",
    next: "penthouse_unmask_face"
  },

  "penthouse_unmask_face": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I lower the cowl, stepping fully into the light of the penthouse. The room falls into absolute, breathless silence.]",
    next: "penthouse_liara_shock"
  },

  "penthouse_liara_shock": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara freezes against the kitchen counter, her biotics collapsing. Her eyes widen in stunned, analytical disbelief as her gaze traces my face.] By the Goddess... No. No, that's impossible. You died on the Crucible. We watched the Citadel fire! I placed your name on the memorial wall with my own hands!",
    next: "penthouse_liara_third_chance"
  },

  "penthouse_liara_third_chance": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Her voice hardens with guarded skepticism, the pragmatic Shadow Broker fighting through the shock.] What is this? A clone? A Cerberus neural echo? A synthetic construct sent to destabilize the Citadel? I spent two grueling years hunting your body across the galaxy and handing your remains to the Lazarus Project just to buy you a second chance at life. I don't believe in 'third' chances. Nobody gets a third chance.",
    next: "penthouse_shepard_confirm"
  },

  "penthouse_shepard_confirm": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I take a calm, deliberate step forward, keeping my hands visible and open.] It's really me, Liara. No Reaper indoctrination, no Cerberus cybernetics, and no clone.",
    next: "penthouse_apartment_inquiry"
  },

  "penthouse_apartment_inquiry": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I pause, glancing across the quiet room—the kitchen island, the lounge where our crew celebrated before Earth, the blast shutters.] And I need answers too. In my military will, filed before the final push on Earth... I left this luxury penthouse to Tali. How do you have this? Why did you bring me here?",
    next: "penthouse_liara_revelation_01"
  },

  "penthouse_liara_revelation_01": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara crosses her arms, letting out a slow, steadying breath. The hardened armor of the Broker softens into solemn exhaustion.] After the war ended, your will was honored to the letter. Anderson's penthouse was legally transferred to Tali. But she couldn't stay. She sold it to me before leaving the Citadel.",
    next: "penthouse_liara_revelation_02"
  },

  "penthouse_liara_revelation_02": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "She sold it for three crucial reasons. First, her people needed her: she returned to Rannoch to lead the historic reconstruction of their homeworld alongside the newly allied Geth. Second... remaining here was an unbearable, agonizing grief. Every room, that balcony... every corner echoed with your laughter and the memories of the Citadel party. She told me walking through these halls alone felt like drowning in ghosts.",
    next: "penthouse_liara_revelation_03"
  },

  "penthouse_liara_revelation_03": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "And third... I desperately needed an impenetrable, off-grid sanctuary on the Citadel—completely shielded from C-Sec surveillance and Council scrutiny—to secretly rebuild the Shadow Broker's intelligence network.",
    next: "penthouse_liara_poetic_irony"
  },

  "penthouse_liara_poetic_irony": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[She holds my gaze with intense, piercing focus.] I want to believe you. I truly do... but how? And why only now? I don't understand...",
    next: "penthouse_embrace_eternity"
  },

  "penthouse_embrace_eternity": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I extend both hands toward her, palms open.] It's complicated, but believe me. You don't have to take my word for it. Look into my mind.",
    next: "penthouse_meld_action"
  },

  "penthouse_meld_action": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara steps forward, the last barrier of skepticism giving way to profound, solemn focus. She places her hands against my temples. Her eyes darken to an ethereal, radiant black as our consciousnesses link.] 'One mind... no filters. Embrace eternity...'",
    next: "penthouse_meld_resolution"
  },

  "penthouse_meld_resolution": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Her eyes slowly clear from obsidian back to radiant azure as our minds part. A shiver passes through her as the full truth of my memories settles in—every doubt swept away by absolute certainty. Her voice is soft, but filled with fierce determination.] We're going to bring Tali back, Shepard.",
    next: "chapter_02_complete_hub"
  },

  "chapter_02_complete_hub": {
    type: "choice",
    background: "assets/backgrounds/black.jpg",
    present: [],
    speaker: "system",
    choices: [
      {
        text: "Review Mission Archives (Chapter Select)",
        targetNode: "chapter_02_end_terminal"
      },
      {
        text: "Replay Chapter 2: Dossier: Shadow Broker",
        targetNode: "citadel_gates_01"
      }
    ]
  },

  "chapter_02_end_terminal": {
    background: "assets/backgrounds/black.jpg",
    present: [],
    speaker: "system",
    text: "MISSION REPORT // CHAPTER 2: DOSSIER: SHADOW BROKER COMPLETE. Dr. Liara T'Soni reunited with Commander Shepard. Telemetry confirmed. Next Mission: Dossier: Archangel (Omega). Press ESC or click CHAPTERS to browse available dossiers.",
    next: null
  }
};
