---
layout: post
title: "Pass by Reference in Web Services"
date: "2004-02-06T16:41:00+01:00"
comments: false
categories: 
---

<p><a href="http://schneider.blogspot.com">Jeff Schneider</a> <a href="http://schneider.blogspot.com/archives/2004_02_01_schneider_archive.html#107590734001379583">continues</a> his search for answers on how to do pass by reference in Web services.</p>

<p>I believe pass by reference is impossible when doing Web services.</p>

<p>Some time ago, I had a long and heated discussions with a customer and several colleagues about whether Java does pass by value or pass by reference, where we were evenly split among the views that there is only pass by value on the one hand, and only pass by reference on the other hand. (Incidentally, while looking for a normative definition, I came across <a href="http://www.javaworld.com/javaworld/javaqa/2000-05/03-qa-0526-pass.html">an article</a> that shares my point of view - Java does pass by value only. Really. Think about it.) </p>

<p>To me, pass by reference semantics only make sense in the case of programming languages - it&#8217;s a syntactical issue that you put a variable in place of a formal parameter, and the language implementation (compiled or interpreted) passes a pointer to the variable instead of the value. I believe anytime you make a copy of some data - which is unavoidable if caller and callee don&#8217;t reside in the same address space - you can&#8217;t do pass by reference.</p>

<p>Of course I concede that a Web services-based language might offer some sort of syntax to pass pointers under the covers, but that would probably be a bad idea and only lead to subtle bugs. Better to pass references - and pass them by value.</p>

<section class="comments">

<div class="comment" id="comment-207">
On <a href="#comment-207" title="Permalink to this comment">February  6, 2004  7:15 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Tobbi Bouda, one of the great engineers at Systinet, sent me some comments &#8230;</p>

<p>Hi Stefan,
a few weeks ago, I met the same question.</p>

<p>At school I&#8217;ve been learning there are formally a three ways how to pass a parameter:
1) by value, 2) by reference, 3) by text. Let&#8217;s omit the third possibility because it&#8217;s rather historical stuff. </p>

<p>The first way is the most important one - languages can&#8217;t exist without it. A good example is C which has simple values and pointers to them, but no references. </p>

<p>The second way is used as an enhancement to C. C++ using &#8216;&amp;&#8217; operation does exactly what parameter referencing is expected to do. The original <em>value</em> can be changed. Not using the reference operator causes any object passed to method in C++ to be <em>duplicated</em> via copy-constructor.</p>

<p>What&#8217;s the situation in Java? Primitive types are surely passed by value. Object types are said to be passed by reference, BUT the only user-handle to an instance is reference. Finally, the reference is passed by value.</p>

<p>I&#8217;ve searched (very shortly) Java spec. but no exact solution found. Just some indices:</p>

<ol>
<li>Method parameters (§8.4.1) name argument values passed to a method. For
every parameter declared in a method declaration, a new parameter variable is
created each time that method is invoked (§15.11). The new variable is initialized
with the corresponding argument value from the method invocation. &#8230;</li>
</ol>

<p>I.e. I think from the formal point of view, passing parameters in Java is always by value.</p>

<p>Tobbi</p>


<div class="comment" id="comment-208">
On <a href="#comment-208" title="Permalink to this comment">February  6, 2004  7:17 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Needless to say, I totally agree. In a former life, I used to be a C++ language lawyer, and having had to explain things like &#8220;const * &amp; s&#8221; a few times helps appreciating languages like Java ;-)</p>


<div class="comment" id="comment-209">
On <a href="#comment-209" title="Permalink to this comment">September  8, 2007  7:11 PM</a>, Eugenio Zimeo
said:
<p>I believe that passing by reference is possible also when different address spaces are used. Reference is not the same thing that C-like pointer. RMI and other middlewares for distributed programming support the concept of global reference as an extension of the local one (based on the pointer concept). A global reference is able to identify the position of a data in a distributed memory built atop of a distributed system of computers. RMI, for example, supports passing by reference of remote objects, since they are not copied when passed as parameters or return values. More precisely, RMI supports passing by value of global references (the same semantics of Java parameter passing for conventional objects). Sincerely, I don&#8217;t understand why Web services can not support reference passing (i.e. a syntactic extension to specify the passing of a data reference or a standard mechanism to pass by value a global reference).
Can you explain your point of view on this ?</p>


</section>

