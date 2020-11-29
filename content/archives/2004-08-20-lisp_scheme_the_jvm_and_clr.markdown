---
layout: post
title: "Lisp, Scheme, the JVM and CLR"
date: "2004-08-20T20:20:00+01:00"
comments: false
categories: 
---

<p>Given my <a href="/blog/st/2004/08/18/vacation_reading.html">recently renewed interest</a> in Lisp and its cousins, I of course can&#8217;t help to wonder how they might actually become used as widely as I believe they should be. While not having used either Lisp or Scheme in any real project yet, I agree with the often-made claim that essentially everything one ever wanted to have in a programming language is in there, and many of the concepts introduced in recent iterations of Java and C#, or Python, Ruby, and of course Groovy, are basically just a sign of those languages&#8217; playing catch-up with what&#8217;s been there since 1958.</p>

<p>So why doesn&#8217;t everybody use Lisp or Scheme? Some people <a href="http://c2.com/cgi/wiki?WhyWeHateLisp">hate</a> the syntax (although it would probably be more correct to say that they hate the lack of one, since Lisp dialects basically directly show the AST), but I don&#8217;t think that&#8217;s the reason. Some claim it&#8217;s the <a href="http://c2.com/cgi/wiki?SocialProblemsOfLisp">attitude</a> of the Lisp community&#8217;s members, and they may be partly right. What I believe, though, is that the ultimate test for a language is not its elegance, or even its core feature set. (If you actually know what <em>lexical scope</em>, <em>closure</em> or <em>continuation</em> means, take a few seconds to remember that you are not part of the majority. Thank you). </p>

<p>What basically determines whether a language is useful is whether it can be used to solve real world problems efficiently. And this, in turn, depends very much on the libraries available &#8212; and the only chance for any language to compete with Java or C# is if it&#8217;s based on the JVM/CLR. CommonLisp, criticized by Scheme aficionados as bloated, only contains a fraction of the functionality of the J2SE or .NET libraries (not even including the plethora of open source stuff, especially in the J2SE case). Perl has managed to attract enough of a community to come up with the extremely extensive <a href="http://www.cpan.org/">CPAN</a>, but I believe it&#8217;s probably the last language to have managed that.</p>

<p>What could attract people to Lisp, or Scheme (the latter probably being a better choice), would be something like <a href="http://jscheme.sourceforge.net/jscheme/mainwebpage.html">JScheme</a> or <a href="http://www.gnu.org/software/kawa/">Kawa</a>, if done right. I don&#8217;t know whether my view is flawed, or these implementations, but I&#8217;ll comment on that once I know more about them.</p>

<section class="comments">

<div class="comment" id="comment-344">
On <a href="#comment-344" title="Permalink to this comment">August 23, 2004  2:30 PM</a>, <a href="http://verbat.blogspot.com" title="http://verbat.blogspot.com" rel="nofollow">verbat</a>
said:
<p>what can bring people to Scheme is python, then ruby. </p>

<p>Starting using python you start to get the idea of function handling and (kinda) lambdas. With ruby you start (ab)using the real power of a lambda, and making hard tricks with callcc. Then you have opened  your mind enough for Scheme. </p>

<p>But to be fair, I can think of many things that many lisp dialect lack. </p>

<p>Furthermore, sexp based syntax should not be used. I hope when graham&#8217;s arc come out it will have a nifty sintax (mccarthy himself wanted a syntax for lisp, over his sexp-based metasyntax)</p>


<div class="comment" id="comment-345">
On <a href="#comment-345" title="Permalink to this comment">August 23, 2004  4:59 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>It&#8217;s probably good advice to go with Python, and maybe Ruby, for practical reasons &#8212; especially Python is gaining so much momentum that one might be able to avoid being accused of ivory tower behavior.</p>

<p>AFAIK, unfortunately both Python (pretty sure here) and Ruby (not so sure) lack a macro facility. And strangely enough, I <em>like</em> the non-syntax of Lisp dialects; I know many people hate it, but I believe it&#8217;s extraordinarily clean.</p>


<div class="comment" id="comment-346">
On <a href="#comment-346" title="Permalink to this comment">October 19, 2004 10:04 AM</a>, <a href="http://faceofthepage.org" title="http://faceofthepage.org" rel="nofollow">Jeremy Hughes</a>
said:
<p>It is lisp&#8217;s minimal syntax which enables its excellent extensibility. In other languages any new construct uses a different syntax to differentiate it, and also because there is no neat clean way to describe it using any of the current syntax. Sexps are brilliant in that almost any programming construct can be described in a simple clean way.</p>


</section>

