---
permalink: /photos
layout: default
---

{% assign photo_posts = site.posts | where: "categories", "photo" | where: "categories", "blog" %}

<h1 class="photos title bungee center">Photos</h1>

{% for post in photo_posts %}

![{{post.title}}]({{post.image}})
{: .photo-blog }

{{ post.date | date: '%B %d, %Y' }}
{: .photo-blog-caption }

{% endfor %}



{{ post.content }}