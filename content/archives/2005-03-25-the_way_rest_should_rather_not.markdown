---
layout: post
title: "The Way REST Should Rather Not Go"
date: "2005-03-25T19:37:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.windley.com/archives/2005/03/on_the_death_of.shtml">Phil Windley</a> writes:</p>

<blockquote>
<p>The challenge for the RESTful crowd is to create a well-thought out transport alternative to SOAP. HTTP is the basis for that transport, but it&#8217;s not enough. The place to start is with service description and data binding so that RESTful Web services can enjoy the same kind of discovery that possible with SOAP. </p>
</blockquote>

<p>I couldn&#8217;t disagree more &#8212; I&#8217;d much rather have the SOAP crowd <em>drop</em> WSDL and the data-binding crap instead of the REST folks adopting it.</p>

<section class="comments">

<div class="comment" id="comment-502">
On <a href="#comment-502" title="Permalink to this comment">March 26, 2005  2:37 AM</a>, <a href="http://www.windley.com" title="http://www.windley.com" rel="nofollow">Phil Windley</a>
said:
<p>Why Stefan?  </p>

<p>I think that coding up programatic interfaces to stuff is a waste of time and building software SDKs for every language you can think of is a waste of programmers.  </p>

<p>A good interface description makes all of that automatable.  Without it, its just grunt work.</p>


<div class="comment" id="comment-503">
On <a href="#comment-503" title="Permalink to this comment">March 26, 2005 12:38 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>To me, programming against a strongly typed set of classes is just one of many programming models. Depending on the programming language, it may be totally inappropriate to generate code. You are much more familiar with Scheme and family than I am; in a language like that &#8212; or any other dynamic language &#8212; I fail to see what, exactly, it is that you gain from an interface description.</p>

<p>That doesn&#8217;t mean that there is no need for toolkits; REST folks would probably argue that if your environment provides for HTTP and XML access, that&#8217;s all the toolkit you&#8217;ll ever need.</p>


<div class="comment" id="comment-504">
On <a href="#comment-504" title="Permalink to this comment">March 27, 2005  4:16 AM</a>, <a href="http://korrespondence.blogspot.com/" title="http://korrespondence.blogspot.com/" rel="nofollow">MikeD</a>
said:
<p>This REST folk wouldn&#8217;t suggest that HTTP and XML are all the toolkits you need. For example, XML processing toolkits that include XPath support are great. HTTP clients that have decent caching support are great. I&#8217;d like to see a description language that is the next generation beyond HTML FORMs - something as simple, but allows control over the method, URI, message headers (including better authentication control) and message content and format. Mark Baker has outlined RDF Forms, but I haven&#8217;t looked into that much. A9.com has something called &#8216;Open Search&#8217; that introduces a very terse syntax for generating URIs - a mini-service description language.</p>


</section>

