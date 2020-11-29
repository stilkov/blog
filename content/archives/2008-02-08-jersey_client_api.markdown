---
layout: post
title: "Jersey Client API"
date: "2008-02-08T20:39:00+01:00"
comments: false
categories: 
---

<p><a href="http://blogs.sun.com/sandoz/entry/jersey_client_api">Paul Sandoz</a>:</p>

<blockquote>
<p>This API was originally being used for Jersey unit testing but i think it is applicable in the larger context of a general RESTful client API.</p>
</blockquote>

<p>I find the use of the method name &#8220;proxy&#8221; slightly unfortunate &#8212; other than that, I like this very much.</p>

<section class="comments">



<div class="comment" id="comment-1611">
On <a href="#comment-1611" title="Permalink to this comment">February 11, 2008 12:02 PM</a>, <a href="http://blogs.sun.com/sandoz" title="http://blogs.sun.com/sandoz" rel="nofollow">Paul Sandoz</a>
said:
<p>Hi Stefan,</p>

<p>I am not a great fan of proxy either, too close to CORBA perhaps :-) I fully admit to struggling to come up with something better. Resource on it&#8217;s own seems a bit overloaded in Java. ResourceReference feels too long. Perhaps ResourceRef? Do you have any suggestions?</p>

<p>Paul.</p>


<div class="comment" id="comment-1612">
On <a href="#comment-1612" title="Permalink to this comment">February 11, 2008 12:54 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Yeah, criticizing is easy until you&#8217;re asked to come up with a better proposal :-) &#8220;ResourceRef&#8221; doesn&#8217;t sound too bad to me. How about HttpResource? Or maybe WebResource?</p>


<div class="comment" id="comment-1613">
On <a href="#comment-1613" title="Permalink to this comment">February 11, 2008  6:19 PM</a>, <a href="http://blogs.sun.com/sandoz" title="http://blogs.sun.com/sandoz" rel="nofollow">Paul Sandoz</a>
said:
<p>I think i am sold on WebResource! There is a nice parallel with using an annotation say called @WebResourceRef for an injection target of WebResource instances.</p>

<p>I will hold off renaming just yet so as not to confuse others who may be looking at the API, but i will definitely make the change in the next week or two.</p>

<p>Thanks,
Paul.</p>


</section>

