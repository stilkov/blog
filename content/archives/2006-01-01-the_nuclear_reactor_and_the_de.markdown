---
layout: post
title: "The Nuclear Reactor and the Deep Space Probe"
date: "2006-01-01T23:15:00+01:00"
comments: false
categories: 
---

<p>A <a href="http://www.artima.com/cppsource/deepspace.html">very interesting discussion</a> on contract programming &#8212; interesting for any language, not only C++.</p>

<section class="comments">

<div class="comment" id="comment-758">
On <a href="#comment-758" title="Permalink to this comment">January  2, 2006  6:45 AM</a>, <a href="http://creativekarma.com/" title="http://creativekarma.com/" rel="nofollow">Doug</a>
said:
<p>[sigh] It&#8217;s depressing to see people grab onto what they understand and throw away what they don&#8217;t understand, then go off and make a new religion from their partial comprehension.</p>

<p>But it&#8217;s been done so much in software development, I am not at all surprised to see it happening to Design by Contract.</p>


<div class="comment" id="comment-759">
On <a href="#comment-759" title="Permalink to this comment">January  2, 2006 10:09 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Can you elaborate &#8212; what was the partial understanding?
Apart from the ridiculous C++ syntax hoops he has to jump through, I found the article pretty good.</p>


<div class="comment" id="comment-760">
On <a href="#comment-760" title="Permalink to this comment">January  4, 2006  1:16 AM</a>, <a href="http://creativekarma.com/" title="http://creativekarma.com/" rel="nofollow">Doug</a>
said:
<p>Well, there are small to large manglings of DbC theory throughout, but the one that is impossible to overlook is the subhead in huge type, &#8220;Contract Violations are Not Exceptional Conditions&#8221; (on page 3).</p>

<p>Design by Contract specifies the exact opposite: that exceptions are PRECISELY contract violations. There are no exceptions that are not contract violations, and there are no contract violations that do not (in theory) result in exceptions.</p>


<div class="comment" id="comment-761">
On <a href="#comment-761" title="Permalink to this comment">January  4, 2006 11:23 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I can see both your point and the author&#8217;s. If you read what he wrote, he clearly knows that the default and intended way to express contract violations is to throw exceptions. It&#8217;s also true, though, that exceptions are used to express non-exceptional conditions in many current environments. (That this is not a good idea is probably true, but irrelevant). He also writes:</p>

<blockquote>
<p>In contrast to the activity of exceptions in indicating exceptional runtime conditions or as part of program logic, a contract violation represents the detection of a program state that is explicitly counter to its design. As we’ll see in The Principle Of Irrecoverability (in part 2), upon a contract violation the program is, literally, in an invalid state, and, in principle, there is no further valid action that the program may perform. </p>
</blockquote>

<p>I tend to give him the benefit of doubt until I see part 2. I don&#8217;t think he&#8217;s written anything in that article without thinking about it, though, and I&#8217;m reluctant to dismiss everything based on what may be a disagreement over a detail.</p>


<div class="comment" id="comment-762">
On <a href="#comment-762" title="Permalink to this comment">January  5, 2006  7:44 PM</a>, <a href="http://creativekarma.com/" title="http://creativekarma.com/" rel="nofollow">Doug</a>
said:
<p>But it&#8217;s not a detail. It&#8217;s like a Unified Field Theory that doesn&#8217;t include the force of gravity. Design by Contract unifies contracts, inheritance, exceptions, and exception handling into a single theoretical framework based on Hoare logic. It&#8217;s a whole heck of a lot more than a bunch of assertions.</p>

<p>If you go back to the abstract&#8230; er, summary&#8230; of the article, Wilson writes, &#8220;there remains equivocation on what to do when contracts are broken. This is Part One of a series that takes a slightly philosophical look at this important issue&#8230;&#8221;</p>

<p>DbC has no equivocation on what to do when contracts are broken. In DbC, the exception throwing and handling mechanisms are designed expressly to deal with that issue. Bertrand Meyer spends quite some time in &#8220;Object Oriented Software Engineering&#8221; discussing the various types of contract failures that can arise, the importance of discriminating between recovering from contract failure and retrying, and a number of other topics related to contract failure.</p>

<p>If Wilson had said that he felt there was something lacking in Meyer&#8217;s work (like, say, dealing with multithreading), or that he had an interesting alternative, that&#8217;d be great. But instead he simply seems to be ignorantly trying to reinvent the wheel. If he can&#8217;t be bothered to investigate DbC (there are only a few books to read), I have serious doubts that Wilson has the technical rigor to invent anything of actual value.</p>


<div class="comment" id="comment-763">
On <a href="#comment-763" title="Permalink to this comment">January  5, 2006  8:28 PM</a>, <a href="http://creativekarma.com/" title="http://creativekarma.com/" rel="nofollow">Doug</a>
said:
<p>Er, Meyer&#8217;s book is &#8220;Object Oriented Software Construction.&#8221; Those OO titles all sound the same to me :-)</p>


</section>

