---
layout: post
date: "2009-05-21"
title: Mac OS X Terminal Aliases
categories: tips and tricks
tags: ["osx", "terminal"]
header:
  teaser: ""
---

Partly because I wanted to post more and partly because I transfer computers a lot and I figure a blog is as good place as any to share my thoughts with, well, myself.

Here's a list of aliases I've collected over the times searching the Internet (note: so far, not so many, but that'll change as I keep finding more).

To be put in `~/.bash_profile`:

```bash
alias ls='ls -aFhlG'
alias ll='ls -l'
alias search=grep
alias ..='cd ..'
alias ...='cd ../..'
alias bake='/opt/local/apache2/htdocs/cake/cake/console/cake bake'
alias cake='cd /opt/local/apache2/htdocs/cake'
```

If anyone wants more detailed explanation of any or all of these, or if you'd like to know what in the bejesus I'm even talking about, post a comment.

Oh, and I would also happily welcome further suggestions too.
