---
title: Community Bonding Period at CircuitVerse — Google Summer of Code 2022
description: My experience during Community Bonding Period at CircuitVerse (GSoC 22).
date: 2022-06-12
draft: false
slug: /blog/gsoc_community_bonding
tags:
  - GSoC'22
  - Internship
showInProjects: false
---

![GSoC](https://user-images.githubusercontent.com/76901313/175760095-9719e067-8f1c-4cf2-94fd-d1cd26222b12.png)

## What is the Community Bonding Period?
Every successful project has been planned before. Similarly, in this phase contributors connect with respective mentors and discuss the project deliverables, plan the project and finalize the scope of the Project.

### My experience
I was so happy after getting selected for GSoC, especially with CircuitVerse. After getting selected, our private channel was created and all the contributors, mentors, and OA were there. We had our first meeting on 26th May, and we were welcomed by our mentors, I meet my mentors Aboobacker, Pavan, Samiran, Ayan, Ruturaj, and contributors Pulkit, Devjit, and Aman. It was a pleasure meeting them all. We had a great meeting and our mentors told us about the flow of the GSoC at CircuitVerse.

After that, for each project separate private channels were created and I had my meeting with my project’s mentors. We set up the project board on GitHub for tracking the project's progress and discussing the project scope, and deliverables. I asked them to let me start the coding on 1st June, as I was aware of the codebase.

## My progress and learning (1st June — 10th June)
I start with the feature of integrating Gitlab Authentication for CircuitVerse. I used omniauth-gitlab gem for that. I made an application in gitlab for testing and configured the .env file. I configured and implemented all the required things correctly referencing other OAuth implementations but there was an unknown error. I had a meeting with my mentor and the problem was the omniauth gem version. I will be working on updating that in the upcoming week and hopefully will complete my first task of the Project.

I also started with implementing SSO(Single Sign-On) in CircuitVerse. I used devise_saml_authenticatable gem for it. I created WIP(Work in Progress) PR for that. I was facing an issue on the IDP side. I will be completing this PR after gitlab-implementation. I am researching it meanwhile…

### Work done so far
- [Gitlab integration](https://github.com/CircuitVerse/CircuitVerse/pull/3154)
- [SSO integration](https://github.com/CircuitVerse/CircuitVerse/pull/3167)

## Conclusion
I feel the best experience of my engineering life as it is my first work experience. The whole vibe of the community is so supportive. I learned a lot. I don’t know after getting selected for GSoC I feel responsible and am working accordingly. I am researching more, reading more, and learning more. It is the vibe of GSoC. Overall, I had a great week.

