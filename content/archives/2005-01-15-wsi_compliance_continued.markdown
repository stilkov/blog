---
layout: post
title: "WS-I Compliance Continued"
date: "2005-01-15T00:07:00+01:00"
comments: false
categories: 
---

<p><a href="http://webpages.charter.net/chrisfer/2005/01/more-on-ws-i-profiles.html">More from Chris</a> regarding WS-I. I&#8217;ll have to elaborate a bit: In his <a href="http://webpages.charter.net/chrisfer/2005/01/applying-ws-i-basic-profile.html">first post</a>, Chris wrote:</p>

<blockquote>
<p>However, there is a twist to the use of extensibility points in WSDL bindings if you want to also claim conformance to the Simple Soap Binding Profile 1.0 as it constrains the WSDL binding to be only the WSDL SOAP binding, exclusive of any extensions. </p>
</blockquote>

<p>My understanding of this restriction (which may well be wrong) led me to a workaround, which I&#8217;ll have to describe in more detail. My goal is (logically) depicted in the following diagram:</p>

<p><img src="/blog/st/images/WS-I-1.jpg" border="o" vspace="4" height="333" hspace="4" alt="Ws-I-1" width="421" /></p>

<p>So what I&#8217;m intending to do is having a BP 1.1 compliant <code>wsdl:portType</code> with a) a BP 1.1 compliant <em>and</em> SSBP 1.0 compliant <code>wsdl:binding</code> and b) a binding to some proprietary (or at least non-compliant) transport. From Chris&#8217;s last post, I gather that I can&#8217;t claim conformance if not all of my bindings are compliant, so my idea would be to alleviate this with the following physical separation:</p>

<p><img src="/blog/st/images/WS-I-2.jpg" border="0" vspace="4" height="460" hspace="4" alt="Ws-I-2-1" width="434" /></p>

<p>This way, the physical (right-most) WSDL file could be delivered to and used by WS-I BP and SSBP compliant services, while we would still be able to have additional bindings. Clients who do not understand this binding would never even see it. The only downside would be that (IIRC) I would have to use different service names in the different physical WSDLs.</p>


