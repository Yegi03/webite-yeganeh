---
title: "Calibrated Multimodal Fatigue Detection"
date: "2025-12-25"
description: "Parameter-efficient LoRA + Mixture-of-Experts fusion of EEG, HRV, and EDA for calibrated fatigue estimation."
link: "https://github.com/Yegi03/Computational-Fatigue-Detection"
tags: ["PyTorch", "physiological signals", "LoRA", "mixture-of-experts"]
draft: false
---

## What it is

A calibrated multimodal framework that estimates fatigue from three physiological signals — **EEG, heart-rate variability (from ECG), and electrodermal activity** — and outputs well-calibrated probabilities suitable for decision support.

The interesting engineering: it fuses modalities with **Low-Rank Adaptation (LoRA) + Mixture-of-Experts**, training only ~15% of the parameters of full fine-tuning while *improving* accuracy. It also introduces a bounded **Physiological Fatigue Index**, audits temporal confounding (time-on-task vs. affective-cognitive load), and applies post-hoc isotonic calibration. Evaluated with nested **LOSO (58 folds)** on the ASCERTAIN dataset.

## Stack

PyTorch · LoRA · Mixture-of-Experts · isotonic calibration · nested LOSO · signal processing (Welch, Pan-Tompkins, cvxEDA)

## Links

- [GitHub repository](https://github.com/Yegi03/Computational-Fatigue-Detection)
