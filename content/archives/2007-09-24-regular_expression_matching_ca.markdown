---
layout: post
title: "Regular Expression Matching Can Be Simple And Fast (but is slow in Java, Perl, PHP, Python, Ruby, ...)"
date: "2007-09-24T23:29:00+01:00"
comments: false
categories: 
---

<p><a href="http://swtch.com/~rsc/regexp/regexp1.html">Very interesting article</a> about the relative speed of regexp implementations in popular libraries as opposed to those in grep and awk:</p>

<blockquote>
<p>Regular expression matching can be simple and fast, using finite automata-based techniques that have been known for decades. In contrast, Perl, PCRE, Python, Ruby, Java, and many other languages have regular expression implementations based on recursive backtracking that are simple but can be excruciatingly slow. With the exception of backreferences, the features provided by the slow backtracking implementations can be provided by the automata-based implementations at dramatically faster, more consistent speeds.</p>
</blockquote>

<p>[via <a href="http://patricklogan.blogspot.com/2007/09/regular-expression-matching-can-be.html">Patrick Logan</a>]</p>


