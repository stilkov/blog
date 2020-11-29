---
layout: post
title: "A Note on Distributed Computing"
date: "2004-11-18T22:08:00+01:00"
comments: false
categories: 
---

<p>I needed to dig <a href="http://research.sun.com/techrep/1994/smli_tr-94-29.pdf">this classical paper</a> up today, which took some time; so I&#8217;m linking to it here for future reference:</p>

<blockquote>
<p>We argue that objects that interact in a distributed system need to be dealt with in ways that are intrinsically different from objects that interact in a single address space. These differences are required because distributed systems require that the programmer be aware of latency, have a different model of memory access, and take into account issues of concurrency and partial failure. We look at a number of distributed systems that have attempted to paper over the distinction between local and remote objects, and show that such systems fail to support basic requirements of robustness and reliability. These failures have been masked in the past by the small size of the distributed systems that have been built. In the enterprise-wide distributed systems foreseen in the near future, however, such a masking will be impossible. We conclude by discussing what is required of both systems-level and application-level programmers and designers if one is to take distribution seriously. </p>
</blockquote>

<p>Written 10 years ago as a critique of the <em>location transparency</em> illusion of distributed objects, and even more true for SOA.</p>

<section class="comments">

<div class="comment" id="comment-416">
On <a href="#comment-416" title="Permalink to this comment">November 18, 2004 10:31 PM</a>, <a href="http://weblogs.asp.net/cweyer/" title="http://weblogs.asp.net/cweyer/" rel="nofollow">Christian Weyer</a>
said:
<p>I read this paper just two weeks ago - there is also  a lot of &#8230; well &#8230; &#8220;nonsense&#8221; in it. But the piece you mention is perfectly good..</p>


<div class="comment" id="comment-417">
On <a href="#comment-417" title="Permalink to this comment">November 19, 2004  7:46 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Nonsense? In Waldo&#8217;s paper? How dare you! Heretic! :-)</p>

<p>Seriously though, it&#8217;s been quite a while since I&#8217;ve read it thoroughly (about 5 years ago); I&#8217;ll re-read it now, trying to find something I can&#8217;t agree with &#8230;</p>


</section>

