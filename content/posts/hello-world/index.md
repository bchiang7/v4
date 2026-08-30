---
title: Hello, World
description: Why I'm starting this blog, and what I plan to write about.
date: 2026-08-30
draft: false
slug: /blog/hello-world
tags:
  - Meta
---

I've kept a personal site for years, but it has always been a static résumé: a CV page, a list of course projects, a few links. This is the part that was missing — somewhere to write things down properly, and somewhere people can push back on them.

## What I plan to write about

My day-to-day is orchestration infrastructure and quality for long-running agents, so most of what shows up here will come out of that work:

- **Agent orchestration.** How you connect model reasoning to real tool execution without the whole thing falling over on step forty.
- **Evaluation.** Measuring agentic planning and browsing is genuinely hard, and I think the field is still bad at it. Expect opinions.
- **Retrieval.** I built a dense retrieval system from scratch at Neeva and later advised on vector database retrieval at Snowflake. There's a lot that doesn't make it into papers.
- **Reinforcement learning for LLMs**, adaptive compute, and efficient inference — the things I read about when nobody is asking me to.

Occasionally something from further back: mathematical cognition, computational modelling, or whatever I'm currently failing to learn.

## Math renders here

Posts support LaTeX, inline like $\mathcal{O}(n \log n)$ and as display blocks:

$$
\text{softmax}(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}}
$$

## And so does code

```python
def rollout(policy, env, max_steps=100):
    obs, done, steps = env.reset(), False, 0
    while not done and steps < max_steps:
        obs, _, done, _ = env.step(policy(obs))
        steps += 1
    return steps
```

## Comments are open

There's a comment box at the bottom of every post. If I've got something wrong — especially on evaluation, where I hold strong opinions loosely — I'd rather hear it than not.
