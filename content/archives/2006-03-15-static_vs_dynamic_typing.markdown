---
layout: post
title: "Static vs. Dynamic Typing"
date: "2006-03-15T17:17:00+01:00"
comments: false
categories: 
---

<p>A <a href="http://weblog.raganwald.com/2006/03/fair-and-balanced-look-at-static-vs.html">fair and balanced (well, not really) look</a> at the static vs. dynamic typing schism. </p>

<p>I used to be a strong believer in static typing back when I was doing C++ programming. (That was actually something I did for a really long time &#8212; I was, in fact, somewhat religiously convinced there was a multitude of conceptual advantages C++ had over Smalltalk. Blame it on my youth.) Nowadays, the only advantage of static typing I still concede is the better support for IDEs and code completion, which you arguably would not need if you didn&#8217;t start with a verbose, unmanageable and ungrowable language in the first place.</p>

<section class="comments">

<div class="comment" id="comment-829">
On <a href="#comment-829" title="Permalink to this comment">March 15, 2006  8:10 PM</a>, Al Lang
said:
<p>&#8220;&#8230; which you arguably would not need if you didn’t start with a verbose, unmanageable and ungrowable language in the first place&#8221;</p>

<p>I find good IDE support and code completion utterly invaluable when working on a large codebase with which I&#8217;m not familiar. I&#8217;m not sure I&#8217;m ready to trade that off for a sexier programming language.</p>


<div class="comment" id="comment-830">
On <a href="#comment-830" title="Permalink to this comment">March 15, 2006 11:01 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>When I&#8217;m programming Java, I find I&#8217;m addicted to an IDE, and I don&#8217;t really care whether it&#8217;s IDEA or Eclipse - I just need something to help me navigate through the gazillions of classes that form the code base. I still believe that even though there may be many, many classes to navigate through, a more expressive language would be able to transport the same business logic in much fewer lines of code - which would reduce the need dramatically. Still, I don&#8217;t have any convincing numbers that tell me whether this is really true; it&#8217;s just a gut feeling based on playing around with more dynamic languages (specifically Ruby) recently.</p>


<div class="comment" id="comment-831">
On <a href="#comment-831" title="Permalink to this comment">March 23, 2006  3:38 PM</a>, <a href="http://bannkreis.de" title="http://bannkreis.de" rel="nofollow">Oliver Weise</a>
said:
<p>Since I don&#8217;t know many dynamic languages well, I&#8217;m curious what you mean how a &#8220;more expressive language&#8221; can help us getting rid of complex APIs, which are the main cause why we need IDEs. Can you give a hint how ruby as a language might make work easier without the need for something like automatic method lookup (I would assume it has something to do with building &#8220;domain specific languages&#8221;) ?</p>

<p>I used to think that API complexity in Java is not so much a problem of the language itself but that</p>

<p>a) there are just so many different and complicated things you can do in java and</p>

<p>b) some API vendors very heavily tend to make APIs very abstract and complex to hit nearly 100% of all possible usage scenarios (which results in the fact that API usage will be significantly harder for the first 90%)</p>

<p>So any language would suffer this fate, that either is used for many tasks and/or is dominated by people with a certain abstraction fetish. Well, I would love to see that I&#8217;m wrong here. So maybe I should give Ruby a shot myself.</p>


<div class="comment" id="comment-832">
On <a href="#comment-832" title="Permalink to this comment">March 23, 2006 11:35 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>You assume correctly, the DSL approach is what I believe makes Ruby different from, say Python. If you take a closer look at Ruby on Rails (which you should), you can see a lot of examples.</p>

<p>In contrast, Java, J2EE and specifically EJB require so much ultimately meaningless syntax decorations that they&#8217;re a pain to use without appropriate supporting technology (generators and IDEs).</p>


</section>

