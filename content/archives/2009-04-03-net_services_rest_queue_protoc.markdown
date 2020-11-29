---
layout: post
title: ".NET Services REST Queue Protocol"
date: "2009-04-03T12:23:00+01:00"
comments: false
categories: 
---

<p><a href="http://vasters.com/clemensv/PermaLink,guid,413c6128-a6a6-4894-9cc9-701ffb674ab0.aspx">Clemens Vasters</a>:</p>

<blockquote>
<p>Here is the Service Bus Queue REST protocol. I apologize if this is a bit dry, but I want to give you the bare protocol facts first and will follow-up with code samples later. [&#8230;] The beauty of REST is that there’s a uniform interface. It’s all just GET, POST, PUT, DELETE, a set of resources, and a rigorous application of the RFC2616 / HTTP 1.1 rules. That doesn’t make the description particularly entertaining, but it does yield a pretty consistent interaction model.</p>
</blockquote>

<p>After a quick read, many things that I like, only a few that I don&#8217;t (read <a href="http://vasters.com/clemensv/PermaLink,guid,413c6128-a6a6-4894-9cc9-701ffb674ab0.aspx">Clemens&#8217;s description</a> first to make sense of these comments):</p>

<ul>
<li>Putting a password in the URI to get an identity token seems to expose information unnecessarily</li>
<li>Queue creation seems fine, even though I feel a little uneasy about wrapping this in an Atom entry</li>
<li>On the other hand, Atom seems reasonable considering you get an Atom feed from the queue&#8217;s &#8220;parent&#8221; resource</li>
<li>Very nice to see the use of link/rel to get to the detailed Queue URIs; it would be even better if the rel values themselves were URIs in an MS namespace</li>
<li>Queue renewal/deletion seem fine to me</li>
<li>Using &#8220;alternate&#8221; for the tail seems strange</li>
<li>&#8220;The queue&#8217;s tail endpoint accepts requests with any HTTP Content-Type and any HTTP method except GET, HEAD, and OPTIONS.&#8221; The tail does not accept GET. Why not? Can&#8217;t think of a reason. Also, I don&#8217;t get why any method is allowed. It seems to me a POST/PUT combination or an idempotent POST variant would be the way to go. </li>
<li>&#8220;DELETE performing a destructive read&#8221; – huh? What happens if I don&#8217;t get back a response? How can I retry (as I can&#8217;t tell whether I get the same or a different message)? Maybe it&#8217;s intended to be used only if you don&#8217;t care about losing messages.</li>
<li>The POST lock/delete approach, on the other hand, is very nice. Maybe it should be made idempotent, again e.g. using POE</li>
<li>&#8220;The Delete request is sent without any entity body and MUST have a Content-Length header that is set to zero (0)&#8221;; although my immediate reaction was to question whether DELETE ever carries a body, the HTTP spec indeed doesn&#8217;t say anything about this</li>
<li>&#8220;The DELETE and POST operation have a set of options that are expressed as query parameters appended to the queue&#8217;s head URI&#8221; - the wording is worse than the actual approach.</li>
</ul>

<p>All in all, pretty nice, and <em>much</em> better than Amazon&#8217;s <a href="http://docs.amazonwebservices.com/AWSSimpleQueueService/2008-01-01/SQSDeveloperGuide/">&#8220;Query&#8221; API</a> for SQS. </p>

<section class="comments">



<div class="comment" id="comment-1955">
On <a href="#comment-1955" title="Permalink to this comment">April  6, 2009  9:22 AM</a>, anonymous coward
said:
<p>Perhaps of interest</p>

<p><a href="http://wiki.amqp.org/spec:7" rel="nofollow">http://wiki.amqp.org/spec:7</a></p>

<p>This document describes RestMS, a RESTful Messaging Service that exposes AMQP networks as a set of resources clearly identified by URIs and each supporting the appropriate HTTP methods. RestMS is designed to interoperate with AMQP/0.9.1 and future versions of AMQP.</p>


<div class="comment" id="comment-1956">
On <a href="#comment-1956" title="Permalink to this comment">April  6, 2009  9:58 AM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks, this is the first time I heard about it and it looks very interesting.</p>


</section>

