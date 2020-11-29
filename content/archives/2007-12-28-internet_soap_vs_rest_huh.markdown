---
layout: post
title: "&#8220;Internet SOAP&#8221; vs. REST: Huh?"
date: "2007-12-28T10:07:00+01:00"
comments: false
categories: 
---

<p>Ganesh wrote about &#8220;<a href="http://wisdomofganesh.blogspot.com/2007/12/paying-restafarians-back-in-their-own.html">paying back RESTafarians in their own coin</a>&#8221; (be sure to check out the comments); Mark Little did <a href="http://www.infoq.com/news/2007/12/rest-ws-payback">a write-up about this</a> for InfoQ; <a href="http://pzf.fremantle.org/2007/12/another-great-blog-post-from-ganesh.html">Paul Fremantle</a> seems to like it. Mark also has <a href="http://markclittle.blogspot.com/2007/12/rest-soap-ws-and-soa-oh-my.html">a very good follow-up article</a>.</p>

<p>I did not find Ganesh&#8217;s article convincing, as his premise is wrong &#8212; at least if I understand him correctly. His point seems to be that similar to the way REST folks are saying &#8220;just use the Web instead of layering WS-* on top of it&#8221;, a similar argument could be made for &#8220;just use TCP instead of layering the Web on top of it&#8221;. If TCP is all you need, I&#8217;m all for it. HTTP is an application protocol on top of TCP &#8212; if it matches your needs, use it, if it doesn&#8217;t, don&#8217;t. The difference is that WS-* does not add benefit on top of HTTP and the Web. </p>

<p><a href="http://steve.vinoski.net/blog/2007/12/28/internet-soap-vs-rest-huh/">Steve Vinoski</a> puts it best:</p>

<blockquote>
<p>I don’t believe any system based either on interface specialization (i.e., the opposite of the uniform interface constraint) or on “processThis” can scale to Web scale. Interface specialization significantly increases coupling while reducing visibility and applicability, while “processThis” is so devoid of semantics that it offers nowhere to practically apply constraints like caching and statelessness that are so critical to scalability.</p>
</blockquote>


