---
layout: post
title: "Hypermedia Benefits for M2M Communication"
date: "2012-06-22T15:00:00+01:00"
comments: true
categories: REST
---

Hypermedia is the topic that generates the most intensive
discussions in any REST training, workshop, or project. While the
other aspects of RESTful HTTP usage are pretty straightforward to
grasp and hard to argue with, the use of hypermedia in
machine-to-machine communication is a bit tougher to explain.

If you are already convinced that REST is the right architectural
style for you, you can probably stop reading and switch over to Mike
Amundsen's excellent <a href='http://www.amundsen.com/hypermedia/hfactor/'>"H Factor" discussions</a>.  That may be a bit tough to start with, though, so I 
thought it might make sense to explain some of the ways I use to
"pitch" hypermedia. I've arrived at a number of explanations
and examples of meaningful hypermedia usage, explicitly targeted at
people who are not deep into REST yet:

* _"Service Document" and "Registries"_: Especially for people with an
  SOA/SOAP/WSDL/WS-* background, the idea of putting at least one
  level of indirection between a client (consumer) and server
  (provider) is well established. A link in a server response is a way
  for a client to not couple itself to a particular server address,
  and a server response including multiple links to "entry point"
  resources is somewhat similar to a small registry. If providing
  links to actual entry point resources is the only purpose of a
  resource, I've become used to calling it a "service document". Of
  course these documents themselves can be linked to each other,
  allowing for hierarchies or other relationships; they can support
  queries that return a subset of services; they can be provided by
  different servers themselves; and they are way more dynamic than a
  typical registry setup. In other words, the very simple approach
  included in HTTP is far more powerful than what most crazily
  expensive registries provide.
* _Extensible contracts_: The merits of being able to link to resources
  can be exploited to add functionality to existing systems without
  breaking their contracts. This is most visible in server responses
  that have one or more places where you can put additional links. As
  your server or service evolves, you can add links that will be
  ignored by existing clients, but can be used by those that rely on
  them. The concept of "a link to a resource" is both sufficiently
  generic and specific to be meaningful enough, especially if you
  include a way to specify what they actually mean via a link
  rel=... approach (but more on that in a separate post).
* _Co-Location Independence_: What I mean by this slightly weird term is
  the fact that while resources that are exposed as part of a service
  interface are sometimes (or maybe even often) designed in a way that
  requires them to be part of the same implementation, they very often
  are not, i. e. they could at least in theory be part of a different
  system. (In fact you can reasonably argue that there should be no
  assumption about this at all, neither on the server nor the client
  side for something to be rightfully called "RESTful", but I simply
  haven't found that to be doable in practice.) In those cases where
  resource don't need to be hosted by the same implementation, you can
  and should couple them via links and have clients navigate them
  instead of relying on common URI paths.
  
There are quite a few more examples to talk about, but I won't do that
now <a href='https://twitter.com/stilkov/status/215916063790075907'>as I promised to publish something today </a> and don't want to get into
the habit of keeping drafts lying around for too long again. (I know,
lenghty this is probably not. Sue me.) So please
let me know in the comments what you think of these three if you're just
starting to pick up REST, and what additional ways of explanations you
use if you already have done so.
