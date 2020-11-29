---
layout: post
title: "A Mac OS X Revision Control Tool that Works with Keynote?"
date: "2007-12-30T20:02:00+01:00"
comments: false
categories: 
---

<p>The title says it all: I&#8217;m still trying to find a Mac OS X-compatible version control tool that can handle the file format of e.g. Keynote and other Mac apps (such as Pages, OmniGraffle, etc.). What these have in common is that they don&#8217;t store their content as files, but as directories (packages, in Mac OS X speak). They appear as single documents in the Mac finder, but they are directories &#8212; and they get overwritten each time you do a File->Save (which means all those nice little .svn subdirectories are lost).</p>

<p>It seems that CVS, Subversion, and Mercurial all use this file-based approach. Any pointer to alternatives would be greatly appreciated &#8230; </p>

<section class="comments">



<div class="comment" id="comment-1553">
On <a href="#comment-1553" title="Permalink to this comment">December 30, 2007  9:47 PM</a>, Steven Parkes
said:
<p>Mercurial uses a .hg directory, but only in the root. So if you create a mercurial repository (directory), you can then store directories underneath it and it won&#8217;t matter that the entire directory gets rewritten every time. Same is true for bzr.</p>


<div class="comment" id="comment-1554">
On <a href="#comment-1554" title="Permalink to this comment">December 30, 2007 10:36 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Excellent - thanks! I&#8217;ll try Mercurial, then.</p>


<div class="comment" id="comment-1555">
On <a href="#comment-1555" title="Permalink to this comment">December 31, 2007  1:10 AM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>

<a href="http://plasmasturm.org/" class="commenter-profile"></a>
said:
<p>Git works the same way.</p>


<div class="comment" id="comment-1559">
On <a href="#comment-1559" title="Permalink to this comment">January  2, 2008  9:56 PM</a>, <a href="http://somethingsimilar.com" title="http://somethingsimilar.com" rel="nofollow">Jeff Hodges</a>
said:
<p>Bazaar (which just went 1.0) also uses a .bzr in the root directory.</p>


</section>

