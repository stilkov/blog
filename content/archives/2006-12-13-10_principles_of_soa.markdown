---
layout: post
title: "10 Principles of SOA"
date: "2006-12-13T16:29:00+01:00"
comments: false
categories: 
---

<p>In many customer engagements, I need to establish a basic set of principles of SOA. The following sections introduce fundamental principles that a Service-oriented Architecture (SOA) should expose.These are not introduced as an absolute truth, but rather as a frame of reference for SOA-related discussions. You&#8217;ll note that the first four are based on Don Box&#8217;s <a href="http://msdn.microsoft.com/msdnmag/issues/04/01/Indigo/default.aspx">four tenets</a>, although over time they may have acquired a slight personal spin. (I&#8217;m putting them up now because someone asked me for a version that can be referenced; I haven&#8217;t reviewed them again now and may actually have changed my mind with regards to some of them.)  </p>

<h3>1. Explicit Boundaries</h3>

<p>Everything needed by the service to provide its functionality should be passed to it when it is invoked. All access to the service should be via its publicly exposed interface; no hidden assumptions must be necessary to invoke the service. &#8220;<a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnbda/html/dataoutsideinside.asp">Services are inextricably tied to messaging in that the only way into and out of a service are through messages</a>&#8221;. A service invocation should &#8211; as a general pattern &#8211; not rely on a shared context; instead service invocations should be modeled as stateless.
An interface exposed by a service is governed by a contract that describes its functional and non-functional capabilities and characteristics. The invocation of a service is an action that has a business effect, is possibly expensive in terms of resource consumption, and introduces a category of errors different than those of a local method invocation or remote procedure call.
A service invocation is not  a remote procedure call.</p>

<p>While consuming and providing services certainly should be as easy as possible, it is therefore undesirable to hide too much of the fact that an interaction with a service takes place. The message sent to or received from the service, the service contract, and the service itself should all be first-class constructs within the SOA. This means, for example, that programming models and tools that are used should at least provide an API that exposes these concepts to the service programmer.
In summary, a service exposes its functionality through an explicit interface that encapsulates its internals; interaction with a service is an explicit act, relying on the passing of messages between consumer and provider.</p>

<h3>2. Shared Contract and Schema, not Class</h3>

<p>Starting from a service description (a contract), both a service consumer and a service provider should have everything they need to consume or provide the service. Following the principle of loose coupling, a service provider can not rely on the consumer&#8217;s ability to reuse any code that it provides in its own environment; after all, it might be using a different development or runtime environment.
This principle puts severe limits on the type of data that can be exchanged in an SOA. Ideally, the data is exchanged as XML documents validatable against one or more schemas, since these are supported in every programming environment one can imagine. </p>

<h3>3. Policy-driven</h3>

<p>To interact with a service, two orthogonal requirement sets have to be met: </p>

<ol>
<li>the functionality, syntax and semantics of the provider must fit the consumer&#8217;s requirements,</li>
<li>the technical capabilities and needs must match.</li>
</ol>

<p>For example, a service provider may offer exactly the service a consumer needs, but offer it over JMS while the consumer can only use HTTP (e.g. because it is implemented on the .NET platform); a provider might require message-level encryption via the XML Encryption standard, while the consumer can only support transport-level security using SSL. Even in those cases where both partners do have the necessary capabilities, they might need to be &#8220;activated&#8221; &#8211; e.g. a provider might encrypt response messages to different consumers using different algorithms, based on their needs.</p>

<p>To support access to a service from the largest possible number of differently equipped and capable consumers, a policy mechanism has been introduced as part of the SOA tool set. While the functional aspects are described in the service interface, the orthogonal, non-functional capabilities and needs are specified using policies.</p>

<h3>4. Autonomous</h3>

<p>Related to the explicit boundaries principle (5.4.1.1), a service is autonomous in that its only relation to the outside world &#8211; at least from the SOA perspective &#8211; is through its interface. In particular, it must be possible to change a service&#8217;s runtime environment, e.g. from a lightweight prototype implementation to a full-blown, application server-based collection of collaborating components, without any effect on its consumers.
Services can be changed and deployed, versioned and managed independently of each other. A service provider can not rely on the ability of its consumers to quickly adapt to a new version of the service; some of them might not even be able, or willing, to adapt to a new version of a service interface at all (especially if they are outside the service provider&#8217;s sphere of control).</p>

<h3>5. Wire formats, not Programming Language APIs</h3>

<p>Services are exposed using a specific wire format that needs to be supported. This principle is strongly related to the explicitness of boundaries principle, but introduces a new perspective: To ensure the utmost accessibility (and therefore, long-term usability), a service must be accessible from any platform that supports the exchange of messages adhering to the service interface as long as the interaction conforms to the policy defined for the service.
For example, it is a useful test for conformance to this principle to consider whether it is possible to consume or provide a specific service from a mainstream dynamic programming language such as Perl, Python or Ruby. Even though none of these may currently play any role in the current technology landscape, this consideration can serve as a litmus test to assess whether the following criteria are met:</p>

<ul>
<li>All message formats are described using an open standard, or a human readable description</li>
<li>It is possible to create messages adhering to those schemas with reasonable effort without requiring a specific programmer&#8217;s library</li>
<li>The semantics and syntax for additional information necessary for successful communication, such as headers for purposes such as security or reliability, follow a public specification or standard</li>
<li>At least one of the transport (or transfer) protocols used to interact with the service is a (or is accessible via a) standard network protocol</li>
</ul>

<h3>6. Document-oriented</h3>

<p>To interact with services, data is passed as documents. A document is an explicitly modeled, hierarchical container for data. The self-descriptiveness, as outlined in the previous section, is one important aspect of document-orientation.
Ideally, a document will be modeled after real-world documents, such as purchase orders, invoices, or account statements. Documents should be designed so that they are useful on the context of a problem domain, which may suggest their use with one or more services. </p>

<p>Similarly to a real-world paper document, a document exchanged with a service will include redundant information. For example, a customer ID might be included along with the customer&#8217;s address information (although the customer ID would be enough). This redundancy is explicitly accepted since it serves to isolate the service interface from the underlying data model of both service consumer and service provider. Whena document-oriented pattern is applied, service invocations become meaningful exchanges of business messages instead of context-free RPC calls.
While not an absolute required, it can usually be assumed that XML will be used as the document format/syntax.</p>

<p>Messages flowing between participants in an SOA connect disparate systems that evolve independently of each other. The loose coupling principle mandates that the dependence on common knowledge ought to be as small as possible. When messages are sent in a Distributed Objects or RPC infrastructure, client and server can rely on a set of proxy classes (stubs and skeletons) generated from the same interface description document. If this is not the case, communication ceases on the assumption that the contract does not support interaction between those two parties. For this reason, RPC-style infrastructures require synchronized evolution of client and server program code.</p>

<p>This is illustrated by the following comparison. Consider the following message:</p>

<pre><code>2006-03-1347113
</code></pre>

<p>and compare it to:</p>

<pre><code>&lt;order&gt;
&lt;date&gt;2006-03-13&lt;/date&gt;
&lt;product-id&gt;4711&lt;/product-id&gt;
&lt;quantity&gt;3&lt;/quantity&gt;
&lt;/order&gt;
</code></pre>

<p>While it is obvious that the second alternative is human-readable while the first one is not, it is also notable that in the second case, a participant that accesses the information via a technology such as XPath will be much better isolated against smaller, non-breaking changes than one that relies on the fixed syntax.
Conversely, using a self-descriptive message format such as XML while still using RPC patterns, such as stub and skeleton generation, serves only to increase XML&#8217;s reputation as the most effective way to waste bandwidth. If one uses XML, the benefits should be exploited, too. (See <a href="http://www.hpl.hp.com/techreports/2005/HPL-2005-83.html ">this paper</a> for an excellent discussion of why many current Web services stacks fail this test.)</p>

<h3>7. Loosely coupled</h3>

<p>Most SOA proponents will agree that loose coupling is an important concept. Unfortunately, there are many different opinions about the characteristics that make a system &#8220;loosely coupled&#8221;.
There are multiple dimensions in which a system can be loosely or tightly coupled, and depending on the requirements and context, it may be loosely coupled in some of them and tightly coupled in others. Dimensions include: </p>

<ul>
<li>Time: When participants are loosely coupled in time, they don&#8217;t have to be up and running at the same time to communicate. This requires some way of buffering/queuing in between them, although the approach taken for this is irrelevant. When one participant sends a message to the other one, it does not rely on an immediate answer message to continue processing (neither logically, nor physically).</li>
<li>Location: If participants query for the address of participants they intend to communicate with, the location can change without having to re-program, reconfigure or even restart the communication partners. This implies some sort of lookup process using a directory or address that stores service endpoint addresses.</li>
<li>Type: In an analogy to the concept of static vs. dynamic and weak vs. strong typing in programming languages, a participant can either rely on all or only on parts of a document structure to perform its work. </li>
<li>Version: Participants can depend on a specific version of a service interface, or be resilient to change (to a certain degree). The more exact the version match has to be, the less loosely coupled the participants (in this dimension). A good principle to follow is <a href="http://en.wikipedia.org/wiki/Robustness_Principle">Postel&#8217;s Law</a>: Service providers should be implemented to accept as many different versions as possible, and thus be liberal in what they accept (and possibly even tolerant of errors), while service consumers should do their best to conform to exact grammars and document types. This increases the overall system&#8217;s stability and flexibility.</li>
<li>Cardinality: There may be a 1:1-relationship between service consumers and service providers, especially in cases where a request/response interaction takes place or an explicit message queue is used. In other cases, a service consumer (which in this case is more reasonably called a &#8220;message sender&#8221; or &#8220;event source&#8221; may neither know nor care about the number of recipients of a message. </li>
<li>Lookup: A participant that intends to invoke a service can either rely on a (physical or logical) name of a service provider to communicate with, or it can perform a lookup operation first, using a description of a set of capabilities instead. This implies a registry and/or repository that is able to match the consumer&#8217;s needs to a providers capabilities (either directly or indirectly).</li>
<li>Interface: Participants may require adherence to a service-specific interface or they may support a generic interface. If a generic interface is used, all participants consuming this generic interface can interact with all participants providing it. While this may seem awkward at first sight, the principle of a single generic (uniform) interface is at the core of the WWW&#8217;s architecture.</li>
</ul>

<p>It is not always feasible nor even desirable to create a system that is loosely coupled in all of the dimensions mentioned above. For different types of services, different trade-offs need to be made.</p>

<h3>8. Standards-compliant</h3>

<p>A key principle to be followed in an SOA approach is the reliance on standards instead of proprietary APIs. Standards exists for technical aspects such as data formats, metadata, transport and transfer protocols, as well as for business-level artifacts such as document types (e.g. in <a href="http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=ubl">UBL</a>).</p>

<h3>9. Vendor independent</h3>

<p>No architectural principle should rely on any particular vendor&#8217;s product. To transform an abstract concept into a concrete, running system, it&#8217;s unavoidable to decide on specific products, both commercial and free/open source software. None of these decisions must have implications on an architectural level. This implies reliance on both interoperability and portability standards as much as reasonably possible.
As a result, a participant can be built using any technology that supports the appropriate standards, not restricted by any vendor roadmap.</p>

<h3>10. Metadata-driven</h3>

<p>All of the metadata artifacts within the overall SOA need to be stored in a way that enables them to be discovered, retrieved and interpreted at both design and run time. Artifacts include descriptions of service interfaces, participants, endpoint and binding information, organizational units and responsibility, document types/schemas, consumer/provider relationships etc. As much as possible, usage of these artifacts should be automated by either code generation or interpretation and become part of the service and participant life cycle.</p>

<section class="comments">

<div class="comment" id="comment-1144">
On <a href="#comment-1144" title="Permalink to this comment">December 13, 2006  4:59 PM</a>, <a href="http://www.from9till2.com" title="http://www.from9till2.com" rel="nofollow">David Ing</a>
said:
<p>Hi Stefan. If you do come to review them then, if you haven&#8217;t already seen it already, take a look at this: <a href="http://www.oasis-open.org/committees/download.php/19679/soa-rm-cs.pdf" rel="nofollow" /><a href="http://www.oasis-open.org/committees/download.php/19679/soa-rm-cs.pdf" rel="nofollow">http://www.oasis-open.org/committees/download.php/19679/soa-rm-cs.pdf</a></p>

<p>I&#8217;m still chewing on it, but thought I should pass on&#8230;</p>


<div class="comment" id="comment-1145">
On <a href="#comment-1145" title="Permalink to this comment">December 14, 2006  5:44 AM</a>, Spar Hawk
said:
<p>Hi Stefan,</p>

<p>Very interesting points; most of them ring true in my work with web services, as well.  A question though, you mention in point #6:  &#8220;&#8230;See [11] for an excellent discussion&#8230;&#8221; - but I can&#8217;t locate the reference.  Can you provide it?</p>

<p>Thank you for the thoughtful discussion.</p>


<div class="comment" id="comment-1146">
On <a href="#comment-1146" title="Permalink to this comment">December 14, 2006  6:19 AM</a>, <a href="http://www.rafaelferreira.net/" title="http://www.rafaelferreira.net/" rel="nofollow">Rafael</a>
said:
<p>Great article, as usual. I have just one question: what is the [11] referencing on item 6?
Thanks.</p>


<div class="comment" id="comment-1147">
On <a href="#comment-1147" title="Permalink to this comment">December 14, 2006  7:56 AM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>I like constraints better than principles, but as principles go, those are pretty good ones 8-)</p>


<div class="comment" id="comment-1148">
On <a href="#comment-1148" title="Permalink to this comment">December 14, 2006  9:13 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks for the feedback, I&#8217;ve fixed the link to &#8220;11&#8221;, which should be <a href="http://www.hpl.hp.com/techreports/2005/HPL-2005-83.html" rel="nofollow" /><a href="http://www.hpl.hp.com/techreports/2005/HPL-2005-83.html" rel="nofollow">http://www.hpl.hp.com/techreports/2005/HPL-2005-83.html</a></p>


<div class="comment" id="comment-1149">
On <a href="#comment-1149" title="Permalink to this comment">December 14, 2006 10:03 AM</a>, Peter
said:
<p>If you use WebServices Frameworks with &#8220;standard&#8221; Stub/Skeleton generation for your SOA you will fail on #6 and #7 as you already mentioned. I don&#8217;t know why these Frameworks are implemented this way. Why don&#8217;t they just ignored unknown elements as default. Like all the Browsers did for years with HTML. It&#8217;s the &#8220;Must ignore&#8221; pattern. As you said these frameworks use the flexible XML in an inflexible manner.
For Axis 1 and 2 I could solve this problem by using other bindings, e.g. XMLBeans. But then you have to do some things manually and you have to provide some code to your clients. It&#8217;s not enough to provide the WSDL URLs anymore, because then they&#8217;ll use the standard wsdl2xxx tools and fail.</p>

<p>So why is &#8220;Must ignore&#8221; not a basic rule in the WS/SOAP world?</p>


<div class="comment" id="comment-1150">
On <a href="#comment-1150" title="Permalink to this comment">December 14, 2006  3:27 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<blockquote>
<p>So why is “Must ignore” not a basic rule in the WS/SOAP world?</p>
</blockquote>

<p>IMO, the WS/SOAP world is traditionally very much rooted in the statically typed language world &#8212; the idea of &#8220;loose contracts&#8221; seems almost absurd from that perspective. I agree, though, frameworks could be implemented differently, which would change a lot.</p>


<div class="comment" id="comment-1151">
On <a href="#comment-1151" title="Permalink to this comment">December 17, 2006  1:35 AM</a>, <a href="http://duckdown.blogspot.com" title="http://duckdown.blogspot.com" rel="nofollow">James</a>
said:
<p>You should further define policy in future blog entries. For example, encryption, routing, authorization, logging, etc can all be defined via policy. The key is to tell folks how not just what&#8230;</p>


<div class="comment" id="comment-1152">
On <a href="#comment-1152" title="Permalink to this comment">December 21, 2006  4:29 PM</a>, <a href="http://www.manageability.org" title="http://www.manageability.org" rel="nofollow">Carlos E. Perez</a>
said:
<p>Good post and a lot of interesting links.  </p>

<p>Question for the first principle.  How does one ensure that there are no &#8220;shared context&#8221; between two parties in a conversation?</p>

<p>I mean, in any conversation, shared context is built up to make communication more efficient.  That&#8217;s why the english language has pronouns.  The act of communicating a reference to an object establishes a shared context.  Furthermore, the absence of any reference passing implies a purely functional computation (i.e. stateless) and therefore implies that distribution is an unnecessary artifiact.  </p>

<p>Let me know if you got any insight on this.</p>


<div class="comment" id="comment-1153">
On <a href="#comment-1153" title="Permalink to this comment">December 21, 2006  4:54 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Carlos, very good question. We had very long (and heated) discussions about this in our last project &#8212; without arriving at a fully satisfactory answer.</p>

<p>On the one hand, stateless communication does (obviously) not imply that there is not supposed to be any side effect (in the programming language theory sense). Otherwise, there could never be something like &#8220;CreateCustomer()&#8221; (or a POST to /customers, if you prefer). What is bad, though, is if a sequence of invocations or exchanges don&#8217;t have merit on their own, but only as a whole; for example &#8220;createOrder()&#8221;, &#8220;addItem()&#8221;, &#8220;addItem()&#8221;, &#8220;saveOrder()&#8221; would be an example for what I would want to avoid.</p>

<p>You are obviously right that passing &#8220;complete&#8221; data instead of a reference wastes bandwith and performance. That&#8217;s the downside of less coupling, though &#8212; I guess one has to find a good compromise between efficiency and other goals.</p>

<p>Being able to rely on a common concept for identifying resources helps, of course, and is a good argument in favor of a RESTful approach.</p>


<div class="comment" id="comment-1154">
On <a href="#comment-1154" title="Permalink to this comment">December 22, 2006  1:42 PM</a>, <a href="http://www.manageability.org" title="http://www.manageability.org" rel="nofollow">Carlos E. Perez</a>
said:
<p>Stefan,</p>

<p>So in your example your really talking about &#8220;shared session state&#8221;.</p>

<p>The question then is, where does one draw the line as to what state is shared or not?</p>

<p>What&#8217;s wrong with “createOrder()”, “addItem()”, “addItem()”, “saveOrder()” is the amount of network calls&#8230; the DTO pattern that fixes this.  Is object oriented like messagging what we intend on banning?</p>

<p>Carlos</p>


<div class="comment" id="comment-1155">
On <a href="#comment-1155" title="Permalink to this comment">December 22, 2006  8:49 PM</a>, <a href="http://www.reliablesoftware.com/dasblog/default.aspx" title="http://www.reliablesoftware.com/dasblog/default.aspx" rel="nofollow">Michael Stiefel</a>
said:
<p>The SOA Reference Model mentioned by David Ing has been an approved OASIS specification since October 2006. Here is the link to the final version: <a href="http://docs.oasis-open.org/soa-rm/v1.0/soa-rm.pdf" rel="nofollow" /><a href="http://docs.oasis-open.org/soa-rm/v1.0/soa-rm.pdf" rel="nofollow">http://docs.oasis-open.org/soa-rm/v1.0/soa-rm.pdf</a></p>


<div class="comment" id="comment-1156">
On <a href="#comment-1156" title="Permalink to this comment">December 22, 2006  8:50 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<blockquote>
<p>So in your example your really talking about “shared session state”.</p>
</blockquote>

<p>Yes.</p>

<blockquote>
<p>Is object oriented like messagging what we intend on banning?</p>
</blockquote>

<p>Well &#8230; I guess we don&#8217;t have a problem of understanding each other, more of finding the right way to phrase this. On the one hand, we could separate &#8220;objects&#8221; into &#8220;transient objects&#8221; and &#8220;persistent objects&#8221;, or maybe into &#8220;objects&#8221; and &#8220;resources&#8221;. Interacting with resources is fine (even when not using a REST approach) because they have <em>business</em> meaning and are not an implementation detail.</p>

<p>For example, createOrder(OrderDTO) would create an order in a single invocation and return an identifier &#8220;id&#8221; for that order. A later cancelOrder(id) would be fine IMO, because the object or resource we&#8217;re interacting with is not an implementation detail. That would be a non-technical, design-oriented reason for assuming as little shared state as possible.</p>

<p>The other, more technical reason is simply to arrive at a shared-nothing architecture (where, again, &#8220;sharing nothing&#8221; means &#8220;sharing nothing that isn&#8217;t persistent&#8221;) which means that each request can be handled by a different {thread|process|machine}.</p>


<div class="comment" id="comment-1157">
On <a href="#comment-1157" title="Permalink to this comment">December 22, 2006  9:03 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I commented on an earlier draft of the OASIS RM a while ago: <a href="/blog/st/2006/03/20/comments\_on\_the\_oasis\_soa\_reference\_model.html" rel="nofollow" /><a href="/blog/st/2006/03/20/comments_on_the_oasis_soa_reference_model.html" rel="nofollow">/blog/st/2006/03/20/comments_on_the_oasis_soa_reference_model.html</a></p>


<div class="comment" id="comment-1158">
On <a href="#comment-1158" title="Permalink to this comment">January  8, 2007  1:38 PM</a>, Håkon
said:
<p>Great principles! :-)</p>

<p>I am missing Service Identification in your loose coupling collection. Each Service should deal with a specific area of business and at a suitable loose coupled level. I think it relates to the discussion about object orientation contra service orientation. Zapthink has a great analogy to Lego (sorry, I am Danish and therefore brought up with Lego :-) ) which can be found at <a href="http://www.zapthink.com/report.html?id=ZAPFLASH-20061212." rel="nofollow" /><a href="http://www.zapthink.com/report.html?id=ZAPFLASH-20061212." rel="nofollow">http://www.zapthink.com/report.html?id=ZAPFLASH-20061212.</a> IMO this is the essential of Loose Coupling and has no relation to the technical issues of loose coupling, how important they are as well. I think this point of loose coupling is one of the most overseen points of Service Orientation, but at the same time it is one of the most essential points of Service Orientation :-)</p>

<p>I agree with your example of Order, i.e. a CustomerOrderService with operations like Create and Cancel could be one of the basic building blocks in an Enterprise dealing with shooping customers.</p>


</section>

