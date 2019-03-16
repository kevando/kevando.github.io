---
title: Internet Comics
layout: default
class: comics
categories:
  - favs
comics:
  - Exploding Dog
  - The Oatmeal
  - xkcd
  - False Knees
  - waitbutwhy
  - vi hart
  - shree doodles
  - Keep Your Whimpers Down
  -
---

<article>
  <section>
  <h2>Comics</h2>
  <ul>
    {% for comic in page.comics %}
    <li>{{ comic }}</li>
    {% endfor %}
  </ul>

</section>

</article>
