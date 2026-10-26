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
        text: "\"Dr. T'Soni, I have private encrypted telemetry. The Quarian shuttle didn't crash—Tali was abducted by Cerberus.\"",
        targetNode: "archives_deliver_bait_paragon",
        effects: { paragon: 1 }
      },
      {
        text: "\"Drop the academic pretense, Liara. The Admiralty didn't vanish in an accident—Cerberus has Tali, and we're out of time.\"",
        targetNode: "archives_deliver_bait_renegade",
        effects: { renegade: 1 }
      }
    ]
  },

  "archives_deliver_bait_paragon": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I slide an encrypted datapad smoothly onto her console, keeping my voice low and calm.] Dr. T'Soni. The Quarian diplomatic shuttle from Rannoch didn't suffer a drive-core rupture in the Terminus. It was ambushed and boarded by Cerberus black-ops. Tali'Zorah has been abducted... and I am here to help you get her back.",
    next: "archives_liara_shock"
  },

  "archives_deliver_bait_renegade": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[I press the encrypted datapad firmly onto her console, leaning in close so my modulated whisper carries only to her.] Cut the polite scholar routine, Liara. The Quarian diplomatic shuttle didn't suffer an accident. Cerberus boarded the craft and took Tali'Zorah. I know what they're planning... and we don't have time to play academic games.",
    next: "archives_liara_shock"
  },

  "archives_liara_shock": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "shepard",
    text: "[Liara's breath catches. Her composed scholar mask shatters in a fraction of a second, her fingers gripping the edge of the terminal so hard her knuckles turn white. I can see the rapid calculations behind her eyes: she's evaluating whether I'm an extortionist, a Cerberus plant, or an actual lead. But hearing Tali's name tied to Cerberus hit a raw nerve that no amount of academic detachment can hide.]",
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
    next: "archives_liara_cleanroom"
  },

  "archives_liara_cleanroom": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "[The moment the researchers turn their backs, her voice drops to a tense, razor-sharp whisper.] Not another word out here. This pavilion is crawling with C-Sec acoustic monitors and civilian ears. If Cerberus realizes someone has picked up their trail, Tali won't survive the hour.",
    next: "archives_liara_command"
  },

  "archives_liara_command": {
    background: "assets/backgrounds/citadel_archives.jpg",
    present: ["liara_public"],
    speaker: "liara_public",
    text: "[Her eyes narrow with lethal, combat-hardened focus as she gestures toward the private transit corridor.] Follow me to an off-grid room. Keep your hands in plain sight. If this is an ambush or a shakedown, contractor, you will learn firsthand how a member of Shepard's crew deals with threats.",
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
