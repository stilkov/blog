---
layout: post
title: "WSDL 2.0 and REST"
date: "2008-09-16T08:03:00+01:00"
comments: false
categories: 
---

<p><a href="http://sanjiva.weerawarana.org/2008/09/blog-on-describing-rest-with-wsdl-20.html">Sanjiva points out</a> that after quite some time, somebody - in this case, Keith Chapman - <a href="http://www.keith-chapman.org/2008/09/restfull-mashup-with-wsdl-20-wso2.html">took up the challenge</a> and described <a href="/blog/st/2006/11/get_post_operations_and_rest.html">my example RESTful scenario</a> using WSDL 2.0. </p>

<p>Cool, and I do concede that WSDL 2.0 does a much better job than WSDL 1.1.</p>

<p>One of the interesting aspects is the <a href="http://mooshup.com/services/keith/RESTDemo?tryit#">try out page</a>, which is generated from the WSDL. Essentially this means that metadata is used to generate the self-descriptive form; somewhat backwards from a REST perspective, but understandable given that the goal was to have an external description in the first place. </p>

<p>Some questions:</p>

<ul>
<li>How does one one describe representation formats other than XML? </li>
<li>How is content negotiation supported?</li>
<li>How does one describe whether a URI parameter is a query parameter, path element, or matrix parameter?</li>
<li>Is there a way to describe response codes?</li>
<li>What about describing hypermedia? :-)</li>
</ul>

<p>I haven't had the time to look at the implementation in detail. </p>

<section class="comments">



<div class="comment" id="comment-1794">
On <a href="#comment-1794" title="Permalink to this comment">September 16, 2008  7:53 PM</a>, <a href="http://www.keith-chapman.org">Keith</a>

<a href="http://www.keith-chapman.org" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Stefan,</p>

<p>Check out the answers to these questions <a href="http://www.keith-chapman.org/2008/09/rest-and-wsdl-20-discussion-continues.html">on my blog</a>.</p>


</section>

