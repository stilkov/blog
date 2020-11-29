---
layout: post
title: "PATCHing Rails"
date: "2012-02-26T11:09:00+01:00"
comments: true
categories: REST Rails
---

As mentioned on the Ruby on Rails weblog, Rails 4.0 will include
(optional) support for <a href='http://weblog.rubyonrails.org/2012/2/26/edge-rails-patch-is-the-new-primary-http-method-for-updates'>partial updates via PATCH</a>, a change included to better comply to the HTTP spec and the REST architectural style. As you can guess, I really like
this motivation, even though I think it's insufficient to justify
major changes -- being "RESTful" should not be the goal, building a
better system should be. It seems the Rails team has found a good way
to do this, as the change is made in a backwards-compatible fashion
(so if you don't care, you can simply ignore it). But it highlights
one of the things I really, really like about Rails: It tries to make
it a lot easier to build something that's RESTful than something that
isn't, and its reach means many more people will be exposed to this
as the way it's being done.

So what about the change itself? When should you use PUT, POST, PATCH?
First of all, these are the truths I base my views on:

* POST can mean anything; its most common use is to create something
  under a location determined by the server; it's neither safe nor
  idempotent nor cachable; it should be used whenever using any of the
  other methods violates one of their guarantees.
* PUT can mean creation or update; it affects the resource to which it
  is applied; it's idempotent; it contains a full representation of
  the resource (as far as the client is responsible for it). Most
  importantly, by using PUT the client asks the server to _store_ (in
  the widest possible sense) the representation under the location
  provided.
* PATCH, a relatively new verb (at least in it's <a
  href='http://tools.ietf.org/html/rfc5789'>standardized form</a>) is
  intended to address partial updates, i.e. it updates only parts of
  the resource it's being applied to; it's not idempotent; the client
  asks the server to change parts of a resource.
  
If you're a server developer and want to enable your clients to update
only parts of a resource -- say, a customer's address --, you basically have three options: 

* POST the new address to the resource and have the server decide what
  to do -- in this case, process the address change only -- based on
  the content
* Expose each part you want to be changeable individually as a
  resource in its own right and use PUT, i.e. make address a resource
  http://.../customer/:id/address that you can PUT to
* Use PATCH to put information about the intended change to the
  resource itself, using an appropriate format understood by the
  server
  
Using POST is OK, but only because it essentially means nothing. The
PUT option is perfectly fine, but requires you to explicitly create
resources for this purpose. This is actually the best option in many
cases, especially if the resources you create in the process turn out
to be meaningful in their own right, support other methods (GET in
particular). It often ends up feeling a bit contrived, though, so it's
nice to have the third option: Using PATCH means you are being very
clear about the purpose of the request, and don't need to create new
and possibly otherwise unnecessary resources. It's still fully RESTful
because PATCH is an extremely generic method.

Note that while using POST for partial updates is OK, using PUT (as
Rails does) is not, because it violates the behavior as defined by the
spec. So changing it is a very good idea, and the only two options are POST
and PATCH.

Even though PATCH is clearly useful, and has <a href='http://roy.gbiv.com/untangled/2009/it-is-okay-to-use-post#comment-965'>the ultimate REST authority's blessing</a>, my recommendation in the past has been to avoid it because you can't count on anyone (or anything)
supporting it, and go with PUT or POST instead. With Rails' influence,
I see this changing -- and I very much look forward to being able to
include PATCH in my RESTful designs in the future. Add PATCH (in
addition to PUT and DELETE) to HTML 5, and I'll be more than happy ...

