---
layout: post
title: "HTML, GET and POST"
date: "2008-03-21T09:58:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.dehora.net/journal/2008/03/20/html5-obs/">Bill de hÓra</a>:</p>

<blockquote>
<p>The enormity of the consequences of HTML only allowing GET and POST cannot be overstated IMO.  It's maybe the most damaging technical decision in the web standards space - ever.  I see HTML forms as a root cause for the WS-* "everything goes over POST" debacle, a billion dollar industry mistake, at best.</p>
</blockquote>

<p>I've always wondered what's the history behing the GET/POST only restriction in HTML. Was there a good reason (or did something appear to be good reason) for doing so? I can't think of one. </p>

<section class="comments">



<div class="comment" id="comment-1665">
On <a href="#comment-1665" title="Permalink to this comment">March 21, 2008  4:52 PM</a>, <a href="http://limpet.net/mbrubeck/" title="http://limpet.net/mbrubeck/" rel="nofollow">Matt Brubeck</a>
said:
<p>HTTP 1.0 defined only <a href="http://www.w3.org/Protocols/HTTP/1.0/draft-ietf-http-spec.html#Method" rel="nofollow">GET, POST, and HEAD</a>.  By the time HTTP 1.1 standardized other methods, HTML was probably too bogged down in the browser wars to adapt.</p>


<div class="comment" id="comment-1666">
On <a href="#comment-1666" title="Permalink to this comment">March 22, 2008  5:45 PM</a>, Marcus
said:
<p>O how enjoyably retarded.</p>

<p>How about using a RESTful explanation for things to explain why. Or maybe another useful buzzword, &#8220;YAGNI&#8221;, I dunno, doesn&#8217;t matter, cuz, gee wow, looks like whoever whenever made the right choices for the web to be the screaming success that it is.</p>

<p>Seriously, what you&#8217;re doing here is postmortem on the web. The web, people. The web. You&#8217;re saying something was wrong when the web was implemented in browses, and now all we&#8217;ve got to show for it is&#8230;.the web.</p>

<p>Wow.</p>


<div class="comment" id="comment-1667">
On <a href="#comment-1667" title="Permalink to this comment">March 22, 2008  8:00 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Not entirely sure what you intend to say (except for insulting me on my own blog). I didn&#8217;t even say something was wrong, I just wondered why the HTTP and HTML standards don&#8217;t match. </p>

<p>Luckily, Matt&#8217;s comment provides an answer.</p>


<div class="comment" id="comment-1668">
On <a href="#comment-1668" title="Permalink to this comment">March 23, 2008 12:00 AM</a>, <a href="http://www.ebpml.org" title="http://www.ebpml.org" rel="nofollow">jean-jacques dubray</a>
said:
<p>for me it looks pretty obvious. Could you imagine the mess it would be if people could mess with PUT and DELETE at will?</p>

<p>JJ-</p>


<div class="comment" id="comment-1669">
On <a href="#comment-1669" title="Permalink to this comment">March 23, 2008 10:26 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>@JJ: Why would the mess be any worse than when using POST?</p>


</section>

