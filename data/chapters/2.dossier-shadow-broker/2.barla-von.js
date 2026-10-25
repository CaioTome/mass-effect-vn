// data/chapters/2.dossier-shadow-broker/2.barla-von.js
// Act 2: Barla Von's Office (The Deal: Strategic Wiretaps)

export const nodesPart2 = {
  "barla_von_arrival": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I enter the discreet financial consulting suite nestled deep within the Financial District. The air is quiet, cooled by private server racks. Behind a curved desk of polished obsidian sits Barla Von, his pressure suit hissing in rhythmic mechanical breaths.]",
    next: "barla_von_greet"
  },

  "barla_von_greet": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* I do not know what scrap or battlefield salvage you think you have to sell, mercenary, but my office handles high-yield galactic bonds, not Terminus plundered metal. State your business or return to the docks.",
    next: "choice_barla_von"
  },

  "choice_barla_von": {
    type: "choice",
    present: ["barla_von"],
    speaker: "shepard",
    choices: [
      {
        text: "\"Account 884-Omicron. Blind routing protocol through the Citadel Bank. The Broker's primary ledger.\"",
        targetNode: "barla_choice_insider",
        effects: { paragon: 1 }
      },
      {
        text: "\"Cut the accountant act, Von. I didn't come for bonds. I need Dr. T'Soni, and you know exactly where she is.\"",
        targetNode: "barla_choice_direct",
        effects: { renegade: 1 }
      }
    ]
  },

  "barla_choice_insider": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[My modulator rasps low and steady.] Account 884-Omicron. Blind routing protocol through the Citadel Bank. The Shadow Broker's primary Citadel disbursement ledger. Still clearing dividends, Barla Von?",
    next: "barla_von_shock"
  },

  "barla_choice_direct": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I lean over his desk, letting the armored gauntlets rest within inches of his terminal.] Cut the accountant act, Von. I didn't come for bonds. I need Dr. T'Soni, and you manage her off-grid Citadel assets.",
    next: "barla_von_shock"
  },

  "barla_von_shock": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* By the spirits... How does an anonymous mercenary know that routing key?! That cipher is buried beneath forty layers of encrypted quantum algorithms! Who gave you that protocol?!",
    next: "shepard_barla_demand"
  },

  "shepard_barla_demand": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "Someone who knows the Broker inside and out. Where is Liara, Von? I need a clean channel with her immediately.",
    next: "barla_von_crisis"
  },

  "barla_von_crisis": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* If you truly know the network, mercenary, then you must know the Broker's local surveillance was shattered during the Reaper assault. Station relay towers collapsed. Half our listening posts on the Presidium are stone cold blind.",
    next: "barla_von_deal_01"
  },

  "barla_von_deal_01": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* Dr. T'Soni moves under high security. Even I do not have a live satellite lock on her position while the relays are dead. But we can change that... if you have the stomach for field work.",
    next: "barla_von_deal_02"
  },

  "barla_von_deal_02": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "[Barla Von pulls a velvet-lined case from beneath his desk and slides two miniature carbon-fiber transceivers across the counter.] Military-grade micro-wiretaps. Sub-quantum frequency. C-Sec sweeps will never detect them.",
    next: "barla_von_deal_03"
  },

  "barla_von_deal_03": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* Plant the first in the communications junction at the Presidium Embassies. Plant the second at the public terminal in the Commons Memorial plaza. The moment both devices link, the Broker's system will triangulate Dr. T'Soni's exact location on the station.",
    next: "choice_barla_accept"
  },

  "choice_barla_accept": {
    type: "choice",
    present: ["barla_von"],
    speaker: "shepard",
    choices: [
      {
        text: "\"Two relays. Consider it done, Barla. Keep your receivers tuned.\"",
        targetNode: "barla_accept_paragon",
        effects: { paragon: 1 }
      },
      {
        text: "\"If those wiretaps trigger an alarm, Von, I'll come back and dismantle that respirator myself.\"",
        targetNode: "barla_accept_renegade",
        effects: { renegade: 1 }
      }
    ]
  },

  "barla_accept_paragon": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I take the two micro-transceivers and pocket them into my belt mag-pouches.] Two relays. Consider it done, Barla. Keep your receivers tuned to the handshake signal.",
    next: "barla_von_depart"
  },

  "barla_accept_renegade": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "shepard",
    text: "[I snatch the transceivers off the desk.] If those wiretaps trigger an alarm, Von, I'll come back and dismantle that pressure suit myself.",
    next: "barla_von_depart"
  },

  "barla_von_depart": {
    background: "assets/backgrounds/shadow_broker_sanctum.jpg",
    present: ["barla_von"],
    speaker: "barla_von",
    text: "*Hiss-pant* The transceivers are flawless, soldier. Go to the Presidium first. The embassy relay awaits.",
    next: "presidium_arrival"
  }
};
