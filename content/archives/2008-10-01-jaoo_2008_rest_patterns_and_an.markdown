---
layout: post
title: "JAOO 2008: REST Patterns and Antipatterns"
date: "2008-10-01T11:35:00+01:00"
comments: false
categories: 
---

<p>I've uploaded <a href="/blog/st/presentations/2008/2008-09-30-REST-Patterns--JAOO.pdf">the slides from my own talk at JAOO 2008</a>  (warning: this is a 12MB PDF). As usual, not sure how much value they have on their own; YMMV.</p>

<section class="comments">



<div class="comment" id="comment-1805">
On <a href="#comment-1805" title="Permalink to this comment">October  1, 2008 12:23 PM</a>, <a href="http://blog.xebia.fr" title="http://blog.xebia.fr" rel="nofollow">cyrille.leclerc.myopenid.com</a>

<a href="http://blog.xebia.fr" class="commenter-profile"></a>
said:
<p>The hyperlinked PDF seems to be empty.</p>

<p>thanks in advance,</p>

<p>Cyrille</p>


<div class="comment" id="comment-1807">
On <a href="#comment-1807" title="Permalink to this comment">October  1, 2008  7:56 PM</a>, http://openid.nesetril.cz/jakub

<a href="http://openid.nesetril.cz/jakub" class="commenter-profile"></a>
said:
<p>Stefan,</p>

<p>as a matter of fact I found some of the advanced topics towards the end of the presentation to be very topical to our current problems. Send (modified) representation of a newly created resource back to the client along 201? Doh! Why didn&#8217;t I think of this sooner&#8230;</p>

<p>As usual - thanks for sharing. Congratulations on a nice talk.</p>

<p>Jakub</p>


<div class="comment" id="comment-1820">
On <a href="#comment-1820" title="Permalink to this comment">October 27, 2008  9:55 AM</a>, <a href="http://no.item" title="http://no.item" rel="nofollow">zdck</a>
said:
<p>Hi,</p>

<p>I read your presentation/article and it contains good ideas and hints. But one slide with notice &#8220;Stop worrying about URI design&#8221; is contradictory with many other articles. According to me uri design in REST application is crucial. What did you mean this notice?</p>

<p>thanks for reply.</p>


<div class="comment" id="comment-1821">
On <a href="#comment-1821" title="Permalink to this comment">October 27, 2008 10:11 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>URI design is a useful and reasonably complex discipline. It&#8217;s go nothing to do with REST, though: applications should discover URIs by means of hypermedia, i.e. through following links, and never &#8220;construct&#8221; them. </p>

<p>I don&#8217;t at all object to good URI design, and try to do it myself – I just wanted to point out that people tend to equate this with REST and spend way too much time on it instead of focusing on the more important stuff.</p>


</section>

