---
title: Asynchronous things
description: Similarities betwwen arrays and events & symmetrical observable and the iterator patterns.
date: '2020-05-15'
draft: false
slug: '/publications/async-things'
img: 'observable'
isDocumentExist: true
tags:
  - Observable
  - RX_operators
  - Async
---

In this post, I’ll focus on what can be the similarities between the arrays and events, and how observable and the iterator patterns can be symmetrical, Is it even possible?

Did it ever cross your mind that the design patterns could hold some lurking flaws?

Inspired by Jafar Husain (Previous Netflix's Cross-UI Team Technical Lead) online publications I have the pleasure to share with you the following information that I found personally very interesting for understanding asynchronous programming the right way.

## Questions

- Why async seems hard? <br/>
- In what way Observable & iterator patterns are symmetrical?<br/>
- What links Arrays and events?<br/>
- What is the anatomy of an observable?<br/>
- Epics or effects, what rx operators to use?<br/>

## Why async seems hard?

- Race Conditions
- Memory Leaks
- Complex State Machines
- Uncaught Async Errors
- Callbacks hell

## View on design patterns relationships

## Anatomy of an Observable

- Observable is an object with forEach function that accept an Observer.<br/>

- Observer is nothing but an object with three (3) functions: onNext, onError onCompleted to be invoked.

This example show how u can adapt whatever to an observable by just adding a pretty forEach function.

## RXJS Operators

Whether you’re building complex applications using Angular or React, it’s very probable then that you will be handling async behaviors, actions, managing redux stores and redux stuffs, using RX reactive libraries such as redux-observable to handle Epics or effects for Angular.<br/>

You'll find the most relevant RX operators illustrations you'll need for Epics/Effects handling.

## Sources

Based on some Jafar Hussain's (software developer at Facebook and previous Netflix's Cross-UI Team Technical Lead) publications, presentations, conferences on youtube about reactive programming.

Slides: https://www.slideshare.net/InfoQ/asynchronous-programming-at-netflix/ <br/>
Netflix Javascript talks: https://www.youtube.com/watch?v=FAZJsxcykPs<br/>
Netflix blog: https://netflixtechblog.com/<br/>

## The post

Find here the answers :)
