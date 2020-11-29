---
layout: post
title: "Ten-Hove on BPM and SOA"
date: "2007-08-03T10:39:00+01:00"
comments: false
categories: 
---

<p>Ron Ten-Hove has two interesting blog entries, one talking about how <a href="http://blogs.sun.com/rtenhove/entry/soa_services_rpc">SOA Services != RPC</a> and another one about <a href="http://blogs.sun.com/rtenhove/entry/lessons_learned_from_business_process">the relation to business process automation</a>. In his view, the most important difference is the separation of business process logic from the implementation of business functions.</p>

<p>I know this is a common view, but I disagree &#8212; to me, BPM, business process automation, and SOA are not only two, but even three different, orthogonal concepts. The value of SOA, in my opinion, is its emphasis on autonomous, language-agnostic and platform-independent services that share a common interface technology; it does not really matter whether they implement a business process or some technical function.</p>

<section class="comments">



<div class="comment" id="comment-1400">
On <a href="#comment-1400" title="Permalink to this comment">August  3, 2007  5:23 PM</a>, <a href="http://blogs.sun.com/rtenhove" title="http://blogs.sun.com/rtenhove" rel="nofollow">Ron Ten-Hove</a>
said:
<p>Stefan,</p>

<p>So are you saying that services really are just a form of RPC, and that their inherent value resides in being &#8220;&#8230;autonomous, language-agnostic and platform-independent services that share a common interface technology&#8221;? Isn&#8217;t that a good description of CORBA as well?</p>


<div class="comment" id="comment-1401">
On <a href="#comment-1401" title="Permalink to this comment">August  3, 2007  7:25 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Of course it very much depends on the definition of some terms we&#8217;re using here. If by RPC you mean a programming model, I agree that it should not be used in SOA scenarios.</p>

<p>But yes, I do believe that a SOA landscape can be built based on CORBA; it&#8217;s just that CORBA makes it easier to violate SOA principles because it is a natural fit for a tightly-coupled client/server scenario rather than for loosely-coupled services. But Web services can be used to build tightly-coupled systems, too - in fact, this is what happens most of the time in my experience. Using XML can reduce the degree of coupling, but only if it&#8217;s used to encode documents, not if it&#8217;s used as an object serialization format. I&#8217;m a big fan of wire formats as opposed to unified programming models, too, which is also improved in WS as opposed to CORBA. </p>

<p>But my definition of SOA is: A cross-application, enterprise-wide architecture where functionality is split into autonomous units called services, where each service can be independently developed, deployed, updated, and run by separate organizational units or external companies. This is achievable with lots of different approaches, and I don&#8217;t see why CORBA would not qualify (although I wouldn&#8217;t recommend it).</p>


<div class="comment" id="comment-1402">
On <a href="#comment-1402" title="Permalink to this comment">August  3, 2007 11:02 PM</a>, <a href="http://blogs.sun.com/rtenhove" title="http://blogs.sun.com/rtenhove" rel="nofollow">Ron Ten-Hove</a>
said:
<p>It does sound like we are in basic agreement; we know &#8220;good&#8221; services from &#8220;bad&#8221; ones, based on SOA principles.</p>

<p>But how do we discover &#8220;good&#8221; services in the first place? In many enterprises, where a large chunk of IT&#8217;s value is found in business process automation and management, business process activities are a good place to look. More generally, taking a functional view of the business will yield good candidates for services. </p>

<p>SOA is really nothing new, and I agree it was (and is) feasible to create a SOA-based system using CORBA correctly. Feasible, but unlikely, for a host of reasons, one of which sounds a lot like the &#8220;bad&#8221; services mentioned above.</p>

<p>So what is different in the latest incarnation of SOA, based on XML messaging using ubiquitous protocols? Arguably the only big difference between today&#8217;s SOA technology and CORBA is that Microsoft supports the former, but not the latter :-). Other than that, the technical (and architectural) hazards are similar.</p>

<p>As for your preference for wire formats as opposed to unified programming models: +1! Why would we spend all this effort trying to create (and benefit from) loose coupling, and just take it away again with yet another attempt (and there have been quite a few) at the Sauron theory of programming (you know, one model to rule them all).</p>


</section>

