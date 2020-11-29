---
layout: post
title: "Philosophical Web Services Thoughts"
date: "2005-02-11T21:52:00+01:00"
comments: false
categories: 
---

<p>A <a href="http://hyperthink.net/blog/CommentView,guid,46c804f0-1384-4752-9519-182d407f9253.aspx">truly excellent post</a> from Steve Maine. I agree to a large degree; the local programming model used on either side of a Web services communication is (or at least should be) totally irrelevant to the wire messages and the contract. Still, I believe there is one noticeable difference, and that is essentially the one (if not only) benefit of using a message-oriented instead of a distributed objects-like programming paradigm: the provider&#8217;s and consumer&#8217;s dependency on the contract.</p>

<p>Being able to use a mapping of the contract to the programming language&#8217;s type system requires the presence of stubs and/or skeletons; these are usually generated based on the contract. Doing this introduces a technical dependency to the exact version of the contract &#8212; the runtime will simply fail to instantiate the appropriate objects if e.g. some attributes change, <em>even if the business logic doesn&#8217;t use them at all</em>. </p>

<p>Of course one might envision a method by which only some part of the contract/schema are mapped to programming language proxies, e.g. by instrumenting code generation with some XPath expressions that define what the dependencies are. In fact, this could be nicely combined with approaches such as that of <a href="http://www.schematron.com/">Schematron</a>. This a pure speculation, though; I have not tried nor even played with this idea. </p>

<p>I agree, though, that while there are definitely benefits to taking the XML approach, working on a DOM or SAX level plainly sucks. That is why I believe that we&#8217;ll see a shift to other programming languages and approaches (more dynamic, XML-aware etc.)</p>


