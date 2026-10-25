// data/chapters/2.dossier-shadow-broker/4.citadel-archives.js
// Act 4: Citadel Archives (The Asari Lore & The Cerberus Bait)

export const nodesPart4 = {
  "archives_arrival": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I step through the archway into the Citadel Archives. Unlike the somber memorial, this wing is humming with academic activity. Holographic displays of Prothean ruins and Thessian architecture float between white pillars as dozens of Asari curators catalog recovered data.]",
    next: "archives_liara_spotted"
  },

  "archives_liara_spotted": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[There she is. Dr. Liara T'Soni. Wearing her scholarly archival coat, surrounded by colleagues, inspecting a salvaged Prothean datapad. To the public, she is the galaxy's preeminent archaeologist and a decorated war hero. To me, she is the Shadow Broker... and my dearest friend.]",
    next: "archives_approach"
  },

  "archives_approach": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I wait until two junior curators step away toward the restoration stacks, then approach her terminal. Heavy armored boots clank on the marble floor. Liara looks up, offering a polite, professional academic smile.]",
    next: "archives_liara_greet"
  },

  "archives_liara_greet": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "Yes? Can I help you with a recovery docket, contractor? Most salvage manifests must clear the central C-Sec customs terminal before we can archive the telemetry.",
    next: "archives_deliver_bait"
  },

  "archives_deliver_bait": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I lean in, speaking low through the electronic rasp of my vocal modulator.] Dr. T'Soni. The Quarian diplomatic shuttle from Rannoch didn't suffer drive-core failure in the Terminus. It was ambushed by Cerberus black-ops. Tali'Zorah is a captive.",
    next: "archives_liara_shock"
  },

  "archives_liara_shock": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Liara's breath hitches. Her fingers tighten around the edges of her datapad with white-knuckle intensity. The academic smile evaporates, replaced by the deadly, razor-sharp focus of the Shadow Broker.]",
    next: "archives_shepard_insider"
  },

  "archives_shepard_insider": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "The Admiralty Board has been dark for 96 hours. The Council thinks it's a communications blackout. But Cerberus doesn't kidnap Quarian admirals for ransom, Liara. They're after neural control of the Geth.",
    next: "archives_liara_composure"
  },

  "archives_liara_composure": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[A master of statecraft, Liara forces her expression into serene academic calm before any nearby curator notices. She turns smoothly to her colleagues.] 'Excuse me, colleagues. This contractor has brought critical telemetry regarding an unmapped excavation that requires immediate quarantine review in my office.'",
    next: "archives_shepard_warning"
  },

  "archives_shepard_warning": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[In a guarded whisper.] This pavilion is crawling with C-Sec diagnostic sensors and civilian ears. If the kidnappers realize the Broker has made contact, Tali will be dead before the hour ends. We need an off-grid clean room. Now.",
    next: "archives_liara_command"
  },

  "archives_liara_command": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Her eyes narrow, assessing every centimeter of my posture with unsettling familiarity.] Follow me. Keep your hands where I can see them. One wrong twitch, and you will learn why the Shadow Broker survived the Reapers.",
    next: "archives_depart_to_sanctum"
  },

  "archives_depart_to_sanctum": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[She leads me into a private transit lift, bypassing the commercial corridors entirely. The lift climbs high into the Silversun Strip... and stops at a penthouse entrance that turns my blood to ice.]",
    next: "penthouse_arrival"
  }
};
