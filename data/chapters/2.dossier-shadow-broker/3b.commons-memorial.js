// data/chapters/2.dossier-shadow-broker/3b.commons-memorial.js
// Act 3B: Commons Memorial (Plant Wiretap 2 & Joker/EDI Vigil)

export const nodesPart3b = {
  "commons_arrival": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I arrive at the Commons plaza. A solemn hush blankets this wing of the station. In the center of the terrace stands the War Memorial: a towering wall of polished black obsidian, carved with hundreds of thousands of names from every species in Council space.]",
    next: "commons_terminal_approach"
  },

  "commons_terminal_approach": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[The second data terminal sits near the edge of the memorial terrace. But just twenty paces away, standing silently in front of the wall, are two figures I know better than my own reflection: Joker and EDI.]",
    next: "commons_joker_edi_vigil"
  },

  "commons_joker_edi_vigil": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Joker leans heavily on his cane, his flight jacket draped over his shoulders, staring up at a fresh, gilded engraving: 'Commander John Shepard - Hero of the Citadel'. EDI stands close beside him, her holographic fingers resting gently against his shoulder.]",
    next: "commons_joker_voice"
  },

  "commons_joker_voice": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "system",
    text: "JOKER: 'You were the best skipper a pilot could ever ask for, Commander. Always dragging us out of impossible fire... and you didn't even leave us a piece of armor to bury. The Normandy feels empty without you, John.'",
    next: "commons_edi_voice"
  },

  "commons_edi_voice": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "system",
    text: "EDI: 'Jeff... his sacrifice secured the future of all organic and synthetic life. His bravery is woven permanently into my telemetry. He will never truly be gone.'",
    next: "commons_shepard_grief"
  },

  "commons_shepard_grief": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Standing in the shadows of my mercenary helmet, my hands tremble inside my gauntlets. I want nothing more than to walk over, wrap an arm around Joker's shoulder, and tell him his pilot's name was used for my fake papers. But I can't. Not while Cerberus is listening.]",
    interrupt: {
      paragon: {
        targetNode: "commons_paragon_salute",
        requires: { paragon: 1 },
        effects: { paragon: 2 }
      }
    },
    next: "commons_plant_wiretap"
  },

  "commons_paragon_salute": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Paragon Interrupt [Q]: In the quiet shadows of the terrace, I bring my armored right gauntlet to the center of my chest, holding a silent, heartfelt salute toward Joker and EDI. A promise from a ghost to his crew.] Fly steady, Jeff. I'll see you on the flight deck soon.",
    next: "commons_plant_wiretap"
  },

  "commons_plant_wiretap": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I turn toward the public terminal, slip open the lower fiber-optic casing, and seat the second micro-transceiver into the bus. The unit chimes softly as both relays sync across the station.]",
    next: "commons_network_triangulated"
  },

  "commons_network_triangulated": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "system",
    text: "SHADOW BROKER QUANTUM RELAY // DUAL NODE HANDSHAKE COMPLETE. TRIANGULATING ENCRYPTED BIOMETRICS... TARGET IDENTIFIED: DR. LIARA T'SONI. LOCATION: CITADEL ARCHIVES - CULTURAL RESTORATION WING.",
    next: "commons_to_archives"
  },

  "commons_to_archives": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[The Citadel Archives. She's right here in the Presidium ring, cataloging what remains of Asari history. Time to reel in the Shadow Broker.]",
    next: "archives_arrival"
  }
};
