---
layout: post
title: "WS-Addressing and the Next Hop"
date: "2005-05-31T22:45:00+01:00"
comments: false
categories: 
---

<p>It&#8217;s over a month old, but I second Sanin Saracevic&#8217;s <a href="http://blogs.saninsaracevic.com/dotnet/">call for real-life examples</a> of next-hop routing using WS-Addressing. Aaron Skonnards&#8217;s much-cited <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnwebsrv/html/wsroutetowsadd.asp">article</a> attempted to explain how to move from <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnglobspec/html/wsroutspecindex.asp">WS-Routing</a> to <a href="http://www.w3.org/2002/ws/addr/">WS-Addressing</a>, but although it mentions next-hop routing, it doesn&#8217;t go into much detail.</p>

<p>Here is my scenario: I want to introduce an intermediary into a communication path between consumer and provider. My initial thought was that the best way to do this is to encode the ultimate receiver&#8217;s address (i.e., that of the provider) in a <code>wsa:To</code> header, that of the consumer into the <code>wsa:ReplyTo</code> header, and then send the message to the intermediary. After learning from <a href="http://www.dynamic-cast.com/mt-archives/000050.html">this post</a> that WSE 2.0 (which is not my target platform, but sort of a reference implementation) rejects a SOAP message if the actual address of the endpoint it&#8217;s being sent to and the <code>wsa:To</code> field don&#8217;t match, I have to question my own reasoning &#8212; this would mean that one has to put the address of the next hop into the <code>wsa</code> headers. But if that is the case, where do I put the address of the ultimate receiver? And what about this mysterious <code>via</code> header that I can&#8217;t seem to find in the spec? </p>

<p>In the end, it may well be that my problem simply can&#8217;t be solved with WS-Addressing alone since it adds support for addressing only &#8212; as its name implies. But that doesn&#8217;t really explain how one could possibly move one of the dynamic routing scenarios supported by WS-Routing to WS-Addressing &#8230;</p>

<section class="comments">

<div class="comment" id="comment-557">
On <a href="#comment-557" title="Permalink to this comment">June  1, 2005  1:42 PM</a>, Jan Alexander
said:
<p>There is no need to have the transport address same as is the wsa:To address. For example WS-Discovery specification uses soap.udp://239.255.255.250:3702 as a transport address and urn:schemas-xmlsoap-org:ws:2005:04:discovery as a wsa:To address for multicast messages. If WSE refuses to send message to transport address that differs from wsa:To address, it is only for the implementation reasons.</p>


<div class="comment" id="comment-558">
On <a href="#comment-558" title="Permalink to this comment">June  1, 2005  2:41 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks Alex. So in your opinion, my initial idea - sending the message to the intermediary with wsa:To pointing to the ultimate receiver would be the right way?</p>


<div class="comment" id="comment-559">
On <a href="#comment-559" title="Permalink to this comment">June  1, 2005  3:04 PM</a>, Jan Alexander
said:
<p>Yes. In ideal case you should only care about the address of the ultimate destination and let the messaging infrastructure care about how to route the message to it (using as many intermediaries as necessary). This is very similar to how IP packets are routed through the Internet infrastructure.</p>


<div class="comment" id="comment-560">
On <a href="#comment-560" title="Permalink to this comment">June  1, 2005  5:20 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>OK.</p>

<p>But thinking about it some more, I&#8217;m not really sure I like this approach that much. One of the benefits of WS-A, at least as far as the claims go, is that addressing information is incorporated into the message instead of being kept out-of-band on the transport layer. If this is the case, the message itself should contain all of the information needed to send it. I can understand why the static, pre-defined route approach taken by WS-Routing has been abandoned; still, IMO the message would have to contain at least the address of the next hop in addition to that of the ultimate receiver to be routable by the infrastructure. Right?</p>


<div class="comment" id="comment-561">
On <a href="#comment-561" title="Permalink to this comment">June  2, 2005 11:05 AM</a>, Jan Alexander
said:
<p>The goal of WS-Addressing spec is to allow sender to send a message to a recepient without having to care about the message routing details. The infrastructure can decide how to route message using as many intermediaries as necessary. This routing is transparent for both sender and recepient application code. </p>

<p>What you are trying to do is to use WS-Addressing for application level routing where your next hop is potentialy a logical address too. This use case in not targeted by WS-Addressing, you will have to use your application logic and application-specific metadata for the routing decisions among your logical hops and to use WS-Addressing for delivering message just between two adjacent logical hops.</p>

<p>In other words: For your use case using just WS-Addressing for message routing is not enough. There is a gap between the original WS-Routing spec and the WS-Addressing spec, no doubt about that.</p>


<div class="comment" id="comment-562">
On <a href="#comment-562" title="Permalink to this comment">June  2, 2005 11:49 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks Alex, that clarifies things for me. We&#8217;re yet to make up our mind, but one possible approach I&#8217;m considering is to add a via element in a proprietary namespace, but re-use wsa:To and wsa:Action inside of it.</p>


<div class="comment" id="comment-563">
On <a href="#comment-563" title="Permalink to this comment">July 16, 2005 10:29 AM</a>, Joel
said:
<p>Stefan, the WSE 2.0 framework implements SOAP routing over HTTP by leveraging the WS-Referral specification; WS-Referral is the gap that Alex spoke of.  The SoapHttpRouter class in WSE 2.0 uses a file, named the &#8220;referral cache&#8221;, that contains routing instructions.  Each intermediary has its own referral file that it uses to perform a match against the contents the WS-Addressing &#8220;To&#8221; field.  The result of this match is a URL that the router uses to deliver the message to the next intermediary or ultimately the final endpoint.</p>


</section>

