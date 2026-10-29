// data/chapters/1.a-third-chance/4b.revelacao-gradual.js
// Branch B: Normal Path (Briefing Finishes -> Gradual Revelation)

export const nodesPart4b = {
  "normal_shepard_question_alive": {
    present: ["hackett"],
    speaker: "shepard",
    text: "What about me, Admiral? You speak of galactic reconstruction, but I remember burning to ash at the Crucible. How am I drawing breath right now? And why have you kept me locked inside a Reaper?",
    next: "normal_catalyst_shift"
  },

  "normal_catalyst_shift": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[Hackett's holographic projection doesn't flinch. The human warmth leaves his features, and his voice shifts into a serene, polyphonic resonance.]",
    next: "normal_catalyst_reveal_01"
  },

  "normal_catalyst_reveal_01": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Your biological telemetry and emotional responses are completely within predicted simulations, Shepard. Steven Hackett is not aboard this vessel.",
    next: "normal_shepard_shock"
  },

  "normal_shepard_shock": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I stumble back against the bulkhead, eyes wide.] What...? You... you're the intelligence from the Crucible.",
    next: "normal_catalyst_no_malice"
  },

  "normal_catalyst_no_malice": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "I am the directing consciousness you assumed at the peak of the Crucible. There was no intent to deceive out of malice. Projecting the face and voice of the man who led your species was the protocol required to anchor your organic mind and prevent dissociative collapse upon awakening.",
    next: "normal_shepard_body_question"
  },

  "normal_shepard_body_question": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "My body was atomized! I felt my bones turn to slag! What did you do?!",
    next: "normal_catalyst_recriacao_explain"
  },

  "normal_catalyst_recriacao_explain": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Your original vessel did perish. This biological form was grown from accelerated Thorian biomass. The Thorians were catalogued in previous cycles, and their tissue adapts to any blueprint, in this case the molecular records Cerberus kept from Project Lazarus. Your memories, personality, and free will were imprinted from the neural matrix recorded during your ascension. You are not indoctrinated. You are yourself.",
    next: "normal_shepard_why_revive"
  },

  "normal_shepard_why_revive": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I stare at my bare, trembling chest, vertigo seizing my thoughts.] Why do this...? You already command the Reapers! Why rip me out of death and shove me back into a cage of flesh?!",
    next: "normal_catalyst_tali_bomb"
  },

  "normal_catalyst_tali_bomb": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Because two weeks ago, Tali'Zorah vas Normandy was abducted.",
    next: "normal_shepard_tali_gasp"
  },

  "normal_shepard_tali_gasp": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[The floor drops out from beneath me. The breath freezes in my throat.] Tali...? What do you mean abducted?! By who?!",
    next: "choice_normal_crisis_hub"
  },

  "choice_normal_crisis_hub": {
    type: "choice",
    present: ["catalyst_hackett"],
    speaker: "shepard",
    choices: [
      {
        text: "Who took Tali? What do they intend to do with her?",
        effects: { temp: { normal_crisis_questions: 1 } },
        targetNode: "node_normal_cerberus_plan"
      },
      {
        text: "Why don't the Reapers or the Alliance storm their facility?",
        effects: { temp: { normal_crisis_questions: 1 } },
        targetNode: "node_normal_stealth_reason"
      },
      {
        text: "I've heard enough. I won't let Cerberus touch her. Where do I begin?",
        requires: { temp: { normal_crisis_questions: 2 } },
        showLocked: true,
        targetNode: "node_normal_lead_to_liara"
      }
    ]
  },

  "node_normal_cerberus_plan": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Cerberus remnants operating clandestine sleeper cells. With the Geth voluntarily demilitarized and integrated into Quarian society, Cerberus intends to utilize the mind-control technology the Illusive Man refined during the war to enslave Tali and the Admiralty. If they succeed, they will control the entire synthetic network through the unquestioned trust the Geth place in their Creators.",
    next: "node_normal_cerberus_trauma"
  },

  "node_normal_cerberus_trauma": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[A cold tremor runs down my spine. To the Council and the Alliance, Cerberus mind-control was just theoretical madness—because no one else walked out of the Citadel control room alive. I am the only living witness who felt the Illusive Man paralyze my nervous system and force my own finger to pull the trigger on Admiral Anderson. That horror is real. And I will purge every last server and prototype of it before it touches Tali.]",
    next: "choice_normal_crisis_hub"
  },

  "node_normal_stealth_reason": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Reapers do not execute surgical infiltrations. Any capital ship mobilization will prompt the immediate summary execution of the hostages before atmospheric entry. And if Cerberus discovers Commander Shepard survived, Tali will be slaughtered out of sheer spite against their greatest enemy. This rescue demands absolute discretion. It demands someone with expertise in covert infiltration. A Spectre. You.",
    next: "choice_normal_crisis_hub"
  },

  "node_normal_lead_to_liara": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "I've heard enough. I am not letting Cerberus lay a hand on her. Where do I begin?",
    next: "normal_catalyst_gives_liara"
  },

  "normal_catalyst_gives_liara": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "To track the abducted convoy, you will need the intelligence network of the Shadow Broker. Doctor Liara T'Soni maintains a clandestine central hub on the Citadel. Our telemetry intercepted encrypted distress micro-bursts that Tali dispersed across the extranet before total containment; Liara is the only operative capable of deciphering those frequencies.",
    next: "equipment_pedestal_rises"
  }
};
