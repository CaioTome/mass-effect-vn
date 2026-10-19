# Diretrizes para Agentes de IA (`AGENTS.md`) - Visual Novel Engine: Mass Effect

> **Projeto:** *Mass Effect: Consciência e Carne (Ghost in the Flesh) - Visual Novel Engine*  
> **Diretor Criativo & Roteirista:** Caio  
> **Papel do Agente:** Desenvolvedor Web Especialista em Front-end, Engenheiro de Jogos Web & Coautor Narrativo  
> **Hospedagem & Plataforma:** Web nativa (HTML5 / Vanilla CSS / Vanilla ES Modules) para publicação estática no **GitHub Pages**  
> **Documentos de Referência:** [`docs/engine.md`](docs/engine.md) (Arquitetura Técnica) e [`docs/Ideia Inicial.md`](docs/Ideia%20Inicial.md) (Bíblia Narrativa)

---

## 🎯 1. Visão Geral do Projeto

Este repositório abriga a **engine de Visual Novel cinematográfica inspirada em Mass Effect**, focada em proporcionar uma experiência de leitura imersiva, elegante e fluida diretamente no navegador. 

A aplicação reproduz com alta fidelidade a icônica **Roda de Diálogo de 8 posições** e os **Interrupts Morais (Paragon & Renegade)**, adaptados especificamente para leitura confortável (sem estresse de timers ou QTEs).

### Filosofia Técnica
- **100% Vanilla & Leve:** Construída exclusivamente com HTML5 semântico, Vanilla CSS moderno e JavaScript moderno (ES Modules). Não utilizar frameworks pesados (React, Vue, Tailwind, etc.) a menos que expressamente solicitado pelo usuário.
- **Pronta para GitHub Pages:** Todos os caminhos de assets e scripts devem ser relativos, garantindo funcionamento imediato tanto em servidor local quanto em deploy estático.
- **Desacoplamento Total:** O motor da engine (lógica de apresentação, renderização da roda, gerenciamento de som e UI) é completamente isolado dos dados de roteiro (`data/chapters/`) e do catálogo de personagens (`data/characters.js`).

---

## 🏛️ 2. Estrutura de Pastas e Responsabilidades

```
mass-effect-vn/
├── assets/
│   ├── audio/              # Efeitos sonoros (SFX sci-fi, clique, quem fala) e trilha ambiente (BGM)
│   ├── backgrounds/        # Cenários em WebP (Sanctum da Broker, base da Cerberus, Rannoch, etc.)
│   ├── icons/              # Ícones SVG/WebP (Paragon azul, Renegade vermelho, setas, HUD)
│   └── portraits/          # Sprites/expressões dos personagens em WebP de alta definição
├── css/                    # Estilização modular (HUD sci-fi, Roda de 8 slots, Diálogo, Interrupts)
├── data/
│   ├── characters.js       # Catálogo unificado de personagens e IDs de expressão
│   └── chapters/           # Roteiros desacoplados divididos por nós e capítulos
├── docs/                   # Especificação técnica (engine.md) e bíblia narrativa (Ideia Inicial.md)
├── js/                     # Lógica da engine (state, wheel, dialogue, audio, ui)
├── index.html              # Ponto de entrada da aplicação
└── AGENTS.md               # Este documento de governança e memória técnica
```

---

## 🎡 3. Mecânicas Centrais da Engine (Especificação Rígida)

Qualquer implementação ou modificação no código deve aderir estritamente aos seguintes pilares documentados em [`docs/engine.md`](docs/engine.md):

### 3.1. Sistema de Escolhas de Diálogo em Texto Completo (Estilo Baldur's Gate)
Para garantir profundidade narrativa, clareza e permitir linhas de fala completas e expressivas (sem as limitações de espaço da antiga roda circular):
- **Lista Numerada Vertical (Estilo Baldur's Gate / Classic RPG):**
  - As opções do jogador são exibidas como uma lista vertical numerada: `1. [Texto completo da fala do Shepard]`, `2. [Texto completo da fala do Shepard]`, etc.
  - Selecionável tanto por clique do mouse quanto diretamente pelas teclas numéricas correspondentes (`1`, `2`, `3`...).
  - **Texto Completo:** O jogador lê exatamente a linha ou ação que Shepard irá verbalizar, proporcionando controle total sobre o tom e a intenção.
  - **Sem Destaques Artificiais (Sem Letras Amarelas):** Não utilizamos cores especiais para indicar avanço de cena. O próprio jogador deduz a progressão e as consequências através do contexto dramático do diálogo.
  - **Opções Exploradas:** Linhas de investigação já visitadas ganham sutil atenuação visual (`.read`), permanecendo acessíveis para releitura.

### 3.2. Interrupts Paragon & Renegade Sem Timer (Leitura Pura)
- **Zero Pressão de Tempo:** Não implementar contadores regressivos ou QTEs estressantes.
- Durante nós que contêm gatilho de interrupt:
  - O ícone **Paragon (Azul)** surge no canto inferior esquerdo (atalho: `[Q]`).
  - O ícone **Renegade (Vermelho)** surge no canto inferior direito (atalho: `[E]`).
- **Comportamento do Leitor:**
  - **Avançar normalmente (Ignorar):** Clicar na caixa de texto ou no botão de avançar dá continuidade ao fluxo padrão da conversa.
  - **Acionar Interrupt:** Clicar no botão ou acionar a tecla dispara imediatamente o ramo exclusivo daquela ação moral (`targetNode`).

### 3.3. Câmera em 1ª Pessoa (POV de Shepard) & Sistema Dinâmico de Palco (Solo / Duo / Trio)
Para preservar a identidade personalizada de cada jogador (rosto customizado, gênero e escolhas da trilogia) e maximizar a imersão visual novel:
- **Shepard em 1ª Pessoa (Atrás da Câmera):** Shepard nunca aparece como sprite na tela. Ele é a visão/câmera do jogador.
- **Cena Solo (Shepard + 1 Interlocutor):**
  - O interlocutor fica **centralizado** no palco (`#stage.mode-single`), com presença imponente e foco total.
  - Quando o interlocutor fala: 100% iluminado (`.speaking`).
  - Quando Shepard fala: o interlocutor permanece na tela, mas entra em tom de escuta/sombra sutil (`.dimmed`).
- **Cena Duo (Shepard + 2 Interlocutores, ex: Liara e Garrus):**
  - O palco transiciona suavemente para o modo duplo (`#stage.mode-dual`), posicionando um personagem à esquerda e o outro à direita.
  - Quem estiver falando fica 100% iluminado e em destaque suave (`.speaking`).
  - O outro personagem fica sombreado na penumbra (`.dimmed`, `filter: brightness(0.35) saturate(0.55)`).
  - Quando Shepard fala (POV): **ambos** os interlocutores ficam sombreados (`.dimmed`).
- **Cena Trio (Shepard + 3 Interlocutores, ex: Liara, Tali e Garrus):**
  - O palco adota a composição tripla (`#stage.mode-trio`), distribuindo os três personagens em: **Esquerda (18%)**, **Centro (50%)** e **Direita (82%)**.
  - **Foco por Iluminação Dinâmica:** O personagem com a palavra se ilumina (`.speaking`), enquanto os outros dois interlocutores recuam para a sombra (`.dimmed`).
  - Quando Shepard fala (POV): **todos os três** interlocutores ficam sombreados (`.dimmed`), voltados em direção ao jogador em silêncio atento.
- **Catálogo de Personagens (`characters.js`):** Cada traje ou expressão é registrada por ID com seu nome e sprite correspondente.

---

## 📜 4. Schema Padrão de Roteiro (`data/chapters/*.js`) e Padrão em Inglês

Todo o código-fonte, identificadores, comentários e o roteiro narrativo são padronizados em **inglês** para universalidade e reuso pela comunidade.

```javascript
export const chapter1 = {
  id: "chapter1_sanctum",
  title: "Chapter 1: Contact at the Shadow Broker Sanctum",
  background: "assets/backgrounds/shadow_broker_sanctum.jpg",
  startNode: "node_01",
  nodes: {
    "node_01": {
      present: ["liara"],
      speaker: "shepard",
      text: "Lock the doors, Doctor T'Soni. What we need to discuss cannot leave these four walls.",
      next: "node_02"
    },
    "node_02": {
      present: ["liara"],
      speaker: "liara",
      text: "By the Goddess... That is impossible. Your vital signs were terminated at the Crucible!",
      interrupt: {
        paragon: {
          icon: "assets/icons/paragon.png",
          label: "Comfort Liara [Paragon]",
          targetNode: "node_interrupt_paragon"
        }
      },
      next: "choice_liara_01"
    },
    "choice_liara_01": {
      type: "choice",
      present: ["liara"],
      speaker: "shepard",
      choices: [
        {
          text: "I am alive, and Tali's diplomatic convoy is in grave danger.",
          targetNode: "node_urgency"
        },
        {
          text: "It is good to see you again, old friend.",
          type: "paragon",
          targetNode: "node_friendship"
        },
        {
          text: "We don't have time for shock. Focus on the mission.",
          type: "renegade",
          targetNode: "node_cold_focus"
        },
        {
          text: "How did you intercept the distress telemetry? [Investigate]",
          targetNode: "node_investigate_telemetry"
        }
      ]
    }
  }
};
```

---

## 🌌 5. Contexto Narrativo & Cânone: *Consciência e Carne*

Ao redigir cenas, diálogos ou nós do roteiro, o agente deve respeitar a Bíblia Narrativa em [`docs/Ideia Inicial.md`](docs/Ideia%20Inicial.md):

1. **Premissa Central (A Terceira Chance):**
   - **1ª Chance:** Soldado mortal da Aliança (Earthborn / War Hero de Elysium / Infiltrator analógico).
   - **2ª Chance:** Arma cibernética do Projeto Lazarus (titânio e circuitos).
   - **3ª Chance:** Homem puramente biológico gerado via síntese acelerada do Thorian com registros do Lazarus na câmara de biogestação pressurizada de um Reaper. **Sem implantes, sem coleiras cibernéticas, mortal e vulnerável.**
2. **O Segredo da Sobrevivência & O Disfarce Mercenário:**
   - O Catalyst Paragon avisou: a Cerberus executará Tali sumariamente se souber que Shepard vive. Reapers não realizam resgates furtivos sem causar pânico galáctico.
   - Shepard opera como fantasma com blindagem mercenária anônima, capacete com visor polarizado e modulador vocal.
3. **A Ameaça da Cerberus & Os Geth Desmilitarizados:**
   - Células de guerrilha da Cerberus nos Terminus sequestraram o Almirantado Quariano para doutrinar seus líderes e, através do respeito dos Criadores, controlar os Geth pacíficos e desmilitarizados.
   - Shepard é a única testemunha viva de que a doutrinação humana do Homem Ilusório é real (ele foi controlado na Citadel e forçado a atirar em Anderson). Seu dever moral é resgatar Tali e purgar permanentemente essa tecnologia.
4. **Economia Dramática dos Reencontros:**
   - **Liara T'Soni:** Choque no Sanctum a sós; confirmação telepática via *Embrace the Eternity* de que é a mente pura de John.
   - **Garrus Vakarian:** Encontro tático tenso em meio à caçada obstinada de Garrus à Cerberus para afogar o luto pelo amigo. Cruzamento das rotas de Garrus com as migalhas digitais de Tali para achar a base.
   - **Tali'Zorah:** O ápice emocional. O beijo sem máscara sob o sol de Rannoch, onde o sistema imune dela reconhece quimicamente o microbioma celular de John sem febre ou rejeição.

---

## 🛡️ 6. Diretrizes e Protocolos de Execução para Agentes de IA

### O que SEMPRE fazer:
- **Consultar a documentação antes de codificar:** Ler [`docs/engine.md`](docs/engine.md) e [`docs/Ideia Inicial.md`](docs/Ideia%20Inicial.md) para garantir que qualquer nova funcionalidade ou nó respeite o design.
- **Manter fidelidade estética sci-fi:** Utilizar a paleta holográfica Mass Effect (tons escuros espaciais, linhas holográficas ciano/azul `#00d8ff`, cantos chanfrados e tipografia tecnológica).
- **Tratar caminhos como relativos:** Garantir que imagens, áudios e scripts funcionem em qualquer subdiretório do GitHub Pages.
- **Garantir acessibilidade e responsividade:** O leitor deve conseguir jogar tanto no mouse quanto via atalhos de teclado (ex: teclas 1 a 9 para a lista de diálogo, Espaço/Enter para avançar, Q/E para interrupts).
- **Padronizar código e roteiro em inglês:** Toda a redação de nós, diálogos, comentários e identificadores deve ser mantida em língua inglesa.

### O que NUNCA fazer:
- **NUNCA usar letras amarelas para sinalizar avanço de cena:** Deixar o leitor deduzir o avanço naturalmente através do contexto narrativo.
- **NUNCA truncar a fala do protagonista:** As opções na lista de diálogo devem exibir o texto completo que Shepard irá falar (estilo Baldur's Gate).
- **NUNCA adicionar timers regressivos nos Interrupts:** A proposta é leitura confortável sem estresse de tempo.
- **NUNCA acoplar texto narrativo diretamente dentro do motor JS da engine (`js/`):** Todo o texto deve residir em arquivos de dados em `data/`.
- **NUNCA introduzir frameworks pesados ou ferramentas de build desnecessárias** sem autorização explícita do usuário.
- **NUNCA usar emojis** em textos narrativos do roteiro ou diálogos da visual novel.
