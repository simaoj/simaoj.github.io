---
title: "Como refiz meu site pessoal em uma manhã usando IA"
date: "2026-03-01"
readTime: "6 min"
tag: "Inteligência Artificial"
coverImage: "/images/blog/stitch.png"
description: "Por que e como usar IA no desenvolvimento de software para que a IA não use você."
author: "José Pedro Schardosim Simão"
language: "pt"
---

O desenvolvimento de software mudou. O que antes exigia dias de configuração de boilerplate e ajustes manuais, agora pode ser condensado em poucas horas de fluxo criativo. Recentemente, decidi refazer meu site pessoal do zero e o resultado foi surpreendente: uma manhã de trabalho foi o suficiente.

## O Plano
Antes de abrir o editor de código, eu tinha objetivos bem definidos para essa migração:

- **Mudança de Stack:** Migrar de um backend em Flask (Python) para a modernidade do Next.js (React), buscando uma experiência mais fluida e melhor performance.

- **Novo Layout:** Abandonar o design antigo por uma interface mais limpa, profissional e totalmente responsiva.

- **Portabilidade de Dados:** Trazer minhas publicações do Currículo Lattes para o novo site de forma estruturada, sem precisar redigitar tudo.

## O Workflow
- **UI Design com Google Stitch:** Usei para prototipar componentes visualmente e garantir consistência estética antes de escrever o primeiro <div>.

- **Gemini para Conversão de Dados:** O Currículo Lattes exporta um XML denso e difícil de manipular. Usei o Gemini para converter esse export para um JSON limpo, mapeando publicações e formação acadêmica em segundos.

- **Copilot no VS Code:** Com os dados e o design definidos, o Copilot acelerou a escrita dos componentes React e a estilização em Tailwind, mantendo meu estado de flow.

## Lições Aprendidas
Trabalhar com IA em um projeto real traz aprendizados que vão além do "prompt engineering" básico. Aqui estão as principais conclusões dessa manhã:

1. **A Ferramenta Certa para a Tarefa Certa:** Não tente fazer tudo com uma única IA. O Copilot é imbatível para contexto de código e autocomplete, enquanto o Gemini brilhou na tarefa de raciocínio estrutural e transformação de dados complexos (XML para JSON). O segredo está em saber qual "especialista" chamar para cada etapa.

2. **Dividir para Conquistar:** Um erro comum é pedir múltiplas coisas ao mesmo tempo ("Crie este componente, converta estes dados e ajuste o CSS"). A IA funciona melhor com instruções atômicas. Se você separa a conversão de dados da lógica de interface, o índice de acerto é de quase 100%.

3. **O Humano como Curador:** A IA gera o código, mas você define a arquitetura. A decisão de sair do Flask para o Next.js e como estruturar os componentes ainda é papel do desenvolvedor. A IA remove a fricção manual, mas a direção técnica continua sendo sua.

## Conclusão
Refazer um site em poucas horas não é sobre "atalhos", mas sobre alavancagem. Ao delegar a conversão bruta de dados e a escrita de código repetitivo, pude focar no que realmente importa: a arquitetura da minha presença digit

A barreira entre a ideia e a execução nunca foi tão pequena.