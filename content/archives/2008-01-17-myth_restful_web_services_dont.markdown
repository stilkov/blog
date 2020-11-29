---
layout: post
title: "Myth: RESTful Web Services Don't Need an Interface Definition Language"
date: "2008-01-17T23:17:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.25hoursaday.com/weblog/CommentView.aspx?guid=64462ae0-b58a-4487-a5ca-f6f8e6ffc887">Dare Obasanjo</a> disagrees with <a href="http://steve.vinoski.net/blog/2008/01/16/idls-vs-human-documentation/">Steve Vinoski</a> and <a href="http://tomayko.com/weblog/2008/01/13/lying-through-their-teeth">Ryan Tomayko</a> and makes the case for a REST description language:</p>

<blockquote>
<p>The examples of Atom service documents and link elements in HTML, highlight that there is real world value in describing the interfaces to your RESTful Web Service. In addition, Atom service documents show that you can define an interface definition language for Web services without resorting to reinventing CORBA IDL (i.e. WSDL). So I respectfully disagree with Ryan Tomayko…just because my life is made easier with a service description language doesn’t make WSDL a good idea.</p>
</blockquote>

<p>I&#8217;m not at all opposed to what Dare is suggesting &#8212; but I claim that an Atom service documents and link constructions in HTML GET forms is so wildly different from WSDL, IDL and other description formats for specialized interfaces that calling all of them &#8220;a description language&#8221; confuses the issue.</p>

<p>REST relies on hypermedia. An Atom service document does, too &#8212; WSDL and IDL don&#8217;t.</p>

<section class="comments">



<div class="comment" id="comment-1585">
On <a href="#comment-1585" title="Permalink to this comment">January 18, 2008  1:04 AM</a>, Tammo van Lessen
said:
<p>Totally agree. Additionally I think RESTful APIs can be compared with reflective APIs as it is possible to discover and explore such an API by using a restricted set of operations (the 4 HTTP verbs for REST and getClass(), getMethods() etc. for Java). Nobody would strike on the idea to define a domain specific interface definition for using reflection on a particular set of domain objects but would rather refer to the reflection API (for REST: HTTP spec) as well as to the application design (for REST: the protocol specification). </p>

<p>Instead of an IDL I would consider a BPEL pendant for REST way more reasonable. While BPEL describes the order of a set of message exchanges (that is necessary to fulfill a certain business goal), the REST world could benefit from a language that orchestrates a set of RESTful verbs in order to achieve transactions or stuff like that.</p>


<div class="comment" id="comment-1586">
On <a href="#comment-1586" title="Permalink to this comment">January 18, 2008  8:02 AM</a>, <a href="http://muellerware.org" title="http://muellerware.org" rel="nofollow">Patrick Mueller</a>

<a href="http://muellerware.org" class="commenter-profile"></a>
said:
<p>As a sign of my bigotry against all things WS-*, I&#8217;ve honestly never looked into BPEL, at all.  I reckon I probably should.</p>

<p>w/r/t &#8216;calling all of them “a description language” confuses the issue.&#8217;</p>

<p>So, we&#8217;re down to a naming issue?  Excellent.  But also bad: good names are hard to come up.  I recently posted to my blog the thought, again, of trying to come up with some best practices, etc for REST - names should definitely be part of that.  I also recently blogged on the difficulty of naming.  :-)</p>

<p>w/r/t &#8216;WSDL and IDL don’t (reply on hypermedia)&#8217;</p>

<p>hypermedia == something with links</p>

<p>I think some people consider &#8216;hypermedia&#8217; to be marked up text, but I go more general.  I could put a link in EXIF data in an image, and in some sense that could be considered a link by a service that parsed images and extracted the data out so it could do something.  Ok, that&#8217;s a stretch.  :-) Anyhoo,  my definition of link is pretty vague - an address of something I can talk to, to get more information or process something.  Likewise, if some service returned a piece of data for which I can construct a link - think someone returns to you a userid, and from that userid you know how to construct a URL to the user&#8217;s bookmarks, or something - that I call that a link - an odd sort of &#8216;relative&#8217; link.</p>

<p>hmmm &#8230; from memory, a CORBA IDL could include methods that returned object references you could then use to invoke other methods, etc.  Sounds like a link.  </p>

<p>And as for WSDL - I seem to remember that looking at WSDL 2.0, they did have some &#8216;link&#8217; concepts in there - it&#8217;s been a long, long time since I&#8217;ve looked at it, but if memory serves it was pretty skimpy - perhaps to the point where you&#8217;d claim it wasn&#8217;t supported at all.  But the kicker is that that was WSDL 2.0 (or was it 1.2 - boy, I&#8217;ve really forgotten this stuff, and really don&#8217;t have much interest in chasing down the actual numbers), which I don&#8217;t think has been implemented widely, or perhaps at all.
Someone please correct me if I&#8217;m wrong.</p>


<div class="comment" id="comment-1587">
On <a href="#comment-1587" title="Permalink to this comment">January 18, 2008  6:04 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>Despite its being a little complex and dragged through the WS-* mud, there&#8217;s nothing wrong with using XML Schema to describe message payloads (at least the XML ones).  The missing piece is a method to describe the URI lexicon &#8212; at least enough to descibe URIs &#8220;at the edge of the application&#8221;.  In other words, for a resource &#8220;r&#8221;, what terms are used to create valid URIs to GET/PUT/POST various data representations for &#8220;r&#8221;?</p>

<p>From what I recall, WADL included support for URI templates, although WADL certainly isn&#8217;t REST.  My problem with looking at BPEL here is that it is scenario-driven.  It describes complex interactions between systems with all the fault management and situation forking for a specific (and usually long-running) business intention.  It might be too heavy-handed as a generic description vehicle.  </p>

<p>My worry is that the spec industry, along with nature, abhors a vacuum.  I hope we don&#8217;t see a rush to standardize in an area where no one seems to know what they want.</p>


<div class="comment" id="comment-1588">
On <a href="#comment-1588" title="Permalink to this comment">January 18, 2008  9:07 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Patrick: I honestly don&#8217;t really know what a RESTful description language would look like. But I remain convinced it would not look like WSDL or IDL because they describe something else - a single endpoint with a number of methods/operations. I can&#8217;t help but feel that a REST description language would have to be distributed itself, i.e. spread across multiple resources and linked to them.</p>

<p>Erik: I&#8217;ll bite &#8212; why is WADL certainly not REST in your opinion?</p>


<div class="comment" id="comment-1590">
On <a href="#comment-1590" title="Permalink to this comment">January 21, 2008  8:54 AM</a>, <a href="http://asbjorn.ulsberg.no/" title="http://asbjorn.ulsberg.no/" rel="nofollow">asbjornu.myopenid.com</a>

<a href="http://asbjor.nu/" class="commenter-profile"></a>
said:
<p>I agree that Atom service documents and the HTML link element aren&#8217;t description languages. They are methods of autodiscovery and doesn&#8217;t really describe much other than the service&#8217;s entry points.</p>

<blockquote><p>The missing piece is a method to describe the URI lexicon — at least enough to descibe URIs “at the edge of the application”</p></blockquote>

<p>Wouldn&#8217;t URI Templates fit that requirement rather nicely?</p>


<div class="comment" id="comment-1591">
On <a href="#comment-1591" title="Permalink to this comment">January 21, 2008  4:27 PM</a>, <a href="http://www.ebpml.org/ebpml_radio.htm" title="http://www.ebpml.org/ebpml_radio.htm" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>Stefan:</p>

<p>you say:</p>

<blockquote>
<blockquote>
<p>a single endpoint with a number of methods/operations.</p>
</blockquote>

<p></p></blockquote>

<p>but do you think as soon as you are going to introduce an IDL of some sort you won&#8217;t need a &#8220;resource type&#8221;. The Web needs to add actions at the &#8220;resource instance&#8221; level. Makes total sense to me, because it is based on a &#8220;Web Page&#8221; model. It has to start at that level. </p>

<p>In the enterprise, I don&#8217;t know a lot of things that don&#8217;t have a &#8220;type&#8221;. It is certainly not impossible to think of an enterprise where each PO and Invoice is &#8220;taylored&#8221; to each customer. But that&#8217;s going to be a hard sell to the business. </p>

<p>Wouldn&#8217;t a RESTian IDL be composed of (resource type, operations (QBE, actions, events), schemas of resource representations)?</p>

<p>JJ-</p>


<div class="comment" id="comment-1592">
On <a href="#comment-1592" title="Permalink to this comment">January 23, 2008  8:13 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik</a>
said:
<blockquote>
<p>Erik: I’ll bite — why is WADL certainly not REST in your opinion?</p>
</blockquote>

<p>Stefan: I’d like to retract that bit &#8212; it was not accurate (and not to mention hypocritical).  What I meant to say was that WADL was insufficient – at least for work I’ve been involved with.  I&#8217;ve started a wish list that could be compatible with WADL, though.  And since it looks like I can come to QCon, maybe we can discuss it at the pub?</p>


</section>

