---
layout: post
title: "CSV? Are you Serious?"
date: "2007-01-09T08:46:00+01:00"
comments: false
categories: 
---

<p>Forget about XML vs. JSON - here is <a href="http://dabbledb.com/help/guides/pluginapi/">the real contender</a>:</p>

<blockquote>
<p>So, with this talk of services over HTTP, you might be rightly concerned that the next step is to discuss Dabble&#8217;s XML web service protocol. You&#8217;ll be relieved to find out that Dabble plugins don&#8217;t speak XML. They speak CSV (Comma-Separated Values). Dabble passes UTF-8&#8211;encoded plain-text, comma-separated data in and expects UTF-8&#8211;encoded plain-text, comma-separated data out.</p>
</blockquote>

<p>So long, XML, hello again, CSV :-)</p>

<p>(I&#8217;m not really serious &#8212; for <a href="http://dabbledb.com">DabbleDB</a>&#8217;s non-nested, record-oriented structures, CSV may well be a much better choice. I don&#8217;t expect this to become a trend of any kind, but it&#8217;s nice to see that the use of XML has not become a reflex for everyone. (And CSV sucks.))</p>

<p>[via <a href="http://www.cincomsmalltalk.com/blog/blogView?showComments=true&amp;entry=3345752150">James Robertson</a>]</p>

<section class="comments">

<div class="comment" id="comment-1178">
On <a href="#comment-1178" title="Permalink to this comment">January  9, 2007 10:07 PM</a>, Al Lang
said:
<p>Why does CSV suck?</p>

<p>(1) There&#8217;s no escaping syntax (for commas/quotes in values) that everyone agrees on.</p>

<p>(2) Because of (1), people often use escaping syntaxes that aren&#8217;t even adequate to the task.</p>

<p>(3) When you get a CSV file you can&#8217;t tell what character encoding it uses (and whoever gave it to you probably doesn&#8217;t know what that means).</p>

<p>XML is a killer app in many places simply because it doesn&#8217;t have these weaknesses.</p>


<div class="comment" id="comment-1179">
On <a href="#comment-1179" title="Permalink to this comment">January  9, 2007 10:11 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>+1! I&#8217;m sure the Dabble folks know what they&#8217;re doing, but they&#8217;re hardly the typical CSV producer.</p>


</section>

