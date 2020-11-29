---
layout: post
title: "WS-Typing or: 404 and #doesNotUnderstand/method_missing"
date: "2007-05-05T19:41:00+01:00"
comments: false
categories: 
---

<p>An interesting analogy came up in a conversation with one of my favorite (link-)bloggers, <a href="http://www.holgerarendt.de/uncommented/" title="holgerarendt.de">Holger Arendt</a> (whom I finally met in person this week): </p>

<p>The SOAP/WSDL/WS-* SOA view of the world is like a statically typed programming language, i.e. C++ or Java &#8212; everything is pre-defined, contracts govern everything, nobody can interact without following formal rules … and ideally, everything violating the rules (and policies) will get caught before even going into production.</p>

<p>RESTful HTTP is like a dynamic programming language (i.e. Smalltalk, Ruby, Python, etc.) &#8212; you&#8217;ll only find out at runtime whether things actually work together, and might well run into errors that would have been caught by a rigorous (and strict) rule-checking process up front; but on the other hand, you have a much more dynamic system, where you can add and remove and change stuff on the fly, and even have some means to react to errors dynamically.</p>

<p>While REST and the Web accepts that things are not necessarily as clean and correct as you expect them to be, the contract-driven SOA view relies on a big and consistent plan. And maybe similarly to the view of dynamic vs. static languages, we&#8217;ll just have to accept that there is never going to be any sort of agreement.</p>

<section class="comments">



<div class="comment" id="comment-1273">
On <a href="#comment-1273" title="Permalink to this comment">May  6, 2007  2:35 PM</a>, <a href="http://www.dulciana.com" title="http://www.dulciana.com" rel="nofollow">Mike Glendinning</a>
said:
<p>Agreed, and with a bit more courage and trust in your convictions, you might even say more, perhaps even in front of (potential) clients ;-)</p>

<p>Just one point: contracts between components/services can and need to be precise, whether in a WS/SOA or REST world, but they need not be unnecessarily restrictive.</p>

<p>For example, I can declare a very strict and precise service contract that says that all information must be encoded using XML 1.0 and sent/received using HTTP 1.1 and that nothing else (at all) is allowed. That might be useful, but it doesn&#8217;t really restrict the type and nature of the information being exchanged, because XML 1.0 gives me sufficient flexibility in that regard.</p>

<p>The fundamental (and hard) part of any design (or architecture) problem is identifying which aspects of the system need to be defined exactly (so that useful progress can be made) and which aspects require flexibility for change (so you won&#8217;t be hindered in the future).</p>

<p>This is, IMHO where REST scores most strongly against WS/SOA. With WS/SOA, we do not (yet) have a series of patterns or constraints [as the REST guys would call them] that can usefully guide the system design process.</p>

<p>-Mike.</p>

<p>P.S. As an experienced data modeller, you will also know that whatever design choices you make (in terms of exactness and flexibility) will be correct for certain uses/changes of the system, but completely wrong for others. There is never, sadly just one &#8220;correct&#8221; answer to any design problem and what is correct today might turn out to be wrong tomorrow.  Bill Kent&#8217;s &#8220;marriage&#8221; problem is one (trivial) example&#8230;</p>


<div class="comment" id="comment-1274">
On <a href="#comment-1274" title="Permalink to this comment">May  6, 2007  4:05 PM</a>, Asbjørn Ulsberg
said:
<p>You&#8217;re right about the analogy. However, what irks most RESTafarians about the SOAP/WS-*/XSD stack is not that it&#8217;s statically typed (I consider myself a RESTafarian, but still love statically typed languages like C#), but that it disregards HTTP as a protocol and only uses it as an extremely dum transport mechanism. Having to use POST to GET information pushes all the wrong buttons for me. You have to understand HTTP to GET it, though. Pun intended. ;-)</p>


<div class="comment" id="comment-1275">
On <a href="#comment-1275" title="Permalink to this comment">May  6, 2007  8:12 PM</a>, <a href="http://www.holgerarendt.de/uncommented" title="http://www.holgerarendt.de/uncommented" rel="nofollow">holger</a>
said:
<p>The automatic-wsdl-for-rest (wadl2wsdl.xslt) idea was way more funny ;-)</p>


<div class="comment" id="comment-1276">
On <a href="#comment-1276" title="Permalink to this comment">May 16, 2007 11:29 AM</a>, <a href="http://www.base4.net/blog.aspx?ID=413" title="http://www.base4.net/blog.aspx?ID=413" rel="nofollow">Alex James</a>
said:
<p>Stefan made an excellent analogy about a week ago&#8230;</p>

<p>&#8230; That is so right on the money&#8230;</p>

<p>and more importantly on the internet you have to acknowledge a reality, namely things will change and you have no control&#8230; so you better have a dynamic way of dealing with the web, and SOAP isn&#8217;t it&#8230;</p>


</section>

