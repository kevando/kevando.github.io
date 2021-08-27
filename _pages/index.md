---
title: Kevin!
header_title: this my website
permalink: /
---

<ul>
  {% for category_page in site.category_pages %}

<!-- whatever -->

{% for category in site.categories %}

{% assign category_name = category | first | remove_first: ","  %}
{% assign category_posts = category | last  %}

{% if category_name == category_page.category %}

  <li>
      <a href="/{{ category_name }}.html">{{ category_page.title }} </a>  ({{ category_posts.size }})
    </li>

{% endif %}

{% endfor %}

{% endfor %}

</ul>

<ul>
{% for category in site.categories %}

{% assign category_name = category | first | remove_first: ","  %}
{% assign category_posts = category | last  %}

<li>
  <b><a href="/{{ category_name }}.html">{{ category_name }} </a> ({{ category_posts.size }})</b>
</li>
{% endfor %}

</ul>
