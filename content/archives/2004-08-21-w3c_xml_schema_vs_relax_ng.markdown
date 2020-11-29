---
layout: post
title: "W3C XML Schema vs. RELAX NG"
date: "2004-08-21T22:31:00+01:00"
comments: false
categories: 
---

<p>Mark Nottingham <a href="http://www.mnot.net/blog/2004/08/05/document_oriented">writes about</a> the problems with XML Schema, and makes a case for development of a new data model with a mapping to the XML infoset. There&#8217;s an interesting <a href="http://pluralsight.com/blogs/tewald/archive/2004/08/16/1892.aspx">follow-up from Tim Ewald</a>, and a follow-up on that one from <a href="http://www.25hoursaday.com/weblog/PermaLink.aspx?guid=4f0e7d28-642c-490c-94c5-cf14b1ba561e">Dare Obasanjo</a>.  Dare argues that XSD is preferable over RELAX NG for the most usual use case &#8212; the mapping of objects or (shudder) database tables to XML and back, and he&#8217;s probably right. I still believe that even though most, if not all, Web services toolkits provide a facility to do this mapping, this doesn&#8217;t mean that it&#8217;s a good thing. I recently co-authored an article comparing XSD and RELAX NG (it&#8217;s going to appear in next month&#8217;s iX, a German magazine). One of the things we did for that was to actually compare the specs&#8217; sizes. It turns out that the XSD spec is about 10 times as large as that of RELAX NG (still 6 times as large if you don&#8217;t count the datatype part). Inspite (or because of?) that RELAX NG is simpler, has a sound underlying model, is more XML-like, and probably superior in many other ways to XSD as well.</p>


