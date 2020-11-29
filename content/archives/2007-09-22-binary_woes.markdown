---
layout: post
title: "Binary Woes"
date: "2007-09-22T22:35:00+01:00"
comments: false
categories: 
---

<p>So, <a href="http://zimboe.wordpress.com/2007/09/18/information-encoding-revisited/">Janne Savukoski</a> uses <a href="/blog/st/2007/09/17/scaling_messaging.html">my post</a> on AMQP and XMPP to somehow make a case for binary XML:</p>

<blockquote>Summary:<ul><li>XML standard encoding: sucks (in protocols, ok in blogging)</li><li>XML data model: rocks</li></ul></blockquote>

<p>I&#8217;ve expressed my feelings for binary XML <a href="/blog/st/2003/11/binary_xml.html">in the past</a>, at <a href="/blog/st/2005/12/07/binary_xml.html">least twice</a>. XML is perfectly fine more often than not, and usually, if you believe you have a problem that you can solve by replacing XML with something &#8220;better&#8221; you&#8217;ll end up with two problems. But anyway &#8230;</p>

<p><a href="http://fuzzypanic.blogspot.com/2007/09/message-queue-panic.html">Mike Herrick</a> thinks I&#8217;m &#8220;temporarily a binary message bigot&#8221;.</p>

<p>Damn. Let me try to make myself clear: Believe it or not, message-oriented middleware <em>works very well</em> in its domain. Sadly, while there is some <em>portability</em> due to JMS, there is no <em>interoperability</em>. Because of this, an efficient protocol that addresses this (AMQP) is a perfectly valid idea. Of course this does not mean that suddenly, AMQP becomes an alternative to an Internet-scale protocol such as XMPP; but the same is true vice versa, unless looser coupling has higher priority than performance for your problem space.</p>

<p>I&#8217;m more and more convinced that most company-internal integration/communication scenarios share the exact same problems as cross-company, Internet-scale scenarios. In other words, what works on the Internet is very likely going to be the &#8220;right&#8221; solution for your company. But &#8220;most&#8221; does not mean &#8220;everything&#8221;, and I&#8217;ll happily consider AMQP a useful criterion for evaluating MOM solutions if and when it becomes widespread enough.</p>

<section class="comments">



<div class="comment" id="comment-1455">
On <a href="#comment-1455" title="Permalink to this comment">September 23, 2007  5:09 AM</a>, <a href="http://fuzzypanic.blogspot.com/2006/06/advanced-message-queue-protocol.html" title="http://fuzzypanic.blogspot.com/2006/06/advanced-message-queue-protocol.html" rel="nofollow">Mike Herrick</a>
said:
<p>Stefan, </p>

<p>You are absolutely right on AMQP - it is a perfectly valid idea. My only point was that it has a ways to go. That certainly doesn&#8217;t mean it won&#8217;t happen. These things just take years. And more often than not, there is a big political component for them to be successful. </p>

<p>I&#8217;m not close enough to AMQP to know what the probability of it being successful is. I do know that we won&#8217;t know the answer to that for years. </p>

<p>I think that the XMPP idea for integration is appealing, but it is not mainstream. It has the benefit of being around in some form since 1998, being an IETF standard, and there are several viable impls out there. Clearly, however, things like JMS are used much more often today than XMPP for integration. </p>

<p>I was just kidding on the &#8220;binary bigot&#8221; comment. I have struggled with that myself several times. More often than not, I find myself coming back to not hurtn&#8217; the web and going for text on the wire. I typically have other performance issues before the text becomes a problem &amp; text has lots of benefits.</p>

<p>Anyway, I&#8217;m blathering on here. </p>

<p>Cheers,</p>

<p>Mike</p>


</section>

