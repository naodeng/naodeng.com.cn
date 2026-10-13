---
title: "Vision-Language-Action Models"
titleZh: "视觉语言动作模型"
slug: "vision-language-action"
lang: "en"
summary: "VLA models map visual observations and language instructions to robot actions in a real-world perception and execution loop."
topic: "multimodal-ai"
aliases:
  - "VLA"
  - "Embodied model"
tags:
  - "Robotics"
  - "Multimodal"
related:
  - "vision-language-model"
  - "ai-agent"
  - "agent-sandboxing"
lastReviewedAt: "2026-10-12"
---

# Vision-Language-Action Models

## Quick Take

- **In brief:** A VLA maps visual observations and language instructions to robot actions.
- **Useful for:** Research on robots that act in physical environments.
- **Main limit:** Simulation results do not prove safe real-world behavior.

## Overview

A robot sees a red cup and receives the instruction “put it on the shelf.” A VLA may predict actions, while a controller and sensors help execute and adjust them.

## Core Definition

A vision-language-action (VLA) model connects visual inputs and language instructions to representations or actions a robot can execute.

## Background and Evolution

VLA research combines vision, language, and action models for embodied tasks. Work such as RT-2 explores transferring visual-language knowledge to robot control.

## How It Works

The model receives sensor observations and an instruction, predicts an action or action sequence, then uses feedback from the environment as execution continues. A real system also needs controllers and safety limits.

## Applications in Software Development and Testing

Test robots against changed object positions, occlusion, ambiguous instructions, unfamiliar scenes, and emergency stops. Compare simulation behavior with physical test results.

## Strengths and Limitations

A VLA can connect language goals to physical actions. It can misread a scene or make an unsafe move, and mistakes can affect people or property.

## Comparison with Similar Terms

A vision-language model relates images to text. A VLA also predicts or selects actions. A digital agent may call APIs but does not necessarily control physical actuators.

## Best Practices

Enforce action limits in the robot controller, test emergency stops, use staged trials, and keep human supervision for hazardous tasks.

## Common Pitfalls

Do not rely on the model to obey a warning. Do not treat success in simulation as proof of physical safety.

## FAQ

### Is a VLA the same as a vision-language model?

No. A VLA adds an action component and connects model output to a robot control loop.

## Related Resources

### Related terms

- [Vision-language models](/en/AIWiki/vision-language-model/)
- [AI agents](/en/AIWiki/ai-agent/)
- [Agent sandboxing](/en/AIWiki/agent-sandboxing/)

### References

- [RT-2: Vision-Language-Action Models](https://arxiv.org/abs/2307.15818)
