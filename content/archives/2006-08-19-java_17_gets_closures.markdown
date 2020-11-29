---
layout: post
title: "Java 1.7 Gets Closures?"
date: "2006-08-19T11:46:00+01:00"
comments: false
categories: 
---

<p>Closures in Java! Here&#8217;s the proposal (<a href="http://blogs.sun.com/roller/resources/ahe/closures.pdf">PDF</a>, authored by Gilad Bracha, Neal Gafter, James Gosling, Peter von der Ahe&#769;. Neal Gafter has an abbreviated <a href="http://gafter.blogspot.com/2006/08/closures-for-java.html">HTML version</a>), including some comments.</p>

<p>Local functions, as first class objects:</p>

<pre><code>    public static void main(String[] args) {
int plus2(int x) { return x+2; }
int(int) plus2b = plus2;
System.out.println(plus2b(2));
}
</code></pre>

<p>Rewritten using a closure:</p>

<pre><code>     int(int) plus2b = (int x) {return x+2; };
</code></pre>

<p>One highlight:</p>

<blockquote>
<p>Names that are in scope where a function or closure is defined may be referenced within the closure. We do
not propose a rule that requires referenced variables be final, as is currently required for anonymous class
instances. The constraint on anonymous class instances is also relaxed to allow them to reference any local
variable in scope.</p>
</blockquote>

<p>Very cool &#8212; too sad it&#8217;ll take years until it&#8217;s available, and even longer for it to become widespread enough to be used in practice.</p>

<p><em>Update</em>: More about this from <a href="http://blogs.sun.com/roller/page/gbracha?entry=achieving_closure">Gilad Bracha</a>, <a href="http://blogs.sun.com/roller/page/ahe?entry=full_disclosure">Peter von der Ah&#233;</a>.</p>

<p><em>Another update</em>: Excellent discussion at <a href="http://lambda-the-ultimate.org/node/1684">Lambda the Ultimate</a>.</p>


