# Especificação Técnica da Engine Visual Novel: *Mass Effect*

> **Documento de Arquitetura & Implementação Técnica**  
> **Projeto:** *Mass Effect: Consciência e Carne (Ghost in the Flesh)*  
> **Diretor Criativo & Roteirista:** Caio  
> **Plataforma:** Web nativa (HTML5 / Vanilla CSS moderno / Vanilla ES Modules / Web Audio API) para publicação estática no **GitHub Pages**  
> **Padrão de Código & Dados:** 100% Desacoplado, sem frameworks pesados, padronizado em **inglês** nos dados executáveis e **português** na documentação/planejamento.

---

## 🎯 1. Visão Geral & Filosofia Arquitetural

A engine foi projetada para oferecer uma **experiência pura de leitura interativa cinematográfica**, combinando a estética icônica da interface holográfica de *Mass Effect* com a profundidade mecânica de RPGs modernos (estilo *Baldur's Gate*):

* **100% Vanilla & Ultra-Leve:** Construída estritamente com HTML5 semântico, CSS moderno estruturado com variáveis customizadas (`:root`) e JavaScript modular (ES Modules). Não depende de React, Vue, Vite, bundlers ou pré-processadores.
* **Pronta para Deploy Estático:** Totalmente compatível com GitHub Pages sem etapa de build. Todos os caminhos de assets e módulos são relativos.
* **Desacoplamento Total:**
  * **Motor (`js/engine.js`):** Máquina de estados, renderizador de palco, gerenciador de diálogo e roteador de nós.
  * **Áudio Procedural (`js/audio.js`):** Síntese sonora em tempo real via Web Audio API (sem dependência estrita de arquivos de áudio externos para SFX da interface).
  * **Catálogo de Personagens (`data/characters.js`):** Registro independente de IDs, nomes e sprites.
  * **Registro de Histórias (`data/stories.js`):** Registro de campanhas e capítulos.
  * **Roteiros Modulares (`data/chapters/`):** Capítulos particionados em pastas e arquivos modulares por fases dramáticas.

---

## 👁️ 2. Câmera em 1ª Pessoa (POV de Shepard) & Stage Manager Dinâmico

Para garantir imersão máxima e preservar o Shepard personalizado de cada jogador (gênero, rosto, escolhas da trilogia clássica), a engine adota o ponto de vista em primeira pessoa:

### 2.1. Câmera POV de John Shepard
* **Shepard Atrás da Lente:** John Shepard **nunca** possui sprite visível no palco. A tela representa a visão direta dos seus olhos.
* **Narração em 1ª Pessoa:** Todas as ações, percepções sensoriais e eventos de cena entre colchetes `[...]` são redigidos estritamente a partir da perspectiva de Shepard (ex: `"[I force my eyes open, dazed. My heart pounds against my ribs.]"`). Nunca usar 2ª pessoa ("You see") ou 3ª pessoa para o protagonista.

### 2.2. Modos de Palco Automáticos (`#stage`)
A engine inspeciona a lista `present: [...]` do nó atual e ajusta automaticamente a classe do `#stage`:

```
+-----------------------------------------------------------------------------------+
| MODO SOLO (#stage.mode-single)                                                    |
|                                [ Interlocutor ]                                   |
|                                    (Centro)                                       |
+-----------------------------------------------------------------------------------+
| MODO DUO (#stage.mode-dual)                                                       |
|        [ Interlocutor A ]                             [ Interlocutor B ]          |
|            (Esquerda)                                      (Direita)              |
+-----------------------------------------------------------------------------------+
| MODO TRIO (#stage.mode-trio)                                                      |
|   [ Interlocutor A ]           [ Interlocutor B ]            [ Interlocutor C ]   |
|     (Esquerda 18%)               (Centro 50%)                  (Direita 82%)      |
+-----------------------------------------------------------------------------------+
```

1. **Modo Solo (`.mode-single`):** Quando há 1 interlocutor em cena (ex: `present: ["hackett"]` ou `present: ["liara"]`). O personagem fica posicionado no centro absoluto do palco.
2. **Modo Duo (`.mode-dual`):** Quando há 2 interlocutores (ex: `present: ["liara", "garrus"]`). Distribui um personagem à esquerda e outro à direita.
3. **Modo Trio (`.mode-trio`):** Quando há 3 interlocutores (ex: `present: ["liara", "tali", "garrus"]`). Posiciona os três personagens com espaçamento harmônico (Esquerda a 18%, Centro a 50%, Direita a 82%).

### 2.3. Sistema Dinâmico de Iluminação e Foco de Voz (Voice Focus)
A iluminação guia o olho do jogador dinamicamente através do interlocutor que está com a palavra:
* **Personagem Falando (`speaker === charId`):**
  * Recebe a classe `.speaking`.
  * Iluminação total (`filter: brightness(1) saturate(1)`), ligeiro aumento de escala (`scale(1.02)`) e sombra ciano holográfica suave.
* **Personagens em Silêncio (`speaker !== charId`):**
  * Recebem a classe `.dimmed`.
  * Recuam para a penumbra (`filter: brightness(0.35) saturate(0.55)`), focando a atenção de volta no interlocutor ativo.
* **Quando Shepard Fala (`speaker: "shepard"`):**
  * **Todos** os personagens presentes no palco entram no estado `.dimmed`, voltados para a câmera ouvindo com atenção a fala do Comandante.

---

## 📜 3. Sistema de Diálogo Estilo Baldur's Gate (Vertical Full-Text Choices)

Em vez de resumos curtos limitados pelo espaço circular de uma roda, as escolhas utilizam uma lista vertical com o texto completo da fala:

### 3.1. Características Centrais
* **Texto Integral:** O jogador lê exatamente o que Shepard irá verbalizar, permitindo controle fino do tom, da postura e da intenção.
* **Sem Destaques Artificiais (Sem Letras Amarelas):** O leitor percebe o avanço natural da cena pelo contexto dramático do diálogo, sem cores que "entreguem" a opção que avança a história.
* **Atalhos Numéricos Ágeis:** O jogador pode selecionar as opções tanto pelo clique do mouse quanto diretamente pelo teclado pressionando as teclas `1` a `9`.
* **Rastreamento de Opções Lidas:** Linhas investigativas já exploradas recebem a classe `.read`, atenuando a cor para facilitar a navegação em hubs de perguntas sem impedir a releitura.

### 3.2. Alinhamentos Morais nas Escolhas
As escolhas podem declarar alinhamento moral explícito através da propriedade `type`:
* **Neutra / Investigativa:** Borda ciano sutil padrão.
* **`type: "paragon"`:** Borda e número em azul Paragon (`#00aaff`), acento luminoso ciano e hover com brilho azulado.
* **`type: "renegade"`:** Borda e número em vermelho Renegade (`#ff3344`), acento luminoso rubro e hover com brilho avermelhado.

### 3.3. Requisitos & Opções Bloqueadas (`requires` & `showLocked`)
Quando uma opção exige requisitos de contador moral (`paragon`, `renegade`), flags de história ou contadores de investigação (`temp`), o motor avalia a condição:
* **Opção Oculta:** Por padrão, opções cujos requisitos não são atendidos não são exibidas.
* **Opção Bloqueada Visível (`showLocked: true`):** A opção é renderizada com opacidade reduzida, cursor de bloqueio (`not-allowed`) e um badge informativo com o que é necessário para desbloqueá-la:
  * `[Investigate more (1/2)]` (para requisitos de contador temporário).
  * `[Requires 2 Paragon]` / `[Requires 2 Renegade]`.
  * `[Locked]`.
* **Feedback de Acesso Negado:** Tentar clicar ou teclar o número de uma opção bloqueada dispara o som de bloqueio/erro da interface (`audio.playLocked()`).

---

## ⚡ 4. Sistema de Interrupts Morais Sem Timer (Leitura Pura)

Inspirado nos momentos dramáticos de *Mass Effect 2* e *3*, mas adaptado para o ritmo confortável de leitura:

```
+-----------------------------------------------------------------------------------+
| [Caixa de Diálogo Principal: Texto da Cena...]                                    |
|                                                                                   |
| (AZUL - Canto Inferior Esquerdo)                            (VERMELHO - Canto Dir)|
| +--------------------------------+               +--------------------------------+
| | [Q] PARAGON INTERRUPT          |               | [E] RENEGADE INTERRUPT         |
| | Acalmar Liara [Paragon]        |               | Break the Illusion [Renegade]  |
| +--------------------------------+               +--------------------------------+
+-----------------------------------------------------------------------------------+
```

* **Zero Pressão de Tempo:** Não existem barras decrescentes ou QTEs estressantes. Os botões surgem na tela e permanecem enquanto o nó atual estiver ativo.
* **Dois Comportamentos Possíveis:**
  1. **Ignorar o Interrupt:** Clicar na caixa de texto ou avançar prossegue pelo fluxo narrativo padrão do nó (`next`).
  2. **Acionar o Interrupt:** Clicar no botão ou acionar o atalho de teclado correspondente (`[Q]` para Paragon, `[E]` para Renegade) interrompe a cena e pula imediatamente para o `targetNode`.
* **Gatilhos Condicionais:** Interrupts podem definir `requires`, tornando-se disponíveis apenas após certas condições (ex: o interrupt Renegade para quebrar a farsa do Catalyst só surge após Shepard fazer pelo menos 2 perguntas no briefing).

---

## 💾 5. Gerenciamento de Estado, Persistência e Flags

O estado global da engine é gerenciado pela classe `VNEngine` e estruturado em três níveis:

```javascript
this.state = {
  paragon: 0,         // Pontos morais persistentes (localStorage)
  renegade: 0,        // Pontos morais persistentes (localStorage)
  flags: {},          // Marcadores booleanos persistentes (localStorage)
  temp: {}            // Contadores voláteis por cena/capítulo (NUNCA salvos)
};
```

### 5.1. Persistência em `localStorage` (`SAVE_KEY: "mass-effect-vn-save-v1"`)
* **O que é salvo:** Pontuação de `paragon`, pontuação de `renegade` e o dicionário de `flags` (ex: `{ saved_wrex: true, romance_tali: true }`).
* **O que NÃO é salvo:**
  * O nó atual da cena (ao recarregar a página, o jogador inicia no começo do capítulo para garantir fluidez cinematográfica).
  * O objeto `temp`, que é puramente transitório.
* **Reset com Dupla Confirmação:** O botão de reinício no HUD apaga o `localStorage`, recria o estado limpo e reinicia o primeiro capítulo.

### 5.2. Contadores Temporários (`temp`)
* Utilizados para hubs investigativos locais, permitindo medir quantas perguntas o jogador já realizou antes de desbloquear opções decisivas ou interrupts.
* **Zera automaticamente** sempre que um novo capítulo é carregado (`this.state.temp = {}`).

### 5.3. Efeitos (`effects`) & Requisitos (`requires`)
* **`effects`:** Soma valores aos contadores quando uma opção é selecionada:
  ```javascript
  effects: {
    paragon: 1,
    temp: { briefing_questions: 1 },
    flags: { learned_geth_peace: true }
  }
  ```
  * **Proteção contra Abuso:** Em menus de escolhas de hubs, os efeitos são aplicados apenas na **primeira vez** que a opção é escolhida. Reler perguntas investigativas não infla artificialmente os contadores.
* **`requires`:** Avalia se o estado atende todos os critérios mínimos:
  ```javascript
  requires: {
    paragon: 2,
    flags: { saved_wrex: true },
    temp: { briefing_questions: 2 }
  }
  ```

---

## 🧩 6. Schema de Dados dos Roteiros (`data/chapters/`)

Cada capítulo é um objeto estruturado contendo metadados e um mapa indexado de `nodes`:

```javascript
export const chapterExample = {
  id: "chapter_id_slug",
  title: "Chapter Title",
  background: "assets/backgrounds/scene_background.jpg",
  startNode: "node_initial",
  nodes: {
    // Nós do capítulo...
  }
};
```

### 6.1. Schema de Nó Narrativo Padrão
```javascript
"node_id": {
  background: "assets/backgrounds/optional_override.jpg", // Opcional (se mudar o cenário)
  present: ["liara", "garrus"],                          // Personagens no palco (Solo, Duo, Trio)
  speaker: "liara",                                      // ID de quem fala (ou "shepard")
  text: "Linha de diálogo ou ação narrativa.",
  
  // Interrupt moral opcional (sem timer)
  interrupt: {
    paragon: {
      icon: "assets/icons/paragon.png",
      label: "Comfort Companion [Paragon]",
      requires: { temp: { questions: 2 } },              // Opcional
      targetNode: "node_interrupt_paragon"
    },
    renegade: {
      icon: "assets/icons/renegate.png",
      label: "Demand Answers [Renegade]",
      targetNode: "node_interrupt_renegade"
    }
  },
  
  next: "next_node_id"                                   // ID do próximo nó (ou null para encerrar)
}
```

### 6.2. Schema de Nó de Escolhas (Choice Hub)
```javascript
"choice_hub_id": {
  type: "choice",
  present: ["hackett"],
  speaker: "shepard",
  interrupt: { ... },                                     // Interrupts permanecem ativos durante o hub
  choices: [
    {
      text: "Opção normal investigativa...",
      effects: { temp: { briefing_questions: 1 } },      // Concede contador
      targetNode: "node_investigate_answer"
    },
    {
      text: "Linha de tom diplomático e encorajador.",
      type: "paragon",                                    // Alinhamento moral Paragon
      effects: { paragon: 1 },
      targetNode: "node_paragon_response"
    },
    {
      text: "Linha de tom firme, agressivo ou pragmático.",
      type: "renegade",                                   // Alinhamento moral Renegade
      effects: { renegade: 1 },
      targetNode: "node_renegade_response"
    },
    {
      text: "Opção decisiva avançada.",
      requires: { temp: { briefing_questions: 2 } },     // Requisito mínimo
      showLocked: true,                                   // Fica visível e esmaecida se bloqueada
      targetNode: "node_conclusion"
    }
  ]
}
```

---

## 📁 7. Modularização de Capítulos em Subpastas

Para evitar arquivos monolíticos de milhares de linhas e permitir manutenção ágil, todo capítulo narrativo deve seguir o padrão modular em subpastas:

```
data/chapters/
└── 1.a-third-chance/
    ├── 1.despertar-carne.js              # Fase 1: Despertar sensorial e fraqueza mortal
    ├── 2.projecao-familiar.js            # Fase 2: Aparição de Hackett
    ├── 3.briefing-galaxia.js             # Fase 3: Hub investigativo & Interrupt Renegade
    ├── 4a.renegade-desmascaramento.js    # Ramo A: Quebra da farsa & Pacto por Tali
    ├── 4b.revelacao-gradual.js           # Ramo B: Revelação gradual do Catalyst & Crise
    ├── 5.peso-carne-mortal.js            # Fase 4: Equipamento & Ausência de cibernéticos
    ├── 6.mascara-partida.js              # Fase 5: Dossiê John Moreau & Partida
    └── index.js                          # Agregador central do capítulo
```

### 7.1. Convenção de Nomenclatura dos Arquivos de Nós
* `[numero-da-parte].[resumo-curto].js` (ex: `1.despertar-carne.js`, `4a.renegade-desmascaramento.js`).
* Cada módulo exporta um objeto de nós dedicado (ex: `export const nodesPart1 = { ... };`).

### 7.2. O Arquivo Agregador `index.js`
O arquivo `index.js` reúne todos os blocos de nós e exporta o objeto unificado do capítulo:

```javascript
// data/chapters/1.a-third-chance/index.js
import { nodesPart1 } from "./1.despertar-carne.js";
import { nodesPart2 } from "./2.projecao-familiar.js";
import { nodesPart3 } from "./3.briefing-galaxia.js";
import { nodesPart4a } from "./4a.renegade-desmascaramento.js";
import { nodesPart4b } from "./4b.revelacao-gradual.js";
import { nodesPart5 } from "./5.peso-carne-mortal.js";
import { nodesPart6 } from "./6.mascara-partida.js";

export const chapter01 = {
  id: "chapter_01_third_chance",
  title: "A Third Chance",
  background: "assets/backgrounds/reaper_chamber.jpg",
  startNode: "awakening_01",
  nodes: {
    ...nodesPart1,
    ...nodesPart2,
    ...nodesPart3,
    ...nodesPart4a,
    ...nodesPart4b,
    ...nodesPart5,
    ...nodesPart6
  }
};
```

### 7.3. Registro no Catálogo de Histórias (`data/stories.js`)
O capítulo é conectado diretamente à lista de histórias jogáveis:

```javascript
// data/stories.js
import { chapter01 } from "./chapters/1.a-third-chance/index.js";

export const stories = [
  {
    id: "by_the_homeworld",
    title: "By the homeworld I hope to see one day with you",
    chapters: [
      {
        id: "chapter_01_third_chance",
        number: 1,
        title: "A Third Chance",
        data: chapter01,
        available: true,
        status: "Playable"
      },
      // Demais capítulos futuros ("Coming Soon")...
    ]
  }
];
```

---

## 🔊 8. Motor de Áudio Procedural (Web Audio API)

O módulo `js/audio.js` sintetiza sonoridades de interface holográfica sci-fi puras em tempo real usando osciladores e curvas de ganho exponenciais do Web Audio API, sem latência de carregamento de arquivos externos:

* **`playHover()`:** Bip sutil senoidal de 880 Hz modulado em 35ms para feedback tátil de foco no menu.
* **`playClick()`:** Pulso rápido de 520 Hz a 260 Hz simulando ativação de botão holográfico.
* **`playLocked()`:** Tom dissonante descendente (220 Hz a 110 Hz) indicando opção indisponível.
* **`playInterrupt()`:** Pulso harmônico de alerta moral quando um Interrupt surge na cena.
* **`playTypewriter()`:** Cliques sutis de ruído branco simulando escrita em terminal de dados.
* **`playModalOpen()` / `playModalClose()`:** Varrer de frequências graves e agudas para abertura e fechamento de painéis.

---

## 🎮 9. Padrões de Roteiro & Casos de Uso Reais

### 9.1. Transição de Palco Multi-Personagem (Solo ➔ Duo ➔ Trio)
Demonstrada na progressão de planejamento no Sanctum da Shadow Broker:
1. **Fase 1 (Solo):** Shepard conversa a sós com Liara (`present: ["liara"]`). Liara fica imponente no centro da tela.
2. **Fase 2 (Duo):** Garrus entra na sala (`present: ["liara", "garrus"]`). O palco desliza suavemente para o modo duplo. Quando Garrus fala, Liara escurece; quando Liara fala, Garrus escurece; quando Shepard fala, ambos escurecem.
3. **Fase 3 (Trio):** Transmissão interceptada de Tali (`present: ["liara", "tali", "garrus"]`). O palco divide-se em três colunas. Tali centraliza a chamada de socorro e cada companheiro reage em tempo real.

### 9.2. Hub Investigativo com Contador & Bifurcação Moral
Demonstrada no Capítulo 1 (*A Third Chance*):
1. **Briefing Inicial:** Shepard acorda nu no Reaper e ouve Hackett relatar o fim da guerra.
2. **Contador Progressivo:** Cada pergunta sobre os Reapers, os Geth, Rannoch ou os Krogans incrementa `briefing_questions`.
3. **Bifurcação Rápida:** Ao atingir 2 perguntas, o Interrupt Renegade (`[E]`) surge. Shepard pode interromper bruscamente e forçar o Catalyst a derrubar a máscara imediatamente (Ramo A), ou terminar o briefing e chegar à mesma revelação de forma gradual (Ramo B).
4. **Convergência:** Ambos os ramos convergem organicamente para o pedestal de equipamento, onde Shepard veste a blindagem e parte sob o disfarce de John Moreau.
