---
layout: post
title: "More lesscode"
date: "2005-09-18T00:44:00+01:00"
comments: false
categories: 
---

<p><a href="http://lesscode.org/2005/08/29/vendor-wars/">More interesting stuff</a> from the lesscode.org site:</p>

<blockquote>
<p>It is becoming increasingly difficult for me to envision why would anyone not consider lesscode much more desirable than morecode? Software code is like the headcount: you typically only hire as many people as you need in order to successfully run your business. Anyone that might suggest to you that it is much better to double or triple your payroll, &#8216;just in case&#8217;, is simply hosing you.</p>
</blockquote>

<p>I&#8217;m a firm believer in trying to write as little code as possible (check <a href="http://www.paulgraham.com/avg.html">Paul Graham&#8217;s arguments</a> and tell me whether you don&#8217;t find them convincing), but one of my very smart colleagues raised a valuable point: Fewer lines may be a lot harder to understand. If you take a look at some of the wizardry that is feasible with Lisp macros and the like, it&#8217;s hard not to concede the point &#8230; It&#8217;s basically the same argument about whether </p>

<pre><code>if (a == 0)
b = x;
else
b = y;
</code></pre>

<p>or</p>

<pre><code> b = a == 0 ? x : y;
</code></pre>

<p>is more readable, easier to maintain etc. If you know the <code>?</code> operator, the answer is obvious; but if you imagine that it was not part of the languages with C ancestry, but instead invented by some programmer for a particular project, the answer might be different.</p>

<section class="comments">

<div class="comment" id="comment-625">
On <a href="#comment-625" title="Permalink to this comment">September 18, 2005  1:47 AM</a>, <a href="http://www.ayende.com/Blog/" title="http://www.ayende.com/Blog/" rel="nofollow">Ayende Rahien</a>
said:
<p>First, if you don&#8217;t know the tenerary operator and you&#8217;re reading code in a C based langauge, you&#8217;ve other problem. This is not a problem. The problem is something like this (C++):</p>

<p>set1 &lt;&lt;= set2;</p>

<p>vs.</p>

<p>set1 = set1.Union(set2);</p>

<p>Or evil code macros.</p>

<p>Second, concise code is /usually/ better, but not when terseness is the goal.</p>

<p>It&#8217;s better to say something in as few words as possible, but not fewer.
Sure, I can do: !boolValue, and my eye often just skip the !, so I usually do boolValue == false to make sure that I see it.</p>

<p>Other nastiness</p>


<div class="comment" id="comment-626">
On <a href="#comment-626" title="Permalink to this comment">September 18, 2005  8:50 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>It seems your comment has been cut off, which is a pity. But I don&#8217;t think we disagree: I just want to point out that not every argument against less code is motivated by lowly commercial interests  or plain stupidity.</p>


</section>

