---
title: "How I rebuilt my personal website in one morning using AI"
date: "2026-03-01"
readTime: "6 min"
tag: "Artificial Intelligence"
coverImage: "/images/blog/stitch.png"
description: "Why and how to use AI in software development so that AI doesn't use you."
author: "José Pedro Schardosim Simão"
language: "en"
---

Software development has changed. What used to require days of boilerplate configuration and manual adjustments can now be condensed into a few hours of creative flow. Recently, I decided to rebuild my personal website from scratch and the result was surprising: one morning of work was enough.

## The Plan
Before opening the code editor, I had well-defined goals for this migration:

- **Stack Change:** Migrate from a Flask backend (Python) to the modernity of Next.js (React), seeking a more fluid experience and better performance.

- **New Layout:** Abandon the old design for a cleaner, more professional, and fully responsive interface.

- **Data Portability:** Bring my publications from Currículo Lattes to the new site in a structured way, without having to retype everything.

## The Workflow
- **UI Design with Google Stitch:** I used it to visually prototype components and ensure aesthetic consistency before writing the first <div>.

- **Gemini for Data Conversion:** Currículo Lattes exports a dense and difficult-to-manipulate XML. I used Gemini to convert this export to clean JSON, mapping publications and academic background in seconds.

- **Copilot in VS Code:** With data and design defined, Copilot accelerated writing React components and Tailwind styling, keeping me in a flow state.

## Lessons Learned
Working with AI on a real project brings learnings that go beyond basic "prompt engineering". Here are the main conclusions from this morning:

1. **The Right Tool for the Right Task:** Don't try to do everything with a single AI. Copilot is unbeatable for code context and autocomplete, while Gemini shined in the task of structural reasoning and complex data transformation (XML to JSON). The secret is knowing which "specialist" to call for each step.

2. **Divide and Conquer:** A common mistake is asking for multiple things at once ("Create this component, convert this data, and adjust the CSS"). AI works best with atomic instructions. If you separate data conversion from interface logic, the accuracy rate is almost 100%.

3. **The Human as Curator:** AI generates the code, but you define the architecture. The decision to move from Flask to Next.js and how to structure the components is still the developer's role. AI removes manual friction, but the technical direction remains yours.

## Conclusion
Rebuilding a website in a few hours isn't about "shortcuts", but about leverage. By delegating raw data conversion and repetitive code writing, I could focus on what really matters: the architecture of my digital presence.

The barrier between idea and execution has never been smaller.
