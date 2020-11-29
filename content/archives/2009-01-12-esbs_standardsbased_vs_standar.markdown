---
layout: post
title: "ESBs: Standards-Based vs. Standardized"
date: "2009-01-12T07:59:00+01:00"
comments: false
categories: 
---

<p><a href="http://memeagora.blogspot.com/2009/01/standards-based-vs-standardized-soa.html">Neal Ford</a> on ESBs:</p>

<blockquote>
<p>Having proprietary glue is not necessarily a bad thing. It's one of the factors you have to consider anytime you are thinking about turning part of your infrastructure over to a externally developed piece of software. Obviously, no one is going to build their own database server -- it makes good sense to buy an existing one, and fight the nasty battle if and when it comes time to move to another one. BUT, you need to understand the distinction between standards-based and standardized so that you don't buy yourself into a real long term nightmare.</p>
</blockquote>

<p>I agree, except that I believe the ESB lock-in is much worse than a DB lock-in because (most) vendors want you to put their ESB in the very center of your company-wide architecture, whereas the DB is usually hidden behind the application's outer boundary (UI or interface).</p>

<p>Or at least it should be. Of course, you might be using your "ESB" to integrate DB access into process flows and dare to call it SOA instead of EAI. </p>

<section class="comments">



<div class="comment" id="comment-1914">
On <a href="#comment-1914" title="Permalink to this comment">January 12, 2009  2:21 PM</a>, <a href="http://www.thegreylines.net" title="http://www.thegreylines.net" rel="nofollow">Mark Griffin</a>
said:
<p>&#8220;Of course, you might be using your &#8220;ESB&#8221; to integrate DB access into process flows and dare to call it SOA instead of EAI. &#8220;</p>

<p>Wouldn&#8217;t be EAI either, just integration. EAI done properly has no knowledge of source or target systems. EAI was designed to eliminate or reduce the tightly coupled enterprise.  Of course EAI can and has been done badly leaving companies with a lot of brittle point to point interfaces.  The same can be said for services in the SOA world as well.  Loose coupling, agility, abstraction pre-date the current SOA definition and were in use in numerous other architectures including EAI.  The main argument most enterprises used to bring in packaged EAI solutions was: loose coupling, agility, abstraction.  They didn&#8217;t all do it right but as I said the same thing can be said about SOA.</p>

<p>As for vendor lock-in I have mixed feelings about that.  Here is a post I just put out on it - <a href="http://www.thegreylines.net/2009/01/benefits-of-open-source-software.html" rel="nofollow">http://www.thegreylines.net/2009/01/benefits-of-open-source-software.html</a> .  You can see from the post that I kind of go back and forth on whether lock-in is really an issue, call it rambling if you will.  I for one would like to see more discussion on the practical issues around vendor lock-in and open-source solutions.  Can your IT shop really take advantage of the open-source software?  Does it really prevent lock-in?  </p>


</section>

