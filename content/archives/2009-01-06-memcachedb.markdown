---
layout: post
title: "MemcacheDB"
date: "2009-01-06T17:27:00+01:00"
comments: false
categories: 
---

<p><a href="http://memcachedb.org/">MemcacheDB</a> sounds interesting:</p>

<blockquote>
<p>MemcacheDB is a distributed key-value storage system designed for persistent. It is NOT a cache solution, but a persistent storage engine for fast and reliable key-value based object storage and retrieval. It conforms to memcache protocol(not completed, see below), so any memcached client can have connectivity with it. MemcacheDB uses Berkeley DB as a storing backend, so lots of features including transaction and replication are supported.</p>
</blockquote>

<p>[via <a href="http://www.holgerarendt.de/uncommented/#2958">Holger Arendt</a>]</p>

<section class="comments">



<div class="comment" id="comment-1911">
On <a href="#comment-1911" title="Permalink to this comment">January  8, 2009 10:46 AM</a>, <a href="http://pichis-blog.blogspot.com/" title="http://pichis-blog.blogspot.com/" rel="nofollow">Hynek (Pichi) Vychodil</a>
said:
<p>Impressive benchmark in first sight but in second &#8230; There are only 8 concurrent clients. What happen if there come more, may be ten thousand? There are used four thread but I can&#8217;t determine how much CPU is in the box, assume one (does not scale 23k vs 18k reads/s and 44k vs 64k write/s), but how it scale on more CPU&#8217;s?</p>

<p>You mentioned transaction support, but there is not any on API. Transactions are used only for communication between MemcachedDB and Berkeley DB. API just provide some higher atomic operations which using backend transaction ability.</p>

<p>It doesn&#8217;t look so impressive in detailed view.</p>


<div class="comment" id="comment-1912">
On <a href="#comment-1912" title="Permalink to this comment">January  8, 2009 10:53 AM</a>, <a href="http://pichis-blog.blogspot.com/" title="http://pichis-blog.blogspot.com/" rel="nofollow">Hynek (Pichi) Vychodil</a>
said:
<p>It goes worse, testing HW is dual core. Scaling gain is only 44%. Those are bad news.</p>


</section>

