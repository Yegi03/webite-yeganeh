---
title: "Explainable COVID-19 Chest X-ray Classification"
date: "2025-02-01"
description: "CNN/VGG16 classifier for chest X-rays with Grad-CAM, Integrated Gradients, and adversarial robustness analysis."
link: "https://github.com/Yegi03/Saliency"
tags: ["TensorFlow", "medical imaging", "explainable AI", "computer vision"]
draft: false
---

## What it is

A pipeline that classifies chest X-rays into four classes (COVID, Normal, Lung Opacity, Viral Pneumonia) and — crucially — explains *why*.

It builds both a custom **CNN** and a **VGG16** model, then applies **saliency / explainability methods** (Grad-CAM, Integrated Gradients, and a combined Integrated-Grad-CAM) to visualize what the network attends to. It also includes adversarial-robustness utilities to probe how stable those explanations are.

## Stack

TensorFlow/Keras · tf-explain (Grad-CAM, Integrated Gradients) · OpenCV · COVID-19 Radiography dataset

## Links

- [GitHub repository](https://github.com/Yegi03/Saliency)
