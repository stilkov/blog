---
layout: post
title: "JBI Doubts"
date: "2005-12-25T21:43:00+01:00"
comments: false
categories: 
---

<p>TheServerSide.com has published <a href="http://www.theserverside.com/articles/article.tss?l=JBIforSOA">an article on JBI</a> by Meeraj Kinnumpurath. I don&#8217;t have any disagreements with the technical content (it&#8217;s on an introductory level, and does a good job at introducing the main concepts). In case you&#8217;re not familiar with JBI, though, and have only read a bunch of articles like this, you might have some doubts left. The main one is probably &#8220;What&#8217;s it good for?&#8221;</p>

<p>I have been exposed to JBI in the last few months (I wrote a WS-I binding component for testing purposes on top of <a href="http://activesoap.codehaus.org/">ActiveSOAP</a>, and was part of a team that implemented a service engine). Call me a cynic, but from the limited experience I&#8217;ve gained in the process, there&#8217;s one major question left: &#8220;What&#8217;s it good for?&#8221;</p>

<p>I remember that in the early stages of my professional life, I was a huge framework fan. Any concept had to be turned into a library; the more generic, the better. At some point in time, I recognized most of these efforts did not lead to a customer&#8217;s problem being solved, but rather to me having something more interesting than the customer requirements to work on. (Think about it: How many engineering hours have been spent on logging libraries that should rather have gone into solving business problems?) It&#8217;s very tempting to fall into this Qualified Engineer&#8217;s Procrastination Trap&trade;, and sometimes you end up building something so generic that it ends up serving essentially no purpose at all. </p>

<p>That&#8217;s what JBI reminds me off: A generic engine to turn some input into some output by means of some processing &#8230; seriously, folks: maybe it&#8217;s better to stick with <a href="http://java.sun.com/j2se/1.4.2/docs/tooldocs/windows/java.html">an already established engine</a>, including its <a href="http://java.sun.com/j2se/1.4.2/docs/tooldocs/windows/javac.html">customization environment</a>, next time.</p>


