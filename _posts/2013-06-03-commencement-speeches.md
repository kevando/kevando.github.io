---
layout: blog_post
title: Top 5 Commencement Speeches
date: 2013-06-03
categories: blog
tags: speeches, videos
speeches:
  - speaker: Conan O'brien
    youtube_id: KmDYXaaT9sA
    note: Conan is my comic idol and he delivers this awesome speech soon after his departure from NBC.
  - speaker: David Foster Wallace
    youtube_id: 8CrOL-ydFMI
    note: I’ve been a fan of TLI since the beginning. Not much wisdom here, just someone with my sense of humor.    
  - speaker: Andy Sandberg
    youtube_id: UN_K-UIREYA
    note: I’ve been a fan of TLI since the beginning. Not much wisdom here, just someone with my sense of humor.
  - speaker: Steve Jobs
    youtube_id: VHWUCX6osgM
    note: One of Steve’s most insprirational speeches. This video played a large role convincing me to leave my first full-time job.
  - speaker: Jon Lovett
    youtube_id: JHl80Wmpj40
    note: One of Obama’s speech/joke writers.
---
{% for speech in page.speeches %}
  <h2>{{ speech.speaker }}</h2>
  <div class="video-embed-wrapper" style="max-width:500px">
    <iframe 
      width="500" 
      height="360" 
      src="https://www.youtube.com/embed/{{speech.youtube_id}}" 
      frameborder="0" 
      allow="gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
      <p style="margin: 0;font-family: Avenir;color: #464646;font-size: 0.8em;">{{ speech.note }}</p>
  </div>
{% endfor %}