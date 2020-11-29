---
layout: post
title: "REST, RDF and Qi4j"
date: "2008-08-15T13:47:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.jroller.com/rickard/entry/qi4j_rest_entitystore_and_sparql">Rickard Öberg</a> writes about the upcoming release of <a href="http://www.qi4j.org/">Qi4j</a>:</p>

<blockquote>
<p>What I have done now is to implement a REST-backend which allows you to access Entity-state through HTTP. Basically, the state of each Entity can be accessed through the URL /qi4j/entity//, which will return the state as RDF/XML, along with HTTP headers like version and last-modified timestamps. I've then implemented a client-side EntityStore which accesses this REST-backend, so that for someone writing Java clients it is all transparent that the state is being accessed from some remote HTTP-server. When state has been changed it is PUT back to the server, with version checks being performed properly. The state can then be stored using whatever EntityStore is configured on the server, such as Neo4j, Amazon S3, JDBM, or even a database (for those who are so inclined).</p>
</blockquote>


