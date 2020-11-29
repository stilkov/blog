---
layout: post
title: "Web Services and Complex Data"
date: "2004-06-02T11:47:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.neward.net/ted/weblog/index.jsp?date=20040601#1086154951687">Ted Neward</a> writes about how to design your service interfaces:</p>

<blockquote>
<p>&#8220;But what about objects? Surely you&#8217;re not suggesting we give up our well-designed, well-refactored object model?&#8221;</p>

<p>As a matter of fact, I am. Exactly that&#8212;your well-designed object model shouldn&#8217;t be seen outside of your service. If you pass objects around, instead of messages, you run the risk of tightly-coupling the consumer of the service to the service itself, and when the service needs to rev, the consumers all need to rev as well. Loosely-coupled components are the order of the day in an S-O environment.</p>
</blockquote>

<p>I think what you need to do in a Service-oriented world is to explicitly design your interface layer, including the messages exchanged at the boundaries, instead of adding it as an afterthought, so this fits my view very nicely.</p>


