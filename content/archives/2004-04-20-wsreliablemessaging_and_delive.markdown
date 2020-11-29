---
layout: post
title: "WS-ReliableMessaging and DeliveryAssurances"
date: "2004-04-20T14:12:00+01:00"
comments: false
categories: 
---

<p>Continuing my investigation of WS-ReliableMessaging, I am puzzled by a spec change that occurred from the <a href="http://msdn.microsoft.com/ws/2003/03/ws-reliablemessaging/">March 2003 version</a> to the current one released in <a href="http://msdn.microsoft.com/ws/2004/03/ws-reliablemessaging/">March 2004</a>. Both specs mention different <em>delivery assurances</em> in the introduction &mdash; <strong>AtMostOnce</strong>, <strong>AtLeastOnce</strong>, <strong>ExactlyOnce</strong>, and <strong>InOrder</strong>. The old spec contains details how these delivery assurances are specified (in <a href="http://msdn.microsoft.com/webservices/understanding/specs/default.aspx?pull=/library/en-us/dnglobspec/html/ws-reliablemessaging0303.asp#ws-reliablemessaging__toc34040590">section 4.2</a>); the new spec drops this whole section, and adds the following sentence to the <a href="http://msdn.microsoft.com/webservices/understanding/specs/default.aspx?pull=/library/en-us/dnglobspec/html/ws-reliablemessaging.asp#ws-reliablemessaging__toc66262190">introduction</a>:</p>

<blockquote>Persistence considerations related to an endpoint&#8217;s ability to satisfy the delivery assurances defined below are the responsibility of the implementation and do not affect the wire protocol. As such, they are out of scope of this specification.</blockquote>

<p>I understand the reason for defining this to be out of scope of the WS-ReliableMessaging spec. It also seems to address one of the clarity issues <a href="http://www.sys-con.com/webservices/article.cfm?id=530&#38;count=21384&#38;tot=5&#38;page=4">Dave Chappell wrote about</a> last year.</p>

<p>I totally fail to see why they delivery assurances, including their technical, spec-suggesting name, are still part of the new spec and not removed altogether. Any hint, as well as some rationale about this spec change in general, would be greatly appreciated.</p>

<section class="comments">

<div class="comment" id="comment-265">
On <a href="#comment-265" title="Permalink to this comment">April 20, 2004  3:49 PM</a>, <a href="http://webpages.charter.net/chrisfer/archives/2004_04_01_oldrants.html#108246825933620737" title="http://webpages.charter.net/chrisfer/archives/2004_04_01_oldrants.html#108246825933620737" rel="nofollow">Chris Ferris</a>
said:
<p>See my response.</p>


<div class="comment" id="comment-266">
On <a href="#comment-266" title="Permalink to this comment">April 20, 2004  3:50 PM</a>, <a href="http://webpages.charter.net/chrisfer/archives/2004_04_01_oldrants.html#108246825933620737" title="http://webpages.charter.net/chrisfer/archives/2004_04_01_oldrants.html#108246825933620737" rel="nofollow">Chris Ferris</a>
said:
<p>grumble&#8230; take 2. See my response here: <a href="http://webpages.charter.net/chrisfer/archives/2004_04_01_oldrants.html#108246825933620737" rel="nofollow" /><a href="http://webpages.charter.net/chrisfer/archives/2004" rel="nofollow">http://webpages.charter.net/chrisfer/archives/2004</a><em>04</em>01_oldrants.html#108246825933620737</p>


</section>

