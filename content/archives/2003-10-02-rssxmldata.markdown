---
layout: post
title: "RSS/XML-Data"
date: "2003-10-02T23:08:00+01:00"
comments: false
categories: 
---

<p>There's <a href="http://radio.weblogs.com/0113297/2003/10/01.html#a236" title="Jeremy Allaire's Radio">a proposal</a> from Jeremy Allaire to use RSS in combination with XML-RPC to create a new format.<br />
Now, I may be (and probably am) missing a lot of subtle issues here, but my understanding is that the goal is to extend RSS (via namespaces) with a way to transport arbitrary typed data. By this I mean that the XML that is sent along doesn't follow a schema specific to the data being sent, but rather a generic (or meta) schema, very similar to the way RDF is built on top of XML, but doesn't really use it. (So the namespace is something like "generic-xml-data-format" instead of "order" or "bookdescription" or what-have-you).<br />
If this is true, I believe that it's another case of an illusion that seems to be floating around quite a lot - that you can solve the problems of applications communicating with each other by using some sort of generic format, while in reality it only shifts the work one meta level up. So the protocol implementation won't deal with specific types, but instead your application will do it. And this is innovation? I don't think so.</p>

