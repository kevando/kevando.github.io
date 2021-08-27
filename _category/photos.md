---
permalink: /photos.html
layout: category
category: photos
---

These are images that don't quite fit on social media.

{% assign photo_posts = site.posts | where: "categories", "photo" | where: "categories", "blog" %}

{% for post in photo_posts %}

![{{post.title}}]({{post.image}})
{: .photo-blog }

{{ post.date | date: '%B %d, %Y' }}
{: .photo-blog-caption }

{% endfor %}



{{ post.content }}