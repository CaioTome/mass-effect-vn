// data/chapters/2.dossier-shadow-broker/3a.presidium-hackett.js
// Act 3A: Presidium Embassies (Alliance Legacy: Hackett, Kaidan, Jack & James)

export const nodesPart3a = {
  "presidium_arrival": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[The rapid transit drops me off at the Presidium Embassy pavilion. Sunlight filters through the colossal skylight above, glinting off the tranquil waters of the reflection pond. Even with reconstruction scaffolding lining the upper arches, the Presidium feels majestic and serene.]",
    next: "presidium_relay_approach"
  },

  "presidium_relay_approach": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I locate the maintenance junction behind a cluster of alien ferns near the embassy concourse. Checking my surroundings, I slide open the service panel and snap the first micro-wiretap into the optic data bus.]",
    next: "presidium_relay_planted"
  },

  "presidium_relay_planted": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "system",
    text: "SHADOW BROKER SUBNET // TELEMETRY LINK 1/2 ESTABLISHED. OPTICAL TRAFFIC CAPTURED: 100%. SECOND JUNCTION REQUIRED FOR FULL TRIANGULATION.",
    next: "presidium_ceremony_cue"
  },

  "presidium_ceremony_cue": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[As I latch the panel shut, a crisp military chime chimes over the diplomatic terrace. A voice rings out across the balcony above: 'Attention! Fleet Admiral Steven Hackett presiding.']",
    next: "choice_presidium_lingering"
  },

  "choice_presidium_lingering": {
    type: "choice",
    present: [],
    speaker: "shepard",
    choices: [
      {
        text: "[Linger behind the marble colonnade to observe the Alliance ceremony.]",
        targetNode: "ceremony_linger_hackett",
        effects: { paragon: 2 }
      },
      {
        text: "[Keep moving. Mission comes first; avoid any chance of recognition.]",
        targetNode: "ceremony_bypass_quick",
        effects: { renegade: 1 }
      }
    ]
  },

  "ceremony_bypass_quick": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[I pull my collar tight and duck my armored head into the stream of passing diplomats. I can hear Hackett's booming voice behind me, but I keep walking. Every second I waste is a second Tali spends in Cerberus chains.]",
    next: "commons_arrival"
  },

  "ceremony_linger_hackett": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["hackett_real"],
    speaker: "hackett_real",
    text: "[On the upper embassy balcony, Admiral Steven Hackett stands tall at the podium, his chest adorned with medals, his grey eyes sweeping across an audience of human and Citadel ambassadors.] 'Two months ago, the galaxy faced absolute annihilation. The Reapers believed our diversity was a fatal flaw.'",
    next: "ceremony_hackett_speech_02"
  },

  "ceremony_hackett_speech_02": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["hackett_real"],
    speaker: "hackett_real",
    text: "'They were wrong. One human proved that when krogan, turian, asari, quarian, and human stand shoulder to shoulder, nothing in the cosmos can break us. Commander John Shepard gave everything to secure this peace. But peace is not built on monuments alone—it is sustained by the people who inherit it.'",
    next: "ceremony_kaidan_entry"
  },

  "ceremony_kaidan_entry": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["kaidan"],
    speaker: "kaidan",
    text: "[Major Kaidan Alenko steps up beside Hackett, wearing his Spectre uniform and crisp blue insignia. His voice carries quiet gravitas.] 'Shepard was my commanding officer, my mentor, and my brother. He taught us that being a Spectre isn't about unchecked authority... it's about carrying the burden so others don't have to.'",
    next: "ceremony_kaidan_new_gen"
  },

  "ceremony_kaidan_new_gen": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["kaidan", "james"],
    speaker: "kaidan",
    text: "'To honor John's legacy, the Alliance and the Citadel Council have authorized the expansion of our joint training initiative. Today, I am proud to formally present the candidates entering the Spectre training pipeline under my command: Lieutenant James Vega...'",
    next: "ceremony_james_jack"
  },

  "ceremony_james_jack": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: ["james", "jack"],
    speaker: "james",
    text: "[James Vega snaps a proud, razor-sharp salute, while beside him, Jack—dressed in Alliance specialist combat gear with biotic amplifiers humming at her wrists—crosses her arms with a fierce, confident smirk.]",
    next: "ceremony_shepard_emotion"
  },

  "ceremony_shepard_emotion": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Watching them from the shadows beneath the colonnade, a lump forms in my throat. Vega making Spectre. Jack mentoring the next generation. Kaidan leading with steady honor. They lived. My crew survived, and they are building the future I bled for.]",
    next: "ceremony_shepard_salute"
  },

  "ceremony_shepard_salute": {
    background: "assets/backgrounds/presidium_embassy.jpg",
    present: [],
    speaker: "shepard",
    text: "[Behind my polarized visor, I smile softly.] Make me proud, you three. Keep the galaxy safe... until I bring Tali home. [I turn away into the shadows and head toward the Commons.]",
    next: "commons_arrival"
  }
};
