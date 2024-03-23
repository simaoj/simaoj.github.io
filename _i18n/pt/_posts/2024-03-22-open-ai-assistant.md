---
layout: post
title:  "Crie um assistente baseado em IA Generativa com o OpenAI Assistants"
image : "/assets/images/post/open-ai-assistant.jpeg"
author: "José Pedro Schardosim Simão"
date: 2023-03-22 +0300
description : ""
tags: [technology]
languages: ["pt"]
---

Você, como grande parte da população, deve ser um usuário assíduo das ferramentas de IA Generativa, como o [ChatGPT](https://chat.openai.com/). Mas você já pensou em ter seu próprio assistente baseado nessa tecnologia?
<!-- more -->

Com o Assistants da OpenAI você pode criar assistentes personalizados, que agem de acordo com as suas instruções, buscam respostas em documentos que você pode prover e até podem ser integrados a outras aplicações e APIs.

Essa funcionalidade é paga, mas a OpenAI oferece 5 doláres em créditos para quem cria uma nova conta, o que é mais do que suficiente para testarmos.

Nesse artigo vamos criar juntos um assistente que responde perguntas sobre a Base Nacional Comum Curricular. Vamos nessa!

1 - Crie uma conta no site da [OpenAI](https://platform.openai.com/signup). Você pode se autenticar com sua conta Google, Microsoft ou Apple.

2 - No menu na lateral esquerda, abra "Assistants" e clique em "Create".

3 - Preencha o nome do assistente e sua instrução. Aqui vamos usar "Você deve tirar dúvidas sobre a base nacional comum curricular e oferecer propostas de atividades baseadas no ano, componente curricular e competência.".

4 - Marque como ativas as opções "Code interpreter" e "Retrieval".

5 - Faça o download do PDF da BNCC [neste site](http://download.basenacionalcomum.mec.gov.br/) e envie-o na seção "Files".

![OpenAI Image](/assets/images/post/assistants-1.png)

6 - Clique em "Test"

7 - No campo de mensagem, escreva uma pergunta sobre a BNCC, por exemplo "Quais são as competências específicas de Linguagens para o Ensino Fundamental?" e clique em "Run"

![OpenAI Image](/assets/images/post/assistants-2.png)

8 - Pronto! O assistente já consegue ajudar você a extrair informações da BNCC.

O próximo passo é usar a API da OpenAI para utilizar esse assistente a partir de qualquer aplicação web. Mas isso já é tema pra outro post.

Até mais,

Zé