---
layout: post
title: "A Services View for REST Architectures"
date: "2007-09-16T23:39:00+01:00"
comments: false
categories: 
---

<p><a href="http://soundadvice.id.au/blog/2007/08/25#servicesView">Benjamin Carlyle</a> maps REST to UML:</p>

<blockquote>
<p>The services view consists of a object per service, client, URL Template, and content type. Each URL Template has exactly one aggregation relationship, linking to a particular service. Clients and services may have dependency relationships on URL templates, and we would expect each URL to have at least one dependent object. Each URL template has relevant GET, PUT, and DELETE methods as explicit UML operations with one specific content type parameter for PUT and a specific return content type for each GET. GET and PUT appear as many times as necessary to cover content negotiation supported by the URLs. Normally this means at most one PUT and at most one GET. Other supported content negotiation (eg language) could be incorporated in the same way. The Uniform Interface does not appear explicitly in the model, but can be inferred from the total collection of content types and URL methods.</p>
</blockquote>


