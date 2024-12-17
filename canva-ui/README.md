# Whiteboard App

## Funcionalidades Implementadas

- Canvas com suporte a elementos retangulares e texto
- Seleção e transformação básica de elementos
- Sistema de coordenadas escalável

## Tecnologias Utilizadas

- Nuxt 3
- Vue 3 + TypeScript
- Pinia para gerenciamento de estado
- Canvas API para renderização

## Como Executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute: `npm run dev`

## Decisões Técnicas

- Uso de Canvas API puro para melhor performance
- Estado centralizado com Pinia para facilitar expansões
- Composables para lógica reutilizável
- TypeScript para type safety

## Limitações Conhecidas

- Sem suporte a desfazer/refazer
- Performance pode degradar com muitos elementos
- Sem persistência de dados

## Melhorias Futuras

- Implementar sistema de camadas
- Adicionar suporte a mais tipos de elementos
- Otimizar renderização com Web Workers
- Adicionar suporte a colaboração em tempo real
