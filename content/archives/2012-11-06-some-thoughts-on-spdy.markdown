---
layout: post
title: "Some Thoughts on SPDY"
date: "2012-11-06T13:02:00+01:00"
comments: true
categories: 
---

What follows is a number of claims about SPDY, none of which I can
back up in any reasonable way. My hope is that readers who know more
will educate me. <a href='http://www.chromium.org/spdy'>SPDY</a>, in case you don't know it, is a replacement for
the HTTP wire protocol. It originated with Google and aims to preserve
HTTP's application semantics while improving its efficiency and
performance.

* Supporting true multiplexing on top of a single TCP connection is
  great. There is no way anybody can prefer the HTTP 1.0 model, which
  forces a separate TCP connection per request, nor the HTTP 1.1
  model, which allows for persistent connections but still requires
  serialized request/response interactions (never mind HTTP pipelining
  as it doesn't work in practice). Browsers having to open separate
  connections to the same server to achieve parallelism is not a
  satisfactory solution.
* Reducing header overhead is also an excellent idea. I've heard some
  criticism about the way this is actually done in SPDY, but it very
  clearly serves no purpose to have a browser send e.g. the same
  ridiculously long user agent string with each and every request.
* I used to not care much for the push support, i.e. the
  opportunity for the server to actively send stuff to the client, for
  the same reason I'm not a fan of Websockets: I don't think you
  actually need this in practice on the application level. But in a
  session done by Jetty developer <a href='http://webtide.intalio.com/author/tbecker/'>Thomas Becker</a> today, I learned about
  a quite intriguing usage of this in Jetty's SPDY implementation: On
  the first request of a page and the subsequent request for the
  resources that are referenced in that page, Jetty will build a map
  based on the Referer header -- it essentially remembers which
  secondary resources a page references. When the next request comes
  along, it can actively send the referenced resources _before the
  client actually asks for them_.
* I think the fact that SPDY requires TLS is a mistake. While I
  totally concede that most traffic on the Net is (and should be)
  encrypted, there are many use cases e.g. within an organization or
  for public information where this does not make sense. Besides, it
  prevents the usage of intermediaries, even though I admit these will
  be much harder to build for SPDY than for plain HTTP anyway.
* While SPDY proponents point to impressive performance improvements,
  they are the more impressive the worse the website is
  implemented. For sites that are already optimized in terms of front
  end performance, e.g. minimize and compress content, minimize the
  number of requests, usage proper caching, the effect is going to be
  much less. That said, some of the things we do in terms of
  optimization, e.g. combining multiple CSS or JS files into a single
  one, are not exactly milestones of architectural purity.
* For machine-to-machine communication -- i.e. typical RESTful web
  services -- I don't think SPDY will have the same kind of effect as
  for Web sites, but I'm willing to let myself be convinced otherwise.
* One of the sad but inevitable things when introducing a binary
  protocol as opposed to a text-based one is reduced transparency for
  humans. If SPDY becomes successful -- and I have small doubts it
  will -- being able to telnet to a servers port 80 is going to be
  what I miss most.

SPDY has a very good chance of essentially becoming the new HTTP 2.0, and I'm
happy about it: I'm pretty confident the <a href='http://datatracker.ietf.org/wg/httpbis/charter/'>HTTP WG</a> with the formidable
<a href='http://www.mnot.net/'>Mark Nottingham</a> taking care of
things will produce something that will be usable for a long time to come.
