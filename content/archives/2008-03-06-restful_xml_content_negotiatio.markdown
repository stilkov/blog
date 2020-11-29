---
layout: post
title: "RESTFul XML content negotiation « Angry Bill"
date: "2008-03-06T07:41:00+01:00"
comments: false
categories: 
---

<p><a href="http://bill.burkecentral.com/2008/03/05/restful-xml-content-negotitation/">Bill Burke</a> picks up the <a href="/blog/st/2008/02/decentralizing_media_types.html">decentralized media type idea</a>:</p>

<blockquote>
<p>I saved the best for last. The final idea was to embed format information within MIME properties:<br /><br />application/xml; schema="http:/..."<br /><br />application/octet-stream; data-format=java<br />Use a registered MIME type, but append extra format information as a MIME property. I did a test on this with Firefox and Safari and it doesn’t screw up the viewing. So for me, MIME properties it is! I would be interested in links to other thoughts on this.</p>
</blockquote>

<p>I don't know whether the set of properties one can add to an existing MIME type is fixed -- but if not, this seems like an interesting alternative.</p>

<section class="comments">



<div class="comment" id="comment-1643">
On <a href="#comment-1643" title="Permalink to this comment">March  6, 2008 12:24 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>

<a href="http://plasmasturm.org/" class="commenter-profile"></a>
said:
<p>Whether or not it is fixed depends on the MIME type’s registration. In most cases, though, it is.</p>


<div class="comment" id="comment-1644">
On <a href="#comment-1644" title="Permalink to this comment">March  7, 2008  5:33 AM</a>, <a href="http://bill.burkecentral.com" title="http://bill.burkecentral.com" rel="nofollow">Bill Burke</a>
said:
<p>Aristotle, isn&#8217;t the bigger question is a generic client going to care about an unknown or non-standard property?</p>


</section>

