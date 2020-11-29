---
layout: post
title: "SOAphisticated"
date: "2005-01-18T22:45:00+01:00"
comments: false
categories: 
---

<p><a href="http://pluralsight.com/blogs/tewald/archive/2005/01/18/5108.aspx">Smart stuff</a> from <a href="http://pluralsight.com/blogs/tewald/">Tim Ewald</a>:</p>

<blockquote>
<p>Does that mean that we shouldn&#8217;t be doing WS-<em>? Absolutely not. Does it mean that we should be standardizing all of WS-</em>? Ideally, yes, but the reality is that it would take a very long time and people are itching to proceed. So I think the practical reality is that we&#8217;ll end up with a spectrum of services. Inside my org group, department, or maybe company, I&#8217;m likely to have more of an opportunity to standardize on a smaller number of kits that offer more advanced functionality. I&#8217;ll leverage that for stuff I&#8217;m building for internal consumption. For anything I&#8217;m offering to partners and the world - where there is no agreement on what kits to use -&#160;I&#8217;m likely to eschew those more advanced features and settle for application-level solutions so that reach is not restricted.</p>
</blockquote>

<p>I guess the recipe here is to stick to the basics to reach the maximum number of possible participants, and narrow it down more and more as the number of partners is reduced and control increases:</p>

<ul>
<li>HTTP + XML, preferably <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm">REST</a>-based, for Internet-scale communication patterns</li>
<li>Plain WSDL + SOAP + HTTP + some accepted WS-* standards for B2B communication in closed groups or market places</li>
<li>Experimental WS-* and proprietary SOAP extensions for internal, EAI-like usage</li>
</ul>

<section class="comments">

<div class="comment" id="comment-439">
On <a href="#comment-439" title="Permalink to this comment">January 19, 2005  1:59 AM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Or just do the most general thing everywhere. 8-)</p>

<p>But seriously, there&#8217;s been a history of technologies migrating from the more general scenario (Internet) to the more specific (Intranet), but AFAIK, none going the other way.  Consider TCP/IP - born on the net, yet crept onto the Intranet and eradicated a myriad of proprietary LAN protocol on its way.  Email too.  And the Web, of course.</p>

<p>Even if you don&#8217;t by that argument, I suppose one could say that if you can reasonably forsee that the Intranet based system you&#8217;re developing will need to be exposed to the Internet, then you&#8217;re probably best off building with an Internet scale approach.</p>


</section>

