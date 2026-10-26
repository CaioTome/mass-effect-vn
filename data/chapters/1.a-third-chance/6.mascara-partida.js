// data/chapters/1.a-third-chance/6.mascara-partida.js
// Phase 5: The Mask & Departure to Citadel

export const nodesPart6 = {
  "biometrics_console": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "To clear C-Sec checkpoints without alerting Alliance central intelligence, you require an untraceable civilian contractor identity. Your regenerated fingerprints match no Alliance archive, the same flaw that betrayed the duplicate Cerberus grew from your Lazarus data on the Citadel. Place your palm on the sensor console.",
    next: "shepard_id_scanned"
  },

  "shepard_id_scanned": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I press my palm against the console. A laser grid sweeps across my skin with a sharp chime, and a dossier assembles itself on the display. I read it in silence: Name, John Moreau. Independent contractor chasing salvage and transport contracts in the Terminus.]",
    next: "shepard_moreau_thought"
  },

  "shepard_moreau_thought": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[Moreau. Of all the names in the galaxy... Fingerprints that match nothing, just like that clone Cerberus cooked up on the Citadel during my shore leave and a fake name borrowed from the best pilot I ever flew with. Joker would love every second of this.]",
    next: "choice_departure_hub"
  },

  "choice_departure_hub": {
    type: "choice",
    present: ["catalyst_hackett"],
    speaker: "shepard",
    choices: [
      {
        text: "Tell me more about Liara. How is she operating safely on the Citadel?",
        targetNode: "node_ask_about_liara"
      },
      {
        text: "Where is the rest of my crew? Where are Garrus, Joker, and the others?",
        targetNode: "node_ask_about_crew"
      },
      {
        text: "How secure is this 'John Moreau' contractor cover against C-Sec scanners?",
        targetNode: "node_ask_about_identity"
      },
      {
        text: "[Equip the civilian clothes with integrated armor and depart.]",
        targetNode: "helm_sealed"
      }
    ]
  },

  "node_ask_about_liara": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "As you recall, the Citadel was moved to the Sol system during the final battle and sustained severe structural damage. It is currently in orbit above Earth undergoing massive reconstruction. Doctor T'Soni is there, assisting with the station's recovery while covertly rebuilding the Shadow Broker's intelligence network. We know she is aboard the Citadel, but her exact location and the intelligence she has gathered remain shielded from our telemetry. You will have to track her down yourself.",
    next: "choice_departure_hub"
  },

  "node_ask_about_crew": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Doctor T'Soni commands the greatest intelligence network; she will be able to inform you far better than our tactical arrays.",
    next: "choice_departure_hub"
  },

  "node_ask_about_identity": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Your regenerated dermal ridges and retinal maps match zero Alliance personnel archives, precisely mirroring the biometric anomaly of the clone Cerberus cultivated during the war. To automated Citadel sensors, you are simply John Moreau: an unremarkable independent contractor arriving for decommissioned salvage. With your face shielded by a discreet cowl and your voice modulated, you will blend seamlessly into the civilian transit flow.",
    next: "choice_departure_hub"
  },

  "helm_sealed": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I pull on the civilian travel attire—fitted with lightweight integrated armor weave beneath the fabric. It is flexible, discreet, and indistinguishable from ordinary transit wear. I fasten the high cowl to obscure my lower face and activate the subtle electronic vocal modulator.] Moreau. Very funny. Let's go get her back.",
    next: "catalyst_final_salute"
  },

  "catalyst_final_salute": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "The orbital coordinates for the Citadel are already loaded into the shuttle's navigation computer. An unmarked long-range shuttle awaits in the lower ventral airlock. Find Liara, assemble what strength you need, and bring the Quarian leadership home.",
    next: "catalyst_salute"
  },

  "catalyst_salute": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[Hackett's projection straightens and snaps a perfect salute. Out of pure reflex, I return it.]",
    next: "catalyst_out"
  },

  "catalyst_out": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "Do not fail her, Shepard. Catalyst out.",
    next: "departure_final"
  },

  "departure_final": {
    present: [],
    speaker: "shepard",
    text: "[The holographic light dissipates into absolute silence. Massive hydraulic airlock doors grind open before me, exposing the dark silhouette of the stealth shuttle against the void.] Hang on, Tali. I'm coming for you.",
    next: "choice_chapter_01_complete"
  },

  "choice_chapter_01_complete": {
    type: "choice",
    present: [],
    speaker: "system",
    choices: [
      {
        text: "Advance to Chapter 2: Dossier: Shadow Broker",
        targetChapter: "chapter_02_shadow_broker"
      },
      {
        text: "Review Mission Archives (Chapter Select)",
        targetNode: "return_to_terminal_ch1"
      }
    ]
  },

  "return_to_terminal_ch1": {
    present: [],
    speaker: "system",
    text: "MISSION ACCOMPLISHED // Chapter 1: A Third Chance complete. Chapter 2: Dossier: Shadow Broker is now unlocked in the Mission Archives (ESC).",
    next: null
  }
};
