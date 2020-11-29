---
layout: post
title: "Waterfall sucks, always. Duh."
date: "2012-04-04T14:17:00+01:00"
comments: true
categories: 
---

Today, I had an interesting discussion over Twitter related to project
organization in restricted environments. (_Update_: I've removed all
references to the actual discussion because the person I interacted
with felt mis-quoted, and I don't think that it was actually that
important with regards to what I actually wanted to get across.)  This
prompted me to take a break from my usual topics and elaborate a bit
on my thoughts with more than 140 characters. All this assumes you're
in the role of not only having to actually deliver a piece of
software, but also to get the necessary funding -- regardless of
whether you're part of an internal organization that requires approval
from top management or you're an external partner that needs to sell
to its customer. That said, I'll focus on the second scenario as that
is my primary focus at <a href='/'>innoQ</a>.

First of all, in an ideal world, the customer understands all of the
reasons that led to the Agile movement, e.g. accepts that an upfront
specification that's 100% correct is an unattainable pipe dream,
agrees to participate in the actual development process, and most
importantly, understands that what needs to be built will only become
clear during the actual development project. We do have some customers
who understand this very clearly, and they agree to our favorite
pricing model: We offer a sprint/iteration for a fixed price or on a
T&M basis, and after each sprint the customer can decide to continue
or to stop (which will require one final short wrap-up phase). This
reduces the customer's risk, which is often seen as a benefit big
enough to outweigh the perceived disadvantage of not knowing what the
overall cost will be. It's great to be able to work in an environment
where everybody's goals are perfectly aligned, and this is the case in
this model.

Unfortunately, this ideal model is not always an option. Of course one
way for a development organization to ensure that all projects are
done this way is to simply refuse doing it in any other
fashion. That's a good option, but whether it's actually doable
strongly depends on internal power distribution or external market
forces.

But what do you do when you have to accept a different set of
restrictions? For example, the customer/stakeholder might require a
fixed-scope, fixed-time, fixed-price offer. My guess is we can all
agree that this is bad idea for everyone involved. But how do you
approach things if you just have to do things this way? What do you do
if, as an additional downside, the developers assigned to the project
are not as skilled as you'd like the to be?

As possible answer might be to use a classical waterfall approach, but
I think this is *never* a good choice. At the very least, go with an
iterative approach, even if that means you have to game the system to
do that.

Of course you have to put up some effort into an initial up-front
analysis. You'll be aware that much of what you find out may actually
turn out to be wrong, but it's still better to make a slightly more
informed estimate up front as opposed to a totally bogus one,
especially if you're an external partner that's supposed to provide a
fixed-price quote. Then, make sure that you grow the system in
increments -- i.e., build a first working system, using a number of
interesting use cases; then add functionality in the next iteration,
and continue until done. 

Typically, this will resemble something like an agile process -- but
with slightly larger iterations (e.g. maybe 6 weeks instead of two),
and with the added amount of documentation required to fulfill the
typical waterfall requirements. (If this reminds you of a <a
href='http://www.methodsandtools.com/archive/archive.php?id=32'>Unified Process</a> kind of thing, that's no coincidence.)

In the end, you'll have created all of the documents and other
artefacts required, but simply not in the order they were supposed to
be generated (first analysis, then design, then implementation, then
test), but with the trimmed-down focus of each iteration.

Is this perfect? Not even remotely. But in my experience, you have a
far greater chance to meet your goals than with actually following the
waterfall approach, and even more importantly, management is likely to
accept it (partially because it's obvious, partially because you don't
tell them about it). 

If you can't get away with that, you're really out of luck, and it's
as they say: You need to change the company, and if you can't, change
companies.
