---
layout: post
title: "RESTful Rails Drops Semicolons"
date: "2007-03-29T08:02:00+01:00"
comments: false
categories: 
---

<p>From the <a href="http://dev.rubyonrails.org/changeset/6485">Rails changelog</a>:</p>

<blockquote>
<p>Dropped the use of ; as a separator of non-crud actions on resources and went back to the vanilla slash. It was a neat idea, but lots of the non-crud actions turned out not to be RPC (as the ; was primarily intended to discourage), but legitimate sub-resources, like /parties/recent, which didn&#8217;t deserve the uglification of /parties;recent. Further more, the semicolon caused issues with caching and HTTP authentication in Safari. Just Not Worth It [DHH] </p>
</blockquote>

<p>I actually <em>liked</em> the use of <code>;edit</code> to get a form to edit something, but hey, it&#8217;s just URLs.</p>

<p>[via <a href="http://pragdave.pragprog.com/pragdave/2007/03/change_to_rest_.html">PragDave</a>]</p>

<section class="comments">

<div class="comment" id="comment-1224">
On <a href="#comment-1224" title="Permalink to this comment">March 29, 2007  6:06 PM</a>, DHH
said:
<p>I liked ;edit too. But I hated ;recent and other sub-resources considerably more ;)</p>


<div class="comment" id="comment-1225">
On <a href="#comment-1225" title="Permalink to this comment">March 29, 2007  6:42 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Fair enough.</p>


</section>

