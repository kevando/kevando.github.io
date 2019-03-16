---
title: Stuff I Like
category: fav
permalink: /<3
layout: default
class: favs
logo: goat2.svg
---

<div class="fav categories">
  {%- for category in site.favs -%}
    <a href="{{category.url}}" class="{{category.class}}">
      {{ category.title }}
    </a>
  {%- endfor -%}
</div>
