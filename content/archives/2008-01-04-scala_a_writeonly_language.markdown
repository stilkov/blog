---
layout: post
title: "Scala a Write-Only Language"
date: "2008-01-04T11:14:00+01:00"
comments: false
categories: 
---

<p><a href="http://creativekarma.com/ee.php/weblog/comments/my_verdict_on_the_scala_language/">Doug Pardee</a>&#8217;s verdict on Scala:</p>

<blockquote>
<p>The Scala language is intriguing, quite powerful, but tends toward being illegible when written “properly”. I’m not at all convinced that the average software developer is able to grasp Scala. At least, not beyond the basic abilities that could just as easily be expressed in Java. Heck, from what I can tell there are a lot of software developers who find Java to be beyond their full comprehension.</p>
</blockquote>

<p>Interesting read. I&#8217;ve only played with Scala for a few hours a while ago, and I attended <a href="http://www.voelter.de/conferences/index/detail-636864856.html">a nice introductory talk by Markus Völter</a>; from this, I got the impression that Scala is cool but complex. Some of Doug&#8217;s criticism seems to be founded in a lack of familiarity with (or resistance to) FP idioms, but he still seems to have quite a few valid points.</p>

<section class="comments">



<div class="comment" id="comment-1564">
On <a href="#comment-1564" title="Permalink to this comment">January  4, 2008 10:16 PM</a>, <a href="http://creativekarma.com/" title="http://creativekarma.com/" rel="nofollow">Doug</a>
said:
<p>No direct resistance to FP idioms, but an <em>indirect</em> resistance. I don&#8217;t think that the &#8220;average&#8221; developer is going to understand the FP idioms, or at least not all of them. If the code that I write contains an idiom that another developer can&#8217;t understand&#8212;or worse, misunderstands&#8212;that&#8217;s a problem.</p>

<p>British vs. American idioms (amusing to Americans, anyway):</p>

<pre>
He: "Can I knock you up in the morning?"
She: "No, give me a ring instead."
</pre>

<p>As the section that you quoted above alludes to, I&#8217;m reading a lot of complaints that Java 5.0 (especially generics) pushed the complexity of Java beyond the ability of many Java developers, and that the closure proposals only promise to make things worse. If generics are too complicated for developers to understand, and closures are even worse, then what the heck are those developers going to do with monads and catamorphisms?</p>

<p>I think that there&#8217;s some real value in nudging developers toward using immutable data. But that&#8217;s going to be hard enough&#8212;many Java developers today find the immutability of java.lang.String to be infuriating. Going full-out FP is, in my opinion of course, not going to be accepted for some time to come.</p>


<div class="comment" id="comment-1565">
On <a href="#comment-1565" title="Permalink to this comment">January  4, 2008 10:58 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Are you familiar with Paul Graham&#8217;s &#8220;Blub&#8221; theory? </p>

<p><a href="http://www.paulgraham.com/avg.html">http://www.paulgraham.com/avg.html</a></p>

<p>Essentially, idioms that are currently not part of one&#8217;s language always seem weird. It all depends on what people are used to. The example you gave seemed slightly weird to me, too, but more for syntactical reasons. E.g. in Ruby it would be </p>

<pre>def sum(l);  l.inject {|sum, value| sum += value }; end
</pre>

<p>For a Ruby programmer, the inject call is totally idiomatic, and the iterative way would simply feel weird (like somebody programming Java without using classes).</p>

<p>It also seems to me that being easy for Java programmers is a Scala non-goal, but I may be wrong.</p>

<p>Finally, I believe many of Java problems arise because it has grown and remained backwards-compatible &#8212; a language cleanly designed from scratch would never look this way.</p>


</section>

