---
layout: post
title: "Interviewing Mark Little"
date: "2008-06-24T15:12:00+01:00"
comments: false
categories: 
---

<blockquote>
<p>In this interview, recorded at QCon London 2008, Red Hat Director of Standards and Technical Development Manager for the SOA platform Mark Little talks about extended transaction models, the history of transaction standardization, their role for web services and loosely coupled systems, and the possibility of an end to the Web services vs. REST debate.</p>
<p>Mark, who is also one of InfoQ&#8217;s SOA community editors, has been involved in the middleware industry for ages, and shares his experiences with regards to standardization. Those expecting him to be strongly in favor of using transactions might be in for some surprises:</p>
<blockquote>So, traditional atomic transactions that I described earlier have some in-built assumptions about how they will work and the environment in which they will work, so pretty much they assume they will work in a closely coupled environment [&#8230;] On the web those kinds of interactions typically don&#8217;t happen, you know you might be booking a night out, or buying a book from Amazon and you might be doing that over the course of hours or days. And to do all of that within the scope at the top level of an atomic transaction, just doesn&#8217;t work.</blockquote>
<p>Mark continues to explain the alternatives, based on extended transaction models:</p>
<blockquote>Basically the principle about extended transactions is to relax the very properties that are inherent within an atomic transaction [&#8230;] The reason for relaxing the different properties is to cater for the type of use cases that you want, and that&#8217;s why there is a lot of different extended transactions models. There is no one model that actually fits everything you could ever want to do.</blockquote>
<p>Mark also explains the history of the transaction standards that are available for WS-* style web services, and also shares his opinion on the WS-vs.-REST debate:</p>
<blockquote>I think it&#8217;s going way too long and I think it&#8217;s become very polarized in some sectors when it shouldn&#8217;t have. There are certainly good reasons for using REST over HTTP, so obviously there is a distinction between REST and what I would like to call REST over HTTP, which is one way of doing REST. [&#8230;] From a REST perspective, the uniform interface does make a lot of sense in many cases. I think one of the problems that we have with web services is WSDL, to be perfectly honest. [&#8230;] Web services and REST can be used together. I do believe that we can do it, I&#8217;m not suggesting that it is easy, but if you look back at the amount of time and effort that has been wasted in these fights that we&#8217;ve had from individuals to big corporations, I would like to think that if we&#8217;d actually spent that time actually talking and trying to get these things resolved in a reasonable manner we could have been there by now.</blockquote>
<p>The interview concludes with some statements on the way the Red Hat/JBoss acquisition affected both companies&#8217; employees.</p>
<p>Watch the full interview (.. minutes)
</p>
</blockquote>

<p>More at <a href="http://www.infoq.com/interviews/mark-little-qcon08">InfoQ</a>.</p>


