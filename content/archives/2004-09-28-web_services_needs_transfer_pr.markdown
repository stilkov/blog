---
layout: post
title: "Web services needs Transfer protocols AND specific protocols"
date: "2004-09-28T23:31:00+01:00"
comments: false
categories: 
---

<p>An <a href="http://www.pacificspirit.com/blog/2004/09/28/web_services_needs_transfer_protocols_and_specific_protocols">interesting piece from David Orchard</a> &#8212; I think REST principles are great, most of the time; if there&#8217;s a way to make something work just using REST&#8217;s resource-oriented style (in the XML over HTTP incarnation), I&#8217;m all for it. But although it&#8217;s clearly possible to map <em>everything</em> to a uniform set of verbs applied to all resources, that doesn&#8217;t mean that it&#8217;s a good idea to do so.</p>

<p>In a few J2EE projects we&#8217;ve done in the past, we faced a decision similar, at least in principle: Whether or not to use Entity Beans. Especially with EJB 1.1, it was totally impracticable to use Entity Beans for all persistence need out of simple performance reasons; even with EJB 2.1, it&#8217;s still not possible to stick to using Entity Beans only, e.g. if you need dynamic queries. What we ended up doing was using Entity Beans for transactional updates and plain JDBC for reading (keeping both methods synchronized by relying on a single model, but <a href="/iqgen/whitepaper.html">that&#8217;s another story</a>). </p>

<p>I strongly suspect we are going to end up offering the bulk of our functionality via generic REST interfaces, mapped both to plain HTTP as well as (something resembling) WS-Transfer, and a smaller set of specific functionality using a more constrained schema. After all these discussions, I&#8217;ve still not made up my mind whether this functionality is best modeled as services with a single ProcessMessage() API, as <a href="http://savas.parastatidis.name/2004/09/27/964a62ec-5da7-49c8-86e9-d120e53e8485.aspx">Savas</a> suggests, or with more specific operations, though &#8230;</p>

<section class="comments">

<div class="comment" id="comment-366">
On <a href="#comment-366" title="Permalink to this comment">September 29, 2004  6:42 AM</a>, <a href="http://www.ebpml.org" title="http://www.ebpml.org" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>Stephan:</p>

<p>I think I found an argument that makes pure REST invalid for most business applications.</p>

<p>If a resource is a resource in its entirety, it is not practical to share this resource with just any service. What typically happens is that a partial representation of the resource is shared. Once this happens you need a dedicated verb indicating what partial state you want and what to do with this image of the partial state once it is sent back. This is where verbs like &#8220;process&#8221; &#8220;create&#8221; &#8220;cancel&#8221;&#8230; appear. OAGIS has proposed a series of business verbs (a small number). I believe this is still RESTful, but the purest may disagree with me. Did you have to front end your transactional updates with verbs such as create, change, cancel,  or were you able to transfer the logic of &#8220;cancel&#8221; to the client? (I&#8217;d be surprised if you can since that would require the client have the knowledge of everything that is related to a purchase order and take decisions on what to do with them in case a PO is canceled -> stop production, notify bill, call UPS,&#8230;).</p>

<p>On another note, I have invited many times the restifarian to create the metamodel of REST and compare it to the metamodel of SOAP. I frankly can stand the hacked URL syntax.  That approach would probably resolve the processMessage() question. There is an incompressible number of semantics that are needed, this is the real question.</p>

<p>I would also be curious to know if the  RESTifarians consider SQL Restful. I would also be curious to hear how SQL and the concept of service can be aligned. If it is not, try to convince people designing business applications without SQL ;-)</p>

<p>This debate is a dead end and the conclusion has long been known.</p>

<p>Cheers,</p>

<p>Jean-Jacques</p>


<div class="comment" id="comment-367">
On <a href="#comment-367" title="Permalink to this comment">September 29, 2004 10:50 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>JJ: I think that accessing or updating only parts of a resource would still be RESTful; this could e.g. be done by addressing an element within a resource with a fragment appended to the URI. (But that&#8217;s probably what you meant by &#8216;hacked URL syntax&#8217;.) </p>

<p>I also think that uniformity is a main aspect of what REST is about, so if you stick to a set of verbs other than GET/PUT/POST/DELETE, that would be fine as well.</p>

<p>As to SQL, I guess it doesn&#8217;t get much more RESTful then that :-)</p>


<div class="comment" id="comment-368">
On <a href="#comment-368" title="Permalink to this comment">September 30, 2004  6:28 PM</a>, <a href="http://www.ebpml.org" title="http://www.ebpml.org" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>Well the problem I have is that RESTifarians always respond to architecture questions by saying &#8220;add this thing here or there&#8221;. (If we expand the character set we can even compress more semantics in less bytes). When you say a fragment appended to the URI, I don&#8217;t mind if at the implementation level this is what happens, but I would like to discuss the semantics of this fragment, how do they relate to what is supposed to be the set of semantics you will ever need to have for REST. I consider cheating if you add meaning other than the verbs and the resources (nouns). (I am not surprised why the RESTifarians tend to avoid going at the conceptual level).</p>

<p>For SQL, sure, the verbs are few enough to look RESTful, but could you elaborate on the &#8220;resource&#8221; aspect of SQL. How different are two SQL statement s targeting the same row with different attributes? Is it two different resources? Can REST support the notion of partial state? </p>

<p>There is always so much handwaving in using REST for what it cannot support readily.</p>

<p>On another note, I never seen &#8220;clients&#8221; deciding where their bytes should be re-directed to a different server, what if I want/need to transform the state I got into another state before I send it to someone else. I am sure someone is going to tell me, hack this or hack that and you can do it. In pratice, this never happens in a so called RESTful application.</p>

<p>JJ-</p>


</section>

