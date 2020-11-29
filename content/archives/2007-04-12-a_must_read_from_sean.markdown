---
layout: post
title: "A must read from Sean"
date: "2007-04-12T21:32:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.itworld.com/AppDev/nlsebusiness070410/index.html">A must read</a> from <a href="http://seanmcgrath.blogspot.com/2007_04_08_seanmcgrath_archive.html#922722944576674157">Sean McGrath</a>:</p>

<blockquote>
<p>The mashup phenomenon is all about pull-centric design. The mashup phenomenon begs a very pertinent question: can all application integration scenarios that we naturally express in push-centric language, be implemented with pull-centric designs? Is there a limit to what you can do with a mashup - something that would force you to a push-centric approach instead? If every time A needs to send something to B why not get A to publish it, with an RSS/Atom feed instead. Then B can just poll the published information as it sees fit. How far can we push (no pun) that idea?</p>
</blockquote>

<p>Personally, I&#8217;m convinced that RSS/Atom feeds are a much better way to solve notification scenarios than e.g. <a href="http://www.w3.org/Submission/WS-Eventing/">WS-Eventing</a>. <em>Polling is good for you.</em> At least on the Web, and quite probably in any similar integration scenario &#8212; which is to say, wherever you don&#8217;t control both ends of the wire.</p>

<section class="comments">



<div class="comment" id="comment-1246">
On <a href="#comment-1246" title="Permalink to this comment">April 13, 2007 12:54 PM</a>, <a href="http://service-architecture.blogspot.com" title="http://service-architecture.blogspot.com" rel="nofollow">Steve Jones</a>
said:
<p>Polling is good&#8230;. so email must be a rubbish way of working given that its a push mechanism (I send the emails to their destinations via a routing mechanism (DNS)).  Ditto for SMS.</p>

<p>Polling is the first thing that every person does as its the simplest for them to implement, its also the most resource intensive, bandwidth intensive and least scalable way of getting selected information to various sources.  Polling is also massively rubbish at doing time critical information (what do you do, poll every millisecond?).</p>

<p>You can argue that in the limited world of HTTP that polling is a &#8220;better&#8221; (only?) solution, but that really just highlights why HTTP is about only a subset of the challenges of service, application and integration design.  It works sometimes but is a long way away from working all the time.</p>

<p>Eventing &amp; Pub/Sub are equally a good thing for certain scenarios and rubbish at others.</p>


<div class="comment" id="comment-1247">
On <a href="#comment-1247" title="Permalink to this comment">April 13, 2007  3:16 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Of course I&#8217;m painting things in black and white here for the sake of the argument, and polling is not appropriate everywhere. But I object to the idea that it&#8217;s not scalable &#8212; on the contrary, given the Web&#8217;s support for caching of GET requests, syndication using RSS and Atom scales extremely well. </p>

<p>Oh, and last time I checked, neither POP3 nor IMAP were push protocols &#8212; mail is more than SMTP. (And DNS is most definitely not routing <em>my</em> mail.)</p>


<div class="comment" id="comment-1248">
On <a href="#comment-1248" title="Permalink to this comment">April 17, 2007  3:13 PM</a>, <a href="http://www.broadheath.com" title="http://www.broadheath.com" rel="nofollow">Frank Wilhoit</a>
said:
<p>Okay, let&#8217;s pull everything, or at least pretend that we&#8217;re pulling everything.  Let&#8217;s pull acknowledgements.  Let&#8217;s build a service whose semantic is &#8220;consume one update&#8221; or better said &#8220;acknowledge the successful consumption of one update&#8221;, invoke it with a business-data payload, and pull the acknowledgement that they got it, intact.</p>


</section>

