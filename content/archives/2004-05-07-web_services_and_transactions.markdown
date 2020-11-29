---
layout: post
title: "Web Services and Transactions"
date: "2004-05-07T16:37:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ebizq.net/topics/soa/features/3065.html">This article</a> sucks on so many different levels, I don&#8217;t feel like pointing them out in detail. The short version is: Mentioning <a href="http://www.opengroup.org/public/pubs/catalog/c193.htm">XA</a> in an SOA context is a dumb idea, and I consider <a href="http://ws.apache.org/wsif/">WSIF</a> to be fundamentally flawed.</p>

<section class="comments">

<div class="comment" id="comment-280">
On <a href="#comment-280" title="Permalink to this comment">May 10, 2004  1:33 PM</a>, Sergey Beryozkin
said:
<p>Hello Stefan,
Can you please elaborate a little bit more on why you believe WSIF is flawed
Thanks</p>


<div class="comment" id="comment-281">
On <a href="#comment-281" title="Permalink to this comment">May 13, 2004  9:26 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I believe the whole idea suggests that whether you use RMI/IIOP, HTTP, JMS or any other means of communication is just a low-level communication detail. I don&#8217;t think it is, and I think that standardizing on the programming language API level as opposed to the transport/communication level is a bad idea.</p>


<div class="comment" id="comment-282">
On <a href="#comment-282" title="Permalink to this comment">June  3, 2004  9:31 PM</a>, Peter Rhys Jenkins
said:
<p>I agree - it sucks. I have never spoken with this lady who seems to have been listening to my presentation with less than her full attention. </p>

<p>I did mention XA in the context that in an SOA each component (executable) needs to be responsible for it&#8217;s unit of work so that it becomes an atomic unit. I stand by that because I need to co-ordinate MQ and local databases for each component of the service to make it easier to recover from failure. This was stated in an MQ context because many customers fail to realise that they issue MQGET, SQL Update, SQL Commit and then fail. The MQGET gets rolled back unless you have XA co-ordination enabled. The restart then processes the message again - voilla - a duplicate.</p>

<p>I apologize for the article.</p>


</section>

