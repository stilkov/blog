---
layout: post
title: "Dynamic Languages on the JVM"
date: "2007-09-12T07:52:00+01:00"
comments: false
categories: 
---

<p>JRuby lead developer <a href="http://headius.blogspot.com/2007/09/jruby-compiler-update-and-nice.html">Charles Oliver Nutter</a>:</p>

<blockquote>
<p>I believe we&#8217;re pretty well on-target to have the [JRuby-to-JVM-bytecode] compiler completed by RubyConf in November. [&#8230;] Once the JRuby compiler is complete, we will start testing in earnest against a fully pre-compiled Ruby stdlib. Along with that, we&#8217;ll wire in support for pre-compiling RubyGems as they install and pre-compiling Ruby scripts as they are executed and loaded. Much of this works already in prototype form, but it waits for the completion of the compiler to go into general use.<br /><br />I also have plans for a &#8220;static&#8221; compiler for JRuby that enable compiling Ruby classes into normal, instantiable, callable, static Java classes. This would bring us on par with other compiled languages on the JVM, and allow you to directly instantiate and invoke JRuby/Ruby objects from within your Java code.</p>
</blockquote>

<p><a href="http://blog.blainebuxton.com/2007/09/why-is-groovy-so-slow.html">Blaine Buxton</a>:</p>

<blockquote>
<p>Peter Knego wonders &#8220;Why Is Groovy So Slow?&#8221; and shows some evidence. I will admit I expected Groovy to be slower than Java because even though it does compile to Java byte codes. It has to perform various translations to satisfy the VM that expects a lot to be already typed. The Java VM is an ugly world for dynamic languages because of the early bind nature to gain performance. Some of his numbers were shocking. He also mentioned he was going to run numbers on jRuby as well. I&#8217;ll be curious about that too. I&#8217;m expecting the numbers to tell a similar story. [&#8230;] The numbers are not bad because dynamic languages are slow, but because trying to get them run on an architecture not built with them in mind.</p>
</blockquote>


