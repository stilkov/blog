---
layout: post
title: "REST interface constraints"
date: "2004-02-22T11:43:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.dehora.net/journal/archives/000371.html">Bill de h&#211;ra</a> (one day I&#8217;ll find out why I can&#8217;t enter his name properly) has an interesting post about the debate kicked off by <a href="http://www.russellbeattie.com/notebook/1006128.html">Russel Beattie</a>:</p>

<blockquote> I take the opposite view to Russ; not having mainstream availability of PUT and DELETE is the singularly most broken aspect of web technology today.</blockquote>

<p>I like REST, and I believe that Russ&#8217;s problem is a stupid omission in the J2ME standard, not a fault of the Atom spec. On a purely theoretical side, though, I wonder whether there really is a difference between having a uniform interface that contains just two verbs (GET and POST) and one that contains all four (DELETE and PUT as well). Isn&#8217;t the point that the interface is constrained, not that it is constrained to something specific? You can&#8217;t avoid a certain amount of overloading, no matter whether you have 2 or 4 or 10 verbs, since there&#8217;s more than 2 (or 4 or 10) things you will want to do.</p>


