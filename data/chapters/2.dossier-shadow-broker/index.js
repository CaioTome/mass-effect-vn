// data/chapters/2.dossier-shadow-broker/index.js - Chapter 2: Dossier: Shadow Broker
import { nodesPart1 } from "./1.citadel-gates.js";
import { nodesPart2 } from "./2.barla-von.js";
import { nodesPart3a } from "./3a.presidium-hackett.js";
import { nodesPart3b } from "./3b.commons-memorial.js";
import { nodesPart4 } from "./4.citadel-archives.js";
import { nodesPart5 } from "./5.apartment-sanctum.js";

export const chapter02 = {
  id: "chapter_02_shadow_broker",
  title: "Dossier: Shadow Broker",
  background: "assets/backgrounds/citadel_docks.jpg",
  startNode: "citadel_gates_01",
  nodes: {
    ...nodesPart1,
    ...nodesPart2,
    ...nodesPart3a,
    ...nodesPart3b,
    ...nodesPart4,
    ...nodesPart5
  }
};
