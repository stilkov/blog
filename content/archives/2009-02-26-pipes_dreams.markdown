---
layout: post
title: "Pipes Dreams"
date: "2009-02-26T07:56:00+01:00"
comments: false
categories: 
---

<p><a href="http://barelyenough.org/blog/2009/02/pipes-dreams/">Peter Williams</a> on Yahoo! Pipes' lack of a text representation:</p>

<blockquote>
<p>Almost immediately i was disappointed in the lack of a textual representation of the data extraction and transformation rules that comprise a “pipe”. Being a programmer by trade i always feel happier when i can use my favorite text editor, not to mention source control, for tasks like these. [...] However, my wife, an ETL expert, assured me that visual editing is the norm for tools such as Pipes.</p>
</blockquote>

<p>I saw this coming up again and again recently: While for many models (and programs, and anything in between) having a visual representation is nice when you want to <em>read</em> (or view) it, visual authoring sucks in the vast majority of cases. Sadly, being able to efficiently edit something in a text editor, with versioning and diff support and so on is  in general not what impresses those who make purchasing decisions.  </p>

<section class="comments">



<div class="comment" id="comment-1935">
On <a href="#comment-1935" title="Permalink to this comment">February 26, 2009  8:24 AM</a>, <a href="http://stage.vambenepe.com/" title="http://stage.vambenepe.com/" rel="nofollow">William</a>
said:
<p>Another take on this:
<a href="http://memeagora.blogspot.com/2009/02/tools-anti-behavior-soa-tarpit-of.html" rel="nofollow">http://memeagora.blogspot.com/2009/02/tools-anti-behavior-soa-tarpit-of.html</a></p>


<div class="comment" id="comment-1936">
On <a href="#comment-1936" title="Permalink to this comment">February 26, 2009 11:03 AM</a>, <a href="http://www.martin-probst.com" title="http://www.martin-probst.com" rel="nofollow">Martin Probst</a>
said:
<p>I&#8217;ve once worked at a certain very large German ERP software company, which of course, being ERP, totally goes after these BPEL, BPMN, Business-Process-whatever things. And yes, they acknowledge all these problems with versioning of process models, abstraction, reuse etc., but apparently no one is really trying to fix them.</p>

<p>I think one of the reasons is that you&#8217;re trying to sell this to business users, and business users are not programmers, so they usually don&#8217;t employ the mental rigor that&#8217;s needed to come up with good abstractions, even if it&#8217;s only something like a function call to a subprocess.</p>

<p>IMHO that&#8217;s also the reason why &#8220;Excel programming&#8221; is both popular and horrible. Popular because you get something done very quickly and are not forced to learn any abstractions, and horrible because you end up with code that has no abstractions whatsoever and reuse is indeed copy and paste.</p>


<div class="comment" id="comment-1937">
On <a href="#comment-1937" title="Permalink to this comment">February 27, 2009 10:31 AM</a>, Anonymous Coward
said:
<p><strong>&#8230; but apparently no one is really trying to fix them.</strong>
And they have good reasons not to fix it.  Undocumented serialization formats or creative interpretations of standards (e.g. XMI) are a perfect way to create vendor lock in. This guarantees that customers have to use the complete tool chain from one supplier only.</p>


</section>

