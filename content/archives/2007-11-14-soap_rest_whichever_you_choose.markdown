---
layout: post
title: "SOAP? REST?  Whichever you choose, WCF is the right framework"
date: "2007-11-14T11:31:00+01:00"
comments: false
categories: 
---

<p><a href="http://blogs.msdn.com/dotnetinterop/archive/2007/11/13/soap-rest-whichever-you-choose-wcf-is-the-right-framework.aspx">Dino Chiesa</a>:</p>

<blockquote>
<p>Sidenote: speaking of multiple interfaces for the same resource, check out what Amazon did with SQS:  there is a REST interface, a SOAP interface (described in WSDL) and a QUERY interface.   The REST interface is bona-fide REST.  It uses HTTP verbs like (GET DELETE PUT POST), and the URI corresponds or maps to the resource in question, for example the queue you&#8217;d like to operate on.   In WCF, to build this sort of interface, you would use a [WebInvoke] attribute on your service interface.  The QUERY interface on the Amazon SQS resource is, like the REST interface, always based on HJTTP, but QUERY is different than REST in that QUERY is always an HTTP GET, and specifies the object and verb in the URI.<br /><br />Example:<br /><br />The QUERY request to create a queue:<br /><br />GET /?Action=CreateQueue&amp;QueueName=Foo HTTP/1.1<br />Host: queue.amazonaws.com<br /> <br />
The REST request to create a queue:<br /><br />POST /?QueueName=Foo HTTP/1.1<br />Host: queue.amazonaws.com<br /><br />Some people confuse or conflate REST with HTTP QUERY, but Amazon certainly does not. It doesn&#8217;t help matters that there is no widely accepted or adopted name for the HTTP QUERY services interface. Amazon calls it HTTP QUERY or justr QUERY but as far as I am aware, that name is not widely used by other systems who expose similarly architected interfaces.</p>
</blockquote>

<p>How about &#8220;Abomination&#8221;? ;-)</p>

<section class="comments">



<div class="comment" id="comment-1521">
On <a href="#comment-1521" title="Permalink to this comment">November 14, 2007  4:13 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>
said:
<p>I like The Book’s name for these: “REST/RPC hybrid.”</p>


<div class="comment" id="comment-1522">
On <a href="#comment-1522" title="Permalink to this comment">November 19, 2007  3:28 PM</a>, <a href="http://wisdomofganesh.blogspot.com" title="http://wisdomofganesh.blogspot.com" rel="nofollow">Ganesh Prasad</a>
said:
<p>Stefan,</p>

<p>The use of an overloaded GET to cover all verbs should be called HTTP Command. It&#8217;s the Command pattern over HTTP.</p>

<p>Actually, I think if they restrict the use of this pattern to just the three idempotent verbs (GET, PUT and DELETE) and use the POST-Redirect-GET pattern with POSTS, it wouldn&#8217;t be a bad substitute for a purely RESTful system. It would just lack formality.</p>

<p>Ganesh</p>


<div class="comment" id="comment-1523">
On <a href="#comment-1523" title="Permalink to this comment">November 21, 2007 11:11 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Ganesh, it would not only lack formality, it would still be quite disastrous if GET&#8217;s safety guarantee was violated.</p>


<div class="comment" id="comment-1535">
On <a href="#comment-1535" title="Permalink to this comment">December 12, 2007  7:01 AM</a>, <a href="http://wisdomofganesh.blogspot.com" title="http://wisdomofganesh.blogspot.com" rel="nofollow">Ganesh Prasad</a>
said:
<p>(Sorry, I seem to have forgotten my userid/password, hence posting anonymously).</p>

<p>Stefan, I too am against overloading GET with any kind of update semantics, but we were talking about applications that are already designed that way (using overloaded GETs or the QUERY interface). That&#8217;s the &#8220;they&#8221; I was referring to in my post. I certainly didn&#8217;t mean to propose this scheme as an alternative to REST for new applications. It would definitely be disastrous.</p>

<p>Ganesh</p>


<div class="comment" id="comment-1536">
On <a href="#comment-1536" title="Permalink to this comment">December 12, 2007  7:53 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Fair enough; I did not (and still do not) really understand your previous comment, then, obviously.</p>


</section>

