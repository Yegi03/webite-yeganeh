---
title: "EmoTCN-Attn — Multi-Scale TCN + Attention for EEG Emotion Recognition"
date: "2025-08-04"
description: "Multi-scale temporal convolution with multi-head attention for EEG emotion recognition, with extensive ablations."
link: "https://github.com/Yegi03/EmoTCN-Attn"
tags: ["PyTorch", "EEG", "emotion recognition", "attention"]
draft: false
---

## What it is

A multi-scale Temporal Convolutional Network combined with multi-head self-attention for EEG-based emotion recognition, evaluated with Leave-One-Subject-Out cross-validation on SEED and SEED-V (94.3% / 91.2%).

The repo is notable for its **ablation studies**: it quantifies the contribution of attention (~38%), kernel-size diversity, TCN depth, dilation rates, and frequency-band selection — plus a full preprocessing pipeline (band-pass filtering, ICA artifact removal, normalization, augmentation). A ~2.3M-parameter model with 15 ms inference latency.

## Stack

PyTorch · multi-scale TCNs · multi-head attention · ICA preprocessing · AdamW + OneCycleLR

## Links

- [GitHub repository](https://github.com/Yegi03/EmoTCN-Attn)
