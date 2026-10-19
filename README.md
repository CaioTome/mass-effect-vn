# Mass Effect: Consciência e Carne - Visual Novel Engine

Repositório da engine de Visual Novel inspirada em *Mass Effect*, focada no sistema de **Roda de Diálogo (Dialogue Wheel)** e **Interrupts Paragon & Renegade**.

## 📁 Estrutura de Pastas

```
mass-effect-vn/
├── assets/
│   ├── audio/          # Músicas e efeitos sonoros (SFX)
│   ├── backgrounds/    # Imagens de fundo das cenas
│   ├── icons/          # Ícones de Paragon, Renegade e setas
│   └── portraits/      # Sprites/expressões dos personagens
├── css/                # Folhas de estilo (HUD sci-fi, Roda de Diálogo, Interrupts)
├── data/
│   └── chapters/       # Roteiro desacoplado em nós e capítulos
├── docs/               # Documentação técnica (engine.md) e bíblia narrativa
├── js/                 # Código da engine e lógica de leitura
└── index.html          # Ponto de entrada da aplicação
```

## 📖 Documentação

* Consulte [`docs/engine.md`](docs/engine.md) para a especificação técnica detalhada da Roda de 8 posições, sistema de personagens e interrupts sem timer.
