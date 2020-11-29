---
layout: post
title: "QCon London 2008: Paul Fremantle on Using REST for WS-*"
date: "2008-03-13T15:06:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Paul Fremantle's talk at QCon London 2008.</p>

<ul>
<li>WSO2 has historically been associated with WS-* only</li>
<li>Experts and standards authors, specifically Paul and Sanjiva, working for WSO2</li>
<li>Talk is about applying REST to a real application problem - managing web services metadata</li>
<li>Paul is co-founder and CTO of WSO2, chair Apache Synapse, co-chair WS-TX</li>
<li>Background on classic SOA triangle, UDDI</li>
<li>In reality: Not just SOAP, but others as well (SOAP, JMS, REST, XML/HTTP)</li>
<li>Explicit distinction between REST and XML/HTTP</li>
<li>Failure: No decent registry/repository</li>
<li>Also a failure of UDDI </li>
<li>Two incumbent parties: </li>
<li>Infravio, bought by WebMethods, bought by Software AG</li>
<li>Systinet, bought by Mercury, bought by HP</li>
<li>Those two are the Rolls Royces of the space</li>
<li>Open source ebXML, UDDI projects, no wider share</li>
<li>A long time ago, couldn't find a way to map a simple model for configuration data to UDDI</li>
<li>Synapse supports pulling configuration via HTTP (from Web server, Subversion, whatever)</li>
<li>UDDI history/assumption: homogenous thinking, everyone implements the same interface, fundamentally based on the same model as Windows Registry (long UUIDs - tModels, lots of interlinking)</li>
<li>Registry characteristics, requirements - different needs for business users, SOA developers, programmers</li>
<li>Re-iteration of REST principles</li>
<li>Hasn't seen Web UIs that are also APIs - e.g. people can't set Accept headers for debugging purposes in their browsers</li>
<li>Sessions are a problem - session-based sites are not good candidates </li>
<li>Hard to capture links/conform to HATEOAS</li>
<li>How to apply this to SOA metadata?</li>
<li>AtomPub/Atom as the basis for the registry, optional Java client library</li>
<li>Example of Atom feed</li>
<li>Registry is one Atom Workspace w/ many collections</li>
<li>Benefits of AtomPub: clear behavior of POST, GET, PUT, DELET</li>
<li>Example: POST including Slug, 201 response + URI</li>
<li>Well-defined protocol, interop, does almost what they needed</li>
<li>Issues: no nesting of collections, ambiguity about creating new collections, no definitions of queries</li>
<li>AtomPub isn't just for Atom - how to POST "other stuff" (create media resources)</li>
<li>AtomPub covers the most obvious metadata</li>
<li>Well-defined link model</li>
<li>URI design: different paths for web UI, Atom, resource itself - no Accept headers</li>
<li>specific URL schemes for different kinds of access (e.g. all tags)</li>
<li>update means new version</li>
<li>keep track of depencies, e.g. between WSDL and Schema</li>
<li>Version accesible via a URI as well</li>
<li>Similarity to decisions made by Google for GData</li>
<li>POSTing a collection to a collection (as a media entry) creates a "nested" collection (not an AtomPub concept, but common sense</li>
<li>Queries still work in progress: no own query language yet</li>
<li>current solution: query stored as a resource in the registry, parameters passed via GET</li>
<li>Maybe there could be a generalized REST or Atom query language</li>
<li>Java API: registry proxy, Resource concept, get and put methods</li>
<li>Quick registry live demo</li>
<li>Support for ratings (typical 5 star thing), arbitrary properties</li>
<li>Main problem in SOAs: trust as a root cause</li>
<li>Solution: comments - work much better than complicated approaches</li>
<li>"Social Governance"</li>
<li>What about WS-*? What does the registry offer?</li>
<li>storing, searching, managing schemas, WSDLs, policies</li>
<li>dependency links</li>
<li>validity</li>
<li>conformance to guidelines</li>
<li>lifecycle</li>
<li>WS-* metadata isn't enough for the real world - some real life annotations are needed</li>
<li>handlers whenever a POST or GET are issued</li>
<li>WSDL/Schema dependencies are tracked, internal dependency mapping</li>
<li>WS-I check will be implemented (but isn't yet)</li>
<li>Support for URL handlers (invoked for anything POSTed to particular URLs)</li>
<li>Lifecycle handling - still basic, more coming in version 1.1</li>
<li>What does Paul think about REST?</li>
<li>One should be skeptical about REST
<ul>
<li>Even in this most obvious scenario, too many design choices are to be made</li>
<li>Even if subset to Atom/AtomPub, still a lot of design choices to be made</li>
<li>Still needed very smart people</li>
</ul></li>
<li>But: this has worked out very well
<ul>
<li>Building the human interaction and social aspects</li>
<li>Unification of the human interface with the machine interface</li>
<li>Atom feeds</li>
</ul></li>
<li>Human design</li>
<li>Designed to work on any scale (local, departmental or shared, enterprise-wide or Internet scale)</li>
<li>Running middleware systems directly from this metadata can offer the same scaling</li>
<li>Mashup itself server uses registry</li>
<li>http://mooshup.com example</li>
<li>Input is welcome: http://wso2,org/projects/registry/</li>
<li>Audience question: what's the relationship between Subversion (or similar) and the registry, i.e. if you currently manage your stuff in Subversion, what are you supposed to do?</li>
<li>Answer: First, Subversion could be a backend</li>
<li>But: how do you cluster it?</li>
<li>Goal: Being able to rely on the registry <em>instead of</em> the configuration management system</li>
<li>Follow up question: do you want to compete with Subversion?</li>
<li>Answer: no, just for contracts and policies; for this usage, better than SVN</li>
<li>Question: would you recommend migrating stuff from SVN to the registry?</li>
<li>Answer: Yes.</li>
<li>Question: What about Java Content Repository (JCR)?</li>
<li>Answer: Mule did something very similar; its registry, Galaxy, it uses JCR as the backend. WSO2 didn't because when he looked at it, Apache's JCR implementation was too fat</li>
<li>Maybe AtomPub is JCR for the Web?</li>
<li>In hindsight, Dan Diephouse blogged about having problems</li>
<li>Question/comment: JCR has a versioning model, resource typing, ...</li>
<li>Answer: Paul believes in wire standards, not APIs</li>
<li>Question (myself): Can Galaxy and WSO2's registries be merged?</li>
<li>Answer: possibly, at least some synching would make sense</li>
<li>But maybe having two companies not doing UDDI suddenly makes a movement</li>
<li>Another difference: WSO2 did it openly, MuleSource did it in stealth mode</li>
</ul>

<section class="comments">



<div class="comment" id="comment-1648">
On <a href="#comment-1648" title="Permalink to this comment">March 13, 2008  4:06 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>On &#8220;Be skeptical of REST&#8221;, I thought Mark really meant to &#8220;be aware&#8221; &#8212; the simplicity is deceiving. He was listing examples of issues his team resolved, but people new to REST might not have come across before.  IMHO.</p>


<div class="comment" id="comment-1649">
On <a href="#comment-1649" title="Permalink to this comment">March 13, 2008  5:07 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>Oops.  I meant Paul, not Mark.</p>


<div class="comment" id="comment-1650">
On <a href="#comment-1650" title="Permalink to this comment">March 13, 2008  5:25 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>I agree, that&#8217;s how I understood it as well.</p>


<div class="comment" id="comment-1651">
On <a href="#comment-1651" title="Permalink to this comment">March 14, 2008  8:56 AM</a>, <a href="http://pzf.fremantle.org" title="http://pzf.fremantle.org" rel="nofollow">Paul Fremantle</a>
said:
<p>Stefan</p>

<p>Thanks for taking such thorough notes.</p>

<p>The only correction I have is about the fatness of JackRabbit. Its actually very thin. But when I first looked at it, it was fat, but since then they have modularized and slimmed down. The main reason for not using JackRabbit, JCR or even SVN was the complexity factor - having more moving parts to manage and cluster and deploy in production.</p>

<p>Paul</p>


</section>

