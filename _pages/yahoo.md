---
title: Kevin's Website
permalink: /yahoo
name: yahoo
test_title: Kevin
test_paragraph: Over time people created so many variations of sad pepe that when a new one came around, it got dubbed a "rare pepe." Replace rare with scarce and you can start to see why Pepe on the blockchain makes sense.
---

## {{ page.test_title }}

{: .boobie }

## {{ page.test_title }}

{: .lens-title .pressstart }

## {{ page.test_title }}

{: .silom .lens-title }

## {{ page.test_title }}

{: .terminal }

## {{ page.test_title }}

{: .vt323 }

## {{ page.test_title }}

{: .typewriter }

## {{ page.test_title }}

{: .rockwell }

yo

---

dude

---

dude

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
