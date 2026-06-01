---
title: "PyScale — Nucleotide Propensity-Scale Toolkit"
date: "2026-02-03"
description: "Alignment-free nucleotide sequence analysis with 267 propensity scales and Lyapunov-based complexity estimation."
link: "https://github.com/Yegi03/PyScale-NT"
tags: ["bioinformatics", "Python", "dynamical systems", "genomics"]
draft: false
---

## What it is

A bioinformatics toolkit that turns nucleotide sequences into numerical propensity profiles for **alignment-free analysis**.

It ships **267 curated propensity scales** (mono-, di-, and trinucleotide), four profiling paradigms (window averaging, periodicity, flip-reading, complementary strand), and a robust **largest-Lyapunov-exponent estimator** (enhanced Rosenstein algorithm with k-NN averaging and automatic fit-region selection) for sequence-complexity estimation — validated against the chaotic logistic map. A dedicated promoter analyzer detects TATA motifs and computes GC content, demonstrated on human TATA-box vs. CpG-island promoters. Ships with CLI and GUI tools. (Co-authored.)

## Stack

Python · NumPy · matplotlib · Tkinter (GUI) · Rosenstein Lyapunov estimation

## Links

- [GitHub repository](https://github.com/Yegi03/PyScale-NT)
