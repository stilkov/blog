---
layout: post
title: "Service Component Architecture"
date: "2005-11-30T20:52:00+01:00"
comments: false
categories: 
---

<p>IBM, Oracle, BEA, SAP, IONA and others have published <a href="http://www.oracle.com/technology/tech/webservices/standards/sca/index.html">version 0.9 of SCA</a> &#8212; the Service Component Architecture. I&#8217;ve just taken a quick look at the <a href="http://www.oracle.com/technology/tech/webservices/standards/sca/pdf/SCA_White_Paper1_09.pdf">whitepaper</a>, and I have to admit I&#8217;m severely underwhelmed.</p>

<p>Just as an example, take a look at this paragraph:</p>

<blockquote>
<p>SCA will support REST style Web services by supporting a REST Web services
binding.  SCA components can implement REST style Web services by means of
offering their services using the REST binding.  Similarly, SCA components can
invoke REST style Web services through the REST binding.  Other than a change of
binding, using REST Web services is similar to the use of Web services using SOAP
and WSDL bindings.</p>
</blockquote>

<p>Wow, take a look at that &#8212; REST is just an implementation detail. That&#8217;s great! I have a great idea &#8212; why don&#8217;t we just invent a JAX-RPC-to-REST-adapter? Excuse me while I&#8217;m gone, I&#8217;m busy getting rich.</p>

<section class="comments">

<div class="comment" id="comment-725">
On <a href="#comment-725" title="Permalink to this comment">December  1, 2005  2:09 AM</a>, Oliver Wolf
said:
<p>After skimming over the whitepaper and browsing the more detailed specs on IBM&#8217;s website I&#8217;m still wondering what all this is about. Is SCA a novel view on SOA or is it just JBI for the rest of us? If the latter is true I&#8217;m a bit confused to see three of JBI&#8217;s main proponents &#8212; Oracle, SAP and IONA &#8212; get involved with SCA.</p>


</section>

