---
layout: post
title: "Architects and Technology"
date: "2006-08-25T23:03:00+01:00"
comments: false
categories: 
---

<p>Sam Ruby&#8217;s <a href="http://www.intertwingly.net/blog/2006/08/08/WOA-vs-ROA">recent post</a> has made me think some more. I&#8217;ve wondered for a while why my reaction is so negative when someone emphasizes that SOA is just an architectural concept, and Web services just one possible implementation strategy, with REST, CORBA, RMI, JINI etc. as alternatives [<a href="#arch_tech_fn1">1</a>]. </p>

<p>It&#8217;s not that I&#8217;m a big fan of Web services &#8212; I used to be, but would today rather choose a REST-based approach if given the choice. So why do I find myself defending Web services as the natural implementation choice when people claim SOA is independent of any technology?</p>

<p>I believe the real reason is that I&#8217;m getting more and more annoyed with the fact that technology is somehow deemed unimportant &#8212; too unimportant for high-level architects to waste their time on. But I fundamentally disagree. Obviously, there are SOA-related issues that you can talk about without caring about the underlying technology &#8212; for example, questions of organizational responsibility, incentives for providing or consuming services, a general strategy with regards to vendors (single-vendor or best-of-breed), etc. </p>

<p>But it makes a really <em>big</em> difference whether you build your SOA on Web services, CORBA, or REST; enough of a difference that it may result in millions of &lt;insert currency of choice&gt; loss or profit. It&#8217;s also extremely hard to have a meaningful technical discussion, even one of a high-level nature, when you have not yet defined your technical terms. And doing that is significantly harder when you decide to &#8220;abstract away&#8221; the differences of the technology used [<a href="#arch_tech_fn2">2</a>]. Of course you can talk about &#8220;information being exchanged&#8221;, but it <em>makes a difference</em> whether you exchange objects or XML documents. </p>

<p>Of course technology is not a solution in itself, and of course there&#8217;s a lot of merit in standardizing on basically <em>anything</em> instead of having to support a huge number of different protocols, formats, and incompatible middleware products. But CORBA, J2EE, REST and WS-* differ <em>a lot</em> and it&#8217;s dumb to ignore this.</p>

<p>I vote for allowing terms like HTTP, XML, and Web services to enter into high-level architectural discussions.</p>

<p><em>Footnotes:</em></p>

<p>[<a name="arch_tech_fn1">1</a>] There is hardly a talk on SOA at any German conference that does not emphasize this &#8212; usually in a style that suggests the presenter is an underdog for making this claim.</p>

<p>[<a name="arch_tech_fn2">2</a>] Just take a look at the OASIS SOA reference model for what you get when you try to remain too abstract.</p>


