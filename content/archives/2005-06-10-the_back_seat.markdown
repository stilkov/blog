---
layout: post
title: "The Back Seat"
date: "2005-06-10T20:23:00+01:00"
comments: false
categories: 
---

<p>Tim Ewald:</p>

<blockquote>
<p>Of course Indigo also offers XML messaging, but it is hidden behind RPC-style invocations and object marshaling layers. When I talk to members of the Indigo team about this, they&#8217;re always quick to point out that the system is layered such that I could strip away the object layer and deal with XML messages if I want to (but who would want to?). Somehow, I always leave those discussions feeling like an angle-bracket loving freak. Yes, I can get to what I want if I&#8217;m willing to do&#160;a bunch of extra work. In short I&#8217;m using Indigo in a supported, but non-standard way. Welcome on board, your seat is at the back.</p>
</blockquote>

<p>The situation Tim describes is remarkably similar to what the viewpoint expressed <a href="http://radio.javaranch.com/val/2005/06/08/1118236863771.html">in this post</a> suggests, namely that the XML-centric additional APIs in JAX-WS (n&#233;e JAX-RPC 2.0) provide a solution to the problems described in the <a href="http://www.hpl.hp.com/techreports/2005/HPL-2005-83.html">Alpine paper</a>. They do, but you still pay for what you don&#8217;t need, especially since every JAX-WS implementation is <em>required</em> to implement the object-centric APIs as well.</p>

<p>(The side note in that post, which argues that XML is a bad choice as a programming language syntax, manages to miss the point by a remarkably wide margin.)</p>

<section class="comments">

<div class="comment" id="comment-572">
On <a href="#comment-572" title="Permalink to this comment">June 12, 2005  6:00 AM</a>, <a href="http://radio.javaranch.com/val" title="http://radio.javaranch.com/val" rel="nofollow">Val</a>
said:
<p>Could you elaborate a little bit on your last sentence, please?</p>


<div class="comment" id="comment-573">
On <a href="#comment-573" title="Permalink to this comment">June 12, 2005  8:47 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>O/X mapping not only creates a lot of subtle and not-so-subtle problems, it also fails to exploit the potential benefits of XML. </p>

<p>The point is that XML <em>as a programming language</em> is a dumb idea is absolutely valid. But it&#8217;s got nothing to do with the O/X discussion.</p>


</section>

