---
title: "Cancer Tumour Modeling with Magnetic Nanoparticles"
date: "2025-05-18"
description: "PDE/ODE tumor-nanoparticle model with Bayesian MCMC estimation and GPR/RF/GBM predictive comparison."
link: "https://github.com/Yegi03/cancer-modeling"
tags: ["mathematical modeling", "Bayesian", "MCMC", "scikit-learn"]
draft: false
---

## What it is

A computational framework for modeling tumor dynamics in the presence of magnetic nanoparticles. It couples a **mechanistic PDE/ODE model** of nanoparticle diffusion, binding, and internalization with:

- **Bayesian inference** (MCMC via emcee) for parameter estimation and uncertainty quantification, and
- **machine-learning predictors** — Gaussian Process Regression, Random Forest, and Gradient Boosting — all trained/tested on a consistent 75/25 split with comparison plots.

Includes datasets for multiple treatment groups and scripts that regenerate every figure in the manuscript.

## Stack

Python · SciPy · emcee · corner · scikit-learn (GPR/RF/GBM)

## Links

- [GitHub repository](https://github.com/Yegi03/cancer-modeling)
