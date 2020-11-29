---
layout: post
title: "Doubts about Links"
date: "2007-10-12T22:37:00+01:00"
comments: false
categories: 
---

<p><a href="http://www-128.ibm.com/developerworks/blogs/page/pmuellr?entry=on_links">Patrick Mueller</a> wonders about links in a RESTful HTTP app:</p>

<blockquote>
<p>Here&#8217;s an example: let&#8217;s say I have a banking system with a resource representing a person, that has a set of accounts associated with it. I might typically represent the location of the account resources as a URL. But if I happen to know, a priori, the layout of the URLs, I could just provide an account number (assuming that&#8217;s the key). With the account number, and knowledge of how to construct a URL to an account given that information (and perhaps MORE information), the URL to the account can easily be constructed.</p>
</blockquote>

<p>IMO, this would break what I perceive one of the main benefits of the REST approach &#8212; IDs would become something that can only be interpreted with out-of-band knowledge.</p>

<p>For example, in an RPC-style interface, IDs are simple parameters to methods:</p>

<pre><code>Customer getCustomer(ID id);
</code></pre>

<p>If I have an id, I need to know that a) it is, indeed, a customer ID and b) that I have to call get <code>getCustomer()</code> method to retrieve more information. There&#8217;s no agreement, no uniformity to the interface.</p>

<p>In an XHTML document, a relation to a customer could be expressed as a link:</p>

<pre><code>&lt;a href="http://example.com/192879202039374738" /&gt;
</code></pre>

<p>Knowledge about XHTML means that I know <code>&lt;a&gt;</code> means a link, and the value of the <code>href</code> attribute contains a URL. In other words, using URIs to link to resources &#8212; hypermedia &#8212; is key for the uniform interface, and thus an essential part of REST.</p>

<section class="comments">



<div class="comment" id="comment-1482">
On <a href="#comment-1482" title="Permalink to this comment">October 13, 2007 12:00 AM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik</a>
said:
<p>I think people assume REST-ful links are mainly for related data or alternative formats.  As I mentioned in Tim Ewald&#8217;s &#8220;wow&#8221; posts last April, it may not be practical for a message to even contain links to all potentially related resources.  Also, no matter how good you make your URI constructs, it hasn&#8217;t been proven to me you can really eliminate the need for out-of-band knowledge.</p>

<p>But that&#8217;s a minor piece of what REST is all about.  The primary reason, IMO to put links into a message is to direct a process.  In other words, the links tell the caller how to transition a resource through its life-cycle.  Taking a RESTful approach without developing a state transition strategy basically limits REST to CRUD.</p>


</section>

