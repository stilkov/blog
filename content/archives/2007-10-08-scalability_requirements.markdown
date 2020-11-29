---
layout: post
title: "Scalability Requirements"
date: "2007-10-08T09:02:00+01:00"
comments: false
categories: 
---

<p>In passing, <a href="http://www.25hoursaday.com/weblog/2007/10/06/ThoughtsOnAmazonsInternalStorageSystemDynamo.aspx">Dare Obasanjo</a> makes a very good point (talking about the inapplicability of RDBMS systems to solve very-large-scale requirements):</p>

<blockquote>
<p>Luckily, there are only a handful of companies and Web services in the world that need to operate at that scale.</p>
</blockquote>

<p>While I believe &#8220;a handful&#8221; is a little too restrictive, I&#8217;m pretty sure that for the vast majority of applications, an RDBMS is the right choice (if simple file-based store isn&#8217;t sufficient).</p>

<section class="comments">



<div class="comment" id="comment-1475">
On <a href="#comment-1475" title="Permalink to this comment">October 13, 2007 11:18 PM</a>, <a href="http://patricklogan.blogspot.com" title="http://patricklogan.blogspot.com" rel="nofollow">Patrick Logan</a>
said:
<p>I think a number of these ideas also apply to maintainability, in particular the ability to evolve components more independently than tends to be the case in the IT data centers I am familiar with (and which seem to be the norm, from comparing notes).</p>


<div class="comment" id="comment-1476">
On <a href="#comment-1476" title="Permalink to this comment">October 14, 2007 12:31 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Agreed &#8212; my point is probably more organizational, or even political, then technical; reasons for choosing something other than an RDBMS would have to be <em>extremely</em> good.</p>


</section>

