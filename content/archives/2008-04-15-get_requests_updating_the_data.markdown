---
layout: post
title: "GET Requests Updating the Database"
date: "2008-04-15T11:06:00+01:00"
comments: false
categories: 
---

<p><a href="http://feeds.feedburner.com/~r/MyHovercraftIsFullOfEels/~3/270546951/000422.html">Simon Harris</a>:</p>

<blockquote>
<p>The HTTP methods should be used to indicate the user&#8217;s intention without regard to the underlying implementation. The web application is an abstraction so we need to model the interaction on that abstraction. If the user&#8217;s intention is to make a change to something then go ahead and use a PUT but if they&#8217;re only reading some data use a GET even if you know it involves some database writes.<br /><br />It may seem somewhat esoteric but spending a bit of time thinking about what the user&#8217;s intention is exactly has helped me better flesh out an application&#8217;s API.</p>
</blockquote>

<p>I have the same experience: The CRUD analogy may help when you start &#8220;getting&#8221; REST, but you should leave it behind as soon as you can.</p>

<section class="comments">



<div class="comment" id="comment-1682">
On <a href="#comment-1682" title="Permalink to this comment">April 15, 2008 11:46 AM</a>, <a href="http://duryodhan.wordpress.com" title="http://duryodhan.wordpress.com" rel="nofollow">duryodhan</a>
said:
<p>This is all pretty nicely explained in the HTTP RFC. Only after reading the RFC did it all become clear. For a standards document, it is suprisingly readable.</p>


</section>

