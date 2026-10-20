// data/chapters/1.a-third-chance/2.projecao-familiar.js
// Phase 2: The Familiar Projection (Admiral Steven Hackett Appears)

export const nodesPart2 = {
  "hackett_beam_appear": {
    background: "assets/backgrounds/reaper_chamber.jpg",
    present: ["hackett"],
    speaker: "shepard",
    text: "[A vertical cyan beam pierces the gloom of the chamber, blinding my unadjusted eyes. I throw up a trembling forearm to shield my face.]",
    next: "hackett_beam_appear_02"
  },

  "hackett_beam_appear_02": {
    background: "assets/backgrounds/reaper_chamber.jpg",
    present: ["hackett"],
    speaker: "shepard",
    text: "[In the center of the beam, a life-sized holographic projection stabilizes: Admiral Steven Hackett in full Alliance dress uniform, hands clasped behind his back, solemn and commanding.]",
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
    text: "Control your breathing, Shepard. Your vitals are emerging from synaptic shock. Your nervous system just rebooted after a catastrophic overload. Stay where you are until your muscle tone stabilizes.",
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
    text: "The invasion is over, Commander. The Reapers were defeated. Two months have passed since the Battle of Earth. I am here to bring you up to speed on the galaxy before we address what comes next.",
    next: "choice_briefing_hub"
  }
};
