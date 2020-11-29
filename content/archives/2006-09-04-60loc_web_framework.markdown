---
layout: post
title: "60-LOC Web Framework"
date: "2006-09-04T10:21:00+01:00"
comments: false
categories: 
---

<p>Joe Gregorio builds a Python Web framework in 60 lines of code. One thing I particular like is the use of <a href="http://lukearno.com/projects/selector/">Selector</a>:</p>

<pre><code>import selector
import view

urls = selector.Selector()
urls.add('/blog/', GET=view.list)
urls.add('/blog/{id}/', GET=view.member_get)
urls.add('/blog/;create_form', POST=view.create, GET=view.list)
urls.add('/blog/{id}/;edit_form', GET=view.member_get, POST=view.member_update)
</code></pre>


