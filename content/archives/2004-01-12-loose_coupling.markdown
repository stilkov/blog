---
layout: post
title: "Loose Coupling"
date: "2004-01-12T22:10:00+01:00"
comments: false
categories: 
---

<p>Patrick Logan <a href="http://patricklogan.blogspot.com/2004_01_11_patricklogan_archive.html#107393807185756980">points</a> to an interesting post from <a href="http://www.manageability.org/blog/stuff/axis-of-loose-coupled-ness">Carlos Perez</a> which contains this fragment:</p>

<blockquote>In general, a relational database provides a fixed, queried, self-describing, lazy evaluated system that is inherently loosely coupled. It&#8217;s surprising that it&#8217;s perceived to be more tightly coupled than a component based system.</blockquote>

<p>One can certainly build very loosely coupled systems by using an RDBMS as the shared storage area. The problem is that this will only work if the systems and the common schema they share have been designed for this purpose. For example, it would be pretty easy to connect a whole bunch of systems to an RDBMS and use some <a href="http://c2.com/cgi/wiki?TupleSpace">TupleSpace</a>-like stored procedure API.
What you need to make sure, though, is that you don&#8217;t use the data-oriented integration strategy that has currently become so popular as an excuse to expose your implementation details, of which the RDBMS schema &mdash; at least in the most of the cases &mdash; clearly is one.</p>


