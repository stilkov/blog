---
layout: post
title: "Martin Fowler and Jim Webber: \"Does My Bus Look Big in This?\""
date: "2008-06-07T19:10:00+01:00"
comments: false
categories: 
---

<blockquote>
<p>In <a href="http://www.infoq.com/presentations/soa-without-esb">this keynote</a>, recorded at QCon London 2008, ThoughtWorks' Chief Scientist and bestselling author Martin Fowler and Global Head of Architecture Jim Webber share their views of the typical corporate ESB, which in their view has grown too fat for its own good. Martin and Jim suggest the Web's architecture as a possible and more light-weight alternative, in line with their preference for agile approaches.<br />In their visual and funny presentation, Martin and Jim first explore the history of enterprise integration, outlining how more and more sophisticated integration middleware became more and more important, until every enterprise architect was expected to have in-depth knowledge of such toolkits. They take exception to the mainstream view on SOA, which in their interpretation puts way too much significance on intelligent middleware – an ESB – to connect various consumers and providers in an SOA. While understandable from a vendor's point of view, they claim there is more benefit in relying on a less smart network, with intelligent endpoints at the edges. In their view, the Web has emerged as a scalable platform for connectivity, and in combination with agile methods, which have become accepted in enterprise circles, offers a compelling vision for the future.</p>
</blockquote>

<p>A video of the presentation is up at <a href="http://www.infoq.com/news/2008/06/soa-without-esb">InfoQ</a>.</p>

<section class="comments">



<div class="comment" id="comment-1730">
On <a href="#comment-1730" title="Permalink to this comment">June  9, 2008 12:55 AM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>I saw the keynote at QCon – it was entertaining and the point is well taken.  But others make the opposite argument.  For example, the telephone system relied on a smart network and very dumb endpoints – adoption didn’t suffer.  I guess I didn’t really see that part of the argument.  All commercial software systems – from ESB to ERP – continuously bulk up features to remain competitive.  It shouldn’t be a shock to discover that the majority of implementers use a minority of the features available.  The overhead incurred by way of system complexity is figured into the buy vs. build decision.</p>

<p>But remember that SOA emerged as a technique (one of many, BTW) to fool disparate systems into working with each other and to make the resulting cyber-découpage appear like a single coherent system.  I have never used an ESB, but I would never criticize ESB solutions for trying to solve those problems or for vendors that have successfully marketed SOA=ESB.  We should move past that – which I will after noting this:  ESB projects are usually initiated on the advice of consultancy firms armed with insane boilerplate ROI schemes few humans (or CIOs)can dissect before it’s too late.</p>

<p>Anyway, Martin and Jim are working under a changed set of assumptions (which I share) that (a) programming models are shifting away from interface specialization and (b) endpoints are generally Web-compliant.  These are mindset changes that I am really looking forward to seeing take place, but are just beginning to take hold.  So, while it was entertaining to watch them preach the denigration of ESBs to a lubricated choir (post-cocktail reception), I wish they had spent equal time describing a real-world project with significant enterprise scope and caliber.  </p>

<p>For me, the best advice at QCon was the Mark Little’s advice to be wary of REST.  REST is easy to visualize but hard to realize.  I’m a big believer that a RESTful architecture yields a superior system because it improves coupling.  But it’s still hard work to design a good URI strategy and the flexible programming model to compliment it.  My day job is now mainly spent on that topic, so I’m hoping that the REST track at the next QCon spends much less time on “why” and more time on “how”.</p>


</section>

