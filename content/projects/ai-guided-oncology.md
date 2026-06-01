---
title: "AI-Guided Digital Oncology — Nanoparticle Tumor Modeling"
date: "2025-08-03"
description: "Hybrid framework: mechanistic ODEs of nanoparticle-tumor transport, Bayesian MCMC, and LSTM/Neural-ODE validation."
link: "https://github.com/Yegi03/AI-Guided-Oncology"
tags: ["mathematical modeling", "Bayesian", "MCMC", "Neural ODE"]
draft: false
---

## What it is

A hybrid modeling framework for nanoparticle transport in tumors that blends mechanistic math with machine learning:

- a **5-state ODE system** (free, bound, binding-site, internalized nanoparticles, and tumor) with radial discretization and 16 biologically interpretable parameters,
- **Bayesian parameter estimation** via MCMC (128 walkers, 7000 steps, Gelman-Rubin convergence), and
- **machine-learning validation** with LSTM and Neural-ODE models.

It compares four treatment groups (Untreated, Saline, MNP, MNPFDG) and ranks their efficacy, with full reproducibility scripts. Companion code to your digital-oncology paper.

## Stack

Python · SciPy ODEs · emcee (MCMC) · PyTorch · torchdiffeq · LSTM

## Links

- [GitHub repository](https://github.com/Yegi03/AI-Guided-Oncology)
