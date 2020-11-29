---
layout: post
title: "QCon SF 2009: Max Ross, Mapping Relational Data Patterns to the App Engine Datastore"
date: "2009-11-19T21:48:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Max Ross's talk about Mapping Relational Data Patterns to the App Engine Datastore at QCon SF 2009.</p>

<ul>
<li>Datastore is transactional, natively partitioned, hierarchical, schema-less, based on BigTable – not a relational database</li>
<li>Goals: Simplify storage by simplifying development, management</li>
<li>Even though Datastore is based on the ridiculously scalable BigTable, you don't need to have scalability problems to benefit from it</li>
<li>Scale always matters - the problem is not in the second step, it's the first step</li>
<li>Free to get started (not only for the first 30 days), pay only for what you need</li>
<li>Let someone else manage upgrades, redundancy, connectivity</li>
<li>Let someone else handle problems</li>
<li>Detailed post-mortem of GAE downtime available somewhere</li>
<li>Scale automatically to any point on the scale curve</li>
<li>Trying to get people out of the business of managing their database in production</li>
<li>Basic entity: Kind, Entity group, key, age, + any number of properties</li>
<li>Datastore is schemaless - soft schema model. Much of the stuff available in the DB (constraints, type checking, schema) needs to move up to the app layer (but is usually replicated there anyway)</li>
<li>primary benefit of the schemaless datastore: much faster iterations</li>
<li>soft schemas can give you type safety despite using a simple key/value store underneath</li>
<li>JPA annotations provide soft schema - even though targeted at creating DB information, GAE can benefit from it</li>
<li>JPA annotations are a data definition language (proof: relational DB schema can be created from annotations)</li>
<li>Primary key in the datastore contains the kind and are hierarchical, e.g. /Person:13/Pet:Ernie</li>
<li>Analogy: Hierarchical datastore keys are similar to composite primary keys</li>
<li>Surrogate keys are harder to move - dropping is often not an option. Mapping options: 1) make surrogate part of the key a property 2) make surrogate key primary key, put rest into property</li>
</ul>

<h3>Transations:</h3>

<ul>
<li>transactions in the Datastore apply to a single Entity Group</li>
<li>Entities in the same Entity Group share the same root part of the key</li>
<li>This makes Entity Group selection a critical design choice, with obvious effects on transactions</li>
<li>Too coarse hurts througput, too fine limits usefulness of transactions</li>
<li>Datastore does optimistic concurrency checks at the Entity Group level</li>
<li>[Strong relationship between data modeling and transaction processing – reminds me of the old debate on EJB 2.0 pre-final entity beans and dependent objects]</li>
<li>Unreleased new feature: Transactional tasks can update multiple entity groups, a task in a queue can participate in a DB transaction</li>
<li>Example: Deferred, transactional, async balance update (eventual consistency) as well as synchronous</li>
<li>Two-phase commit protocol algorithm implemented at Berkely, implemented by a Google developer (Erick Armbrust)</li>
</ul>

<h3>Relationships</h3>

<ul>
<li>Letting a framework manage relationships can simplify code for RDBMS, but especially for App Engine Datastore</li>
<li>Goal: make handling relationships with JPA as easy as possible</li>
<li>Google's JPA implementatin has some sensible defaults: Ownership implies entites are placed in the same Entity Group</li>
<li>E.g. Person with a @OneToMay to Pet (with a back reference of @ManyToOne) makes both part of the same Entity Group</li>
</ul>

<h3>Queries</h3>

<ul>
<li>Testing set membership – requires a join table with an RDBMS, can use a multi-value property in the GAE datastore (select from User where hobbies  = 'yoga')</li>
<li>Other than that, no joins supported </li>
<li>Conflict: Google promises that query performance scales linearly with the size of the <em>result</em> set; not possible when cross products are needed to fulfill queries</li>
<li>Making good progress with a subset for join progress, not releases yet - nowhere near ready for production</li>
<li>RDBMS encourage cheap writes and expensive reads; datastore encourage expensive writes and cheap reads. Denormalization enouraged where it makes sense</li>
<li>Obvious problems with denormalized data</li>
</ul>

<h3>Taking code somewhere else</h3>

<ul>
<li>App engine is in general more restrictive</li>
<li>Suggestion: Decide early whether or not portability matters to you</li>
<li>Shows examples of portable code - somewhat ugly</li>
<li>Congratulations, you have already sharded your data model</li>
</ul>

<h3>Key takeaways</h3>

<ul>
<li>App engine datastore simplifies persistence</li>
<li>JPA adds typical RDBMS features to the datastore</li>
<li>Important to understand how the datastore is different</li>
<li>Easier to move apps off than on</li>
<li>If portability is important, plan for it</li>
<li>http://gae-java-persistence.blogspot.com</li>
</ul>

<h3>Q&amp;A</h3>

<ul>
<li>Q. Does the shown transaction example really solve the problem? A. No, not to the full extent. lot of Google's billing software is built without multi-row transactions</li>
<li>Q. Is JPA a good model when starting from scratch? A. Many people like the low-level API, then start building an ORM on top of it … possibly better to start using an existing one.</li>
<li>Q. What kind of apps are on GAE? A. Not really known, many backend applications for iPhone apps, Facebook, … Obama virtal town hall meeting peaked at 700 req/s</li>
<li>Q. Export features? A. Some bulk import/export, but there should be more</li>
<li>Q. Caching? A. No direct support for JPA caching using memcached, but should be pluggable</li>
<li>Q. Is Python going to be replaced by Java? A. Absolutely not, the Java team rather has to fight to be accepted as an equal citizen</li>
<li>Q. Restrictions on some JDK features relevant? A. No.</li>
<li>Q. Staging area? A. No, not yet.</li>
<li>Q. JDO? A. GAE supports both, datanucleus supports both; JPA was chosen randomly for this talk today.</li>
<li>Q. Can apps be run offline? A. You can run the app SDK locally, but it won't scale; but stub implementations are pluggble and they could be replaced.</li>
</ul>


