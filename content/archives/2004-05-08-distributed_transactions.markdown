---
layout: post
title: "Distributed Transactions"
date: "2004-05-08T20:13:00+01:00"
comments: false
categories: 
---

<p><a href="http://seanmcgrath.blogspot.com">Sean McGrath</a> on <a href="http://seanmcgrath.blogspot.com/archives/2004_05_02_seanmcgrath_archive.html#108391726581259860">transactions</a>: A big +1 from me. </p>

<p>I have been involved in quite a few projects where some technology or other was being evaluated, and distributed transactions (2PC style) always were deemed to be a critical component.</p>

<p>Not one of these projects ended up actually using them. </p>

<p>Although distributed transactions are deemed the holy grail of enterprise computing by some, I think they are used rarely, and if they are used, it&#8217;s absolutely <em>never</em> in a scenario where the resource managers being coordinated are not very tightly related.</p>

<p>Some time ago, I talked to somebody who was involved in a project where 2PC semantics were (successfully!) implemented to sync transactions between an RDBMS running on Unix and an IMS running on OS/390, with a BEA Weblogic Enterprise server acting as the coordinator. When it was run for the first time, and the OS/390 operators actually noticed what all those geeks had been up to, and that they dared to lock a whole IMS segment for the duration of one of their crappy transactions, they were only barely able to avoid a collective heart attack. Needless to say, the whole idea was dropped immediately.</p>

<p>Distributed 2PC transactions and the idea of loosely-coupled systems simply don&#8217;t match. In fact, I believe that in any loosely-coupled system, transactions can&#8217;t be pushed into the supporting framework or infrastructure at all &#8212; you need to implement the logic for handling failed commits with at least the same effort as your success cases.</p>


