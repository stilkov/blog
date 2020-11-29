---
layout: post
title: "Services and Components"
date: "2004-07-15T17:53:00+01:00"
comments: false
categories: 
---

<p><a href="http://jim.webber.name/2004/07/16/07288d94-dfa7-47d9-871f-4b9e8b5fe783.aspx">Jim Webber</a> thinks that the major difference between components and services is that communication with a service is stateless. I disagree &#8212; that would turn components where communication is stateless into services automatically as well, right? I believe there is a number of issues that separate the two concepts, but if I were forced to narrow it down to just one, I would say that <em>a component has a contract not only with the outside world, but also with the component platform into which it is deployed</em>. A service knows no such thing.</p>

<section class="comments">

<div class="comment" id="comment-327">
On <a href="#comment-327" title="Permalink to this comment">July 16, 2004  1:49 AM</a>, <a href="http://jim.webber.name" title="http://jim.webber.name" rel="nofollow">Jim Webber</a>
said:
<p>Hey Stefan,
I know my services are stateless components might seem crude, but if you have a stateless (as in the Web architecture definition) then it is actually a service. If it helps, you can just call it a stateless component, but service works just as well.
Web Services have a contract with the platform into which they are deployed too, of course!
Jim</p>


<div class="comment" id="comment-328">
On <a href="#comment-328" title="Permalink to this comment">July 16, 2004  8:05 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Of course it&#8217;s all just a game with names, so you can call anything a service, much as the term component is so generic that you can apply it to almost everything. And I disagree that a Web service has a contract with a platform &#8212; it&#8217;s the Web service implementation, which may take the form of a component, that has this contract.</p>

<p>Say you install some sort of gateway that will expose some of your application interfaces via SOAP, document-oriented, coarse-grained and everything - you&#8217;ll end up with a service, right? Nobody can tell that it&#8217;s not being implemented from scratch. </p>

<p>Would the same be true for a component? No, because I can&#8217;t take the component (implementation and all) and deploy it to my runtime instead of yours.</p>


</section>

