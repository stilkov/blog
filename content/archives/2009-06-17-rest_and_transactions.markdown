---
layout: post
title: "REST and Transactions"
date: "2009-06-17T07:45:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.rgoarchitects.com/nblog/2009/06/15/TransactionsAreBadForREST.aspx">Arnon Rotem-Gal-Oz</a> has a nice blog entry on <a href="/blog/st/2009/06/restful_transactions_with_retr.html">RETRO</a> (the whole <a href="http://tech.groups.yahoo.com/group/rest-discuss/message/12727">rest-discuss thread</a> is also neatly <a href="http://www.infoq.com/news/2009/06/rest-ts">summarized by Mark Little for InfoQ</a>):</p>

<blockquote>
<p>On the good side, I have to say, it is one of the best RESTful models I’ve seen thus far. The authors took special care to satisfy the different REST constraints, unlike many “RESTful” services (e.g. twitter that returns identifier and not URIs). </p>
</blockquote>

<p>I agree, this is a very well-though out solution.</p>

<blockquote>
<p>On the downside is I think a distributed transaction model is bad for REST or in other words I don’t see a reason for going through this effort and jumping through all these hoops.</p>
</blockquote>

<p>I tend to agree — I'm not at all sure we need standardization here.</p>

<blockquote>
<p>Since using hypermedia as the engine of state change means that the hypermedia actually  describes the protocol, we clutter the business representations (the representations of real business entities like customer, order etc.) with transactional nitty-gritty.</p>
</blockquote>

<p>Now this is something I don't agree with — if it's done, this is the way to do it; not hiding the details somewhere else.</p>

<blockquote>
<p>It seems to me that RETRO is a good mental exercise to show transactions can be RESTful. I think, however that it is an overkill for RESTful implementations.</p>
</blockquote>

<p>I agree again. In my opinion, transactions in REST should be a pattern, not an implementation (see <a href="/blog/st/2006/02/22/hiding_complexity.html">this entry</a> for some motivation for this).</p>


