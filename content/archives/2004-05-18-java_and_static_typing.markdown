---
layout: post
title: "Java and Static Typing"
date: "2004-05-18T10:07:00+01:00"
comments: false
categories: 
---

<p><a href="http://fishbowl.pastiche.org">Charles Miller</a> thinks <a href="http://fishbowl.pastiche.org/2004/05/18/type_inference_and_java">Java&#8217;s implementation of static typing is stupid</a>. I&#8217;m not sure I agree; while I like languages with dynamic typing/type inference, I&#8217;m not at all sure loosening up the restrictions in a statically typed language will lead to a clean design.</p>

<section class="comments">

<div class="comment" id="comment-290">
On <a href="#comment-290" title="Permalink to this comment">May 18, 2004 10:17 AM</a>, <a href="http://fishbowl.pastiche.org/" title="http://fishbowl.pastiche.org/" rel="nofollow">Charles Miller</a>
said:
<p>Dynamic typing != type inference. Dynamic typing means that the compiler performs no type checking whatsoever: everything is deferred to runtime. Type inference means that the compiler infers the type of all objects from context, and enforces type-safety based on that inference.</p>

<p>Read the &#8220;static typing in Perl&#8221; slides I linked to from the bottom of the article, they&#8217;re a good example of the difference, showing how type inference can be applied to a dynamic language as well.</p>

<p>The beauty of type inference is that there&#8217;s no loosening up. Everything still ends up being associated with a type at compile-time, and the compiler still enforces all the restrictions of static typing. The only difference is that the types are implied rather than express.</p>


<div class="comment" id="comment-291">
On <a href="#comment-291" title="Permalink to this comment">May 18, 2004 10:44 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I could worm my way out of this by saying that I didn&#8217;t claim that the two are equivalent, just that I like both; but you are right that I didn&#8217;t really think about the distinction when I wrote the statement above. </p>

<p>Maybe &#8216;loosening up&#8217; is the wrong term. Java, as it is, follows C&#8217;s (or rather C++&#8217;s) tradition, which mentions and requires types everywhere and very explicitly. To change Java to infer types from variables&#8217; usage would break that tradition and create sort of a half-step towards a more dynamic (although not dynamically typed) language.</p>


<div class="comment" id="comment-292">
On <a href="#comment-292" title="Permalink to this comment">May 18, 2004 12:15 PM</a>, Adrian Howard
said:
<p>But is it a useful tradition? </p>

<p>Do the explicit declarations actually help code comprehension - or are they just noise that gets in the way?</p>


<div class="comment" id="comment-293">
On <a href="#comment-293" title="Permalink to this comment">May 18, 2004  4:28 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>To a large degree, that is probably a matter of taste; to really answer these questions, one would have to compare a version with and without the extra type info.</p>


</section>

