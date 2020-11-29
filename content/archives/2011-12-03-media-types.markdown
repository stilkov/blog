---
layout: post
title: "Media Types in RESTful HTTP"
date: "2011-12-03T11:15:00+01:00"
comments: true
categories: REST
---

A topic that comes up again and again in discussions about RESTful
design is what kinds of media type to use. I've changed my mind about
this a few times, often enough so that I believe it makes sense to write
a bit about my current thinking on this. (A "media type", should you
happen to wonder what I'm talking about, is a specific format with a
well-defined name, in this context represented in the form of a media
type identifier such as `application/xml` or `text/html` or
`application/json`. [That's not 100% correct, but that doesn't really
matter here.] A "hypermedia format" is one that includes links or other
hypermedia controls.)

There are a number of different ways to deal with media types when
designing a RESTful HTTP system. One school of thought advises to
stick with hypermedia formats/media types that are well-defined and
widely understood, such as HTML or Atom. In other words: Whatever it
is you're trying to send around as part of an HTTP message, use an
existing format, such as HTML, the main reason being that there are
many processors that are able to understand it. Use the appropriate
MIME identifier (such as `text/html`) in Content-type headers. One can
make a strong case for this option: Hypermedia formats are
hard to design, so you should avoid inventing your own.

But let's assume you've decided to define your own hypermedia format,
<a href='http://www.amundsen.com/blog/archives/1101'>mike
amundsen-style</a>, whether by designing a completely new XML
vocabulary, your own JSON structure, or some other approach: What MIME
type do you use?

You can send content labeling it with the generic identifier, say
`application/xml`. In this case, the MIME identifier will signal the
technical format being used, while the semantics are only known to
clients who either have some out-of-band knowledge or interpret the
content itself. The rationale for this approach is that unless your
home-grown hypermedia format is likely to be widely adopted, you'd
better stick with a media type that is well-known, even though it
doesn't convey specific semantics. <a href='http://duncan-cragg.org/blog/post/minting-media-types-usually-less-restful-using-raw/'>Duncan Cragg wrote a nice post</a> on this a while back.

The second option is to invent your own MIME type, say
`application/vnd.mycompany-myformat`, the argument being that you need
to convey the semantics of the content to ensure a client, server or
intermediary can actually know whether it's able to process it.

This begs the question of how many different MIME types you'll end up
with. Instead of creating a new identifier for each type of content,
(e.g. a customer, a list of customers, a list of orders), I've found
that a good approach is to think of a specific context -- a _domain_, if
you prefer -- that your format covers. I like the similarity of this
approach to other hypermedia formats, e.g. HTML or Atom/AtomPub, where
you actually end up describing something that applies to a set of
collaborating participants, instead of some server-side interface. In
my favorite example domain (order processing), you might end up with a
MIME type of `application/vnd.mycompany-ordermanagement`, relate this
to a particular XML namespace and define a few different XML root
elements (order, order confirmation, cancellation, etc.). The
assumption would be that processors can be reasonably expected to able
to understand all of the elements in this context, not just one of
them. (Of course the same reasoning applies when using JSON or
something else, minus the namespace benefits/troubles, depending on
your view of XML.)

One final approach that I find very interesting was mentioned by <a
href='http://algermissen.blogspot.com/'>Jan Algermissen</a> a while
ago: If your format is based on an existing one, e.g. HTML or XML,
your server can actually send the same content with different MIME
types, depending on the client's capabilities. A client that only
included `application/json` in its Accept header would then get the
content labeled `application/json`, while one that includes the
specific MIME type `application/vnd.whatever` would get the same
content with this label applied.

