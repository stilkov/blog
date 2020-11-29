---
layout: post
title: "RESTful Pub/Sub"
date: "2007-07-27T17:07:00+01:00"
comments: false
categories: 
---

<p><a href="/blog/st/2007/07/18/bridging_the_gap_between_bi_soa.html#c100412">In a comment</a>, <a href="http://www.holgerarendt.de/uncommented">Holger Arendt</a> asks me to elaborate on the notion of event notification for RESTful services (a.k.a. resources).</p>

<p>The first and most obvious choice is to simply publish an Atom feed containing an entry for each change. You could also use RSS (but shouldn&#8217;t unless you&#8217;re happy using underspecified formats.) Alternatively, a proprietary but possibly simpler format could used, containing a record for each change. Those interested in changes simply <code>GET</code> the change feed, i.e. they use polling. No entries will be lost, and caching, ETags/If-Modified-Since and <code>304 Not Modified</code> mechanics will minimize networks traffic. It&#8217;s this approach I was referring to when I said the data access, transaction and event notification interfaces become one in a RESTful architecture: you can use GET for both data access and notifications. And quite often, polling (the HTTP way) is the best approach from a scalability point of view.</p>

<p>Another choice, which avoids polling, would be to keep the HTTP connection open for each &#8220;subscribed&#8221; client and use this for notification; I&#8217;m not a fan of this approach because of scalability issues. (This has recently become known as the Comet approach; earlier examples include mod_pubsub).</p>

<p>Lastly, once could subscribe to changes by sending a URI to the resource to be monitored. The resources store the URI and sends notifications for each change. Examples of this approach are the (expired) Atompub-Notification by James Snell, or <a href="http://tools.ietf.org/html/draft-cohen-gena-p-base-01">the GENA protocol</a> (described in 1998!). </p>

<p>It&#8217;s easy to invent a proprietary approach for this, but it would definitely be nice if there were a standard. It&#8217;s quite likely there is one (or even many) I have missed, I&#8217;m sure my readers will help me out here &#8230;</p>

<section class="comments">



<div class="comment" id="comment-1397">
On <a href="#comment-1397" title="Permalink to this comment">July 27, 2007  9:08 PM</a>, <a href="http://www.holgerarendt.de/uncommented/" title="http://www.holgerarendt.de/uncommented/" rel="nofollow">holger</a>
said:
<p>Thank you, this answers the questions i had after reading about the event  interface stuff.</p>

<p>We&#8217;re also utilizing feeds to give clients access to changes. An additional side-effect is, that in combination with e.g. Firefix 2, one gets a nice styled &#8220;gui&#8221; for the feeds for free ;-) By providing URLs to related data, a user can then access further information without the need for a special-build client application. </p>

<p>I like the idea of providing a service with some sort of &#8220;callback uri&#8221; to which changes can be send. This keeps everything more &#8220;RESTful&#8221;, more uniform. Providing change notifications then becomes just a request to another resource/service - no &#8220;break&#8221; in the overall architecture, since the receiving endpoint adheres to the same policies/guidelines.</p>


<div class="comment" id="comment-1398">
On <a href="#comment-1398" title="Permalink to this comment">August  5, 2007  7:30 AM</a>, <a href="http://soundadvice.id.au/blog/" title="http://soundadvice.id.au/blog/" rel="nofollow">Benjamin Carlyle</a>
said:
<p>I have one of these that my company uses in-house. I initially developed it in my own time, but was pulled up some time ago in actually releasing it. I haven&#8217;t had time to push it through internal processes to get it out there. Personally, I think it is as near to perfect a solution as is technically feasible in the social environment of the Web. I&#8217;ll start making noises internally about it again soon, as I think this is key to many REST systems.</p>

<p>Benjamin.</p>


<div class="comment" id="comment-1399">
On <a href="#comment-1399" title="Permalink to this comment">August  7, 2007 10:58 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Ben, that would be more than cool &#8230; </p>


</section>

