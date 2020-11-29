---
layout: post
title: ""
date: "2008-09-30T14:22:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Ian Robinson's very interesting talk at JAOO.</p>

<ul>
<li>Context: Engagement w/ a large entertainment and communications company.</li>
<li>replace 20+ year old VAX BASIC billing application</li>
<li>order capture, fulfilment, product catalogue, field force management, …</li>
<li>new design for the next 10-15 years</li>
<li>general SOA-like structure - product mgmgt, customer mgmt, order mgmt, provisioning, …</li>
<li>12-14 business meaningful services, relatively self-contained</li>
<li>overall view of service estate doesn't change when new products are introduced or processes changed</li>
<li>self-sufficient business services - no chatty service architecture</li>
<li>each service can do its job from beginning to end</li>
<li>services contain the data they need</li>
<li>[very nice - actually matches my understanding of services perfectly]</li>
<li>redundant information in services - therefore no hard runtime dependencies </li>
<li>is it really redundant? no - order management and product management both need product info, but don't care about the others</li>
<li>within the service boundary, there may be other distributed development to support e.g. wrapping a COTS app</li>
<li>how are these data items replicated between systems?</li>
<li>first question: who needs what</li>
<li>events are used to distribute information</li>
<li>some events related to entity state, some related to application state (e.g. service ordered, service provided)</li>
<li>Implementation options for events: point to point (publisher maintains subscriber list), bus/middleware, consumer pull events (consumers poll publishers, guaranteed delivery delegated to consumers, no list of subscribers to maintain)</li>
<li>bridge within the service that wraps a 3rd party app: atom client retrieves feed and applies them via the vendor app's WS </li>
<li>Atom - what does published information look like</li>
<li>AtomPub - how is information published</li>
<li>atom feeds for specific time ranges - request to generic URI, specific URI returned in Content-Location header</li>
<li>link rel=next to get to the previous archive (decided to stick with Atom terminology instead of inventing a "previous" rel)</li>
<li>entries have a self link - each entry can be returned individually</li>
<li>multiple category elements to classify (e.g. "product" and "created")</li>
<li>links to objects within the entries as XML "Href" elements [I would have preferred an attribute called href]</li>
<li>clients can follow links to retrieve the full archive</li>
<li>interesting link to Pat Helland's data on the inside, data on the outside - set cache max age to 30 days for stuff that's no longer mutable (events of the past)</li>
<li>cache responses locally when following links</li>
<li>used WinInet local cache (same one as used by IE) for implementation</li>
<li>navigate backwards first, then forward again; second request served from local cache</li>
<li>archive size/granularity could change - as long as clients just follow links, they don't care</li>
<li>support for conditional GETs and ETags</li>
<li>"conservative" in using application/xml for the content types instead of some custom media type</li>
<li>etag attribute in links to underlying resources <link etag="6" />http://...</li>
<li>client can extract ETag, do a conditional GET [nice idea]</li>
<li>high degree of connectedness</li>
<li>[unfortunately, time was up - a pity. I'd have loved to here more.]</li>
</ul>


