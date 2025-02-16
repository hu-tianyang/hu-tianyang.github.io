---
layout: post
title: Invited talk @ Conference on ML & Stat, East China Normal University
date: 2023-08-25 16:11:00-0400
inline: false
related_posts: false
---

Thanks Dr. <a href="https://statr.me/about/">Yixuan Qiu</a> for inviting me! 

The title of my talk is <b>Rethinking Self-Supervised Learning From the Perspective of Distance Preserving</b>, which incorporates 2 of my recent works. 

***
<b>Abstract:</b> Aiming to extract low-dimensional features from data, Self-Supervised Learning (SSL) has garnered considerable empirical success, particularly for image-related tasks. In this talk, we provide a novel understanding of SSL from the perspective of preserving the "distance" between distributions across different dimensions. In essense, SSL aims to match in distribution between the low-dimensional feature distribution and the high-dimensional data distribution. 

SSL has two primary applications --- discriminative and generative, each corresponding to one of the existing "distance" definitions to address the dimensional mismatch. Specifically, we show that discriminative SSL, e.g., contrastive learning, bears a close relation to the Gromov-Wasserstein distance, which shifts the comparison from marginal distributions to pairwise joint distributions. On the other hand, generative SSL, e.g., autoencoder, is closely related to another type of distance extending traditional ones such as Wasserstein distance and f-divergence, to different dimensions by embedding or projection. The newfound perspective facilitates both a better theoretical understanding and methodological guidance for practical improvements.

Here are the <a href="assets/pdf/SSL by minimizing distribution distance.pdf">slides</a> of the talk. 