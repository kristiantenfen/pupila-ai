## Descrição
Este projeto é um whiteboard colaborativo que permite a criação e manipulação de elementos gráficos em um canvas.

## Tecnologias Utilizadas
- Vue 3
- Nuxt
- TypeScript
- Pinia
- Canvas API

## Pré-requisitos
- Node.js v16+
- npm ou yarn

## Estrutura de Arquivos
whiteboard-project/
├── docs/
│   └── architecture.md       # Documentação da arquitetura proposta
├── src/
│   ├── components/
│   │   └── canvas/
│   │       ├── TheCanvas.vue
│   │       └── ToolBar.vue
│   ├── composables/
|   |   ├── useTransform.ts
│   │   └── useElements.ts
│   ├── stores/
│   │   └── canvasStore.ts
│   ├── middleware/
│   │   └── auth.ts
│   ├── plugins/
│   │   └── canvas-renderer.ts
│   └── types/
│   |   └── elements.ts
│   └── tests/
│       └── elements.test.ts
├── public/
│   └── index.html            # Arquivo HTML principal
├── README.md                 # Instruções de execução
└── package.json              # Dependências do projeto


# Componentes Principais:
 - TheCanvas.vue: Componente que gerencia o canvas e interações do usuário.
 - ToolBar.vue: Componente de barra de ferramentas para seleção de ferramentas de desenho.
# Composables:
 - useTransform.ts Lógica para manipulação de posicionameto e redimensionamento dos elementos no canvas.
 - useElements.ts: Lógica para criação e manipulação de elementos no canvas.
# Store:
 - canvasStore.ts: Gerenciamento de estado global usando Pinia.
# Middleware
 - auth.ts: Configuração de regras de autenticação e acesso.
# Plugins
 - canvas-renderer.ts: Configuração de rendenrização e desempenho do canva.
# Tipos:
 - elements.ts: Definições de tipos para elementos do canvas.
# Tests
 - elements.test.ts: Examplo de teste da criação e um elemento.
