---
title: Getting started with Api development on Nodejs
description:
date: '2019-09-19'
draft: false
slug: '/pensieve/getting-started-with-api-develpoment-on-nodejs-52bi'
tags:
  - Nodejs
  - Backend
  - Express
---

![Draft fail](https://hackernoon.com/hn-images/1*26BcOdrwfRkbGk9OsREyLA.png)

Before we get our hands dirty and get a move on , I assume you have a sound knowledge of js .I am also assuming that you have nodejs installed on your machine.
There are plenty of web frameworks for nodejs . To point out a few popular ones, I might say express , koa and hapi. We will be going with express as it is the most used web framework for nodejs with tons of modules that are configured to work with it. Also the syntax and the learning curve is pretty easy to catch up and if you are to get stuck in a problem, there are pretty much answer to every query in stackoverflow.
To get started, lets create a directory and head over to it.After you are in the project directory, open up terminal/console and run npm init to start a nodejs project. Fill in the details as you like.After you are done , type in

```sh
npm i — save express body-parser morgan nodemon
```

Hit enter and that should install and update the dependencies in package.json file.

<b>Nodemon</b> will monitor for any changes in your node.js application and automatically restart the server — perfect for development so you dont have to manually restart the server for viewing the changes.

<b>Morgan</b> is a HTTP request logger middleware for node.js .

<b>Body-parser</b> is Node.js body parsing middleware. It parses incoming request bodies in a middleware before your handlers, available under the req.body property.

After all the modules have been installed , create a file app.js in the root folder and open it in your favorite editor. I use visual studio code but you could go with any any text editor of your perference.
Basic Setup
Open app.js in the editor and require express module with

```javascript
var express=require('express')
Now create an express instance with
var app= express()
```

##Routes
Now lets define some routes . A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.

```javascript
// GET method route

app.get('/', function(req, res) {
  res.send('GET request to the homepage');
});

// POST method route

app.post('/', function(req, res) {
  res.send('POST request to the homepage');
});
```

`Express` supports methods that correspond to all HTTP request methods: get, post, and so on. For a full list, see app.METHOD.
Here are some examples of route paths based on strings.
This route path will match requests to the root route, /. So if you visit the app in localhost:<your port>/ , you will get root printed on your window

```javascript
app.get('/', function(req, res) {
  res.send('root');
});
```

This route path will match requests to /about.So if you visit the app in localhost:<your port>/ , you will get about printed on your window

```javascript
app.get('/about', function(req, res) {
  res.send('about');
});
```

You can also use regular expressions in routes to make your routes more dynamic.

##Route parameters
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.This will simply output all parameters i.e userId and bookId as an object.You can also access a single param by using
req.params.paramname

```javascript
app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params);
});
```

Summing all of the above
The following code is an example of a very basic route.

```javascript
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/about', function(req, res) {
  res.send('about');
});

app.get('/:userId', function(req, res) {
  res.send(req.params.userId);
});

app.post('/post', function(req, res) {
  res.send('this is a post request');
});

// tell express to run on port 8000

app.listen(8000);
```

Thats all for this part .

Follow me on [Github](https://github.com/rubiin)
