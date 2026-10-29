// data/chapters/2.dossier-shadow-broker/4.citadel-archives.js
// Act 4: Citadel Archives (The Asari Lore & The Cerberus Bait)

export const nodesPart4 = {
  "archives_arrival": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: [],
    speaker: "shepard",
    text: "[I step through the security stanchions into the Citadel Archives. A vast, vaulted hall opens before me, drenched in the luminous azure glow of dozens of floating holographic displays.]",
    next: "archives_projection_hall"
  },

  "archives_projection_hall": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: [],
    speaker: "shepard",
    text: "[Across the wide chamber, towering blue projections display the known history of galactic civilization: 3D stellar charts of lost colony worlds, architectural reconstructions of ruined Thessian temples, fleet engagement logs from the Battle of Earth, and recovered Prothean archives. Scholars of every species—Asari historians, Turian tacticians, Salarian analysts, and Human curators—work side by side at holographic consoles, methodically cataloging what was preserved from the war and organizing records that still need to be restored.]",
    next: "archives_shepard_projection"
  },

  "archives_shepard_projection": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[Near the center of the hall, isolated beneath a private data arch, one projection stands out from all the rest. Floating in crisp blue light is a rotating hologram of the SSV Normandy, accompanied by battle telemetry from Virmire, the Collector Base, and London—and a towering holographic bust of Commander Shepard. Standing directly beneath it, watching the scrolling records in contemplative silence, is Dr. Liara T'Soni.]",
    next: "archives_ghost_of_myself"
  },

  "archives_ghost_of_myself": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I freeze in the azure wash of the display, my pulse drumming in my ears. Liara is possibly updating my biography... What a strange, surreal feeling. The ghost of myself. Standing here in flesh and blood, watching a friend who admired me record my memory into the permanent history of the galaxy... while I walk unnoticed among the living.]",
    next: "archives_approach_scholar"
  },

  "archives_approach_scholar": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I take a steady breath, compose myself, and step toward her console. My footsteps are quiet and deliberate across the polished marble. Liara senses the presence, closing the private dossier file with a subtle gesture, and turns around to greet me with calm, academic professionalism.]",
    next: "archives_liara_greet"
  },

  "archives_liara_greet": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "Can I assist you with an archival query, contractor? Most battlefield salvage telemetry must be logged through C-Sec customs before our team can process historical validation.",
    next: "choice_archives_approach"
  },

  "choice_archives_approach": {
    type: "choice",
    present: ["liara_public"],
    speaker: "shepard",
    choices: [
      {
        text: "Dr. T'Soni, I recovered black-box telemetry from an unmapped Terminus sector. Vessel registry... vas Normandy. Read the pad.",
        targetNode: "archives_deliver_bait_paragon",
        effects: { paragon: 1 }
      },
      {
        text: "Don't say a word aloud, Doctor. Look at the encrypted screen on this datapad before C-Sec monitors flag us.",
        targetNode: "archives_deliver_bait_renegade",
        effects: { renegade: 1 }
      }
    ]
  },

  "archives_deliver_bait_paragon": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I slide an encrypted datapad smoothly onto her console, angling the polarized screen so only her eyes can read the decrypted dossier: TALI'ZORAH & QUARIAN ADMIRALTY // ABDUCTED BY CERBERUS.] Dr. T'Soni. I recovered black-box telemetry from an unmapped Terminus sector. Vessel registry... vas Normandy. It wasn't a drive-core rupture. Read the screen.",
    next: "archives_liara_shock"
  },

  "archives_deliver_bait_renegade": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I press the encrypted datapad flat onto her console, shielding the polarized display from the surrounding scholars so only she sees the flashing header: TALI'ZORAH & QUARIAN ADMIRALTY // ABDUCTED BY CERBERUS.] Don't say a word aloud, Doctor. The Rannoch shuttle didn't suffer an accident. Read the screen before C-Sec acoustic monitors flag us.",
    next: "archives_liara_shock"
  },

  "archives_liara_shock": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[Liara's breath catches as her eyes scan the encrypted text on the pad. Her composed scholar mask shatters for a fraction of a second, her fingers gripping the edge of the terminal so hard her knuckles turn white. I can see the rapid calculations behind her eyes: evaluating whether I'm an extortionist, a trap, or a genuine lead. Seeing Tali's name next to Cerberus hit a raw nerve that no academic detachment can hide.]",
    next: "archives_shepard_insider"
  },

  "archives_shepard_insider": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I tap the secondary file on the datapad display—the neural schematic from Cronos Station—keeping my modulated voice barely above a breath.] Ninety-six hours dark. The Council thinks it's a comms breakdown. You and I both know what that schematic on the screen means for the Geth consensus if we don't move now.",
    next: "archives_liara_composure_action"
  },

  "archives_liara_composure_action": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[A master of statecraft, Liara locks down the datapad screen and forces her expression into serene academic detachment before the nearby researchers turn their heads. She addresses her colleagues smoothly.]",
    next: "archives_liara_composure"
  },

  "archives_liara_composure": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "Pardon me, scholars. This contractor has submitted anomalous encrypted telemetry from an unmapped Terminus dig site. It requires immediate quarantine review in my private office. Follow me, contractor.",
    next: "archives_to_penthouse_transit"
  },

  "archives_to_penthouse_transit": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: [],
    speaker: "shepard",
    text: "[She leads me into a private express transit lift, bypassing all commercial corridors. The lift ascends past the Presidium into the heights of the Silversun Strip... and stops at a luxury penthouse door that stops my breath cold.]",
    next: "penthouse_arrival"
  }
};
