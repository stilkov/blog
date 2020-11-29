---
layout: post
title: "To ESB or Not to ESB"
date: "2004-07-31T15:50:00+01:00"
comments: false
categories: 
---

<p><a href="http://radovanjanecek.net/blog/archives/000107.html">Radovan</a> criticizes the ESB idea, i.e. the idea that SOA will be provided by a single, powerful middleware product that combines asynchronous messaging and Web services. I have my problems with the idea, too &#8212; I believe that SOA is not going to be provided by any single vendor, regardless of whether what they sell is an ESB, some integration server or other product. But that&#8217;s only because I view SOA as something very large-scale &#8212; I believe that SOA is not an architecture for applications, but rather for multiple applications, possibly across multiple enterprises (and it&#8217;s the connection of multiple enterprises, or autonomous business units, where the ESB idea breaks down). </p>

<p>In any case, I think there are three areas which merit distinct discussions:</p>

<ul>
<li>Service-oriented application development, i.e. a methodology and set of architectural patterns that can be applied when the goal is to find a modular, flexible, future-proof architecture for a a new system;</li>
<li>Service-oriented integration, where the goal is not so much to provide something new, but rather to connect existing stuff; and finally</li>
<li>Service-oriented architecture (for want of a better term), which describes a higher level, multi-enterprise architecture of services that may or may not be facades in front of legacy apps or the outward-facing boundaries of newly developed systems.</li>
</ul>

<p>If I found a better word for the last area, I could say that all three are subsets of the larger concept, which I would then call SOA. But you can also call them X, Y and Z &#8212; what matters is that you accept that different solutions discussed in the SOA space have different advantages for each of them. For example, I can see ideas from Microsoft&#8217;s Indigo to be a good match for the development of new ones; ESB (or Systinet&#8217;s Gateway) for the second, and maybe concepts from the REST space are suited for the third. Ultimately, it would obviously be great to have a single set of patterns for all three scenarios, but these are only just emerging.</p>

<section class="comments">

<div class="comment" id="comment-334">
On <a href="#comment-334" title="Permalink to this comment">July 31, 2004  6:11 PM</a>, <a href="http://www.ebpml.org" title="http://www.ebpml.org" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>+1 +1 +1</p>

<p>except for REST matching the 3rd one, it is now clear to me that REST cannot support as it is state alignment -which is ironic, but I think true-, second REST cannot support the notion of data centric, a.k.a conversational, interfaces which are also mandatory for the 3rd one.</p>

<p>Jean-Jacques</p>


<div class="comment" id="comment-335">
On <a href="#comment-335" title="Permalink to this comment">August  1, 2004 10:21 PM</a>, <a href="http://iseran.com/" title="http://iseran.com/" rel="nofollow">Steve Loughran</a>
said:
<p>First, ESB scares me too. Integration hell is what springs to mind, &#8220;eternal cash flow to IBM global services&#8221; being the other. Nor do I see &#8216;one single ESB solution&#8217; being adequate: the moment you have two companies merging, unless they use the same one, you are going to need an inter-ESB to glue together the different ESB systems. </p>

<p>But at the same time, I think SOA could be good. Or more to the point, I dont think the old Distributed Objects Pattern worked as well as intended. </p>

<p>One thing that large distributed object applications never seemed to enable was some third party writing code that plugged in to the system. It was always a self contained thing. So the ability of me to write a half decent front end to our intranet travel expenses app is zero. In an SOA world I could ignore the inherent awfulness of the front end app (or even the front end site), fetch the WSDL and write a python script to fill in my monthly vehicle mileage without so much suffering.</p>


</section>

