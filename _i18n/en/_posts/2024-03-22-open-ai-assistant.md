---
layout: post
title:  "Crie an assistant based on Generative AI"
image : "/assets/images/post/open-ai-assistant.jpeg"
author: "José Pedro Schardosim Simão"
date: 2023-03-22 +0300
description : ""
tags: [technology]
languages: ["en"]
---

Like much of the population, you are likely a frequent user of Generative AI tools, such as [ChatGPT](https://chat.openai.com/). But have you ever thought about having your own assistant based on this technology?
<!-- more -->

With OpenAI Assistants, you can create personalized assistants that act according to your instructions, search for answers in documents you can provide, and can even be integrated into other applications and APIs.

This feature is paid, but OpenAI offers 5 dollars in credits for creating a new account, which is more than enough to test.

In this article, we will create together an assistant that answers questions about the National Common Core Curriculum. Let's go!

1 - Create an account on the [OpenAI](https://platform.openai.com/signup) website. You can authenticate with your Google, Microsoft, or Apple account.

2 - In the menu on the left side, open "Assistants" and click on "Create".

3 - Fill in the name of the assistant and its instruction. Here we will use "You should clear up doubts about the national common core curriculum and offer activity proposals based on the year, curricular component, and competence."

4 - Mark as active the options "Code interpreter" and "Retrieval".

5 - Download the BNCC PDF from [this website](http://download.basenacionalcomum.mec.gov.br/) and upload it in the "Files" section.

![OpenAI Image](/assets/images/post/assistants-1.png)

6 - Click on "Test"

7 - In the message field, write a question about the BNCC, for example, "What are the specific Language competencies for Elementary School?" and click on "Run"

![OpenAI Image](/assets/images/post/assistants-2.png)

8 - Done! The assistant can now help you extract information from the BNCC.

The next step is to use the OpenAI API to utilize this assistant from any web application. But that's a topic for another post.

See you later,

Zé
