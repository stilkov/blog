---
layout: post
title: "Java's \"new\" considered harmful"
date: "2006-06-22T08:52:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ddj.com/184405016">Interesting DDJ article</a> on memory allocation and object instantiation in Java. One claim I believe to be incorrect: </p>

<blockquote>
<p>How do other programming languages handle object creation? C++ is just like Java, as you would expect.</p>
</blockquote>

<p>It&#8217;s been a while since I programmed C++ in earnest, but at least with regards to memory allocation, <a href="http://publib.boulder.ibm.com/infocenter/pseries/v5r3/index.jsp?topic=/com.ibm.vacpp7a.doc/language/ref/clrc05cplr199.htm">placement new</a> is certainly more powerful (and complicated and error prone) than what you have available in Java.</p>


