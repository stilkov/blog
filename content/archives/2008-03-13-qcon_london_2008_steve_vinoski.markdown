---
layout: post
title: "QCon London 2008: Steve Vinoski on Serendipity and REST"
date: "2008-03-13T16:32:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Steve Vinoski's talk at QCon London 2008.</p>

<ul>
<li>Steve talks about Serendipity -- I never knew about http://en.wikipedia.org/wiki/The_Three_Princes_of_Serendip</li>
<li>How did a CORBA guy get involved with REST? At IONA, Steve was the IT Engineering department</li>
<li>Built lots of tools, integration w/ Wikis, IRC, ...</li>
<li>Tried to convince IONA to change course towards those things</li>
<li>Failed and switched companies as a result</li>
<li>Has no agenda, does not want to sell anything -- now involved with other stuff</li>
<li>"The definition of a legacy application is 'one that works'" -- QoTD!</li>
<li>Descendants of RPC: CORBA, EJB, .NET, SCA, SOAP, WSDL</li>
<li>Message Queueing and EAI as alternatives</li>
<li>Problems with MQ: Generally proprietary, except for JMS and AMQP</li>
<li>18 months ago, Steve was working on Qpid (Apache AMQP implementation)</li>
<li>EAI products typically centralized hubs, proprietary and expensive, costly</li>
<li>Some ESBs fall into this category (mostly re-labeled EAI products)</li>
<li>Problems with RPC Approaches</li>
<li>Focus on language first
<ul>
<li>tries to fit the distributed system to the language, not vice versa</li>
<li>making distributed calls appear local</li>
<li>expose language-specific objects directly as language-independent services</li>
</ul></li>
<li>Code generation (whether from WSDL or from code) creates deceptively significant consumer-service coupling</li>
<li>Java-to-IDL mapping created horrendously complex IDLs, translated very poorly for other languages</li>
<li>Type system illusions -- no type safety across the wire, type specialization is costly for scalability and reuse</li>
<li>Interfaces are protocols -- specific interfaces mean specific protocols</li>
<li>Data specialization: XML is better than IDL or native language types (because of reduced dependency via XPath)</li>
<li>Unless you generate code from it, which makes the benefits disappear</li>
<li>Integration problem summary: proprietary approaches too expensive, standard approaches focus on implementation languages, not distributed systems issues, new interfaces -> new application protocols (something he never notics ), ad hoc data formats coupled to interfaces -- all of this inhibit reuse</li>
<li>Detour: Unix Reuse</li>
<li>A tool like <code>awk</code>, written ages ago, can still be combined into brand new tools via a pipe</li>
<li>Unix uniform interface: file-like object</li>
<li>stdin/stdout/stderr</li>
<li>standard ways to get data from/to applications</li>
<li>A question to consider -- was the pipe invented on day 1? Or discovered later -- serendipity?</li>
<li>Refresher on HTTP's uniform interface</li>
<li>Explains idempotency of GET, PUT, DELETE; lack of idempotency of POST</li>
<li>XML-RPC and SOAP/HTTP use just one -- and it's the worth</li>
<li>Uniform interface enables visibility into interactions</li>
<li>enabling caching, monitoring, mediation ...</li>
<li>strong implementation hiding</li>
<li>simplified overall architecture</li>
<li>Original name of REST: "HTTP Object Model"</li>
<li>Most of the stuff Steve's done in the past -- building ORBs and such -- dealt with the effects of having a specific interface (generating code, creating the runtime infrastructure). Most of this stuff disappears in REST</li>
<li>with distributed objects, there's usually a lower layer that's generic, with generated code on top</li>
<li>no generated code necessary</li>
<li><code>curl</code> more useful than a browser </li>
<li>Server-side dispatching becomes easier</li>
<li>Explanation of susconstraints (resource identification, representation exchange, self-describing messages, HATEOAS)</li>
<li>Representation format not resource-specific </li>
<li>Many different formats -- even XML if one's sad and desperate</li>
<li>Media types registered with IANA</li>
<li>Makes datatypes an orthogonal concern</li>
<li>Recommendation: Beautiful Soup library for Python if you ever need to do screen scraping</li>
<li>Hypermedia constraint -- resources provide URIs that guide the client</li>
<li>RPC systems conflate methods and data, while REST separates methods and data formats </li>
<li>In REST, fixed set of methods, many standardized data formats</li>
<li>Question: Why would REST separate data and methods better than other approaches?</li>
<li>Answer: REST encourages this, other approaches encourage the opposite</li>
<li>Things like caching are generically possible</li>
<li>Praise for the REST dissertation - "the clearest architecture document he's read"</li>
<li>Enhancing reuse possibilities - separate libraries and tools helping with data and methods</li>
<li>Libraries for interception and mediation, caching </li>
<li>Example: bug tracking system with HTML, XML, XCS, JSON data</li>
<li>Even while working for a company that built RPC tools, he was using lightweight, Web approaches to do internal stuff</li>
<li>Independence -- each of the resources in the example system could be added independently without disturbing existing resources and formats</li>
<li>Plant the seeds to see what grows</li>
<li>Summary: RPC-oriented systems try to extend language paradigms over the wire -- encourages variation (in methods, datatypes), which can't scale</li>
<li>REST is purpose-built for distributed systems, properly separates concerns and allows constrained variability only where required</li>
<li>"Roy Fielding: Engineer for Serendipity" -- which, according to Steve, is possible</li>
<li>Question: Are data grids instances of REST because they have a uniform interface?</li>
<li>Answer: only possible by looking at all constraints, not just the uniform interface -- maybe, unknown: idempotency, restricted variation in data formats</li>
<li>Comment by Joe Armstrong: How about adding data immutability -- outlaw PUT and POST, instead add APPEND</li>
<li>Answer (both Steve and I): POST really is APPEND; you could just outlaw PUT</li>
</ul>

<section class="comments">



<div class="comment" id="comment-1684">
On <a href="#comment-1684" title="Permalink to this comment">April 20, 2008  3:12 AM</a>, <a href="http://www.sohbetim.gen.tr" title="http://www.sohbetim.gen.tr" rel="nofollow">sohbet</a>
said:
<p>thanked post</p>


</section>

