---
layout: post
title: "Actual vs. Described Interfaces"
date: "2005-02-17T22:47:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.pacificspirit.com/blog/2005/02/16/interfaces_described_vs_actual">Dave Orchard</a>:</p>

<blockquote>
<p>It is rare that software that re-uses an interface description will have fewer constraints than the description. </p>
</blockquote>

<p>While I agree with most of the post, I&#8217;m not sure about this particular paragraph. I believe once services are re-used, it&#8217;s unavoidable that a service contract will offer both more operations (if you have something like that) and data that the re-using application actually needs.</p>

<section class="comments">

<div class="comment" id="comment-469">
On <a href="#comment-469" title="Permalink to this comment">February 24, 2005 10:35 AM</a>, Jacek
said:
<p>Stefan, I believe you are in agreement with DaveO - he says most services will be more constraining than just the interface description, and you say that the interface description will have more options (fewer constraints) than the service.</p>


<div class="comment" id="comment-470">
On <a href="#comment-470" title="Permalink to this comment">February 24, 2005  2:06 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Jacek, I had to ponder this for a while, but I believe I did not misunderstand him. Consider a service implementation that corrects zip codes in addresses.  It has constraints for the address only. Can I pass an invoice document to it, and have it correct billing and shipping address for me?</p>

<p>Depending on my infrastructure, I may be able to deploy the existing address-correcting implementation as a service implementation for correcting invoice addresses. It&#8217;ll have less restrictions in its implementation than the schema suggests.</p>

<p>Right?</p>


</section>

