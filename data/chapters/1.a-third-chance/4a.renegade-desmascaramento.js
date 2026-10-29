// data/chapters/1.a-third-chance/4a.renegade-desmascaramento.js
// Branch A: Renegade Interrupt (Active Deduction by Shepard)

export const nodesPart4a = {
  "renegade_interrupt_farsa": {
    present: ["hackett"],
    speaker: "shepard",
    text: "[My eyes narrow. As the reports drone on, my instincts awaken.]",
    next: "renegade_interrupt_farsa_speech"
  },

  "renegade_interrupt_farsa_speech": {
    present: ["hackett"],
    speaker: "shepard",
    text: "I've heard enough, 'Admiral'... that's quite enough. Steven Hackett is on Earth coordinating the greatest reconstruction in galactic history. He would never deliver a solo diplomatic briefing to a naked, slime-covered soldier on a Reaper deck. Drop the masquerade right now. I want to know who you really are!",
    next: "renegade_catalyst_shift"
  },

  "renegade_catalyst_shift": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[Hackett's posture freezes. The human warmth in his eyes vanishes, replaced by a crystalline cyan pulse. A faint, analytical smile touches the projection's lips.]",
    next: "renegade_catalyst_reveal_01"
  },

  "renegade_catalyst_reveal_01": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Fascinating. Our probabilistic models predicted you would require four additional minutes and twelve seconds to isolate the logical anomalies of this environment. You exceeded the simulations, Shepard. Your tactical instincts remain razor sharp.",
    next: "renegade_shepard_demand"
  },

  "renegade_shepard_demand": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "You're the Catalyst. The Crucible's AI. Cut the mind games and speak plain: what do you want from me?!",
    next: "renegade_tali_crisis"
  },

  "renegade_tali_crisis": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Direct to the core, as always. A diplomatic transport from Rannoch was intercepted in the Terminus Systems. Tali'Zorah vas Normandy has been abducted.",
    next: "renegade_shepard_fury"
  },

  "renegade_shepard_fury": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[The blow hits me like a kinetic slug. I step forward, fists clenched, jaw locked tight.] Tali?! If you're lying to me—",
    next: "renegade_crisis_details"
  },

  "renegade_crisis_details": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "There is no deception. Rogue Cerberus splinter cells captured her alongside the Admiralty. Since the Geth are demilitarized and place blind trust in the Quarians, Cerberus will employ the Illusive Man's neural indoctrination technology on Tali to subjugate the entire synthetic consensus.",
    next: "renegade_shepard_tim_trauma"
  },

  "renegade_shepard_tim_trauma": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[A cold tremor runs down my spine. The rest of the galaxy thinks Cerberus mind-control was just mad research—because no one else survived that control room on the Citadel. I am the only living soul who felt the Illusive Man lock my nervous system like a puppet and force my own hand to shoot Admiral Anderson. That nightmare is real. And I will burn every last trace of it to ash before it touches Tali's mind.]",
    next: "choice_renegade_hub"
  },

  "choice_renegade_hub": {
    type: "choice",
    present: ["catalyst_hackett"],
    speaker: "shepard",
    choices: [
      {
        text: "Why Hackett's face? Why use his likeness to deceive me?",
        effects: { temp: { renegade_hub_questions: 1 } },
        targetNode: "node_renegade_why_hackett"
      },
      {
        text: "How the hell am I standing here if my body was vaporized at the Crucible?",
        effects: { temp: { renegade_hub_questions: 1 } },
        targetNode: "node_renegade_cloning_info"
      },
      {
        text: "Why don't you resolve this yourself with the Reaper armada?",
        effects: { temp: { renegade_hub_questions: 1 } },
        targetNode: "node_renegade_reaper_limit"
      },
      {
        text: "I don't trust a single word you say. But I'll collaborate for now... for Tali.",
        requires: { temp: { renegade_hub_questions: 3 } },
        showLocked: true,
        targetNode: "renegade_pact_node"
      }
    ]
  },

  "node_renegade_why_hackett": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Projecting the face and voice of the man who led your species was the calibrated protocol to anchor your mind and prevent cognitive dissociation upon waking. But your tactical deduction shattered that illusion ahead of schedule.",
    next: "choice_renegade_hub"
  },

  "node_renegade_cloning_info": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "You were synthesized from accelerated Thorian biomass. The Thorians were catalogued in previous cycles, and their tissue adapts to any blueprint, in this case the cellular data Cerberus recorded during Project Lazarus. Your memories and will were transferred without corruption from your neural map seared into the Crucible at ascension. You are pure organic flesh. No leashes, no cybernetics, no indoctrination.",
    next: "choice_renegade_hub"
  },

  "node_renegade_reaper_limit": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "If a Reaper warship enters the system, the Quarians will be executed within seconds before a single kinetic shot can be fired. And if Cerberus discovers Shepard lives, Tali will die simply to rob you of your triumph. She will only survive if no one knows you have returned.",
    next: "choice_renegade_hub"
  },

  "renegade_pact_node": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I squeeze my hands into fists so tight the knuckles turn white.] I don't trust a single word out of this projection. But I am not gambling Tali's life. I will collaborate for now... only until she is safe.",
    next: "renegade_catalyst_accepts"
  },

  "renegade_catalyst_accepts": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "A pragmatically sound agreement, Shepard. Mutual cooperation is the sole vector that ensures her survival. To begin tracking, you will need the Shadow Broker. Doctor Liara T'Soni is already operating a clandestine intelligence redoubt on the Citadel.",
    next: "equipment_pedestal_rises"
  }
};
