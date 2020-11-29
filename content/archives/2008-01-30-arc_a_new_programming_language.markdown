---
layout: post
title: "Arc: a New Programming Language"
date: "2008-01-30T19:50:00+01:00"
comments: false
categories: 
---

<p>So the big news today, at least for some small community of the initiated, is <a href="http://www.paulgraham.com/arc0.html">the release of a first version</a> of <a href="http://arclanguage.org/">Arc</a>, Paul Graham&#8217;s LISP dialect that many people waited for. I&#8217;ve seen some mixed reactions:</p>

<p><a href="http://antoniocangiano.com/2008/01/30/railsconf-arc-apple-and-other-zenbits/">Antonio Cangiano writes</a>:</p>

<blockquote>
<p>[R]ight now it’s not really convincing as an alternative to CL or Scheme itself. Don’t construe this as a harsh criticism towards Arc, it is not. We are talking about a language that it’s in its infancy and that as I said, I plan to experiment with myself. I hope to see it grow rapidly and I congratulate Graham and his team for finally making it available. That said, right now I think it’s a weak release and therefore, in my opinion, the disappointment of many is justified. In any case, good luck Paul, we’ll watch this one closely.</p>
</blockquote>

<p>The most disturbing critique &#8212; regarding Graham&#8217;s decision to not implement Unicode &#8212; comes from <a href="http://plasmasturm.org/log/491/">Aristotle Pagaltzis</a>:</p>

<blockquote>
<p>Getting character strings right, however, is something that you really do need to get right at the core language level. You cannot leave it for libraries to fix.</p>
</blockquote>

<p>After a quick glance at the <a href="http://ycombinator.com/arc/tut.txt">tutorial</a>, the most intriguing bit seems to be the support for macros, which work (almost) like function definitions. Interesting, but nothing that gets me overly excited.</p>

<p><a href="http://seanmcgrath.blogspot.com/2008/01/arc-pulls-no-punches.html">Sean McGrath</a> thinks one needs to keep an eye on it. I agree.</p>

<section class="comments">



<div class="comment" id="comment-1599">
On <a href="#comment-1599" title="Permalink to this comment">January 30, 2008  8:25 PM</a>, <a href="http://patricklogan.blogspot.com" title="http://patricklogan.blogspot.com" rel="nofollow">Patrick Logan</a>
said:
<p>The Arc macro system looks to be the same as the simplest macros in Common Lisp and in several Scheme implementations. As Graham wrote: good choice, to avoid the &#8220;hygenic&#8221;, er, crap.</p>


<div class="comment" id="comment-1600">
On <a href="#comment-1600" title="Permalink to this comment">January 30, 2008  8:33 PM</a>, Stefan Tilkov

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Could you elaborate a little? I always thought hygienic macros were a good idea?</p>


<div class="comment" id="comment-1601">
On <a href="#comment-1601" title="Permalink to this comment">February  2, 2008 10:41 PM</a>, Burkhard
said:
<p>Hello Stefan,</p>

<p>I don&#8217;t think that a hygenic macro system is a bad choice as default mode for
a macro system. It does not allow some tricks you can do with unhygenic macros (see below for an
example) but the safety is worth the restrictions. And (at least with scheme you can have both), see e.g
R. Kent Dybvig nice stuff at <a href="http://www.cs.indiana.edu/~dyb/pubs/tr356.pdf" rel="nofollow">http://www.cs.indiana.edu/~dyb/pubs/tr356.pdf</a> . </p>

<pre>
(define-syntax silly-dsl
(lambda (x)
(syntax-case x ()
((_ expr ...)
;; This shows how unhygiene can be introduced in a controlled manner
;; with syntax-case's datum->syntax-object.
;; In this case occurences of the identifier ">>" in the
;; input form are replaced by the local definition of >> as a procedure at (*)
(with-syntax ((>> (datum->syntax-object (syntax _) '>>)))
(syntax
(lambda ()
(let ((>> (lambda args
(for-each (lambda (_) (display _) (display "; "))
args)
args))) ;; (*)
expr ...))))))))

(define fn (silly-dsl (apply + (>> 1 2 3))))
</pre>


<div class="comment" id="comment-1603">
On <a href="#comment-1603" title="Permalink to this comment">February  3, 2008  8:49 PM</a>, <a href="http://patricklogan.blogspot.com" title="http://patricklogan.blogspot.com" rel="nofollow">Patrick Logan</a>
said:
<p>Sure, I think it is reasonable to have both. I prefer the simpler &#8220;non-hygenic&#8221; macros, but I have written macros using both in Scheme. I have written macros in both in Scheme.</p>

<p>I &#8220;grew up&#8221; with the simpler macros and frankly never thought the concepts were difficult to grasp and encode in the simpler form. I still find the simpler macros easier to read and write, but I have used them a good bit more.</p>

<p>For Graham, et al. trying to get a new language out there, the simpler form is probably the better choice &#8212; much easier for them to implement. It takes less than a day to write an implementation of &#8220;defmacro&#8221;, and I&#8217;ve done that. (Unfortunately called &#8220;mac&#8221; in arc, but oh well.)</p>

<p>On the other hand implementing a hygenic macro system, which I have never done and would not dare do, took years to evolve and the brightest scheme programmers to figure out how to implement and use. The arc guys chose the simpler form and could then spend the rest of their time on more important things.</p>


</section>

