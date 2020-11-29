---
layout: post
title: "Java and Web Services are not a match made in heaven"
date: "2003-09-11T21:53:00+01:00"
comments: false
categories: 
---

<p>The more I think about this, and read about it, e.g. <a href="http://www.sauria.com/blog/2003/09/07#566" title="Ted Leung on the air">here</a>, or <a href="http://www.dehora.net/journal/archives/000300.html">here</a>, or think about it in <a href="/blog/st/archives/000277.html">this context</a>, the more firmly I believe that Java, or any strongly typed programming language, is <strong>not</strong> a good vehicle for building document-oriented Web services. If you contrast the standard Java APIs for SOAP (yes, I know Web services and SOAP are not equal, but anyway), it's obvious that JAXM, while a lot more flexible than JAX-RPC, is also extremely tedious to program. If you compare this to e.g. <a href="http://www.aaronsw.com/2002/xmltramp/">Aaron Swartz's xmltramp</a>, <a href="http://www.intertwingly.net/blog/1580.html">Sam Ruby's lazydom</a> (both for Python), or <a href="http://www.douglasp.com/2003/05/12.html">Doug Purdy's Smalltalk solution</a>, they combine the usability and elegance of accessing elements directly with the dynamics of not tightly coupling your code to a specific version of a document format.</p>
<p>My prediction is that either Java will somehow enable this, or be to Web services what C is to OO.</p>

