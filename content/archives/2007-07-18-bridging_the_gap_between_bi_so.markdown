---
layout: post
title: "Bridging the gap between BI &#38; SOA"
date: "2007-07-18T18:18:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.rgoarchitects.com/blog/">Arnon Rotem-Gal-Oz</a> has written an excellent article for InfoQ: <a href="http://www.infoq.com/articles/BI-and-SOA">Bridging the gap between BI &#38; SOA</a>. This very much resembles the conclusions we came to in one of my last projects &#8212; essentially, we arrived at a model where each service interface included three (optional) facets:</p>

<ul>
<li>the &#8220;transactional&#8221; request/reply interface</li>
<li>an interface to get at pure data</li>
<li>an event interface, i.e. one that pushes data out instead of providing it for retrieval</li>
</ul>

<p>(This architecture was based on SOAP/WS-* services; in a REST variant, the three facets essentially become one.)</p>

<section class="comments">



<div class="comment" id="comment-1388">
On <a href="#comment-1388" title="Permalink to this comment">July 27, 2007 12:30 PM</a>, <a href="http://www.holgerarendt.de/uncommented" title="http://www.holgerarendt.de/uncommented" rel="nofollow">holger</a>
said:
<p>Working on a rather large scale ROA/SOA implementaton project, we also have identified the need for &#8220;pushing data out of services&#8221;, primarily to propage state changes from service/resources to trigger subsequent processes, since this keeps our processes small and separated (like in an EDA approach), without the need to specify each and every interaction or information need explicitly.</p>

<p>So, i find the idea of &#8220;in a REST variant, the three facets become one&#8221; quite interesting, especially with regards to the last bullet point. Could you explain this a little more extensivly, especially how one does get the &#8220;pushing data out&#8221; aspect by &#8220;simply&#8221; utilizing REST?</p>


</section>

