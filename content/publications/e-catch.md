---
title: "E-CaTCH: Event-Centric Cross-Modal Attention with Temporal Consistency and Class-Imbalance Handling for Misinformation Detection"
date: "2025-08-01"
description: "A. Mousavi, Y. Abdollahinejad, R. Corizzo, N. Japkowicz, Z. Boukouvalas"
venue: "arXiv preprint · 2025"
link: "https://arxiv.org/abs/2508.11197"
tags: ["misinformation", "multimodal", "attention", "temporal modeling"]
draft: false
---

## Summary

E-CaTCH is an interpretable, scalable framework for multimodal misinformation detection built on a simple insight: misinformation usually spreads through **clusters of related posts (pseudo-events)** rather than isolated items.

The model clusters posts into pseudo-events by textual similarity and temporal proximity, then processes each event on its own. Within an event, text and image features (from **BERT** and **ResNet**) are refined with intra-modal self-attention and aligned through **bidirectional cross-modal attention**, fused by a soft gating mechanism. A **trend-aware LSTM**, enhanced with semantic-shift and momentum signals over overlapping time windows, models how the narrative evolves. Classification happens at the event level, and the loss combines **adaptive class weighting, temporal-consistency regularization, and hard-example mining** to handle severe class imbalance.

On **Fakeddit, IND, and COVID-19 MISINFOGRAPH**, E-CaTCH consistently beats state-of-the-art baselines, with cross-dataset tests showing strong robustness and generalizability.

## Authors

A. Mousavi, Y. Abdollahinejad, R. Corizzo, N. Japkowicz, Z. Boukouvalas

## Links

- [arXiv:2508.11197](https://arxiv.org/abs/2508.11197)
