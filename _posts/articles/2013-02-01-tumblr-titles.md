---
layout: article
title:  Adding a Title for All Tumblr Post Types
date: 2013-02-01
category: article
tags:
  - tumblr
  - help
---

If your Tumblr blog has mixed content with text posts, photo posts, audio posts, etc, it begins to look really weird without titles for some of the posts.&nbsp;The text posts look great with a chosen title, but Tumblr doesn't let you give song and video posts a title. This disrupts the flow of your site.

Here's what mine looked like.&nbsp;

![image](https://66.media.tumblr.com/fc2d7b5cc70e9734bf0851f04955816e/tumblr_inline_mhj135Wcye1qz4rgp.png)

**Not very cohesive.**

There are probably many ways to achieve titles for all of your posts, but here is a quick 3 step method that I used:

1) Go to the [customization section of your tumblr page](http://www.tumblr.com/customize "Will Open in New Window"), and edit HTML. Before doing anything, copy the entire contents&nbsp;of your current theme and paste to a text editor. In case something goes haywire, you have a backup. Now do a page search for&nbsp;**{block:Video}**&nbsp;in your HTML. This contains the code that generates your video posts.You'll want to make sure that your {caption} block&nbsp;is the first thing in the video block.&nbsp;

For me, that meant changing this:

<pre>{block:Video}
&nbsp;&nbsp;&lt;div class="video-wrap"&gt;{Video-500}&lt;/div&gt;
&nbsp;&nbsp;{block:Caption}&lt;div class="caption"&gt;{Caption}&lt;/div&gt;{/block:Caption}
{/block:Video}</pre>

To this:

<pre>{block:Video}
&nbsp;&nbsp;{block:Caption}&lt;div class="caption"&gt;{Caption}&lt;/div&gt;{/block:Caption}
&nbsp;&nbsp;&lt;div class="video-wrap"&gt;{Video-500}&lt;/div&gt;
{/block:Video}</pre>

Now do this same thing for Audio, Photo, and Quotes. If you look at your tumblr site now, you would see the&nbsp;posts have reversed the song/video with the post content.

2) Now that you have your post content in the right order, now we need to find out information about your current titles. Open your tumblr in a browser that lets you inspect the html. Right click on your title and choose inspect element, brining you right to that HTML tag

![image](https://66.media.tumblr.com/9ab11c08cfcced8dae3a9a8ae5d4c311/tumblr_inline_mhj1njKlMl1qz4rgp.png)

This shows you the html that creates your post titles.&nbsp;

![image](https://66.media.tumblr.com/e01bf1483410d5ea86a3b33b04e5fb9d/tumblr_inline_mhj1p59cR61qz4rgp.png)

For me the HTML element is:

``` html
<h3><a>{title}</a></h3>
```

3) Now you need to edit all your previous posts (or just your important ones) and add a title. Edit the old tumblr post, view it as html and you will see something like this:

<pre>&lt;p&gt;New Track!&lt;/p&gt;</pre>

Now, just add the title like we found in step #2. This&nbsp;particular&nbsp;post would become something like:

<pre>&lt;h3&gt;&lt;a href="http://kevinhabich.com/post/40255816223/great-song"&gt;Sir Sly - Gold&lt;/a&gt;&lt;/h3&gt;
&nbsp;&lt;p&gt;New Track!&lt;/p&gt;</pre>

Note: You'll need to make sure that you get the correct permalink of your post so the link is correct (something Tumblr automatically generates&nbsp;for posts with titles).

![image](https://66.media.tumblr.com/6b072c9a62d2c9d49742676fbf7a71cd/tumblr_inline_mhj1wxdIIm1qz4rgp.png)

4) Viola! Open your home page and refresh. If you did this correctly, you should see a much better formatted blog!

![image](https://66.media.tumblr.com/c11ce2a82a0cd941f5425d06d5bd06a0/tumblr_inline_mhj2x2LwRo1qz4rgp.png)This poorly represents the progress of what we just did. If this heyour tumblr, or if you have problems let me know in the comments!

[original](http://kevandonation.tumblr.com/post/42007217880/how-to-add-titles-for-all-tumblr-post-types)
