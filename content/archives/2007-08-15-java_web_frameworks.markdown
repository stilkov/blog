---
layout: post
title: "Java Web Frameworks"
date: "2007-08-15T08:24:00+01:00"
comments: false
categories: 
---

<p><a href="http://netzooid.com/blog/2007/08/05/what-is-the-web-framework-du-jour-for-java-these-days/">Dan Diephouse is looking for a Java Web Framework</a>; there&#8217;s an excellent list in <a href="http://kasparov.skife.org/blog/2007/08/07/">Brian McCallister&#8217;s answer</a>. I&#8217;d add <a href="http://www.nextapp.com/platform/echo2/echo/">Echo2</a>, which is cool if you&#8217;re not really looking for a <em>Web</em> framework, but rather for something to build applications that are tunneled through it (it&#8217;s an all JavaScript engine, so &#8220;View Source&#8221; will essentially show you nothing).</p>

<p>Personally, though, I believe I&#8217;d skip using a framework altogether, and go with JSPs and one or more hand-coded Servlets &#8212; I&#8217;ve not seen Java Web Frameworks yet that do <em>not</em> attempt to hide the Web from me.</p>

<section class="comments">



<div class="comment" id="comment-1406">
On <a href="#comment-1406" title="Permalink to this comment">August 15, 2007  8:41 AM</a>, <a href="http://blog.gueck.com/" title="http://blog.gueck.com/" rel="nofollow">Mikael Gueck</a>
said:
<p>Hey, if you evaluate frameworks based on how you &#8220;like&#8221; them instead of listing long-term business requirements, you deserve everything you get.</p>


<div class="comment" id="comment-1407">
On <a href="#comment-1407" title="Permalink to this comment">August 15, 2007 10:50 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Mikael, I agree in principle &#8230; though I have to point out that, having done my share of evaluations in the past, they&#8217;re often not worth much more than a decision based on personal taste when you look at them half a year later.</p>


<div class="comment" id="comment-1408">
On <a href="#comment-1408" title="Permalink to this comment">August 15, 2007 11:16 AM</a>, dementian
said:
<p>What do you mean by &#8220;hiding the web&#8221; ?</p>


<div class="comment" id="comment-1409">
On <a href="#comment-1409" title="Permalink to this comment">August 15, 2007  3:16 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Dementian, good question. What I meant is that the goal of most Web frameworks seems to be to ensure that the developer doesn&#8217;t have to care about HTML and CSS, URIs, HTTP requests and responses, etc. They try to make Web development appear more or less like stand-alone client application development, e.g. by implementing a session concept. I don&#8217;t want a session concept :-) </p>

<p>I <em>want to have to care</em> about those concepts. I&#8217;m comfortable with the Web&#8217;s abstractions, I just want a framework that exposes them to me in a convenient fashion. The Servlet API doesn&#8217;t do a great job, but I don&#8217;t see things like Struts or Tapestry improve according to my requirements.</p>

<p>Of course it&#8217;s quite likely there&#8217;s a Java Web framework out there that I don&#8217;t know about that does exactly this - expose HTTP and other Web standards in a convenient manner to Java programmer. If so, I&#8217;m happy to learn &#8230;</p>


<div class="comment" id="comment-1410">
On <a href="#comment-1410" title="Permalink to this comment">August 15, 2007  3:35 PM</a>, <a href="http://wanderingbarque.com/nonintersecting" title="http://wanderingbarque.com/nonintersecting" rel="nofollow">Pete Lacey</a>
said:
<p>Stefan,</p>

<p>I know you know about Restlet because you&#8217;ve interviewed Jerome.  Why isn&#8217;t that the answer here?</p>


<div class="comment" id="comment-1411">
On <a href="#comment-1411" title="Permalink to this comment">August 15, 2007  4:26 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Indeed the Restlet framework is a good candidate, as is any JSR 311 implementation, such as Jersey. I did not single out Restlet because frankly, I still haven&#8217;t become familiar enough with it to recommend it; and it&#8217;s still too early for JSR 311/Jersey.</p>

<p>Did you implement a non-trivial Web app based on Restlet yet, or know of someone who did? Most of the Web app development in recent times (if it can be called non-trivial, which is questionable) has been done using Rails.</p>


<div class="comment" id="comment-1412">
On <a href="#comment-1412" title="Permalink to this comment">August 15, 2007  5:34 PM</a>, Mittal
said:
<p>well, we have implemented few restlet based web service &amp; webapp&#8217;s as clients to those restlet based web services - let me know if you have any questions on those.
Though I believe restlet should answer your concern but I dont understand why cant servlet and whatever client that access your servlet addresses your concerns ?</p>


<div class="comment" id="comment-1413">
On <a href="#comment-1413" title="Permalink to this comment">August 15, 2007  7:48 PM</a>, <a href="http://hughw.blogspot.com/2007/08/restful-servlets-jsp-my-framework.html" title="http://hughw.blogspot.com/2007/08/restful-servlets-jsp-my-framework.html" rel="nofollow">hughw</a>
said:
<p>Hey Stefan &#8212; here&#8217;s how I do it:
<a href="http://hughw.blogspot.com/2007/08/restful-servlets-jsp-my-framework.html" rel="nofollow" /><a href="http://hughw.blogspot.com/2007/08/restful-servlets-jsp-my-framework.html" rel="nofollow">http://hughw.blogspot.com/2007/08/restful-servlets-jsp-my-framework.html</a></p>


<div class="comment" id="comment-1414">
On <a href="#comment-1414" title="Permalink to this comment">August 15, 2007 11:25 PM</a>, <a href="http://abstractfinal.blogspot.com/" title="http://abstractfinal.blogspot.com/" rel="nofollow">Keyur Shah</a>
said:
<p>I had questioned usage of web frameworks (albeit for RESTful applications) before: <a href="http://abstractfinal.blogspot.com/2007/04/do-we-need-frameworks-for-rest.html" rel="nofollow" /><a href="http://abstractfinal.blogspot.com/2007/04/do-we-need-frameworks-for-rest.html" rel="nofollow">http://abstractfinal.blogspot.com/2007/04/do-we-need-frameworks-for-rest.html</a> </p>

<p>I have continued down the road of servlets + jsps ever since and it has worked out wonderfully well for me.</p>


</section>

