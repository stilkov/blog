---
layout: post
title: "WS-Dilemma"
date: "2008-07-04T08:26:00+01:00"
comments: false
categories: 
---

<p>Both <a href="http://www.mnot.net/blog/2008/07/04/a_new_dread">Mark Nottingham</a> and <a href="http://www.tbray.org/ongoing/When/200x/2008/07/03/The-Shambling-Undead">Tim Bray</a> write about the proposed standardization of WS-Transfer, WS-Enumeration, WS-MetadataExchange and WS-ResourceTransfer – <a href="http://lists.w3.org/Archives/Public/www-ws/2008Jun/0001.html">at the W3C</a>, of all places.</p>

<p>Needless to say, I believe all of these specifications to be totally unnecessary. But I have no idea how the authors, including IBM and Microsoft, could abandon standardization without publicly admitting that WS-* has failed. Considering that <a href="http://stage.vambenepe.com/archives/217">the WS management stack is based on these</a> and the amount of money that has been <strike>wasted</strike>spent on this by now, this would be just too embarrassing.</p>

<section class="comments">



<div class="comment" id="comment-1751">
On <a href="#comment-1751" title="Permalink to this comment">July  4, 2008  6:01 PM</a>, <a href="http://blogs.msdn.com/mikechampion" title="http://blogs.msdn.com/mikechampion" rel="nofollow">Mike Champion</a>
said:
<p>Just as XML was intended as &#8220;SGML for the Web&#8221; but ended up used mostly as a metaformat for data and configuration files, web services technologies have ended up being used mostly for &#8220;off the web&#8221; services: management interfaces to printers, power management for printers, configuration of autonomous devices, bridging propritetary enterprise messaging systems, etc. Every time you turn on a modern computer / printer / networked device you are relying on some published-but-not-standardized WS-* protocols.  I find it intriguing that many of these protocols are actually used in a REST-like manner, hence the widespread use of the word &#8220;resource&#8221; in their names. </p>

<p>There is no question that these need to be standardized, for all the obvious reasons. Much work is underway at DMTF and OASIS.  The more interesting question is how much of this work gets done at W3C.  On one hand, it makes sense that the standard versions of the &#8220;resource access&#8221; specs that leverage SOAP for its protocol independence (TCP, UDP, HTTP, and proprietary protocols are widely used at the &#8220;transport&#8221; layer in these environment) be as aligned as possible with the HTTP world that W3C lives in.  On the other hand, as everyone knows the SOAP-based protocols are also used in RPC and message-oriented architectural patterns that are rather un-weblike, and one can sympathize with those suggesting that W3C should get out of that business. </p>

<p>The only part I find embarassing is that the deployed technologies got so far ahead of the standards.  That didn&#8217;t happen because  &#8220;that would require &#8220;publicly admitting that WS-* has failed&#8221;, it happened bceause WS-* succeeeded in ways and places that weren&#8217;t necessarily anticipated by the inventors.</p>


</section>

