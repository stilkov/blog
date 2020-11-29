---
layout: post
title: "S/MIME is not for Mail Only"
date: "2007-10-08T08:03:00+01:00"
comments: false
categories: 
---

<p><a href="http://blog.jclark.com/2007/10/integrity-without-confidentiality.html">James Clark</a> thinks there&#8217;s a real need for a cache-friendly way to sign HTTP responses &#8212; to get the benefits of HTTP caching while ensuring integrity. <a href="http://intertwingly.net/blog/2007/10/07/Secure-Business-Data-Interchange-Using-HTTP">Sam Ruby</a> points to <a href="http://www.ietf.org/rfc/rfc4130.txt">RFC 4130</a>, which explains how to combine S/MIME with HTTP:</p>

<blockquote>
<p>The data is packaged using standard MIME structures.  Authentication and data   confidentiality are obtained by using Cryptographic Message Syntax   with S/MIME security body parts.  Authenticated acknowledgements make   use of multipart/signed Message Disposition Notification (MDN)   responses to the original HTTP message.</p>
</blockquote>


