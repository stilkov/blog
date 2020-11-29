---
layout: post
title: "Messages and Documents"
date: "2004-02-09T19:46:00+01:00"
comments: false
categories: 
---

<p>An interesting discussion got started by <a href="http://www.mnot.net/blog/">Mark Nottingham</a> and triggered responses from<a href="http://www.markbaker.ca/2002/09/Blog/2004/02/09#2004-02-persistence-etc">Mark Baker</a>, <a href="http://patricklogan.blogspot.com/archives/2004_02_08_patricklogan_archive.html#107620973199427475">Patrick Logan</a> and <a href="http://seanmcgrath.blogspot.com/archives/2004_02_08_seanmcgrath_archive.html#107631992309231719">Sean McGrath</a>. I have yet to be convinced that <a href="http://www.itworld.com/nl/xml_prac/04182002/">preferring messages/document/files over APIs</a> <em>in general</em> is a good idea &mdash; it works very well in simple cases, but leads to a high dependency on internal structure in more complex ones. APIs, at least high-level ones, are there to offer a layer of abstraction. Connecting to the underlying files (or database, for that matter) can lead to a very brittle connection unless the mechanism is explicitly designed to be used for interoperation.</p>


