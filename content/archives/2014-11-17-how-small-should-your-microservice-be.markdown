---
layout: post
title: "How small should your microservice be?"
date: "2014-11-17T07:53:00+01:00"
comments: true
categories: Architecture Microservices
---

Given that microservices are supposed to be, well, “micro”, there’s a
lot of discussion about the right size. A typical answer to this
question is: A microservice should do just one thing. I don’t really
think that’s an answer, as “one thing” leaves a lot of room for
interpretation. But I’ve seen people suggest that each individual
microservice should be as small as a single function, and I strongly
disagree with this for almost every situation. Consider, for example,
a function that computes something based on three input values, and
returns a result. Is that a good candidate for a microservice,
i.e. should it be a separately deployable application of its own?

I believe it’s easier to approach this from the opposite
direction. Let’s take an example: A web-based email system. Let’s not
overcomplicate things and assume it’s traditional and offers the
minimal features you’d expect, such as logging in and out, maintaining
some user settings, creating messages (from scratch or by replying to
or forwarding an existing one), deleting messages, viewing your inbox,
moving messages into folders (that you can create, view and delete),
maintaining an address book, search for messages … I’m sure you get
the picture. At one extreme, we could absolutely build this as a
single application and ensure it’s built not as a single package, but
using a reasonable internal modularization strategy. We could decide
to write its core as a set of collaborating classes, maybe adhering to
the DDD approach (which would classify the classes according to the
role they play). Then we’d add the dependencies to the outside world,
such as the UI, the data storage, external systems (such as maybe
external mail handlers, LDAP directories, etc.), possibly using a
layered or hexagonal architecture.

The team(s) working on this application would need to synchronize very
tightly, as the whole thing is released at once. It will also be
scalad in an all-or-nothing fashion, and it will be down or up and
running completely, not partially. That may be perfectly fine! But
let’s just assume (again) you deem it’s not, and want to cut it apart
into separate parts that have their own life-cycle and are isolated
from each other.

How would you go about decomposing this into separate applications or
services? First of all, the login/logout stuff (the auth system) is
a good candidate, as is the user profile. They could go into one
service, but if we consider that the auth system has to maintain
passwords (or rather, password hashes), it makes sense in my view to
treat it differently from the rest. The emails and folders themselves
seem quite cohesive to me, though: You could separate them, but I
probably wouldn’t. If there are multiple ways to connect to the
outside world, say, via the Web interface, POP3, IMAP, and SMTP, I can
imagine each of those being their own service. Maybe I’d factor out
the storage of messages into its own service, one that doesn’t know
the difference between a document and an email. I think the address
book, including its data storage, its UI and its API seems like a
natural candidate to be separated from the rest.

But in all, I’d probably end up with a dozen, maybe twenty or thirty
services (or *self-contained systems*, as I prefer to call them). And
more importantly, I think that for any given interaction triggered by
some outside event – like e.g. a user clicking a button after entering
data into a form – I’d end up touching maybe 3-5 of them.

In other words, I think it’s not a goal to make your services as small
as possible. Doing so would mean you view the separation into
individual, stand-alone services as your *only* structuring
mechanism, while it should be only one of many.
