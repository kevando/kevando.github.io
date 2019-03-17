---
title: Movies
layout: default
class: movies
categories:
  - favs
movies:
  - Jurassic Park
  - Somewhere
  -
---

<article>
  <section>
  <h2>Movies</h2>
  <ul>
    {% for movie in page.movies %}
    <li>{{ movie }}</li>
    {% endfor %}
  </ul>

</section>

</article>
