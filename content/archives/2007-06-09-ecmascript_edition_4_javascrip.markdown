---
layout: post
title: "ECMAScript Edition 4 (JavaScript 2) Reference Implementation"
date: "2007-06-09T09:35:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ccs.neu.edu/home/dherman/">Dave Herman</a> on  <a href="http://lambda-the-ultimate.org/node/2289">Lambda the Ultimate</a>:</p>

<blockquote>
<p>The first pre-release of the reference implementation of ECMAScript Edition 4 (a.k.a. JavaScript 2) is now available. We&#8217;ve created a new web site for information about the ECMAScript specification and reference implementation. You can download source and binary forms of the reference implementation.<br /><br />As we&#8217;ve discussed before here on LtU, the reference implementation of ECMAScript is being written in Standard ML.</p>
</blockquote>

<p><em>Update</em>: <a href="http://lambda-the-ultimate.org/node/1784">Dave also elaborates on the choice of ML</a>:</p>

<blockquote>
<p>Our initial intention was to write a custom specification language that would be tailored to our purposes, with just the right core control features and datatypes to serve as an appropriately abstract model of ECMAScript. But before long, we realized that we were pretty much describing ML. Rather than specifying, implementing, and documenting another programming language that was 80% ML, why reinvent the wheel?<br />The benefits of this approach are many: a definition in a formal language that itself has a clear and precise definition, the luxury of many robust and high-performance implementations (we&#8217;ll be using OCaml extended with first-class continuations), and free &#8220;technology transfer&#8221; from all the existing ML literature and communities.<br />And finally, by releasing real software&#8212;written in a direct functional style&#8212;for reading, type-checking, and evaluating ECMAScript programs, we&#8217;ll be providing a standard set of tools for static analysis and other research on the ECMAScript language.</p>
</blockquote>

<p>Damn. Now I do not only feel the strong urge to learn Scala, but also JS2 and of course ML. Seriously, if each day had 72 hours, I would not feel bored :-)</p>

<section class="comments">



<div class="comment" id="comment-1351">
On <a href="#comment-1351" title="Permalink to this comment">June  9, 2007  3:18 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>
said:
<p>72 hours in a day? Are you mad? How are you going to get anything done in so little time?</p>


<div class="comment" id="comment-1352">
On <a href="#comment-1352" title="Permalink to this comment">June  9, 2007  7:49 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>;-)</p>


</section>

