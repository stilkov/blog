---
layout: post
title: "More on the DataSet issue"
date: "2004-06-09T12:31:00+01:00"
comments: false
categories: 
---

<p>The <a href="/blog/st/2004/06/web_services_purchase_orders_data_sets_and_tools_that_suck.html">monster thread</a> continues. <a href="http://www.neward.net/ted/weblog/index.jsp?date=20040609#1086764968404">Ted writes</a>:</p>

<blockquote>
<p>But the problem is that semi-structured and unknown data is going to be hard to consume in any meaningful format&#8212;otherwise why have Schema at all? I need to know what I&#8217;m receiving, or else I have to infer the types on the fly, and that means I&#8217;m back to writing the same damn parser code that I had to write when consuming flat-files. I REFUSE to go back to that, theories about SOA and Web services be damned.</p>
</blockquote>

<p>I think what Ted is missing is that you don&#8217;t necessarily need to understand <em>everything</em> in a message, just the parts you are interested in. I believe there&#8217;s a lot of cases - in fact, the interesting ones - where you will be interacting with the message on a message level, e.g. extract a few items, add some, forward everything to somebody else, store it or whatever. This kind of interaction shouldn&#8217;t be burdended with the runtime overhead and the tight coupling introduced by XML Schema-driven XML-to-objects (de)serialization. Sometimes this does, of course, make a lot of sense, but I believe the argument is similar to the one about whether SQL-level or object-relational mapping APIs are better: There is no single answer, just different scenarios and trade-offs.</p>


