---
layout: post
title: "FAQ Entry: What's this REST vs. SOA Debate About?"
date: "2007-09-27T18:43:00+01:00"
comments: false
categories: 
---

<p><em>Question</em>: What&#8217;s up with this SOA-vs.-REST thing?</p>

<p><em>Answer:</em> That&#8217;s not an easy question. The reason is that &#8220;SOA&#8221; is not defined by any single source, so different people mean different things when they use the term. Things are a little different for REST, since it&#8217;s coined by a single person and defined in a single paper. To be fair, some people point out that there is often a lot of discussion of what is and what isn&#8217;t &#8220;RESTful&#8221; &#8212; I believe those disagreements are at a different level &#8230; but let&#8217;s just ignore this for now and get back to the original question. </p>

<p>When some people say &#8220;SOA&#8221;, they talk about an approach to managing, organizing and structuring IT systems in a large enterprise context. Instead of applications, services become the central concept; business and IT are aligned more closely; services are submitted to strong governance processes &#8230; whether or not you agree with any of these ideas, you can see that they&#8217;re pretty high-level and not concerned with any particular implementation approach. When defined this way, you could implement an SOA approach using CICS and COBOL on a mainframe, C++ and CORBA on Unix, Java/Java EE, .NET or whatever option you prefer. Web services, POX and REST (or rather: RESTful HTTP) are also implementation options from this perspective. At this level, SOA and REST can&#8217;t be compared &#8212; there at completely different levels of abstraction, and address different problems. Let&#8217;s call the level this definition of SOA addresses <em>the business level</em>.</p>

<p>Others view &#8220;SOA&#8221; much more technically. To them, SOA is the abstract architecture behind the Web services stack (SOAP, WSDL, WS-* etc.). There are service providers that expose services that are described with formal contracts; non-functional aspects are described via policies; there&#8217;s a registry that contains service descriptions and is used both at design time and run time; messages, containing documents as a payload, flow from consumers to providers and back &#8230; this technical description is not intended to be a definition, because until now there has been no agreement what such a definition could look like. But it&#8217;s pretty different from REST, because REST defines some pretty strict constraints &#8212; most importantly, a uniform interface, identifiable resources, and hypermedia. There is no similar agreement (a set of constraints) about SOA, which is often criticized by RESTafarians. We can call this level <em>the technical level</em>.</p>

<p>Things often become confusing when one side talks about SOA <em>on the technical level</em> and compares it to REST, pointing out differences and arguing about the respective strengths, and the other side is talking about <em>business level SOA</em>. It is <em>absolutely</em> meaningful to talk about the relative merits of <em>technical level SOA</em> and REST as implementation options for <em>business level SOA</em>.</p>

<section class="comments">



<div class="comment" id="comment-1458">
On <a href="#comment-1458" title="Permalink to this comment">September 27, 2007 10:20 PM</a>, <a href="http://blogs.msdn.com/mikechampion" title="http://blogs.msdn.com/mikechampion" rel="nofollow">Mike Champion</a>
said:
<p>Isn&#8217;t the most significant distinction between &#8220;Resource Orientation&#8221; vs &#8220;Service Orientation&#8221;? One asks us to conceptualize distributed software systems as webs of linked &#8220;resources&#8221; (whatever those are, which is continually debated), and prescribes that they be manipulated with a uniform set of operations.  In practice, this means the Web (1.0 anyway). The other asks us to conceptualize systems as interlinked services (whtever they are, which is continually debated) to be invoked and composed with one another.  I think Werner Vogels <a href="http://www.acmqueue.com/modules.php?name=Content&amp;pa=showpage&amp;pid=388" rel="nofollow" /><a href="http://www.acmqueue.com/modules.php?name=Content&amp;pa=showpage&amp;pid=388" rel="nofollow">http://www.acmqueue.com/modules.php?name=Content&amp;pa=showpage&amp;pid=388</a> has the clearest and most reality-based description of what this means in practice: &#8220;For us service orientation means encapsulating the data with the business logic that operates on the data, with the only access through a published service interface. No direct database access is allowed from outside the service, and there&#8217;s no data sharing among the services.&#8221;</p>

<p>One could presumably implement an ROA with CORBA, WS-<em>, etc. as well as HTTP &#8230; and one could presumably implement an SOA with HTTP and URIs rather than WS-</em> , etc.  </p>

<p>I don&#8217;t necessarily agree that &#8220;REST defines some pretty strict constraints — most importantly, a uniform interface, identifiable resources, and hypermedia. There is no similar agreement (a set of constraints) about SOA&#8221;.  The way I see it, REST prescribes strinct contstraints on the operations used to manipulate resources, but says nothing about the representation of the resources (that is, format of the content at the end of the URIs).  Service orientation doesn&#8217;t prescribe anything about the set of operations that can comprise a service, but does insist that the service interfaces be rigorously specified &#8212; the protocols for invoking the services, and the format of any results returned from the invocation.</p>


<div class="comment" id="comment-1459">
On <a href="#comment-1459" title="Permalink to this comment">September 27, 2007 11:16 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Mike, all of this, IMO, puts you firmly in the &#8220;technical&#8221; camp. Within this, we can debate whether or not ROA or SOA is &#8220;better&#8221;. But I only wanted to point out that before we have a discussion like this, we need to agree that we are indeed talking at the same level.</p>

<p>I fully agree one could implement REST with Web services, although there&#8217;s little point in doing so. </p>

<p>When you write &#8220;Service-orientation &#8230; does insist that the service interfaces be rigorously specified&#8221;, I agree that this would be a reasonable constraint to define &#8220;technical&#8221; SOA. I just want to point out that there is no single definitive, normative source one could point to that defines this &#8212; i.e. there is no document in the SOA space that plays the same role as Fielding&#8217;s dissertation does for REST.</p>


<div class="comment" id="comment-1460">
On <a href="#comment-1460" title="Permalink to this comment">September 28, 2007 12:05 AM</a>, <a href="http://www.dehora.net/journal" title="http://www.dehora.net/journal" rel="nofollow">Bill de hOra</a>
said:
<p>I think it&#8217;s reasonable to ask &#8220;what is SOA?&#8221; and get a straightforward answer. That there&#8217;s none forthcoming is a concern of mine.</p>


<div class="comment" id="comment-1461">
On <a href="#comment-1461" title="Permalink to this comment">September 28, 2007  8:50 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Bill - while I agree, it&#8217;s hard to discuss the merits of alternative approaches if &#8220;SOA&#8221; is simply dismissed because of this.</p>


<div class="comment" id="comment-1462">
On <a href="#comment-1462" title="Permalink to this comment">September 28, 2007 10:05 PM</a>, <a href="http://www.metamaxim.com" title="http://www.metamaxim.com" rel="nofollow">Ashley McNeile</a>
said:
<p>Given the comments posted today, 28th Sept by Jan Algermissen and myself to the Yahoo &#8220;service orientated architecture&#8221; list, it would be interesting to know whether you regard the ideas of &#8220;hypermedia as the engine of application state&#8221; as a business or a technical concept,</p>


<div class="comment" id="comment-1463">
On <a href="#comment-1463" title="Permalink to this comment">September 29, 2007  9:16 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I don&#8217;t mean to evade the question, but I&#8217;d argue this is a case where a technical concept can have business implications. </p>

<p>(Personally, I&#8217;m convinced that REST has much greater potential to support new business models than technical SOA because of its support for connecting stuff that wasn&#8217;t planned to be connected.)</p>


<div class="comment" id="comment-1464">
On <a href="#comment-1464" title="Permalink to this comment">October  3, 2007  4:52 AM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>The way I was raised, SOA was envisioned to federate disparate systems within an enterprise.  Step one created a canonical data model, step two created a service layer (resource-oriented or not) to bind those systems into the SOA using old-fashioned integration techniques.  Interestingly, the few SOA approaches I’ve been able to look at have leaned toward a resource-oriented approach in the service layer.  But in the end, these people had to work with what they’ve had, so the interface wasn’t absolutely uniform.  The quality of the uniform interface rests largely on having a well thought-out URI strategy, which is rarely done (yet).  Nevertheless, I think debating SOA vs. REST is misleading and an injustice to both.</p>


<div class="comment" id="comment-1465">
On <a href="#comment-1465" title="Permalink to this comment">October  3, 2007  9:54 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I actually agree that it should not be SOA vs. REST &#8212; I strongly believe that REST is the best (or possibly: least bad) way to achieve high-level SOA goals.</p>


</section>

