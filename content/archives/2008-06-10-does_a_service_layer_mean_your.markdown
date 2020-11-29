---
layout: post
title: "Does a \"Service Layer\" Mean You're Doing SOA?"
date: "2008-06-10T10:21:00+01:00"
comments: false
categories: 
---

<p>Via <a href="http://soa-talk.blogs.techtarget.com/2008/06/02/having-trouble-with-soa-pay-attention-to-the-architecture/">this recent piece from Michael Meehan</a>, I came across <a href="http://searchsoa.techtarget.com/tip/0,289483,sid26_gci1234226,00.html">an older case case study from ING Card</a>, which features this diagram:</p>

<p><img src="/blog/st/soa_img_2.jpg" vspace="4" height="448" hspace="4" alt="Soa Img 2" width="430" /></p>

<p>Given the benefit of doubt with regards to the choice of WebSphere, this seems like a fine architecture. <em>But it has absolutely nothing to do with SOA</em>. Every decent multi-layered application has an architecture that separates back-end business logic from UI and control flow, and commonly introduces a façade in front of the back-end.  </p>

<p>In my view, SOA – independently of whether it's implemented using WS-* or with RESTful HTTP – is an architecture for a set of systems, not for a single application.</p>

<section class="comments">



<div class="comment" id="comment-1732">
On <a href="#comment-1732" title="Permalink to this comment">June 10, 2008 11:53 AM</a>, <a href="http://blog.killerbees.co.uk" title="http://blog.killerbees.co.uk" rel="nofollow">Danny</a>
said:
<p>I don&#8217;t think that you&#8217;re being 100% fair. IMHO any application which can have its internal service layer easily replaced with an implementation of the same service which calls out to to other applications or systems is to my mind a service oriented architecture.
The fact that circumstances mean that you don&#8217;t need to distribute or communicate doesn&#8217;t mean that the pattern isn&#8217;t still valid.</p>

<p>The diagram you show actually hides the implementation of the service layer, we don&#8217;t know whether it is code deployed in the same package or code that communicates with other systems, we can make assumptions, one of which is that <em>some</em> of the services are implemented locally, but the detail is (rightfully) hidden from us.</p>


<div class="comment" id="comment-1738">
On <a href="#comment-1738" title="Permalink to this comment">June 10, 2008 11:27 PM</a>, <a href="http://www.dehora.net/journal" title="http://www.dehora.net/journal" rel="nofollow">Bill de hOra</a>
said:
<p>Stefan, someday you (or someone) is going to have to explain what SOA is in concrete terms. I&#8217;m starting to think it has no explanatory power - when you take SOA away, what is lost?</p>


<div class="comment" id="comment-1740">
On <a href="#comment-1740" title="Permalink to this comment">June 11, 2008  6:17 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>I&#8217;m at a vendor conference here in Paris and attended an overview of WS-* yesterday.  The presenter kept calling WS-* specs &#8220;SOA standards&#8221;.  Talk about muddying the waters.</p>


<div class="comment" id="comment-1745">
On <a href="#comment-1745" title="Permalink to this comment">June 19, 2008  7:36 PM</a>, F. García
said:
<p>Danny, you are making the assumption that a local service call is equivalent to a remote service call, which is a common antipattern (and a common source of really ugly problems).</p>


</section>

