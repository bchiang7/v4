---
title: Custom jenkins images with plugins pre-installed
description:
date: '2019-10-12'
draft: false
slug: '/pensieve/custom-jenkins-images-with-plugins-pre-installed-1pok'
tags:
  - Jenkins
  - Devops
  - CI/CD
---

![Draft fail](https://www.sohamkamani.com/static/18122218f0260b8206bc3bb69197ba7e/8ff1e/logo.png)

---

title:
published: true
description:
tags: jenkins,ci/cd,devops
cover_image: https://miro.medium.com/max/3200/1*n7ba3rjWYs_lZeYbKogKdw.jpeg

---

If you are doing continous delivery or continous integration, you may frequntly run into jenkins.
Jenkins is a core part of our Continuous Integration and Continuous Deployment (CI/CD) pipeline. Here are the top 3 reasons we love Jenkins:

- It is an open system that is platform, language, and methodology agnostic allowing us to support our diverse client base with one non-proprietary CI/CD platform.
- It is the industry reference implementation for what a CI / CD system should be with a rich ecosystem of more than 1,100 plug-ins has emerged, enabling customers to add all sorts of functionality and integrate Jenkins with everything from Active Directory to GitHub to the OpenShift PaaS
- It is focused on CI/CD, and is not trying to be what it is not (Git repository, Chat client, Docker storage, etc.)
  The beauty of using Jenkins is that you are not locked into any proprietary vendor. It has major support in the industry and many engineers are already familiar with it.
- Plus it offers plethora of features out of the box so you don't have to
  search google for hacks

However one thing that has been a pain over period of using jenkins was the initial setup mostly during plugins installation. I mean this:

![](https://i.imgur.com/i09ODkv.png)

![](https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif)

So I wrote a custom jenkins image with all the plugins pre-installed,a default user, docker and docker-compose installed for people who want to use it without the hassle of configuring

```dockerfile
FROM jenkins/jenkins

ENV JENKINS_USER admin
ENV JENKINS_PASS admin

# Skip initial setup
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false


COPY plugins.txt /usr/share/jenkins/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/plugins.txt
USER root
RUN apt-get update \
    && apt-get install -qqy apt-transport-https ca-certificates curl gnupg2 software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt-get update  -qq \
    && apt-get install docker-ce -y
RUN usermod -aG docker jenkins
RUN apt-get clean
RUN curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose
USER jenkins

```

Worrying about image size? Don't worry I got you covered. I also happen to write another alpine image for people who are space conservative :D

```dockerfile
FROM jenkins/jenkins:alpine

ENV JENKINS_USER admin
ENV JENKINS_PASS admin

# Skip initial setup
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false


COPY plugins.txt /usr/share/jenkins/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/plugins.txt
USER root
RUN apk add docker
RUN apk add py-pip
RUN apk add python-dev libffi-dev openssl-dev gcc libc-dev make
RUN pip install docker-compose
USER jenkins

```

For full source code and the plugins.txt file , you can checkout my repo at https://github.com/rubiin/jenkins

> Note: I specially wrote these images for a project where I was using docker-compose to manage my container stack, so feel free to omit the docker and compose setup

![](https://media.giphy.com/media/7XuPYJXaF1CBAmbwQQ/giphy.gif)
