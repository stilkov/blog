---
layout: post
title: "Attacking XML Security"
date: "2007-08-15T23:00:00+01:00"
comments: false
categories: 
---

<p>A very interesting presentation for those who believe WS-Security will solve their problems. I&#8217;m no security guru, but this paper (<a href="http://www.isecpartners.com/files/iSEC_HILL_AttackingXMLSecurity_bh07.pdf">PDF</a>) would definitely make me feel uneasy had I bet my company&#8217;s safety on this &#8230; [via <a href="http://www.1060.org/blogxter/entry?publicid=DD45C7833F5DDD05C81D9B69EB5775C8&amp;token=">Steve Loughran</a>]</p>

<section class="comments">



<div class="comment" id="comment-1415">
On <a href="#comment-1415" title="Permalink to this comment">August 16, 2007 10:38 AM</a>, <a href="http://www.dulciana.com" title="http://www.dulciana.com" rel="nofollow">Mike Glendinning</a>
said:
<p>Stefan,</p>

<p>Well, I think many of us distrust the complexity of WS-Security.</p>

<p>And what Hill says resonates with me from my experience at T-Mobile in 2001.</p>

<p>I had many arguments with the T-Mobile &#8220;corporate security police&#8221; over my use of simple HTTP+SSL+BA to secure our external web services. But of course this gave us the all-important &#8220;accountability&#8221; as Hill describes whilst keeping things simple for the external content provider partners. This is what the business needed - the ability to recruit many hundreds of partners as quickly and cheaply as possible. In the event of any suspicious activity resulting from a particular content provider, we had the strongest contractual remedy - we simply wouldn&#8217;t pay them any money!</p>

<p>Take care though to understand Hill&#8217;s argument (in part 1) that client authentication is needed with SSL, so that you achieve the needed &#8220;accountability&#8221;. In my experience, client-side certificates are still too difficult for most people to understand and implement and since the certificate itself can be copied/stolen, provide you little extra assurance over ordinary passwords.</p>

<p>Also, in part 2, Hill criticises both XML-DSIG and XSLT, both of which might be part of many security schemes other than WS-Security. Personally, I avoid these simply because they are horribly ugly.</p>

<p>Finally, for the RESTafarians, isn&#8217;t there a problem in using SSL as this effectively precludes the use of intermediaries and cacheing? Aren&#8217;t these two features supposed to be essential parts of REST and some of the strongest benefits of plain-old-HTTP?</p>

<p>Regards,</p>

<p>-Mike Glendinning.</p>


<div class="comment" id="comment-1416">
On <a href="#comment-1416" title="Permalink to this comment">August 16, 2007 11:31 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Regarding SSL and caching, you are of course right. But you still get the benefit of client-side (if not intermediary) caching, and of course using multiple URIs for resources instead of a single endpoint (or small number of endpoints) allows you to  decide whether or not to enable security on a very fine level.</p>


</section>

