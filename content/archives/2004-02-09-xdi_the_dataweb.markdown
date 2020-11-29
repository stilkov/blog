---
layout: post
title: "XDI - the Dataweb"
date: "2004-02-09T20:21:00+01:00"
comments: false
categories: 
---

<p><a href="http://xml.coverpages.org/XDI-IntroWhitePaper20040120.pdf"><img src="/blog/st/images/dataweb.jpg" border="0" height="210" alt="dataweb" width="400" /></a><br />
I had never heard of this before (not sure whether I need to feel ashamed now) and came across XDI due to <a href="http://www.markbaker.ca/2002/09/Blog//2004/02/09#2004-02-content-vs-data">Mark Baker&#8217;s post</a>. I just speedread the <a href="http://www.markbaker.ca/2002/09/Blog//2004/02/09#2004-02-content-vs-data">whitepaper</a>, and I believe in this case, he has a point &mdash; it doesn&#8217;t seem obvious how this differs from the Web so much as to merit a complete set of new standards (as if we didn&#8217;t have enough of those, already). The notion of automatic synchronization between resources seems interesting, though; I&#8217;m not sure whether a purely Web/REST-based approach to this exists  somewhere &#8230;</p>

<section class="comments">

<div class="comment" id="comment-215">
On <a href="#comment-215" title="Permalink to this comment">February 10, 2004  4:41 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>It&#8217;s good to know that I occasionally have a point. 8-)</p>

<p>Re synchronization, it depends what your needs are but there are a number of possible solutions including DRP, delta encoding (RFC 3229), vanilla GET or POST (depending upon who&#8217;s the master), or more generally, pub/sub ala KnowNow.  That&#8217;s just off the top of my head.  The key REST constraint to keep in mind when syncing is to remain stateless; entity tags help a lot there.</p>


<div class="comment" id="comment-216">
On <a href="#comment-216" title="Permalink to this comment">February 11, 2004  8:40 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks for the pointers, Mark!</p>


</section>

