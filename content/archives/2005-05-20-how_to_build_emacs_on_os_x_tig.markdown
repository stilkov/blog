---
layout: post
title: "How to Build Emacs on OS X Tiger and Above"
date: "2005-05-20T20:38:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.sidhe.org/~dan/blog/">Dan Sugalski</a> explains why Emacs on OS X breaks so easily after an OS update:</p>

<blockquote>
<p>Part of the build process actually core-dumps a running emacs and then fixes up the core file to be an executable, which is clever but somewhat fragile on some OSes, including OS X.</p>
</blockquote>

<p>It may cause breakage, but it&#8217;s definitely totally cool :-)</p>

<p>Here&#8217;s the world&#8217;s shortest tutorial on how to build Emacs on OS X yourself:</p>

<ul>
<li>Open Terminal.app</li>
<li><code>cd</code> to some directory where you want the <code>emacs</code> dir for the source created; <code>~/Desktop</code> will do</li>
<li><p>Checkout and build:</p>

<p><code>cvs -d :ext:anoncvs@savannah.gnu.org:/cvsroot/emacs -z9 co emacs</code></p>

<p><code>cd mac</code></p>

<p><code>./make-package --self-contained --build-in-place</code></p></li>
</ul>

<p>This will do the <code>make</code> and <code>configure</code> game and finally create a disk image called EmacsInstaller.dmg in your <code>mac</code> directory. The <code>--self-contained</code> option tells the make script to put everything in the application package itself.</p>

<section class="comments">

<div class="comment" id="comment-545">
On <a href="#comment-545" title="Permalink to this comment">August 30, 2005  5:59 PM</a>, <a href="http://www.bolten.de/matthias/" title="http://www.bolten.de/matthias/" rel="nofollow">Matthias Bolten</a>
said:
<p>Thaks a lot to point out that building Emacs from CVS is that simple! One addition: If you haven&#8217;t set up CVS to use ssh (for example because you are only using it locally or because of using subversion) you have to set the environment variable CVS_RSH to ssh (using bash: export CVS_RSH=ssh).</p>


<div class="comment" id="comment-546">
On <a href="#comment-546" title="Permalink to this comment">August 30, 2005  8:34 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks Matthias, I missed that one because I have it set for other purposes anyway.</p>


<div class="comment" id="comment-547">
On <a href="#comment-547" title="Permalink to this comment">January 21, 2006 10:25 AM</a>, Mulleteer
said:
<p>The checkout doesn&#8217;t work anymore, see following link for updated procedure.</p>

<p><a href="http://savannah.gnu.org/forum/forum.php?forum_id=4168" rel="nofollow" /><a href="http://savannah.gnu.org/forum/forum.php?forum_id=4168" rel="nofollow">http://savannah.gnu.org/forum/forum.php?forum_id=4168</a></p>


</section>

