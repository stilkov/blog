---
layout: post
title: "Scaling Messaging"
date: "2007-09-17T21:27:00+01:00"
comments: false
categories: 
---

<p><a href="http://patricklogan.blogspot.com/2007/09/amqp-xmpp.html">Patrick Logan questions</a> <a href="/blog/st/2007/09/17/xmpp_matters.html">my assertion</a> that AMQP is something you&#8217;d use within a company, and XMPP across company boundaries (i.e. over the Internet):</p>

<blockquote>
<p>What would be the drivers for this dichotomy? Why are two different messaging systems necessary? What would limit AMQP from being used on the internet scale? What would limit XMPP from being used on the intranet scale?</p>
</blockquote>

<p>Patrick may well be right &#8212; I don&#8217;t know enough about either AMQP or XMPP to credibly defend my gut feeling. One of my motivations, though, was that XMPP is based on XML, while AMQP (AFAIK) is binary. This suggests to me that AMQP will probably outperform XMPP for any given scenario &#8212; at the cost of interoperability (e.g. with regard to i18n). So AMQP might be a better choice if you control both ends of the wire (in this case, both ends of the message queue), while XMPP might be better to support looser coupling.</p>

<p>But as I keep saying (after hearing something similar from Mark Baker for years): most of the stuff that works on Internet scale is a better choice for company-internal scenarios, too &#8212; so I&#8217;m aware I may be slightly contradicting myself here.</p>

<section class="comments">



<div class="comment" id="comment-1445">
On <a href="#comment-1445" title="Permalink to this comment">September 19, 2007  7:11 PM</a>, <a href="http://meat.net/" title="http://meat.net/" rel="nofollow">dbt</a>
said:
<p>The reason that you&#8217;re correct is that&#8212;in the medium term&#8212;high bandwidth low latency messaging that would eschew XML for a binary format for performance reasons is unlikely to work over the commodity internet.</p>


<div class="comment" id="comment-1446">
On <a href="#comment-1446" title="Permalink to this comment">September 22, 2007  4:11 AM</a>, <a href="http://soundadvice.id.au/blog/" title="http://soundadvice.id.au/blog/" rel="nofollow">Benjamin Carlyle</a>
said:
<p>Stefan,</p>

<p>My company use effectively a binary HTTP internally, but HTTP externally. The same reasoning applies, at least at a cursory level: We had an existing SOA solution with known properties with respect to performance, scalability, and performance. Using the HTTP data model allowed us to head down a REST path internally without shifting these properties too far. Now that we are using HTTP more and more to speak to external systems we end up with two protocols essentially doing the same thing.</p>

<p>However, it is still probably a false reasoning. HTTP on the big, high latency, low bandwidth external interfaces and our existing solution on the small, low latency, high bandwidth internal interfaces? The networks themselves don&#8217;t justify the dichotomy. The dichotomy is supported by two factors:
* That more messages are likely to be exchanged internally, possibly leading to a performance profile that even outweighs the advantages of the better internal network
* Business momentum: Our solution works, so why change it?</p>

<p>It used to be that TCP/IP was considered an &#8220;inter&#8221;-networking protocol: The protocol you use between your networks, alongside the protocols that service the networks themselves. Private networking protocols were eventually supplanted, and I suspect our internal solution will one day also be supplanted. It only takes one generation of software to die out and a new one to emerge for the underlying technologies to become ubiquitous.</p>

<p>Benjamin.</p>


</section>

