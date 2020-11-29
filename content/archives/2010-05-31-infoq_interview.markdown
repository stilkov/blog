---
layout: post
title: "InfoQ Interview"
date: "2010-05-31T15:28:00+01:00"
comments: false
categories: 
---

<p>At QCon London, Sadek Dobri interviewed me on REST – this was a nice chance for me to voice my current thinking about most, if not all things RESTful. InfoQ has put <a href="http://www.infoq.com/interviews/tilkov-rest-web-services">the video up online</a>.</p>

<section class="comments">



<div class="comment" id="comment-2128">
On <a href="#comment-2128" title="Permalink to this comment">June  1, 2010 11:19 AM</a>, Sean Kennedy

<a href="http://profile.typekey.com/6p010537018564970c" class="commenter-profile"><img src="/mt4/mt-static/images/comment/typekey_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Hi Stefan,
Very good interview. Very interesting to hear that none of your clients use WS-Security i.e. all use HTTPS. What about other QoS features :
- Message Reliability - have any of your clients used the WS-* model?
- What about the REST options - Joe Gregorios best practice, POE
or HTTPLR ?
- Transactions        - WS-* model?
is RETRO gaining any traction?</p>

<p>Thanks,
Sean.</p>


<div class="comment" id="comment-2129">
On <a href="#comment-2129" title="Permalink to this comment">June  1, 2010 12:49 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I haven&#8217;t seen WS-RM, POE or HTTPLR used in any project. We&#8217;ve built stuff similar to POE in custom scenarios. </p>

<p>Nobody ever raises their hands when asked about WS-BusinessActivity or AtomTransactions when I ask for who uses that in any of my talks. Haven&#8217;t seen RETRO in practice either.</p>

<p>BPEL, including its compensation features, is used quite a bit though.</p>

<p>Don&#8217;t use this as scientific evidence :-)</p>


<div class="comment" id="comment-2130">
On <a href="#comment-2130" title="Permalink to this comment">June  4, 2010  3:39 PM</a>, <a href="http://www.marcelkoch.net" title="http://www.marcelkoch.net" rel="nofollow">Marcel Koch</a>
said:
<p>Hi Stefan,</p>

<p>wow, I appreciate the detailed level of the interview.</p>

<p>Altough the interview answered a lot of questions I have to further ones:</p>

<ol>
<li><p>You said that it would a bad idea to build up a logic in a client application to create the URIs.
I would argue there has to be an entry point to the RESTful application. Why not to build the entry URI based on a certain URI format?
For example an application which generates mails want to link to another RESTful application and wants to send a hyperlin within the mail body.</p></li>
<li><p>You talked about frameworks. What do you think about the Struts 2 REST plugin, if you had any contact with it so far (besides that you have to implement a work around to get access to HTTP Accept)?</p></li>
</ol>

<p>Many thanks
Marcel</p>


<div class="comment" id="comment-2131">
On <a href="#comment-2131" title="Permalink to this comment">June  7, 2010  7:51 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>There&#8217;s a difference between the very first URI and the ones that follow. Whatever the recipe for URIs (or for building them) is, the client should discover it through the representations that are exchanged.</p>

<p>I can&#8217;t comment on the Struts 2 REST plugin, I&#8217;ve never used it. </p>


</section>

