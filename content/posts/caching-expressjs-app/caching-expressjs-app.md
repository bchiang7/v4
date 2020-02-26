---
title: Caching your express app
description:
date: '2019-11-22'
draft: false
slug: '/pensieve/caching-expressjs-app'
tags:
  - Nodejs
  - Redis
  - Express
---

![Draft fail](https://www.sohamkamani.com/static/18122218f0260b8206bc3bb69197ba7e/8ff1e/logo.png)

# Caching your express app

`What is caching?`
Fetching something over the network is both slow and expensive. Large responses require many roundtrips between the client and server, which delays when they are available and when the browser can process them, and also incurs data costs for the visitor. As a result, the ability to cache and reuse previously fetched resources is a critical aspect of optimizing for performance
Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. Redis always serves and modifies data in the server’s main memory. The impact is system will quickly retrieve data that will be needed. Redis works to help and improve load performance from relational databases or NoSQL by creating an excellent in-memory cache to reduce access latency. Using Redis we can store cache using SET and GET, besides that redis also can work with complex type data like Lists, Sets, ordered data structures, and so forth.

## Installation

Installing redis is pretty staright forward.You can check the [link](https://redis.io/topics/quickstart) for installation

To add redis client to nodejs , simply do

```shell-session
npm i redis
```

For the sake of simplicity, we will use this example where I am fetching some data from an external api in an express app

```javascript
const express = require('express');
const responseTime = require('response-time')

//Load Express Framework
var app = express();

//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());

const axios = require('axios')


async getDogs(req,res) {
  try {
    const dogs = await axios.get('https://dog.ceo/api/breeds/list/all');
    res.send(dogs);
  } catch (error) {
    console.error(error)
    res.send('Something went wrong!!!');
  }
}

app.get('/dogs', getDogs);

app.listen(3000, function() {
  console.log('Your app is running on port 3000 !!!')
});

```

This is a simple express app which retrieves data from the Dogs' API, without putting Redis on the endpoint. Fairly simple
However , the downward side is if we have already fetched data and if the data in the server is not modified, then there is no need to fetch the data on each request

This is the same code but this time we have added a caching layer with `Redis`

```javascript
const express = require('express');
const responseTime = require('response-time')
const redis = require('redis');
const client = redis.createClient();

//Load Express Framework

var app = express();

//Create a middleware that adds a X-Response-Time header to responses.

app.use(responseTime());

const axios = require('axios')


async getDogs(req,res) {
  try {


  client.get('dogsdata', (err, result) => {
    if (result) {

     res.send(result);

    } else {
      const dogs = await axios.get('https://dog.ceo/api/breeds/list/all');

    // Set the string-key:dogsdata in our cache. With he contents of the cache
    // Set cache expiration to 1 hour (60 minutes)

    client.setex('dogsdata', 3600, JSON.stringify(dogs));
    }

    });

  } catch (error) {
    console.error(error)
    res.send('Something went wrong!!!');
  }
}

app.get('/dogs', getDogs);

app.listen(3000, function() {
  console.log('Your app is running on port 3000 !!!')
});

```

Here we are first fetching the data from the cache with the tag `dogsdata`. If the data exists in the cache, we serve the data else we make the request to the api via axios else we make the api request via axios. Everytime the api is called, the cache is updated with the latest data.
Remember redis is a key value store thus the key with which you have set data must be equal to the key with which you fetch data in this case `dogsdata`

If you compare both the implementation, you can see that caching reduces the time taken to serve the request by almost more than 99%

Follow me on [Github](https://github.com/rubiin)
