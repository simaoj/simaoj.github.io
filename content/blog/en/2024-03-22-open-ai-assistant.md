---
title: "Create an assistant based on Generative AI"
date: "2024-03-22"
readTime: "6 min"
tag: "Artificial Intelligence"
coverImage: "/images/blog/open-ai-assistant.jpeg"
description: "Step-by-step guide to create and test an assistant with generative AI using the OpenAI platform."
author: "José Pedro Schardosim Simão"
language: "en"
---

You, like much of the population, must be an avid user of Generative AI tools, such as [ChatGPT](https://chat.openai.com/). But have you ever thought about having your own assistant based on this technology?

With OpenAI Assistants you can create personalized assistants that act according to your instructions, search for answers in documents you can provide, and can even be integrated with other applications and APIs.

This feature is paid, but OpenAI offers $5 in credits for those who create a new account, which is more than enough for testing.

In this article we will create together an assistant that answers questions about Brazil's National Common Curricular Base (BNCC). Let's go!

1 - Create an account on the [OpenAI](https://platform.openai.com/signup) website. You can authenticate with your Google, Microsoft or Apple account.

2 - In the menu on the left sidebar, open "Assistants" and click "Create".

3 - Fill in the assistant's name and instructions. Here we'll use "You should answer questions about the national common curricular base and offer activity proposals based on year, curricular component and competency."

4 - Mark as active the options "Code interpreter" and "Retrieval".

5 - Download the BNCC PDF from [this site](http://download.basenacionalcomum.mec.gov.br/) and upload it in the "Files" section.

![OpenAI Image](/images/blog/assistants-1.png)

6 - Click "Test"

7 - In the message field, write a question about the BNCC, for example "What are the specific competencies of Languages for Elementary School?" and click "Run"

![OpenAI Image](/images/blog/assistants-2.png)

8 - Done! The assistant can now help you extract information from the BNCC.

The next step is to use the OpenAI API to use this assistant from any web application. But that's a topic for another post.

See you soon,

Zé
