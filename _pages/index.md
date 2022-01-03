---
title: Kevin!
header_title: this my website
permalink: /
---




<!-- Get all posts for the homepage -->
{% assign posts = site.posts | where: "categories", "homepage" %}
{% for post in posts %}
  ---
  {{ post.content | markdownify }}
{% endfor %}
