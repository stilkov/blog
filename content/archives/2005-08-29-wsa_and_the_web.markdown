---
layout: post
title: "WS-A and the Web"
date: "2005-08-29T22:57:00+01:00"
comments: false
categories: 
---

<p>Ouch, <a href="http://www.cafeconleche.org/#news2005August23">that</a> must have hurt:</p>

<blockquote>
<p>Web Services Addressing is trying to define an addressing scheme that can work over HTTP, SMTP, FTP, and any other protocol you can imagine. However, each of these protocols already have their own addressing systems. Developers working with these protocols don&#8217;t want and don&#8217;t need a different addressing system that&#8217;s marginally more compatible with some protocol they&#8217;re not using in exchange for substantially less compatibility with the protocol they are using. Besides nobody&#8217;s actually doing web services over anything except HTTP anyway. Doesn&#8217;t it just make more sense to use the well understood, already implemented debugged HTTP architecture for this instead of inventing something new?</p>
</blockquote>

<p>This is taken from Elliote Rusty Harold&#8217;s link to the WS-Addressing spec&#8217;s becoming a candidate recommendation. Ted Neward has <a href="http://blogs.tedneward.com/2005/08/26/WSAddressing+The+Complexitytopower+Ratio+And+REST.aspx">a thoughful response</a>, arguing that ERH is completely missing the point. I think it&#8217;s just a matter of perspective: for <em>Web</em> scenarios, nobody uses anything but HTTP anyway, and for the vast majority of company-internal use-cases, I&#8217;d consider HTTP to be a much better solution than some vendor&#8217;s proprietary messaging middleware. But even if one assumes that HTTP is going to become the protocol of choice for EAI as well, WS-A still has merit to support asynchronous processing of SOAP messages.  </p>

<p>Dave Orchard, in an <a href="http://lists.w3.org/Archives/Public/www-tag/2005Jun/0026.html">email to the WWW-TAG mailing list</a> that ERH <a href="http://www.cafeconleche.org/quotes2005.html#quote2005August21">linked to</a>, noted that</p>

<blockquote>
<p>Effectively, the Web services architecture is a separate architecture
from the Web architecture [&#8230;] This separation, based upon SOAP and WSDL, is growing with the expected
widespread adoption of WS-Addressing.     </p>
</blockquote>

<p>As I <a href="/blog/st/2005/08/19/wsaddressing_and_http.html">wrote before</a>, I no longer believe the two architectures can be (cleanly) aligned. But so what &#8212; healthy competition is a guarantee for movement, and fuels a decent amount of weblog entries &#8230;</p>

<section class="comments">

<div class="comment" id="comment-610">
On <a href="#comment-610" title="Permalink to this comment">August 30, 2005 12:51 PM</a>, <a href="http://jacek.cz/blog/" title="http://jacek.cz/blog/" rel="nofollow">Jacek</a>
said:
<p>Hi, seems like trackback ping didn&#8217;t work for some reason, please see my reply post at <a href="http://jacek.cz/blog/archives/000068.html" rel="nofollow" /><a href="http://jacek.cz/blog/archives/000068.html" rel="nofollow">http://jacek.cz/blog/archives/000068.html</a> . 8-)</p>


</section>

