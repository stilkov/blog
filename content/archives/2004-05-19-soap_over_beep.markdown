---
layout: post
title: "SOAP over BEEP"
date: "2004-05-19T21:13:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.faqs.org/rfcs/rfc3288.html">RFC3288</a> describes how to do SOAP over <a href="http://www.beepcore.org/beepcore/home.jsp">BEEP</a>, and <a href="http://bitworking.org/news/SOAP_over_Beep">Joe Gregorio</a>  points to IBM Alphaworks&#8217; implementation, <a href="http://www.alphaworks.ibm.com/tech/beeplite">BeepLite</a>.  I wonder how this performs? Maybe a custom BEEP transport for Systinet&#8217;s Java Server would allow for some nice comparative studies &#8230;</p>

<section class="comments">

<div class="comment" id="comment-294">
On <a href="#comment-294" title="Permalink to this comment">May 19, 2004 10:26 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Performance?  Excellent question!  I bet it performs like a dog, since it&#8217;s doing in three layers (SOAP, BEEP, application interface) what most application layer protocols do in one.  It could be improved by building a combined SOAP/BEEP layer, but I&#8217;d bet money that it&#8217;d never do as well, in the general case, as a single dedicated-to-a-single-application application protocol.</p>


</section>

