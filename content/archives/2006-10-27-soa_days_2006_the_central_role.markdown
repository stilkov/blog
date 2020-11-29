---
layout: post
title: "SOA Days 2006: The Central Role of Registries"
date: "2006-10-27T10:38:00+01:00"
comments: false
categories: 
---

<p>For some reason, I forgot to mention this conference &#8212; it was organized by Deutsche Post AG&#8217;s SOPSOLUTIONS and took place from 21-22 September. I gave a presentation on &#8220;The Central Role of Registries&#8221;. Again, this will probably not make much sense without the accompanying audio, especially since I experimented a little with a different presentation style; still:  <a href="/blog/st/presentations/2006/20060921_The_Central_Role_of_Registries.pdf">the slides are here</a>.</p>

<section class="comments">

<div class="comment" id="comment-1072">
On <a href="#comment-1072" title="Permalink to this comment">October 31, 2006  2:26 PM</a>, <a href="http://www.brics.dk/~krukow" title="http://www.brics.dk/~krukow" rel="nofollow">Karl Krukow</a>
said:
<p>Stefan,
I really enjoyed reading the slides but, as you point out, some things don&#8217;t make sense without the audio.</p>

<p>I am curious about your points about registries vs. repositories. Can you elaborate on this here?</p>

<p>Cheers,
- Karl</p>


<div class="comment" id="comment-1073">
On <a href="#comment-1073" title="Permalink to this comment">October 31, 2006  7:14 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks Karl. What exactly is it that you&#8217;d like to see elaborated? The difference between registries and repositories?</p>


<div class="comment" id="comment-1074">
On <a href="#comment-1074" title="Permalink to this comment">November  2, 2006  3:42 PM</a>, <a href="http://www.brics.dk/~krukow" title="http://www.brics.dk/~krukow" rel="nofollow">Karl Krukow</a>
said:
<p>Yes, first of all the differences. You said that registries store metadata and references whereas repositories store actual data besides metadata. What would be examples of &#8220;actual data&#8221;? </p>

<p>You also say that: </p>

<p>&#8220;An integrated SOA registry/
repository can be used as the
single point of information about
SOA metadata.&#8221;</p>

<p>Why is an integrated reg/rep needed at all?</p>

<p>I guess what I would like elaborated is more or less getting the information equivalent of having been present at the talk (at least during the part where you discuss registries/repositories) ;-)</p>

<p>Cheers,
/Karl</p>


<div class="comment" id="comment-1075">
On <a href="#comment-1075" title="Permalink to this comment">November  2, 2006  3:50 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I see. First of all, I don&#8217;t necessarily believe an integrated reg/rep, or even only one of them, is mandatory in any way. It is a valid strategy to choose this approach, and if you do, you have to have a solution for both maintaining information about what data you have, as well as the actual data itself.</p>

<p>As an example, there may be a service called CustomerManagement with a WSDL describing its interface at <a href="http://example.com/services/CustomerManagement/wsdl." rel="nofollow" /><a href="http://example.com/services/CustomerManagement/wsdl." rel="nofollow">http://example.com/services/CustomerManagement/wsdl.</a> A registry would store this information. A repository would also store the actual WSDL (the XML) itself. A WSDL-aware repository might interpret the WSDL when it&#8217;s registered, extracting information about the interface(s) and operations, schema elements used etc. </p>

<p>If you want to find out, for example, what services would be affected when the Customer schema is changed, your reg/rep needs to know about both Customer and CustomerManagement (the artifacts themselves), not only their URIs.</p>

<p>What you call data and what you call metadata is largely a matter of taste. I generally try to avoid the terms if possible.</p>


<div class="comment" id="comment-1076">
On <a href="#comment-1076" title="Permalink to this comment">November  3, 2006 12:23 PM</a>, <a href="http://www.brics.dk/~krukow" title="http://www.brics.dk/~krukow" rel="nofollow">Karl Krukow</a>
said:
<p>Ok, I see what you mean.</p>

<p>Thanks, Stefan.</p>


</section>

