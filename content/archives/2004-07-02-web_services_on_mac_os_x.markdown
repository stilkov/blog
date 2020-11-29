---
layout: post
title: "Web Services on Mac OS X"
date: "2004-07-02T19:43:00+01:00"
comments: false
categories: 
---

<p>There are only very few toolkits supporting development of Web services in C++, since most of the world is focused on Java or .NET these days. I had previously used <a href="http://www.systinet.com/products/wasp_cserver/overview">Systinet&#8217;s Server for C++</a> on Linux and Windows, so I thought I might give it a try on Mac OS X. Systinet, unfortunately, does not provide a binary version for OS X (which is very sad, both for geek users as well as their developers, who don&#8217;t get to play with shiny new Macs. It would be such a great excuse for their <a href="http://www.radovanjanecek.net/blog/">VP of Engineering</a> to get his hands on such a beast (hint, hint). But I digress), but you can get access to the source code under NDA. It comes with the typical automake/configure stuff, and a single change (adding <code>#define WASP_PLATFORM_FREEBSD 1</code> to the config.h file) allowed me to do a clean compile. After playing around with it for a few days, I can confirm that it runs very smoothly and without any problems &#8212; so now I&#8217;m able to build SOAP-based, interoperable Web services in Xcode, which is simply a great development environment.</p>


