---
layout: post
title: "Java Objects and XML"
date: "2004-06-16T20:10:00+01:00"
comments: false
categories: 
---

<p>I&#8217;m awfully late to follow up on <a href="http://www.neward.net/ted/weblog/index.jsp?date=20040609#1086782396123">Ted Neward&#8217;s latest post</a> in the <a href="/blog/st/2004/06/more_on_the_dataset_issue.html">monster permathread</a>, but <a href="http://norman.walsh.name/2004/06/14/apis">this piece from Norman Walsh</a> gives me a nice excuse. </p>

<p>I think it&#8217;s fairly typical that people believe that working with strongly typed objects is the only sensible way that anyone would ever want to use for working with XML, much as Ted seems to think. But Norman&#8217;s post, as well as <a href="/blog/st/2003/09/java_and_web_services_are_not_a_match_made_in_heaven.html">some older ones I commented on before</a>, highlight that this is not necessarily the case.</p>

<p>I recently got to know a scenario where the backend legacy system had an (unRESTful) XML API. This was accessed from a Java/J2EE app that essentially turned the XML from the backend into Java objects and then turned those into HTML. I can&#8217;t help but feel that something is seriously wrong in a scenario like that &#8230;</p>


