---
layout: post
title: "More on WS-I Profiles"
date: "2005-01-14T16:25:00+01:00"
comments: false
categories: 
---

<p>As I had hoped, <a href="http://webpages.charter.net/chrisfer/blog.html">Chris Ferris</a>, who is extremely knowledgeable about WS-I Basic Profile (which somehow fails to surprise me, since he&#8217;s one of the editors), <a href="http://webpages.charter.net/chrisfer/2005/01/applying-ws-i-basic-profile.html">has some answers</a> related to <a href="/blog/st/2005/01/13/applying_wsi_basic_profile.html">yesterday&#8217;s WS-I questions</a>. </p>

<p>He explains that although there are some extensibility points within the <a href="http://www.ws-i.org/Profiles/BasicProfile-1.1.html">Basic Profile 1.1</a>, the <a href="http://www.ws-i.org/Profiles/SimpleSoapBindingProfile-1.0.html">Simple SOAP Binding Profile 1.0</a> forbids any non-profile compliant bindings. His suggestion is to get around this by claiming only Basic Profile conformance. If my reading of the spec is correct, another workaround would be to separate the WSDL into its abstract part (schemas, messages, operations and portTypes) and into one or more concrete bindings. The abstract part would be BP 1.1 compliant, the concrete part would claim conformance to the Binding Profile (where applicable). The only downside I can see is that this way, it will not be possible to use a single <code>wsdl:service</code> with multiple <code>wsdl:port</code> elements. But that is something I&#8217;d be willing to accept.</p>

<blockquote>
<p>Also, if there will be use of SOAP headers, then in order to enable interoperability, it might be best to avoid use of the SOAP mustUnderstand attribute if at all possible. Construct the service such that it can function without the headers. Thus, clients that don&#8217;t support the extensions, can still access the service and clients that do support the extensions can take advantage of the increased functionality, etc. Just a thought.</p>
</blockquote>

<p>This is of course excellent advice. I agree in principle, with the slight difference that where certain header is <em>required</em> to be processed (from a functional point of view &#8212; again, the transaction context is a good example), it should be indicated with the <code>mustUnderstand</code> attribute. After all that&#8217;s what it&#8217;s for. But if course this should be used as restrictively as possible.</p>


