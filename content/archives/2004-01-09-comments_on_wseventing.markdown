---
layout: post
title: "Comments on WS-Eventing"
date: "2004-01-09T18:39:00+01:00"
comments: false
categories: 
---

<p><a href="http://blum.typepad.com/coarsegrained/2004/01/wseventing_spec.html">Adam Blum</a> comments on the <a href="http://msdn.microsoft.com/webservices/understanding/specs/default.aspx?pull=/library/en-us/dnglobspec/html/ws-eventing.asp">WS-Eventing</a> spec:</p>

<blockquote>These reservations aside, WS-Eventing is a very exciting development. Beyond the fact that it is very good specification (nitpicking aside, I think the WS-* specs are actually getting better over time), by facilitating the creation of content routing services, it introduces for the first time to the web services world the capability of sending messages for which you do not know the recipient. This is a key building block to enabling rapid integration of many web services and applications around individual business events.</blockquote>

<p>Very interesting. I&#8217;m not intimately familiar with the WS-Addressing spec, something that I definitely need to change; but I totally agree that WS-Eventing is very readable. I&#8217;m very much looking forward to the first implementation to get to play with it &#8230;</p>

<section class="comments">

<div class="comment" id="comment-185">
On <a href="#comment-185" title="Permalink to this comment">January 16, 2004  9:56 AM</a>, Jacques Talbot
said:
<p>WS-Eventing fits quite nicely with the previous WS-Adressing and WS-RM but I wonder why the
overall agenda remains &#8220;to be guessed between the lines&#8221;.
During the last 18 months or so, the WS community is trying to reinvent a MOM with queues
and topics (to use a JMS vocabulary) and associated semantics once&amp;only_once.</p>

<p>This is a very good objective since we need the MOM semantics (asynchronous, reliable) in
an interoperable standard open world (JMS is not so).
So now with WS-Adressing, WS-Eventing and WS-RM we have a decent interoprable MOM.</p>

<p>I think it would be much clearer for many people if this objective
was stated up-front, so that one can use some
existing mental model to understand where WS- is going.</p>

<p>In this context, it is a real problem that IBM decided to opt out and also that &#8220;the other camp&#8221; esp. Sun and Oracle are not there since in this specific
case they have nothing to loose, (only to converge the two specs for reliability, these
two are really ridiculous&#8230;).
For the other part of the WS battlefield, BPEL vs WSCI, long transactions &#8230;, we can
understand that the two camps want to fight, and we, as users, can wait since we can live
without a standard for a while.</p>

<p>On the contrary, for what regards the &#8220;WS-MOM&#8221;, we need this NOW to make serious
applications, so we need industry convergence. Let&#8217;s convey this message to the big
players &#8230;</p>

What do you think?

<p>Jacques.Talbot@teamlog.com Teamlog - France</p>

<p>&#8212;
Jacques Talbot - Teamlog 10 rue Lavoisier - 38330 Montbonnot
Tél: 04 76 61 37 12  Mél: jacques.talbot@teamlog.com
Tél. mobile 06 07 83 42 00</p>


<div class="comment" id="comment-186">
On <a href="#comment-186" title="Permalink to this comment">January 16, 2004 11:58 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Jaques, </p>

<p>I agree; to me, all this talk about Web services and loose coupling is pretty unrealistic unless we have a truly asynchronous means of communication. So I welcome these new specs, and believe they are going to have tremendous impact. Once implementations become available, I will definitely advocate using them. </p>

<p>As to the analogy to JMS: I agree that in some cases, it might be helpful to explain what the specs are about in classic MOM terms. Still, asynchronous Web services are applicable in a scenario where JMS, MQ Series, MSMQ, etc. never were - for integrating processes across enterprise boundaries.</p>


</section>

