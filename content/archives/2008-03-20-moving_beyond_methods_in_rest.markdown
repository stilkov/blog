---
layout: post
title: "Moving Beyond Methods in REST"
date: "2008-03-20T08:57:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.mnot.net/blog/2008/03/20/beyond_methods">Mark Nottingham</a>:</p>

<blockquote>
<p>While there’s a nice internal logic to mapping HTTP methods to object methods, it doesn’t realise the power of having generic semantics.</p>
</blockquote>

<p>While I agree there's a lot to be improved in existing HTTP APIs, I'm not sure this is the most pressing problem. I'd rather somebody bring up some ideas on how to exploit the hypermedia aspects ...</p>

<section class="comments">



<div class="comment" id="comment-1659">
On <a href="#comment-1659" title="Permalink to this comment">March 20, 2008 11:26 AM</a>, <a href="http://www.mnot.net/" title="http://www.mnot.net/" rel="nofollow">Mark Nottingham</a>
said:
<p>Low-hanging fruit first&#8230; :)</p>


<div class="comment" id="comment-1660">
On <a href="#comment-1660" title="Permalink to this comment">March 20, 2008 11:28 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Fair enough :-)</p>


<div class="comment" id="comment-1664">
On <a href="#comment-1664" title="Permalink to this comment">March 20, 2008  1:13 PM</a>, <a href="http://blpsilva.wordpress.com">Bruno Luiz Pereira da Silva</a>

<a href="http://blpsilva.wordpress.com" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Something I&#8217;d like to see more discussions is Resource Transformations. When you&#8217;re developing RESTFul services that go somewhat beyond CRUD, you might have several resource transformations.</p>

<p>When a given resouce changes to or from some state, there might be transformations on other resources. For example, let&#8217;s think of some Amazon sales process where you have Item and Order resources and several related resources like billing and logistics stuff. When the user pays for the Order, some transformation in billing resources would apply a transformation to the Order resource, changing its state to &#8220;paid&#8221;</p>

<p>When the Order resource has its state changed to &#8220;paid&#8221;, we could have transformations applied to logistics resources, telling the delivery system to deliver the order.</p>

<p>This kind of resource transformations appear a lot when you&#8217;re developing RESTFul services that are more than CRUD. I think a very good approach to solve this is using finite state machines, defining what resource states we have and what happens in every meaningful state transition.</p>

<p>I&#8217;d like to see more discussion about this kind of things, because resource transformations might be very tricky, and complex RESTFul services definitely need them.</p>


</section>

