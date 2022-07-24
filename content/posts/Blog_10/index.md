---
title: GSoC 2022 CircuitVerse | Week 5 and 6 Report
description: My 5th and 6th week report for the Platform Improvement project with CircuitVerse in GSoC 22.
date: 2022-24-10
draft: false
slug: /blog/gsoc_week_5_and_6_report
tags:
  - GSoC'22
  - Internship
showInProjects: false
---

![week5&6](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ivig26gixvarbxj69hw5.png)

### During these two weeks, I have worked on:

- Assignment Restriction PR.
- POC for Weekly Contest.
- Some minor bugs & documenation.
- Improve Notification Page(Noticed gem Integration).

## Assignment Restriction.

We already have element restrictions for the assignment i.e., to restrict the group members with the use of elements for the Project. 
But we have got quite a few complaints from professors that CircuitVerse allows cheating easily. For example, users can easily copy/paste any public circuit. They can give collaborators access to their own circuit and copy-paste etc. So it has been requested by professors to disable this feature.

### Implementation

Similar to the implementation of elements restriction, I have made a column of type `jsonb` named `feature_restrictions` which is gonna store all the selected feature restrictions.
In the assignment form, I have made a select-options dropdown section similar to element restrictions.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cudthbq5khhqo56mzmrm.png)

So there are 2 feature restrictions in Project Page and 2 in Simulator. So, in the projects page, first I give id's to the respective feature button so that to access them in JS using DOM manipulation and I simply did this then:

```ruby
<% if @project&.assignment_id.present? && @project.assignment.feature_restrictions %> {
      let restricted_feature = '<%= @project.assignment.feature_restrictions %>';
      if(restricted_feature.includes('Allow Collaborators'))
    {
        $('#collaboration_button').attr("style", "display:none")
      }
      if(restricted_feature.includes('Copy / Paste')) {
        $('#copy_paste').attr("style", "display:none")
      }
    }
<% end %>
```

and for the simulator, I similarly did this:

```ruby
<% if @project&.assignment_id.present? &&
   @project.assignment.feature_restrictions %>
   let restricted_feature = '<%= @project.assignment.feature_restrictions %>'
   if(restricted_feature.includes('Combinational Analysis Tool')) {
     $('#createCombinationalAnalysisPrompt').attr("style", "display:none")
     }
   if(restricted_feature.includes('Verilog tools')) {
     $('#generateVerilog').attr("style", "display:none")
     }
<% end %>
```

This was the whole implementation summary.

and how can I forget the best part:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zmy4nluwkvbouiphhvi6.png)
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/59rspl4otde5cecb6woh.png)

## POC for Weekly Contest

Weekly contest feature in the CircuitVerse focus to have great circuits creation to be featured and user engagement. So I worked on that part meanwhile nitin was working on the UI part. But this issue or any issue should not be started without plan, so we decided to work on the weekly contest in the beginning of the next phase.

## Some minor bugs & documenation.

Here are some work I did:

- [feat(api): add mentors in the group](https://github.com/CircuitVerse/CircuitVerse/pull/3238)
- [fixes : embed feature broken](https://github.com/CircuitVerse/CircuitVerse/pull/3242)
- [documentation : Improve Embed feature](https://github.com/CircuitVerse/CircuitVerseDocs/pull/336)
- [[documenation] : Support Multiple Mentors](https://github.com/CircuitVerse/CircuitVerseDocs/pull/334)

## Notification Page Improvement(Noticed Integration)

Currently, CircuitVerse uses `activity_notification` gem for the Notifications but the gem is not maintained any more and the notification page is very lagging. So we decided to replace the gem and we found [noticed](https://github.com/excid3/noticed) gem by chris oliver of Gorails.

[PR](https://github.com/CircuitVerse/CircuitVerse/pull/3243)

### UI

- Navbar Notifications
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l1zltlxtdww1wxvcbb92.png)

- Notification Page
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jojx576wc3aem5wd1ztc.png)

### Progress

- Done with the initial integration and configuration.
- Notification Event covered:
  - Star
  - Fork
- UI
- Tab functionality
- Navbar quick notification access.

### Pending

- Data migration.
- Cleanup
- figma design UI is still under progress.

## Next week plan

- Completing the Notification pending task.

## Conclusion

These two weeks were awesome, I learned a lot on rails and grab knowledge of integration of new gem noticed. Got to know about Rails Console Usage. Grab the knowledge of Rails API.
