---
layout: mainlayout.njk
title: ANN-Like for Manufacturing Cost Estimation
subtitle: Master Degree Research

prev_page: /en/project/ehealth
prev_page_name: E-Health For Personal Sensor Application
next_page: /en/project/eaccom
next_page_name: E-Accom
activity_images:
  - \img\project\thesis\cover.jpg
  - \img\project\thesis\thesis-1.jpg
  - \img\project\thesis\thesis-2.jpg
  - \img\project\thesis\thesis-3.jpg
  - \img\project\thesis\thesis-4.jpg
---

## Project Info

- **Project Type** : Master's Degree Research Thesis
- **Year** : 2023 - 2025
- **Advisor**: Assist. Prof. Dr. Nikom Suvonvorn
- **Working With**: Intelligent Automation Engineering Center and Department of Computer Engineering, Prince of Songkla University

## Abstract

Cost directly affects profit and price setting over the unstable supply chain. Many of the previous research studies in cost estimation employ tools of machine learning techniques like various flavors of Artificial Neural Network (ANN) or curve fitting tools of Regression Analysis. This research presents the hybrid cost estimation, which combines the advantages of both machine learning and regression models. The model is based on the parametric cost estimation approach that replaces the traditional cost estimation relationships (CERs) with ANN and employs the analytic cost approach named Time-Driven Activity-Based Costing as the parameter constructor. In this research, we scope our cost drivers in direct material, labor, and utility costs of electricity and water supplied. We use the dataset from the pasteurized crab manufacturing process under the combination of all processes. At first, we modeled the overall equation of TDABC to suit the ANN and then transformed the new equation into a model with total cost placed in the central receives input from model elements. We assign the set of hidden weights and biases throughout the variables in three model elements and initialize them in the first round of training. In each iteration, those elements produce their answers, and their summation is the total cost produced by the model. We employ normalization, outlier removal, and data augmentation to help the model in a condition where it faces a complicated dataset. We find the partial derivative of Mean Square Error (MSE) by each cost element to adjust the model element weight and biases, due to the methodology inspired by gradient descent. On the actual dataset, the model can produce the result with 15.76% of validation error under the outlier removal and data augmentation, even must be more fine-tuning to overcome the data with a larger complexity.

## Publication

### Time Driven Cost Estimation Learning Model - Theethawat Savastham & Nikom Suvonvorn

Conference Paper in [Genetic and Evolutionary Computing](https://link.springer.com/book/10.1007/978-981-96-1531-5), in series of Lecture Notes in Electrical Engineering (LNEE,volume 1321), Springer, Since 8 Febuaray 2025 and Presentation at [International Conference on Genetic and Evolutionary Computing 2024 (ICGEC-2024)](https://icgec24.github.io/), Miyazaki, Japan 28 August 2024

Savastham, T., Suvonvorn, N. (2025). Time-Driven Cost Estimation Learning Model. In: Pan, JS., Zin, T.T., Sung, TW., Lin, J.CW. (eds) Genetic and Evolutionary Computing. ICGEC 2024. Lecture Notes in Electrical Engineering, vol 1321. Springer, Singapore. https://doi.org/10.1007/978-981-96-1531-5_26

<a href="https://link.springer.com/chapter/10.1007/978-981-96-1531-5_26"><button class="btn btn-sm btn-accent">Go To Article</button></a>

### Explainable Learning Model for Cost Estimation Using Time-Driven Activity-Based Costing - Theethawat Savastham & Nikom Suvonvorn

Journal Article in [International Journal of Innovative Computing, Information & Control (IJICIC)](http://www.ijicic.net/),  Since February 2026, Volume 22, Issue 1, Pages 129-143

Savastham, T., & Suvonvorn, N. (2026). Explainable learning model for cost estimation using time-driven activity-based costing. International Journal of Innovative Computing, Information & Control, 22(1), 129–143. https://doi.org/10.24507/ijicic.22.01.129

<a href="https://doi.org/10.24507/ijicic.22.01.129"><button class="btn btn-sm btn-accent">Go To Article</button></a>

### Artificial Neural Network-Like for Manufacturing Cost Estimation - Theethawat Savastham

Thesis Book in [PSU Knowledge Bank](https://kb.psu.ac.th/)

Savastham, T. (2025). Artificial neural network-like for manufacturing cost estimation [Prince of Songkla University]. https://kb.psu.ac.th/handle/2025/20120

<a href="https://kb.psu.ac.th/items/9f368dfe-8b77-400f-9874-a69525999df8"><button class="btn btn-sm btn-accent">Go To Article</button></a>
 
## Source Code
### Time Driven Cost Estimation Learning Model - GitHub

Open-source part of Time-Driven Cost Estimation Learning Model under the research titled "Artificial Neural Network like for Manufacturing Cost Estimation" wish to create neural network like system by using the core equation of time-driven activity-based costing.


<a href="https://github.com/IARC-Programing/time-driven-cost-estimation-lm"><button class="btn btn-sm btn-accent">Go To Source</button></a>

### Simulated Dataset - Hugging Face

Actual inspired-simulated dataset. This data is related to the Time-Driven Activity-Based Costing (TDABC) Principle.

<a href="https://huggingface.co/collections/iaecpsu-1/tdce-model"><button class="btn btn-sm btn-accent">Go To Source</button></a>

## Gallery

<html>
{% gallery "thesis" %}
{% for image in activity_images %}
{% galleryImage image, "ann-like for cost estimation image" %}
{% endfor %}
{% endgallery %}
</html>
