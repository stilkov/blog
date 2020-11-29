---
layout: post
title: "Information Hiding in Web Services"
date: "2003-12-15T20:27:00+01:00"
comments: false
categories: 
---

<p><a href="http://radovanjanecek.net/blog/">Radovan</a> has written an interesting <a href="http://radovanjanecek.net/blog/archives/000032.html" title="Radovan Janecek: Nothing Impersonal: Flying Data and Business Process">piece entitled Flying Data and Business Process</a>, which reminded me of some thoughts I had a while ago.</p>

<p>If you look at some of the stuff written about Web services, or XML in general, you might get the feeling that there is a huge conflict between different views on how to architect systems &#8220;the right way&#8221;. I don&#8217;t believe that this is necessarily the case; I&#8217;ll try to elaborate a bit.</p>

<p>If you follow accepted design patterns in an object-oriented approach, you are likely to hide a lot of detail between interfaces. Objects are responsible for doing something; what private data they use remains hidden to the outside user.</p>

<p>A component-based approach enhances this idea by creating components as larger entities (in the broadest sense of the term) that hide a lot of both operations and data behind a few, coarse-grained methods. It&#8217;s a pretty well-accepted fact that this coarse-grained aspect is a critical factor for achieving useful component abstractions; this is enhanced enormously once you are talking about components that can be invoked remotely, as the cost of operation invocation becomes ridiculously high.</p>

<p>What, then, is a service? Does it have the same granularity as a component, as approaches that simply turn J2EE session beans into SOAP-accessible service implementations seem to suggest? I don&#8217;t think that this is the right way, and I seem to be not alone with this view. The emphasis on <em>data</em> in more advanced service approaches shows that for one, the granularity is even higher, and additionally, that the data becomes much more important than a set of operations.</p>

<p>Should we thus abandon OO and CBD approaches? Is the answer to expose all of our data in the form of XML documents?</p>

<p>Unsurprisingly, I don&#8217;t think so. </p>

<p>Just as once you are talking about components, it becomes irrelevant whether you have implemented your component with a procedural or object-oriented language, a service consumer couldn&#8217;t care less about that type of component or app server or runtime environment you used to implement your service. But still, this doesn&#8217;t mean that you should simply expose all of your implementation data, since this is going the tightest coupling one can imagine &mdash; a coupling between a client and the utmost implementation detail: the persistence schema.</p>

<p>So what am I getting at?</p>

<p>My view is that while the by now classic approach of hiding information and exposing only the absolute minimum still holds true for the <em>most</em> of the data, you should treat the data used for <em>interaction</em> in a loosely-coupled scenario differently. Objects are an excellent implementation technique. Components, especially those deployed in an advanced infrastructure, such as a J2EE application server, greatly enhance your productivity by freeing you of tedious middleware-related tasks. But neither are in any way appropriate for communication across company boundaries, and this is the place where you should aim for very few, document-oriented service interfaces.</p>


