---
layout: post
title: "WADLing in Jersey"
date: "2007-12-22T21:15:00+01:00"
comments: false
categories: 
---

<p><a href="http://weblogs.java.net/blog/mhadley/archive/2007/12/wadling_in_jers.html">Marc Hadley</a>:</p>

<blockquote>
<p>With the latest changes to Jersey you can now get information on such dynamic resources by GETing the resource with an Accept: application/vnd.sun.wadl+xml header that specifies that you want WADL rather than another representation. The Jersey runtime will inspect the object returned by the subresource locator and dynamically generate a WADL description.</p>
</blockquote>

<p><em>Now</em> WADL finally gets interesting (see also <a href="/blog/st/2007/06/wadl-just-a-hypermedia-format.html#comment-1341">this discussion</a>).</p>

<section class="comments">



<div class="comment" id="comment-1545">
On <a href="#comment-1545" title="Permalink to this comment">December 22, 2007  9:45 PM</a>, Tammo van Lessen
said:
<p>Hm, is this really RESTful? I&#8217;ve always thought each representation should &#8216;represent&#8217; the actual state/content of a resource and not a bunch of meta data. Isn&#8217;t a WADL file another resource, a sub-resource so to say?</p>


<div class="comment" id="comment-1546">
On <a href="#comment-1546" title="Permalink to this comment">December 22, 2007 10:29 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Good point. Yes, you may be right &#8212; I&#8217;m not sure. If the WADL describes the resource sitting at X, I feel it&#8217;s reasonable to retrieve it from X. On the other hand, maybe it would be better to return a link instead.</p>


<div class="comment" id="comment-1558">
On <a href="#comment-1558" title="Permalink to this comment">January  2, 2008  5:46 PM</a>, <a href="http://blogs.sun.com/sandoz" title="http://blogs.sun.com/sandoz" rel="nofollow">Paul Sandoz</a>
said:
<p>
I have been toying with the three different approaches of using OPTIONS, GET or an additional URI, as presented <a href="http://blogs.sun.com/sandoz/entry/dynamic_wadl_generation_in_jersey" rel="nofollow">here</a>.</p>

<p>Part of the problem with the latter two is that they can either interfere with the application (what if WADL is stored as the media entry of an atom collection?) or assumes additional server-side framework knowledge (of the URI, since it seems silly to bootstrap and traverse parallel hypermedia). </p>

<p>The OPTIONS method seems, technically, the right approach but of course OPTIONS is to put it mildly under utilized.</p>

<p>Tis all still a bit experimental which is why we have currently implemented support for GET and OPTIONS.
</p>


</section>

