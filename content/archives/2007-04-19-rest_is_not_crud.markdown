---
layout: post
title: "REST is not CRUD"
date: "2007-04-19T21:03:00+01:00"
comments: false
categories: 
---

<p>Interesting post by <a href="http://abstractfinal.blogspot.com/">Keyur Shah</a>:</p>

<blockquote>
<p>A common way of designing a REST system is to recognize the resources and associate a logical hierarchy of URLs to them and perform the traditional CRUD operations by using the well-known HTTP methods (GET, POST, PUT and DELETE).</p>
</blockquote>

<p>Check out the discussion in the comments; I believe this is a very common misconception &#8212; if REST is CRUD (Create, Read, Update, Delete) and I need more semantics than that, the right way surely must be to introduce new methods?</p>

<p>No, <em>it&#8217;s not</em>. This is probably the hardest thing to grasp about REST &#8212; the fact that any and all application semantics can be mapped to the uniform REST interface (the HTTP verbs) without introducing actions (operations/methods) into the URL, and without adding new verbs. I feel oddly compelled to write about this &#8230; but only after <a href="http://jax.de/konferenzen/jax07/overview_sessions_eng.php?track=2&amp;_language=de#session-sw6">my (second) talk</a> at <a href="http://jax.de/konferenzen/jax07/index_eng.php">JAX 2007</a>, which is about this exact topic.</p>

<section class="comments">



<div class="comment" id="comment-1255">
On <a href="#comment-1255" title="Permalink to this comment">April 19, 2007 10:29 PM</a>, <a href="http://asynchronous.org/" title="http://asynchronous.org/" rel="nofollow">jsled</a>
said:
<p>I think you mean the HTTP verbs, right?</p>


<div class="comment" id="comment-1256">
On <a href="#comment-1256" title="Permalink to this comment">April 20, 2007  7:27 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks, fixed.</p>


<div class="comment" id="comment-1257">
On <a href="#comment-1257" title="Permalink to this comment">April 20, 2007  9:45 AM</a>, Asbjørn Ulsberg
said:
<p>Looking forward to reading your write-up on the matter!</p>


<div class="comment" id="comment-1258">
On <a href="#comment-1258" title="Permalink to this comment">April 22, 2007  1:40 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>It&#8217;s true that any application semantic can be mapped to those existing methods, but in some cases there can be a considerable cost in efficiency by using them and a new method is warranted.  Consider the example of COPY; doing it as a GET followed by a PUT means that the client requesting the interaction has to download the initial representation; if it&#8217;s large, then COPY is far more efficient.</p>


<div class="comment" id="comment-1259">
On <a href="#comment-1259" title="Permalink to this comment">April 22, 2007  5:14 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I agree, but still maintain that this is the exception (and my guess is you agree).</p>


</section>

