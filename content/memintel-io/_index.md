---
title: Memintel.io
---
{{< brick_title >}}

{{< breadcrumbs >}}

**Open Source**

# Memintel.io

The open-source deterministic intelligence engine powering Canvas Cloud

{{< button "Explore on GitHub →" "https://github.com/memintel/memintel.io" >}}

{{< /brick_title >}}
{{< brick_image >}}

## What Memintel.io is

![](/uploads/illustrations/cuate/static-website.svg)

Memintel.io is a deterministic semantic compiler purpose-built for agentic AI systems. It solves a fundamental problem with AI in production: LLMs are powerful but non-deterministic — they can hallucinate, drift, and produce different outputs for the same input.

Memintel.io separates AI interpretation from operational execution:

**AI interprets once.** At design time, the AI reads your business rules, understands the intent, and compiles it into deterministic logic.

**Deterministic logic runs forever.** At runtime, no LLM is called. The compiled logic executes consistently, predictably, and auditably — every time.

{{< /brick_image >}}
{{< brick_image2 >}}

## Why it matters for finance

![](/uploads/illustrations/cuate/entries.svg)

Finance and compliance are zero-tolerance domains. A hallucinated tax computation, an incorrect ITC adjustment, or a miscalculated payroll entry isn't a UX problem — it's a liability. Memintel.io was built because existing AI frameworks weren't designed for this constraint.

**What this means in practice:**

- Every GST computation is deterministic — same inputs, same output, always
- Every alert threshold is a compiled rule — not an LLM judgment call
- Every ITC adjustment follows statutory logic — not a probabilistic inference
- Every close integrity check runs the same way — no drift over time

{{< /brick_image2 >}}

<div class="three-col-grid">

{{< brick_features >}}

## How it works

---

![](/img/icons/material-symbols/200/rounded/auto_fix.svg)
### Semantic Compiler

Takes business rules expressed in natural language and compiles them into deterministic execution graphs. Run once at design time. No LLM at runtime.

---

![](/img/icons/material-symbols/200/rounded/performance_max.svg)
### Strategy Engine

6 built-in evaluation strategies: threshold, percentile, z-score, change detection, equals, and composite. Each strategy is stateful — it tracks history and evaluates over time windows.

---

![](/img/icons/material-symbols/200/rounded/auto_awesome_mosaic.svg)
### Action Delivery

When a strategy fires, it delivers actions — alerts, emails, API calls, database writes. Fully configurable. Fully auditable.

{{< /brick_features >}}

</div>

{{< brick_image >}}

## Open source. Production ready.

![](/uploads/illustrations/cuate/version-control.svg)

- 705 passing tests
- 6 evaluation strategies
- Real LLM clients via client_factory.py
- PostgreSQL + REST connectors
- History-based evaluation for stateful strategies

Memintel.io is open source. Canvas Cloud is the commercial multi-tenant implementation built on top of it. The open-source engine is the same one running 43 agents across every client account in production.

{{< button "Explore Memintel.io on GitHub →" "https://github.com/memintel/memintel.io" >}}
{{< button2 "Read the documentation →" "https://www.memintel.io/" >}}

{{< /brick_image >}}
{{< brick_image2 >}}

## Build your own agentic systems on Memintel.io

![](/uploads/illustrations/cuate/server.svg)

If you're building AI applications that need deterministic, auditable execution — financial systems, compliance tools, monitoring platforms, healthcare applications — Memintel.io gives you the infrastructure without reinventing it.

Connect any data source via REST or SQL. Define your business rules in natural language. Deploy agents that run continuously. Deliver actions when conditions are met.

{{< button "Get started →" "https://github.com/memintel/memintel.io" >}}

{{< /brick_image2 >}}
