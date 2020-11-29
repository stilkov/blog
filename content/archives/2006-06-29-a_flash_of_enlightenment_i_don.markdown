---
layout: post
title: "A Flash of Enlightenment? I Don't Think So."
date: "2006-06-29T21:35:00+01:00"
comments: false
categories: 
---

<p><a href="http://atmanes.blogspot.com/2006/06/flash-of-enlightenment-in-soap-vs-rest.html">Anne Thomas Manes</a>, referring to a post by <a href="http://service-architecture.blogspot.com/2006/05/soap-v-rest-more-pointless-than-vi-v.html">Steve Jones</a> that considers the SOAP vs. REST debate pointless, writes:</p>

<blockquote>
<p>Which brings me back to Steve&#8217;s basic argument. The essence of your service design must be:<br />what is the functionality that needs to be exposed?<br />what messages must be exchanged in order to achieve that functionality?<br />After you have designed the fundamental requirements of the service, then you can expose that functionality using as many middleware technologies as you need in order to support your customers&#8217; requirements. As long as you maintain clean separation of interface from implementation, you can do that.</p>
</blockquote>

<p>Coming from Anne, this surprises me. I agree that there are many issues related to SOA that are independent from any technology choice &#8212; organizational issues, roles, cultural changes, business case, relationships to external partners, coupling of internal business units, to name a few &#8212; but on a technical level, the whole service design and the <em>messages</em> exchanged in SOAP/WS-* based and a REST-based scenario are clearly different.</p>

<p>I&#8217;ll say it <a href="/blog/st/2006/03/31/soapox.html">again</a>: Whether you build a service-oriented or resource-based system is <em>not</em> an implementation detail.</p>

<section class="comments">

<div class="comment" id="comment-932">
On <a href="#comment-932" title="Permalink to this comment">June 30, 2006  4:03 AM</a>, <a href="http://www.fuzzypanic.blogspot.com/" title="http://www.fuzzypanic.blogspot.com/" rel="nofollow">Mike Herrick</a>
said:
<p>Yeah, I know - and Anne was really on a role lately and then she goes and does that.</p>

<p>This was the worst of it:
&#8220;And btw &#8212; both Microsoft Windows Communication Foundation (aka &#8220;Indigo&#8221;) and Apache Axis2 can automatically generate both RESTful and SOAPy interfaces for any service. These frameworks do in fact hide the type of interface as just another &#8220;implementation detail&#8221;.&#8221;</p>


</section>

