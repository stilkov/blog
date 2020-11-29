---
layout: post
title: "QCon SF 2009: Michael Nygard, Software Architecture for Cloud Applications"
date: "2009-11-19T23:51:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Michael Nygard's talk about Software Architecture for Cloud Applications at QCon SF 2009.</p>

<ul>
<li>Anything as vaguely defined as Cloud Computing requires some up-front definition at the beginning of each talk</li>
<li>There are risks in moving to cloud computing, despite what the cheerleaders will tell you</li>
<li>Definition of Cloud, Grid, Utility – grid as parallelized, distributed, heterogenous services, utlity as a pay-per-use model; IaaS, PaaS, SaaS</li>
<li>Grid computing - most visible example SETI@home; getting hold of a large number of systems: moving data to the computation</li>
<li>Another example LHC: After filtering, each collision creates 15 TB of data</li>
<li>If CERN processed the data themselves, it would be a choice between heating the town or running the datacenter</li>
<li>More than 100,000 CPUs, 10 PB of image data each year</li>
<li>Software platform abstracts away the hardware differences - using GLOBUS</li>
<li>Grid Computing is really about these very large-scale problems</li>
<li>Utility Computing: Not Cloud Computing, not IaaS - just a billing method</li>
<li>Financial flexbility, not a lot of engineering</li>
<li>Good example: holiday volumes at a retailer - overspending 10 out of 12 months</li>
<li>Focus of the talk: IaaS/Cloud Computing</li>
<li>4 trends: virtualization, commoditization of hardware, horizontally scalable architecture - created the problem of rapid provisioning</li>
<li>Virtualization vendors tend to underplay the difference to Cloud computing</li>
<li>Differences: 4 key questions: Who allocates resources? Who deploys virtual machines? How quickly can new resources be allocated? Is provisioning under human or programmatic control? With virtualization, the answer is administrators, administrators, depends on the approval process, human; in the cloud, it's users, Users, minutes, programmatic</li>
<li>Cloud is generic computing platform, zero lead time, hardware appears homogeneous; specialized hardware is abstracted away and turned into declarative aspects</li>
<li>Cloud computing is like corn farming in Iowa … tiny margin, large fixed costs, scale is essential; small providers won't be around long</li>
<li>Doesn't get why remoteness is supposed to be a key aspect of Cloud Computing - e.g. Private Clouds are just fine</li>
<li>Easiest way to prepare your app for CC: Don't do anything</li>
<li>Advantages to Gain Scalability, Bundling, Ephemerality, Risks to Mitigate: Availability, Geography, Ephemerality</li>
<li>Amazon EC2 examples; Quirks: "Clean boot" is really clean, local storage not persistent, IP addresses assigned randomly</li>
<li>Advantage: Bundling, i.e. installing stuff on a pre-configured image, then bundling and storing the new image in S3</li>
<li>Can be part of the build process - turn out fully bootable machine images</li>
<li>Half of all failures arise within 24h after deployment of a change</li>
<li>The plus side of ephemerality: Do testing, after successful UAT, switch production IP to new system - keep old one running to be able to switch back quickly</li>
<li>No more deployments to production servers </li>
<li>Schema version conflicts: Old and new version may talk to the same DB</li>
<li>Multiple way to address handling of concurrent versions - advice: Don't accept downtime</li>
<li>Scalability patterns: the master/worker pattern</li>
<li>Work is enqueued, master looks at average completion time and creates more workers as needed</li>
<li>Examples: New York Times, Animoto (hoping for new examples soon)</li>
<li>Getting a few hundred servers to user over a weekend …</li>
<li>Explanation of Map/Reduce, Hadoop, HDFS - blend between Cloud and Grid</li>
<li>Amazon Elastic Map Reduce abstracts away from topology issues of using pre-configured Hadoop images</li>
<li>Horizontal, read-only replication as a scalability approach - works with most traffic </li>
<li>DB and Web Server can run on the same machine if it's just a read-only copy</li>
<li>Problem: Load balancer requires configuration, needs to know which nodes are available - changes often requires reboot</li>
<li>"Autoscaled load balanced group" addresses this - new nodes are automatically added to the pool of machines load is distributed to</li>
<li>If Oprah mentions you on Twitter, you're still dead</li>
<li>Natural affinity between Cloud Computing and Oopen Source</li>
<li>What about NoSQL? Makes a lot of sense, but relational DBs work, too</li>
<li>Scaling with caching servers such as memcached, GigaSpaces, Oracle Coherence, Terracotta</li>
<li>Every time you use virtualization, I/O througput suffers</li>
<li>SLA of Amazon EC2 is defined in terms of the entire zone</li>
<li>Guaranteed EBS availability is higher than that of a single disk, but still the risk needs to be mitigated</li>
<li>Snapshotting to S3 is one level of mitigating; transferring the snapshot to another availability zone addresses is further</li>
<li>Load balancing group across availability zones</li>
<li>Right now running a number of servers on the departmental secretary's credit card; after all, computing resources are just office supplies</li>
<li>Perception of risk of using the Cloud - real security professionals talk about the degree of risk, not about absolutes</li>
<li>What's missing is data about threats, their frequency, and their impact</li>
<li>Wouldn't it be horrible if … "WIBHI" reaction doesn't help</li>
<li>Cloud Security Alliance works on standards regarding this</li>
<li>Real risks: Control plane threats, patent shutdowns, lack of risk management info</li>
<li>Security facilities to apply: transport level encryption, e.g. SSL; storage level encryption; access control (security groups in AWS); control plane/multi-tenancy: outside of your control</li>
<li>Cloud Computing offers significant cost and time-to-market advantages</li>
<li>From Q&amp;A: Main advantage of IaaS as opposed to PaaS: Adoption is much easier</li>
</ul>


