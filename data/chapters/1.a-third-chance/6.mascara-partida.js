// data/chapters/1.a-third-chance/6.mascara-partida.js
// Phase 5: The Mask & Departure to Citadel

export const nodesPart6 = {
  "biometrics_console": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "To clear C-Sec checkpoints without alerting Alliance central intelligence, you require an untraceable mercenary civilian identity. Your regenerated fingerprints match no Alliance archive, the same flaw that betrayed the duplicate Cerberus grew from your Lazarus data on the Citadel. Place your palm on the sensor console.",
    next: "shepard_id_scanned"
  },

  "shepard_id_scanned": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I press my palm against the console. A laser grid sweeps across my skin with a sharp chime, and a dossier assembles itself on the display. I read it in silence: Name, John Moreau. Discharged Alliance marine. Freelancer chasing bounty contracts in the Terminus.]",
    next: "shepard_moreau_thought"
  },

  "shepard_moreau_thought": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[Moreau. Of all the names in the galaxy... Fingerprints that match nothing, just like that clone Cerberus cooked up on the Citadel during my shore leave. A fake name borrowed from the best pilot I ever flew with. Joker would love every second of this.]",
    next: "helm_sealed"
  },

  "helm_sealed": {
    present: ["catalyst_hackett"],
    speaker: "shepard",
    text: "[I lift the helmet over my head. Pneumatic seals hiss into the collar with a pressurized click. The visor polarizes pitch black, and the vocal modulator activates with a cold, robotic metallic rasp.] Moreau. Very funny.",
    next: "catalyst_liara_order"
  },

  "catalyst_liara_order": {
    present: ["catalyst_hackett"],
    speaker: "catalyst_hackett",
    text: "The coordinates of Liara's redoubt are already loaded into the shuttle's navigation computer.",
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
    next: null
  }
};
