---
layout: post
title: "Simple Reliable POSTing"
date: "2007-06-16T21:21:00+01:00"
comments: false
categories: 
---

<p><a href="http://bitworking.org/news/201/RESTify-DayTrader">Joe Gregorio</a>:</p>

<blockquote>
<p>[I]nstead of creating a ticket that goes into the data to be submitted, we can use the ticket to construct a &#8216;pending_order&#8217;, the URI of which the client will PUT the order to. Upon a successful PUT the pending_order will be moved to the open_orders collection and the client can be redirected to its location via a (303 See Other) response. [&#8230;] This is better since PUT is idempotent and you can keep trying until the request is successful. Once the PUT is successful the client is redirected to get the newly created resource via GET from the URI returned in the Location: header of the response.</p>
</blockquote>

<p>Very simple and elegant solution.</p>

<p>Go read <a href="http://bitworking.org/news/201/RESTify-DayTrader">the whole thing</a>, it&#8217;s great; I&#8217;ll write up something longer about it for InfoQ.</p>

<section class="comments">



<div class="comment" id="comment-1370">
On <a href="#comment-1370" title="Permalink to this comment">June 16, 2007 11:46 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>
said:
<p>You got caught out by Markdown: Markdown thinks you want to emphasise the run of text between the underscores in the two mentions of pending_order in your quote. You need to either put pending_order in backticks or backslash the underscore.</p>


<div class="comment" id="comment-1371">
On <a href="#comment-1371" title="Permalink to this comment">June 17, 2007  9:21 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks, fixed.</p>


</section>

