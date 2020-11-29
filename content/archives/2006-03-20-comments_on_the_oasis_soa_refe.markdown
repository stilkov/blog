---
layout: post
title: "Comments on the OASIS SOA Reference Model"
date: "2006-03-20T11:45:00+01:00"
comments: false
categories: 
---

<p>I&#8217;ve finally managed to spend some more time with the <a href="http://www.oasis-open.org/committees/download.php/16587/wd-soa-rm-cd1ED.pdf">OASIS SOA Reference Model committee draft</a> &#8212; and my conclusion is that it&#8217;s vague, ambiguous, and ultimately useless.</p>

<p>For one thing, there is this well-meant attempt to use some spec-lingo (as defined by RFC2119), probably to give it more tangibility. Here are some examples:</p>

<blockquote>
<p>The internal actions that service providers and consumers perform as a result of participation in service interactions are, by definition, private and fundamentally unknowable. By unknowable we
mean both that external parties cannot see others&#8217; private actions and, furthermore, SHOULD
NOT have explicit knowledge of them.</p>

<p>There is a strong relationship between the shared state and the interactions that lead up to that state. The elements of the shared state SHOULD be inferable from that prior interaction together
with other context as necessary.</p>

<p>Best practice suggests that the service description SHOULD be represented using a standard, referenceable format.</p>

<p>While each of these items SHOULD be represented in any service description, the details can be included through references (links) to external sources and are NOT REQUIRED to be
incorporated explicitly. </p>
</blockquote>

<p>&#8220;NOT REQUIRED&#8221;, by the way, has no formal meaning in RFC2119.</p>

<blockquote>
<p>However, a service description SHOULD include sufficient data to enable a service consumer and service provider to interact with each other. This MAY include metadata such as
the location of the service and what information protocols it supports and requires. It MAY also
include dynamic information about the service, such as whether it is currently available. </p>

<p>Policy assertions SHOULD be written in a form that is understandable to, and processable by, the parties to whom the policy is directed. </p>
</blockquote>

<p>Each of those SHOULDs and MAYs either states something blatantly obivous or underlines some statement that&#8217;s as solid as wax. So let&#8217;s take a look at the MUSTs:</p>

<blockquote>
<p>The initiator in a service interaction MUST be aware of the other parties, the participants MUST be predisposed to interaction, and the participants MUST be able to interact.</p>
</blockquote>

<p>You don&#8217;t say?</p>

<blockquote>
<p>Both the service provider and the service consumer MUST have information that would lead them to know of the other&#8217;s existence.</p>
</blockquote>

<p>But enough of that &#8230; </p>

<p>What does it actually contribute to the discussion about SOA? It defines a bunch of technical terms, but some of them are so abstract that I could start crying. For example</p>

<p>&#8220;Awareness &#8212; A state by which one party has knowledge of the existence of other party.&#8221;</p>

<p>To be fair, there are some valid definitions &#8212; service provider, service consumer, policy, contract &#8212; but they would fit on maybe two or three pages.</p>

<p>One might argue that if you don&#8217;t have anything to say, it&#8217;s sometimes better to stay quiet. In this case, I believe the reason is rather that if you want to accommodate too many differing views at once, you might find there&#8217;s nothing solid left.</p>

<section class="comments">

<div class="comment" id="comment-846">
On <a href="#comment-846" title="Permalink to this comment">April  4, 2006  2:43 AM</a>, Matt MacKenzie
said:
<p>The goal of the SOA-RM team was to lay down a somewhat abstract foundation on which we could build reference architectures that are most definitely not abstract.</p>

<p>Thanks or your pedantic dissection of our at times improper use of ISO 2119.  We&#8217;ll be sure to address that in a future draft.</p>


<div class="comment" id="comment-847">
On <a href="#comment-847" title="Permalink to this comment">April  4, 2006  1:47 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>So I gather you&#8217;re building a reference architecture for reference architectures? I see &#8230;</p>


</section>

