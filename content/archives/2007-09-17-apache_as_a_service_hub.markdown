---
layout: post
title: "Apache as a Service Hub"
date: "2007-09-17T22:38:00+01:00"
comments: false
categories: 
---

<p>Via both <a href="http://fuzzypanic.blogspot.com/2007/09/viking-bus.html">Mike Herrick</a> and <a href="http://patricklogan.blogspot.com/2007/09/amqp-xmpp.html">Patrick Logan</a> comes <a href="http://mykakotopia.blogspot.com/2007/09/apache-is-my-service-hub.html">this link</a> to a post by Erik Onnen on Apache HTTPD:</p>

<blockquote>
<p>If RESTful architectures catch on and people start to see the web as a series of resources, Apache HTTPD&#8217;s role will continue to grow. It&#8217;s high time we stopped looking at Apache HTTPD as just a web server and started viewing it as an HTTP Gateway.</p>
</blockquote>

<p>The Apache web server is not exactly famous for its small footprint (both in terms of configuration and runtime), but I agree it&#8217;s a very viable option for many scenarios.</p>

<section class="comments">



<div class="comment" id="comment-1448">
On <a href="#comment-1448" title="Permalink to this comment">September 18, 2007  3:30 PM</a>, <a href="http://tomayko.com/" title="http://tomayko.com/" rel="nofollow">Ryan Tomayko</a>
said:
<p>Stefan said:</p>

<blockquote>
<p>The Apache web server is not exactly famous for its small footprint &#8230;</p>
</blockquote>

<p>Yea but httpd is super tiny compared to anything commonly labeled &#8220;hub&#8221; or &#8220;bus&#8221; or anything typically considered &#8220;middleware&#8221; in the Enterprise. I&#8217;ve seen EAI / service bus stuff that could fit all of httpd in the palm of its hand.</p>

<p>That&#8217;s what I find so interesting about the enterprise Java market &#8212; the least complex solutions are often orders of magnitude more complex than the software people in UNIX hacker land consider large and bloated.</p>


<div class="comment" id="comment-1449">
On <a href="#comment-1449" title="Permalink to this comment">September 18, 2007  4:06 PM</a>, <a href="http://memojo.com/~sgala/blog/" title="http://memojo.com/~sgala/blog/" rel="nofollow">Santiago Gala</a>
said:
<p><a href="http://memojo.com/~sgala/blog/2007/09/18/Service-hubs-and-footprints" rel="nofollow">Trackback</a></p>

<p>I agree with Ryan Tomayko, also to notice that your trackback seems to be disabled but it is advertised both in auto discovery comment and in the visible HTML.</p>


<div class="comment" id="comment-1450">
On <a href="#comment-1450" title="Permalink to this comment">September 18, 2007  8:12 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks, I forgot to disable the advertising of it when I disabled trackbacks due to lots and lots of spam.</p>


<div class="comment" id="comment-1451">
On <a href="#comment-1451" title="Permalink to this comment">September 18, 2007  8:14 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Of course you&#8217;re both right &#8212; it&#8217;s all a matter of perspective. Compared to a typical ESB or application server product, HTTPD is tiny. Compare to Lighty or Mongrel, it&#8217;s not &#8230;</p>


<div class="comment" id="comment-1452">
On <a href="#comment-1452" title="Permalink to this comment">October  2, 2007  6:54 AM</a>, <a href="http://mykakotopia.blogspot.com/" title="http://mykakotopia.blogspot.com/" rel="nofollow">Erik Onnen</a>
said:
<p>Apache HTTPD&#8217;s footprint all depends on how you configure, compile and and how you measure memory usage. </p>

<p>Often, footprint measurement for Apache is inaccurate. People look at top or ps output not realizing that the majority of reported memory is shared among all processes, not unique to a process.</p>

<p>Apache can run with Async I/O just as Lighty can and consume a small amount of actual pages, all depends on how you configure it. In all the testing I&#8217;ve done, Lighty slightly lags behind Apache HTTPD in terms of total request handling latency when configured similarly (async I/O, epoll, etc.)</p>

<p>Also, I guess you get what you pay for. Apache HTTPD is capable of several tricks that Lighty can&#8217;t do for scaling up and enhancing reliability (shared SSL symmetric keys for example). Lighty is often good enough, but it&#8217;s not really the end all of HTTPD serving. Limited DAV support and limited virtual hosting compared to Apache HTTP come to mind.</p>


</section>

