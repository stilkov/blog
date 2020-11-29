---
layout: post
title: "Steve Yegge on Static Typing"
date: "2008-02-11T10:04:00+01:00"
comments: false
categories: 
---

<p><a href="http://steve-yegge.blogspot.com/2008/02/portrait-of-n00b.html">Steve Yegge</a>:</p>

<blockquote>
<p>[W]e also know that static types are just metadata. They&#8217;re a specialized kind of comment targeted at two kinds of readers: programmers and compilers. Static types tell a story about the computation, presumably to help both reader groups understand the intent of the program. But the static types can be thrown away at runtime, because in the end they&#8217;re just stylized comments. They&#8217;re like pedigree paperwork: it might make a certain insecure personality type happier about their dog, but the dog certainly doesn&#8217;t care.</p>
</blockquote>

<p>Long, but well worth the time, as usual. </p>

<section class="comments">



<div class="comment" id="comment-1616">
On <a href="#comment-1616" title="Permalink to this comment">February 18, 2008  4:44 AM</a>, <a href="http://enfranchisedmind.com/blog" title="http://enfranchisedmind.com/blog" rel="nofollow">Robert Fischer</a>
said:
<p><em>But the static types can be thrown away at runtime, because in the end they’re just stylized comments.</em></p>

<p>This betrays a deep and grave misunderstanding about contemporary languages.  In particular, the wide prevalence of run-time optimizations (most notably, the JVM&#8217;s HotSpot runtime) means that the type information <em>can&#8217;t</em> be thrown away at that point, because there are additional compilation requirements coming out of the way run time is done.</p>


</section>

