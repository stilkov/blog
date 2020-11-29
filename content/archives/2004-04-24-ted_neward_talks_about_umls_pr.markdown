---
layout: post
title: "Ted Neward Talks About UML's Problems, Only He Doesn't"
date: "2004-04-24T23:04:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.neward.net/ted/weblog/index.jsp?date=20040417#1082195330468">Ted Neward attacks UML</a>. Or so he claims, when in fact what he is criticizing is actually reverse engineering. </p>

<p>Here is a very simple truth about modeling a software system: If your model is on the same level as your code, it&#8217;s not worth having. <em>Reverse engineering</em>, at least as long as nobody injects a severe amount of AI-like magic into it, is not worth the effort beyond a first migration step towards <em>forward engineering</em>, which is something that actually works.</p>

<p>Nevermind this quote of Ted&#8217;s &#8230;</p>

<blockquote>But even so, I&#8217;ll still take a moment to point out what I think is a critical flaw in the UML modeling space: the lack of any sort of separation between the &#8220;physical model&#8221; and the &#8220;logical model&#8221;. [&#8230;] Why is this so hard for the UML community to understand? Particularly given how infatuated they are with code-generation from the UML model (and vice versa).</blockquote>

<p>&#8230; which shows such an ignorance towards both hype and reality about what&#8217;s going on in the UML/MDA space that it&#8217;s almost funny.</p>

<section class="comments">

<div class="comment" id="comment-275">
On <a href="#comment-275" title="Permalink to this comment">April 26, 2004  6:23 PM</a>, contrary_score
said:
<p>But he&#8217;s close, the flaw being not in UML per se, but in OOP. The flaw is that OOP has no single mathematical model. In particular, OOP has no single mathematical model as does the relational database model have with relations. Instead, OOP has a different model for each implementation. So OOP models are &#8220;brittle&#8221; in that, should an assumption of a particular model change (as when we must modify the CRM system to add new features) then the current implementation/model may not be able to properly handle the change, as a consequence the entire system may require a rewrite, and the scope of change required is unpredictable.</p>

<p>So we&#8217;re talking about the scope of change and the scope of rewrite: how much effort is required to implement change. And in the relational logic programming model that is utterly predictable and in OOP it is utterly not predictable but is implementation-dependent.</p>


</section>

