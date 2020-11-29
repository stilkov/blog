---
layout: post
title: "Is Ruby Too Slow?"
date: "2006-09-14T10:09:00+01:00"
comments: false
categories: 
---

<p><a href="http://joelonsoftware.com/items/2006/09/12.html">Joel thinks so</a>; <a href="http://feeds.feedburner.com/~r/LoudThinking/~3/21630765/000598.html">David Heinemeier Hansson</a> has a great pragmatic answer; Smalltalk guru Avi Bryant <a href="http://smallthought.com/avi/?p=16">explains why dynamic, duck-typed languages don&#8217;t have to be slow at all</a>, both he and <a href="http://patricklogan.blogspot.com/2006/09/ruby-and-strongtalk.html">Patrick Logan</a> point out the link to Hotspot&#8217;s Smalltalk predecessor, StrongTalk; <a href="http://blogs.iona.com/vinoski/archives/000354.html">Steve Vinoski</a> (who certainly has done his share of C++ development) criticizes Joel&#8217;s &#8220;fundamental misunderstanding&#8221;;  <a href="http://feeds.feedburner.com/~r/obie/~3/21693001/obie">Obie is disappointed</a> by Joel.</p>

<p>I still think Joel is one of the greatest writers on the &#8216;net, but in this case, I agree he&#8217;s plainly wrong.</p>

<section class="comments">

<div class="comment" id="comment-1032">
On <a href="#comment-1032" title="Permalink to this comment">September 14, 2006  5:41 PM</a>, Jan Persson
said:
<p>So Joel is plainly wrong when he says that Ruby is slow? Have you seen <a href="http://shootout.alioth.debian.org/?" rel="nofollow" /><a href="http://shootout.alioth.debian.org/?" rel="nofollow">http://shootout.alioth.debian.org/?</a></p>


<div class="comment" id="comment-1033">
On <a href="#comment-1033" title="Permalink to this comment">September 15, 2006 12:31 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Ruby is obviously a lot slower than many other languages. That&#8217;s not the point. The major point is whether that maters. </p>

<p>The shootout doesn&#8217;t prove anything, IMO, since a Web app &#8212; the target of Rails &#8212; spends most of its time waiting on either the network or the DB. I&#8217;ve not yet seen a Ruby on Rails app that failed because of performance issues, and I don&#8217;t really expect to see one anytime soon.</p>


<div class="comment" id="comment-1034">
On <a href="#comment-1034" title="Permalink to this comment">March  5, 2007 12:42 PM</a>, raffaele
said:
<p>Please read this:
<a href="http://joelonsoftware.com/items/2006/09/12.html" rel="nofollow" /><a href="http://joelonsoftware.com/items/2006/09/12.html" rel="nofollow">http://joelonsoftware.com/items/2006/09/12.html</a></p>

<p>Joel is talking <em>specifically</em> about Ruby, not Rails. Ruby IS slow, fullstop.
This may be secondary in webapps, but is still a matter of fact.
This also means that Java is the best thing could happen to Ruby: rumors says that the JRuby implementation will be faster than the original c implementation.</p>


</section>

