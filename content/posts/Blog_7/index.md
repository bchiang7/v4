---
title: GSoC 2022 CircuitVerse | Week 2 Report
description: My 2nd week report for the Platform Improvement project with CircuitVerse in GSoC 22.
date: 2022-06-25
draft: false
slug: /blog/gsoc_week_2_report
tags:
  - GSoC'22
  - Internship
showInProjects: false
---

![week 2 report](https://user-images.githubusercontent.com/76901313/175779779-a2b105a5-2af6-46b3-aafe-ce41128a6da4.png)

This week was great. I learned a lot. I was able to complete my deliverables.

So last week the gitlab integration PR got merged and according to my proposal this week goes to SSO but we finalize to add some more important features in the CircuitVerse. In the mentor meeting, we added 3 more features for which PRs were already raised, and out of which one was mine. There are some works to do in all the PRs before the final merge. We update the Project Kanban Board as well and this week I need to work on the feature **_Support multiple mentors for groups_**.

This week my PR for SSO integration got merged but we concluded that there is much manual work to do now and there is 3 priority features, so it will be out of the scope of this year. So there was an error with IDP integration that may be taken out next year GSoC. I learned a lot about SSO, SAML, and okta IDP. And finally most awaited thing in the PR(message and status):

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rwdookk4vyjf78fjizbg.png)

Checkout the [PR](https://github.com/CircuitVerse/CircuitVerse/pull/3167).

SO there was a new feature assigned to me for this week.

### Support multiple mentors for groups feature 
The feature enables the functionality to have multiple mentors in the group. There will be the primary mentor(owner) of the group who can add mentors to the group. Mentors can: 
- Create and delete assignments
- Grade assignments
- Reopen closed assignments

The PR was created by Ruturaj(GSoC'22 Mentor, former GSoC Contributor) and most of the work was done by him, the main functionality. The PR was a long time ago and there are many new features in CircuitVerse from that time that were causing conflicts. The PR need: 
- To be updated with the master
- Should contain i18n translation
- Powered with stimulus.js
- Fix Circle CI because of LMS integration that was not implemented at that time.
- UI fix.

I added all the things one by one commit for clean PR but there was always an error from CodeClimate(bot) for clean code. I was able to change some of them. But the important fail was of CI and it was caused because of the lti_spec because at the time this PR was created lti feature was not there in the CircuitVerse and in this PR the `mentor` field is replaced with the `primary_mentor` field in the DB so there was error because of that. I was able to fix it.

Testing locally using `bundle exec rspec` was not working. I tried but was giving an unknown error and as always Aboobacker come in and guide me through the way, just like that and it was an error because of the permission in the SQL database.

[PR](https://github.com/CircuitVerse/CircuitVerse/pull/2096)

## Next week's plan
- Will start working on [this](https://github.com/CircuitVerse/CircuitVerse/pull/2768) PR.
- UI meets for Weekly Contest Feature.

## Conclusion

Overall this week was really great. I learned a lot and was able to complete my deliverables. I am also working as technical writer in Google Season of Docs with the palisadoes foundation. I am getting good at time management. I learned TSDoc this week and started working on the documentation of the Talawa-Admin repository. This week I also updated my [Portfolio](https://vedant-jain03.github.io/portfolio/) website. All checks completed.

Checkout My Last week Blog [here](https://dev.to/vedantjain03/gsoc-2022-circuitverse-week-1-report-4h88).
All Blogs [here](https://vedant-jain03.github.io/portfolio/blog).

