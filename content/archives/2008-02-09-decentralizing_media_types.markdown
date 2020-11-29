---
layout: post
title: "Decentralizing Media Types"
date: "2008-02-09T19:13:00+01:00"
comments: false
categories: 
---

<p>A while back, <a href="http://sanjiva.weerawarana.org">Sanjiva Weerawarana</a> proposed (via email) a way to decentralize media types. I think the proposal was excellent; <a href="http://netzooid.com/blog/2008/02/07/why-a-restful-idl-is-an-oxymoron-and-what-we-really-need-instead/">Dan Diephouse&#8217;s excellent latest blog post</a> reminded me of it again. Here&#8217;s a brief introduction to a possible solution for &#8220;decentralizing media types&#8221;.</p>

<h3>The Problem</h3>

<p>In a plain HTTP interaction, the <code>Content-type</code> and <code>Accept</code> headers carry information about the type of the data being transmitted and accepted, respectively. You&#8217;ve seen these media types in numerous examples, e.g. a typical request or response might have a Content-type header with the value <code>application/xml</code>. </p>

<p>The problem with this approach is that media types have to be registered centrally with <a href="http://www.iana.org/assignments/media-types/">IANA</a>. This means that while you can invent your own media types, nobody will know about them &#8212; unless you go through the time-consuming process of actually having your media type registered. </p>

<p>What&#8217;s wrong with <code>application/xml</code>? Nothing, really, except that it doesn&#8217;t tell you anything more than that what is being sent is XML: You don&#8217;t have any way to tell <em>what</em> XML it is unless you actually parse and e.g. look at the outer element&#8217;s XML namespace.</p>

<h3>The Solution</h3>

<p>What Sanjiva (and his collaborators, <a href="http://pzf.fremantle.org/">Paul Fremantle</a>, <a href="http://auburnmarshes.spaces.live.com/">Jonathan Marsh</a> and <a href="http://www.jclark.com/">James Clark</a>) propose is this: Define a single new media type, <code>application/data-format</code>, with a required parameter <code>uri</code>. This <code>uri</code> points to a definition of the data format, like this:</p>

<p><code>application/data-format;uri=http://mediatypes.example.com/foo/bar</code></p>

<p>The <code>uri</code> is an HTTP URI that points to an <a href="http://www.rddl.org/">RDDL</a> document, in other words: you can do an HTTP GET on it and retrieve a documentation of the data format that&#8217;s both human-readbable as well as machine-processable.</p>

<h3>My Opinion</h3>

<p>I think this is an excellent proposal, specifically because it does not rely on a centralized authority, and re-uses the namespacing concepts of the Web. It&#8217;s also fully agnostic towards any specific data format &#8212; you can use your own binary or text format, something like JSON or YAML, and if you pick XML, you&#8217;re free to use DTDs, RELAX NG schemas, Schematron or even XML Schema to document it. It&#8217;s also great in that it allows for clients with different knowledge about any particular format to do their best to handle it. One client might be hard-coded against the complete string; another might retrieve the RDDL, look for an XSD, and dynamically render some fancy visual representation.</p>

<p>I think the concept could even be extended to allow for querying of supported media types: You could just do a GET on the resource with an <code>accept</code> header of <code>application/data-format</code> and get back the link to the RDDL (if there is any).</p>

<p>Maybe there&#8217;s something immediately, obviously wrong with this idea &#8212; but if so, I can&#8217;t see it. It will be interesting to see what others say &#8230;</p>

<section class="comments">



<div class="comment" id="comment-1610">
On <a href="#comment-1610" title="Permalink to this comment">February 11, 2008  8:47 AM</a>, <a href="http://asbjor.nu/" title="http://asbjor.nu/" rel="nofollow">asbjornu.myopenid.com</a>

<a href="http://asbjor.nu/" class="commenter-profile"></a>
said:
<p>I think this sounds like an interesting concept. It might work out great. However, there is something counter-intuitive here, where &#8220;application/xml&#8221; actually gives you more information about the format than &#8220;application/data-format&#8221; unless the URI given in the parameter is known to you already. Would it be possible to add another parameter called &#8216;base-type&#8217; or similar to specify what &#8220;raw&#8221; MIME type the format is based on? E.g.:</p>

<pre>application/data-format;base-type=application/xml;uri=http://mediatypes.example.com/foo/bar</pre>

<p>Another nit to add, at least with both of these parameters; it doesn&#8217;t look very pretty. Perhaps the Content-Type doesn&#8217;t need to be overloaded? Perhaps an entirely new header could work instead? E.g.:</p>

<pre>Content-Type: application/xml; charset=utf-8<br />
Content-Type-Uri: <a href="http://mediatypes.example.com/foo/bar" rel="nofollow">http://mediatypes.example.com/foo/bar</a></pre>


<div class="comment" id="comment-1625">
On <a href="#comment-1625" title="Permalink to this comment">February 25, 2008 12:43 AM</a>, Frank
said:
<p>Asbjornu certainly has a point. This way, generic XML clients might not recognize that the returned data is actually XML. But a new HTTP header is not necessary. How about agreeing on a content type parameter to use? Examples where &#8220;data-format&#8221; is the parameter name, and the value is a URI.</p>

<p>Some XML: application/xml;data-format=http://mediatypes.example.com/foo/bar
Some plain text: text/plain;data-format=http://mediatypes.example.com/foo2/bar2
Some generic data: application/octet-stream;data-format=http://mediatypes.example.com/foo3/bar3</p>

<p>As far as I know, content type parameters are not regulated anywhere. An example of adding more information by content type parameters is Geography Markup Language. The content type of version 3.1.1 is &#8220;text/xml; subtype=gml/3.1.1&#8221;.</p>


<div class="comment" id="comment-1642">
On <a href="#comment-1642" title="Permalink to this comment">March  5, 2008 11:05 PM</a>, <a href="http://bill.burkecentral.com" title="http://bill.burkecentral.com" rel="nofollow">Bill Burke</a>
said:
<p>I agree with Frank.  It should be something like registered-mime-type; data-format=&#8230;</p>

<p>I think one of the powers of REST is that you can point your browser at a resource, and if registered mime types are used, you might be able to get a new rendering of the representation.</p>

<p>I&#8217;d be interested in any other conversations happening on this.</p>

<p>Bill</p>


</section>

