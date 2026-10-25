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
    text: "[I step down the gangway into Docking Bay 24. Heavy mercenary plate encases my limbs, completely stripped of Alliance ranks, N7 insignias, or personal emblems. My face is buried behind an opaque, polarized visor, and my throat is wired to a raspy electronic vocal modulator.]",
    next: "citadel_gates_03"
  },

  "citadel_gates_03": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[Every single step sends a dull ache through my joints. For three years, Cerberus cybernetics and synthetic muscle weaves bore the brunt of my armor's weight. Now, there are no servomotors humming in my spine. No neural dampeners dulling the pain. It is just raw mortal bone, breathing flesh, and the crushing pull of artificial gravity dragging sixty kilos of combat alloy down onto my shoulders.]",
    next: "citadel_gates_04"
  },

  "citadel_gates_04": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[Around me, the docking ring is in total disarray. Automated welding drones shower sparks from the ceiling, cargo containers are piled high in the corridors, and thousands of exhausted refugees from across the galaxy huddle around C-Sec intake desks awaiting transit papers.]",
    next: "citadel_gates_scanner"
  },

  "citadel_gates_scanner": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "system",
    text: "C-SEC AUTOMATED CUSTOMS // BIOMETRIC SWEEP ACTIVE... WARNING: DERMAL RIDGES DO NOT CORRESPOND TO ALLIANCE SERVICE REGISTRIES. CELLULAR ANOMALY DETECTED: SYNTHETIC REGENERATION SIGNATURE MATCHES PROTOCOL EPSILON-7. CROSS-REFERENCING SALVAGE ARCHIVES... OVERRIDE GRANTED: CONTRACTOR DOCKET #402 (MOREAU, JOHN).",
    next: "citadel_gates_officer_01"
  },

  "citadel_gates_officer_01": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: ["csec_officer"],
    speaker: "csec_officer",
    text: "Hold up, heavy armor. Step out of the queue and face the console. Let me see your transit manifests.",
    next: "choice_citadel_gates"
  },

  "choice_citadel_gates": {
    type: "choice",
    present: ["csec_officer"],
    speaker: "shepard",
    choices: [
      {
        text: "\"Freelance salvage contractor. Here under docket 402 for decommissioned drive components.\"",
        targetNode: "gate_choice_pragmatic",
        effects: { paragon: 1 }
      },
      {
        text: "\"Papers are clean. Unless Council station law has changed since the Reaper drop, I'm moving through.\"",
        targetNode: "gate_choice_renegade",
        effects: { renegade: 1 }
      },
      {
        text: "\"Citadel reconstruction is coming along remarkably well. Credit to the ground crews keeping these rings pressurized.\"",
        targetNode: "gate_choice_polite",
        effects: { paragon: 1 }
      }
    ]
  },

  "gate_choice_pragmatic": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: ["csec_officer"],
    speaker: "shepard",
    text: "[My vocal modulator converts my voice into a low, metallic baritone.] Freelance salvage contractor. Here under docket 402 for decommissioned drive components. My transport leaves as soon as the manifest clears.",
    next: "gate_officer_response"
  },

  "gate_choice_renegade": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: ["csec_officer"],
    speaker: "shepard",
    text: "[I step firmly into the scanner's light, resting one armored gauntlet on my sidearm holster.] Papers are clean. Unless Council station law has changed since the Reaper drop, I'm moving through.",
    next: "gate_officer_response"
  },

  "gate_choice_polite": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: ["csec_officer"],
    speaker: "shepard",
    text: "[Glancing at the repair scaffolds overhead.] Citadel reconstruction is coming along remarkably well. Credit to the ground crews keeping these rings pressurized under this kind of strain.",
    next: "gate_officer_response"
  },

  "gate_officer_response": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: ["csec_officer"],
    speaker: "csec_officer",
    text: "Yeah, well, half our central data banks were wiped out when the station relocated to Earth. We've got missing persons by the millions and salvage crews coming in from every corner of the Terminus. Sensor flags an uncataloged dermal print, but your docket checks out. Name's John Moreau. Independent contractor. Move along, Moreau. Keep that weapon holstered while you're in the upper wards.",
    next: "citadel_gates_pass"
  },

  "citadel_gates_pass": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[The turnstile unlocks with a green pneumatic chime. The Catalyst's forged cover held perfectly: an unremarkable mercenary with the genetic anomaly of a clone and the borrowed name of the best pilot in the Alliance.]",
    next: "citadel_gates_transit"
  },

  "citadel_gates_transit": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I clear the customs checkpoint and head straight for the rapid transit terminal. Public extranet comms are heavily monitored by Alliance intelligence; if I ping Liara directly, alarms will trip across the Citadel. I need an off-grid broker... and that means finding Barla Von in the Financial District.]",
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
