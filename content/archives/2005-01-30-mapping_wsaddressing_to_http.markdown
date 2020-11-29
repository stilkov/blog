---
layout: post
title: "Mapping WS-Addressing to HTTP"
date: "2005-01-30T23:28:00+01:00"
comments: false
categories: 
---

<p>The issue discussed in the <a href="/blog/st/2005/01/30/wsaddressing_and_protocol_independence.html">WS-A/protocol independence permathread</a> is whether addressing information contained in an endpoint reference (an EPR) should be required to be mapped to the appropriate element in the underlying protocol (e.g. the Request-URI in HTTP) or only to a SOAP header (e.g. wsa:To). While this may seem like an irrelevant detail, it touches on a pretty fundamental debate: the transport protocol independence of Web services.</p>

<p>I believe that transport independence is a great idea &#8212; it makes a lot of sense to be able to send a SOAP message via different communication channels. The problem, though, is that some of the protocols usually termed transport protocols, most notably HTTP, are <em>application</em> protocols. The distinction is relevant because ignoring the difference leads to ignoring a lot of the benefits of the infrastructure that uses those protocols. </p>

<p>The best example is the distinction between HTTP&#8217;s GET and POST. While POST can (and should) be used for arbitrary processing, a GET has clearly defined semantics, like being <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html">safe and idempotent</a> and possibly supporting <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html">caching</a>. Making the different semantics part of the protocol enables the infrastructure that implements the protocol to handle GET and POST requests differently.</p>

<p>Treating application protocols such as HTTP (or SMTP or POP3 or whatever) and transport protocols (such as TCP or UDP) like they were interchangeable is an abuse of app protocols; in fact, there&#8217;s not much of a point in using them this way at all. If an application protocol such as HTTP is used, it should be used properly.</p>

<p>The issue Mark raised is that if there&#8217;s addressing information at the SOAP level, it should be mapped to the appropriate elements at the HTTP level. And this should not be optional, but required. </p>

<p><a href="http://webpages.charter.net/chrisfer/">Chris Ferris</a>, not exactly known as a REST proponent or someone who&#8217;ll easily agree with Mark, <a href="http://webpages.charter.net/chrisfer/2005/01/none-of-above.html">sums it up very well</a>:</p>

<blockquote>
<p>The tension in this permathread is really about how to map application semantics to the transfer protocol. Mark would have HTTP be the application. Thus, when the semantic of a request message is &#8220;retrieve the representation of the resource identified by this URI&#8221;, that HTTP GET be used rather than a getSomething() operation tunneled over HTTP POST. That the URI of the resource be required to be the Request-URI of the HTTP request, not buried in a wsa:To SOAP header block in the SOAP entity body of an HTTP POST request message. Mark&#8217;s point is that by not leveraging the HTTP application protocol, that Web services have effectively opted out of some of the architectural benefits that the infrastructure of the Web provides.</p>
</blockquote>

<p>He continues:</p>

<blockquote>
<p>He&#8217;s right and he&#8217;s wrong, at the same time. He&#8217;s right that in bypassing the application semantics of HTTP by tunnelling all requests over POST, that Web services has effectively opted out of exploiting the deployed web infrastructure for things like caching of responses and thus will not scale as effectively as it might had it leveraged HTTP GET for those requests that were effectively equivalent to an HTTP GET. However, his assertion that you would have to modify SOAP to effect the optimization of caching in the context of a WS-Transfer Get in a transport independent manner is just plain wrong.</p>
</blockquote>

<p>Chris then elaborates on how you could build caching on the SOAP level without requiring modification, all of which is IMHO beside the point, which would be that <em>if all of this is already built into the infrastructure, one might just as well use it</em>. HTTP has proven its value as being the underlying protocol of Earth&#8217;s largest application; I believe it&#8217;ll be a fine platform for most of the Web services scenarios one can think of. In those cases where it isn&#8217;t, it might make sense to build some of its features into the SOAP layer and use that instead, but it doesn&#8217;t seem very compelling to me to build up a completely new stack with roughly the same features and deploy it on top. At the very least, it should be required to map these features to those of the underlying layer, if it supports it &#8212; which seems to be the core of the issue in question.</p>

<section class="comments">

<div class="comment" id="comment-444">
On <a href="#comment-444" title="Permalink to this comment">February 17, 2005  1:36 AM</a>, <a href="http://www.pacificspirit.com/blog" title="http://www.pacificspirit.com/blog" rel="nofollow">Dave Orchard</a>
said:
<p>Why not look at how every property of WS-Addressing could be mapped to HTTP instead of SOAP headers?  I did such a thing in Ruminations on WS-A and transfer protocols at <a href="http://www.pacificspirit.com/blog/2004/12/20/ruminations_on_wsaddressing_and_transfer_protocols" rel="nofollow" /><a href="http://www.pacificspirit.com/blog/2004/12/20/ruminations" rel="nofollow">http://www.pacificspirit.com/blog/2004/12/20/ruminations</a><em>on</em>wsaddressing<em>and</em>transfer_protocols</p>


</section>

