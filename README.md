# Mass Effect: Ghost in the Flesh - Visual Novel Engine

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-00d8ff?style=for-the-badge&logo=github)](https://caiotome.github.io/mass-effect-vn/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by-nc/4.0/)

An open-source, lightweight web Visual Novel engine inspired by *Mass Effect*, featuring first-person POV immersion, Baldur's Gate style full-line dialogue choices, dynamic stage lighting (speakers step into the light, listeners stay in the shadows), and stress-free moral interrupts without countdown timers.

Play the live demo directly in your browser:  
👉 **[https://caiotome.github.io/mass-effect-vn/](https://caiotome.github.io/mass-effect-vn/)**

---

## 🌌 Features

* **First-Person POV Camera:** Commander Shepard is the camera perspective, preserving custom facial designs, gender, and personal player canon without fixed protagonist sprites breaking immersion.
* **Dynamic Stage & Lighting System:**
  * **Solo Mode:** When talking one-on-one (e.g., Liara alone in her Sanctum), the companion is centered on screen.
  * **Dual Mode:** When a second companion joins (e.g., Garrus entering the briefing), the stage smoothly transitions to dual layout (left and right).
  * **Voice Focus (Light & Shadow):** The active speaker illuminates with full brightness (`.speaking`), while listening companions fade into the shadows (`.dimmed`). When Shepard speaks, all companions remain in the shadows listening.
* **Baldur's Gate Style Dialogue System:** Full spoken lines displayed in a numbered vertical list (selectable via clicks or keyboard keys `1`–`9`), allowing rich, untruncated narrative writing. No artificial color spoilers—progression is deduced naturally through context.
* **Stress-Free Moral Interrupts (No Timers):**
  * `[Q] Paragon Interrupt` (Blue wing, bottom-left)
  * `[E] Renegade Interrupt` (Red wing, bottom-right)
  * Readers can take their time to choose the moral intervention or simply click advance to proceed normally without quick-time event stress.
* **Procedural Sci-Fi Audio:** High-tech typewriter blips, chimes, and interrupt cues synthesized in real-time via the Web Audio API—no external audio files required.
* **100% Vanilla Tech Stack:** Built with semantic HTML5, modern Vanilla CSS, and modular ES JavaScript. Zero heavy frameworks, zero build steps, and immediately hostable on **GitHub Pages**.

---

## 📁 Repository Structure

```
mass-effect-vn/
├── assets/
│   ├── audio/              # Sound effects (SFX) & background music (BGM)
│   ├── backgrounds/        # Sci-fi backgrounds (Shadow Broker Sanctum, etc.)
│   ├── icons/              # Paragon & Renegade icons
│   └── portraits/          # High-resolution companion sprites (Liara, Garrus, Tali)
├── css/
│   └── style.css           # Mass Effect sci-fi HUD styling, scanlines, and lighting filters
├── data/
│   ├── characters.js       # Character definitions and portrait registry
│   └── chapters/           # Decoupled narrative chapters (e.g., test-scene.js)
├── docs/                   # Technical architecture (engine.md) and narrative bible
├── js/
│   ├── audio.js            # Web Audio API sound synthesizer
│   └── engine.js           # State machine, stage manager, and dialogue controller
├── index.html              # Main application entry point
├── AGENTS.md               # AI agent instructions and project guidelines
├── LICENSE.md              # Fan fiction disclaimer & CC BY-NC 4.0 license
└── README.md               # Project documentation
```

---

## ⚖️ Legal Disclaimer & License

This project is an unofficial fan tribute. All characters, names, lore, factions, and associated intellectual property of *Mass Effect* are the sole property of **BioWare** and **Electronic Arts Inc. (EA)**. The creator claims no rights to these properties.

The custom Visual Novel Engine code is open-source and free for personal, non-commercial adaptation under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**.

See the full [LICENSE.md](LICENSE.md) for complete details.
