// data/chapters/1.a-third-chance/5.peso-carne-mortal.js
// Phase 4: The Weight of Mortal Flesh (No Cybernetics)

export const nodesPart5 = {
  "equipment_pedestal_rises": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[A mechanical pedestal rises from the deck in front of me, displaying unmarked composite armor plating, my favorite pistol, and an enclosed helm with a polarized mirror visor.]",
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
    text: "[I strap the composite plates over my torso. My joints ache with unfamiliar friction. Each breath burns without synthetic filters.] The armor... it feels twice as heavy as I remember. My muscles are dragging.",
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
    next: "shepard_pistol_resolve"
  },

  "shepard_pistol_resolve": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I grip the pistol. The cold steel transmits the heavy thud of my own racing pulse.] Flesh and bone...",
    next: "biometrics_console"
  }
};
