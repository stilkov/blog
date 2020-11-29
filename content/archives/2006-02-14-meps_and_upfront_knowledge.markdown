---
layout: post
title: "MEPs and Up-front Knowledge"
date: "2006-02-14T09:23:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.pacificspirit.com/blog/2006/02/13/message_exchange_patterns_and_flavours_of_oneway_messaging">Dave Orchard writes about</a> message exchange patterns (MEPs) and one-way-messaging &#8212; very interesting, although my guess is that the total number of people who really understand all of his arguments is extraordinarily low. One thing I fundamentally agree with is that anything that turns the availability of a WSDL (or any other description) into a requirement <em>at runtime</em> is a bad idea:</p>

<blockquote>
<p>The data needed for a receiver to &#8220;know&#8221; can be in the message. Therefore trying to say the receiver will &#8220;know&#8221; ahead of time based upon the MEP is just plain wrong. It leads down bizarre paths like &#8220;If the ReplyTo is anonymous then the soap mep is request response else if the replyTo is non-anonymous then the soap mep is f-a-f if the protocol is not http else the mep is request-optional-response if the protocol is http. If the mep is f-a-f then close the connection, etc. &#8220;. The whole point of doing things &#8220;strongly&#8221; or &#8220;statically&#8221; is that there&#8217;s something known up front, but with data driven protocol interactions supported by WS-A et al, this is just plain broken. Instead of the previous, I propose &#8220;The mep is request-optional-response. If protocol is HTTP and replyTo is anonymous, wait for response from application. Else don&#8217;t wait.&#8221;.</p>
</blockquote>

<section class="comments">

<div class="comment" id="comment-782">
On <a href="#comment-782" title="Permalink to this comment">February 14, 2006  1:56 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>As I&#8217;ve been saying - in effect - for years now in regards to WSDL, &#8220;What part of &#8216;<em>self</em>-descriptive messages&#8217; don&#8217;t you understand?&#8221; 8-)</p>


</section>

