---
layout: post
title: "QCon SF: Dan Diephouse -- \"Building your next service with the Atom Publishing Protocol\""
date: "2007-11-09T02:03:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes on Dan Diephouse&#8217;s talk &#8220;Building your next service with the Atom Publishing Protocol&#8221;.</p>

<ul>
<li>Atom history (created out of frustration with existing formats and protocols)</li>
<li>Introduction to the Atom feed structure</li>
<li>Relation of Atom feed into the AtomPub model</li>
<li>Collections are just Atom feeds - two types of entries: Entry, Media Link Entry</li>
<li>Services and Workspaces - workspace contains collections, collections contain entries</li>
<li>Glen Daniels asks why collections don&#8217;t simply contain collections</li>
<li>There is no way to work with the Workspace through the protocol (unfortunately)</li>
<li>Sanjiva: doesn&#8217;t the service document introduce coupling to the content types accepted? Dan: you can keep it general, or accept more. Again: </li>
<li>Dan believes the service document is very close to a full service description, but there&#8217;s still no way to link a MIME type to a schema</li>
<li>Atom specifies how to edit, delete, create, resources in collection</li>
<li>extensible protocol</li>
<li>properly uses HTTP</li>
<li>sample set of resources: GET /, retrieve service document, GET first resource, get feed</li>
<li>Entries contain a set of links - you can define your own via rel attribute</li>
<li>POST an entry to collection, including a client-generated unique ID - result: Location and entry document (server creates resource, creating the URI)</li>
<li>GET will return entry, including ID (which my or may not be the same as the one supplied by the client) - server uses the client ID to ensure reliable POSTing</li>
<li>Some discussion whether the client-supplied ID is a bad or not - agreement that if it&#8217;s a unique ID, everything is fine</li>
<li>PUT will update the entry</li>
<li>ETag headers specified in the protocol</li>
<li>Atom supports non-XML and arbitrarily large data by putting them into media link entries</li>
<li>more explanation of this showing a picture collection</li>
<li>POSTing a picture, including a slug for the title - server returns an entry including the picture metadata and a link to the actual binary data</li>
<li>Atom defines the rel values</li>
<li>Question: there is no way to specify binary and metadata in a single request. Answer: no. </li>
<li>Multipart is perfectly feasible (as a private extension to the protocol)</li>
<li>why use Atom?</li>
<li>Atom is widely understood, adds ubiquitous elements which have meaning across all contexts - summary, content, updated date, ID, links</li>
<li>clients do not need to understand app-specifics to interact with the service</li>
<li>AtomPub guarantees that you&#8217;ll follow RESTful best practices</li>
<li>avoid writing your own protocol</li>
<li>many frameworks are popping up</li>
<li>building services patterns and strategies</li>
<li>Frank Zappa quote on stupidity ;-) including reference to Sanjiva&#8217;s talk</li>
<li>(tuned out here for a few seconds to order an iPhone, sorry)</li>
<li>Dan terms Open Search description &#8220;the WSDL for search&#8221;</li>
<li>offers a way to tell people how to search your service</li>
<li>Opensearch defines a &#8220;rel&#8221; link</li>
<li>some quick notes about GData: &#8220;simple standard protocol for reading and writing data&#8221;</li>
<li>not that simple from Dan&#8217;s point of view</li>
<li>standard way to query feeds, defines optimistic concurrency model, way to authenticate users, common elements for Google services, batch operations; all built on AtomPub</li>
<li>at least one Google-independent implementation of GData (in Abdera)</li>
<li>APP doesn&#8217;t do batch - GData does, but hasn&#8217;t received warm reception</li>
<li>feed with &#8220;operation&#8221;-specific operations in the feed</li>
<li>while there&#8217;ve been many complaints, there hasn&#8217;t been an alternative suggestion</li>
<li>some discussion about the right batch model - suggestions from Stu: either pick a super-resouce and update that, or use a single connection and pipe through it</li>
<li>Mike Herrick points to James Snell&#8217;s suggestion to use multi-part</li>
<li>Stu: reasons against pipelining include broken intermediaries</li>
<li>Suggestion from Patrick Logan: nothing wrong with submitting many things at once and retrieve results in a feed</li>
<li>Thoughts on GData: does it expose a weakness (AtomPub is not enough) or a strength (can be extended)? Dan thinks the latter</li>
<li>Hierarchies not easily modelled</li>
<li>Standard suggestion: put a link to the collection into an entry (in a collection element) - possibly adding rel attributes if there&#8217;s more than one collection</li>
<li>Client needs to know the collection element is there, not a required part of Atom</li>
<li>Question: Any experience using RDFa for collections? Answer: no - RDF scares him :-)</li>
<li>Eventing: usable with any Atom client - for business events, exceptions, fault monitoring &#8230; powerful combination with OpenSearch</li>
<li>Security: first, be sure you know your goals - SSL, HTTP Auth, WSSE, Google Auth, XML Sig and Enc</li>
<li>Individual Atom elements can be signed and encrypted; enables use cases where a collection contains items signed or encrypted by different parties</li>
<li>When not to use AtomPub: when data is not time-indexed, universality doesn&#8217;t yield any benefits, batch, performance, messaging may be a more appropriate model, hierarchy kinda sucks, transactions</li>
<li>Next up: a possibly pointless comparison to WS-*</li>
<li>scalability similar; feature applicability: WS-* provides message ordering, security, trust; but also WSDL, complexity, interoperability problems</li>
<li>WS-* easier for developers than AtomPub</li>
<li>Is AtomPub the one true protocol? no, but it can be applied in a wide variety of business apps</li>
<li>universality, hypertext model is powerful, AtomPub is a great example of a RESTful application</li>
</ul>


