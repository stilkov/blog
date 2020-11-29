---
layout: post
title: "Loosely Coupled ZapFlash"
date: "2004-06-06T14:39:00+01:00"
comments: false
categories: 
---

<p>Another nice paper from ZapThink: <a href="http://www.zapthink.com/report.html?id=ZAPFLASH-05282004">How to Think Loosely Coupled</a>. Certainly not exhaustive, and also a bit too high-level for my taste (and I&#8217;m not sure I agree with the one-WSDL-many-components issue), but the ZapThink folks clearly are a lot more knowledgeable than most of the other &#8220;analysts&#8221; that talk about SOA.</p>

<section class="comments">

<div class="comment" id="comment-301">
On <a href="#comment-301" title="Permalink to this comment">June  7, 2004  3:27 PM</a>, Hartmut Wilms
said:
<p>Hi Stefan!</p>

<p>In my opinion the &#8220;many-to-many&#8221; relationship between WSDL and &#8220;components&#8221; makes perfect sense.</p>

<p>I like to think of Web Services as a UI (Use case Interface) for server components that implement the business logic. Maybe the ZapThink Folks had a similiar &#8220;Web Service Facade&#8221; thing in mind, when speaking of this &#8220;many-to-many&#8221; relationship. In this scheme WSDL is the common vocabulary for publishing these UIs.</p>

<p>To sum up, one interface maybe implemented by several components and one component maybe accessed via several interfaces, which provide a client specific approach to the business logic requested: WSDL-Component-Many-To-Many relationship.</p>

<p>Am I missing something?</p>


<div class="comment" id="comment-302">
On <a href="#comment-302" title="Permalink to this comment">June  7, 2004  4:07 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hartmut, actually I agree - I just don&#8217;t think that this has much to do with loose coupling. Loose coupling, IMO, is achieved by decoupling consumers and providers by means of indirection, asynchronous messaging, document-based communication as opposed to common type systems, and many other aspects.</p>


<div class="comment" id="comment-303">
On <a href="#comment-303" title="Permalink to this comment">June  7, 2004  4:45 PM</a>, Hartmut Wilms
said:
<p>I like to distinguish between logical and physical coupling. &#8221; &#8230; indirection, asynchronous messaging, document-based communication &#8221; are physical aspects, which allow for loose coupling of systems. </p>

<p>Separating client access to a (service) component by providing indirection via multiple facades is IMO a &#8220;logical&#8221; loose coupling.</p>

<p>So loose coupling is achieved by physical means as well as logical means &#8230; I&#8217;m aware that the logical part is by no means as &#8220;buzzy&#8221; as the physical ;-).</p>


</section>

