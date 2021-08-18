**Local Development**
```
bundle install
bundle exec jekyll serve --livereload
```

**How to Deploy**
```
git add . && git commit -m 'the best code ever'
git push origin master
# if that fails, you probably forgot to pull
git pull origin master
```

If it's your first time...

```
git config --global user.email "khabich@gmail.com"
git config --global user.name "Kevando on Windows"
```

**Initial Setup** 

1.) Install Ruby and pray it goes well

2.) Open a terminal and run these commands

```
gem install bundler
gem install jekyll
bundle install
bundle exec jekyll serve
```

And then maybe also these

```
bundle add webrick

gem uninstall eventmachine
bundle install
bundle exec jekyll clean
```

---




## Project Code

This website is built with Jekyll using the Minima theme and hosted on Github Pages. All 3 have great documentation.



- [Minima Docs](https://github.com/jekyll/minima)
- [Github docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [Jekyll Docs](https://jekyllrb.com/docs/)


