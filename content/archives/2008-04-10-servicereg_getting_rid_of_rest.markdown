---
layout: post
title: "ServiceReg -- Getting Rid of RESTful Properties via GET"
date: "2008-04-10T07:26:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.servicereg.com/">This</a> may seem like a good idea at first sight -- a service that turns </p>

<pre><code>http://servicereg.com/verb/{user:password@}domain/noun{/id?params}
</code></pre>

<p>into a corresponding GET, PUT, POST or DELETE against a RESTful Rails app. </p>

<p>Unfortunately, it has two major problems:</p>

<ul>
<li>It defeats the whole purpose of RESTful design, which is to use the HTTP verbs according to their meaning</li>
<li>It basically assumes "RESTful service" equals the way Rails does them, which is one, but definitely not the only way</li>
</ul>

<section class="comments">



<div class="comment" id="comment-1674">
On <a href="#comment-1674" title="Permalink to this comment">April 10, 2008  8:31 AM</a>, <a href="http://tomayko.com" title="http://tomayko.com" rel="nofollow">Various Artists</a>

<a href="http://tomayko.com" class="commenter-profile"></a>
said:
<p>Actually, it seemed like a bad idea at first sight :)</p>


<div class="comment" id="comment-1675">
On <a href="#comment-1675" title="Permalink to this comment">April 10, 2008 11:56 AM</a>, <a href="http://blog.springsource.com/arjen/" title="http://blog.springsource.com/arjen/" rel="nofollow">Arjen Poutsma</a>
said:
<blockquote>It basically assumes &#8220;RESTful service&#8221; equals the way REST does them</blockquote>

<p>I think you mean: </p>

<p>It basically assumes &#8220;RESTful service&#8221; equals the way <strong>RoR</strong> does them.</p>


<div class="comment" id="comment-1676">
On <a href="#comment-1676" title="Permalink to this comment">April 10, 2008 12:13 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Thanks - fixed.</p>


<div class="comment" id="comment-1677">
On <a href="#comment-1677" title="Permalink to this comment">April 10, 2008  7:08 PM</a>, Mike Davison
said:
<p>Why would I ever even contemplate doing something like this?  Am I missing something obvious?  Bad indeed&#8230;</p>


</section>

