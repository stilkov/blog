---
layout: post
title: "SOAP/HTTP Scalability"
date: "2005-08-06T13:42:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.iona.com/blogs/vinoski/archives/000192.html">Steve Vinoski</a> points to this <a href="http://webservices.sys-con.com/read/114115_1.htm">article</a> about the issues with scaling up SOAP/HTTP. The arguments about HTTP are valid, but I disagree with the conclusions:</p>

<ul>
<li>The connection sharing problem seems to be a non-issue for most real-world use-cases &#8212; if the client runs on the end users&#8217; computers, I find it hard to believe that someone would argue that HTTP doesn&#8217;t scale; if it&#8217;s server applications that communicate, I don&#8217;t think one would have a need for more simultaneous connections than in the client/server case.</li>
<li>SOAP <a href="http://www.w3.org/TR/2003/REC-soap12-part2-20030624/%23WebMethodFeature">is not restricted</a> to use HTTP POST, so optimizations available for GET over HTTP 1.1 are available. </li>
<li>Finally, I can see the point in using SOAP in conjunction with a reliable transport, such as JMS. But using SOAP over IIOP is probably about as interoperable as rolling your own protocol. But given who&#8217;s their employer, it&#8217;s not entirely unobvious why the authors suggest it &#8230;</li>
</ul>

<section class="comments">

<div class="comment" id="comment-590">
On <a href="#comment-590" title="Permalink to this comment">August 10, 2005  9:57 PM</a>, <a href="http://www.iona.com/blogs/newcomer" title="http://www.iona.com/blogs/newcomer" rel="nofollow">Eric Newcomer</a>
said:
<p>Stefan,</p>

<p>I look forward to seeing you at the DP SOA days next month&#8230;</p>

<p>Just to point out though that IIOP is indeed interoperable, and multiple interoperable implementations exist.  This includes multiple CORBA implementations of course, RMI/IIOP in the J2EE world, and even .NET IIOP from the open source world: </p>

<p><a href="http://iiop-net.sourceforge.net/" rel="nofollow" /><a href="http://iiop-net.sourceforge.net/" rel="nofollow">http://iiop-net.sourceforge.net/</a></p>

<p>Using IIOP achieves better interoperability than  JMS, since JMS is only an API (and only for Java at that) and doesn&#8217;t specify a wire protocol.  </p>

<p>So I would turn the question around and ask what other fast, reliable, multilanguage, standard enterprise quality wire protocol would you run SOAP over, instead?</p>

<p>I suppose the reason that SOAP, WSDL, WS-Addressing etc. have been designed for use with multiple transport protocols is that most Web services vendors anticipated using SOAP over at least one other proprietary transport.  And most likely for the purpose of bridging HTTP to MQ or JMS or something similar when you &#8220;cross the firewall.&#8221;  </p>

<p>But architecturally there is no reason why you can&#8217;t run SOAP as a data format over multiple transport protocols in a transparent fashion &#8212; not just as a bridge but as a switch and therefore eliminate such &#8220;barrier&#8221; thinking &#8212; and of the choices available IIOP has a better chance at interoperability than anything else I know of in its class.</p>

<p>Eric</p>


<div class="comment" id="comment-591">
On <a href="#comment-591" title="Permalink to this comment">August 10, 2005 11:12 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I&#8217;m looking forward to continuing the discussion face to face as well ;-)</p>

<p>I have nothing against IIOP &#8212; in fact I think it&#8217;s a nice protocol for  what I perceive to be its intended use case, namely distributed object computing. I just don&#8217;t see the benefit of using SOAP over IIOP, given that this combination is only supported by very few vendors (as far as I&#8217;m aware, please do correct me if I&#8217;m wrong).</p>


</section>

