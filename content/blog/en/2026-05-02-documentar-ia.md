---
title: "How to Document AI Usage in Your Project (and Why It Matters)"
date: "2026-05-02"
readTime: "6 min"
tag: "Artificial Intelligence"
coverImage: "/images/blog/cognitrace.jpeg"
description: "Log, version, and analyze how AI influences code decisions."
author: "José Pedro Schardosim Simão"
language: "en"
---

Everyone knows they're using AI to write code. Very few people can explain *how* that AI influenced the final result.

That gap bothers me — as a programming teacher and as an early-stage researcher. And it's that frustration that led me to build something to address it.

---

## The Problem No One Was Naming

When I evaluate a student's work today, I keep running into a question that's getting harder to answer: **what here is genuinely the student's?**

I'm not making a moral judgment about using AI — quite the opposite. The problem is that without any visibility into the process, it becomes impossible to give useful feedback, identify where the student still needs to grow, or recognize when they had a genuinely creative insight.

The same applies to my own research. When I revisit architecture decisions in my thesis, I want to be able to trace back: *did this choice come from a Copilot suggestion? Did I adapt it, or just follow it blindly?* Today, with no record at all, that memory is simply lost.

> AI has become an "invisible shortcut" — present in almost every project, yet absent from any documentation.

---

## The Solution: Making the Process Visible

To tackle this problem, I built a **VS Code extension** that logs interactions with the most common AI tools used in development:

- **GitHub Copilot**
- **Claude**
- **Codex**

The extension captures prompts and responses and saves them as structured log files — designed to be **committed alongside the code** in the project repository.

---

## Why Committing the Logs Makes All the Difference

Storing the logs locally would only be half the solution. By saving them to the repository, two things change fundamentally:

### For Education

The history of AI interactions becomes a **legitimate assessment criterion**. It becomes possible to analyze a student's learning journey: did their questions become more precise over time? Did they know how to challenge the tool's suggestions? Did they use AI as scaffolding or as a crutch?

### For Research

It creates an **auditable record** of how synthetic suggestions influenced design decisions. This is valuable both for the integrity of the process and for later analysis — including by other researchers who want to replicate or critique the work.

---

## What a Log Looks Like in Practice

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

Simple, readable, versionable. Enough to tell a story.

---

## What This Changes, Conceptually

The core idea isn't to surveil anyone. It's to recognize that **the process of AI-assisted development is part of the intellectual product** — and deserves to be treated as such.

Just as we cite references in a paper or document architecture decisions in an ADR, it makes sense to document how we arrived at certain solutions in collaboration with synthetic systems.

This matters especially in contexts where authorship and reasoning count: classrooms, dissertations, open-source projects, software audits.

---

## What's Next

The extension is functional and publicly available. There's still a lot of room to grow — automatic log analysis, usage pattern dashboards, integration with assessment environments.

But the core is already there: **turning AI from a black box into a documented, analyzable part of the creative process**.

If you're a teacher, a researcher, or simply someone who wants to better understand how you're using AI in your work, it's worth a look.

**[Get the extension on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=schardosim.cognitrace)**