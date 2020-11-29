---
layout: post
title: "Google Can Have Stupid Ideas, Too"
date: "2008-07-11T20:57:00+01:00"
comments: false
categories: 
---

<p>Case in point: <a href="http://code.google.com/apis/protocolbuffers/docs/overview.html">Protocol Buffers</a>:</p>

<blockquote>
<p>Protocol buffers are a flexible, efficient, automated mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages. You can even update your data structure without breaking deployed programs that are compiled against the &#8220;old&#8221; format.</p>
</blockquote>

<p>In-depth analysis from Ted Neward <a href="http://blogs.tedneward.com/2008/07/11/So+You+Say+You+Want+To+Kill+XML.aspx">here</a>.</p>

<section class="comments">



<div class="comment" id="comment-1753">
On <a href="#comment-1753" title="Permalink to this comment">July 11, 2008 11:49 PM</a>, <a href="http://www.oshineye.com" title="http://www.oshineye.com" rel="nofollow">ade</a>
said:
<p>Stefan,
Since you seem to believe that Protocol Buffers are &#8220;stupid&#8221; I&#8217;d appreciate it if you could indicate what you feel is wrong with them?</p>


<div class="comment" id="comment-1754">
On <a href="#comment-1754" title="Permalink to this comment">July 12, 2008  6:34 PM</a>, <a href="http://neuromancer.inf.um.es/blog/" title="http://neuromancer.inf.um.es/blog/" rel="nofollow">Diego Sevilla</a>
said:
<p>You know, the history of CS is reinventing itself&#8230; so why Google wouldn&#8217;t want to reinvent the data description mechanisms? </p>

<p>I also think XML (or YAML, if you want) is actually a better choice, but you know, they introduced that Google Apps thing, that uses a similar scheme to describe the data being managed by any G-app, so I guess this kind of compatibility is what they want.</p>

<p>Regards,
diego.</p>


<div class="comment" id="comment-1755">
On <a href="#comment-1755" title="Permalink to this comment">July 14, 2008  6:19 AM</a>, <a href="http://www.25hoursaday.com/weblog" title="http://www.25hoursaday.com/weblog" rel="nofollow">Dare Obasanjo</a>
said:
<p>I don&#8217;t think protocol buffers is dumb. I think positioning it as an alternative to XML was pretty dumb. </p>


<div class="comment" id="comment-1756">
On <a href="#comment-1756" title="Permalink to this comment">July 14, 2008  9:08 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>You are right, I was a bit too quick with my post. I&#8217;ve not done any in-depth analysis of Protocol Buffers to say whether in its domain it&#8217;s better or worse than alternatives such as RPC, CORBA, ASN.1, or BEEP; at best, it strikes me as an unnecessary re-invention (but I may be wrong). Positioning a format with out-of-band compiled contracts (i.e. shared code, not schema, in Don Box&#8217;s words) as an alternative to XML is what I consider stupid.</p>


<div class="comment" id="comment-1757">
On <a href="#comment-1757" title="Permalink to this comment">July 14, 2008 12:07 PM</a>, <a href="http://macstrac.blogspot.com/" title="http://macstrac.blogspot.com/" rel="nofollow">James Strachan</a>
said:
<p>PB is great stuff; like most things its what you do with it thats smart or dumb :). If you are building a web application, you&#8217;ll probably stick with XML or JSON but if you are building stuff inside the firewall its a great <em>self describing</em> binary message format when you want a performance boost.</p>


<div class="comment" id="comment-1771">
On <a href="#comment-1771" title="Permalink to this comment">July 24, 2008  3:57 AM</a>, jz
said:
<p>XML doesn&#8217;t have performance issues per se&#8230;
the peformance issues belong to XML parsers..</p>


</section>

