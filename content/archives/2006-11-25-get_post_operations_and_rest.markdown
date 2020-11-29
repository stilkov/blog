---
layout: post
title: "GET, POST, Operations and REST"
date: "2006-11-25T09:47:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.bloglines.com/blog/sanjiva?id=165">Sanijiva</a> defends Axis2&#8217;s REST support. I&#8217;m still not convinced. One issue:</p>

<blockquote>
<p>For those of you who haven&#8217;t read the above, their point is that Axis2 allows one to offer a GET binding (with data going in query parameters) to any operation of the service.  The right thing to do, of course, is only offer a GET binding to safe operations and not to everything. The others should get a POST binding.</p>
</blockquote>

<p>It seems to me that the right thing would be to get rid of the <em>operations</em> (or map them to the HTTP verbs, which is essentially the same thing as getting rid of them). I continue to believe that there is <a href="/blog/st/2006/06/30/rest_vs_soap_oh_no_not_again.html">a fundamental and non-mappable difference</a> between a REST approach and a WSDL approach. And the WSDL 2.0 HTTP binding, unless I&#8217;m mistaken, seems to suffer from the same problem. Unless someone cares to show me what the WSDL 2.0 description of <a href="/blog/st/images/resources-tm.jpg">this</a> would be?</p>

<p>Something can be &#8220;POX&#8221; without being REST &#8212; if Axis2&#8217;s documentation called it that, I&#8217;d shut up (on this issue, at least).</p>

<section class="comments">

<div class="comment" id="comment-1792">
On <a href="#comment-1792" title="Permalink to this comment">September 15, 2008  7:06 PM</a>, <a href="http://www.keith-chapman.org">Keith</a>

<a href="http://www.keith-chapman.org" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Hi Stefan,</p>

<p>Sorry I missed this blog post and I&#8217;ve missed it for a long time, but better late that never. I&#8217;ve written a WSDL 2.0 doc for the scenario you have discribed you find find the details in my blog at <a href="http://www.keith-chapman.org/2008/09/restfull-mashup-with-wsdl-20-wso2.html" /><a href="http://www.keith-chapman.org/2008/09/restfull-mashup-with-wsdl-20-wso2.html">http://www.keith-chapman.org/2008/09/restfull-mashup-with-wsdl-20-wso2.html</a>, It ended up being a bit of a lengthy post. I would like to know your comments on it.</p>


</section>

