---
layout: post
title: "Day of the Dove"
date: "2006-12-23T23:05:00+01:00"
comments: false
categories: 
---

<p><a href="http://wanderingbarque.com/nonintersecting/2006/12/23/day-of-the-dove/">Another great post</a> by Pete Lacey. </p>

<p>A good argument introduced in a recent discussion thread (I&#8217;ll try to dig up the reference) was that if your existing backends expose a coarse-grained interface, let&#8217;s say via CORBA, the move towards WS-* is not as big as the one towards REST. I think I agree &#8212; adopting REST principles will ultimately lead to more advantages, but I don&#8217;t think there&#8217;s a doubt that at least in many occasions, the necessary investment is higher.</p>

<section class="comments">

<div class="comment" id="comment-1167">
On <a href="#comment-1167" title="Permalink to this comment">December 24, 2006  5:26 PM</a>, <a href="http://blogs.iona.com/newcomer" title="http://blogs.iona.com/newcomer" rel="nofollow">Eric Newcomer</a>
said:
<p>Yes, we often have customers of our CORBA products whose management team will come up with suggestions like &#8220;why don&#8217;t we just replace CORBA with Web services?&#8221;  </p>

<p>We usually recommend against this for two reasons: it does not make sense to reinvest in implementing the same business functionality if what you already have is meeting your needs it will end up costing you a lot to get back the same business value in a new technology, and it is likely that other investments will give you a greater return (kind of economic argument) &#8212; and second Web services are basically just interfacing and interoperability technologies, they are not a complete environment in and of themselves.  If you want to host your Web services on a CORBA environment, you can do that, in whole or in part, whatever best meets your requirements.  You don&#8217;t need to look at this as a &#8220;all or nothing&#8221; type of proposition, they way you might have viewed a proposed transition to JEE from CORBA, for example.</p>

<p>On the question of what&#8217;s a better fit, I also think that&#8217;s very important.  When I first started looking at Web services, I thought the RPC-style was there to fit with RPC based applications, and the document-style was there to fit with asynchronous messaging based applications.</p>

<p>I realize more emphasis on RPC has somehow crept into implementations, but I believe there are also multiple implementations of asynchronous style Web services that to me are pretty much just interfaces into MOM based applications.</p>

<p>Despite SOAP etc. being modeled abstractly enough to fit both styles, few tools seem to have attempted to really implement Web services this way, with the possible exception of JBI&#8217;s message abstraction layer.  </p>

<p>I think this adds to the confusion, and I think it&#8217;s unfortunate that the tools do not typically implement Web services more abstractly (and yes, I know, my employer&#8217;s tools have tended to fall into that trap as well - the sort of customer push toward incremental adoption of a new interfacing technology) but we are working to fix that, starting with our open source projects.</p>


<div class="comment" id="comment-1168">
On <a href="#comment-1168" title="Permalink to this comment">January  8, 2007  8:05 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Sorry for the late reply. You are right, the point with regards to MOM-based architectures is just as valid &#8212; if a system already exposes a message-oriented interface, adding a Web services layer (using appropriate tools)  might be an option too.</p>


</section>

