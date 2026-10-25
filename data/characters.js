// data/characters.js - Character Catalog (English)
export const characters = {
  // First-person protagonist (POV - no body sprite on screen)
  "shepard": {
    name: "Shepard",
    title: "Commander",
    isPlayer: true
  },

  // The Crew
  "liara": {
    name: "Liara T'Soni",
    title: "Shadow Broker",
    sprite: "assets/portraits/Liara.png"
  },
  "garrus": {
    name: "Garrus Vakarian",
    title: "Task Force Commander",
    sprite: "assets/portraits/Garrus.png"
  },
  "tali": {
    name: "Tali'Zorah",
    title: "Quarian Admiral",
    sprite: "assets/portraits/Tali.png"
  },

  // Command & Projections
  "hackett": {
    name: "Steven Hackett",
    title: "Admiral of the Fleet",
    sprite: "assets/portraits/hackett-real.png"
  },
  "hackett_real": {
    name: "Steven Hackett",
    title: "Admiral of the Fleet",
    sprite: "assets/portraits/hackett-real.png"
  },
  "catalyst_hackett": {
    name: "The Catalyst",
    title: "Synthesized Projection",
    sprite: "assets/portraits/hackett.png"
  },

  // Citadel & Chapter 2 Characters
  "barla_von": {
    name: "Barla Von",
    title: "Financial Agent",
    sprite: "assets/portraits/barla-von.png"
  },
  "kaidan": {
    name: "Kaidan Alenko",
    title: "Spectre / Alliance Major",
    sprite: "assets/portraits/kaiden.png"
  },
  "kaiden": {
    name: "Kaidan Alenko",
    title: "Spectre / Alliance Major",
    sprite: "assets/portraits/kaiden.png"
  },
  "james": {
    name: "James Vega",
    title: "N7 Candidate / Alliance Lieutenant",
    sprite: "assets/portraits/james.png"
  },
  "jack": {
    name: "Jack",
    title: "Biotic Instructor / Alliance Specialist",
    sprite: "assets/portraits/jack.png"
  },

  // System & Telemetry (No sprite on screen)
  "system": {
    name: "N7 // ARCHIVE",
    title: "Mission Telemetry",
    isPlayer: false
  }
};
