---
layout: post
title: "The Lack of OO in Web Services"
date: "2005-05-05T18:11:00+01:00"
comments: false
categories: 
---

<p>In <a href="http://www.zeroc.com/newsletter/issue2.pdf">a ZeroC newsletter</a>, Michi Henning writes:</p>

<blockquote>
<p>The lack of object-oriented features in WSDL is a serious
limitation. In effect, web services revert back to the procedural and
data-centric programming style of the seventies. Claiming such a
retrograde step as an advantage seems self-serving in the extreme. </p>
</blockquote>

<p>Together with <a href="http://www.iona.com/hyplan/vinoski/">Steve Vinoski</a> and <a href="http://www.cs.wustl.edu/~schmidt/">Doug Schmidt</a>, Michi is one of my heros from my CORBA days. Strange to see him so utterly miss the point &#8230;  </p>

<p>[via <a href="http://hyperthink.net/blog/PermaLink,guid,e9a5e58c-c158-4db4-947d-47ad5e9ac6d8.aspx">Steve Maine</a>]</p>

<section class="comments">

<div class="comment" id="comment-525">
On <a href="#comment-525" title="Permalink to this comment">May  6, 2005  1:55 AM</a>, Dilip
said:
<p>Your respect will never be misplaced.  Please take a look at Michi&#8217;s response to Steve&#8217;s post.</p>


<div class="comment" id="comment-526">
On <a href="#comment-526" title="Permalink to this comment">May  9, 2005 12:08 PM</a>, <a href="http://www.jroller.com/page/nil" title="http://www.jroller.com/page/nil" rel="nofollow">nil</a>
said:
<p>Hi,
I don&#8217;t see how Michi misses the point.
Technically I think he&#8217;s correct.
Of course  the success of project does not only depend on choosing the best technology. This also implies that you can do successful projects based on <br />
&#8220;bad&#8221; technology.  </p>

<p>~nil~</p>


<div class="comment" id="comment-527">
On <a href="#comment-527" title="Permalink to this comment">May  9, 2005 12:15 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Whatever criticism you might have about Web services &#8212; and I believe there&#8217;s lots of valid reasons &#8212; the lack of OO features strikes me as utterly irrelevant. Every project I&#8217;ve been involved in that used a middleware that supported distributed OO, such as CORBA and EJB, ended up banning its usage.</p>


<div class="comment" id="comment-528">
On <a href="#comment-528" title="Permalink to this comment">May 10, 2005  9:41 PM</a>, <a href="http://www.jroller.com/page/nil" title="http://www.jroller.com/page/nil" rel="nofollow">nil</a>
said:
<p>Hi,
I`ve been using  (interface-) inheritance in Corba projects sucessfully. </p>

<p>I cant see how inheritance of interfaces is &#8220;bad&#8221; in general. </p>

<p>Regards,
Markus</p>


<div class="comment" id="comment-529">
On <a href="#comment-529" title="Permalink to this comment">May 11, 2005 11:00 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I don&#8217;t object to interface inheritance, more to the statefulness introduced by object references. If you ban those, and force clients to explicitly name objects (instead of making that part of the context), it&#8217;s arguable whether it&#8217;s really &#8220;inheritance&#8221; or simply multiple interfaces &#8230;</p>


</section>

