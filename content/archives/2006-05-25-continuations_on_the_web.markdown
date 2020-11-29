---
layout: post
title: "Continuations on the Web"
date: "2006-05-25T09:29:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.megginson.com/blogs/quoderat/archives/2006/05/20/continuations-contd/">An excellent discussion</a> of pros and cons of using continuations for Web apps; as much as I&#8217;m a fan of Scheme, I still can&#8217;t claim to have found a good use for this particular feature.</p>

<section class="comments">

<div class="comment" id="comment-903">
On <a href="#comment-903" title="Permalink to this comment">May 25, 2006  8:00 PM</a>, <a href="http://patricklogan.blogspot.com" title="http://patricklogan.blogspot.com" rel="nofollow">Patrick Logan</a>
said:
<p>Continuations are most useful as a building block for other useful things. Backtracking — e.g. in logic programming, Processes — e.g. in concurrent programming, Co-routines — e.g. in web interactions, Exception handling, etc. All of these can be implemented in “one-off” specialized ways. But if you have continuations then the implementations of each of these becomes nearly trivial.</p>

<p>If you like these, then you like continuations.</p>


<div class="comment" id="comment-904">
On <a href="#comment-904" title="Permalink to this comment">May 25, 2006  8:08 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I guess my applications are usually too boring &#8212; while e.g. RoR&#8217;s use of Ruby&#8217;s DSL features is something that has a direct application to problems I deal with, I&#8217;m rarely involved with logic programming. Obviously exception handling or co-routines are something else, though - I&#8217;ll have to do some research to appreciate this (any pointers appreciated).</p>


</section>

