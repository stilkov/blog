---
layout: post
title: "Clojure Performance Guarantees"
date: "2010-04-28T16:39:00+01:00"
comments: false
categories: 
---

<p>Jarkko Oranen a.k.a. Chousuke posted an excellent table summarizing the performance characteristics of functions operating on different Clojure data structures:</p>

<p><style type="text/css">
table.perf {
border-width: 1px;
border-spacing: ;
border-style: outset;
border-color: gray;
border-collapse: collapse;
}
table.perf th {
border-width: 1px;
padding: 5px;
border-style: dotted;
-moz-border-radius: ;
}
table.perf td {
border-width: 1px;
padding: 5px;
border-style: dotted;
border-color: gray;
}</p>

<p></style></p>

<table class="perf">
<tr><th></th><th>hash-map</th><th>sorted-map</th><th>hash-set</th><th>sorted-set</th><th>vector</th><th>queue</th><th>list</th><th>lazy seq</th></tr>
<tr><td>conj</td><td>near-constant</td><td>logarithmic</td><td>near-constant</td><td>logarithmic</td><td>constant (tail)</td><td>constant (tail)</td><td>constant (head)</td><td>constant (head)</td></tr>
<tr><td>assoc</td><td>near-constant</td><td>logarithmic</td><td>-</td><td>-</td><td>near-constant</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>dissoc</td><td>near-constant</td><td>logarithmic</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>disj</td><td>-</td><td>-</td><td>near-constant</td><td>logarithmic</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>nth</td><td>-</td><td>-</td><td>-</td><td>-</td><td>near-constant</td><td>linear</td><td>linear</td><td>linear</td></tr>
<tr><td>get</td><td>near-constant</td><td>logarithmic</td><td>near-constant</td><td>logarithmic</td><td>near-constant</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>pop</td><td>-</td><td>-</td><td>-</td><td>-</td><td>constant (tail)</td><td>constant (head)</td><td>constant (head)</td><td>constant (head)</td></tr>
<tr><td>peek</td><td>-</td><td>-</td><td>-</td><td>-</td><td>constant (tail)</td><td>constant (head)</td><td>constant (head)</td><td>constant (head)</td></tr>
<tr><td>count</td><td>constant</td><td>constant</td><td>constant</td><td>constant</td><td>constant</td><td>constant</td><td>constant</td><td>linear</td></tr>
</table>

<p>He also provided an explanation of the terminology used; I've expanded it a little for the big-O-challenged (such as me):</p>

<ul>
<li><em>constant</em> means O(1) complexity, in other words, the time required for the operation is constant and independent of the number of elements contained in the collection. If you think of s simple linked list, you can imagine that adding something to its front always involves the same number of steps, regardless of the number of elements. This is the fastest you can hope for.</li>
<li><em>linear</em> is the slowest that can happen (in the Clojure libs, that is): This is O(n) complexity, meaning that the time required for applying this function on a list with 1000 elements will take a 100 times as long as applying it to a list of 10. In other words: this is slow.</li>
<li><em>logarithmic</em> means that the time required requires log n hops, which is pretty fast (e.g. doing this operation on a list of 1,000,000 items takes 6 times as long as doing it on a list with 10)</li>
<li><em>near-constant</em> performance characteristics refer to the places where the underlying tree structure for most (all?) of Clojure's collections shows its benefits: The number of hops required (as Rich puts it) is log32 n. (Update: I've erased the naïve explanation I had here, will follow up with a better one soon.)</li>
<li>Some operations are, of course <em>not supported</em> on some structures.</li>
</ul>

<p>On a related note, the Clojure IRC channel is simply great.</p>

<section class="comments">



<div class="comment" id="comment-2122">
On <a href="#comment-2122" title="Permalink to this comment">May  3, 2010  3:57 PM</a>, Matt R.
said:
<p>Any chance you&#8217;d consider switching from English terms to big-O notation?  The big-O notation is easier to identify.</p>


<div class="comment" id="comment-2123">
On <a href="#comment-2123" title="Permalink to this comment">May  4, 2010  5:37 AM</a>, Anonymous
said:
<p>Minor: s/list/map/g (logarithmic paragraph).
Reason: there are no logarithmic operations on lists.</p>


</section>

