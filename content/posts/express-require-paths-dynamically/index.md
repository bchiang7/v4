---
title: Dynamically requiring all routes in express app
description:
date: '2019-09-16'
draft: false
slug: '/pensieve/docker-for-nodejs-3cjg'
tags:
  - Nodejs
  - Webdev
  - Express
---

## ![Draft fail](https://miro.medium.com/max/1200/1*EKW3XazCN98jcVrlEP3H8g.png)

If you are using express framework for developing a web application , you might be familiar with the concept of routing and how it plays an important role in your app. Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing.
You define routing using methods of the Express app object that correspond to HTTP methods;
For example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).
I like to fragment my routes in separate files and like to require them in the root js file. This not only improves your code readability but also makes debugging alot easier as it is easy to pinpoint the exact location in the exact file instead of going through bulk of codes in a single file.
To use your fragmented routes , you have to require them similar to a nodejs module and put it inside app.use . This is simple if your routes folder has a couple of routes but if you are talking about a webapp of a large scale, there may be a dozen or more routes files which means you have to require each files and the app.js file gets populated with the code for reqiring your routes .
Also if there are multiple routes , there may be a possibility that you may forget to use a route.
So a quick hack would be to use dynamic routing which automatically requires all your routes in routes folder thus reducing the code and
requiring the routing easier.

```javascript
/**
 * Dyanmic Routing
 * Adds all routes from routes folder
 */
fs.readdir('./routes', (err, files) => {
  files.forEach(file => {
    app.use('/', require('./routes/' + file));
  });
});
```

Here we have used the filesystem module to read all files from routes folder and using them in instance of express app.
