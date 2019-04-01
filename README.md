# Kevando 

### Jekyll Snippets

```html

# Blog page
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<span class="post-meta">{{ post.date | date: date_format }}</span>
<h6>{{ post.summary | escape }}</h6>


# Post page
<!-- <div class="post-footer">
      <span>
          {% for tag in page.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <code class="highligher-rouge"><nobr>{{ tag_name }}</nobr></code>&nbsp;
          {% endfor %}
        </span>
  </div> -->


<!-- • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span class="p-author h-card" itemprop="name">Kevando</span></span> -->
```

### Jekyll Command Line

```
# Local
bundle exec jekyll serve 

# generate site for prod
jekyll build

# Find theme files
open $(bundle show minima)

# sass
sass stylesheets/main.scss:css/main.css --watch
```




