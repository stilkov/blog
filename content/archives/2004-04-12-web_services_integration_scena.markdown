---
layout: post
title: "Web Services Integration Scenarios and UML"
date: "2004-04-12T23:28:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.iona.com/blogs/newcomer/archives/000025.html">Eric Newcomer</a> follows up on our discussion with regards to UML&#8217;s suitability for Web services. </p>

<p>First of all, Eric states that UML is not suited very well for Web services, since they are typically used for integration scenarios across application domains. The easy, MDA-zealot answer would be that of course you can UML for integration purposes. In fact there is a two-year-old, 304-page specification, the <a href="http://www.omg.org/cgi-bin/doc?ptc/2002-02-02">UML for EAI profile</a>, that is explicitly aimed at this (it&#8217;s a bit out of date, with mappings just to MQ Series and JMS, but so what). I don&#8217;t have any experience with it, though, and I&#8217;m highly skeptical about publicly adopted UML profiles anyway; so I&#8217;ll avoid that easy answer.</p>

<p>I can follow Eric&#8217;s argument that basically, UML (not MDA ;-) ) has been designed to <em>build</em> new systems, not to <em>integrate</em> existing ones. Still, often you build a new system and need to integrate several existing ones into it. When you&#8217;re building a system today, you&#8217;ll also equip it with a Web services-enabled interface right from the start, and not add one later. In these cases, you need to do both &#8220;classical&#8221; as well as &#8220;service-based&#8221; development, and that is where I believe UML-driven Web service creation makes a lot of sense.</p>

<p>Even if this is not your use case, I&#8217;m not sure I agree that learning UML in order to use Web services is overkill. I&#8217;ll try to back that up with a nice example, stay tuned (I&#8217;ll need some spare time to do this, as well as to publish some information about the project I was referring to). It basically seems to boil down to the question whether you know one (Web Services or UML) already. Picture yourself not knowing either; what would be easier to understand &mdash; a UML class diagram, or an XSD/WSDL file? </p>

<p>When I&#8217;m not constrained by the borders of reality &mdash; i.e. when I stop thinking about what is actually usable today, and allow myself to think about what I believe would be ideal &mdash; I feel that it&#8217;s actually <a href="http://www.omg.org/technology/documents/formal/mof.htm">MOF</a> that I would really love to be able to use, instead of &#8220;just&#8221; UML. With a MOF-based meta-CASE tool, the Web services world would have its own Service Modeling Language (SML&trade;), perfectly suited to the task at hand, and easy to integrate with the rest.</p>

<section class="comments">

<div class="comment" id="comment-260">
On <a href="#comment-260" title="Permalink to this comment">June 11, 2004  6:30 AM</a>, Saritha K
said:
<p>What is happening in the Modeling space (UML, business process, etc. with web services). How the design, analysis, phases would change with the introduction of these approaches with web services</p>


<div class="comment" id="comment-261">
On <a href="#comment-261" title="Permalink to this comment">June 15, 2004  8:15 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>That&#8217;s a very interesting issue; I plan to write more about this. One paper I found about this is here:
<a href="http://www-106.ibm.com/developerworks/library/ws-soad1/?ca=dnt-522" rel="nofollow" /><a href="http://www-106.ibm.com/developerworks/library/ws-soad1/?ca=dnt-522" rel="nofollow">http://www-106.ibm.com/developerworks/library/ws-soad1/?ca=dnt-522</a></p>


</section>

