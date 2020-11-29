---
layout: post
title: "Document-Oriented Web Services"
date: "2004-09-07T21:13:00+01:00"
comments: false
categories: 
---

<p><a href="http://blogs.sun.com/sameer">Sameer Tyagi</a> has written an<a href="http://java.sun.com/developer/technicalArticles/xml/jaxrpcpatterns/index.html"> excellent article</a> about developing document-based Web Service in Java for the Sun website. The detailed discussion of doc/lit vs. rpc/enc might have been shortened to &#8220;use doc/lit and forget about the rest&#8221; &#8212; I can think of no reason other than taking over existing code for anybody deciding to use rpc/enc. Some of the possible solutions are a little absurd, but for the sake of completeness, I think this is forgivable . The only thing I really miss is a reference to <a href="http://msdn.microsoft.com/library/en-us/dnglobspec/html/wsrmspecindex.asp">WS-ReliableMessaging</a> (or <a href="http://www.w3.org/Submission/2004/SUBM-ws-messagedelivery-20040426/">WS-MessageDelivery</a> if you prefer) in the <a href="http://java.sun.com/developer/technicalArticles/xml/jaxrpcpatterns/index6.html">last section</a> (which deals with asynchronous processing).</p>

<p>Anyway, very good reading, highly recommended.</p>

<section class="comments">

<div class="comment" id="comment-353">
On <a href="#comment-353" title="Permalink to this comment">September  7, 2004 10:23 PM</a>, <a href="http://www.1060.org/blogxter/entry?publicid=F8F1C3C36F3F364731797C7E09012181" title="http://www.1060.org/blogxter/entry?publicid=F8F1C3C36F3F364731797C7E09012181" rel="nofollow">Steve Loughran</a>
said:
<p>I was a bit disappointed. Not by the article, but its acceptance of all the failings of JAX-RPC, like the awfulness of xsd:any support. </p>

<p>Trackback: <a href="http://www.1060.org/blogxter/entry?publicid=F8F1C3C36F3F364731797C7E09012181" rel="nofollow" /><a href="http://www.1060.org/blogxter/entry?publicid=F8F1C3C36F3F364731797C7E09012181" rel="nofollow">http://www.1060.org/blogxter/entry?publicid=F8F1C3C36F3F364731797C7E09012181</a></p>


<div class="comment" id="comment-354">
On <a href="#comment-354" title="Permalink to this comment">September  7, 2004 10:29 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Well, you certainly can&#8217;t expect an article at Sun.com to criticize a Java platform API :-)</p>

<p>I personally am convinced that working with the XML at the message level is the most interesting use case, and that Java (or any other statically typed language) is a bad match. But within the boundaries of JAX-RPC&#8217;s possibilities, I find the article very good.</p>


<div class="comment" id="comment-355">
On <a href="#comment-355" title="Permalink to this comment">September 10, 2004 11:50 AM</a>, <a href="http://www.1060.org/blogxter/publish/5" title="http://www.1060.org/blogxter/publish/5" rel="nofollow">Steve Loughran</a>
said:
<p>Send me your email address, you may want to read my document about Alpine.</p>


</section>

