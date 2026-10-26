// data/chapters/2.dossier-shadow-broker/3b.presidium-hackett.js
// Act 3B: Presidium Embassies (Alliance Legacy & The Podium: Jack, Kaidan, James)

export const nodesPart3b = {
  "presidium_arrival": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[The elevator opens onto the Presidium Embassy walkway. Sunlight glints across the tranquil indoor reflection lake, framed by pristine white curved arches and manicured alien gardens. Even with scaffolding lining the upper ceiling, the Presidium radiates peace and architectural magnificence.]",
    next: "presidium_relay_approach"
  },

  "presidium_relay_approach": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I move toward the embassy communications hub concealed behind a decorative planter. Slipping off the access grate, I snap the second micro-wiretap into the optical relay bus.]",
    next: "presidium_relay_planted"
  },

  "presidium_relay_planted": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "system",
    text: "SHADOW BROKER SUBNET // DUAL NODE HANDSHAKE COMPLETE. SIGNAL AT 100%. TRIANGULATING ENCRYPTED BIOMETRICS... TARGET IDENTIFIED: DR. LIARA T'SONI. LOCATION: CITADEL ARCHIVES - PRESERVATION WING (PRE-HISTORIC TELEMETRY VAULT).",
    next: "presidium_ceremony_cue"
  },

  "presidium_ceremony_cue": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Before I can pull back into the corridor, a crisp military trumpet sounds across the embassy terrace. Above on the diplomatic balcony, an honor guard snaps to attention. A voice resonates over the speakers: 'All personnel, stand at attention for Fleet Admiral Steven Hackett.']",
    next: "presidium_hackett_spotted"
  },

  "presidium_hackett_spotted": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["hackett_real"],
    speaker: "shepard",
    text: "[I freeze behind the marble colonnade, looking up toward the balcony. Walking out to the central diplomatic podium is Fleet Admiral Steven Hackett himself, his dress uniform pristine and lined with Alliance honors. He approaches the lectern, preparing to address the Citadel assembly.]",
    next: "choice_presidium_hackett"
  },

  "choice_presidium_hackett": {
    type: "choice",
    present: ["hackett_real"],
    speaker: "shepard",
    choices: [
      {
        text: "[Ignore what Hackett is going to say and go to Liara immediately]",
        targetNode: "presidium_ignore_hackett",
        effects: { renegade: 1 }
      },
      {
        text: "[Listen to what Hackett has to say]",
        targetNode: "presidium_hackett_podium",
        effects: { paragon: 1 }
      }
    ]
  },

  "presidium_ignore_hackett": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Every second I spend listening to speeches is a second Tali remains in Cerberus custody. The Alliance has Hackett, Kaidan, and Vega to hold the line—my mission is elsewhere. I pull my cowl low, slip away from the terrace, and head directly toward the Citadel Archives.]",
    next: "archives_arrival"
  },

  "presidium_hackett_podium": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["hackett_real"],
    speaker: "hackett_real",
    text: "[Admiral Steven Hackett steps up to the central diplomatic podium, his voice carrying unmistakable command across the silent courtyard.] 'Ambassadors, soldiers, citizens of the Citadel. Two months ago, the Reapers believed our diversity was a fatal weakness.'",
    next: "presidium_hackett_speech_02"
  },

  "presidium_hackett_speech_02": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["hackett_real"],
    speaker: "hackett_real",
    text: "'They were wrong. One human proved that when krogan, turian, asari, quarian, and human stand shoulder to shoulder, nothing in this galaxy can extinguish our flame. Commander Shepard gave everything to forge this united front. But peace is not maintained by monuments—it is defended by those who take up the mantle.'",
    next: "presidium_hackett_calls_kaidan"
  },

  "presidium_hackett_calls_kaidan": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["hackett_real"],
    speaker: "hackett_real",
    text: "'To lead humanity's next generation of galactic guardians, the Council has vested authority in our second human Spectre. I call forward Major Kaidan Alenko.'",
    next: "presidium_kaidan_enters_podium"
  },

  "presidium_kaidan_enters_podium": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["kaidan"],
    speaker: "kaidan",
    text: "[Major Kaidan Alenko steps to the podium, clad in his Spectre armor and dark tactical cape. His eyes are steady, carrying the solemn weight of command.] 'Thank you, Admiral. Commander Shepard was my commanding officer, my mentor, and my brother. He taught us that being a Spectre isn't about unchecked power—it's about bearing impossible burdens so others don't have to.'",
    next: "presidium_kaidan_calls_candidates"
  },

  "presidium_kaidan_calls_candidates": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["kaidan"],
    speaker: "kaidan",
    text: "'To honor Shepard's legacy, the Alliance and the Citadel Council have authorized the expansion of our joint Spectre initiative. Today, I am proud to present the candidates entering humanity's Spectre pipeline under my direct mentorship: Lieutenant James Vega and Specialist Jack.'",
    next: "presidium_podium_trio_reveal"
  },

  "presidium_podium_trio_reveal": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["james", "kaidan", "jack"],
    speaker: "kaidan",
    text: "[Kaidan gestures to both sides of the podium. James Vega takes the left flank, tall and broad-shouldered in crisp Alliance dress service blues. Jack takes the right flank, clad in custom Alliance specialist tactical leather, her biotic amp cords humming with faint indigo energy.]",
    next: "presidium_shepard_pride"
  },

  "presidium_shepard_pride": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["james", "kaidan", "jack"],
    speaker: "shepard",
    text: "[Standing concealed behind the marble colonnade, watching the trio standing shoulder to shoulder on the podium, my chest swells with fierce, emotional pride. Vega and Jack making Spectre. Kaidan commanding with honor. They survived. They are carrying the torch.]",
    next: "presidium_shepard_farewell"
  },

  "presidium_shepard_farewell": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Watching from the quiet shadows of the colonnade, I whisper softly.] Stand tall, all three of you. Guard the Citadel... while I go get Tali back. [I turn away into the corridor and head toward the Citadel Archives.]",
    next: "archives_arrival"
  }
};
