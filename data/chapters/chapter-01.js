// data/chapters/chapter-01.js - Chapter 1: A Third Chance (Mass Effect Visual Novel)
export const chapter01 = {
  id: "chapter_01_third_chance",
  title: "A Third Chance",
  background: "assets/backgrounds/reaper_chamber.jpg",
  startNode: "awakening_01",
  nodes: {
    // -----------------------------------------------------------------
    // PHASE 1: THE AWAKENING (Pitch Black -> Vision Clears in Reaper Core)
    // -----------------------------------------------------------------
    "awakening_01": {
      background: "assets/backgrounds/black.jpg",
      present: [],
      speaker: "shepard",
      text: "Cold... A wet, viscous, suffocating cold. The last sensation seared into my memory was pure fire—the Crucible melting my skin, every synthetic implant burning to ash. But this... this is like drowning in the dark.",
      next: "awakening_02"
    },

    "awakening_02": {
      background: "assets/backgrounds/black.jpg",
      present: [],
      speaker: "shepard",
      text: "[A wet biomechanical snap echoes. My body drops onto a freezing metal grating, coughing violently as my lungs burn with the first agonizing intake of air.]",
      next: "awakening_03"
    },

    "awakening_03": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: [],
      speaker: "shepard",
      text: "[I force my eyes open through the blur of amniotic fluid. Behind me lies a grotesque mass of greyish plant tendrils fused into Reaper conduits.] A Thorian... assimilated into Reaper cybernetics? Where am I?",
      next: "awakening_04"
    },

    "awakening_04": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: [],
      speaker: "shepard",
      text: "[The floor plates thrum beneath my palms with a deep, subharmonic pulse. Hexagonal obsidian walls rise into cavernous shadows.] A Reaper. Did the Crucible fail? What happened to us... what happened to Tali",
      next: "hackett_beam_appear"
    },

    // -----------------------------------------------------------------
    // PHASE 2: THE FAMILIAR PROJECTION (Admiral Hackett Appears)
    // -----------------------------------------------------------------
    "hackett_beam_appear": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: ["hackett"],
      speaker: "shepard",
      text: "[A cyan holographic beam strikes the deck behind me, solidifying into Admiral Steven Hackett in full Alliance dress uniform.]",
      next: "hackett_entry_01"
    },

    "hackett_entry_01": {
      background: "assets/backgrounds/reaper_chamber.jpg",
      present: ["hackett"],
      speaker: "hackett",
      text: "On your feet, Commander. Lying on the deck never saved the galaxy, and it won't start now.",
      next: "shepard_hackett_01"
    },

    "shepard_hackett_01": {
      present: ["hackett"],
      speaker: "shepard",
      text: "Admiral Hackett?! Sir... what happened? Did we win?",
      next: "hackett_calm_01"
    },

    "hackett_calm_01": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Take a deep breath, Shepard. Your vital signs are erratic; neural shock takes time to settle. I'm here to help you.",
      next: "hackett_status_intro"
    },

    "hackett_status_intro": {
      present: ["hackett"],
      speaker: "hackett",
      text: "We won. Kind of. Two months have passed since the Battle of Earth. The war is over. The Reapers have ceased all hostilities.",
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
          text: "I have heard enough of the galactic overview, Admiral. What is my mission?",
          targetNode: "normal_crisis_01"
        }
      ]
    },

    "node_reapers_status": {
      present: ["hackett"],
      speaker: "hackett",
      text: "The Reapers are actively assisting in galactic reconstruction. Capital ships are hauling raw alloys, stabilizing infrastructure, and restoring orbital platforms and the relays. Citadel fleets maintain sentry lines, but peace holds.",
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
      text: "At an exemplary pace. To dispel historical dread and facilitate formal entry into the Citadel community, the Geth were demilitarized. Their platforms now operate in ecological engineering and agricultural synthesis alongside Quarian engineers.",
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
      text: "Urdnot Wrex still holds the clans with steady authority. A population boom will happen, but with star charts provided by the Reapers, a safe expansion is being channeled through peaceful diplomacy.",
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
      text: "Nearly a quarter of the Relay network has already been reactivated through combined Alliance-Reaper repair flotillas. As for the Leviathans, they remain silent.",
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
      text: "[My eyes narrow. As the reports drone on, my N7 combat instincts pierce the fog.] I've heard enough, 'Admiral'... that's quite enough. Steven Hackett is on Earth coordinating the greatest reconstruction in galactic history. He would never deliver a solo diplomatic briefing to a naked, slime-covered soldier on a Reaper deck. Drop the masquerade. Who are you really?!",
      next: "renegade_catalyst_shift"
    },

    "renegade_catalyst_shift": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[The warmth in Hackett's eyes vanishes before me, replaced by a cold cyan resonance. His vocal cadence turns polyphonic and synthesized.]",
      next: "renegade_catalyst_reveal_01"
    },

    "renegade_catalyst_reveal_01": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Flawless tactical deduction, Commander. Our neural simulations predicted an organic mind would require four additional minutes to isolate the scenario's incongruities.",
      next: "renegade_catalyst_reveal_02"
    },

    "renegade_catalyst_reveal_02": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "I am the directing consciousness you assumed at the Crucible. Projecting Steven Hackett was a calibrated measure to prevent cognitive dissociation upon waking. But you broke the predictive model. Since you demand the unvarnished truth, you shall have it.",
      next: "renegade_cloning_explanation"
    },

    "renegade_cloning_explanation": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Your original body was disintegrated at the Crucible. You were reconstructed utilizing biomass from an assimilated Thorian node, paired with the genomic blueprints Cerberus cataloged during Project Lazarus. Your memories were transferred via direct synaptic resonance, no indoctrination, no control. Pure organic flesh.",
      next: "renegade_shepard_demand"
    },

    "renegade_shepard_demand": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "Then why bring me back?! To use me as your private instrument?!",
      next: "renegade_tali_crisis"
    },

    "renegade_tali_crisis": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Because Tali'Zorah vas Normandy has been abducted.",
      next: "renegade_crisis_details"
    },

    "renegade_crisis_details": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "A rogue Cerberus splinter cell in the Terminus Systems ambushed the Quarian diplomatic transport. They intend to indoctrinate Tali and the Admiralty using the neurological control research the Illusive Man developed during the war. With the Geth demilitarized and obedient to their Creators, controlling the Admiralty means seizing the entire synthetic race.",
      next: "renegade_stealth_imperative"
    },

    "renegade_stealth_imperative": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Reapers possess immense firepower, but zero stealth capability. A frontal approach guarantees the hostages' immediate execution. Furthermore, if Cerberus discovers you survived, they will slaughter Tali out of sheer retribution. You must operate as an untraceable ghost.",
      next: "equipment_pedestal_rises"
    },

    // -----------------------------------------------------------------
    // BRANCH B: NORMAL PATH (Briefing Finishes -> Crisis Unfolds -> Revelation)
    // -----------------------------------------------------------------
    "normal_crisis_01": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Not all of the galaxy embraced the dawn, Shepard. Cerberus sleeper guerrillas entrenched in the Terminus fringes ambushed the diplomatic transport from Rannoch.",
      next: "normal_crisis_shepard_tali"
    },

    "normal_crisis_shepard_tali": {
      present: ["hackett"],
      speaker: "shepard",
      text: "[My breath catches in my throat.] Rannoch...? Admiral, was Tali on that transport?",
      next: "normal_crisis_hostages"
    },

    "normal_crisis_hostages": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Tali'Zorah vas Normandy and the Quarian Admiralty were taken alive. They were en route to the Citadel to present the formal petition granting independent sovereignty to the Geth.",
      next: "normal_crisis_plan"
    },

    "normal_crisis_plan": {
      present: ["hackett"],
      speaker: "hackett",
      text: "Cerberus seeks total subjugation of the synthetic network. Since the Geth demilitarized and place absolute faith in their Creators, Cerberus intends to indoctrinate the Admiralty. The Geth will obey compromised leaders without firing a single defensive shot.",
      next: "normal_shepard_fleet_demand"
    },

    "normal_shepard_fleet_demand": {
      present: ["hackett"],
      speaker: "shepard",
      text: "Then deploy the Fifth Fleet immediately, Admiral! Lock down their staging perimeter and burn their compound to slag!",
      next: "normal_catalyst_shift"
    },

    "normal_catalyst_shift": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[The projection's posture remains rigid before me, but Hackett's eyes fade into a spectral cyan chill.]",
      next: "normal_reveal_catalyst"
    },

    "normal_reveal_catalyst": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "The Fifth Fleet cannot intervene, Shepard. And Steven Hackett is not aboard this vessel.",
      next: "normal_shepard_shock"
    },

    "normal_shepard_shock": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "[I take a stunned step back.] What...?",
      next: "normal_catalyst_identity"
    },

    "normal_catalyst_identity": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "I am the intelligence you reshaped at the Crucible. Steven Hackett was a visual protocol utilized to anchor your psychological stability. A conventional military strike will result in the immediate summary execution of Tali'Zorah before drop pods even breach atmosphere.",
      next: "normal_shepard_alive_question"
    },

    "normal_shepard_alive_question": {
      present: ["catalyst_hackett"],
      speaker: "shepard",
      text: "How am I breathing? I felt every cell in my body vaporize at the control console!",
      next: "normal_cloning_explanation"
    },

    "normal_cloning_explanation": {
      present: ["catalyst_hackett"],
      speaker: "catalyst_hackett",
      text: "Your former vessel was atomized. This biological form was synthesized from an assimilated Thorian node, guided by your genetic catalog from Project Lazarus. Your neural matrix was mapped directly from your ascension. You are free of indoctrination, Shepard. But Cerberus will slaughter Tali if they learn you live. You must be a ghost.",
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
      text: "It was an honor serving with you, Commander. Live the mortal life that remains to you... Hackett out.",
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
