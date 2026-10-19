// data/stories.js - Story & Chapter Registry (Mass Effect Visual Novel Engine)
import { testScene } from "./chapters/test-scene.js";

export const stories = [
  {
    id: "by_the_homeworld",
    title: "By the homeworld I hope to see one day with you",
    originalTitle: "Mass Effect: Ghost in the Flesh",
    author: "Caio",
    synopsis: "Reborn in mortal, 100% biological flesh within the heart of a Reaper and stripped of cybernetic implants, Commander Shepard must operate as a ghost. Partnering with Liara and Garrus, Shepard must rescue Tali'Zorah from rogue Cerberus guerrilla cells before they indoctrinate the Quarian Admiralty to control the demilitarized Geth.",
    tags: ["Post-Control Paragon", "Tali Romance", "First-Person POV", "Black-Ops Stealth"],
    cover: "assets/backgrounds/shadow_broker_sanctum.jpg",
    chapters: [
      {
        id: "prologue_reaper",
        number: "PROLOGUE",
        title: "Awakening in the Machine",
        summary: "The sensory shock of organic re-gestation in a pressurized Reaper chamber, and John Shepard's conversation with the Catalyst's projection.",
        data: null,
        available: false,
        status: "In Development"
      },
      {
        id: "test_scene_sanctum",
        number: "CHAPTER 01",
        title: "Contact at the Shadow Broker Sanctum",
        summary: "Shepard arrives in mercenary guise at Liara's sanctum to decode Tali's encrypted micro-bursts, before Garrus arrives with tactical convoy telemetry.",
        data: testScene,
        available: true,
        status: "Playable"
      },
      {
        id: "chapter_02_hunt",
        number: "CHAPTER 02",
        title: "The Iron Test",
        summary: "Reuniting with Garrus aboard his special operations stealth corvette, tracking Cerberus logistics across Perseus, and overcoming grief with duty.",
        data: null,
        available: false,
        status: "Coming Soon"
      },
      {
        id: "chapter_03_nest",
        number: "CHAPTER 03",
        title: "The Guerrilla's Nest",
        summary: "Infiltration of the decommissioned helium-3 mining station in the Trakis Asteroid Belt to rescue Tali and purge the indoctrination servers.",
        data: null,
        available: false,
        status: "Coming Soon"
      },
      {
        id: "chapter_04_rannoch",
        number: "CHAPTER 04",
        title: "By the Homeworld",
        summary: "The Catalyst's final disconnect, the mask removed under the morning sun of Rannoch, and the beginning of the Third Chance.",
        data: null,
        available: false,
        status: "Coming Soon"
      }
    ]
  }
];
