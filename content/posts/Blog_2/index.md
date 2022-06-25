---
title: GSoC 2022 CircuitVerse | Week 1 Report
description: Week 1 Project Report in CircuitVerse (GSoC 22).
date: 2022-06-18
draft: false
slug: /blog/gsoc_week_1
tags:
  - GSoC'22
  - Internship
showInProjects: false
---

![GSoC](https://user-images.githubusercontent.com/76901313/175760095-9719e067-8f1c-4cf2-94fd-d1cd26222b12.png)

Google Summer of Code 2022 Coding period start on 13 June. The previous week, I started working on gitlab and SSO integration in the CircuitVerse main platform.

Check out my previous blog: [here](https://medium.com/p/78cf1265b74f).

## Week 1 (13 June — 18 June)
I was facing some issues in gitlab integration, after the mentor meet we concluded that it was the version of omniauth-gitlab gem that was causing an error. It was v2.0.0 and should be v4.0.0 but the gem is dependent on the omniauth gem that was also not updated due to which gitlab-omniauth gem was not getting updated. So we concluded to update the omniauth gem first along with smoothing the initial 3rd-Party Authentication.

I updated the omniauth and got it merged. [PR](https://github.com/CircuitVerse/CircuitVerse/pull/3071)

After updating my gitlab branch with master, I was able to update the gitlab gem without any error and commit the changes according to the new version of the omniauth gem. After the review of the PR and changing some bot suggestions. The [PR](https://github.com/CircuitVerse/CircuitVerse/pull/3154) got finally merged.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s180tym3gtd1mj3jim3s.png)

After getting it merged, I started working on SSO PR. I update it with the master branch and mark the PR from WIP as ready for review.

## Next Week Plan
- I will be completing the SSO + Keycloack integration in the next week.
- I will start with the new feature in CircuitVerse: Weekly Contest.

## Conclusion
This week was one of my best productive weeks ever. I learned a lot and was able to fulfill my first week's deliverable as mentioned in the Proposal.

