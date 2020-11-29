---
layout: post
title: "WS-Addressing and HTTP"
date: "2005-08-19T00:24:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.markbaker.ca/2002/09/Blog/2005/08/18#2005-08-bindings">Mark Baker asks</a> how WS-Addressing and the SOAP 1.2 default HTTP binding might work together because of the usual confusion about the roles of and relations between wsa:Action, wsa:To, ImmediateDestination, WebMethod, Action, and HTTP address and headers; <a href="http://jim.webber.name/2005/08/18/9102e78a-7a59-4bec-9a59-4d21e65b854f.aspx">Jim Webber partly agrees</a>, but believes viewing HTTP as a transport protocol (which both agree it isn&#8217;t) is the right thing to do.</p>

<p>Since <a href="/blog/st/2005/01/30/mapping_wsaddressing_to_http.html">I last wrote about this some time ago</a>, I&#8217;ve changed my mind a little. For better or for worse, I no longer believe that the WS-* stack can be mapped cleanly to the Web Architecture (read: REST/HTTP); if you&#8217;re going down the WS-* road, you just have to view HTTP as a transport &#8212; I no longer believe there&#8217;s a way to integrate the two approaches. </p>

<p>I also believe that for a majority of use cases, the REST approach is superior. I guess that means Mark can put another notch in his belt &#8230;</p>

<section class="comments">

<div class="comment" id="comment-602">
On <a href="#comment-602" title="Permalink to this comment">August 19, 2005  6:28 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Cheers, buddy. 8-)</p>


<div class="comment" id="comment-603">
On <a href="#comment-603" title="Permalink to this comment">August 26, 2005  8:06 PM</a>, <a href="http://jacek.cz/blog/" title="http://jacek.cz/blog/" rel="nofollow">Jacek</a>
said:
<p>I wonder, though, if we need REST-Reliability, REST-Transactions etc&#8230; It seems that all business software needs these things and sure you can do reliable and transactional state transfer without standards, but it would be so much nicer (both for selling solutions and for easy interoperability) if these things were standardized.</p>

<p>Anyhow, nobody seems to be rushing to the market with REST toolkits which would be the major users of such standards, so maybe it doesn&#8217;t matter anyway.</p>


</section>

