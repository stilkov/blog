---
layout: post
title: "Don't Design Custom Document Schemas"
date: "2004-06-18T08:32:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.tbray.org/ongoing/When/200x/2004/06/17/CustomSchemas">Tim Bray</a> writes about the pros and cons of constructing your own schema for Office documents, and concludes that it&#8217;s simply not worth doing. We did something similar in one of our website and product documentation iterations: designing a custom schema seemed trivially easy at first (just throw in a <code>&lt;para&gt;</code> tag, a couple of <code>&lt;link&gt;</code> and <code>&lt;document&gt;</code> style things and you&#8217;re basically done), but what we ended up with seemed like <a href="http://www.docbook.org/">DocBook</a> or XHTML done badly &#8212; so we essentially switched to those instead (XHTML for the website, DocBook for the documentation). The fact that you have lots of tools to edit and process and transform those things to multiple possible output formats far outweighs the fact that you initially consider them to be overkill.</p>


