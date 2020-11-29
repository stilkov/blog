---
layout: post
title: "RESTful Rails"
date: "2006-02-19T01:07:00+01:00"
comments: false
categories: 
---

<p>How did I miss this one back in November? <a href="http://www.xml.com/pub/a/2005/11/02/rest-on-rails.html?page=1">This article by Matt Biddulph</a> explains how to expose your Ruby on Rails model classes as RESTful resources &#8212; using Ruby&#8217;s metaprogramming support, you end up with adding one line for each resource:</p>

<pre><code>class NewsController &lt; ApplicationController
rest_resource :item
rest_resource :category
end
</code></pre>

<p>Very cool.</p>


