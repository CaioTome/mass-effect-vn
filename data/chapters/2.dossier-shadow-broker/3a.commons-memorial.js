// data/chapters/2.dossier-shadow-broker/3a.commons-memorial.js
// Act 3A: Commons Memorial (Plant Wiretap 1 & Joker/EDI Vigil)

export const nodesPart3a = {
  "commons_arrival": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[The skycar touches down at the Commons transit platform. A solemn, reverent silence hangs over the terrace. In the center of the gardens stands the War Memorial: a colossal curved wall of polished black obsidian, etched with hundreds of thousands of names from every species that fought in the Reaper War.]",
    next: "commons_scene_overview"
  },

  "commons_scene_overview": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "shepard",
    text: "[I step onto the terrace, taking in the scene. Standing directly in front of the obsidian wall are Flight Lieutenant Jeff 'Joker' Moreau and EDI. Joker leans heavily on his support cane, staring up in silence at my gilded name, while EDI stands at his shoulder, offering quiet comfort. Across the courtyard, an Alliance Marine honor guard stands vigil over the plaza, while mourners leave commemorative datashards at the wall. The public terminal for the wiretap is just twenty paces away near the reflection pool.]",
    next: "choice_commons_action"
  },

  "choice_commons_action": {
    type: "choice",
    present: ["joker", "edi"],
    speaker: "shepard",
    choices: [
      {
        text: "\"Plant the micro-wiretap and leave immediately.\"",
        targetNode: "commons_choice_leave_quick",
        effects: { renegade: 1 }
      },
      {
        text: "\"Stay a moment longer and observe the vigil.\"",
        targetNode: "commons_choice_stay_longer",
        effects: { paragon: 1 }
      }
    ]
  },

  "commons_choice_leave_quick": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "shepard",
    text: "[Seeing them alive and together brings a quiet relief, but every second I linger is a risk. I have to stay focused—Tali's life depends on reaching the Shadow Broker without blowing my cover. I keep my head down, turn away toward the public terminal, and move swiftly into position.]",
    next: "commons_plant_wiretap"
  },

  "commons_choice_stay_longer": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "shepard",
    text: "[I pull back into the shelter of the colonnade, remaining in the shadows. I can't just walk away. Seeing Jeff and EDI standing together before my name... I need to stay, if only for a few moments.]",
    next: "commons_joker_voice"
  },

  "commons_joker_voice": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "joker",
    text: "You were the best skipper a pilot could ever ask for, Commander. Always dragging us out of impossible fire... and you didn't even leave us a piece of armor to bury. The Normandy feels hollow without you, John. Every time I sit in the cockpit, I still wait for you to tell me to spool the drive.",
    next: "commons_edi_voice"
  },

  "commons_edi_voice": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "edi",
    text: "Jeff... his sacrifice secured the survival of all organic and synthetic life in this galaxy. His tactical decisions and his humanity are permanently woven into my cognitive core. He will never truly be gone.",
    next: "commons_soldiers_approach"
  },

  "commons_soldiers_approach": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "shepard",
    text: "[Two Alliance Marines in formal service uniforms step forward from the honor guard post by the reflection pool. They halt respectfully before Joker and EDI, coming to a crisp, synchronized salute.]",
    next: "commons_soldier_tribute"
  },

  "commons_soldier_tribute": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "alliance_soldier",
    text: "Lieutenant Moreau. On behalf of the Alliance 5th Fleet, we wanted to express our deepest respects, sir. What you and the Normandy did over Earth—bringing Commander Shepard through the Reaper fleet to reach the beam... humanity will never forget it.",
    next: "commons_joker_soldier_response"
  },

  "commons_joker_soldier_response": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "joker",
    text: "[Joker blinks, clearing his throat and offering a tight, respectful nod.] Thanks, Marines. But save the salutes for the name on that wall. The skipper took the real hits. We just flew the bus that got him to the fight.",
    next: "commons_soldier_depart"
  },

  "commons_soldier_depart": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "alliance_soldier",
    text: "Understood, sir. But you got him there. We stand guard so his peace holds. Semper Fi, Lieutenant. [The marines salute once more before returning to their post.]",
    next: "commons_shepard_grief"
  },

  "commons_shepard_grief": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: ["joker", "edi"],
    speaker: "shepard",
    text: "[A heavy ache tightens in my throat. Watching Joker, EDI, and the Alliance standing firm in the peace we fought so hard to buy... I want nothing more than to step forward and embrace them. But Tali is in chains, and Cerberus is listening. I have to finish this first.]",
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
    present: ["joker", "edi"],
    speaker: "shepard",
    text: "[Paragon Interrupt [Q]: Standing in the quiet shadows of the colonnade, I bring my hand to the center of my chest, holding a silent, heartfelt salute toward Joker, EDI, and the fallen.] Fly steady, Jeff. Watch over him, EDI. I'll see you both back on the flight deck soon.",
    next: "commons_plant_wiretap"
  },

  "commons_plant_wiretap": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[I turn toward the public data terminal near the reflection pool, slide open the maintenance casing with a discreet tool, and snap the first micro-wiretap into the optical nexus.]",
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
