---
title: Life is thrilling in every direction, but you cant have it all
category: blog
permalink: /blog
layout: default
---



<div class="category">
<p>
    {% for tag in site.tags %} 
    
     #{{ tag | first }}{% unless forloop.last %}{% endunless %}
    {% endfor %}
  </p>
  <article>

{%- for page in site.categories[page.category] -%}


	<section>
      <header>
        <!-- TITLE -->
        <h1 >
          <span >{{ page.title | escape }}</span>
        </h1>
      </header>


      <footer>

      <p class="post-meta">
        <time
          datetime="{{ page.date | date_to_xmlschema }}"
          itemprop="datePublished"
        >
          {{ page.date | date: date_format }}
        </time>
      </p>
      <p>
          {% for tag in page.tags %} {% capture tag_name %}{{ tag }}{% endcapture
          %} {% if site.tag_pages contains tag_name %}
          <a href="/{{ tag_name }}">
            <span>#{{ tag_name }}</span>
          </a>
          {% else %}
          <span>#{{ tag_name }}</span>
          {% endif %} {% endfor %}
        </p>
      </footer>
    </section>
{%- endfor -%}

  </article>
</div>
