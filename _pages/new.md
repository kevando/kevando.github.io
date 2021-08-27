---
title: What's New?
permalink: /new.html
---

## Here is the latest just for you

<ul>
{% for post in site.posts %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
