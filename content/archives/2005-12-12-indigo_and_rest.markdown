---
layout: post
title: "Indigo and REST"
date: "2005-12-12T23:59:00+01:00"
comments: false
categories: 
---

<p><a href="http://staff.newtelligence.net/clemensv/">Clemens Vasters</a> teaches Indigo to do REST &#8212; <a href="http://staff.newtelligence.net/clemensv/PermaLink,guid,2d61b97b-3a6e-46bd-89db-b1b20499ba18.aspx">part 1</a>, <a href="http://staff.newtelligence.net/clemensv/PermaLink,guid,4e2a7d26-342c-4402-8000-a0d15860c5fc.aspx">part 2</a>. Very, very cool stuff. One minor gripe I have is with this paragraph(s):</p>

<blockquote>
<p>Now we assume, for a moment, that every customer in the system had its own HTTP service endpoint. If you have a million customers, you have a million endpoints, probably looking like this: http://www.example.com/myapp/customers/00212332. Each of these endpoints has an implementation of the shown interface, representing the resource. [&#8230;] I think that you probably even could create a million endpoints, but of course such an application would be a complete pig. I haven&#8217;t tried and I don&#8217;t think you should. </p>
</blockquote>

<p>That seems to somehow confuse problem and cause &#8212; http://www.example.com/myapp/customers/00212332 seems like a perfectly fine URI to me, and at least <a href="http://www.amazon.com">one company</a> definitely has a few million of those &#8230; the fact that URIs map to a scarce resource (an endpoint) in existing stacks is the problem, not the URI.</p>

<section class="comments">

<div class="comment" id="comment-734">
On <a href="#comment-734" title="Permalink to this comment">December 13, 2005 12:04 AM</a>, Clemens Vasters
said:
<p>The <em>first assumption</em> is that you&#8217;d have an endpoint listener for each URL. That&#8217;s what I am saying there, not more.</p>


<div class="comment" id="comment-735">
On <a href="#comment-735" title="Permalink to this comment">December 13, 2005  8:23 PM</a>, <a href="http://www.coactus.com" title="http://www.coactus.com" rel="nofollow">Mark Baker</a>
said:
<p>Millions of URIs doesn&#8217;t mean millions of software objects.</p>

<p><a href="http://www.example.com/myapp/customers/00212332" rel="nofollow" /><a href="http://www.example.com/myapp/customers/00212332" rel="nofollow">http://www.example.com/myapp/customers/00212332</a></p>

<p>and</p>

<p><a href="http://www.example.com/myapp/customers/23042343" rel="nofollow" /><a href="http://www.example.com/myapp/customers/23042343" rel="nofollow">http://www.example.com/myapp/customers/23042343</a></p>

<p>can share the same instance of a software module/object, as well as an HTTP connection, when being interacted with via HTTP.  Just not at the same time, of course, as that would require a new instance.  All the software need do is bind to &#8220;/myapp/customers/&#8221;, extract the remainder of the path themselves to get the customer id, and then do a db lookup with that id.</p>


</section>

