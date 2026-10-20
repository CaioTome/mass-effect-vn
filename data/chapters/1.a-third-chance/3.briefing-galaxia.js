// data/chapters/1.a-third-chance/3.briefing-galaxia.js
// Phase 3: The Galactic Briefing & Continuous Renegade Interrupt

export const breakIllusionInterrupt = {
  renegade: {
    icon: "assets/icons/renegate.png",
    label: "Break the Illusion [Renegade]",
    requires: { temp: { briefing_questions: 2 } },
    targetNode: "renegade_interrupt_farsa"
  }
};

export const nodesPart3 = {
  "choice_briefing_hub": {
    type: "choice",
    present: ["hackett"],
    speaker: "shepard",
    interrupt: breakIllusionInterrupt,
    choices: [
      {
        text: "What is the Reapers' role now? How did galactic civilization react?",
        effects: { temp: { briefing_questions: 1 } },
        targetNode: "node_reapers_status"
      },
      {
        text: "What about Rannoch? Did the peace between the Quarians and the Geth endure?",
        effects: { temp: { briefing_questions: 1 } },
        targetNode: "node_rannoch_status"
      },
      {
        text: "Did the Genophage cure hold? Are the Krogan stabilizing under Wrex?",
        effects: { temp: { briefing_questions: 1 } },
        targetNode: "node_krogans_status"
      },
      {
        text: "What of the Mass Relays? Did the ancient Leviathans make a move?",
        effects: { temp: { briefing_questions: 1 } },
        targetNode: "node_relays_status"
      },
      {
        text: "What about me, Admiral? How in the hell am I breathing... and what am I doing here?",
        requires: { temp: { briefing_questions: 4 } },
        showLocked: true,
        targetNode: "normal_shepard_question_alive"
      }
    ]
  },

  "node_reapers_status": {
    present: ["hackett"],
    speaker: "hackett",
    text: "The Reapers are actively assisting in galactic reconstruction. Capital ships are hauling raw alloys, stabilizing planetary atmospheres, and restoring orbital platforms and the relays. Citadel fleets maintain sentry lines, but peace holds.",
    interrupt: breakIllusionInterrupt,
    next: "choice_briefing_hub"
  },

  "node_rannoch_status": {
    present: ["hackett"],
    speaker: "hackett",
    text: "At an exemplary pace. To dispel historical dread and facilitate formal entry into the Citadel community, the Geth voluntarily underwent comprehensive demilitarization. Their platforms now operate in ecological engineering and agricultural synthesis alongside Quarian engineers.",
    interrupt: breakIllusionInterrupt,
    next: "choice_briefing_hub"
  },

  "node_krogans_status": {
    present: ["hackett"],
    speaker: "hackett",
    text: "Urdnot Wrex still holds the clans with steady authority. A population boom is underway, but with star charts provided by the Reapers, a safe expansion is being channeled through peaceful diplomacy.",
    interrupt: breakIllusionInterrupt,
    next: "choice_briefing_hub"
  },

  "node_relays_status": {
    present: ["hackett"],
    speaker: "hackett",
    text: "Nearly a quarter of the Relay network has already been reactivated through combined Alliance-Reaper repair flotillas. As for the Leviathans, they remain silent.",
    interrupt: breakIllusionInterrupt,
    next: "choice_briefing_hub"
  }
};
