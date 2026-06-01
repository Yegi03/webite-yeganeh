---
title: "MOMENTA: Mixture-of-Experts Over Multimodal Embeddings with Neural Temporal Aggregation for Misinformation Detection"
date: "2026-04-01"
description: "Y. Abdollahinejad, A. Mousavi, N. Hassan, K. Shu, N. Japkowicz, S. Khosravi, A. Karami"
venue: "arXiv preprint · 2026"
link: "https://arxiv.org/abs/2604.16172"
tags: ["misinformation", "multimodal", "mixture-of-experts", "temporal modeling"]
draft: false
---

## Summary

MOMENTA is a unified framework for detecting multimodal misinformation that brings four hard problems into a single architecture: modality heterogeneity, cross-modal inconsistency, temporal evolution of narratives, and cross-domain generalization.

It uses **modality-specific mixture-of-experts** modules to capture diverse misinformation patterns, **bidirectional co-attention** to align text and images in a shared space, and a **discrepancy-aware branch** that explicitly models when the two modalities disagree. To track how stories evolve, it adds an **attention-based temporal aggregation** mechanism with drift and momentum encoding over overlapping time windows. Domain-adversarial learning and a prototype memory bank keep representations stable across datasets.

Trained with a multi-objective loss (classification, cross-modal alignment, contrastive learning, temporal consistency, and domain robustness), MOMENTA shows strong, consistent results on four benchmarks: **Fakeddit, MMCoVaR, Weibo, and XFacta**.

> Yeganeh Abdollahinejad and Ahmad Mousavi contributed equally to this work.

## Authors

Y. Abdollahinejad, A. Mousavi, N. Hassan, K. Shu, N. Japkowicz, S. Khosravi, A. Karami

## Links

- [arXiv:2604.16172](https://arxiv.org/abs/2604.16172)
