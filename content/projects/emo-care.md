---
title: "EMO-CARE — Subject-Independent EEG Emotion Recognition"
date: "2025-12-29"
description: "Lightweight multi-scale TCN with feature-level attention for robust, real-time EEG emotion recognition under LOSO."
link: "https://github.com/Yegi03/EMO-CARE"
tags: ["PyTorch", "EEG", "emotion recognition", "deep learning"]
draft: false
---

## What it is

A deep-learning framework for EEG emotion recognition that generalizes to **unseen subjects** — the hard, deployment-relevant setting.

It uses **16 parallel Temporal Convolutional Network streams** (kernel sizes 3–33, dilations 1/2/4) to capture emotional dynamics across timescales, then an **8-head self-attention** over the 16 scale tokens to weight which temporal scales matter. Evaluated rigorously with **Leave-One-Subject-Out** cross-validation on SEED, SEED-V, and DREAMER (94.3% / 91.2% / 84.3%), with ~15 ms inference suitable for real-time use.

## Stack

PyTorch 2.0 · multi-scale TCNs · self-attention · LOSO with statistical validation

## Links

- [GitHub repository](https://github.com/Yegi03/EMO-CARE)
- Related paper: IEEE Open Journal of the Computer Society, 2026
