---
layout: post
title: "ROA vs GET/POST"
date: "2007-10-19T22:06:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.pluralsight.com/blogs/tewald/archive/2007/10/19/48805.aspx">Tim Ewald</a>:</p>

<blockquote>
<p>So could I model all processes the ROA way? Undoubtedly yes. But, what&#8217;s the value of this over just doing a POST with the data I want to process and getting the result back? It&#8217;s much easier to implement that because I don&#8217;t need the build-up of the process resource to span multiple stateless requests. I don&#8217;t ask this rhetorically, I really want to understand why people think this approach to modeling processes is better.</p>
</blockquote>

<p>If there&#8217;s nothing happening during that &#8220;process&#8221; that merits its own resource state, doing a POST and have it return the result seems perfectly fine to me. If it&#8217;s a longer-running process, or if it creates some state that merits having its own URI, modeling it as a set of resources makes more sense.</p>

<section class="comments">



<div class="comment" id="comment-1492">
On <a href="#comment-1492" title="Permalink to this comment">October 20, 2007  3:29 AM</a>, <a href="http://www.teohuiming.name" title="http://www.teohuiming.name" rel="nofollow">teohuiming</a>
said:
<p>I find that when I think about Web as a space-based coordination platform like javaspaces, it just makes sense to model shared data structures as resources.</p>


</section>

