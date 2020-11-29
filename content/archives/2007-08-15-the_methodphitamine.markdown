---
layout: post
title: "The Methodphitamine"
date: "2007-08-15T07:42:00+01:00"
comments: false
categories: 
---

<p><a href="http://jicksta.com/articles/2007/08/04/the-methodphitamine">Jay Phillips</a>:</p>

<blockquote>
<p>I call it The Methodphitamine. That&#8217;s <em>Method</em> ph <em>it</em> amine, a drug for Ruby addicts to code faster.</p>
</blockquote>

<p>This allows you to shorten</p>

<pre><code>User.find(:all).map{|x| x.contacts.map{|y| y.last_name.capitalize }}
</code></pre>

<p>to</p>

<pre><code>User.find(:all).map &amp;#38;its.contacts.map(&amp;#38;its.last_name.capitalize)
</code></pre>

<p>Despite the stupid name, this is definitely a cool hack. I&#8217;m not entirely I&#8217;d ever actually use this, but I still find it great to find out the language supports stuff like this :-)</p>


