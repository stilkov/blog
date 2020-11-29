---
layout: post
title: "You're Not Sharp Enough for that Knife"
date: "2007-05-14T14:43:00+01:00"
comments: false
categories: 
---

<p><a href="http://service-architecture.blogspot.com/2007/05/engineering-v-art-challenge-of-masses-v.html">Steve Jones has a long piece</a> explaining why he considers a static, contract-driven, fix-as-much-as-possible-up-front approach superior to a dynamic environment. (It&#8217;s hard to quote a single statement, so go and read it, then come back). </p>

<p>In fact I agree with Steve to a large degree &#8212; e.g. I don&#8217;t claim that REST is simpler than WS-*, or that Ruby is simpler than Java. In fact I believe that architecting systems and developing software is hard, really, really hard in fact &#8212; but this is true no matter what technology you use. The first large projects I did were built in C++ &#8212; and anyone who ever tried to build large-scale software in C++ knows how easy it is to get things wrong, and how much below-average developers struggle with memory management, implicit type conversions, construction of temporary objects, and a million of other issues. And I definitely remember how relieved I was when Java came along and a whole set of problems disappeared for many developers I worked with &#8230; or so I used to believe.</p>

<p>I don&#8217;t have this view anymore. My personal experience is that bad developers will produce bad code in any language, and more rigidity will not magically make them build something better. In fact, the opposite may be true &#8212; because some mistakes are less easy to make, it might take much longer to &#8220;discover opportunities for skill improvement&#8221; (just to introduce a nice corporate euphemism). The belief that forcing developers to use a statically typed language will prevent them from making mistakes in any significant manner is not justified IMO, just as much as forcing a Rational Unified Process in all its glory will not prevent your projects from failing.</p>

<p>Going back to the C++ analogy (pick C if you prefer): Those who are able to understand manual memory management and pointer arithmetics will benefit from Java and will likely build better programs. Those who lack the strange gene required to understand pointers will be able to hide behind Java for a while &#8212; but ultimately their code will explode, too, just in different ways.</p>

<section class="comments">



<div class="comment" id="comment-1281">
On <a href="#comment-1281" title="Permalink to this comment">May 14, 2007  4:31 PM</a>, <a href="http://service-architecture.blogspot.com" title="http://service-architecture.blogspot.com" rel="nofollow">Steve Jones</a>
said:
<p>Stefan,</p>

<p>There are bad developers and they should simply just be shot, cruel but I feel fair.  My point is more about the &#8220;average&#8221; developers and of course the people in support.  Bad developers are people who use &#8220;==&#8221; on strings, average developers are the people who struggle with multi-threading and async and don&#8217;t quite get the idea of threadsafe and need their code properly reviewed.</p>

<p>Its sort of &#8220;langauages don&#8217;t kill projects, people do&#8221; but I have to say that, as with guns, the languages certainly help.  My experience using very static language such as Ada and Eiffel (in both cases where developers were doing C as well) was that the same developers produced many less bugs in the &#8220;strong&#8221; language than they did in the &#8220;weak&#8221; one.</p>

<p>So while for the bad there is no hope, for the average it makes a massive difference.</p>


<div class="comment" id="comment-1282">
On <a href="#comment-1282" title="Permalink to this comment">May 14, 2007  7:13 PM</a>, <a href="http://dehora.net/journal" title="http://dehora.net/journal" rel="nofollow">Bill de hOra</a>
said:
<p>&#8220;My point is more about the “average” developers and of course the people in support&#8221;</p>

<p>Death on the roads is not solved by adding more traffic lights. </p>

<p>&#8220;developers produced many less bugs in the “strong” language than they did in the “weak” one&#8221;</p>

<p>Data please. My understanding is that the biggest predictor of defect density is line count which doesn&#8217;t seem to mesh well with that observation (tho in truth I suspect defect density is strongly correlated to overtime and bad requirements)</p>


</section>

