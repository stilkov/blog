---
layout: post
title: "POSTing Reliably"
date: "2007-03-24T20:38:00+01:00"
comments: false
categories: 
---

<p>Peter Williams <a href="http://pezra.barelyenough.org/blog/2007/03/better-resource-creation/">has a follow-up post</a> in which he explains <a href="http://pezra.barelyenough.org/blog/2007/03/deprecating-post/">his original PUT-vs.-POST idea</a>, which I understand now: The problem with PUT is that while it&#8217;s idempotent, it requires the client to know the URL to PUT to, so he suggested a PUT which returns a redirect to some URL <em>created by the server</em>. You then PUT your intended content to the URI returned, and only then the new resource is created.</p>

<p>I believe this is almost a good idea; it violates the original purpose of PUT, though &#8212; if I PUT to a URI, I don&#8217;t expect it to have different results each time I do so. So my suggestions would be a slightly different approach: </p>

<ol>
<li>POST to the <code>http://example.com/purchase-orders/new</code> URI and have it return <code>201 Created</code> and the URI for the new resource in the <code>Location:</code> header. </li>
<li>PUT the intended content to the URI, possibly repeatedly in case of error.</li>
</ol>

<p>Of course this might end up generating &#8220;empty&#8221; resources, but this is true for the PUT suggestion, too.</p>

<p>Also worth pointing out: In a <a href="/blog/st/2007/03/20/deprecating_post_or_maybe_not.html#c69128">comment</a>, Asbj&#248;rn Ulsberg writes:</p>

<blockquote>
<p>What about using &#8220;ETag&#8221; for POST requests? It&#8217;s pretty easy for the client to hash the content into an ETag and then stuffing that into an header before it&#8217;s POSTed to the server. Consecutive POSTs of the same content would lead to the same ETag and the server could thus identify them as the same and not create two resources.</p>
</blockquote>

<p>That sounds like a good idea, but I believe there&#8217;s no way ETags can be created on the client and then sent in a request header. The closest thing to what Asbj&#248;rn suggests is probably Yaron Goland&#8217;s <a href="http://www.goland.org/draft-goland-http-reliability-00.text">SOA-Rity</a>, which uses a client-generated message ID.</p>

<section class="comments">

<div class="comment" id="comment-1212">
On <a href="#comment-1212" title="Permalink to this comment">April  8, 2007 10:19 PM</a>, <a href="http://dehora.net/journal" title="http://dehora.net/journal" rel="nofollow">Bill de hOra</a>
said:
<p>Once you combine the standard theorem for reliable transmission with HTTP&#8217;s assymetric design, you realise that a reliable over HTTP will take at least two requests.  In that vein, think SOARity,POE and HTTPLR cover the solution space as far as HTTP goes. Anything else requires a two-way protocol, or an emulation of it in HTTP (as is done with BTF2.0).</p>

<p>The only other option is to dedup at the server, an approach for which I suspect you can&#8217;t define a protocol that is provably correct.</p>


</section>

