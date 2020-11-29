---
layout: post
title: "Mac OS X Tiger and Emacs"
date: "2005-04-29T21:36:00+01:00"
comments: false
categories: 
---

<p>I used to use the Carbonized Emacs successfully with Panther; under Tiger, none of the default binaries work. Recompiling the latest version from CVS (with <code>CVSROOT=:ext:anoncvs@savannah.gnu.org:/cvsroot/emacs</code>), using the <code>make-package</code> utility in the <code>mac</code> directory, fixes the problem. </p>

<p><strike>E-mail me if you need a binary.</strike></p>

<p><em>Update:</em> By now, you can get reportedly get binaries from <a href="http://home.att.ne.jp/alpha/z123/emacs-mac-e.html">http://home.att.ne.jp/alpha/z123/emacs-mac-e.html</a> or <a href="http://macemacsjp.sourceforge.jp/package/">http://macemacsjp.sourceforge.jp/package/</a>.</p>

<section class="comments">

<div class="comment" id="comment-523">
On <a href="#comment-523" title="Permalink to this comment">May  5, 2005  6:19 AM</a>, lasse
said:
<p>Which compiler did you use? I used gcc-4.0 (i.e. the Tiger default compiler) and that generated an Emacs.app that doesn&#8217;t run.</p>


<div class="comment" id="comment-524">
On <a href="#comment-524" title="Permalink to this comment">May 19, 2005  1:50 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I used the default compiler. BTW: 10.4.1 breaks it again, so I had to recompile. I&#8217;ll try to post build instructions later today &#8230;</p>


</section>

