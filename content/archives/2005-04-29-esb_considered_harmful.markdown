---
layout: post
title: "ESB Considered Harmful"
date: "2005-04-29T08:30:00+01:00"
comments: false
categories: 
---

<p>In <a href="http://blogs.msdn.com/richardt/archive/2005/04/28/413159.aspx">ESB revisited</a>, Rich Turner nails it:</p>

<blockquote>
<p>What if I wanted to remove or replace my current ESB platform? Surely, this is more insidious than any operating system, development tool or other such vendor lock-in concern? Because each ESB is&#160;implemented in an entirely proprietary manner, with no guarantees that the messages transmitted across the bus are actually based on any form of open standard protocol, there is absolutely no guarantee that any technology offered by a company other than the ESB platform vendor will be able to communicate freely via the bus. So, not only am I held to ransom by the ESB platform vendor because I cannot easily replace one ESB with another, but I am also likely to only be able to integrate systems which the ESB vendor provides specific adaptors for.
Isn&#8217;t this <em>precisely</em> what we&#8217;re trying to get away from?</p>
</blockquote>

<p>I whole-heartedly agree. The only justification for the ESB-as-a-product concept is that without it, there would be no expensive middleware left for vendors to sell.</p>

<p>Not a problem for consultants, though :-)</p>

<section class="comments">

<div class="comment" id="comment-521">
On <a href="#comment-521" title="Permalink to this comment">April 29, 2005  4:46 PM</a>, <a href="http://darth.homelinux.net" title="http://darth.homelinux.net" rel="nofollow">Mark Griffin</a>
said:
<p>Although I agree in concept, esp. about vendor lock in, the reality is achieving large scale vendor independent integration and SOA&#8217;s is difficult at best.  It requires a certain sophistication and discipline from the IT organization.  And interoperability is still a large challenge as each vendor chooses its interpretation of the every changing standards.  I like the direction but we have a ways to go.  I think vendor EAI and ESB solutions still have some life ahead of them.  And honestly, as the number of WS-whatever’s grow the adoption is just getting more difficult.  Expecting the average IT shop to have a handle on that is a bit of a stretch.</p>

<p>Markg
<a href="http://darth.homelinux.net" rel="nofollow" /><a href="http://darth.homelinux.net" rel="nofollow">http://darth.homelinux.net</a></p>


<div class="comment" id="comment-522">
On <a href="#comment-522" title="Permalink to this comment">April 29, 2005  5:09 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I agree that an ESB provided by a vendor may be the most pragmatic choice for the time being, IFF the downsides are analyzed and considered acceptable. That doesn&#8217;t make it the ideal solution, though &#8230;</p>


</section>

