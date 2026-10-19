# Especificação da Engine Visual Novel: *Mass Effect - Dialogue & Choice System*

> **Documento de Arquitetura & Implementação Técnica**  
> **Projeto:** *Mass Effect: Consciência e Carne (Ghost in the Flesh)*  
> **Objetivo:** Criar uma engine de Visual Novel leve, imersiva e focada na leitura confortável, reproduzindo a clássica Roda de Diálogo de 8 posições de Mass Effect e os Interrupts morais sem pressão de tempo, hospedável gratuitamente no **GitHub Pages**.

---

## 🎯 1. Visão Geral dos Pilares de Design

A proposta foi refinada para priorizar uma **experiência pura de leitura interativa (estilo Visual Novel cinematográfica)**, simplificando a implementação técnica e removendo barreiras de gameplay:

1. **Câmera em 1ª Pessoa (POV de Shepard) & Sistema Dinâmico de Palco:**
   * **Shepard em 1ª Pessoa:** Shepard não tem sprite fixo na tela, atuando como o ponto de vista do jogador (preservando rostos personalizados, gênero e escolhas da trilogia).
   * **Cena Solo (Shepard + 1 Interlocutor):** O interlocutor fica **centralizado** no palco com foco visual total.
   * **Cena Duo (Shepard + 2 Interlocutores, ex: Liara e Garrus):** O palco posiciona os personagens nos lados esquerdo e direito.
   * **Iluminação Dinâmica (Foco de Voz):** Quem fala fica 100% iluminado e em destaque suave (`.speaking`). O interlocutor em silêncio fica sombreado na penumbra (`.dimmed`). Quando Shepard fala, ambos ficam sombreados ouvindo a câmera.
2. **Sistema de Diálogo Estilo Baldur's Gate (Lista de Texto Completo):**
   * Em vez de pequenos snippets comprimidos em uma roda circular, o jogador tem uma **lista numerada vertical com o texto completo da fala**:
     ```
     1. [Linha completa de fala ou intenção de Shepard]
     2. [Linha alternativa de tom diplomático / empático]
     3. [Linha agressiva / assertiva]
     4. [Pergunta investigativa...]
     ```
   * **Sem Destaques Artificiais (Sem Letras Amarelas):** O leitor percebe o avanço para a próxima cena pelo contexto narrativo natural, garantindo maior imersão e surpresa.
   * Seleção ágil por clique ou teclas numéricas (`1` a `9`).
3. **Leitura Sem Pressa (Interrupts Sem Timer):**
   * **Zero estresse de QTE:** Os gatilhos de *Paragon Interrupt* (azul inferior esquerdo, atalho `[Q]`) e *Renegade Interrupt* (vermelho inferior direito, atalho `[E]`) **não possuem contador regressivo**.
   * Eles aparecem como opções contextuais durante a fala/cena. O leitor pode ler no seu próprio ritmo e escolher:
     * Clicar no **Interrupt** para disparar o evento especial moral;
     * Ou simplesmente clicar na caixa de diálogo / avançar para continuar o diálogo normal sem interrupção.
4. **Desacoplamento Total (Engine vs. Roteiro) & Padrão em Inglês:**
   * A engine em HTML/CSS/JS é fixa e reutilizável.
   * O código, arquitetura de dados e roteiros são redigidos em **inglês**, permitindo distribuição internacional e modularidade.

---

## 📐 2. Wireframe da Interface

### 2.1. Composição em Tela (Modo Duo: Garrus & Liara)

```
+-------------------------------------------------------------------------+
| [Cenário de Fundo: Sanctum da Shadow Broker / Ponte / Rannoch]          |
|                                                                         |
|      +----------------+                         +----------------+      |
|      |  INTERLOCUTOR  |                         |  INTERLOCUTOR  |      |
|      |    (ESQUERDA)  |                         |    (DIREITA)   |      |
|      |  [ILUMINADO se |                         |  [SOMBREADO se |      |
|      |   estiver com  |                         |   estiver só   |      |
|      |    a palavra]  |                         |    ouvindo]    |      |
|      +----------------+                         +----------------+      |
|                                                                         |
|                 +-------------------------------------+                 |
|                 | 1. [Opção de fala completa 1]       |                 |
|                 | 2. [Opção de fala completa 2]       |                 |
|                 | 3. [Opção investigativa completa]   |                 |
|                 +-------------------------------------+                 |
|                                                                         |
|                 +-------------------------------------+                 |
|                 | [Nome]: "Fala do personagem atual..."|                 |
|                 +-------------------------------------+                 |
|                                                                         |
| (AZUL - Sem Timer)                                 (VERMELHO - Sem Timer)|
| +------------------+                                +--------------------+|
| | PARAGON INTERRUPT|                                | RENEGADE INTERRUPT ||
| |  [Q] Ação Moral  |                                |  [E] Ação Direta   ||
| +------------------+                                +--------------------+|
+-------------------------------------------------------------------------+
```

*(Nota: No Modo Solo com apenas 1 personagem em cena, o sprite fica centralizado horizontalmente no palco com presença total).*
```

---

## 👤 3. Arquitetura de Personagens: Expressões como IDs Independentes

Para eliminar a necessidade de máquinas de estado complexas de sprites, cada traje ou expressão de John Shepard (e de seus aliados) é um registro autônomo no catálogo `characters.js`:

```javascript
// js/data/characters.js
export const characters = {
  // --- VARIAÇÕES DE JOHN SHEPARD (SEMPRE À ESQUERDA) ---
  "shepard_mercenario": {
    name: "Mercenário Encapuzado",
    side: "left",
    sprite: "assets/portraits/shepard_mercenary_helmet.webp"
  },
  "shepard_revelado": {
    name: "John Shepard",
    side: "left",
    sprite: "assets/portraits/shepard_unmasked_neutral.webp"
  },
  "shepard_serio": {
    name: "John Shepard",
    side: "left",
    sprite: "assets/portraits/shepard_serious.webp"
  },
  "shepard_sorrindo": {
    name: "John Shepard",
    side: "left",
    sprite: "assets/portraits/shepard_smirk.webp"
  },
  "shepard_vulneravel": {
    name: "John Shepard",
    side: "left",
    sprite: "assets/portraits/shepard_tired_vulnerable.webp"
  },

  // --- INTERLOCUTORES (ENTRAM À DIREITA QUANDO FALAM) ---
  "liara_broker": {
    name: "Liara T'Soni",
    side: "right",
    sprite: "assets/portraits/liara_broker_calm.webp"
  },
  "liara_chocada": {
    name: "Liara T'Soni",
    side: "right",
    sprite: "assets/portraits/liara_shocked.webp"
  },
  "garrus_neutro": {
    name: "Garrus Vakarian",
    side: "right",
    sprite: "assets/portraits/garrus_neutral.webp"
  },
  "garrus_sorriso": {
    name: "Garrus Vakarian",
    side: "right",
    sprite: "assets/portraits/garrus_smirk.webp"
  },
  "tali_mascarada": {
    name: "Tali'Zorah",
    side: "right",
    sprite: "assets/portraits/tali_mask.webp"
  },
  "catalyst_shepard": {
    name: "Catalyst (Holograma)",
    side: "right",
    sprite: "assets/portraits/catalyst_hologram.webp"
  }
};
```

**Vantagem Direta:** Para mudar a expressão de Shepard de chocado para sério ou retirar o capacete, o nó do roteiro só precisa declarar `speaker: "shepard_serio"`. A engine atualiza o sprite instantaneamente.

---

## 🎡 4. Mecânica da Roda de Diálogo (8 Slots) & Investigação

### 4.1. Estrutura dos Slots & Cores
A roda tem 8 posições fixas indexadas de 1 a 8. Seguindo o padrão clássico de *Mass Effect*, **as opções normais de diálogo não possuem cores de Paragon (azul) ou Renegade (vermelho) na roda** — o texto utiliza a tipografia holográfica padrão uniforme (ciano claro/branco). O posicionamento (topo para tom diplomático, baixo para tom assertivo) já cumpre o papel de guiar a intenção moral do jogador:
* **Slot 1 (12:00):** Resposta padrão ou direta.
* **Slot 2 (01:30):** Opção de tom **Paragon** (diplomática, amigável ou empática — texto em cor padrão).
* **Slot 3 (03:00):** Deixado intencionalmente vazio na roda principal para dar respiro visual e reservar a posição.
* **Slot 4 (04:30):** Opção de tom **Renegade** (firme, agressiva ou pragmática — texto em cor padrão).
* **Slot 5 (06:00):** Resposta neutra/secundária.
* **Slot 6 (07:30):** Pergunta extra.
* **Slot 7 (09:00):** Opção **"Investigar"** (abre a sub-roda de diálogo).
* **Slot 8 (10:30):** Pergunta de contexto ou lore adicional.

### 4.2. Funcionamento da Sub-Roda de Investigação
Quando o jogador clica na **Posição 7 ("Investigar")**:
1. A roda entra no modo de sub-menu de investigação.
2. As opções de perguntas são populadas nos slots disponíveis (preenchidas em sentido horário).
3. **Obrigatório:** A **Posição 3 (Direita)** é automaticamente preenchida com a opção **"Voltar"**:
   * Ao clicar em "Voltar", a engine retorna imediatamente para a Roda Principal daquela cena.
4. **Opções Já Lidas:** Perguntas de investigação já feitas ganham a classe CSS `.read` (ficam com cor atenuada/acinzentada), mas continuam clicáveis se o leitor quiser reler a resposta.

### 4.3. Opção Amarela: O Próximo Diálogo ou Cena
* Enquanto a roda mantém uma paleta uniforme sem azul ou vermelho, a **cor amarela (`#ffd200`)** é o destaque visual exclusivo da Roda de Diálogo.
* **Significado da Cor Amarela:** Simboliza que aquela escolha encerra a discussão/investigação atual e passa para o **próximo diálogo, novo assunto ou transição de cena**.
* No roteiro, qualquer opção decisiva recebe a flag `isYellow: true`.
* No visual, o botão ganha a classe `.yellow-choice` (amarelo holográfico com brilho sutil), orientando o leitor de forma elegante e intuitiva.
* As cores **Azul (Paragon)** e **Vermelho (Renegade)** ficam restritas exclusivamente aos **Interrupts** nos cantos inferiores da tela.

---

## 🕊️ 5. Sistema de Interrupts Sem Timer (Foco na Leitura)

Ao contrário dos jogos de ação em 3D, em uma Visual Novel a imposição de um timer de poucos segundos prejudica a leitura do texto. Portanto:

1. **Ativação Opcional:**
   * Durante certas falas, o ícone **Paragon (Azul)** surge no canto inferior esquerdo e/ou o **Renegade (Vermelho)** no canto inferior direito.
   * Eles permanecem na tela enquanto a fala atual estiver sendo exibida.
2. **Duas Vias Claras para o Leitor:**
   * **Via A (Ignorar o Interrupt):** O leitor clica no botão "Avançar" ou na caixa de texto. O diálogo segue seu fluxo normal e os ícones desaparecem suavemente.
   * **Via B (Acionar o Interrupt):** O leitor clica no ícone azul ou vermelho. O fluxo padrão é interrompido e a cena pula imediatamente para a ramificação especial daquele evento.

---

## 📄 6. Schema de Dados dos Diálogos (`data/chapters/`)

O roteiro é 100% separado do motor. Veja como fica um trecho real do Capítulo 1:

```javascript
// js/data/chapters/chapter-1.js
export const chapter1 = {
  id: "cap1_encontro_liara",
  background: "assets/backgrounds/shadow_broker_sanctum.webp",
  startNode: "liara_01",

  nodes: {
    // 1. Shepard mascarado chega ao sanctum
    "liara_01": {
      speaker: "shepard_mercenario",
      text: "Tranque as portas, Doutora T'Soni. O que temos para conversar não pode sair destas quatro paredes.",
      next: "liara_02"
    },

    "liara_02": {
      speaker: "liara_broker",
      text: "Você tem três segundos para abaixar esse rifle e explicar como burlou meus sistemas de defesa, mercenário.",
      next: "liara_03_revelacao"
    },

    // 2. Shepard desliga o modulador e retira o capacete
    "liara_03_revelacao": {
      speaker: "shepard_revelado",
      text: "[Shepard desacopla as travas do capacete e o coloca sobre a mesa.] Liara. Sou eu.",
      next: "liara_04_choque"
    },

    "liara_04_choque": {
      speaker: "liara_chocada",
      text: "Deusa... Isso é impossível. Você foi atomizado no Crucible! Seus sinais vitais foram encerrados!",
      
      // MOMENTO DE INTERRUPT (SEM TIMER): O leitor escolhe abraçá-la ou seguir o diálogo
      interrupt: {
        paragon: {
          icon: "assets/icons/paragon.svg",
          label: "Acalmar Liara com um gesto gentil",
          targetNode: "interrupt_paragon_liara"
        }
      },
      next: "wheel_principal_liara"
    },

    // Ramo exclusivo caso o leitor tenha clicado no Paragon Interrupt
    "interrupt_paragon_liara": {
      speaker: "shepard_vulneravel",
      text: "[John se aproxima devagar e segura suas mãos trêmulas.] Respire, Liara. Eu estou aqui. Carne, osso e nenhum implante Reaper.",
      next: "liara_05_pos_abraco"
    },

    "liara_05_pos_abraco": {
      speaker: "liara_broker",
      text: "Eu posso sentir o calor da sua pele... Pelas deusas, John. Como você está vivo?",
      next: "wheel_principal_liara"
    },

    // 3. A RODA PRINCIPAL DE 8 SLOTS
    "wheel_principal_liara": {
      type: "wheel",
      speaker: "shepard_revelado",
      wheelSlots: {
        // Slot 1: Neutra direta
        1: {
          text: "Estou vivo, e Tali precisa de nós.",
          targetNode: "node_fala_urgencia"
        },
        // Slot 2: Paragon
        2: {
          text: "É bom rever você, velha amiga.",
          type: "paragon",
          targetNode: "node_fala_amizade"
        },
        // Slot 3: VAZIO na roda principal
        3: null,
        // Slot 4: Renegade
        4: {
          text: "Não temos tempo para sentimentalismo.",
          type: "renegade",
          targetNode: "node_fala_fria"
        },
        // Slot 7: INVESTIGAR (abre a sub-roda)
        7: {
          text: "Investigar...",
          type: "investigate",
          targetSubWheel: "subwheel_investigacao_liara"
        }
      }
    },

    // 4. SUB-RODA DE INVESTIGAÇÃO (COM "VOLTAR" NO SLOT 3)
    "subwheel_investigacao_liara": {
      type: "subwheel",
      speaker: "shepard_revelado",
      wheelSlots: {
        // Slot 1: Pergunta sobre o corpo
        1: {
          text: "Como sobrevivi ao Crucible?",
          targetNode: "node_explicacao_catalyst"
        },
        // Slot 2: Pergunta sobre a Cerberus
        2: {
          text: "O que a Cerberus quer com o Almirantado?",
          targetNode: "node_pergunta_cerberus"
        },
        // Slot 3: VOLTAR OBRIGATÓRIO (retorna à roda principal)
        3: {
          text: "Voltar",
          type: "return",
          targetWheel: "wheel_principal_liara"
        },
        // Slot 7: Pergunta sobre Garrus
        7: {
          text: "Onde Garrus está agora?",
          targetNode: "node_onde_esta_garrus"
        },
        // Slot 8: Opção Amarela (Decide avançar e partir para ação direto daqui)
        8: {
          text: "Temos o suficiente. Vamos traçar a rota.",
          isYellow: true,
          targetNode: "node_partida_missao"
        }
      }
    },

    // Nós de resposta das investigações (retornam à sub-roda após a fala)
    "node_explicacao_catalyst": {
      speaker: "shepard_serio",
      text: "O Catalyst sintetizou uma nova matriz celular humana na câmara Reaper. Sou 100% biológico agora. Sem Lazarus, sem implantes.",
      next: "subwheel_investigacao_liara" // Volta automaticamente para a sub-roda!
    },

    "node_pergunta_cerberus": {
      speaker: "liara_broker",
      text: "Células dissidentes isoladas nos Terminus. Elas acreditam que controlando os Quarians, os Geth desmilitarizados os seguirão.",
      next: "subwheel_investigacao_liara"
    },

    "node_onde_esta_garrus": {
      speaker: "liara_broker",
      text: "Ele assumiu uma força-tarefa especial. Está caçando a Cerberus dia e noite para não encarar o luto pela sua morte.",
      next: "subwheel_investigacao_liara"
    },

    // Nós de avanço
    "node_fala_urgencia": {
      speaker: "shepard_serio",
      text: "A Cerberus capturou o transporte diplomático de Tali. Eles estão tentando doutriná-la.",
      next: "node_partida_missao"
    },

    "node_partida_missao": {
      speaker: "liara_broker",
      text: "Vou criptografar minhas linhas e preparar minha nave. Shepard... É um milagre ter você de volta.",
      next: "fim_do_bloco"
    }
  }
};
```

---

## 💻 7. Como a Engine Implementa Isso em Código Leve

### 7.1. Renderização dos Sprites
```javascript
// js/ui.js
export function renderSpeaker(characterId) {
  const char = characters[characterId];
  if (!char) return;

  const leftSlot = document.getElementById("portrait-left");
  const rightSlot = document.getElementById("portrait-right");
  const nameLabel = document.getElementById("speaker-name");

  nameLabel.textContent = char.name;

  if (char.side === "left") {
    // Shepard à esquerda: sempre visível
    leftSlot.src = char.sprite;
    leftSlot.classList.add("active");
  } else {
    // Interlocutor à direita: entra quando fala
    rightSlot.src = char.sprite;
    rightSlot.classList.add("slide-in");
  }
}
```

### 7.2. Renderização da Roda de 8 Posições
```javascript
// js/wheel.js
export function renderWheel(wheelData, onSelectCallback) {
  const wheelContainer = document.getElementById("dialogue-wheel");
  wheelContainer.innerHTML = "";

  // Percorre os 8 slots fixos (1 a 8)
  for (let slot = 1; slot <= 8; slot++) {
    const choice = wheelData.wheelSlots[slot];
    if (!choice) continue; // Posição vazia (ex: slot 3 na roda principal)

    const button = document.createElement("button");
    button.className = `wheel-slot slot-${slot}`;

    // Apenas a opção amarela ganha cor especial na roda!
    if (choice.isYellow) button.classList.add("yellow-choice");
    if (choice.type === "investigate") button.classList.add("investigate-slot");
    if (choice.type === "return") button.classList.add("return-slot");

    button.innerHTML = `<span>${choice.text}</span>`;
    button.addEventListener("click", () => onSelectCallback(choice));

    wheelContainer.appendChild(button);
  }
}
```

### 7.3. Renderização dos Interrupts (Sem Timer)
```javascript
// js/interrupts.js
export function setupInterrupts(node, onInterruptTriggered) {
  const paragonBtn = document.getElementById("interrupt-paragon");
  const renegadeBtn = document.getElementById("interrupt-renegade");

  // Reset visual
  paragonBtn.classList.remove("visible");
  renegadeBtn.classList.remove("visible");

  if (node.interrupt?.paragon) {
    paragonBtn.classList.add("visible");
    paragonBtn.onclick = () => onInterruptTriggered(node.interrupt.paragon.targetNode);
  }

  if (node.interrupt?.renegade) {
    renegadeBtn.classList.add("visible");
    renegadeBtn.onclick = () => onInterruptTriggered(node.interrupt.renegade.targetNode);
  }
}
```

---

## 🚀 8. Próximos Passos & Inicialização

Com essas definições consolidadas:
1. **Layout e CSS:** Criar a folha de estilos base com o tema sci-fi (gradientes azuis, fontes estilo Eurostile/Orbitron/Inter, scanlines sutis e botões em arco circular para os 8 slots).
2. **Setup do GitHub Pages:** Estruturar a pasta para publicação direta no repositório.
3. **Escrita do Capítulo 1:** O texto narrativo já pode ser redigido diretamente no formato de nós e slots de diálogo acima.
