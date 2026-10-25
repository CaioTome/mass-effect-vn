// data/chapters/2.dossier-shadow-broker/2.barla-von.js
// Act 2: Barla Von's Office (The Deal: Strategic Wiretaps)

export const nodesPart2 = {
  "barla_von_arrival": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I step into the high-end wealth management suite in the Financial District. The air is cooled to an exact chill, insulated by armored glass partitions overlooking the sprawling neon arcs of the station. Behind a massive desk of black marble sits Barla Von, his pressure suit hissing with every measured intake of breath.]",
    next: "barla_von_greet"
  },

  "barla_von_greet": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* I do not know what salvage or Terminus scrap you believe you can liquidate here, mercenary, but my agency oversees multi-billion-credit galactic portfolios. We do not barter with sellswords. State your business or return to the docks.",
    next: "choice_barla_von"
  },

  "choice_barla_von": {
    type: "choice",
    present: ["barla_von"],
    speaker: "shepard",
    choices: [
      {
        text: "\"I know who you really report to, Von. You handle covert Citadel assets for the Shadow Broker.\"",
        targetNode: "barla_choice_broker_asset",
        effects: { paragon: 1 }
      },
      {
        text: "\"Cut the financial posture, Barla. I know you work for the Broker, and I need Dr. Liara T'Soni.\"",
        targetNode: "barla_choice_direct_liara",
        effects: { renegade: 1 }
      }
    ]
  },

  "barla_choice_broker_asset": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[My modulator rasps low, deliberate and cold.] I didn't come for investment yields, Barla. I know who you really report to. You manage off-grid financial accounts and local contacts for the Shadow Broker. And right now, I need to reach Dr. Liara T'Soni.",
    next: "barla_von_shock"
  },

  "barla_choice_direct_liara": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I plant my armored gauntlets firmly on the polished marble counter.] Cut the banker posture, Von. I know you've laundered operations for the Shadow Broker for over a decade. I need Dr. Liara T'Soni, and you are going to tell me where she is.",
    next: "barla_von_shock"
  },

  "barla_von_shock": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* By the spirits! Keep your voice down, you lunatic! *Hiss-pant* How does an anonymous mercenary from the Terminus know about my affiliation with the Broker?! And why in the Council's name are you tracking Dr. T'Soni? She is a renowned Prothean scholar, a war hero... a public figure with Alliance security details!",
    next: "shepard_barla_demand"
  },

  "shepard_barla_demand": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "She's in danger, and so is someone she cares about. I have intelligence that cannot pass through public comms without getting people killed. Where is she, Von?",
    next: "barla_von_crisis"
  },

  "barla_von_crisis": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* Even if I wanted to help you, mercenary, the Broker's local surveillance grid is crippled! When the Citadel was dragged into the Sol system, relay towers collapsed across five sectors. Our listening nodes on the station are completely dark. We are blind.",
    next: "barla_von_deal_01"
  },

  "barla_von_deal_01": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* Dr. T'Soni moves between reconstruction sites and archive vaults under strict secrecy. My terminals cannot locate her while the network is fractured. But we can solve each other's problems... if you have the nerve for field operations.",
    next: "barla_von_deal_02"
  },

  "barla_von_deal_02": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "[Barla Von touches a biometric switch beneath the desk. A concealed compartment opens, revealing two sleek carbon-alloy modules.] Military-grade micro-wiretaps. Quantum encrypted. C-Sec sweeps will never detect them.",
    next: "barla_von_deal_03"
  },

  "barla_von_deal_03": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* I need you to install them in two critical nexus points in a strict sequence to calibrate the triangulation algorithm: First, plant the first unit in the public data hub at the Commons Memorial plaza. Then, take the transit to the Presidium and plant the second unit at the embassy communications relay.",
    next: "barla_von_deal_04"
  },

  "barla_von_deal_04": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* The moment the second wiretap syncs with the first, the Broker's subnet will lock onto Dr. T'Soni's personal omni-tool signal and feed her exact station coordinates directly to your armor's HUD.",
    next: "choice_barla_accept"
  },

  "choice_barla_accept": {
    type: "choice",
    present: ["barla_von"],
    speaker: "shepard",
    choices: [
      {
        text: "\"First the Commons Memorial, then the Presidium relay. Keep your decoders ready, Barla.\"",
        targetNode: "barla_accept_paragon",
        effects: { paragon: 1 }
      },
      {
        text: "\"If this telemetry leads me into a C-Sec ambush, Von, you'll be answering to my shotgun.\"",
        targetNode: "barla_accept_renegade",
        effects: { renegade: 1 }
      }
    ]
  },

  "barla_accept_paragon": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I secure both micro-wiretaps into my armored tactical mag-pouches.] First the Commons Memorial, then the Presidium relay. Keep your decoders ready, Barla.",
    next: "barla_von_depart"
  },

  "barla_accept_renegade": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I snatch the wiretaps off the marble desk.] If this telemetry leads me into a C-Sec ambush, Von, you'll be answering to my shotgun.",
    next: "barla_von_depart"
  },

  "barla_von_depart": {
    background: "assets/backgrounds/citadel_financial.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* The Broker values results, mercenary, not threats. Take the rapid transit to the Commons. The War Memorial plaza is your first target.",
    next: "transit_to_commons"
  },

  "transit_to_commons": {
    background: "assets/backgrounds/commons_memorial.jpg",
    present: [],
    speaker: "shepard",
    text: "[I leave the Financial District and board the monorail speeding toward the Commons. The station's artificial twilight deepens outside the windows as the train glides toward the solemn expanse of the War Memorial.]",
    next: "commons_arrival"
  }
};
