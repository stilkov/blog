---
layout: post
title: "QCon SF: Pete Lacey -- \"Demonstrating the 'ilities' of REST\""
date: "2007-11-08T23:48:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Pete Lacey&#8217;s talk &#8220;Demonstrating the &#8216;ilities&#8217; of REST&#8221;.</p>

<ul>
<li>Agrees with everything Steve said, disagrees with almost everything Sanjiva said</li>
<li>Degrees of RESTfulness - adding and removing constraints is perfectly fine</li>
<li>for every constraint, there is a trade-off</li>
<li>table showing constrains, properties, trade-offs</li>
<li>topic: accessibility, a new &#8220;ility&#8221;, the sum of: simplicity, scalability/2 and modifiability/2</li>
<li>scalability: both at runtime (1 million simultaneous clients) and ability to connect (500,000 to begin with)</li>
<li>the ability to manipulate information as needed</li>
<li>also a topic: modifiability (extensibility, evolvability, configurability, reusability, customizability)</li>
<li>Rule #1: Everything of value is URI addressable</li>
<li>Rule #2: see rule#1 - it&#8217;s that important</li>
<li>URIs enable both versions of the Web</li>
<li>they can be linked to written down, memorized, emailed, IMed, tagged, voted on</li>
<li>information accesible to one degree or the other to anyone: managers, shadow IT, proto-geeks and mom</li>
<li>systems can be extended simply by adding new resources</li>
<li>use descriptive URIs for human accesibility</li>
<li>Client developers should treat URIs as opaque: code shot not assemble URIs based on a perceived pattern. does not conflict with descriptive URIs (as they are for human usage)</li>
<li>Rule #4: the self-descriptive messages constraint</li>
<li>media types should be selected so that the maximum number of clients can participate</li>
<li>strongly consider XHTML</li>
<li>consider multiple representation formats</li>
<li>suggestion to use custom MIME types</li>
<li>XML namespaces is not an alternative, especially because they can&#8217;t be sniffed (they might be at lower levels of the document)</li>
<li>JSON, Atom feeds, PDFs, images, audio (where no MTOM, SwA, DIME etc. is required)</li>
<li>consider unique resources for each representation - content negotiation hasn&#8217;t worked out as well: UIs, especially browsers don&#8217;t allow to modify Accept headers</li>
<li>learn and use HTTP headers</li>
<li>a message is more than the entity body (Accept-*, Content-type, location, last-modified, etags, expires/cache-control)</li>
<li>renewed recommendation to use XHTML: it&#8217;s not simply a display format</li>
<li>XHTML is real XML - parseable, XPathable, XQueryable, XCeterable</li>
<li>more accessible</li>
<li>information available to anyone with a browser (IE issues aside)</li>
<li>has useful constructs for links, lists, name/value pairs</li>
<li>graceful degradation</li>
<li>class, rel,e tc. provide semantic value</li>
<li>consider returning stylesheets and nicely formatted pages too - honored by browsers, ignored otherwise</li>
<li>diversion of microformats</li>
<li>reference to http://microformats.org</li>
<li>Rule #5: the uniform interface constraint (description of safety &#38; idempotence of GET, PUT, POST, DELETE)</li>
<li>Rule #6: more on the uniform interface constraint - use HTTP response codes</li>
<li>Corollary to rules 1-6: DON&#8217;T create one or a few URLs and overload them</li>
<li>Client authors can no longer assume HTTP semantics - each URI is accessible via a unique networking protocol</li>
<li>if it&#8217;s not on the Web, it doesn&#8217;t exist</li>
<li>demo of &#8220;ilities&#8221; using a sample expense reporting system</li>
<li>picking on Sanjiva&#8217;s line: are you smart enough to build a RESTful system? yes!</li>
<li>a mental leap is required to switch from methods/operations to REST</li>
<li>(comments while demoing a Rails app)</li>
<li>The URL to a RESTful API should lead the developer to a Web app</li>
<li>Glen: Doesn&#8217;t having an &#8220;edit&#8221; operation in URI not conflict with the statement that there shouldn&#8217;t be a method in the URI?</li>
<li>Pete: First, HTML forms don&#8217;t support PUT and DELETE</li>
<li>&#8220;edit&#8221; identifies the HTML form</li>
<li>HTML 4 requires compromises, HTML 5 will support PUT and DELETE</li>
<li>Pete claims Rails puts in a PUT or DELETE via Javascript (I don&#8217;t think so)</li>
<li>shows XML version of appending .xml at the end</li>
<li>switches on a little FireFox plugin that shows HTTP headers</li>
<li>shows microformat for hCal to demo accessibility increase</li>
<li>Question/Comment: you can use cookies and still be RESTful, if you don&#8217;t use sessions</li>
<li>Answer: the hard thing is cookies can have any meaning, because of this intermediaries might decide to not cache</li>
<li>Suggestion to avoid cookies, rely on HTTP authentication</li>
<li>discussion about whether or not HTTP authentication </li>
<li>shopping carts in the 90s were built using sessions - the RESTful way is to use resources</li>
<li>shows HTML source, including semantically marked up calendar stuff</li>
<li>switches to Excel, uses &#8220;Import external data&#8221;, enters collection resource URI, pulls stuff from XHTML table to Excel</li>
<li>(Excel takes ages?)</li>
<li>switches to Word, uses Inser Field, IncludeText, Reference, gets expense reports in both clients</li>
<li>Excel and Word as examples of clients of my API without any knowledge before</li>
<li>shows how web-based feed reader can retrieve data from the app</li>
<li>Prompted by Patrick Logan, Pete agrees REST has pretty good tooling</li>
<li>don&#8217;t underestimate how much debugging with your browser helps</li>
<li>shows demo curl command line. (Weak, he had it in a script. I always actually type them in :-)) </li>
<li>Windows Active Desktop! showing XHTML</li>
<li>slides again: a Web application is a RESTful application</li>
<li>Rule #7: &#8220;The hypermedia as the engine of app &#8230; oh, never mind. The hypertext constraint&#8221;</li>
<li>copious links to other related data and to guide clients through the app</li>
<li>allow for URIs to change</li>
<li>allow for clients to dynamically determine what to do next</li>
<li>allows for clients to discover resources</li>
<li>allow for independence of location and security boundaries </li>
<li>Adapted from Stu Charlton: forms with GET are just links</li>
<li>shows simple Ruby client that uses XPath to extract data and act on it</li>
<li>(lightly abrupt ending because the time was up)</li>
</ul>


