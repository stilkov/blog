---
layout: post
title: "XML Performance"
date: "2008-12-14T09:07:00+01:00"
comments: false
categories: 
---

<p><a href="http://sites.computer.org/debull/A08dec/saxonica.pdf">An excellent paper</a> (PDF? Why?) by <a href="http://saxonica.blogharbor.com/blog/_archives/2008/12/13/4019383.html">Michael Kay</a> about the performance of his Saxon XQuery processor [via <a href="http://blog.jclark.com/2008/12/saxon-performance.html">James Clark</a>]. Favorite excerpt:</p>

<blockquote>
<ul>
<li>Investigate every user-supplied performance problem in depth. There is no better raw material for under-
standing how the code behaves, and without such understanding there can be no improvement. </li>
<li>Optimize the code that typical users write, whether it is well-written code or not. Try to educate users
on how to write code that works well on your product, but recognize that you will only reach a small
minority.</li>
<li>Never make performance improvements to the code without measuring the impact. If you cannot measure
a positive impact, revert the change (easily said, but psychologically very difﬁcult when you’ve put a lot
of effort in). Keep records of what you learnt in the process. </li>
<li>Avoid performance improvements that rely on user-controlled switches. Most users (including people who
publish comparative benchmarks) will never discover the switch exists; of the remainder, a good number
will set the switch sub-optimally. </li>
<li>Remember that every optimization you make to your code is likely to require a substantial investment in
new test material, and even then, is likely to result in several new bugs escaping into the ﬁeld. Do not do
it unless the gain is worth it. </li>
<li>Maintain a set of performance regression tests to ensure that performance gains made in one release are
not lost in the next. </li>
<li>Separately, maintain tests to show that query optimizations are taking place as intended. In Saxon this
is done by outputting an XML representation of the query execution plan for test queries, and checking
assertions about these plans expressed as auxiliary queries. </li>
</ul></blockquote>


