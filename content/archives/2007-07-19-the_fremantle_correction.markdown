---
layout: post
title: "The Fremantle Correction"
date: "2007-07-19T22:35:00+01:00"
comments: false
categories: 
---

<p>Paul Fremantle left <a href="http://www.infoq.com/news/2007/07/scaproblem#view_8587">a brilliant comment</a> on an SCA thread at InfoQ:</p>

<blockquote>
<p>Building distributed systems is hard enough, which is why EJBs, RMI, WS and even REST aren&#8217;t simple. Unfortunately, adding a layer of indirection doesn&#8217;t help. It might make is seem simpler for a while, but in fact you end up with three problems: </p>

<p>
</p><ol>
<li>Its harder to understand what is going on: As we&#8217;ve seen with the move towards REST, programmers like to see the relation between their code and the wire. They like to understand what happens when they code a line of Java (or C or PHP or JavaScript).</li>
<li>Its harder to debug: because its harder to trace back from the low levels through the layers of indirection.</li>
<li>Its harder to really understand - to grok, to know inside out: the layers of indirection don&#8217;t remove the difficulties of the problem, they just hide them. So predicting what will happen in difficult situations becomes harder.</li>
</ol>

<p>I think the complexity of the SCA specifications backs up this point completely. Something that was designed to simplify and unify programming models should have a simple description. Unfortunately, because of the above reasons, that just isn&#8217;t possible.</p>
</blockquote>


