// data/chapters/1.a-third-chance/5.peso-carne-mortal.js
// Phase 4: The Weight of Mortal Flesh (No Cybernetics)

export const nodesPart5 = {
  "equipment_pedestal_rises": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[A mechanical pedestal rises from the deck in front of me, displaying civilian attire with lightweight integrated armor weave, my favorite pistol, and a high-collared jacket with an electronic vocal modulator.]",
    next: "equipment_transition"
  },

  "equipment_transition": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Your operational gear has been synthesized for black-ops stealth.",
    next: "shepard_armor_realization"
  },

  "shepard_armor_realization": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I pull the reinforced jacket over my torso. The integrated armor weave is light, but my muscles feel every movement without synthetic assist.] The gear... it feels heavier than I remember without servomotors. My body is doing all the work.",
    next: "catalyst_flesh_speech"
  },

  "catalyst_flesh_speech": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "An accurate biological perception. The Thorian synthesis generated pure organic tissue. You no longer possess cybernetic implants. No dermal sub-mesh, no titanium bone weave, no synthetic enhancements from Project Lazarus.",
    next: "catalyst_flesh_warning"
  },

  "catalyst_flesh_warning": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Some would say you are more original now than when Cerberus remade you. But it carries a price: take a high-velocity tungsten slug without shields, and you will bleed and perish like any other.",
    next: "choice_flesh_reaction"
  },

  "choice_flesh_reaction": {
    type: "choice",
    present: ["catalyst_hackett"],
    speaker: "shepard",
    choices: [
      {
        text: "[Grip the pistol firmly.] Flesh and bone will be enough. I fought Saren without any cybernetics, I can deal with Cerberus.",
        targetNode: "node_flesh_confident"
      },
      {
        text: "[Examine the integrated armor weave.] No cybernetic shields or titanium bone weave. One mistake and I bleed out like any other soldier.",
        targetNode: "node_flesh_cautious"
      },
      {
        text: "[Take a deep, raw breath.] I'm pure human again. Cerberus rebuilt me almost like a cyborg, but now I'm fully human.",
        targetNode: "node_flesh_human"
      }
    ]
  },

  "node_flesh_confident": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Confidence supported by tactical capability. Your resolve was the defining factor that dismantled the reapers armada.",
    next: "biometrics_console"
  },

  "node_flesh_cautious": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "A pragmatic calculation. Stealth and precision are your only armor until the Quarian leadership is secured.",
    next: "biometrics_console"
  },

  "node_flesh_human": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "The essence that defined humanity resistance. A fragile biology driven by an unyielding spirit.",
    next: "biometrics_console"
  }
};
