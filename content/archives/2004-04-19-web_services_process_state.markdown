---
layout: post
title: "Web Services Process State"
date: "2004-04-19T23:02:00+01:00"
comments: false
categories: 
---

<p><a href="http://radovanjanecek.net/blog/archives/000084.html">Radovan elaborates</a> on what he means by &#8220;Process State&#8221;, using a software product release cycle as an example. I really like this analogy, since it&#8217;s easy to relate to it :-)</p>

<p>I believe the essence of what he&#8217;s saying is in this paragraph:</p>

<blockquote>Instead, I focused on capturing various communication channels, put them into process (release cycle) context, and let people and applications communicate via a &#8216;process-aware data broker&#8217;. All the &#8216;message exchange&#8217; is captured and general rules/constrains/policies defined are over them.</blockquote>

<p>I think this deserves a bit more detail for this to really become clear. Based on earlier discussions I think what he&#8217;s getting at is that it&#8217;s the deliverables that are important, not the detailed steps used to create them. Thus, a process state in his definition &mdash; when it&#8217;s completed &mdash; would actually be (or be composed of) all those deliverables. And these deliverables have to appear in a certain order, have dependencies to each other, are created automatically or manually &#8230; Correct?</p>

<section class="comments">

<div class="comment" id="comment-263">
On <a href="#comment-263" title="Permalink to this comment">April 20, 2004 12:11 AM</a>, <a href="http://www.ose-ltd.com" title="http://www.ose-ltd.com" rel="nofollow">Neil Earnshaw</a>
said:
<p>Your last paragraph makes it sound a lot like Jim Highsmith&#8217;s Workstate Life Cycle Management in Adaptive Software Development, chapter 9.</p>

<p>From p 237:
The key to scaling up extreme projects is to apply increasing rigour to the result, that is, to the workstate rather than to the workflow.</p>


<div class="comment" id="comment-264">
On <a href="#comment-264" title="Permalink to this comment">April 20, 2004  8:43 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Indeed, that seems very similar (thanks for the reference). The question, to me, is whether this is a general principle that could be applied to any sort of process - and the more I think about it, the more I tend to agree with Radovan that trying to define a rigorous process, including all possible exceptional states, is extremely hard to do once you start addressing real world problems.</p>


</section>

