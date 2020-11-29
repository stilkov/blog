---
layout: post
title: "PATCH Method for HTTP"
date: "2007-06-25T23:25:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ietf.org/internet-drafts/draft-dusseault-http-patch-07.txt">James Snell</a>:</p>

<blockquote>
<p>This specification defines a new HTTP 1.1 [1] method PATCH that is<br />   used to apply partial modifications to a HTTP resource.  A new method<br />   is necessary to improve interoperability and prevent errors.  The PUT<br />   method is already defined to overwrite a resource with a complete new<br />   body, and MUST NOT be reused to do partial changes.  Otherwise,<br />   proxies and caches and even clients and servers may get confused as<br />   to the result of the operation.</p>
</blockquote>

<p>This is a revival of an expired Internet Draft RFC; it will be very interesting to see how much support this gets. Personally, I&#8217;m still undecided; I understand the theoretical value, but I wonder whether the cost of introducing a new verb isn&#8217;t prohibitive (which means that PUT or POST would have to be used).</p>

<section class="comments">



<div class="comment" id="comment-1374">
On <a href="#comment-1374" title="Permalink to this comment">June 25, 2007 11:44 PM</a>, <a href="http://www.snellspace.com" title="http://www.snellspace.com" rel="nofollow">James Snell</a>
said:
<p>Note that the way this is refactored in this draft, it would actually be very simple to use POST as a fallback alternative.  It&#8217;s not ideal, but it&#8217;s definitely possible.</p>


<div class="comment" id="comment-1375">
On <a href="#comment-1375" title="Permalink to this comment">June 26, 2007  9:58 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Seems like a good compromise - this would allow the &#8221;market&#8221; to decide which strategy is more appropriate.</p>


<div class="comment" id="comment-1376">
On <a href="#comment-1376" title="Permalink to this comment">June 26, 2007 10:02 AM</a>, <a href="http://asbjornu.myopenid.com/" title="http://asbjornu.myopenid.com/" rel="nofollow">quark</a>
said:
<p>POST will always be a viable (and in many circumstances; required) fallback method for PUT, DELETE and other non-idempotent HTTP methods. I still think PATCH has a real value on an read-write web (with emphasis on write), though.</p>

<p>When the payloads get large enough and the client&#8217;s changes only involve a minor spelling correction or something similar, a PATCH fits very neatly. What&#8217;s exciting is the amounts of cool MIME types you can stuff into a PATCH request, depending on the type of content you&#8217;re manipulating. For XML documents, &#8220;application/xquery&#8221; is a nice match. For plain text documents, &#8220;text/x-regex&#8221; is a good alternative. For JSON data, application/ecmascript might be a good fit. Et cetera.</p>


<div class="comment" id="comment-1377">
On <a href="#comment-1377" title="Permalink to this comment">June 28, 2007  5:30 AM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>Right up there with “never get involved in a land war in Asia” in the list of classic blunders is (or at least should be) “never build a mass market framework around a single notion of &#8216;entity&#8217;”.  I feel like extending HTTP before dealing with the coming REST bandwagon is ill-advised.  Out of the dust, just maybe, one or two new ideas about what a resource (or a subordinate) <em>is</em> &#8212; especially relative to a URL - might affect the future of HTTP.  If the need for PATCH is murky now, maybe we should float it after we know the upcoming needs.</p>


</section>

