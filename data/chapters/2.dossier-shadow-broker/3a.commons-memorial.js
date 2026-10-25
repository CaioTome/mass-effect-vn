// data/chapters/2.dossier-shadow-broker/3a.commons-memorial.js
// Act 3A: Commons Memorial (Plant Wiretap 1 & Joker/EDI Vigil)

export const nodesPart3a = {
  "commons_arrival": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[The monorail doors slide open at the Commons plaza. A solemn, reverent silence hangs over the terrace. In the center of the gardens stands the War Memorial: a colossal curved wall of polished black obsidian, etched with hundreds of thousands of names from every species that fought in the Reaper War.]",
    next: "commons_terminal_approach"
  },

  "commons_terminal_approach": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[I spot the public data terminal near the reflection pool. But just twenty paces away, standing quietly in front of the obsidian wall, are two figures I would recognize anywhere in the galaxy: Jeff 'Joker' Moreau and EDI.]",
    next: "commons_joker_edi_vigil"
  },

  "commons_joker_edi_vigil": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[Joker leans heavily on his carbon-fiber cane, his flight jacket pulled tight against the station chill. His eyes are fixed on a fresh, gilded engraving in the stone: 'Commander John Shepard - Hero of the Citadel'. EDI stands beside him, her holographic fingers resting gently on his shoulder.]",
    next: "commons_joker_voice"
  },

  "commons_joker_voice": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "joker",
    text: "You were the best skipper a pilot could ever ask for, Commander. Always dragging us out of impossible fire... and you didn't even leave us a piece of armor to bury. The Normandy feels hollow without you, John. Every time I sit in the cockpit, I still wait for you to tell me to spool the drive.",
    next: "commons_edi_voice"
  },

  "commons_edi_voice": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "edi",
    text: "Jeff... his sacrifice secured the survival of all organic and synthetic life in this galaxy. His tactical decisions and his humanity are permanently woven into my cognitive core. He will never truly be gone.",
    next: "commons_shepard_grief"
  },

  "commons_shepard_grief": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[Behind my polarized visor, my throat tightens with an overwhelming ache. I want nothing more than to step forward, drop my mercenary helmet, and clasp Joker on the shoulder. But I can't. Not while Cerberus is listening, and not while Tali is in chains.]",
    interrupt: {
      paragon: {
        targetNode: "commons_paragon_salute",
        effects: { paragon: 2 }
      }
    },
    next: "commons_plant_wiretap"
  },

  "commons_paragon_salute": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[Paragon Interrupt [Q]: Standing in the quiet shadows of the terrace, I bring my armored right gauntlet to the center of my chest, holding a silent, heartfelt salute toward Joker and EDI.] Fly steady, Jeff. Watch over her, EDI. I'll see you on the flight deck soon.",
    next: "commons_plant_wiretap"
  },

  "commons_plant_wiretap": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[I turn toward the public data terminal, slide open the maintenance casing with my combat blade, and snap the first micro-wiretap into the optical nexus.]",
    next: "commons_network_50"
  },

  "commons_network_50": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "system",
    text: "SHADOW BROKER SUBNET // WIRE-TAP 1/2 ONLINE. RECEPTION AT 50%. SECOND NEXUS REQUIRED: PRESIDIUM EMBASSIES JUNCTION TO COMPLETE FULL TRIANGULATION.",
    next: "commons_to_presidium_transit"
  },

  "commons_to_presidium_transit": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[One tap placed. I leave the solemn silence of the memorial behind and take the express elevator up into the lush, pristine terrace of the Presidium Embassies.]",
    next: "presidium_arrival"
  }
};
