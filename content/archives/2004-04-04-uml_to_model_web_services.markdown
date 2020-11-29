---
layout: post
title: "UML to model Web Services?"
date: "2004-04-04T11:57:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.iona.com/blogs/newcomer/archives/000023.html">Eric Newcomer answers</a> some of <a href="/blog/st/archives/000801.html">my criticisms</a> of his <a href="http://www.iona.com/blogs/newcomer/archives/000019.html">recent posting</a> on MDA.</p>

<p>Great to see that we&#8217;re not that far apart, and kudos to Eric for openly acknowledging a slight change of mind &mdash; something you don&#8217;t find very often. Interestingly, many opponents of code generation tend to compromise on the viability of doing one-shot generation without later on going to back to the model, while I believe that this is even worse than not doing code generation at all. </p>

<p>One interesting point remains: Eric believes UML to unsuited for modeling Web services. I see no reason why this should be the case. I strongly agree that <a href="http://weblogs.cs.cornell.edu/AllThingsDistributed/archives/000343.html">Web services are not distributed objects</a>, but of course UML can be used to model non-OO concepts as well. In fact, we are using UML in one of our projects to model Web services, and we definitely do not take a distributed objects approach.</p>

<p>Maybe I should illustrate this using an example. Anyone got a nice Web service I could use? ;-)</p>

<section class="comments">

<div class="comment" id="comment-248">
On <a href="#comment-248" title="Permalink to this comment">April 11, 2004 11:27 PM</a>, <a href="http://www.iona.com/blogs/newcomer/" title="http://www.iona.com/blogs/newcomer/" rel="nofollow">Eric Newcomer</a>
said:
<p>The short answer is that Web services are designed for use across software domains, originally across the Internet, but also within an Intranet.  UML was designed for development within a domain, and actually only certain domains (i.e. object oriented but not message queues).  Web services design must focus on the data, or schema, to be shared, rather than on the interface.  It&#8217;s true that you can use UML for Web services, just like you can use a piece of string and two tin cans for a telephone.  But that doesn&#8217;t mean the technology was intended to be used that way, nor that it&#8217;s the right fit for purpose.  More details coming on my blog <a href="http://www.iona.com/blogs/newcomer/." rel="nofollow" /><a href="http://www.iona.com/blogs/newcomer/." rel="nofollow">http://www.iona.com/blogs/newcomer/.</a></p>


<div class="comment" id="comment-249">
On <a href="#comment-249" title="Permalink to this comment">December 13, 2005  3:13 PM</a>, <a href="http://www.workx.co.uk/NotesToSelf/" title="http://www.workx.co.uk/NotesToSelf/" rel="nofollow">Dirc Khan-Evans</a>
said:
<p>The way I see it, a web service is an entity in the same way that a class is and has operations.</p>

<p>A web service is also built in code and will use the underlying objects to perform its functions, so in this respect UML is a good tool to use for this.</p>

<p>On the other hand, UML is not currently designed to show configuration type of stuff so transport definitions are not suitable for UML.</p>

<p>Event the data/message schema can be modelled as a class, in much the same way that we can interchange classes and XML documents. So I would say that UML is a suitable tool.</p>

<p>As I said before, the only real weakness is the nice portrayal of an XSD schema in UML, but it has been done..</p>


</section>

