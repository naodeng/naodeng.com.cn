---
title: "Automatic Speech Recognition"
titleZh: "自动语音识别"
slug: "automatic-speech-recognition"
lang: "en"
summary: "ASR converts speech audio into text for transcription and voice search; noise, accents, and overlapping speakers affect results."
topic: "multimodal-ai"
aliases:
  - "Speech-to-text"
  - "ASR"
tags:
  - "Speech"
  - "Multimodal"
related:
  - "text-to-speech"
  - "audio-language-model"
  - "multimodal-rag"
lastReviewedAt: "2026-10-12"
---

# Automatic Speech Recognition

## Quick Take

- **In brief:** ASR converts spoken audio into text.
- **Useful for:** Transcripts, captions, voice search, and spoken feedback.
- **Main limit:** A fluent transcript can still contain words that were not spoken.

## Overview

A team can transcribe user interviews and search for recurring complaints. The transcript makes audio easier to scan, but the recording remains the source for checking details.

## Core Definition

Automatic speech recognition (ASR) converts speech audio into text, sometimes with word or segment timestamps.

## Background and Evolution

ASR has moved from narrow command recognition to systems trained on large and varied audio collections. Some models also support multilingual transcription or translation, but capabilities depend on the model and configuration.

## How It Works

The system analyzes an audio signal and predicts a sequence of words. It may also add punctuation, speaker labels, or timestamps. These are separate outputs and need separate checks.

## Applications in Software Development and Testing

Use ASR to search spoken usability tests, caption bug reports, or transcribe voice commands. Review names, numbers, file paths, and commands against the original audio.

## Strengths and Limitations

Transcripts are searchable and can make recordings easier to review. Noise, accents, overlapping speakers, jargon, and language switching can lead to errors or missing context.

## Comparison with Similar Terms

ASR converts audio to text. Text-to-speech converts text to audio. Both may appear in a voice assistant, but they use different models and measures.

## Best Practices

Keep the audio, record the model and language settings, and sample-check transcripts. Use human review when errors could affect a decision.

## Common Pitfalls

Do not treat a transcript as a verbatim record. Recognition can produce plausible words that were never spoken.

## FAQ

### Can every word in a transcript be treated as exact?

No. Check the recording before relying on important names, numbers, or decisions.

## Related Resources

### Related terms

- [Text-to-speech](/en/AIWiki/text-to-speech/)
- [Audio language models](/en/AIWiki/audio-language-model/)
- [Multimodal RAG](/en/AIWiki/multimodal-rag/)

### References

- [Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)
