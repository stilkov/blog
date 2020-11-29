---
layout: post
title: "SOAP vs. POX vs. REST"
date: "2006-11-06T22:35:00+01:00"
comments: false
categories: 
---

<p>So, we&#8217;ve got another of those REST-vs.-SOAP debates again &#8230; or, to be more exact, a SOAP-vs.-POX debate that has somehow turned into REST-vs.-SOAP. Whatever.</p>

<p><a href="http://./2006/11/05/POX-and-SOAP">Sam Ruby</a> started the discussion by referencing a piece from <a href="http://www.crummy.com/2006/11/05/2">Leonard Richardson</a>. WSO2&#8217;s <a href="http://www.bloglines.com/blog/sanjiva?id=159">Sanjiva Weerawarana</a> chimes in:</p>

<blockquote>
<p>So if you want security, reliability etc., you need SOAP (or you have to invent your own version of it and convince others to use it too .. good luck). Obviously not every scenario needs all that muscle: that&#8217;s why the approach taken by Apache Axis2 is the right way to deal with this: give a common programming model for both clients and services and let us middleware weenies worry about whether to SOAPify the requests and responses or not depending on your business policies.</p>
</blockquote>

<p>As verified in a private email exchange, Sanjiva is very much aware that Axis2&#8217;s REST support is, in fact, only supporting POX.  <a href="http://www.markbaker.ca/blog/2006/11/06/wso2-doesnt-get-it/">Mark</a> seems to view this as another REST-vs.-SOAP debate; I don&#8217;t think it is.</p>

<p>So what&#8217;s the difference between POX/HTTP, SOAP, and REST?</p>

<ul>
<li><p>REST is an architectural style that is independent, but compatible, with XML. It&#8217;s about identifiable resources, resource representations, a fixed (uniform) interface, and linking. HTTP is REST&#8217;s most popular instantiation.</p></li>
<li><p>POX/HTTP means exchanging plain old XML documents over HTTP. RESTful POX, i.e. using XML in a RESTful manner, would mean POX is a subset of REST. Many, if not most POX applications don&#8217;t care about REST very much, though &#8212; they&#8217;d thus be part of a distinct set of applications.</p></li>
<li><p>SOAP is a standard document format for building high-level protocols. Anything that uses SOAP is (by definition) not just using plain old XML, and thus not POX; it may be RESTful, unless it violates REST principles.</p></li>
</ul>

<p>So there can be RESTful SOAP applications, and RESTful POX applications, and non-RESTful SOAP applications, and non-RESTful POX applications, but no POX/SOAP combination.</p>

<p>Although I usually agree with <a href="http://www.markbaker.ca/blog/2006/11/06/wso2-doesnt-get-it/">Mark</a>, I&#8217; more with <a href="http://www.bloglines.com/blog/sanjiva?id=159">Sanjiva</a> here: if you want to put message metadata into your XML, SOAP offers a standardized (and very simple)
way to do so. No XML-based format one could invent would be any better, and even from a REST standpoint, using standard formats instead of proprietary alternatives is preferred.</p>

<p>As I&#8217;ve mentioned before, I don&#8217;t think the original debate started out as a REST-vs.-SOAP, but as a POX-vs.-SOAP discussion. Nevertheless, <a href="http://www.1060.org/blogxter/entry?publicid=9FFBC835E3D9904A288982A638A8F45B">Steve Loughran</a> has a great list of things you lose and gain by not using or using SOAP.</p>

<p>In my opinion, REST + standard XML formats, wrapped in SOAP where you need it, makes the most sense.</p>


