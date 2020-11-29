---
layout: post
title: "REST Popularity"
date: "2004-09-29T23:13:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.markbaker.ca/2002/09/Blog/2004/09/29#deliciousdistobj.ongoing_____Fee...lurry">Mark Baker</a> agrees with <a href="http://www.tbray.org/ongoing/When/200x/2004/09/28/FeedReadingNews">Tim Bray</a> that the barrier to entry with REST-based apps is absurdly low. I think it&#8217;s worth mentioning though that I believe this has nothing to do with REST design principles, but simply with the fact that HTTP client libraries are available in every environment &#8230; as soon as the same is true for SOAP-over-whatever (which is inevitable), entry will be just as easy.</p>

<p>Nobody except the protocol lawyers cares whether Amazon&#8217;s XML/HTTP interface follows sound REST principles or not.</p>

<section class="comments">

<div class="comment" id="comment-369">
On <a href="#comment-369" title="Permalink to this comment">September 30, 2004  1:16 AM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>How very transport-centric of you, Stefan. 8-)  When you use an HTTP library, you&#8217;re agreeing to use a standard network interface, and that automatically binds you closer to everybody else who made that same decision than does SOAP, since SOAP defines no standard network interface.  SOAP alone gets you nothing more than transport; the ability to move bits between, say, TCP/IP stacks.  HTTP alone gets you transfer; the ability to request and submit documents.  It&#8217;s night and day, really.  Now, if you&#8217;d have said WS-Transfer libraries, I would have agreed with you.</p>

<p>P.S. Amazon better care about REST constraints if they have any interest in security, scalability, performance, etc.., which I can only assume they do.  That doesn&#8217;t mean they need to follow all of them in all cases, but it darn well does mean that they need to understand the tradeoffs they&#8217;re making when they disregard a constraint.</p>


<div class="comment" id="comment-370">
On <a href="#comment-370" title="Permalink to this comment">September 30, 2004 11:35 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hi Mark - You are of course right that Amazon should care (and probably does). I just wanted to stress that the popularity <em>on the user side</em> has to do with the ease of use, which is arguably not so much due to the architectural benefits, but rather the ubiquity of libraries. </p>

<p>I totally agree with regards to SOAP alone not being a comparable solution &#8212; that&#8217;s why I wrote &#8220;SOAP-over-whatever&#8221;.</p>


<div class="comment" id="comment-371">
On <a href="#comment-371" title="Permalink to this comment">September 30, 2004  2:05 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>But it&#8217;s not SOAP-over-whatever which is comparable, it&#8217;s whatever-over-SOAP, e.g. WS-Transfer.</p>


</section>

