---
layout: post
title: "Quote of the Day"
date: "2006-08-30T13:55:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.eaipatterns.com/ramblings/05_encapsulation.html">Gregor Hohpe</a>:</p>

<blockquote>
<p>The odd thing is that the successful encapsulation of the internal complexities of the lower layers can have an undesired side effect: users of the abstracted interface tend to forget how the lower layers already solve some of those problems that might reoccur at a higher level. This phenomenon has caused more than one integration developer to &#8220;invent&#8221; message resequencing and / or retransmission schemes very analogous to those already implemented inside any IP stack. [&#8230;] Especially in asynchronous messaging architectures, it seems odd that people use a reliable, connection oriented protocol (TCP/IP), layer a connection-less, synchronous protocol on top (HTTP), then make it asynchronous (e.g., for asynchronous Web Services), just to having to make it reliable again (e.g., using WS-ReliableMessaging).</p>
</blockquote>

<p>I&#8217;m not sure I would call HTTP (1.1) connection-less, but other than that &#8230;</p>


