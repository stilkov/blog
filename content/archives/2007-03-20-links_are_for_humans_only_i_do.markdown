---
layout: post
title: "Links are for Humans Only? I Don't Think So."
date: "2007-03-20T08:01:00+01:00"
comments: false
categories: 
---

<p>After referencing Paul Downey&#8217;s great <a href="http://www.flickr.com/photos/45581782@N00/406077535/">EPR-on-a-bus picture</a>, <a href="http://auburnmarshes.spaces.live.com/Blog/cns%21F985A6952BC07C4%21633.entry">Jonathan Marsh</a> writes:</p>

<blockquote>
<p>For human interaction, for searching and cataloging based on simulating human navigation patterns, pages full of links <a href="http://www.w3.org/TR/webarch/#use-hypertext-links">are good</a>.  Especially when the content of that page isn&#8217;t terribly useful it&#8217;s nice to be able to click virtually at random and escape into the soothing world of advertising pitches.  But for a particular user, the majority of links in a page never get used.  What is a machine going to do with a bunch of random links?  In machine-to-machine communication, links are undoubtedly going to be much fewer in quantity, but much higher in quality.  And if the service is doing something useful on behalf of a user that doesn&#8217;t require the transmission of lots of links, is that therefore a bad service?  A service should return precisely the number of links necessary for it to do useful work.  No more, and no less.</p>
</blockquote>

<p>This is in response to Nick Gall&#8217;s claim:</p>

<blockquote>
<p>Nowhere in the vast multitude of WS-* specifications or the articles or papers describing them is there any imperative or even any emphasis that a Web Service should return an XML document that is populated references to other Web resources, ie URIs.  But it is a fundamental principle of the Web that good Web resources don&#8217;t &#8220;dead end&#8221; the Web; instead, they return representations filled with URIs that link to other Web resources.</p>
</blockquote>

<p>I totally fail to see how Jonathan brings up any argument against this &#8212; as long as Web services don&#8217;t actually add something more to the Web than a single endpoint per service, they are not &#8220;on the Web&#8221;, but are indeed dead ends.</p>

<p>For a good example of links being used in a machine-processable way, see <a href="http://bitworking.org/projects/atom/draft-ietf-atompub-protocol-14.html#appdocs">Atom Service documents</a>.</p>

<section class="comments">

<div class="comment" id="comment-1204">
On <a href="#comment-1204" title="Permalink to this comment">March 21, 2007  4:58 PM</a>, <a href="http://blogs.usask.ca/dong_notes/" title="http://blogs.usask.ca/dong_notes/" rel="nofollow">Dong Liu</a>
said:
<p>&#8220;Semantics are a byproduct of the act of assigning resource identifiers and populating those resources with representations. At no time whatsoever do the server or client software need to know or understand the meaning of a URI—they merely act as a conduit through which the creator of a resource (a human naming authority) can associate representations with the semantics identified by the URI.&#8221;
The web applications can also try to understand the links, although they do not need to. This needs special prescript of their functions. As you pointed out, this can also be done in XML for machine to machine interaction, e.g. Atom publishing. The condition is that the application accessing the XML knows Atom protocol. Similarly, the web services supporting WS-Addressing is not dead ends, they can reply with &#8216;links&#8217; to other services. Again, the condition is that the service consumers know WS-Addressing.</p>


<div class="comment" id="comment-1205">
On <a href="#comment-1205" title="Permalink to this comment">March 22, 2007  1:44 AM</a>, <a href="http://auburnmarshes.spaces.live.com" title="http://auburnmarshes.spaces.live.com" rel="nofollow">Jonathan Marsh</a>
said:
<p>I&#8217;m not against &#8220;good examples&#8221; like Atom Service documents.  And don&#8217;t get me wrong, links are links.</p>

<p>My point is that Nick seems to be conflating pages with data blobs.  A page without links is indeed a dead end.  I don&#8217;t think that same metric applies to data blobs.</p>

<p>For example, if I build a stock quote service which takes a stock symbol (a string) and returns a price (a decimal), there are no URIs exchanged.  Doesn&#8217;t Nick imply that this service is bad because it&#8217;s a dead-end?  What if I implemented the service RESTfully?  How would this be any different?  Maybe I&#8217;d use a URI instead of a token (stock symbol) to identify the stock.  But that is equally true in both SOAP and HTTP.</p>

<p>The difference between the number of links in a resource representation is indicative of whether the resource is designed for human or machine consumption, not whether it is RESTful or not.</p>


<div class="comment" id="comment-1206">
On <a href="#comment-1206" title="Permalink to this comment">March 22, 2007  7:36 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I think I understand your point, I just happen to disagree with it :-) Embedding links in representations enables consuming applications to follow them instead of constructing URIs or using out-of-band metadata, which means that things like one can change servers, redirects work, and most importantly, that the resources referenced by these links can be used in different scenarios. An application that &#8220;contributes&#8221; a link for each of its major resources adds a lot more value to the Web than one that hides them behind its own, service-specific interface. </p>

<p>I don&#8217;t think this is related to whether it&#8217;s a human or a machine that consumes them; I agree this plays a role when &#8220;meaningful URIs&#8221; are concerned.</p>


<div class="comment" id="comment-1593">
On <a href="#comment-1593" title="Permalink to this comment">January 24, 2008  4:08 PM</a>, <a href="http://tomayko.com" title="http://tomayko.com" rel="nofollow">Ryan Tomayko</a>

<a href="http://tomayko.com" class="commenter-profile"></a>
said:
<p>Jonathon wrote:</p>

<blockquote><p>The difference between the number of links in a resource representation is indicative of whether the resource is designed for human or machine consumption &#8230;</p></blockquote>

<p>This is an extremely sophomoric understanding of the web, Jonathon. At the very core of RESTful design is the constraint that <a href="http://www.stucharlton.com/blog/archives/000141.html" rel="nofollow">hypermedia be the engine of application state</a>. That means links drive interaction, be it human or machine. I consider this the absolute most interesting aspect of REST.</p>

<p>In other words, WTF are you talking about?! It&#8217;s baffling to me that someone could have done any research at all on REST and then make the statement that &#8220;the number of links in a resource representation is indicative of whether the resource is designed for human consumption.&#8221; Uggh. It hurts my heart. These are fundamental, first principals!</p>


</section>

