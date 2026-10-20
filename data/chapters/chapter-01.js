// data/chapters/chapter-01.js - Chapter 1: A Third Chance (Mass Effect Visual Novel)
export const chapter01 = {
  id: "chapter_01_third_chance",
  title: "A Third Chance",
  background: "assets/backgrounds/reaper_chamber.jpg",
  startNode: "awakening_01",
  nodes: {
    // -----------------------------------------------------------------
    // PHASE 1: THE AWAKENING (Pitch Black -> Sensory Shock & Mortal Frailty)
    // -----------------------------------------------------------------
    "awakening_01": {
      background: "assets/backgrounds/black.jpg",
      present: [],
      speaker: "shepard",
      text: "Cold... A wet, viscous, suffocating cold. The last sensation seared into my memory was pure fire—the Crucible consuming my bones, the ozone stench of every cybernetic circuit melting beneath my skin, the agony of having my consciousness ripped away. I saw my entire life burn. But I never imagined death would be like this: frozen, dark, and suffocating.",
      next: "awakening_02"
    },

    "awakening_02": {
      background: "assets/backgrounds/black.jpg",
      present: [],
      speaker: "shepard",
      text: "[A wet biomechanical snap echoes. A tissue membrane tears. My naked body drops from a short height, hitting the frozen alloy decking with a dull, heavy thud.]",
      next: "awakening_03"
    },

    "awakening_03": {
      background: "assets/backgrounds/black.jpg",
      present: [],
      speaker: "shepard",
      text: "[My bare palms and knees slam against the freezing metal floor plates. The thermal shock rips a violent spasm through my raw skin. I gasp in panic, but draw in only thick fluid. Coughing violently, I purge a mouthful of yellowish amniotic fluid across the deck. The first real intake of oxygen burns my throat like shattered glass.]",
      next: "awakening_04"
    },

    "awakening_04": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: [],
      speaker: "shepard",
      text: "[I try to push myself up, but my wrists buckle. My muscles feel like dead lead, as if they've spent a century in deep atrophy. My teeth chatter violently. I stare at my wet, trembling hands: no gauntlets, no surgical scars, no glowing Lazarus veins. Just pale, vulnerable, mortal skin. I drag myself back until my naked spine hits a freezing bulkhead.] Where... where the hell am I?",
      next: "awakening_05"
    },

    "awakening_05": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: [],
      speaker: "shepard",
      text: "[My vision blurs and finally locks onto the biomechanical cavity I was expelled from: a grotesque mass of greyish plant tendrils fused into pulsating bio-organic conduits and synthetic cables.] A Thorian nodule? Wired into antimatter conduits...?",
      next: "awakening_06"
    },

    "awakening_06": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: [],
      speaker: "shepard",
      text: "[The subharmonic hum that vibrates the hexagonal deck resonates directly in my naked bones.] The architecture... This is a Reaper. Did the Crucible fail? Earth... what happened to all of us?!",
      next: "hackett_beam_appear"
    },

    // -----------------------------------------------------------------
    // PHASE 2: THE FAMILIAR PROJECTION (Admiral Hackett Appears)
    // -----------------------------------------------------------------
    "hackett_beam_appear": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: ["hackett"],
      speaker: "shepard",
      text: "[A vertical cyan beam pierces the gloom of the chamber, blinding my unadjusted eyes. I throw up a trembling forearm to shield my face. In the center of the beam, a life-sized holographic projection stabilizes: Admiral Steven Hackett in full Alliance dress uniform, hands clasped behind his back, solemn and commanding.]",
      next: "hackett_entry_01"
    },

    "hackett_entry_01": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: ["hackett"],
      speaker: "hackett",
      text: "On your feet, Commander. Lying huddled on the deck never saved the galaxy, and it won't start now.",
      next: "shepard_hackett_01"
    },

    "shepard_hackett_01": {
      present: ["hackett"],
      speaker: "shepard",
      text: "[I force my eyes open, dazed. My heart pounds against my ribs. I try to pull myself up against the bulkhead, but my legs fail and I collapse back onto one knee, gasping for breath.] Admiral...? Sir... is that really you? Did we... did we win? Was Earth saved?",
      next: "hackett_calm_01"
    },

    "hackett_calm_01": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Control your breathing, John. Your vitals are emerging from synaptic shock. Your nervous system just rebooted after a catastrophic overload. Stay where you are until your muscle tone stabilizes.",
      next: "shepard_hackett_02"
    },

    "shepard_hackett_02": {
      present: ["hackett"],
      speaker: "shepard",
      text: "[Clutching my bare chest, feeling the erratic, heavy pounding of my heart.] I saw the Citadel ignite... I felt my flesh burn to the bone. Why am I inside a Reaper ship? What happened to the fleet?",
      next: "hackett_status_intro"
    },

    "hackett_status_intro": {
      present: ["hackett"],
      speaker: "hackett",
      text: "The invasion is over, Commander. Two months have passed since the Battle of Earth. The Reapers have ceased all hostilities. I am here to bring you up to speed on the galaxy before we address what comes next.",
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Break the Illusion [Renegade]",
          targetNode: "renegade_interrupt_farsa"
        }
      },
      next: "choice_briefing_hub"
    },

    // -----------------------------------------------------------------
    // PHASE 3: THE GALACTIC BRIEFING & CONTINUOUS RENEGADE INTERRUPT
    // -----------------------------------------------------------------
    "choice_briefing_hub": {
      type: "choice",
      present: ["hackett"],
      speaker: "shepard",
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Break the Illusion [Renegade]",
          targetNode: "renegade_interrupt_farsa"
        }
      },
      choices: [
        {
          text: "What is the Reapers' role now? How did galactic civilization react?",
          targetNode: "node_reapers_status"
        },
        {
          text: "What about Rannoch? Did the peace between the Quarians and the Geth endure?",
          targetNode: "node_rannoch_status"
        },
        {
          text: "Did the Genophage cure hold? Are the Krogan stabilizing under Wrex?",
          targetNode: "node_krogans_status"
        },
        {
          text: "What of the Mass Relays? Did the ancient Leviathans make a move?",
          targetNode: "node_relays_status"
        },
        {
          text: "What about me, Admiral? How in the hell am I breathing... and what am I doing here?",
          targetNode: "normal_shepard_question_alive"
        }
      ]
    },

    "node_reapers_status": {
      present: ["hackett"],
      speaker: "hackett",
      text: "The Reapers are actively assisting in galactic reconstruction. Capital ships are hauling raw alloys, stabilizing planetary atmospheres, and restoring orbital platforms and the relays. Citadel fleets maintain sentry lines, but peace holds.",
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Break the Illusion [Renegade]",
          targetNode: "renegade_interrupt_farsa"
        }
      },
      next: "choice_briefing_hub"
    },

    "node_rannoch_status": {
      present: ["hackett"],
      speaker: "hackett",
      text: "At an exemplary pace. To dispel historical dread and facilitate formal entry into the Citadel community, the Geth voluntarily underwent comprehensive demilitarization. Their platforms now operate in ecological engineering and agricultural synthesis alongside Quarian engineers.",
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Break the Illusion [Renegade]",
          targetNode: "renegade_interrupt_farsa"
        }
      },
      next: "choice_briefing_hub"
    },

    "node_krogans_status": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Urdnot Wrex and Bakara hold the clans with steady authority. A population boom is underway, but with star charts provided by the Reapers and newly opened colony sectors, expansion is being channeled through peaceful diplomacy.",
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Break the Illusion [Renegade]",
          targetNode: "renegade_interrupt_farsa"
        }
      },
      next: "choice_briefing_hub"
    },

    "node_relays_status": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Nearly a quarter of the Relay network has already been reactivated through combined Alliance-Reaper repair flotillas. As for the Leviathans, they remain silent in their oceanic abyss, well aware that the synthetic network now answers to a higher guiding will.",
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Break the Illusion [Renegade]",
          targetNode: "renegade_interrupt_farsa"
        }
      },
      next: "choice_briefing_hub"
    },

    // -----------------------------------------------------------------
    // BRANCH A: RENEGADE INTERRUPT (Active Deduction by Shepard)
    // -----------------------------------------------------------------
    "renegade_interrupt_farsa": {
      present: ["hackett"],
      speaker: "shepard",
      text: "[My eyes narrow. As the reports drone on, my N7 combat instincts pierce the fog.] I've heard enough, 'Admiral'... that's quite enough. Steven Hackett is on Earth coordinating the greatest reconstruction in galactic history. He would never deliver a solo diplomatic briefing to a naked, slime-covered soldier on a Reaper deck. Drop the masquerade right now. I want to know who you really are!",
      next: "renegade_catalyst_shift"
    },

    "renegade_catalyst_shift": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[Hackett's posture freezes. The human warmth in his eyes vanishes, replaced by a crystalline cyan pulse. A faint, analytical smile touches the projection's lips.]",
      next: "renegade_catalyst_reveal_01"
    },

    "renegade_catalyst_reveal_01": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Fascinating. Our probabilistic models predicted an organic mind newly revived would require four additional minutes and twelve seconds to isolate the logical anomalies of this environment. You exceeded the simulations, Shepard. Your tactical instincts remain razor sharp.",
      next: "renegade_shepard_demand"
    },

    "renegade_shepard_demand": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "You're the Catalyst. The Crucible's AI. Cut the mind games and speak plain: what do you want from me?!",
      next: "renegade_tali_crisis"
    },

    "renegade_tali_crisis": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Direct to the core, as always. A diplomatic transport from Rannoch was intercepted in the Terminus Systems. Tali'Zorah vas Normandy has been abducted.",
      next: "renegade_shepard_fury"
    },

    "renegade_shepard_fury": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[The blow hits me like a kinetic slug. I step forward, fists clenched, jaw locked tight.] Tali?! If you're lying to me—",
      next: "renegade_crisis_details"
    },

    "renegade_crisis_details": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "There is no deception. Rogue Cerberus splinter cells captured her alongside the Admiralty. Since the Geth are demilitarized and place blind trust in the Quarians, Cerberus will employ the Illusive Man's neural indoctrination technology on Tali to subjugate the entire synthetic consensus.",
      next: "choice_renegade_hub"
    },

    "choice_renegade_hub": {
      type: "choice",
      present: ["catalyst_hackett"],
      speaker: "shepard",
      choices: [
        {
          text: "How the hell am I standing here if my body was vaporized at the Crucible?",
          targetNode: "node_renegade_cloning_info"
        },
        {
          text: "Why don't you resolve this yourself with the Reaper armada?",
          targetNode: "node_renegade_reaper_limit"
        },
        {
          text: "I don't trust a single word you say. But I'll collaborate for now... for Tali.",
          targetNode: "renegade_pact_node"
        }
      ]
    },

    "node_renegade_cloning_info": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "You were synthesized utilizing accelerated biomass from an assimilated Thorian nodule, reconstructed with the cellular blueprints Cerberus cataloged during Project Lazarus. Your memories and will were transferred without corruption from your neural map seared into the Crucible at ascension. You are pure organic flesh. No leashes, no cybernetics, no indoctrination.",
      next: "choice_renegade_hub"
    },

    "node_renegade_reaper_limit": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "If a Reaper warship enters the system, the Quarians will be executed within seconds before a single kinetic shot can be fired. And if Cerberus discovers Shepard lives, Tali will die simply to rob you of your triumph. She will only survive if no one knows you have returned.",
      next: "choice_renegade_hub"
    },

    "renegade_pact_node": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I squeeze my hands into fists so tight the knuckles turn white.] I don't trust a single word out of this projection. But I am not gambling Tali's life. I will collaborate for now... only until she is safe.",
      next: "renegade_catalyst_accepts"
    },

    "renegade_catalyst_accepts": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "A pragmatically sound agreement, Shepard. Mutual cooperation is the sole vector that ensures her survival. To begin tracking, you will need the Shadow Broker. Doctor Liara T'Soni is already operating a clandestine intelligence redoubt on the Citadel.",
      next: "equipment_pedestal_rises"
    },

    // -----------------------------------------------------------------
    // BRANCH B: NORMAL PATH (Briefing Finishes -> Gradual Revelation)
    // -----------------------------------------------------------------
    "normal_shepard_question_alive": {
      present: ["hackett"],
      speaker: "shepard",
      text: "What about me, Admiral? You speak of galactic reconstruction, but I remember burning to ash at the Crucible. How am I drawing breath right now? And why have you kept me locked inside a Reaper?",
      next: "normal_catalyst_reveal_01"
    },

    "normal_catalyst_reveal_01": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "[Hackett's holographic projection doesn't flinch. The human warmth leaves his features, and his voice shifts into a serene, polyphonic resonance.] Your biological telemetry and emotional responses are completely within predicted simulations, Shepard. Steven Hackett is not aboard this vessel.",
      next: "normal_shepard_shock"
    },

    "normal_shepard_shock": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I stumble back against the bulkhead, eyes wide.] What...? You... you're the intelligence from the Crucible.",
      next: "normal_catalyst_no_malice"
    },

    "normal_catalyst_no_malice": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "I am the directing consciousness you assumed at the peak of the Crucible. There was no intent to deceive out of malice. Projecting the face and voice of the man who led your species was the protocol required to anchor your organic mind and prevent dissociative collapse upon awakening.",
      next: "normal_shepard_body_question"
    },

    "normal_shepard_body_question": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "My body was atomized! I felt my bones turn to slag! What did you do?!",
      next: "normal_catalyst_recriacao_explain"
    },

    "normal_catalyst_recriacao_explain": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Your original vessel did perish. This biological form was cultivated through accelerated synthesis of a Thorian nodule, structured upon the molecular blueprints Cerberus cataloged during Project Lazarus. Your memories, personality, and free will were imprinted from the neural matrix recorded during your ascension. You are not indoctrinated. You are yourself.",
      next: "normal_shepard_why_revive"
    },

    "normal_shepard_why_revive": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I stare at my bare, trembling chest, vertigo seizing my thoughts.] Why do this...? You already command the Reapers! Why rip me out of death and shove me back into a cage of flesh?!",
      next: "normal_catalyst_tali_bomb"
    },

    "normal_catalyst_tali_bomb": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Because two weeks ago, Tali'Zorah vas Normandy was abducted.",
      next: "normal_shepard_tali_gasp"
    },

    "normal_shepard_tali_gasp": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[The floor drops out from beneath me. The breath freezes in my throat.] Tali...? What do you mean abducted?! By who?!",
      next: "choice_normal_crisis_hub"
    },

    "choice_normal_crisis_hub": {
      type: "choice",
      present: ["catalyst_hackett"],
      speaker: "shepard",
      choices: [
        {
          text: "Who took Tali? What do they intend to do with her?",
          targetNode: "node_normal_cerberus_plan"
        },
        {
          text: "Why don't the Reapers or the Alliance storm their facility?",
          targetNode: "node_normal_stealth_reason"
        },
        {
          text: "I've heard enough. I won't let Cerberus touch her. Where do I begin?",
          targetNode: "node_normal_lead_to_liara"
        }
      ]
    },

    "node_normal_cerberus_plan": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Cerberus remnants operating clandestine sleeper cells in the Terminus fringes. With the Geth voluntarily demilitarized and integrated into Quarian society, Cerberus intends to utilize the mind-control technology the Illusive Man refined during the war to enslave Tali and the Admiralty. If they succeed, they will control the entire synthetic network through the unquestioned trust the Geth place in their Creators.",
      next: "choice_normal_crisis_hub"
    },

    "node_normal_stealth_reason": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Reapers do not execute surgical infiltrations. Any capital ship mobilization will prompt the immediate summary execution of the hostages before atmospheric entry. And if Cerberus discovers Commander Shepard survived, Tali will be slaughtered out of sheer spite against their greatest enemy. This rescue demands absolute discretion. It demands a ghost.",
      next: "choice_normal_crisis_hub"
    },

    "node_normal_lead_to_liara": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "I've heard enough. I am not letting Cerberus lay a hand on her. Where do I begin?",
      next: "normal_catalyst_gives_liara"
    },

    "normal_catalyst_gives_liara": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "To track the abducted convoy, you will need the intelligence network of the Shadow Broker. Doctor Liara T'Soni maintains a clandestine central hub on the Citadel. Our telemetry intercepted encrypted distress micro-bursts that Tali dispersed across the extranet before total containment; Liara is the only operative capable of deciphering those frequencies.",
      next: "equipment_pedestal_rises"
    },

    // -----------------------------------------------------------------
    // PHASE 4: THE WEIGHT OF MORTAL FLESH (No Cybernetics)
    // -----------------------------------------------------------------
    "equipment_pedestal_rises": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[A mechanical pedestal rises from the deck in front of me, displaying unmarked composite armor plating, an M-3 Predator heavy pistol, and an enclosed helm with a polarized mirror visor.]",
      next: "equipment_transition"
    },

    "equipment_transition": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Your operational gear has been synthesized for black-ops stealth.",
      next: "shepard_armor_realization"
    },

    "shepard_armor_realization": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I strap the composite plates over my torso. My joints ache with unfamiliar friction. Each breath burns without synthetic filters.] The armor... it feels twice as heavy as I remember. My muscles are dragging.",
      next: "catalyst_flesh_speech"
    },

    "catalyst_flesh_speech": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "An accurate biological perception. The Thorian synthesis generated pure organic tissue. You no longer possess cybernetic implants. No dermal sub-mesh, no titanium bone weave, no synthetic enhancements from Project Lazarus.",
      next: "catalyst_flesh_warning"
    },

    "catalyst_flesh_warning": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Some would say you are more original now than when Cerberus remade you. But it carries a price: take a high-velocity tungsten slug without shields, and you will bleed and perish like any other mortal.",
      next: "shepard_pistol_resolve"
    },

    "shepard_pistol_resolve": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I grip the M-3 Predator. The cold steel transmits the heavy thud of my own racing pulse.] Flesh and bone... That's all I need to get Tali out of there.",
      next: "biometrics_console"
    },

    // -----------------------------------------------------------------
    // PHASE 5: THE MASK & DEPARTURE TO CITADEL
    // -----------------------------------------------------------------
    "biometrics_console": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "To clear C-Sec checkpoints without alerting Alliance central intelligence, you require an untraceable mercenary civilian identity. Because your synthetic fingerprints do not match old Alliance archives, place your palm on the sensor console.",
      next: "shepard_id_scanned"
    },

    "shepard_id_scanned": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[A laser grid scans my palm with a sharp chime.] Registered. Just another decommissioned marine hunting bounty contracts in the Terminus.",
      next: "helm_sealed"
    },

    "helm_sealed": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I lift the helmet over my head. Pneumatic seals hiss into the collar with a pressurized click. The visor polarizes pitch black, and the vocal modulator activates with a cold, robotic metallic rasp.] Where do I begin the hunt?",
      next: "catalyst_liara_order"
    },

    "catalyst_liara_order": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "The Shadow Broker. Doctor Liara T'Soni maintains a secure intelligence redoubt on the Citadel. Our telemetry indicates Tali broadcast encrypted distress micro-bursts before total containment. Liara is the only operative with the processing power to triangulate her trail.",
      next: "catalyst_final_salute"
    },

    "catalyst_final_salute": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "An unmarked long-range shuttle awaits in the lower ventral airlock. Find Liara, assemble what strength you need, and bring the Quarian leadership home.",
      next: "catalyst_salute"
    },

    "catalyst_salute": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[The projection raises a crisp, formal Alliance salute in front of me as its cyan particles begin to dissolve into light.]",
      next: "catalyst_hackett_out"
    },

    "catalyst_hackett_out": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "It was an honor serving with you, Commander. Live the life that remains to you... Catalyst out.",
      next: "departure_final"
    },

    "departure_final": {
      present: [],
      speaker: "shepard",
      text: "[The holographic light dissipates into absolute silence. Massive hydraulic airlock doors grind open before me, exposing the dark silhouette of the stealth shuttle against the void.] Hang on, Tali. I'm coming for you.",
      next: "chapter_01_end"
    },

    "chapter_01_end": {
      present: [],
      speaker: "system",
      text: "[End of Chapter 1: A Third Chance. Continue to Chapter 2: Dossier: Shadow Broker via the Chapters Archive.]",
      next: null
    }
  }
};
