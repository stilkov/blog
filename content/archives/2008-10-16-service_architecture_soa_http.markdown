---
layout: post
title: "Service Architecture - SOA: HTTP Cache and the need for cachability"
date: "2008-10-16T22:46:00+01:00"
comments: false
categories: 
---

<p>Good advice on HTTP app design from <a href="http://service-architecture.blogspot.com/2008/10/http-cache-and-need-for-cachability.html">unexpected sources</a>:</p>

<blockquote>
<p>So HTTP Cache on its own doesn't make your application perform any better for end users or reduce the load on your servers. You have to design your application so the elements being returned are cachable in a way that will deliver performance improvements. For some applications its trivial, for others (like the Mandelbrot Map) its a little bit harder.</p>
</blockquote>

<section class="comments">



<div class="comment" id="comment-1815">
On <a href="#comment-1815" title="Permalink to this comment">October 16, 2008 11:12 PM</a>, <a href="http://dehora.net/journal" title="http://dehora.net/journal" rel="nofollow">Bill de hÓra</a>
said:
<p>And then there&#8217;s this:</p>

<p><a href="http://service-architecture.blogspot.com/2008/05/rest-on-mars-scaling-problem-to-make.html" rel="nofollow">http://service-architecture.blogspot.com/2008/05/rest-on-mars-scaling-problem-to-make.html</a></p>

<p>Steve seems smart enough, but pretending technology doesn&#8217;t matter in combination with making your business depend on services that aren&#8217;t inherently stable I doubt helps the bottom line (if the business itself isn&#8217;t stable and is in constant change how will business driven services not end up a mess?).  </p>


<div class="comment" id="comment-1816">
On <a href="#comment-1816" title="Permalink to this comment">October 19, 2008  2:12 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>I agree with your criticism of that particular (and many others) of Steve&#8217;s posts - as I said, unexpected source :-)</p>


</section>

