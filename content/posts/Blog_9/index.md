---
title: GSoC 2022 CircuitVerse | Week 4 Report
description: My 4th week report for the Platform Improvement project with CircuitVerse in GSoC 22.
date: 2022-07-02
draft: false
slug: /blog/gsoc_week_4_report
tags:
  - GSoC'22
  - Internship
showInProjects: false
---

![week4](https://res.cloudinary.com/practicaldev/image/fetch/s--w3_Q0tP---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oblpa6ajibtec3fmg2hx.png)

This week I was focused on:

- Getting my ongoing PR to merge i.e. "Improve Embed Feature" and "Support Multiple Mentors".
- Finalizing the idea for Weekly Contest.

### Completing `Improve Embed Feature`

So in a meeting with Aboobacker(mentor), we concluded that in Embed we should not implement a feature of `landing subcircuits` for now because of the migration of the simulator from `CircuitVerse` repo to its own new repo `cv-simulator-frontend`.
So I clean-up the PR and it finally got merged.

> As always my best part:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c46lntumqrtl44npa4dp.png)

In this PR I learned:

- Rails View Component.
- Query-Parameter Parsing.

### Completing `Support Multiple Mentors`

This PR was awaiting approval of Mobile Feasibility as it contains the code for API as well which is mainly used in CircuitVerse Mobile App to interact with Database. Ruturaj(PR author) had coded the API very neatly. After some cleanups, the PR got finally merged. These functionalities are still unreleased in Production but will be released soon.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q1qvb9zkg8yerahqc4at.png)

### What Else

I also worked on one bug issue and made a PR for it, [here](https://github.com/CircuitVerse/CircuitVerse/pull/3232).

It was basically the broken pagination in the project comment section.

### What Next

- In the weekly project meeting, we concluded that the `weekly contest` feature should be planned very properly as it can bring new creative users to CircuitVerse. So this week I will be working on PoC (Proof of Concept) for the Contest.
- In the coding part, I will be working on my PR `Assignment Restriction` that is now under the scope of my GSoC project.

### Conclusion

By far, this week was also great. Comparatively, I coded less this week and researched more.
