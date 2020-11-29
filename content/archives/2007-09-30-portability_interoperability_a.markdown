---
layout: post
title: "Portability, Interoperability, and SCA"
date: "2007-09-30T09:18:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.davidchappell.com/blog/2007/09/why-microsoft-should-not-support-sca.html">David Chappell</a>:</p>

<blockquote>
<p>Given the competitive realities, Microsoft supporting SCA today is about as likely as an embrace of EJB would have been a decade ago. Yet even if the company wanted to, there&#8217;s not much there for Microsoft to embrace. Given SCA&#8217;s complete focus on portability rather than interoperability, the set of programming languages it supports, and the minimalist nature of SCDL, Microsoft&#8217;s support of this emerging technology would provide almost no benefit to customers.</p>
</blockquote>

<p>Be sure to read <a href="http://www.davidchappell.com/blog/2007/09/why-microsoft-should-not-support-sca.html">the full piece</a>; I believe David knows quite a bit about <a href="http://www.osoa.org/display/Main/Service+Component+Architecture+Specifications">SCA</a>, and has been an SCA proponent for quite some time &#8212; still, I can&#8217;t imagine anyone <em>not</em> wondering whether the whole thing is worth the effort after considering his arguments.</p>

<p>Interoperability clearly tops portability. Portability (and for what it&#8217;s worth, programming language-level integration) is such a 20th century idea &#8230;</p>

<section class="comments">



<div class="comment" id="comment-1467">
On <a href="#comment-1467" title="Permalink to this comment">September 30, 2007  5:48 PM</a>, <a href="http://www.ebpml.org/feed.xml" title="http://www.ebpml.org/feed.xml" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>Stefan:</p>

<p>it looks to me that Dave does not mention &#8220;the&#8221; argument that explains why Microsoft will never support SCA. Even though SCA was solely designed as a SOA technology, it has quite a CLRish feel. Java is no longer the center of the universe and new programming languages such as BPEL are welcomed. At the end of the day SCA undermines Microsoft&#8217;s strategy across the board: the programming model (WCF), interop (not just Web Services), and multi-lingual solutions (CLR).</p>

<p>Unfortunately it is impossible to resist SCA because it has just too many advantages .</p>

<p>The reason why Microsoft should join the SCA effort is because there is no center to it. You don&#8217;t see any clear vendor advantage. An SCA implementation is distributed (in other words nobody is surrending control to IBM&#8217;s runtime or anybody else) and composable. Sure there is a small logically centralized management component to it, but that&#8217;s not where the money is.</p>

<p>The money is in enabling customers to compose reusable IT assets regardless of the technology they were built in. There are no money to be made in the &#8220;centralized&#8221; pieces of SCA.</p>

<p>WCF missed the boat of asset composition since it only supported binary composition. To its defense it was designed early (2003) when there was little or no requirement for that and it was already very innovative. Microsoft will need to offer a composition model soon, the &#8220;interop&#8221; question will come back since customers will ask &#8220;I want to compose components&#8221; from different technologies (say Java). If Microsoft is developing its own component model, it might have some success, but innevitably, someone will develop an SCA layer on top of WCF and who would want to buy something else than SCA then?</p>

<p>It is important to realize that SCA is more than web services and composing &#8220;web services&#8221; into an SCA like model is not enough. WSDL 1.1. and 2.0 are flawed in the sense that they do not allow out of the box a peer-to-peer composition model. They only support a client/server model. SCA fixes that bug and solutions will increasing need this capability.</p>


<div class="comment" id="comment-1468">
On <a href="#comment-1468" title="Permalink to this comment">September 30, 2007  8:06 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hi JJ, I believe we just have to agree to disagree. To me, a portable, cross-platform assembly model and programming model has no chance to succeed &#8212; there&#8217;s just too much agreement requirement for our industry. Regarding your point,</p>

<blockquote>
<p>The reason why Microsoft should join the SCA effort is because there is no center to it. You don’t see any clear vendor advantage.</p>
</blockquote>

<p>it seems there was no clear vendor advantage to CORBA, either &#8230; which somehow did not make MSFT ever join it, either.</p>


<div class="comment" id="comment-1469">
On <a href="#comment-1469" title="Permalink to this comment">October  2, 2007  3:04 AM</a>, <a href="http://www.ebpml.org/feed.xml" title="http://www.ebpml.org/feed.xml" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>yes, but there is a fundamental difference that happened since CORBA. Back then &#8220;distributed&#8221; objects were a great idea in search of a seemingly great problem. </p>

<p>Today, there is demand for composition. Mashups at the presentation layers are showing the way. Soon people will realize that you can Mashup at the process and information layers too. </p>

<p>I am not sure REST will remain adequate for sophisticated mashups. I may be wrong, but I ready to be $1 on a successful technology neutral composition model. The value you get is just too high, not to mention that a &#8220;service&#8221; scales a lot more than a &#8220;distributed&#8221; object. </p>

<p>JJ-</p>


</section>

