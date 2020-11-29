---
layout: post
title: "UML, MOF, and Generic Interfaces"
date: "2005-01-05T08:38:00+01:00"
comments: false
categories: 
---

<p>Don Box <a href="http://pluralsight.com/blogs/dbox/archive/2005/01/05/4759.aspx">wonders</a>:</p>

<blockquote>
<p>What has baffled me for some time is why the UML camp puts so much emphasis on UML relative to MOF and XMI, which I&#8217;ve always found much more compelling.  </p>
</blockquote>

<p>I prefer MOF as well, as I&#8217;ve <a href="/blog/st/2004/11/13/domain_specific_languages.html">written</a> before, and I <a href="/blog/st/2004/01/20/microsoft_fud_against_mda.html">strongly</a> believe Microsoft should have based its DSL approach on that instead of inventing its own proprietary technology.
But to address Don&#8217;s point: I think there are two reasons for the &#8220;UML emphasis&#8221;: First, as he writes (probably in a Freudian slip of the fingers, I guess he meant to write &#8220;OMG camp&#8221;), there&#8217;s a &#8220;UML camp&#8221; which is quite distinct from the MOF crowd. </p>

<p>But apart from that political argument, there&#8217;s also a technical one &#8212; one that strangely reflects discussions in the REST &#38; Web services space: The more sophisticated your generic interface is, the more general-purpose tools can make sense of what you&#8217;re doing. With REST (and similarly, if you prefer, with something like WS-Transfer) there&#8217;s a lot of semantics you can rely on regardless of the particular application. </p>

<p>The same is true if you know that your model is UML instead of MOF &#8212; even if you don&#8217;t know the particular UML profile being used, you can still use a general purpose CASE tool to work with a UML model. Working on a generic level with a MOF model (as evidenced e.g. by the EMF editors) is cool for a demo, but not something you&#8217;d want to work with in real life.</p>

<section class="comments">

<div class="comment" id="comment-429">
On <a href="#comment-429" title="Permalink to this comment">March 18, 2005  9:44 PM</a>, <a href="http://www.metacase.com/blogs/jpt/blogView?showComments=true&entry=3288440249" title="http://www.metacase.com/blogs/jpt/blogView?showComments=true&entry=3288440249" rel="nofollow">Juha-Pekka Tolvanen</a>
said:
<p>In my opinion the reason is simple: MOF is just part of the game and all too complex. Most industry cases (e.g. <a href="http://www.dsmforum.org/cases.html)" rel="nofollow" /><a href="http://www.dsmforum.org/cases.html)" rel="nofollow">http://www.dsmforum.org/cases.html)</a> rely on someting else&#8230;</p>


</section>

