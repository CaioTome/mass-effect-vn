// data/stories.js - Story & Chapter Registry (Mass Effect Visual Novel Engine)
import { chapter01 } from "./chapters/chapter-01.js";
import { testScene } from "./chapters/test-scene.js";

export const stories = [
  {
    id: "by_the_homeworld",
    title: "By the homeworld I hope to see one day with you",
    chapters: [
      {
        id: "chapter_01_third_chance",
        number: 1,
        title: "A Third Chance",
        data: chapter01,
        available: true,
        status: "Playable"
      },
      {
        id: "chapter_02_shadow_broker",
        number: 2,
        title: "Dossier: Shadow Broker",
        data: testScene,
        available: true,
        status: "Playable"
      },
      {
        id: "chapter_03_archangel",
        number: 3,
        title: "Dossier: Archangel",
        data: null,
        available: false,
        status: "Coming Soon"
      },
      {
        id: "chapter_04_priority_cerberus",
        number: 4,
        title: "Priority: Cerberus",
        data: null,
        available: false,
        status: "Coming Soon"
      }
    ]
  }
];
