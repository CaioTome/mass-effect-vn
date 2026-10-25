// data/chapters/1.a-third-chance/index.js - Chapter 1: A Third Chance (Mass Effect Visual Novel)
import { nodesPart1 } from "./1.despertar-carne.js";
import { nodesPart2 } from "./2.projecao-familiar.js";
import { nodesPart3 } from "./3.briefing-galaxia.js";
import { nodesPart4a } from "./4a.renegade-desmascaramento.js";
import { nodesPart4b } from "./4b.revelacao-gradual.js";
import { nodesPart5 } from "./5.peso-carne-mortal.js";
import { nodesPart6 } from "./6.mascara-partida.js";

export const chapter01 = {
  id: "chapter_01_third_chance",
  title: "A Third Chance",
  background: "assets/backgrounds/reaper_chamber.jpg",
  startNode: "awakening_01",
  nextChapterId: "chapter_02_shadow_broker",
  nodes: {
    ...nodesPart1,
    ...nodesPart2,
    ...nodesPart3,
    ...nodesPart4a,
    ...nodesPart4b,
    ...nodesPart5,
    ...nodesPart6
  }
};
