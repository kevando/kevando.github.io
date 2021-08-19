---
permalink: /writing
layout: default
category: article
---

# Writing

{% for post in site.categories[page.category] %}

- [{{ post.title }}]({{ post.url }}) 

{% endfor %}

