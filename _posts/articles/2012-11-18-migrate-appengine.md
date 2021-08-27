---
layout: article
title: Migrate Appengine to Datastore
date: 2012-11-18
categories: blog, article
tags:
  - appengine
  - guide
  - python
---

When I decided to learn Python, I figured a great way to host my small demo site would be Google App Engine. I used this platform in the past to host Java applications and had experience with Google's deployment method. After [following these steps&nbsp;to locally launch my Python app](https://developers.google.com/appengine/docs/python/gettingstartedpython27/ "following these steps to locally launch my Python app")&nbsp;I tried to deploy it to an existing app ID that I set up earlier for a Java app, but no longer used. The deployment error I got was this:

```
The 'python27' runtime is only supported for apps using the High Replication Datastore.
```

The reason for this error is because this specific app id is not created as a High Replication Datastore. [Google provides these steps to upgrade](https://developers.google.com/appengine/docs/adminconsole/migration), but if you are using 10/10 of your free app slots, then you will not be able to duplicate the application. In my case, I did not need to retain the old data, so [completely deleting my application](https://developers.google.com/appengine/docs/adminconsole/applicationsettings#Disable_or_Delete_Your_Application) was the best solution. Then I just created a new one with a new appID.
