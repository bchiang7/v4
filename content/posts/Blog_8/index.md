---
title: GSoC 2022 CircuitVerse | Week 3 Report
description: My 3rd week report for the Platform Improvement project with CircuitVerse in GSoC 22.
date: 2022-07-02
draft: false
slug: /blog/gsoc_week_3_report
tags:
  - GSoC'22
  - Internship
showInProjects: false
---

![week3](https://user-images.githubusercontent.com/76901313/177000692-07203f23-1415-4079-b6be-c777ee62f07a.png)

It's been a month in the GSoC environment with CircuitVerse and it's great so far.
This week I did the following:

- Fixes the conflicts of `Support Multiple Mentors` [PR](https://github.com/CircuitVerse/CircuitVerse/pull/2096).
- Worked on `Improve Embed Feature` [PR](https://github.com/CircuitVerse/CircuitVerse/pull/2768).
- Reviewed and discussed the UI of all the features.
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8o3g9owkdgpkh452n4dy.png)
  The previous week, I have done with the requested functionality of the PR `Support Multiple Mentors` but after one commit merged into master, there was a lot of `RoboCup` conflicting with the files of this PR. Hence, I solved them and was able to fix all the conflicting files. The PR is almost ready and now we are checking its feasibility with CircuitVerse Mobile-App.
  This week, I worked on the PR by Kartikay(contributor) for `Improve Embed Feature`. Check out the description of the feature [here](https://github.com/CircuitVerse/CircuitVerse/issues/1938). I have worked on:
- Improving the existing UI.
- Some typos.
- Implement popup in form of Rails [Component](https://viewcomponent.org/) view.
- Added translation.
- added and transfer the code to project_controller(stimulus).
- Added Advance feature to enable/disable:
   - Zoom-in-out feature
   - Fullscreen button
   - Clock/Time button
   - Display Title
- Added feature to choose different built-in themes for embed circuit.
  It looks like this:
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yi35g1gdujqzxbdkomo9.png)
  > Advance Option
  > ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5qeqsamwbpuipnuxdnhs.png)
  > So, how it is working?
  > CircuitVerse awesome contributors have made `embed.js` and `embedListener.js` files for tackling with the `embed` feature. So I have made some input fields with default values in component views which are connected to data-controller=projects and in `projects_controller` I have to write code to get the value from those input fields and after the user hits that `Publish` button, the function in controller takes the values from each input and save it to the variable and finally made a `URL` variable along with `query parameters` passed to fetch the values in `embed.js`. The URL looks like this:

```
const url = `${document.querySelector('#url').value}?theme=${theme}&display_title=${displayTitle}&clock_time=${clockTimeEnable}&fullscreen=${fullscreen}&zoom_in_out=${zoomInOut}`;
```

and in `embed.js` I accessed those parameters using this:

```
const params = new URLSearchParams(window.location.search);
```

and to retrieve certain values I use something like this:
`const fullscreen = params.get('fullscreen');`
So that was all about this week's work. I learned a lot and concluded that `anything can be using javascript. Javascript OP!!!`

### Next Week Plan

- Complete Improve embed PR.
- Start working on `Weekly Contest`.
