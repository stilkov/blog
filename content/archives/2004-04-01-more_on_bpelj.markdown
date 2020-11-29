---
layout: post
title: "More on BPEL-J"
date: "2004-04-01T10:02:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ebpml.org/bpel-j.htm">Jean-Jacques Dubray explains</a> why he likes <a href="/blog/st/archives/000804.html">BPEL-J</a>. My problem with the whole approach is that I either want to extract business process modeling information from my implementation source code, in which case I might be tempted to use something programming language-independent, such as BPEL; or I decide that my requirements can only be fulfilled by using a general purpose programming language - which would make me use something like Java, C# or some dynamic language.</p>

<p>The idea of using XML as a syntax for &#8220;real&#8221; programming languages plainly sucks &mdash; all it does is create an illusion of independence of a particular platform, when in reality it&#8217;s just obscured badly behind a syntax totally unsuited for the task. Now whatever you think of BPEL, one of its (if not its only) benefit is that it is supposed to be portable across different BPEL engine implementations. Mixing it with Java would make me no less dependent on the Java platform that if I had used Java directly, so I just plainly fail to see the point (you could just as well directly go with the <a href="http://www.jcp.org/en/jsr/detail?id=207">JSR</a> JJ points to).</p>

<p>JJ&#8217;s example &mdash; if I understand it correctly &mdash; would imply that I can mix process execution semantics with things such as accessing a database, which is something that IMO does not belong to this layer at all (and should be hidden behind another service interface).</p>

<section class="comments">

<div class="comment" id="comment-245">
On <a href="#comment-245" title="Permalink to this comment">April 14, 2004  3:43 PM</a>, <a href="http://www.bpm3.com" title="http://www.bpm3.com" rel="nofollow">Howard Smith</a>
said:
<p>My views on BPELJ are documented here: www.bpm3.com/bpelj/ &#8230;.. but, I am struck by JJ&#8217;s analysis that BPELJ opens up the possibility for &#8220;This is not a Hub-and-spoke orchestration, but a collaboration of orchestrated services.&#8221; That is precisely what BPMS vendors do already. Typically, one swimlane per BPEL or BPML process, not centrally executed, but choreographed based only on the exchange of information among the service entry points to the processes. And BPMS products will typically support projection of services from existing system so they can be the enactment systems for each swimlane, precisely as JJ advocates. BPELJ neither helps, nor hinders in this respect. It&#8217;s just a really bad idea to mix up traditional programming in a process language. BPMS products neatly partition the two, allowing all existing enactment systems to play a role. Take a look at www.bpm3.com/grok/</p>


</section>

