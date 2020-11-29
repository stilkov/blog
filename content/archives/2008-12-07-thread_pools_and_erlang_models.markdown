---
layout: post
title: "Thread Pools and Erlang Models"
date: "2008-12-07T10:49:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.michaelnygard.com/blog/2008/11/thread_pools_and_erlang_models.html">Michael Nygard</a>'s blog should be required reading for everyone daring to call himself an architect:</p>

<blockquote>
<p>Folks in telecommunications and operations research have used Erlang models for almost a century. A. K. Erlang, a Danish telephone engineer, developed these models to help plan the capacity of the phone network and predict the grade of service that could be guaranteed, given some basic metrics about call volume and duration. Telephone networks are expensive to deploy, particularly when upgrading your trunk lines involves digging up large portions of rocky Danish ground or running cables under the North Sea.<br /><br />The Erlang-B formula predicts the probability that an incoming call cannot be serviced, based on the call arrival rate, average call time, and number of lines available.  Erlang-C is similar, but allows for calls to be queued while waiting for service. It predicts the probability that a call will be queued. It can also show when calls will never be serviced, because the rate of arriving calls exceeds the system's total capacity to serve them.<br /><br />Erlang models are widely used in telecomm, including GPRS network sizing, trunk line sizing, call center staffing models, and other capacity planning arenas where request arrival is apparently random. In fact, you can use it to predict the capacity and wait time at a restaurant, bank branch, or theme park, too.<br /><br />It should be pretty obvious that Erlang models are widely applicable in computer performance analysis, too. There's a rich body of literature on this subject that goes back to the dawn of the mainframe. Erlang models are the foundation of most capacity management groups. I'm not even going to scratch the surface here, except to show how some back-of-the-envelope calculations can help you save millions of dollars.</p>
</blockquote>

<section class="comments">



<div class="comment" id="comment-1885">
On <a href="#comment-1885" title="Permalink to this comment">December  9, 2008  5:11 PM</a>, <a href="http://www.squidoo.com/Erlang-Formula" title="http://www.squidoo.com/Erlang-Formula" rel="nofollow">Erlang Calculator</a>
said:
<p>Having used Erlang in call centre staffing models for 7 years I am surprised to find that they are not used by other business models such as restaurants etc&#8230;interestingly I am even more surprised that banks who use the Erlang function in their call centers do not use this for their branch staff requirements with serving customers!</p>

<p>Great post! </p>


</section>

