---
layout: post
title: "Introducing SOA"
date: "2005-03-20T09:03:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.tbray.org/ongoing/When/200x/2005/03/19/Crupi-Top-Down">Tim Bray</a> points to <a href="http://blogs.sun.com/roller/page/crupi/20050319#soa_is_a_business_driven">John Crupi&#8217;s opinion</a>:</p>

<blockquote>
<p>What does this really mean? It means that for SOA to be successful, it must be a &#8220;top-down&#8221; approach. And top-down, means problem to architecture to solution. It does not mean, working from what we have and just wrapping it with new technologies just because we can. This bottom-up approach is quite natural and easy and is the perfect recipe for a SOA failure. </p>
</blockquote>

<p>I beg to differ. Obviously, the approach starting out from the top is what everybody wants to do, and what &#8212; most of the time, at least &#8212; architects and technologists (such as me) agree with easily. And it&#8217;s also very obvious that just replacing one protocol (such as IIOP) with another (such as SOAP/HTTP) without changing the communication architecture as well leads to disaster.</p>

<p>Unfortunately, though, when you try to initiate the strategic, high-level, top-down do-it-right approach in any of the large companies I&#8217;m familiar with, you&#8217;ll run into a wall made of solid brick. <em>No-one</em> will fund a project like that &#8212; at least not in Germany, which tends to be extremely conservative in terms of taking IT risks. And to me, that&#8217;s a good thing &#8212; before I throw an awful lot of money at the consultants, I will want to know what the benefits are, and there&#8217;d better be a short-term return on my investment.</p>

<p>From my experience, the best way to approach this is with a mix of high-level vision, introduced top-down, and bottom-up, quick win-scenarios that sort of grow towards each other:</p>

<ol>
<li>Set up some initial guidance and high-level strategy, spending no more than a week on it. </li>
<li>Solve the next few small integration or B2B connection problems using &#8216;SOA technology&#8217;.</li>
<li>Revise your high-level strategy to reflect what you&#8217;ve learned.</li>
<li>Rinse and repeat.</li>
</ol>

<p>Easy enabling of your existing systems to allow them to play a role in your SOA may be a risk. But ignoring your systems sounds like <a href="http://joel.editthispage.com/stories/storyReader$47">the single worst strategic mistake you can make</a>.</p>

<section class="comments">

<div class="comment" id="comment-492">
On <a href="#comment-492" title="Permalink to this comment">March 20, 2005  4:46 PM</a>, <a href="http://www.dehora.net/journal/" title="http://www.dehora.net/journal/" rel="nofollow">Bill de hÓra</a>
said:
<p>Stefan, sorry for the trackbacks; My MT keeps getting a 500 read timeout and then retries. I&#8217;ve removed the trackback manually from MySQL. </p>

<p>See, we really do need HTTPLR!</p>


<div class="comment" id="comment-493">
On <a href="#comment-493" title="Permalink to this comment">March 20, 2005  4:49 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Yep, we do :-)</p>

<p>(And I either need to move to Wordpress or enable dynamic publishing here in my MT installation :-)</p>


</section>

