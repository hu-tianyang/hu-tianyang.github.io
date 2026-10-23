---
layout: saga
permalink: /people/
title: SAGA Lab
description: SAGA Lab at CUHK-Shenzhen connects statistical foundations with model design in vision and language, with a current focus on continuous diffusion language models.
nav: true
nav_order: 1
polyadic_website: "" # Add the Polyadic Research Group website when available.
polyadic_repository: "" # Add the open-source repository when available.
---

<!-- Main lab copy lives here; related paper lists are in _data/saga_related_work.yml. -->
<div class="saga-lab">

<div class="saga-intro" markdown="1">
**Science & Alchemy** captures our approach to generative AI: combining theoretical understanding with experimental exploration. We aim to turn empirical observations into explanations, and use those explanations to develop better models and algorithms.

Our research connects **statistical and representation learning** with model design in **vision and language**. We study how models learn and use information, with an emphasis on **efficient pretraining, generation, and control**. Foundational insights guide our models, while practical challenges motivate new questions for theory.
</div>

<section class="saga-section" aria-labelledby="research">
  <h2 id="research">Research directions</h2>
  <figure class="saga-research-map" aria-labelledby="research" aria-describedby="research-relationship">
    <div class="saga-branches" role="group" aria-labelledby="saga-applications">
      <div class="saga-branch">
        <div class="saga-node saga-node--vision">
          <p class="saga-node-label">Vision</p>
          <h3>Efficient and controllable generation</h3>
          <p>We study <strong>efficient pretraining</strong> through the design of latent representations and autoregressive visual models. For <strong>efficient sampling</strong>, we develop accelerated diffusion samplers and distillation methods. Our work on <strong>control and preference alignment</strong> explores guidance, model inversion, and learning from rewards to improve generation quality and controllability.</p>
          {% include saga_related_work.liquid direction="vision" label="vision" %}
        </div>
        <div class="saga-branch-stem" aria-hidden="true"></div>
      </div>
      <div class="saga-branch">
        <div class="saga-node saga-node--language">
          <p class="saga-node-label">Language</p>
          <h3>Toward next-generation LLMs</h3>
          <p>We focus on <strong>language model pretraining</strong>, using <strong>mechanistic understanding to guide architecture design</strong> and improve how models learn. Our work spans attention and information flow in autoregressive and diffusion language models. We also investigate <strong>memory mechanisms</strong>, including how models represent and use contextual information.</p>
          {% include saga_related_work.liquid direction="language" label="language" %}
        </div>
        <div class="saga-branch-stem" aria-hidden="true"></div>
      </div>
    </div>
    <div class="saga-map-bridge">
      <p class="saga-map-label" id="saga-applications">Application domains</p>
      <span class="saga-map-hub">Generative AI</span>
      <div class="saga-map-flow saga-map-flow--up">
        <span class="saga-flow-line" aria-hidden="true"></span>
        <span class="saga-flow-label"><strong>Foundations</strong> inform models</span>
      </div>
      <div class="saga-map-flow saga-map-flow--down">
        <span class="saga-flow-line" aria-hidden="true"></span>
        <span class="saga-flow-label"><strong>Applications</strong> inspire theory</span>
      </div>
    </div>
    <div class="saga-node saga-node--foundation">
      <h3>Statistical foundations</h3>
      <p>We study <strong>statistical learning theory</strong>, focusing on how model complexity, regularization, and learning objectives affect generalization. We also investigate the <strong>geometry and topology of representations</strong>, linking contrastive learning to neighborhood structure and developing tools to compare learned representations. These perspectives help explain model behavior and guide algorithm design.</p>
      {% include saga_related_work.liquid direction="foundations" label="statistical foundations" %}
    </div>
    <figcaption class="sr-only" id="research-relationship">Statistical foundations inform generative model design in vision and language; challenges from these application domains motivate new foundational questions.</figcaption>
  </figure>
</section>

<section class="saga-focus" aria-labelledby="cdlm">
<div class="saga-focus-intro" markdown="1">
<p class="saga-eyebrow">Recent focus</p>
<h2 id="cdlm">Continuous Diffusion Language Models</h2>

Continuous diffusion language models (CDLMs) generate text by **iteratively refining noisy continuous representations** and decoding the resulting states into tokens. Multiple token positions can evolve together, opening new ways to organize computation and coordinate language generation.

This direction naturally brings together our experience in **continuous diffusion and GPT-style autoregressive modeling**. We explore how continuous refinement and autoregressive context can complement each other, drawing on our work in representation learning, model mechanisms, and efficient generation.

We lead the **{% if page.polyadic_website and page.polyadic_website != "" %}[Polyadic Research Group]({{ page.polyadic_website }}){% else %}Polyadic Research Group{% endif %}** and contribute to {% if page.polyadic_repository and page.polyadic_repository != "" %}[open-source development]({{ page.polyadic_repository }}){% else %}open-source development{% endif %} in continuous diffusion language modeling. Our vision is to develop **more capable, efficient, and controllable language models**. We study how representations, learning dynamics, and model design shape the refinement process, and use these insights to guide better training and sampling.
</div>
</section>

<section class="saga-hiring" aria-labelledby="join">
  {% capture hiring_content %}{% include_relative opening.md %}{% endcapture %}
  {{ hiring_content | markdownify }}
</section>

<section class="saga-section saga-members" aria-labelledby="members">
  <h2 id="members">Members</h2>
  {% capture current_members %}{% include_relative current_member.md %}{% endcapture %}
  {{ current_members | markdownify }}
  {% capture former_members %}{% include_relative former_member.md %}{% endcapture %}
  {{ former_members | markdownify }}
</section>

</div>
