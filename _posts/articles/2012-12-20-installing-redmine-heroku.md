---
layout: article
title:  Installing Redmine on Heroku
date: 2012-12-20
category: article
tags:
  - heroku
  - redmine
  - how to
---
After deciding to use [Redmine](http://www.redmine.org/) for my project management, I needed a place to host it. Since I needed it to reside on my domain, many of the free options were not possible. I also spent three days with two various shared hosting solutions that had almost no support. Shared linux hosting works great for my php applications. Ruby on Rails, not so much.

I decided to use the shared Platform as a Service (PaaS) solution Heroku and here are the resources needed to get a Redmine application running on your custom domain.

1)&nbsp;[Sign up for a free Heroku account](https://api.heroku.com/signup) and download their toolbelt for your operating system.

2) [This guide explains how to set up a basic Rails application in Heroku](https://devcenter.heroku.com/articles/rails3). If you've never used Rails or deployed to a cloud solution, I **strongly**&nbsp;recommend&nbsp;going through those steps.&nbsp;

3) [After a bit of searching online, I found this incredible guide to deploy Redmine 2 on Heroku.](http://railsguides.net/2012/04/28/how-to-deploy-redmine-to-heroku/) If you run into any issues, check out the comments. Below are some specific issues that I ran into:

&nbsp;- Heroku creates your database config file.

&nbsp;- Edit your config/environments.rb file and remove 'exit 1' from line 10

&nbsp;- Heroku uses postgre SQL, so you can remove mysql and sqlite3 from the Gemfile if your local 'bundle install' fails. [More info on Gemfile.](http://gembundler.com/gemfile.html)

&nbsp;4) Configure your email. The email settings in Redmine are used to send alerts to the users. Email alerts are very important and since 200 emails per day is not that many, I use my Google Apps account. Here is what my configuration.yml file looks like:

``` yaml

production:
  delivery_method: :smtp
  smtp_settings:
  address: "smtp.gmail.com"
  port: "587"
  authentication: :login
  domain: "roybiv.net"
  user_name: "redmine@roybiv.net"
  password: "notmypassword"

```

5) Follow these steps to create a [custom url for your Heroku application.](https://devcenter.heroku.com/articles/custom-domains) I use a subdomain, so I simply set a CNAME and it worked almost instantly.

6) Now you're up and running. The default admin username/password is admin/admin There are many administration changes you'll want to make, but the first thing to do is change your base url. Log in as Admin: Administration &gt; Settings &gt; Host name and change this from localhost:3000 to your custom url, otherwise the email alerts will not have a correct url. Also, for your timestamps to make sense, you should also set the Heroku Timezone. For me, running this command did the trick

<pre>heroku config:add TZ=America/Chicago</pre>

7) I do not use the file hosting feature, so I cannot comment on configuring the s3 Amazon settings.&nbsp;

8) Next, you'll want to organize your projects and settings. I use redmine to manage my development agency and like that it gives me complete freedom. I will write a later post about how I have my projects organized.
