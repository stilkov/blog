---
layout: post
title: "Ruby from Source vs. apt-get "
date: "2008-12-11T08:02:00+01:00"
comments: false
categories: 
---

<p><a href="http://antoniocangiano.com/2008/12/10/reflections-on-the-ruby-shootout/">Antonio Cangiano</a> has updated his <a href="http://antoniocangiano.com/2008/12/09/the-great-ruby-shootout-december-2008/">Great Ruby Shootout</a> because of an interesting finding (<em>emphasis mine</em>):</p>

<blockquote>
<p>The really big, flashing warning though is what happens when you install Ruby through apt-get. <em>Compiling from source gives you double the speed, according to these tests</em>. I expected a 10/20% increase, not 100%. The gist of it is that prepackaged Ruby is compiled using the option –enable-pthreads and there is the whole issue of shared vs static libraries. But whatever the reason, this is a significant difference. For production use, in light of these results, I feel that it would be foolish to use the slower version of Ruby provided by apt-get/aptitude.</p>
</blockquote>

<section class="comments">



<div class="comment" id="comment-1889">
On <a href="#comment-1889" title="Permalink to this comment">December 11, 2008 12:35 PM</a>, <a href="http://tumbolia.org/nslater" title="http://tumbolia.org/nslater" rel="nofollow">Noah Slater</a>
said:
<p>I hope an appropriate Debian bug has been filed.</p>


</section>

