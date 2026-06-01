---
title: "StratifyML — Hospital Analytics for Vulnerable Populations"
date: "2025-06-25"
description: "Frequent-itemset mining over hospital CPT/ICD codes to surface treatment patterns and outcome disparities across 13 vulnerable groups."
link: "https://github.com/Yegi03/StratifyML"
tags: ["data science", "healthcare", "frequent itemset mining", "pandas"]
draft: false
---

## What it is

An analysis pipeline that studies hospital utilization across **13 vulnerable population groups** (e.g. homeless, Medicaid, uninsured, elderly, rural).

It builds vulnerability flags, computes the **Charlson Comorbidity Index** from ICD-10 codes, then runs **frequent-itemset mining (Apriori)** over CPT/ICD code combinations and links those patterns to outcomes — length of stay, total charges, and mortality. Outputs publication-ready figures, LaTeX/CSV tables, and Excel reports highlighting health disparities.

## Stack

Python · pandas · mlxtend (Apriori) · matplotlib/seaborn · networkx

## Links

- [GitHub repository](https://github.com/Yegi03/StratifyML)
