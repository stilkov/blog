---
layout: post
title: "Continuations in Java"
date: "2007-03-03T08:28:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.artima.com/lejava/articles/continuations.html">Bill Venners interviews Geert Bevin</a>:</p>

<blockquote>
<p>Continuations refer to a functional programming technique that allows you to save the current execution state of a thread, with the possiblity of suspending and later resuming execution. Continuations have been incorporated into several Web application frameworks, including RIFE and WebWork. In this interview with Artima, RIFE project founder Geert Bevin discusses how continuations can simplify complex workflows, and how they are implemented in RIFE.</p>
</blockquote>

<p>Very interesting. Although I&#8217;ve never looked in earnest at <a href="http://www.seaside.st/">Seaside</a> or other continuation-based Web frameworks, it&#8217;s nice to see even more &#8220;exotic&#8221; ideas becoming mainstream.</p>

<section class="comments">

<div class="comment" id="comment-1199">
On <a href="#comment-1199" title="Permalink to this comment">March  3, 2007 11:10 AM</a>, <a href="http://hyperthink.net/blog" title="http://hyperthink.net/blog" rel="nofollow">Steve Maine</a>
said:
<p>I&#8217;m not sold on continuations as a programming model for web applications. It&#8217;s an interesting idea, but the dreaded back button kills them &#8212; Ian Griffiths had a great analysis on his blog a while back (http://www.interact-sw.co.uk/iangblog/2006/05/21/webcontinuations)</p>

<p>However, the more I hang out with the WF folks, the more I become intrigued by the idea of using continuations as an implementation technique for scalable server runtimes.</p>


</section>

