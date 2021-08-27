---
title: Kevin!
header_title: this my website
permalink: /
---



<ul>
{% for category in site.categories %}

{% assign category_name = category | first | remove_first: ","  %}
{% assign category_posts = category | last  %}

<li>
  <b><a href="/{{ category_name }}.html">{{ category_name }} </a> ({{ category_posts.size }})</b>
</li>
{% endfor %}

</ul>
