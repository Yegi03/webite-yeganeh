---
title: "E-CaTCH — Event-Centric Misinformation Detection"
date: "2025-05-23"
description: "Event-centric multimodal framework with cross-modal attention, trend-aware temporal modeling, and class-imbalance handling."
link: "https://github.com/Yegi03/E-CaTCH"
tags: ["PyTorch", "multimodal", "attention", "misinformation"]
draft: false
---

## What it is

Official implementation of E-CaTCH. Instead of judging posts in isolation, it clusters them into **pseudo-events** (by textual similarity and temporal proximity) and reasons over each event as a coherent narrative.

Within an event it extracts text and image features with **BERT** and **ResNet-152**, refines them with intra-modal self-attention, aligns them through **bidirectional cross-modal attention with soft gating**, and tracks how the story evolves with a **trend-aware LSTM** using semantic-shift and momentum signals. Severe class imbalance is handled with adaptive class weighting and hard-example mining.

Reported results: ~95.5% accuracy on Fakeddit, with strong cross-dataset generalization to India-Elections and COVID-19 MISINFOGRAPH.

## Stack

PyTorch · BERT · ResNet-152 · LSTM · YAML-configured training

## Links

- [GitHub repository](https://github.com/Yegi03/E-CaTCH)
- Related paper: [arXiv:2508.11197](https://arxiv.org/abs/2508.11197)
