---
title: Docker basics/ cheatsheet
description:
date: '2019-11-22'
draft: false
slug: '/pensieve/docker-basics-cheatsheet-2mm4'
tags:
  - Docker
  - Containers
  - Unix
---

![Draft fail](https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/how-to-deploy-java-apps-with-docker-a-quick-tutorial@3x-1560x760.png)

### Create image using this directory's Dockerfile

```shell-session
docker build -t <somename>
```

### Run <somename> mapping port 8000

```shell-session
 docker run -p 8000:80 <somename>
```

### Same thing, but in detached mode

```shell-session
 docker run -d -p 8000:80 <somename>
```

### Enter a running container (you can also do sh)

```shell-session
 docker exec -it [container-id] bash
```

### See a list of all running containers

```shell-session
 docker ps
```

### Gracefully stop the specified container

```shell-session
 docker stop <hash>
```

### See a list of all containers , active and inactive

```shell-session
 docker ps -a

```

### Force shutdown of the specified container

```shell-session
 docker kill <hash>
```

### Remove the specified container from this machine

```shell-session
 docker rm <hash>
```

### Remove all containers from this machine

```shell-session
docker rm $(docker ps -a -q)
```

### Show all images on this machine

```shell-session
docker images -a
```

### Remove the specified image from this machine

```shell-session
docker rmi <imagename>
```

### Remove all images from this machine

```shell-session
docker rmi $(docker images -q)
```

### Log in this CLI session using your Docker credentials

```shell-session
 docker login
```

### Tag <image> for upload to registry

```shell-session
 docker tag <image> username/repository:tag
```

### Upload tagged image to registry

```shell-session
 docker push username/repository:tag
```

### Run image from a registry

```shell-session
 docker run username/repository:tag
```
