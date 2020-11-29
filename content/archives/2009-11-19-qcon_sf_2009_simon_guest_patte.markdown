---
layout: post
title: "QCon SF 2009: Simon Guest, Patterns of Cloud Computing"
date: "2009-11-19T14:38:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Simon Guest's talk about Patterns for Cloud Computing at QCon SF 2009.</p>

<ul>
<li>"This talk is about Jim, he has many questions about cloud computing…"</li>
<li>5 pattern of cloud-based applications</li>
<li>Definition of cloud computing</li>
<li>Different models:
<ul>
<li>Applications must run on-premises – complete control, upfront capital costs</li>
<li>Application runs at a hoster – lower capital costs, but pay for fixed capacity even if idle</li>
<li>Shared, multi-tenant, pay as you go – pay someone for a pool of computing resources that can be applied to a set of applications</li>
</ul></li>
<li>Public Cloud vs. Private Cloud – private cloud useful e.g. for telcos offering this to their customers</li>
<li>Windows Azure – compute, storage, management, based on 64bit Windows images</li>
<li>SQL Azure - RDBMS</li>
<li>.NET Service - service bus and access control</li>
<li>[ed.: Who thinks of these names, and even more importantly, why doesn't Microsoft fire them?]</li>
<li>Different models infrastructure (IaaS) vs. Platform as a Service (PaaS) as main paths</li>
<li>Slide shows that MS offers a higher-level stack than Amazon - EC2 provides instance, Windows Azure model is a platform as a service model</li>
<li>[Seems to me this is one of the major problems of Azure – it seems neither one or the other, as I would define PaaS as what GAE does, which is much higher-level than simply a Windows Server]</li>
</ul>

<h3>Pattern #1: Using the Cloud for Scale</h3>

<ul>
<li>Shows how to scale up a Web app using more machines, load balancer, database partitioning</li>
<li>A lot of work - a lot of money</li>
<li>Designed for peak capacity, idle for a lot of time</li>
<li>Much easier to let cloud vendor handle this dynamically</li>
<li>Prerequisite for successful scaling in the cloud: having a queue to decouple web tier and backend</li>
<li>Starbucks [of all possible examples! ;-)] as an example for queueing</li>
<li>Demo: "PrimeSolvr" (Web 2.0 because it's missing the last "e")</li>
<li>3 takeaways: 1) core tenet of cloud computing: ability to scale up/down 2) understand how to communicate between roles and nodes 3) strategy for when to scale up and down</li>
</ul>

<h3>Pattern #2: Using the cloud for multi tenancy</h3>

<ul>
<li>Simply approach internally: one application per customer - works only for small numbers</li>
<li>Implications: Schema customizations, UI customizations</li>
<li>3 options for data in a multi-tenant environment: 1) share DB between customers 2) each customer gets a separate DB - hard to do on-premise, much easier in the cloud 3) fixed DB schema with customizations on a tenant-by-tenant basis</li>
<li>Demo: ASP.NET MVC app using the HTTP host name to switch UI and DB Schema</li>
<li>Takeaways: 1) Consider multi-tenancy first, hard to retrofit 2) Design considerations must include both data and UI specifics 3) Identity as a very important consideration, see MS Patterns and Practices paper on multi-tenancy ID</li>
</ul>

<h3>Pattern #3: Using the cloud for compute</h3>

<ul>
<li>Popularized by MapReduce</li>
<li>Apache Hadoop, Cloudera, Amazon Elastic MapReduce, Hadoop implementation</li>
<li>Typical on-premise solution: very infrastructure-heavy, complex, expensive</li>
<li>No explicit framework implementation on Azure</li>
<li>Demo (inspired my MapReduce): Development Fabric (local execution environment), not using virtualization [similar to GAE environment]; next step is upload to Azure staging area, next level production</li>
<li>Takeaways: MapReduce very visible, although can be hard to initally grasp, learn about existing implementations; MS academic effort: Dryad</li>
</ul>

<h3>Pattern #4: Using the cloud for (infinite) storage</h3>

<ul>
<li>Problem: Affinity between hardware and data</li>
<li>how does the cloud help? breaks the affinity</li>
<li>virtualized layer between the data you store and the hardware underneath</li>
<li>Three ways: blobs, tables, relational</li>
<li>MS: Azure Blog Storage – REST API (using GET (even range requests) and PUT); PutBlock API to move blocks - transaction build up [must look this up]</li>
<li>Azure Table Storage (Key/Value pairs)</li>
<li>Initial relational effort: SQL Server Data Services (MIX 08) - REST API on top of SQL</li>
<li>Customer reaction: We want to do TDS (MS native DB protocol)</li>
<li>SQL Data Services (MIX 09), late SQL Azure: TDS (SQL Server) in the Cloud</li>
<li>Similarity between internal and cloud architecture makes it easier for customers [agreed, even though this might me more of a problem]</li>
<li>Demo: SQL Azure (http://sql.azure.com); Codeplex sqlazuremw (migration wizard) - migration from local SQL Server DB to the cloud (subset of SQL Server functionality, e.g. restrictions on certain value types, clustered indexes)</li>
<li>Takeaways: 1) Storage in the cloud may look the same, but breaks the affinity problem 2) Pricing is relevant 3) SQL Azure factor for moving to cloud in the first place=</li>
*
</ul>

<h3>Pattern #5: Using the cloud for communications</h3>

<ul>
<li>Classic approach: VAN, now replace by Internet direct file transfers</li>
<li>Cloud approach: REST-based queues could be used for communication - not commonly used, problem: need to pass tokens around</li>
<li>Putting a web facade in front of the queue doesn't work too well either due to firewall problems. HTTP polling is bad [why?]</li>
<li>MS Solution: .NET Service Bus</li>
<li>TCP Relay: outbound bi-directional socket, tunneled through the bus and kept alive on both sides. Enables routing of arbitrary protocols across company boundaries</li>
<li>Alternative: Message Buffer, exposed using AtomPub, support retrieve, peek, lock</li>
<li>Takeaways: Be careful consuming REST-based queues because of shared secret</li>
<li>additional trouble because of REST</li>
<li>service bus as potential solution</li>
</ul>

<p>Last question: How can patterns be integrated?</p>

<ul>
<li>1) Sample PHP (!) application running on Windows Azure, ported to GAE and EC2 (as ASP.NET)</li>
<li>2) Map reduce spreads load across Amazon, Google, MS</li>
<li>3) Store results in SQL Azure database</li>
<li><p>4) Coordinate communication using .NET Service Bus</p></li>
<li><p>How many prime numbers between 1 and 10,000,000? 40 jobs of 250,000 numbers </p></li>
<li>WPF client app sends off job</li>
<li>"I'm gonna submnit the job and pray"</li>
<li><p>Spontaneous applause as the demo actually worked</p></li>
<li><p>make sure you have a clear definition of cloud computing</p></li>
<li>explore the 5 usage patterns</li>
<li>think about the next steps for implementation and migration</li>
</ul>


