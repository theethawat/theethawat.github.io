---
layout: mainlayout.njk
title: ANN-Like for Manufacturing Cost Estimation
subtitle: Master Degree Research

prev_page: /en/project/ehealth
prev_page_name: E-Health For Personal Sensor Application
next_page: /en/project/eaccom
next_page_name: E-Accom
---

## Project Info

- **Project Type** : Master Degree Research Thesis
- **Year** : 2023 - Present
- **Advisor**: Assist. Prof. Dr. Nikom Suvonvorn
- **Working With**: Intelligent Automation Engineering Center and Department of Computer Engineering, Prince of Songkla University

## Abstract

Cost directly affects profit and price setting over the unstable supply chain. Many of the previous research studies in cost estimation employ tools of machine learning techniques like various flavors of Artificial Neural Network (ANN) or curve fitting tools of Regression Analysis. This research presents the hybrid cost estimation, which combines the advantages of both machine learning and regression models. The model is based on the parametric cost estimation approach that replaces the traditional cost estimation relationships (CERs) with ANN and employs the analytic cost approach named Time-Driven Activity-Based Costing as the parameter constructor. In this research, we scope our cost drivers in direct material, labor, and utility costs of electricity and water supplied. We use the dataset from the pasteurized crab manufacturing process under the combination of all processes. At first, we modeled the overall equation of TDABC to suit the ANN and then transformed the new equation into a model with total cost placed in the central receives input from model elements. We assign the set of hidden weights and biases throughout the variables in three model elements and initialize them in the first round of training. In each iteration, those elements produce their answers, and their summation is the total cost produced by the model. We employ normalization, outlier removal, and data augmentation to help the model in a condition where it faces a complicated dataset. We find the partial derivative of Mean Square Error (MSE) by each cost element to adjust the model element weight and biases, due to the methodology inspired by gradient descent. On the actual dataset, the model can produce the result with 15.76% of validation error under the outlier removal and data augmentation, even must be more fine-tuning to overcome the data with a larger complexity.

## Publication

### Time Driven Cost Estimation Learning Model - Theethawat Savastham & Nikom Suvonvorn

Conference Paper in [Genetic and Evolutionary Computing](https://link.springer.com/book/10.1007/978-981-96-1531-5), in series of Lecture Notes in Electrical Engineering (LNEE,volume 1321), Springer, Since 8 Febuaray 2025 and Presentation at [International Conference on Genetic and Evolutionary Computing 2024 (ICGEC-2024)](https://icgec24.github.io/), Miyazaki, Japan 28 August 2024

Savastham, T., Suvonvorn, N. (2025). Time-Driven Cost Estimation Learning Model. In: Pan, JS., Zin, T.T., Sung, TW., Lin, J.CW. (eds) Genetic and Evolutionary Computing. ICGEC 2024. Lecture Notes in Electrical Engineering, vol 1321. Springer, Singapore. https://doi.org/10.1007/978-981-96-1531-5_26

<a href="https://link.springer.com/chapter/10.1007/978-981-96-1531-5_26"><button class="btn btn-sm btn-accent">Go To Paper</button></a>
