---
title: Host static website for free in less than 10 minutes.
description: Host static website(HTML/CSS/JS) for free in less than 10 minutes.
date: 2022-01-01
draft: false
slug: /blog/host_static_website
tags:
  - Guide
  - Technical
showInProjects: false
---

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9rt0uun4a1v9qvuep3wr.jpg)

# What is github?
GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.

# What is git?
Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

# Prerequisite.

* Github Account.
* Git installed and configured with your github account.

# Getting started

### My folder structure

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ckra96z0niegf5eyd71x.jpg)

### Create repository in github.

* Create a new repository.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2cg7u5hdp0yc0bu4nu5u.jpg)

* Configure repository details.

> *Make repository name shorter that will result to short URL.*

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iv6ctmncvas8mndsp8tm.jpg)

> *The repository has to be public unless you are a pro member in github. I have access to create private repository as I have pro member tag on my github profile.*

* Commit the files

Start git bash and add these lines of code one by one.
* `git init`
* `git add .`
* `git commit -m 'my first commit'`
* `git remote add origin https://github.com/{username}/{repository name}.git`
* `git push -u origin master`
* Refresh the github repository page and you will see all files.

* Configure github pages.

* Go to settings.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t41k6vholf21amvdcnj1.jpg)

* Go to pages.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3e6e7obt7qmp8m3w50r6.jpg)

* Select branch and save it.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/huvw61sf25k9cnm6019t.jpg)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4cup3c4m2svputvuu3jo.jpg)

> *You will get redirected*

* Your work is done
 
> *Refresh the page and you will see the deployed link.*


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ggo9nucajwh4o0nlxkge.jpg)

