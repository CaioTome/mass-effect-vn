// data/chapters/2.dossier-shadow-broker/4.citadel-archives.js
// Act 4: Citadel Archives (The Asari Lore & The Cerberus Bait)

export const nodesPart4 = {
  "archives_arrival": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I walk down the grand archway into the Citadel Archives. Unlike the quiet memorial, this cavernous hall is brimming with urgent academic activity. Dozens of Asari historians, curators, and cultural preservationists work around holographic workstations, cataloging databanks and salvaged Prothean artifacts rescued from the devastation of Thessia.]",
    next: "archives_liara_in_crowd"
  },

  "archives_liara_in_crowd": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[In the center of the research pavilion stands Dr. Liara T'Soni. Wearing her formal academic archival coat, she is consulting with two senior Asari scholars over a cracked Prothean glyph. To the entire galaxy, she is the preeminent authority on ancient civilizations, a decorated Normandy war hero, and an honored historical consultant. Not a single person in this room suspects she commands the greatest spy network in galactic history.]",
    next: "archives_approach_scholar"
  },

  "archives_approach_scholar": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I wait until her colleagues step toward the digital cataloging stacks, then approach her terminal. My heavy armored boots produce a deliberate, rhythmic metallic clank across the polished marble. Liara turns around, greeting me with polite, scholarly courtesy.]",
    next: "archives_liara_greet"
  },

  "archives_liara_greet": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "Can I assist you with an archival query, contractor? Most battlefield salvage telemetry must be logged through C-Sec customs before our team can process historical validation.",
    next: "archives_deliver_bait"
  },

  "archives_deliver_bait": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I slide a encrypted datapad onto her console, leaning in close so my raspy vocal modulator carries only to her ears.] Dr. T'Soni. The Quarian diplomatic shuttle from Rannoch didn't suffer a drive-core rupture in the Terminus. It was ambushed and boarded by Cerberus black-ops. Tali'Zorah has been abducted... and I am here to help you get her back.",
    next: "archives_liara_shock"
  },

  "archives_liara_shock": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[Liara's breath hitches sharply. Her eyes widen in stunned disbelief, and her fingers dig into the edge of the console with white-knuckle force. Her Broker network had flagged the Quarian communications silence as an anomaly, but no mercenary in the galaxy could possibly know that Cerberus was responsible or that Tali was on board.]",
    next: "archives_shepard_insider"
  },

  "archives_shepard_insider": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "The Admiralty Board has been dark for 96 hours. The Council thinks it's a comms breakdown. But Cerberus doesn't kidnap Quarian admirals for ransom, Liara. They're deploying the Illusive Man's neural indoctrination tech to subjugate the Geth consensus. We are running out of time.",
    next: "archives_liara_composure"
  },

  "archives_liara_composure": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "[A master of statecraft, Liara forces her expression into serene academic detachment before the nearby researchers turn their heads. She addresses her colleagues smoothly.] 'Pardon me, scholars. This contractor has submitted anomalous encrypted telemetry from an unmapped Terminus dig site. It requires immediate quarantine review in my private office.'",
    next: "archives_shepard_cleanroom"
  },

  "archives_shepard_cleanroom": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[In a guarded whisper.] This pavilion has active station microphones and civilian ears. If the kidnappers realize the Broker has made contact, Tali will be dead before the hour ends. We need an off-grid clean room. Now.",
    next: "archives_liara_command"
  },

  "archives_liara_command": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "[Her eyes narrow, assessing every line of my armor with unsettling, combat-hardened intensity.] Follow me. Keep your hands where I can see them. One wrong twitch, and you will learn why the Shadow Broker survived the Reapers.",
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
