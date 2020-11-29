---
layout: post
title: "REST vs. Websockets, oh my"
date: "2012-02-28T19:31:00+01:00"
comments: true
categories: REST
---

There is an entirely absurd discussion going on about "REST
vs. Websockets", predictably claiming that in the long term, REST will
be succeeded by Websockets. This is stupid on many levels. I'll try
to be brief:

* To be pedantic, REST vs. ... almost never makes sense, as people are
  rarely talking about REST (the architectural style) in comparison to
  another architectural style. But never mind, let's assume that what
  was meant was actually "RESTful HTTP" vs. "Websockets", then ...
* Websockets is not something "more", it doesn't add something, it's
  not dynamic, or interactive, or in any way "good" -- unless you make
  the same claim about TCP. Websockets essentially allows you build
  your own proprietary protocols that may or may not be great, with
  all the typical advantages and disadvantages these end up having:
  possibly better performance, possibly better suited to the specific
  task at hand, less standardized, not widely implemented, etc. It's
  not a case of one being better than the other, it's about being
  different.
* In the long run, HTTP (used in a way aligned with its architectural
  goals) will continue to have benefits for loosely coupling
  systems. If that's what you want, it makes the most sense. If you're
  after the most efficient communication possible, and are willing to
  sacrifice some of the loose coupling -- fine, go ahead, use
  Websockets. But it's not as if one will supersede the other.
* Does this mean I claim that HTTP is perfect? Of course not, it most
  definitely could be improved. But if this improvement comes, it's
  definitely going to introduce more, not less constraints.
