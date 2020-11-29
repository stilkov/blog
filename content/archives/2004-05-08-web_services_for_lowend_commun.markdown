---
layout: post
title: "Web Services for Low-End Communication"
date: "2004-05-08T20:44:00+01:00"
comments: false
categories: 
---

<p>I was about to write something really nasty about the <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnglobspec/html/devprof.asp">Devices Profile for Web Services</a> &#8212; after all, isn&#8217;t it obvious that it cannot possibly be a good idea to use <a href="http://www.w3.org/TR/2003/REC-soap12-part1-20030624/">the world&#8217;s fattest protocol</a> for communication with or between devices?</p>

<p>Then I thought a bit more about the time when I started programming for real &#8212; using C++ at that time, when the veterans in the company told me that C++ is always going to be too slow for anything serious. A few years later, it was great that Java had JNI to bridge to C for the critical stuff. Remember when people said Java just might be usable on the client, but for your server, you will still need the ultra-fast C++? I remember discussions about CORBA/IIOP being totally inefficient for high performance communications, OO-style get/set methods inappropriate for real work &#8230;</p>

<p>Don&#8217;t get me wrong: Performance matters, and it matters a lot. But a performance advantage alone is not going to save a technology or programming paradigm from becoming obsolete &#8212; if it were, we&#8217;d all be programming our communication interfaces using assembly language. </p>

<p>My prediction is that in a few years, all communication &#8212; whether it&#8217;s local (in process or interprocess), in a Personal/Local Area Network, inside company boundaries or crossing oceans  &#8212; is going to be SOAP/XML over something like HTTP by default, with a lot of optimized alternatives the parties are going to agree on during communication setup.</p>

<section class="comments">

<div class="comment" id="comment-285">
On <a href="#comment-285" title="Permalink to this comment">May 13, 2004  9:13 AM</a>, Hartmut Wilms
said:
<p>Hi Stefan!</p>

<p>&#8220;My prediction is that in a few years, all communication — whether it’s local (in process or interprocess), in a Personal/Local Area Network, inside company boundaries or crossing oceans — is going to be SOAP/XML over something like HTTP by default, with a lot of optimized alternatives the parties are going to agree on during communication setup.&#8221;</p>

<p>Sounds good to me, but I think that we&#8217;ve got a long road to travel until then and have to cope with some petty obstacles (no good tool support) and frantic arm waving heretics (&#8220;And what about performance?&#8221;).</p>

<p>I was pondering about the whole &#8220;performance&#8221; thing, while coding some boring but required stuff. I started with &#8220;well, at least the idea of logic implemented in the middle tier is a realistic idea today&#8221; up to &#8220;why bother trying to accomplish scalability on the server level, when the best scalability is reached with the thousand well equipped client machines accessing my server (using the middle tier merely for scaling data access)&#8230;?&#8221;. To make things worse I was wondering if the loosely coupled approach is much more difficult to grasp than the tightly coupled object-oriented appoach, at least today. After all we&#8217;re experienced OOA/OOD experts and an OOA/D model is easier to understand than a pile of XML documents exchanged by services &#8230; Maybe I&#8217;ve just get used to the &#8220;new&#8221; notation.</p>

<p>As you might have noticed already, I need some insightful advice in order to get on the right track, again ;-).</p>


</section>

