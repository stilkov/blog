---
layout: post
title: "Link Relations and HTTP Header Linking"
date: "2009-01-05T20:09:00+01:00"
comments: false
categories: 
---

<p>I just stumbled across <a href="http://tools.ietf.org/id/draft-nottingham-http-link-header-03.txt">this RFC draft</a> by <a href="http://www.mnot.net/">Mark Nottingham</a>:</p>

<blockquote>
<p>This document specifies relation types for Web links, and defines a
registry for them.  It also defines how to send such links in HTTP
headers with the Link header-field.</p>
</blockquote>

<p>Interestingly, it suggests a nice balance between the need for registration of well-known types and the decentralization needs: In a rel=&#8217;xyz&#8217; attribute, &#8216;xyz&#8217; is interpreted as a URI that&#8217;s relative to http://www.iana.org/assignments/relation/; alternatively it can be an absolute URI, such as http://innoq.com/st/loves-it. I love it! Now can I please get the same thing for media types? </p>

<section class="comments">



<div class="comment" id="comment-1906">
On <a href="#comment-1906" title="Permalink to this comment">January  5, 2009  9:41 PM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<p>Web Gods speaking &#8230;</p>

<p>&#8220;Nice try. No. Would like Semantic Web instead?&#8221;</p>


<div class="comment" id="comment-1907">
On <a href="#comment-1907" title="Permalink to this comment">January  5, 2009 11:54 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>
said:
<p>Atom: taking over the world, one idea at a time. :-)</p>


<div class="comment" id="comment-1908">
On <a href="#comment-1908" title="Permalink to this comment">January  6, 2009 12:05 AM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<p>The quoted text in my comment should have been</p>

<p>“Nice try. No. Would you like Semantic Web instead?”</p>


<div class="comment" id="comment-1909">
On <a href="#comment-1909" title="Permalink to this comment">January  6, 2009  9:09 AM</a>, <a href="http://www.martin-probst.com" title="http://www.martin-probst.com" rel="nofollow">Martin Probst</a>
said:
<p>Subbu: if anything like the semantic web is ever to succeed, this will be the path to it: small, incremental steps that create value along the way.</p>


<div class="comment" id="comment-1910">
On <a href="#comment-1910" title="Permalink to this comment">January  6, 2009 12:57 PM</a>, <a href="http://mogsie.com/techie/" title="http://mogsie.com/techie/" rel="nofollow">Erik Mogensen</a>
said:
<p>Actually, Opera decodes the Link: headers as if they were HTML links.  It provides buttons in the UI to navigate well known HTML relations, like up, next, previous, first, last, top etc.  Link headers rule!</p>


</section>

