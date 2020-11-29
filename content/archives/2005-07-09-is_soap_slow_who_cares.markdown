---
layout: post
title: "Is SOAP Slow? Who cares?"
date: "2005-07-09T20:54:00+01:00"
comments: false
categories: 
---

<p>There&#8217;s a fascinating thread, without any chance of a conclusion, going on regarding SOAP performance:<a href="http://jim.webber.name/2005/06/23/dbeede6f-4745-443a-bed3-3a556fcd3a36.aspx">Jim Webber initially commented</a> on some statements on the ZeroC web site regarding SOAP&#8217;s bad performance. <a href="http://www.zeroc.com/misc/speed-of-light-fallacy.html">Marc Laukien</a> and <a href="http://www.zeroc.com/misc/speed-of-light-fallacy2.html">Michi Henning followed up</a>, and <a href="http://jim.webber.name/2005/07/07/bbcca26a-b2d9-473e-86ff-956a44e3b25c.aspx">Jim responded again</a> &#8212; the argument centering around whether or not the speed of light is a limiting factor.</p>

<p>My personal take is that of course message processing speed matters &#8212; sometimes. When it does, as in the online gaming example, using SOAP is probably a totally dumb idea. In a large number of use cases (I don&#8217;t know whether it&#8217;s 90% or 70%, but definitely significant), you have to worry much more about the time needed to process the business logic or get data from your DB - which means that the performance advantage of something like ICE, which is probably insanely great, simply doesn&#8217;t matter.</p>


