---
layout: post
title: "Comments on REST Design"
date: "2006-11-30T14:53:00+01:00"
comments: false
categories: 
---

<p><a href="http://blogs.concedere.net:8080/blog/discipline/links/?permalink=Links-11-28-2006.html">Someone I don&#8217;t know</a> linked to <a href="/blog/st/2006/06/30/rest_vs_soap_oh_no_not_again.html">one of my many SOAP-vs.-REST posts</a> and provided interesting comments:</p>

<blockquote>
<p>It doesn&#8217;t make sense that a customer should know her collection of orders </p>
</blockquote>

<p>I disagree; if I&#8217;m building a CRM system, viewing orders as subordinate resources to customers is definitely an option. But I think there&#8217;s &#8220;right&#8221; or &#8220;wrong&#8221; here, this is just the typical differences in design aesthetics.</p>

<blockquote>
<p>or that you should ask a customer (via POST) to create an order. This operation should be restricted to the /orders collection.</p>
</blockquote>

<p>Similar, but more understandable. Still, creating a new order for a customer can be seen as a subordinate resource &#8230; this makes me think a little more, though. </p>

<blockquote>
<p>I also think /order/{id} is incorrect and /orders/{id} would be more elegant. </p>
</blockquote>

<p>Absolutely correct, that was the way it was actually supposed to be (my mistake when creating the diagram).</p>

<blockquote>
<p>Maybe we shouldn&#8217;t use the word design. It&#8217;s terribly misleading. Maybe we should talk about &#8220;architectural styles&#8221; Then people might realize what&#8217;s happening is construction and not specification.</p>
</blockquote>

<p>I don&#8217;t really understand this comment, but I&#8217;ll note that &#8220;architectural style&#8221; can be just as misleading as many other pseudo-technical terms. (I know there&#8217;s the definition in Roy&#8217;s thesis, but that doesn&#8217;t mean people who <em>use</em> that term have read it.)</p>


