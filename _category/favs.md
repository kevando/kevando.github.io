---
title: <3
category: fav
permalink: /<3
layout: default
class: favs
logo: goat2.svg
---




   {%- for fav in site.favs -%}
   <h2>
   <a href="{{ fav.url }}">
   {{ fav.title }}
  </a>
  </h2>
   {%- endfor -%}
