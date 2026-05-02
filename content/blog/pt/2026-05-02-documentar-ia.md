---
title: "Como documentar o uso de IA no seu projeto (e por que isso importa)"
date: "2026-05-02"
readTime: "6 min"
tag: "Inteligência Artificial"
coverImage: "/images/blog/cognitrace.jpeg"
description: "Registre, versione e analise como a IA influencia decisões de código."
author: "José Pedro Schardosim Simão"
language: "pt"
---

Todo mundo sabe que está usando IA para programar. Pouquíssima gente consegue explicar *como* essa IA influenciou o resultado final.

Esse gap me incomoda como professor de programação e como pesquisador em formação. E foi esse incômodo que me levou a construir algo para tentar resolvê-lo.

---

## O problema que ninguém estava nomeando

Quando avalio um trabalho de aluno hoje, me deparo com uma pergunta cada vez mais difícil de responder: **o que, aqui, é genuinamente do aluno?**

Não estou fazendo um julgamento moral sobre o uso de IA, pelo contrário. O problema é que, sem visibilidade nenhuma sobre o processo, fica impossível dar um feedback útil, identificar onde o estudante ainda precisa crescer ou reconhecer quando ele teve uma sacada realmente criativa.

O mesmo vale para o meu próprio trabalho de pesquisa. Quando revisito decisões de arquitetura da minha tese, quero conseguir rastrear: *essa escolha veio de uma sugestão do Copilot? Eu adaptei, ou segui cegamente?* Hoje, sem nenhum registro, essa memória simplesmente se perde.

> A IA virou um "atalho invisível" — presente em quase todo projeto, mas ausente de qualquer documentação.

---

## A solução: tornar o processo visível

Para atacar esse problema, desenvolvi uma **extensão para o VS Code** que registra as interações com as principais ferramentas de IA usadas no desenvolvimento:

- **GitHub Copilot**
- **Claude**
- **Codex**

A extensão captura prompts e respostas e os salva em arquivos de log estruturados — projetados para serem **commitados junto com o código** no repositório do projeto.

---

## Por que commitar os logs faz toda a diferença

Guardar os logs localmente seria apenas metade do caminho. Ao salvá-los no repositório, duas coisas mudam fundamentalmente:

### Para a educação

O histórico de interações com a IA passa a ser um **critério avaliativo legítimo**. É possível analisar a jornada de aprendizado de um aluno: ele fez perguntas mais precisas ao longo do tempo? Soube questionar as sugestões da ferramenta? Usou a IA como andaime ou como muleta?

### Para a pesquisa

Cria-se um **registro auditável** de como sugestões sintéticas influenciaram decisões de design. Isso tem valor tanto para a integridade do processo quanto para a análise posterior — inclusive para outros pesquisadores que queiram replicar ou criticar o trabalho.

---

## O que um log se parece na prática

```
[
  {
    "timestamp": "2025-04-12T10:32:00.000Z",
    "source": "claude",
    "git_branch": "main",
    "git_user_name": "Jane Doe",
    "call_context": {
      "cwd": "/Users/jane/projects/my-app"
    },
    "role": "user",
    "content": "refactor the auth module to use JWT"
  },
  {
    "timestamp": "2025-04-12T10:32:05.000Z",
    "source": "claude",
    "git_branch": "main",
    "git_user_name": "Jane Doe",
    "call_context": {
      "cwd": "/Users/jane/projects/my-app"
    },
    "role": "assistant",
    "content": "Here's the refactored auth module using JWT..."
  }
]
```

Simples, legível, versionável. O suficiente para contar uma história.

---

## O que isso muda, conceitualmente

A ideia central não é vigiar ninguém. É reconhecer que **o processo de desenvolvimento com IA é parte do produto intelectual** — e merece ser tratado como tal.

Da mesma forma que citamos referências em um artigo ou documentamos decisões de arquitetura em um ADR, faz sentido documentar como chegamos a certas soluções em colaboração com sistemas sintéticos.

Isso vale especialmente em contextos onde a autoria e o raciocínio importam: salas de aula, dissertações, projetos de código aberto, auditorias de software.

---

## Próximos passos

A extensão está funcional e disponível publicamente. Ainda há muito espaço para evoluir - análise automática dos logs, dashboards de padrões de uso, integração com ambientes de avaliação.

Mas o núcleo já está lá: **transformar a IA de caixa-preta em parte documentada e analisável do processo criativo**.

Se você é professor, pesquisador, ou simplesmente alguém que quer entender melhor como está usando IA no seu trabalho, vale dar uma olhada.

**[Acesse a extensão no VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=schardosim.cognitrace)**
