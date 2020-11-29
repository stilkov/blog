---
layout: post
title: "Company Weblogs"
date: "2005-02-06T22:16:00+01:00"
comments: false
categories: 
---

<p>While looking for a decent solution to set up as the infrastructure for our internal blogs &#8212; something we&#8217;re considering as a means to increase communication between our consultants, which is already pretty great, even more &#8212; I once again stumbled across, and reconsidered, <a href="http://www.blosxom.com/">blosxom</a>. The great thing about this weblogging package is that it&#8217;s written in 444 lines of Perl and owes much of its simplicity to its reliance on the good old file system for storage. Paired with <a href="http://subversion.tigris.org/">Subversion</a>, a simple <a href="http://svnbook.red-bean.com/en/1.1/ch05s02.html#svn-ch-5-sect-2.1">post-commit hook</a>, the obligatory <a href="http://daringfireball.net/projects/markdown/">Markdown</a> and <a href="http://daringfireball.net/projects/smartypants/">SmartyPants</a> plug-ins, and a simple 40 line integration plug-in that took me about 2 hours to figure out, we can now maintain our internal weblogs with offline support and versioning. </p>

<p>Sometimes the simple stuff just rocks.</p>

<section class="comments">

<div class="comment" id="comment-446">
On <a href="#comment-446" title="Permalink to this comment">February  9, 2005 12:41 AM</a>, <a href="http://neuromancer.dif.um.es/blog" title="http://neuromancer.dif.um.es/blog" rel="nofollow">diego sevilla</a>
said:
<p>Stefan, nice post! In fact it&#8217;s so good that I&#8217;m going to change my own weblog to use blosxom. My biggest complaint with wordpress, that I currently use, is that it uses a data base for things that&#8217;s not needed. Using the plain file system is so nice (to use it with subversion as you point out) that definitely I&#8217;m going to use blosxom.</p>

<p>Keep the nice work!
diego</p>


<div class="comment" id="comment-447">
On <a href="#comment-447" title="Permalink to this comment">February  9, 2005  7:29 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hi Diego, at least if something goes wrong you&#8217;ll have someone to blame :-)</p>


</section>

