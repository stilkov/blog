---
layout: post
title: "On Monoliths"
date: "2013-10-22T10:47:00+01:00"
comments: true
categories: 
---

A while ago, I gave a talk at QCon about breaking up monoliths
([there's a video up on InfoQ](http://www.infoq.com/presentations/Breaking-the-Monolith
"Breaking the Monolith")), repeated it in a slightly improved version
at JavaZone (see
[slides](https://speakerdeck.com/stilkov/breaking-the-monolith-1) and
[video](http://vimeo.com/74354372)), and the topic continues to come
up in almost every consulting engagement and client workshop I've been
involved in since then. Like many of the topics I talk about, it's
somewhat unfair that I get the positive feedback and people assume I
came up with the ideas all on my own: Most of stuff like this is the
result of collaboration, with my colleagues at [innoQ](http://www.innoq.com) (see for
example
[an article I wrote with Phillip Ghadir for ObjektSpektrum](http://www.sigs-datacom.de/fachzeitschriften/objektspektrum/online-themenspecials/artikelansicht.html?tx_mwjournals_pi1%5Bpointer%5D=0&tx_mwjournals_pi1%5Bmode%5D=1&tx_mwjournals_pi1%5BshowUid%5D=7022)
if you read German), as well as customer staff. But wherever it
originated, I found that it strikes a nerve with many developers and
architects, not only in big companies that conduct million-Euro
development projects, but also in smaller e-commerce companies and
even startups that have started to become successful.

The main idea is this (no surprise for almost everyone, I guess):
_Nobody_ wants monoliths, i.e. big systems composed of hundreds of
thousands or millions of lines of code (in a language like Java) or
tens of thousands (e.g. in Ruby), yet everyone ends up having
them. And once you have one, you're basically stuck with them: They're
incredibly hard to maintain, extend, and modernize; yet they provide
value and can't simply be replaced (something that many organizations
attempt but fail at, because it's awfully hard to create something new
that is not only great in terms of architecture, but also can actually
function as a full replacement for all of the old system's features.

So what's the proposed remedy? To talk about that, we need to take a
step back and find out how we actually end up systems that are too big
in the first place. My theory is that the number one reason is _project
scope_.

When a project is started, there is an assumption that it's the goal
of a project to create a single system. This typically goes
unquestioned, even though the people or person coming up with the
project boundaries often don't decide this consciously. This is most
obvious if they're non-technical people who make decisions on a budget
basis.

So the very first thing we should be doing as architects (or lead
developers if you don't like the term) is to find out what it actually
is we should be building. Is it really a single system? If our task is
to replace an existing system with a new one, it's very tempting to
just accept existing boundaries and go with them. If we're
consolidating two systems, it's equally tempting to view our scope as
the union of the predecessor systems' scope. In the rare cases where
our task is to actually modularize something existing, it's because of
business reasons (such as deregulation). Again, while it might seem
like a good idea to just accept the boundaries being suggested to us,
it's not at all clear why this should be a good idea. After all,
if whoever came up with those boundaries is not an architect or
developer, what makes us think they made a good choice?

In my view, the most important thing to do, then, is to find out how
many systems we should be building in the first place. It may be a
single one, but it may also be two, five or a dozen (though probably
not more) -- clearly, the decision should be made very consciously,
because whatever system boundaries you pick, you will likely be stuck
with them for a very long time.

As "system" is a term that can mean almost anything, I need to define
what I mean by it in this context. A system is an independent unit
that is developed according to its own rules, and only connected to
other systems in an unobstrusive fashion. A system, according to this
model, has its own database, business logic, and user interface; it's
deployed separately. It's likely developed by a different team than
other systems. It has its own life cycle, in terms of development as
well as deployment. It's operated autonomously. It has its own test
suite. In basically every regard, it's as different from all the other
systems as a piece of commercial off-the-shelf software would be. (In
fact, one of the systems may end up being a piece of standard
software.) Is that the same as the "Micro Services" idea? If you watch
James Lewis's great talk
([here's a recording](http://vimeo.com/74452550), also done at
JavaZone; in fact his was scheduled directly after mine), you'll find
a lot of similarities, but the major difference is probably the size
of each individual unit. But to me, seeing similar concepts appear in
different contexts is a very good sign.

It doesn't really matter that much whether you get the number and
distribution right with the first attempt -- in fact, you can
reasonably consider that to be highly improbable. But it's one thing
to find out you should have built six or eight systems instead of seven,
i.e. get it wrong in one or two places, and a completely different one
to notice it should have been seven instead of one.  

I've rambled on for long enough for a single post, so here's a
preliminary conclusion: How many systems you build should be a very
conscious decision. It will affect the life of those tasked with
evolving and maintaining it for years to come.
