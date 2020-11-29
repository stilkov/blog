---
layout: post
title: "QCon London 2007: Erik Meijer on LINQ"
date: "2007-03-14T13:08:00+01:00"
comments: false
categories: 
---

<p>Some notes from <a href="http://qcon.infoq.com/qcon/speakers/show_speaker.jsp?oid=116">Erik Meijer&#8217;s talk here at QCon</a>, probably in desperate need of some cleanup later (the notes, not the talk).</p>

<p>A nice example of a Haskell list comprehension and its connection to SQL&#8217;s select &#8230; from &#8230; where &#8230; form. Also interesting was his claim that once generics are introduced into a programming language, you start to really feel the need for type inference. Everything old, nothing new, all invented ages ago. Haskell has generics parametrized over type constructors, not only types &#8212; i.e. I can instantiate a &#8220;container&#8221; of &#8220;T&#8221; with &#8220;List&#8221; and &#8220;int&#8221;. One can do list comprehensions over monads (WTF does that mean?) </p>

<p>He went to MSFT to explore his ideas helped- Streams, tuples, unions, content classes, XML object literals, generalized member access + SQL comprehensions, going from X# tp Xen to C(omega). Only a few of C(omega)&#8217;s types survive in VB9 and C# 3.0. The idea of non-null types (preventing NPEs) is not yet in there, seems useful. Compiler plugins did not survive, either. Incoherence introduced when the programming language&#8217;s type system is not supported by the underlying runtime (example: nullable types and boxing/unboxing). LINQ is Monad comprehensions from Haskell, implemented in C# and VB. Any programming language could use LINQ (as VB and C# do). Programming language designer in him is appalled by SQL&#8217;s confusion of iterator variable with a table name. Both SQL and XQuery are data model + query syntax, tightly woven together. The same can be done for OO. LINQ = Queries over arbitrary collections of arbitrary data. There is no universal data model &#8212; none of them is good enough for all circumstances. But there are operations that make sense in all of these environments &#8212; sorting, grouping, filtering, mapping &#8230; independent of collection type, element type, function (to some degree).</p>

<p>LINQ programming language support is only syntactic sugar for LINQ&#8217;s standard operators. C# 3.0 supports type inference and lambda-expressions. In contrast to C(omega)&#8217;s earlier plugin model, LINQ is extensible for custom filters and selectors. Extension methods are used e.g. to add a &#8220;where&#8221; method to IEnumerable; remind me of Ruby&#8217;s open classes. Data and code can be passed as parameters, but in contrast to Lisp or Scheme doesn&#8217;t need to be quoted. The callee, not the caller decides whether they want to be passed an expression (the method gets passed an expression tree). (Christian Weyer, sitting next to me confirms one can programmatically add new code, even extension functions, to an existing app &#8212; this essentially gives us metaprogramming in C#). <code>new { c.Name, c.Phone }</code> as an example of an anonymous type, field name types inferred. Support for object initializers, looking similar to JSON (syntactic sugar, as Paul Fremantle points out, over something you could do with a lambda expression.)</p>

<p>A look at VB&#8217;s syntax, which actually looks nicer. Type inference again, the IDE pops up a tooltip with the full name even though it&#8217;s not been declared, code completion works (obviously), even in initializers. Strange syntax in VB (a dot in initializers, e.g. <code>New With { .x=47 }</code> only to trigger Intellisense (!). Erik shows extension methods, and how one could be added to any type &#8212; reminds me of opening <code>Object</code> in Ruby and adding some methods to it, with the difference that in Ruby you can also add attributes. On the other hand, in VB you get code completion &#8230;</p>

<p>VB support for creating XML trees, intuitive axes; but VB also supports XML literals (like E4X). <code>&lt;%= ... =&gt;</code> syntax to escape back to VB within your literals. Also fascinating syntax: <code>BillTo.&lt;street&gt;</code> or <code>PO...&lt;item&gt;</code>. (Quote: &#8220;Who needs XQuery anymore?&#8221;). </p>

<p>Some words about LINQ for SQL. Typical features of an O/R mapper included (?), support for eager and lazy loading and filtering (via a <code>Datashape</code>). </p>

<p>Overall: great talk, great guy, way too little time. Final quote:</p>

<blockquote>
<p>Programming Language Theory is relevant. <em>But</em> it requires at least 20 years of patience and ripening. </p>
</blockquote>

<p>Question from Ted Neward: How do extensions functions (and other stuff he talked about) relate to metaprogramming and AOP? Erik is no fan of AOP, doesn&#8217;t believe in the usefulness of adding something afterwards which might violate invariants of existing codes. Points to <em>partial methods</em> as an alternative. So in contrast to AOP, the writer of the original code says where someone else can &#8220;weave&#8221; his own stuff into. </p>

<p>Question regarding expression trees: The compiler will create code that at runtime creates an expression tree, which is then compiled to e.g. SQL. lambda expression only as syntactic sugar over constructing an expression tree.</p>

<p>Question regarding JSON &#8212; Erik explains what it is; earlier he mentioned that he hopes and believes JSON will make XML disappear :-)</p>

<section class="comments">

<div class="comment" id="comment-1202">
On <a href="#comment-1202" title="Permalink to this comment">March 16, 2007  8:12 PM</a>, <a href="http://oakleafblog.blogspot.com" title="http://oakleafblog.blogspot.com" rel="nofollow">Roger Jennings</a>
said:
<p>Thanks for covering Erik&#8217;s LINQ presentation. I&#8217;ll look forward to the video of it and his keynote.</p>

<p>&#8212;rj
<a href="http://oakleafblog.blogspot.com/2007/03/20-in-early-returns-from-qcon-2007.html" rel="nofollow" /><a href="http://oakleafblog.blogspot.com/2007/03/20-in-early-returns-from-qcon-2007.html" rel="nofollow">http://oakleafblog.blogspot.com/2007/03/20-in-early-returns-from-qcon-2007.html</a></p>


</section>

