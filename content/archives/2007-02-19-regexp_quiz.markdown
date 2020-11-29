---
layout: post
title: "Regexp Quiz"
date: "2007-02-19T16:33:00+01:00"
comments: false
categories: 
---

<p>Quick, what&#8217;s this:</p>

<p><code>^[-!#$%&amp;mp;'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&amp;mp;'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$</code></p>

<p>Reply in the comments if you know what this regexp matches. Bonus point if you catch an omission.</p>

<section class="comments">

<div class="comment" id="comment-1188">
On <a href="#comment-1188" title="Permalink to this comment">February 19, 2007  5:39 PM</a>, <a href="http://www.bofh.org.uk/" title="http://www.bofh.org.uk/" rel="nofollow">Piers Cawley</a>
said:
<p>It looks, at first glance, like a simple minded email address matcher. A fully compliant RFC822 format matcher runs to something like a page in length.</p>

<p>Even if it isn&#8217;t, I have the feeling you should be backwhacking your &#8216;.&#8217;s, and I doubt you really want &amp;amp; in your character ranges.</p>


<div class="comment" id="comment-1189">
On <a href="#comment-1189" title="Permalink to this comment">February 21, 2007  4:09 AM</a>, <a href="http://jtauber.com/" title="http://jtauber.com/" rel="nofollow">James Tauber</a>
said:
<p>At first I thought email address too but the portion before the @ seems too permissive and the portion after the @ too restrictive. The portion after the @ might follow RFC1035, but it would exclude things like 37signals.com as domain names.</p>


<div class="comment" id="comment-1190">
On <a href="#comment-1190" title="Permalink to this comment">February 21, 2007  7:49 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>It is, in fact a simple-minded email regexp &#8212; I just found it funny that even at this length, it&#8217;s only a tiny portion of the real one:</p>

<p><a href="http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html" rel="nofollow" /><a href="http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html" rel="nofollow">http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html</a></p>


</section>

