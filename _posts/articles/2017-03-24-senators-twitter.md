---
layout: post
permalink: /senate.html
title: The U.S. Senate on Twitter
date: 2017-03-24
categories: [data, articles]
image: https://i.imgur.com/V8P6Pmq.png
summary: Which Senators follow each other?
tags:
  - politics
  - data
  - fun
twitter:
  image: https://i.imgur.com/V8P6Pmq.png
  title: Do Senators Follow Each Other?
  description: Which which of the 4,950 unique relationships in the Senate exist on Twitter
---

I found the 100 handles and plugged them into Twitter's API. Then I generated 100
JSON objects with an `import` array that includes all the senator usernames this
paticular senator follows. Bernie Sanders for example:

```json
{
  "name": "sensanders",
  "friends_count": 1999,
  "followers_count": 4667647,
  "statuses_count": 16482,
  "displayName": "Bernie Sanders",
  "imports": [
    "lisamurkowski",
    "senfeinstein",
    "senbennetco"
    // ...
  ],
  "state": "Vermont"
}
```

I used Twitter's naming standards to create 3 relationship types:

- follows: Needy senator that only follows. (orange)
- followed: Cool senator that is followed. (blue)
- friends: Both Senators follow each other. (purple)

### Lets take a look at the 4,950 senator relationships.

<div id="chart"></div>

<link rel="stylesheet" href="/assets/stylesheets/senate.css">
<script type="text/javascript" src="/assets/scripts/lib/d3.js"></script>
<script type="text/javascript" src="/assets/scripts/lib/lodash.js"></script>
<script type="text/javascript" src="/assets/scripts/lib/d3.layout.js"></script>
<script type="text/javascript" src="/assets/scripts/lib/packages.js"></script>
<script type="text/javascript" src="/assets/scripts/senate.js"></script>
