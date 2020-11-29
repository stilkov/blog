---
layout: post
title: "Amazon Queue Service"
date: "2004-11-04T05:51:00+01:00"
comments: false
categories: 
---

<p>In a message from the Amazon Web Services Developer list:</p>

<blockquote>
<p>You can use the <a href="http://www.amazon.com/gp/browse.html/ref=sc_fe_c_1_3435361_6/102-8177950-9371300?%5Fencoding=UTF8&#38;node=13584001&#38;no=3435361&#38;me=A36L942TSJ2AJA">Amazon Simple Queue Service</a> to better manage
messages between components of your distributed
applications. SQS allows you to decouple components and make
them run independently. Any component of a distributed
application can store any type of data in a reliable queue at
Amazon.com.  Any other component or application can then later
retrieve the data using queue semantics.  The queue acts as a
buffer between the work-producer that is saving the data, and
the work-consumer that is retrieving the data for processing.</p>
</blockquote>

<p><em>That</em> definitely deserves a closer look &#8230;</p>

<section class="comments">

<div class="comment" id="comment-394">
On <a href="#comment-394" title="Permalink to this comment">November  5, 2004  2:09 PM</a>, Stelios G. Sfakianakis
said:
<p>&#8230;and here we have again the usual misinterpretation of REST : REST == &#8220;Urls with Query String&#8221;! Check for example the CreateQueue[1] and DeleteQueue[2] operations.</p>

<p>[1]: <a href="http://www.amazon.com/gp/aws/sdk/002-1887247-5410425?s=AWSSimpleQueueService&amp;v=1%2d0" rel="nofollow" /><a href="http://www.amazon.com/gp/aws/sdk/002-1887247-5410425?s=AWSSimpleQueueService&amp;v=1%2d0" rel="nofollow">http://www.amazon.com/gp/aws/sdk/002-1887247-5410425?s=AWSSimpleQueueService&amp;v=1%2d0</a></p>

<p>[2]: <a href="http://www.amazon.com/gp/aws/sdk/002-1887247-5410425?s=AWSSimpleQueueService&amp;v=1%2d0" rel="nofollow" /><a href="http://www.amazon.com/gp/aws/sdk/002-1887247-5410425?s=AWSSimpleQueueService&amp;v=1%2d0" rel="nofollow">http://www.amazon.com/gp/aws/sdk/002-1887247-5410425?s=AWSSimpleQueueService&amp;v=1%2d0</a></p>

<p>St.</p>


<div class="comment" id="comment-395">
On <a href="#comment-395" title="Permalink to this comment">November  5, 2004  2:28 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p><em>Shudder</em> &#8230; you&#8217;re right. If they at least had had the decency to call it &#8220;plain HTTP&#8221; instead of &#8220;REST&#8221;.</p>


<div class="comment" id="comment-396">
On <a href="#comment-396" title="Permalink to this comment">November  5, 2004  3:12 PM</a>, Stelios G. Sfakianakis
said:
<p>the links to my previous comment should read:</p>

<p>[1]: <a href="http://www.amazon.com/gp/aws/sdk/main.html?s=AWSSimpleQueueService&amp;v=1-0&amp;p=ApiReference/CreateQueueOperation" rel="nofollow" /><a href="http://www.amazon.com/gp/aws/sdk/main.html?s=AWSSimpleQueueService&amp;v=1-0&amp;p=ApiReference/CreateQueueOperation" rel="nofollow">http://www.amazon.com/gp/aws/sdk/main.html?s=AWSSimpleQueueService&amp;v=1-0&amp;p=ApiReference/CreateQueueOperation</a></p>

<p>[2]: <a href="http://www.amazon.com/gp/aws/sdk/main.html?s=AWSSimpleQueueService&amp;v=1-0&amp;p=ApiReference/DeleteQueueOperation" rel="nofollow" /><a href="http://www.amazon.com/gp/aws/sdk/main.html?s=AWSSimpleQueueService&amp;v=1-0&amp;p=ApiReference/DeleteQueueOperation" rel="nofollow">http://www.amazon.com/gp/aws/sdk/main.html?s=AWSSimpleQueueService&amp;v=1-0&amp;p=ApiReference/DeleteQueueOperation</a></p>

<p>St.</p>


</section>

