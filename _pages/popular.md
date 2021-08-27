---
title: Kevin!
permalink: /popular.html
---



<ul>
{% for category in site.categories %}

{% assign category_name = category | first | remove_first: ","  %}
{% assign category_posts = category | last  %}

<li>
  <b><a href="/{{ category_name }}">{{ category_name }} </a> ({{ category_posts.size }})</b>
</li>
{% endfor %}

</ul>

<hr />

<ul class="tags">
	{% for tag in site.tags %}
	  {% assign t = tag | first %}
	  {% assign posts = tag | last %}
	  <li>#{{t | downcase | replace:" ","-" }}  ({{ posts | size }})</li>

    {% endfor %}
    </ul>

<hr />

<ul>
{% for post in site.posts %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
