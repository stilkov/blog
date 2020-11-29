---
layout: post
title: "RDBMS Value"
date: "2005-12-25T21:14:00+01:00"
comments: false
categories: 
---

<p>I almost forgot to reply to <a href="http:///blog/st/2005/12/22/rdf_vs_rdb.html#comments">the comments</a> I got to the RDF vs. RDB post &#8230; </p>

<p>As Mark correctly points out, data access optimization is one of the benefits you lose if you use an RDBMS on a meta-level only. I believe that you lose even more: Obviously, an RDB not only has features to store and retrieve data (SQL DML), it also includes a way to describe the data  &#8212; in other words: manage metadata (DDL). Ignoring the database&#8217;s metadata features means losing a significant part of its functionality and value.</p>

<p>I believe it&#8217;s a much more viable strategy to devise ways to map your application&#8217;s metadata to RDB metadata (i.e. tables, views, keys, constraints etc.) instead of storing it as data. After all, it&#8217;s not as if it were hard to create tables on the fly &#8230;</p>

<p>I have to admit, though, that most of this reasoning applies to e.g. the OO/RDB mapping, and is in general more appropriate for the more standard metadata concepts. I understand that RDF is something different. I just don&#8217;t buy the theory that creating an RDF schema for a relational DB, and then storing RDF triples in there, will gain much benefit from the RDBMS &#8212; no admin is going to be able to make sense of it, no application developer will be able to create a useful (and reasonably performing) SQL query, no BI tool will be able to analyze it (in contrast to the star schema stuff <a href="http://patricklogan.blogspot.com/2005/12/representing-rdf.html">referenced by Patrick Logan</a>).</p>


