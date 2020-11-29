---
layout: post
title: "Web-based frontend integration"
date: "2014-11-29T17:40:35+01:00"
comments: true
categories: REST
---
So [you started with a monolith](/2013/10/on-monoliths/), and decided to split things into
smaller units. Obviously, the next thing you need to consider is how
to integrate them to form a consistent whole. To do this, let’s start
with the non-obvious part: The frontend (the UI).

If you look at what’s typically proposed, it seems entirely obvious
that there are two options: (1) We integrate on the client side, which
when dealing with web applications typically means using some sort of
integrating, JavaScript-based MVC framework or (2) We integrate on the
server side, using some sort of “orchestration”. (As you might have
guessed, I will be presenting a third option, the one that I actually
prefer, but let me set the stage first.)

Let’s start with (1), the client-side integration option, since things
like Angular.js are all the rage these days. Our goal is to create an
integrated UI, so as a first step, we can assume that if our server
just provides us with lots of small services, each of them offering an
HTTP/JSON API (RESTful or not, doesn’t really matter in this
context). Our client-side JavaScript logic will talk to multiple
services and create a composite UI based on the results. It’s the
client code’s responsibility to call the services in the right
sequence and combine their results (if all goes well) or deal with
failure (if it doesn’t). There are excellent libraries and frameworks
for doing this, and you can pick the one that best suits your taste
from the likes of Angular, Ember, and many others.

<img src="/blog/st/images/client.png" alt="Integration via a
client-side framework" />

One problem you’ll very often run into with option (1) is that the
services on the server side end up being quite fine-grained (a
consequence of their being reusable in many contexts), which leads to
a huge number of remote calls that are required between the client and
the server. Another downside typically results from the fact that you
can never rely on anything computed by the client, so you’ll have to
validate it on the server side. This, in turn, can lead to duplication
of at least parts of your logic.

The solution to both of these problems typically is to perform
integration, or orchestration if you prefer, on the server side –
option (2). In other words, a server-side service will invoke other,
lower-level services, taking care of combination and error handling,
interpreting the client request and returning the aggregated result in
the end. This is of course completely orthogonal to the architecture you
choose for your client, i.e. you could just as well return HTML from
your server and have a traditional, non-JS based client.

<img src="/blog/st/images/server.png" alt="Integration via a server-side
orchestration service" />


What’s not to like? What I do not like about this approach is that you
create yet another server-side service, which makes me question why
you created the lower-level ones in the first place. This also becomes
a bottleneck, as any change to one of the lower-level services will
require a change to the orchestrating service.

But there’s a third option (finally!), one that doesn’t seem to even be
considered in many cases, although it is (in my not so humble opinion)
the most powerful one. This option (3) relies on an absolutely
magical concept called “link” (dumb joke, I know). To explore this, we
question one of the initial assumptions that led to having to
integrate on the client side or server side in the first place, namely
that for a web UI to be integrated, it needs to aggregate UIs from
different backend services into a single HTML page. 

Instead, we have each service return HTML that can be rendered by the
browser – in other words, we assume that each page can be assigned to
one of the services. Of course there are lots of relations to other
things, but we simply use links to point to them. One nice side effect
of this is that it becomes much easier to ensure we have a meaningful
URI for each of the pages returned (or resources exposed, pick
whatever terminology you prefer).

<img src="/blog/st/images/link.png" alt="Integration via links" />

So option (3) leaves us with a number of self-contained web
applications that are integrated only by means of being linked to each
other. Apart from not connecting them to each other at all, I am not
aware of any sort of weaker coupling.

Of course you should be highly skeptical by now: How is that supposed
to be “integration”? Surely this guy isn’t serious? Is he seriously
suggesting we revert back to a model that was hip a decade or two ago?
You bet I am, and I’ll explore some of your doubts in a future post.
