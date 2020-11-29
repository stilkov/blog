---
layout: post
title: "WS-Eventing"
date: "2004-01-08T10:33:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.markbaker.ca/2002/09/Blog/" title="Web Things, by Mark Baker">Mark Baker</a> has <a href="http://www.markbaker.ca/2002/09/Blog//2004/01/08#2004-01-ws-eventing">written</a> about <a href="http://msdn.microsoft.com/ws/2004/01/ws-eventing">WS-Eventing</a> (try the first link if you see an empty page). It seems to me that the whole REST/WS debate comes down to the discussion whether SOAP should take advantage of the underlying transport/transfer protocol. In fact, it&#8217;s probably all about whether it is a transport or transfer protocol. For Mark, it&#8217;s stupid that the SOAP/WS-* specs ignore what HTTP has to offer from a transfer protocol side. The reason, of course, is that SOAP aims to work equally well over different protocols. While this might be achieved by exploiting the features of each different protocol to the largest degree possible, I can understand that one might view this as not worth the resulting confusion &mdash; the benefit of the current approach is that things look very similar, regardless of whether you&#8217;re using HTTP, SMTP, JMS, or some sort of proprietary transport (like TIBCO).
It&#8217;s interesting to note, though, that Mark also attests that WS-Eventing does <strike>a lot of</strike><u>some</u> things the right way.</p>

<section class="comments">

<div class="comment" id="comment-182">
On <a href="#comment-182" title="Permalink to this comment">January 19, 2004  4:40 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Maybe not &#8220;a lot of things&#8221; the right way. 8-)  What it does get right, IMO, are some things that don&#8217;t matter much to WS-Eventing itself, but show some progress towards a more RESTful architectural style.</p>

<p>So while I don&#8217;t see much hope for WS-Eventing itself, I&#8217;m hopefully that subsequent attempts (at pub/sub, or anything else) may stand a better chance at success.</p>


<div class="comment" id="comment-183">
On <a href="#comment-183" title="Permalink to this comment">January 19, 2004  7:57 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I&#8217;ve updated the entry accordingly ;-)
While I can relate to a lot of your arguments regarding the applicability of WS-* style Web services on an Internet scale, I wonder whether you can see any value in it at all? How do you adress the need to use other transports than HTTP? Or don&#8217;t you see such a need at all?
I have a feeling I know the answer ;-)</p>


<div class="comment" id="comment-184">
On <a href="#comment-184" title="Permalink to this comment">January 19, 2004  8:49 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>I see some value in some specs, but not most of them.  Some specs (at least of the beefier ones) I think could have a future include WS-Security, WS-Routing, the SOAP attachment work, and SOAP itself of course.  My rule of thumb is generally that if the spec itself prevents me building RESTful ly, then it&#8217;s probably no good.  But it also matters which of the constraints it disregards; e.g. one which assumed a stateful interaction would stand a better chance of success than one which assumed component-specific interfaces.</p>

<p>For other, ahem, <em>transfer</em> protocols 8-), my requirement is that each be used as if it were sitting behind a HTTP proxy.  So SMTP DATA -> foo@example.org should be handled as HTTP POST -> mailto:foo@example.org, and FTP RETR host.example.org /foo/bar/baz.zip should be handled as HTTP GET on <a href="http://host.example.org/foo/bar/baz.zip," rel="nofollow" /><a href="http://host.example.org/foo/bar/baz.zip," rel="nofollow">http://host.example.org/foo/bar/baz.zip,</a> etc..</p>


</section>

