---
layout: post
title: "RESTful UDDI"
date: "2004-04-07T13:12:00+01:00"
comments: false
categories: 
---

<p><a href="http://radovanjanecek.net/blog/archives/000075.html">Radovan</a> writes about increased demand for UDDI, and interestingly enough suggests that Systinet is probably going to REST-enable their registry. </p>

<p>Ever since reading <a href="http://webservices.xml.com/pub/a/ws/2002/02/06/rest.html">Paul Prescod&#8217;s REST article</a>, where he took UDDI as an example case, I felt that this would be a great idea. With UDDI V3&#8217;s optional GET binding (which Systinet supports), it&#8217;s possible to get at every UDDI entity via a simple HTTP GET. Extending that to support PUT should be easy, and the publishing API is pretty REST-like, anyway.</p>

<p>I like UDDI &mdash; as long as we&#8217;re not talking about the Internet scale use case (the UBR). In a company-internal or extranet-style SOA, the registry is an essential component.</p>


