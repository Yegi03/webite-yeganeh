---
title: "MOMENTA — Mixture-of-Experts for Multimodal Misinformation Detection"
date: "2026-03-01"
description: "PyTorch framework combining modality-specific experts, cross-modal alignment, and temporal reasoning for fake-news detection."
link: "https://github.com/Yegi03/momenta"
tags: ["PyTorch", "multimodal", "mixture-of-experts", "misinformation"]
draft: false
---

## What it is

The full, reproducible implementation behind the MOMENTA paper. It detects multimodal misinformation by combining four ideas in one architecture:

- **modality-specific Mixture-of-Experts** to capture diverse misinformation patterns,
- **bidirectional co-attention** plus a **discrepancy-aware branch** that explicitly models when text and image disagree,
- **temporal aggregation** with drift and momentum encoding over overlapping windows, and
- **domain-adversarial learning + a prototype memory bank** for cross-dataset generalization.

Trained with a multi-objective loss (classification, alignment, contrastive, temporal consistency, domain robustness) on **Fakeddit, MMCoVaR, Weibo, and XFacta**.

## Stack

PyTorch · transformer/vision backbones · LOSO evaluation · calibration & t-SNE analysis

## Links

- [GitHub repository](https://github.com/Yegi03/momenta)
- Related paper: [arXiv:2604.16172](https://arxiv.org/abs/2604.16172)
