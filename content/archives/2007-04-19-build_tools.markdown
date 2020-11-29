---
layout: post
title: "Build Tools"
date: "2007-04-19T16:04:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.1060.org/blogxter/entry?publicid=0E729BD9B8A06F372CC136D402810C82">Steve Loughran</a> has written an interesting piece on build tools &#8212; my favorite quote:</p>

<blockquote>
<p>The other change in Java land is Eclipse, which, for better or worse, is about as much an inevitability in a big project as unrealistic deadlines.</p>
</blockquote>

<p>Very true. My main problem with IDE-driven builds is the amount of context required, which is directly related to the ability to reproduce a result. If something builds succesfully in my IDE that doesn&#8217;t mean it&#8217;s going to build successfully in yours &#8212; the results depend very much on the IDE configuration. It&#8217;s like running <code>Ant</code> or <code>make</code>, but with a few dozen environment variables set.</p>

<section class="comments">



<div class="comment" id="comment-1253">
On <a href="#comment-1253" title="Permalink to this comment">April 20, 2007 10:29 AM</a>, <a href="http://soiland.no/" title="http://soiland.no/" rel="nofollow">Stian Soiland</a>
said:
<p>Combining Eclipse with a decent build tool, such as Maven 2, can be a good middle way. In our projects we are doing exactly that, specifying the full test, build and release process using Maven, and just using Eclipse to modify the source code.</p>

<p>With the proper plugins Eclipse can understand the Maven described architecture (such as which libraries to depend on and which source folders to include), and even help you suggest artefacts to include. (Sadly, still by artefact name and not class name). </p>

<p>Of course the Maven 2.0 plugin for Eclipse is still just version 0.0.9 and suffers from problems with nested projects and classpaths, but I still feel it&#8217;s 5 years into the future compared to Ant or.. <em>gross</em> - just using the IDE alone.</p>


<div class="comment" id="comment-1254">
On <a href="#comment-1254" title="Permalink to this comment">April 20, 2007  7:32 PM</a>, <a href="http://billhiggins.us/weblog/" title="http://billhiggins.us/weblog/" rel="nofollow">Bill Higgins</a>
said:
<p>Even though it&#8217;s also early (currently at 0.5), you would probably enjoy seeing the build technology integrated into the Rational Jazz platform&#8217;s Eclipse client (disclosure: I&#8217;m a Jazz developer) which can kick off builds on the Jazz server and view build results in Eclipse.</p>

<p>We&#8217;ve been self-hosting on Jazz build technology for our continuous/integration builds for almost two years and it&#8217;s gotten pretty nice.</p>

<p>If you want more info: <a href="http://jazz.net/" rel="nofollow" /><a href="http://jazz.net/" rel="nofollow">http://jazz.net/</a> or you can just email me.</p>


</section>

