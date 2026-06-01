---
title: "Hospital Efficiency Analysis with DEA"
date: "2025-04-07"
description: "Data Envelopment Analysis of hospital efficiency combining HCAHPS survey and operational data."
link: "https://github.com/Yegi03/DEA"
tags: ["data science", "healthcare", "operations research", "optimization"]
draft: false
---

## What it is

A non-parametric efficiency study of hospitals using **Data Envelopment Analysis (DEA)**. It treats each hospital as a decision-making unit converting inputs (beds, staff, occupancy) into outputs (patient satisfaction, quality, communication metrics).

The project computes **technical efficiency** under both CCR (constant returns) and BCC (variable returns) models, derives **scale efficiency**, and classifies returns to scale. It combines **HCAHPS** patient-experience survey data with operational data and produces scorecards, radar charts, and performance matrices. Finding: ~55% of hospitals operate under decreasing returns to scale.

## Stack

Python · PuLP (linear programming) · pandas · scikit-learn · matplotlib/seaborn

## Links

- [GitHub repository](https://github.com/Yegi03/DEA)
