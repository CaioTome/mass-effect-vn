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
    text: "[Near the center of the hall, isolated beneath a private data arch, one projection stands out from all the rest. Floating in crisp blue light is a rotating hologram of the SSV Normandy, accompanied by battle telemetry from Virmire, the Collector Base, and London—and a towering holographic bust of Commander John Shepard. Standing directly beneath it, watching the scrolling records in contemplative silence, is Dr. Liara T'Soni.]",
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
    next: "archives_deliver_bait"
  },

  "archives_deliver_bait": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I slide an encrypted datapad onto her console, keeping my voice low so it carries only to her ears.] Dr. T'Soni. The Quarian diplomatic shuttle from Rannoch didn't suffer a drive-core rupture in the Terminus. It was ambushed and boarded by Cerberus black-ops. Tali'Zorah has been abducted... and I am here to help you get her back.",
    next: "archives_liara_shock"
  },

  "archives_liara_shock": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[Liara's breath hitches sharply. Her eyes widen in stunned disbelief, and her fingers dig into the edge of the console with white-knuckle force. Her Broker network had flagged the Quarian communications silence as an anomaly, but no mercenary in the galaxy could possibly know that Cerberus was responsible or that Tali was on board.]",
    next: "archives_shepard_insider"
  },

  "archives_shepard_insider": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "The Admiralty Board has been dark for 96 hours. The Council thinks it's a comms breakdown. But Cerberus doesn't kidnap Quarian admirals for ransom, Liara. They're deploying the Illusive Man's neural indoctrination tech to subjugate the Geth consensus. We are running out of time.",
    next: "archives_liara_composure"
  },

  "archives_liara_composure": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "[A master of statecraft, Liara forces her expression into serene academic detachment before the nearby researchers turn their heads. She addresses her colleagues smoothly.] 'Pardon me, scholars. This contractor has submitted anomalous encrypted telemetry from an unmapped Terminus dig site. It requires immediate quarantine review in my private office.'",
    next: "archives_shepard_cleanroom"
  },

  "archives_shepard_cleanroom": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[In a guarded whisper.] This pavilion has active station microphones and civilian ears. If the kidnappers realize the Broker has made contact, Tali will be dead before the hour ends. We need an off-grid clean room. Now.",
    next: "archives_liara_command"
  },

  "archives_liara_command": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "[Her eyes narrow, assessing me with unsettling, combat-hardened intensity.] Follow me. Keep your hands where I can see them. One wrong twitch, and you will learn why the Shadow Broker survived the Reapers.",
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
