---
layout: post
title: "Resource-oriented Architectures"
date: "2004-07-01T12:12:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ebpml.org">JJ</a> follows up, in <a href="/blog/st/2004/06/28/resources.html#comments">a comment</a> here and on his site (*), on our discussion about the resource-oriented aspects of REST; I&#8217;m a bit late to respond, but here we go.</p>

<p>First of all, let me try to give a quick definition of REST as I have understood it (if you&#8217;re new to REST, a good place to start is the very nice  <a href="http://www.xfront.com/REST-Web-Services.html">introduction</a> by Roger Costello; the reference work is <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm">Roy Fielding&#8217;s disseration</a>). REST is an architectural style, and thus expressible with different technologies; the most important technology used to implement REST is HTTP. Let&#8217;s assume we&#8217;re  doing REST on HTTP for the sake of the argument. </p>

<p>The first key idea is to have something called <em>resources</em>. A resource can be an instance of any sort of concept; it might identify a persistent, real-world entity such as a house that is to be mortgaged, something more virtual, but still persistent, such as an order, or something relatively transient, such as a shopping cart. The main idea is that you can identify a resource with a common addressing scheme (URIs in HTTP).</p>

<p>The next key characteristic specifies how you interact with resources, and in REST this is done using a <em>uniform</em> API. This means that all of the resources support a common set of operations; in the case of HTTP, these operations will be GET, PUT, POST, and DELETE. All resources are accessed by means of these common verbs, and all of the desired behavior needs to be expressed using these verbs only.</p>

<p>Another issue is that you access resource <em>representations</em>, which are transfered back and forth between client and server.  Your server does not (need to) know anything about your clients; it&#8217;s stateless, and a client must not rely on the server to maintain any intermediate results in a conversation. </p>

<p>Finally, a resource representation can (and usually will) also include links to other resources, and when the client follows these links, it transitions into another state.</p>

<p>Of these characteristics, the uniform interface is often mentioned as the most important one; I don&#8217;t find this very convincing since I can easily build a uniform interface as a special case with a technology that enables me to create application specific  interfaces (with the obvious downside of not being standardized). </p>

<p>But what is far more important to me is the first concept &#8212; the addressable resource. This is why I consider REST a resource-oriented architecture, as opposed to a service-oriented architecture. And that was the point of my <a href="/blog/st/2004/06/28/resources.html">original comment</a> on <a href="http://www.ebpml.org/x-oa.htm">JJ&#8217;s post</a> &#8212; Paul Prescod uses the term &#8220;data-centric&#8221; to describe what I call resource-oriented, and ebXML BPSS (which I admittedly don&#8217;t know in detail) clearly does not follow this pattern.</p>

<p>JJ raises another issue: how to describe contracts in a RESTful application. The short answer is that you usually don&#8217;t, since the contract is already specified by HTTP and its verbs. The longer answer is that you could describe it either using prose in an HTML page (maybe even using <a href="http://www.rddl.org/">RDDL</a>? not sure), or even <a href="http://www.pacificspirit.com/blog/2004/06/22/wsdl_20_http_binding_example">WSDL</a>.  </p>

<p>(*) I can&#8217;t find the document &#8212; I see the content in the RSS feed, but the link points to the wrong place. I&#8217;ll update once I am able to find it &#8230;</p>


