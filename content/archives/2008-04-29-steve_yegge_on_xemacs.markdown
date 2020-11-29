---
layout: post
title: "Steve Yegge on XEmacs"
date: "2008-04-29T19:17:00+01:00"
comments: false
categories: 
---

<p>Smart stuff from <a href="http://steve-yegge.blogspot.com/2008/04/xemacs-is-dead-long-live-xemacs.html">Steve Yegge</a>:</p>

<blockquote>
<p>Eclipse and similar environments want to be self-hosting, but they're not, because Java is not self-hosting. In spite of Java's smattering of dynamic facilities, Java remains as fundamentally incapable of self-hosting as C++. Self-hosting only works if the code can "fold" on itself and become more powerful while making itself smaller and cleaner. I'm not really talking about macros here, even though that's probably the first thing you thought of. I'm thinking more along the lines of implementing JITs and supercompilers in the hosted runtime, rather than in the C++ or Java "hardware" substrate, which is where everyone puts them today.<br /><br />I suspect (without proof) that in self-hosted environments, you can eventually cross a threshold where your performance gains from features implemented in the hosted environment outpace the gains from features in the substrate, because of this self-reinforcing effect: if code can make <em>itself</em> faster and smarter, then it will be faster and smarter at making itself faster and smarter. In C++ and Java, making this jump to the self-reinforcing level is essentially intractable because, ironically, they have so many features (or feature omissions) for the sake of performance that they get in their own way.<br /><br />To be sure, Emacs, the current crop of popular scripting languages, and other modestly self-hosting environments are all pretty far from achieving self-reinforcing performance. But Emacs has achieved it for productivity – at least, for the relatively small percentage of Emacs users who learn enough elisp to take advantage of it. There are just enough of us doing it to generate a steady supply of new elisp hackers, and the general-purpose artifacts we produce are usually enough to keep the current crop of casual users happy.</p>
</blockquote>

<p>(Personally, I've abandoned the Emacs religion and switched to TextMate. But I'm among the casual users who will be happy that they can switch back the day I can no longer use a Mac ...)</p>

<section class="comments">



<div class="comment" id="comment-1701">
On <a href="#comment-1701" title="Permalink to this comment">April 30, 2008  8:53 PM</a>, <a href="http://patricklogan.blogspot.com" title="http://patricklogan.blogspot.com" rel="nofollow">Patrick Logan</a>
said:
<p>I continue to use emacs almost exclusively, going back more than 25 years on various systems. I&#8217;ll likely continue to do so for many more years.</p>

<p>That said, I think emacs&#8217; future is better as a philosophy than a concrete implementation.</p>

<p><a href="http://www.finseth.com/craft/" rel="nofollow">http://www.finseth.com/craft/</a> lays it all out. The ideas can and should be incorporated into nearly all interactive software.</p>


<div class="comment" id="comment-1703">
On <a href="#comment-1703" title="Permalink to this comment">May  2, 2008  4:19 PM</a>, <a href="http://jastram.de/blog" title="http://jastram.de/blog" rel="nofollow">Michael Jastram</a>
said:
<p>This reminds me of PyPy, a Python implementation in Python: <a href="http://codespeak.net/pypy/dist/pypy/doc/home.html" rel="nofollow">http://codespeak.net/pypy/dist/pypy/doc/home.html</a></p>


</section>

