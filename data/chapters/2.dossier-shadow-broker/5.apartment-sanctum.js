// data/chapters/2.dossier-shadow-broker/5.apartment-sanctum.js
// Act 5: The Apartment Sanctum (Weapon Standoff, Renegade Disarm & Unmasking)

export const nodesPart5 = {
  "penthouse_arrival": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[The private airlock slides open. I step across the threshold and freeze. The kitchen island. The leather lounge sofa. The panoramic curved windows looking out over the neon-drenched towers of the Silversun Strip. This is my apartment. The home Admiral Anderson gave me. The home where we threw our final party before Earth.]",
    next: "penthouse_lockdown"
  },

  "penthouse_lockdown": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Before I can say a word, automated defense protocols engage with a deafening hydraulic clamp. Heavy armored blast shutters slam down over the windows. The main airlock deadbolts. A military-grade frequency scrambler blankets the room with a deadening hum.]",
    next: "penthouse_standoff_draw"
  },

  "penthouse_standoff_draw": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara drops all academic gentleness. In a flash of lethal grace, azure dark-energy flares across her shoulders. She whips her heavy M-5 Phalanx pistol from beneath her coat and levels the barrel squarely between the polarized eyes of my helmet.]",
    next: "penthouse_liara_interrogate"
  },

  "penthouse_liara_interrogate": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "The apartment is sealed. Communications are dead. Scanners are scrambled. Nobody leaves this room until I have the truth. Who contracted you? How do you know the Admiralty was taken by Cerberus? And why do you move like an N7 operator?!",
    interrupt: {
      renegade: {
        targetNode: "penthouse_renegade_disarm",
        effects: { renegade: 3 }
      }
    },
    next: "penthouse_paragon_standoff"
  },

  "penthouse_renegade_disarm": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Renegade Interrupt [E]: In a blinding reflex drilled through hundreds of drops, I close the distance before her biotics can flare. My left gauntlet parries her wrist upward; my right hand twists the heavy pistol cleanly from her grip.]",
    next: "penthouse_disarm_strip"
  },

  "penthouse_disarm_strip": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[Instead of aiming the weapon back at her, my fingers work with textbook N7 muscle memory: slide release tripped, magazine dropped into my palm, recoil guide disengaged. In two seconds flat, her M-5 Phalanx is completely field-stripped into harmless components across the kitchen counter.]",
    next: "penthouse_disarm_reaction"
  },

  "penthouse_disarm_reaction": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara stares at her empty hands, then down at the stripped barrel, spring, and slide resting on the granite counter. Her breath hitches in pure disorientation. Only one soldier in the galaxy ever handled a Phalanx with that exact cadence.] You... that cadence...",
    next: "penthouse_unmask_action"
  },

  "penthouse_paragon_standoff": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I keep my hands relaxed at my sides, refusing to raise them or flinch.] Finger off the trigger, Liara. Just like Therum. Sight alignment, controlled breath, evaluate target before squeezing. You taught me to trust your biotics; now trust your instincts.",
    next: "penthouse_paragon_reaction"
  },

  "penthouse_paragon_reaction": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara's hands begin to tremble violently. The azure biotic aura around her shoulders flickers and dims. She slowly lowers the weapon, her voice barely a whisper.] Those words... Therum... Who are you?!",
    next: "penthouse_unmask_action"
  },

  "penthouse_unmask_action": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I reach up to the heavy neck clamps of my mercenary armor. With a sharp dual twist, the pressurized seals disengage with a loud pneumatic hiss of venting atmosphere.] *Psssshhht.*",
    next: "penthouse_unmask_face"
  },

  "penthouse_unmask_face": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I lift off the heavy helmet and set it down on the kitchen counter beside the dismantled pistol. I exhale warm, real, unaugmented human breath. The room falls into absolute, breathless silence.]",
    next: "penthouse_liara_shock"
  },

  "penthouse_liara_shock": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara looks up into my face. The Phalanx clatters to the floor. Her hands fly to her mouth, and tears immediately brim in her eyes. Shock, disbelief, and overwhelming grief shatter her composure in an instant.] By the Goddess... John? No... this... this is impossible! You died on the Crucible! We watched you burn! I put your name on the memorial wall with my own hands!",
    next: "penthouse_shepard_confirm"
  },

  "penthouse_shepard_confirm": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I take a soft step toward her, my voice gentle and unmistakably my own.] It's really me, Liara. All flesh and blood. No Reaper shackles, no Cerberus cybernetics.",
    next: "penthouse_apartment_inquiry"
  },

  "penthouse_apartment_inquiry": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I pause, looking around the quiet room—the kitchen island, the lounge where our crew celebrated before Earth, the neon vista outside.] Liara... this place. In my military will, filed before the final push on Earth... I left this luxury apartment to Tali. How do you have this? Why did you bring me here?",
    next: "penthouse_liara_revelation_01"
  },

  "penthouse_liara_revelation_01": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara wipes tears from her blue cheeks, her voice trembling as she shares the heartbreaking truth.] John... after the war ended, your will was honored. The Silversun Strip penthouse was legally transferred to Tali'Zorah. But she couldn't stay. She sold it to me before leaving the Citadel.",
    next: "penthouse_liara_revelation_02"
  },

  "penthouse_liara_revelation_02": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "She sold it for three reasons. First, her people needed her: she was returning to Rannoch to lead the historic reconstruction of their homeworld alongside the Geth. Second... remaining in this apartment was an unbearable, agonizing pain. Every room, every couch, that balcony... every corner echoed with your laughter and the memories of the Citadel party. She told me walking through these halls alone felt like drowning in ghosts.",
    next: "penthouse_liara_revelation_03"
  },

  "penthouse_liara_revelation_03": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "And third... I desperately needed an impenetrable, off-grid sanctuary on the Citadel—completely shielded from C-Sec surveillance and Council scrutiny—to secretly rebuild the Shadow Broker's intelligence network.",
    next: "penthouse_liara_poetic_irony"
  },

  "penthouse_liara_poetic_irony": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara looks at me, tears overflowing.] Do you understand what it felt like to bring an unknown Terminus mercenary here, John? This apartment was the only place left in the galaxy where I could feel your presence. It was our sanctuary... and Tali's deepest wound. I brought an armed stranger into your home because I was ready to risk anything to find Tali. And the entire time... it was you under that armor.",
    next: "penthouse_shepard_resolve"
  },

  "penthouse_shepard_resolve": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[The weight of Tali's grief and love hits me like a kinetic shockwave. My fists clench with fierce, unyielding resolve.] She carried that pain all this time... and now Cerberus has her. We're going to get her back, Liara. Whatever it takes.",
    next: "penthouse_embrace_eternity"
  },

  "penthouse_embrace_eternity": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "shepard",
    text: "[I extend both hands toward her, palms open.] You don't have to take my word for it. Look into my mind. Embrace eternity with me, Liara.",
    next: "penthouse_meld_action"
  },

  "penthouse_meld_action": {
    background: "assets/backgrounds/shepard_apartment.jpg",
    present: ["liara"],
    speaker: "liara",
    text: "[Liara steps forward, breathless with awe and relief. She gently presses her trembling hands against my temples. Her eyes darken to an ethereal, radiant black as the psychic meld envelops our minds.] 'Embrace eternity... John...'",
    next: "chapter_02_complete_hub"
  },

  "chapter_02_complete_hub": {
    type: "choice",
    background: "assets/backgrounds/black.jpg",
    present: [],
    speaker: "system",
    choices: [
      {
        text: "Review Mission Archives (Chapter Select)",
        targetNode: "chapter_02_end_terminal"
      },
      {
        text: "Replay Chapter 2: Dossier: Shadow Broker",
        targetNode: "citadel_gates_01"
      }
    ]
  },

  "chapter_02_end_terminal": {
    background: "assets/backgrounds/black.jpg",
    present: [],
    speaker: "system",
    text: "MISSION REPORT // CHAPTER 2: DOSSIER: SHADOW BROKER COMPLETE. Telemetry decrypted. Dr. Liara T'Soni reunited with Commander Shepard. Next Mission: Dossier: Archangel (Omega). Press ESC or click CHAPTERS in the upper right to browse available missions.",
    next: null
  }
};
