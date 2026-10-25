// data/chapters/2.dossier-shadow-broker/1.citadel-gates.js
// Act 1: Arrival at Citadel Gates (The Masked Infiltrator)

export const nodesPart1 = {
  "citadel_gates_01": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[The transport shuttle shudders as docking clamps latch onto its landing struts with a sharp hydraulic clang. Recycled air and the sharp sting of ozone seep into the cabin. Two months after the Battle of Earth, I am back on the Citadel.]",
    next: "citadel_gates_02"
  },

  "citadel_gates_02": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I step down the ramp into Docking Bay 24. Heavy mercenary plating encases my limbs, bearing no Alliance rank, no N7 stripes, no personal badges. My face is locked behind an opaque polarized visor, and my voice is slaved to an electronic modulator.]",
    next: "citadel_gates_03"
  },

  "citadel_gates_03": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[Every step feels brutally real. No cybernetic servomotors hum in my joints. No synthetic weaves cushion the impact. It's just my own raw muscle, my own pulse thumping in my throat, and the weight of sixty kilos of combat alloy pressing down on mortal bone.]",
    next: "citadel_gates_04"
  },

  "citadel_gates_04": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[Ahead lies the primary C-Sec inspection gate. Yellow holographic warning banners flicker erratically. The station is in chaos—docks packed with cargo crates, construction droids welding overhead beams, and tired refugees awaiting transit visas.]",
    next: "citadel_gates_scanner"
  },

  "citadel_gates_scanner": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "system",
    text: "C-SEC AUTOMATED SCANNER // BIOMETRIC SWEEP ACTIVE... RETINAL MAP: UNREGISTERED. DERMAL RIDGES: MATCH ZERO ALLIANCE MILITARY ARCHIVES. CROSS-REFERENCING RECOVERY DOCKETS... CLEARANCE GRANTED: INDEPENDENT SALVAGE CONTRACTOR.",
    next: "citadel_gates_officer_01"
  },

  "citadel_gates_officer_01": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "system",
    text: "C-SEC OFFICER: 'Hold up there, heavy plating. Step toward the terminal. Let me see your transit manifests.'",
    next: "choice_citadel_gates"
  },

  "choice_citadel_gates": {
    type: "choice",
    present: [],
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
        text: "\"Citadel reconstruction is coming along remarkably well. Credit to the ground crews.\"",
        targetNode: "gate_choice_polite",
        effects: { paragon: 1 }
      }
    ]
  },

  "gate_choice_pragmatic": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[My modulator turns my voice into a flat, gravelly baritone.] Freelance salvage contractor. Here under docket 402 for decommissioned drive components. My transport leaves as soon as the manifest clears.",
    next: "gate_officer_response"
  },

  "gate_choice_renegade": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I step squarely into the scanner's light, resting one armored gauntlet against my sidearm.] Papers are clean. Unless Council station law has changed since the Reaper drop, I'm moving through.",
    next: "gate_officer_response"
  },

  "gate_choice_polite": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[Glancing up at the scaffolding and the repair teams working on the outer hull.] Citadel reconstruction is coming along remarkably well. Credit to the ground crews keeping these rings pressurized.",
    next: "gate_officer_response"
  },

  "gate_officer_response": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "system",
    text: "C-SEC OFFICER: 'Yeah, well, half our central databases are still fried and half the galaxy is looking for lost relatives. Scanners say you're John Moreau, independent contractor. Clear for the commercial wards. Keep that weapon holstered while you're in the Presidium.'",
    next: "citadel_gates_pass"
  },

  "citadel_gates_pass": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[The turnstile clanks open with a green chime. The Catalyst's forged credentials worked without a single hitch. I step past the barrier and into the transit corridor.]",
    next: "citadel_gates_thought"
  },

  "citadel_gates_thought": {
    background: "assets/backgrounds/citadel_docks.jpg",
    present: [],
    speaker: "shepard",
    text: "[I'm on the Citadel as a ghost. The galaxy believes John Shepard died holding the line at the Crucible. If I try to reach Liara through extranet comms, Council monitors will flag it in seconds. I need an underground channel... and that means Barla Von.]",
    next: "barla_von_arrival"
  }
};
