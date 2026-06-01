---
title: "Evolutionary Neural Network Optimization"
date: "2025-01-14"
description: "Single- and multi-objective evolutionary algorithms for optimizing neural-network training, trading off accuracy and speed."
link: "https://github.com/Yegi03/NeuralNetwork-Optimization"
tags: ["PyTorch", "evolutionary algorithms", "optimization", "AutoML"]
draft: false
---

## What it is

An experiment in using **evolutionary algorithms** to optimize neural-network training hyperparameters (e.g. learning rate, momentum).

It implements both **single-objective** and **multi-objective** evolution — the multi-objective variant searches for a Pareto front trading off final accuracy against time-to-target-accuracy. Candidates are evaluated with partial training, then the best is fully trained and logged. Includes baseline comparisons and plotting utilities across multiple epoch budgets.

## Stack

Python · PyTorch · custom evolutionary/genetic operators · Pareto-front selection

## Links

- [GitHub repository](https://github.com/Yegi03/NeuralNetwork-Optimization)
