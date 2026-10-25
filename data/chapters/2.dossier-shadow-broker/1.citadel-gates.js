// data/chapters/2.dossier-shadow-broker/1.citadel-gates.js
// Act 1: Arrival at Citadel Gates (The Masked Infiltrator)

export const nodesPart1 = {
  "citadel_gates_01": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[The civilian transport shudders violently as docking clamps bite into its hull with a deafening hydraulic screech. The smell hits me first: burning ozone, industrial sealant, and the dry, recycled metallic tang of station air. Two months after burning alive over the Crucible... I am back on the Citadel.]",
    next: "citadel_gates_02"
  },

  "citadel_gates_02": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I step down the gangway into Docking Bay 24. I wear civilian travel clothes reinforced with lightweight integrated armor weave—discreet, comfortable, and completely inconspicuous. No Alliance insignias, no heavy battle plate, nothing to draw an unwanted glance from the crowd.]",
    next: "citadel_gates_03"
  },

  "citadel_gates_03": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I take a measured breath, taking in the bustling corridors. Two months ago, the Crucible fired above Earth, and the war was won. Now the Citadel is healing, its vast ring humming with reconstruction drones and the stubborn resilience of countless species rebuilding together.]",
    next: "citadel_gates_04"
  },

  "citadel_gates_04": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[Around me, automated welding drones shower sparks from the ceiling, cargo containers are piled along the concourses, and thousands of commuters and refugees move steadily toward the automated customs checkpoints.]",
    next: "citadel_gates_scanner"
  },

  "citadel_gates_scanner": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "system",
    text: "C-SEC AUTOMATED CUSTOMS // BIOMETRIC SWEEP ACTIVE... BIOMETRICS VERIFIED: NORMAL ORGANIC PROFILE. TRANSIT REGISTRY: INDEPENDENT CONTRACTOR DOCKET #402 (MOREAU, JOHN). CLEARANCE: GRANTED. WELCOME TO THE CITADEL.",
    next: "citadel_gates_pass"
  },

  "citadel_gates_pass": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[The turnstile unlocks with a soft green chime. No alarms, no security flags, no questioning officers. The forged credentials hold up seamlessly, allowing me to walk straight through the checkpoint like any ordinary traveler blending into the flow.]",
    next: "citadel_gates_transit"
  },

  "citadel_gates_transit": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I clear the automated checkpoint and head straight for the rapid transit terminal. Public extranet comms are heavily monitored by Alliance intelligence; if I ping Liara directly, alarms will trip across the Citadel. I need an off-grid broker... and that means finding Barla Von in the Financial District.]",
    next: "citadel_transit_to_financial"
  },

  "citadel_transit_to_financial": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: [],
    speaker: "shepard",
    text: "[I step up to the rapid transit terminal and hail an automated skycar. The craft lifts into the aerial traffic corridors of the station, leaving behind the industrial docks and banking smoothly toward the gleaming corporate towers of the Financial District.]",
    next: "barla_von_arrival"
  }
};
