// data/chapters/test-scene.js - Test Chapter: Contact at the Shadow Broker Sanctum (English)
export const testScene = {
  id: "test_scene_sanctum",
  title: "Chapter 1: Contact at the Shadow Broker Sanctum",
  background: "assets/backgrounds/shadow_broker_sanctum.jpg",
  startNode: "liara_intro_01",
  nodes: {
    // ----------------------------------------------------
    // PHASE 1: SOLO MODE (Liara Alone - Centered on Screen)
    // ----------------------------------------------------
    "liara_intro_01": {
      present: ["liara"],
      speaker: "liara",
      text: "Shepard... By the Goddess, it still defies belief to see you standing before me. Flesh, blood, and breathing on your own.",
      next: "shepard_solo_01"
    },

    "shepard_solo_01": {
      present: ["liara"],
      speaker: "shepard",
      text: "I'm still getting used to drawing breath without the hiss of synthetic ventilators myself. But we don't have time for nostalgia. What did your network discover about Tali?",
      next: "liara_solo_02"
    },

    "liara_solo_02": {
      present: ["liara"],
      speaker: "liara",
      text: "Shadow Broker surveillance intercepted high-priority distress telemetry from the Terminus Systems. The diplomatic vessel carrying Tali'Zorah and the Quarian Admiralty was ambushed by rogue Cerberus guerrilla cells.",

      // Moral Interrupt without countdown timer
      interrupt: {
        paragon: {
          icon: "assets/icons/paragon.png",
          label: "Comfort Liara [Paragon]",
          targetNode: "interrupt_paragon_liara"
        }
      },
      next: "choice_liara_01"
    },

    // Branch if player triggers Paragon Interrupt
    "interrupt_paragon_liara": {
      present: ["liara"],
      speaker: "shepard",
      text: "[Step forward with a calm, steady gaze.] We broke the Reaper cycle together, Liara. We are getting Tali back alive. That is a promise.",
      next: "liara_post_paragon"
    },

    "liara_post_paragon": {
      present: ["liara"],
      speaker: "liara",
      text: "[Liara draws a measured breath, steadying her trembling hands.] You're right. Panic will not save her. Let me lay out the tactical intelligence we've assembled.",
      next: "choice_liara_01"
    },

    // Baldur's Gate Style Dialogue Choice 1 (Solo Liara)
    "choice_liara_01": {
      type: "choice",
      present: ["liara"],
      speaker: "shepard",
      choices: [
        {
          text: "How much operational time do we have before Cerberus completes their neurological tampering?",
          targetNode: "node_time_indoctrination"
        },
        {
          text: "Tali is brilliant and resilient. If anyone can withstand their containment, it is her.",
          type: "paragon",
          targetNode: "node_tali_confidence"
        },
        {
          text: "If Cerberus harms a single hair on her head, I will dismantle their splinter cell atom by atom.",
          type: "renegade",
          targetNode: "node_fury_renegade"
        },
        {
          text: "How did Cerberus assemble an armed strike force so quickly after the war?",
          targetNode: "node_investigate_cerberus"
        },
        {
          text: "Why haven't the demilitarized Geth intervened on Rannoch?",
          targetNode: "node_investigate_geth"
        }
      ]
    },

    "node_time_indoctrination": {
      present: ["liara"],
      speaker: "liara",
      text: "A matter of days at most. The psychological stress tests have already begun, but Tali is transmitting encrypted micro-bursts that I am attempting to triangulate.",
      next: "garrus_entry_01"
    },

    "node_tali_confidence": {
      present: ["liara"],
      speaker: "liara",
      text: "Indeed she is. She repurposed her environmental suit's emergency firmware to corrupt their local subnet. That was the breadcrumb trail that led us here.",
      next: "garrus_entry_01"
    },

    "node_fury_renegade": {
      present: ["liara"],
      speaker: "liara",
      text: "I share your wrath, Shepard. But blind rage won't crack their encryption protocols. We require tactical ground telemetry... and our specialist has just arrived.",
      next: "garrus_entry_01"
    },

    "node_investigate_cerberus": {
      present: ["liara"],
      speaker: "liara",
      text: "They are sleeper remnants scattered across Terminus pirate corridors. Fanatics who never accepted the Illusive Man's death. They operate as mobile raiding cells with zero static bases.",
      next: "choice_liara_01" // Returns to choice list naturally
    },

    "node_investigate_geth": {
      present: ["liara"],
      speaker: "liara",
      text: "The Geth voluntarily demilitarized to establish mutual trust with the Citadel and the Quarians. They place absolute faith in their Creators. If Cerberus bends the Admiralty's will, the Geth network will comply without firing a single defensive shot.",
      next: "choice_liara_01"
    },

    // ----------------------------------------------------
    // PHASE 2: GARRUS ENTERS (Dual Mode: Liara & Garrus)
    // ----------------------------------------------------
    "garrus_entry_01": {
      present: ["liara", "garrus"],
      speaker: "garrus",
      text: "Pardon the intrusion. I had to shake three C-Sec surveillance drones near the docking bay who still haven't learned when to look the other way.",
      next: "garrus_reaction_shepard"
    },

    "garrus_reaction_shepard": {
      present: ["liara", "garrus"],
      speaker: "garrus",
      text: "[Garrus adjusts his optical eyepiece, staring intensely at Shepard.] So... the shadow whispers were true. You really can't manage to stay dead for more than six months at a time, can you, Shepard?",
      next: "shepard_duo_01"
    },

    "shepard_duo_01": {
      present: ["liara", "garrus"],
      speaker: "shepard",
      text: "I tried taking retirement, Garrus. But someone told me my former Archangel was causing far too much trouble without adult supervision.",
      next: "garrus_response_01"
    },

    "garrus_response_01": {
      present: ["liara", "garrus"],
      speaker: "garrus",
      text: "[A grim smirk plays across Garrus's mandibles.] Hunting Cerberus remnants keeps my calibrations sharp. My task force intercepted their logistics convoys bordering the Perseus Veil.",

      // Moral Interrupt without countdown timer
      interrupt: {
        renegade: {
          icon: "assets/icons/renegate.png",
          label: "Demand Tactical Focus [Renegade]",
          targetNode: "interrupt_renegade_garrus"
        }
      },
      next: "liara_duo_response"
    },

    "interrupt_renegade_garrus": {
      present: ["liara", "garrus"],
      speaker: "shepard",
      text: "[Tone turns sharp and unforgiving.] Save the banter for shore leave. I want coordinates and numbers. Tali is enduring interrogation while we trade jokes.",
      next: "garrus_post_renegade"
    },

    "garrus_post_renegade": {
      present: ["liara", "garrus"],
      speaker: "garrus",
      text: "[Garrus snaps into rigid military focus.] Understood, Commander. Full discipline. Uploading the telemetry directly to the Broker console now.",
      next: "liara_duo_response"
    },

    "liara_duo_response": {
      present: ["liara", "garrus"],
      speaker: "liara",
      text: "Cross-referencing Garrus's flight logs with Tali's data bursts... [Holographic console pulses cyan.] Got them. A decommissioned helium-3 mining station tucked inside the Trakis asteroid belt.",
      next: "choice_duo_planning"
    },

    // Baldur's Gate Style Dialogue Choice 2 (Dual Mode - Operation Planning)
    "choice_duo_planning": {
      type: "choice",
      present: ["liara", "garrus"],
      speaker: "shepard",
      choices: [
        {
          text: "What is our tactical insertion profile?",
          targetNode: "node_insertion_plan"
        },
        {
          text: "Good work, both of you. We are going to bring our people home.",
          type: "paragon",
          targetNode: "node_team_morale"
        },
        {
          text: "No survivors among the captors. Make sure they understand what happens to anyone who targets our crew.",
          type: "renegade",
          targetNode: "node_heavy_strike"
        },
        {
          text: "We have everything we need. Prep the stealth corvette. We depart immediately.",
          targetNode: "node_conclusion_test"
        }
      ]
    },

    "node_insertion_plan": {
      present: ["liara", "garrus"],
      speaker: "garrus",
      text: "My stealth corvette can insert us directly into their thermal sensor blind spot. Shepard and I drop through the exhaust ventilation shaft while Liara severs their exterior communications relay.",
      next: "choice_duo_planning"
    },

    "node_team_morale": {
      present: ["liara", "garrus"],
      speaker: "liara",
      text: "It is good to have you leading us again, John. The galaxy feels somewhat less terrifying with you at our head.",
      next: "choice_duo_planning"
    },

    "node_heavy_strike": {
      present: ["liara", "garrus"],
      speaker: "garrus",
      text: "My sniper rifle is chambered with high-velocity tungsten rounds. It will be a distinct pleasure settling accounts with Cerberus once and for all.",
      next: "choice_duo_planning"
    },

    "node_conclusion_test": {
      present: ["liara", "garrus"],
      speaker: "shepard",
      text: "Seal your armor seals and double-check your comm frequencies. Next stop: Trakis Asteroid Belt. We bring Tali home.",
      next: "node_final"
    },

    "node_final": {
      present: ["liara", "garrus"],
      speaker: "liara",
      text: "Test scene completed",
      next: null
    }
  }
};
