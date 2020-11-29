---
layout: post
title: "QCon SF 2009: Adam Wiggins, Architecting for the Cloud: Horizontal Scalability via Transient, Shardable, Share-Nothing Resources"
date: "2009-11-20T01:30:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Adam Wiggins's talk about Architecting for the Cloud: Horizontal Scalability via Transient, Shardable, Share-Nothing Resources at QCon SF 2009</p>

<ul>
<li>Heroku is a platform to transparently run existing Ruby and Ruby on Rails applications in the cloud</li>
<li>Heroku has over 40,000 applications, not bad for a startup with 50 guys</li>
<li>Automatically scaling applications without code changes "scale my app" slider</li>
<li>A lot of it due to enabling factors - virtualization as a service</li>
<li>Moore's law at an end – buying a larger box is no longer a good answer</li>
<li>Scaling out instead scaling up</li>
<li>First ingredient: Shardable resources</li>
<li>Resource examples: Database, Caching, HTTP Router, Message Bus</li>
<li>Making these resources horizontally scalable means making the app scalable without changing it</li>
<li>memcached – the father of all modern shardable resources</li>
<li>Hashtable in the sky</li>
<li>memcached built by the LiveJournal guys - one of the first big Web properties</li>
<li>Facebook runs 800 memcached servers supplying 28 TB of memory - all of these appear as one resource to the application</li>
<li>Why is it easy to scale out memcached so widely while one can't do that with MySQL?</li>
<li>Principles: Transient, Shardable, Share-nothing</li>
<li>Transient: any node in the memcached cluster can be lost</li>
<li>Shardable: Client lookup by "hashring": load distributed by clients</li>
<li>Share nothing: Nodes are unware of each other</li>
<li>Is memcached cheating? after all it doesn't really have any state</li>
<li>No - the same approach can be applied to any type of resource</li>
<li>CouchDB: document database with eventual consistency </li>
<li>Multiversion concurrency control instead of locking - comparable to a distributed source control system</li>
<li>CouchDB is a transient, shardable, share-nothing DB</li>
<li>http://books.couchdb.org/relax/ - free copy of the book draft available, recommended as a description of the new kind of architecture</li>
<li>Next example: Hadoop. Flightcaster, Heroku customer, does massive processing using Hadoop</li>
<li>Redis - basically memcached with persistence; shards with hashring; lists and sets; extremely fast and lightweight</li>
<li>Varnish - like Squid, but horizontally scalable; combine with ngx_http_upstream_consistent_hash for hashring-style access</li>
<li>Each varnish node only holds parts of the cached data; hashring approach ensures correct server is hit</li>
<li>RabbitMQ, basically thrown in because he likes it so much - cross-language messaging bus</li>
<li>Erlang is used quite a bit at Heroku: Erlang is share-nothing - high concurrency, no mutable variables (in other words: your variables don't vary), lightweight processes</li>
<li>Erlang used for information exchange and routers - Principles such as shared-nothing, transient, shardable built in to the language</li>
<li><p>Horizontal scalability promises to shatter the ceiling of scalability - but only if we architect resources to be shardable, transient, share-nothing</p></li>
<li><p>Q. Cassandra? A. Hasn't looked into it, but seems to be well-aligned with these ideas.</p></li>
<li>Q. Experience in scaling SQL databases? A. Do this the same everybody else does, but there's a lot of pain because it doesn't fit the cloud. Desaster recovery is one of the major challenges with a SQL DB, much harder than with the new DB models</li>
<li>Q. How easy is it to backup CouchDB to another data center? A. It's so easy that it's almost laughable, CouchDB simply uses HTTP. Latest version of Ubuntu ships with CouchDB to replicate address book and other data between machines [See, just like Lotus Notes ;-)] </li>
<li>Q. Details about "slider for scaling"? A. Very quick way to control the number of processes for Web requests and workers; frees you from having to decide whether to put more processes on the existing boxes or add new ones.</li>
<li>Q. Any downsides to a document database? A. SQL databases are great at ad-hoc queries, not something document DBs are very good at. SQL is a functional programming language [ed. Only as long as you only talk about SELECT …]</li>
</ul>


