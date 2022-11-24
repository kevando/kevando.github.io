---
category: article
---

# Articles

{% assign photo_posts = site.posts | where: "categories", "article"  %}

{% for post in photo_posts %}
[{{post.title}}]({{post.url}})
{: .photo-blog }
{% endfor %}

{{ post.content }}


<!-- {{ post.date | date: '%B %d, %Y' }} -->