---
layout: post
title: "What Went Wrong with GML"
date: "2007-05-04T20:45:00+01:00"
comments: false
categories: 
---

<p><a href="http://cfis.savagexi.com/articles/2007/05/01/lost-in-abstraction-what-went-wrong-with-gml">Charlie Savage</a>:</p>

<blockquote>
<p>Even if you know nothing about GIS or GML [, which is the GIS industry&#8217;s primary data exchange format,] its a good example of trying so solve a problem by adding one too many levels of abstraction thereby solving nothing.</p>
</blockquote>

<p>There are way too many examples of this; my favorite one being <a href="http://www.omg.org/technology/documents/formal/xmi.htm">XMI</a>.</p>

<section class="comments">



<div class="comment" id="comment-1271">
On <a href="#comment-1271" title="Permalink to this comment">June 29, 2007  7:16 AM</a>, <a href="http://www.geoweb.org" title="http://www.geoweb.org" rel="nofollow">Ron Lake</a>
said:
<p>Who would be interested in a virtual/real BOF on this issue of encoding geographic data at GeoWeb 2007.</p>

<p>Some good points have been made here (and elsewhere) by Charlie and others but they seem to get only half the story. The real issue in this discussion is what sort of schema language we need in the Geo world.  Anything like the KML Schema tag, or GML v1.0 (I know I wrote it) is in effect itself a schema language - does the Geo world really want to create its own schema language?  The decision in GML was no we don&#8217;t - that should come from the wider IT world. Well what is a good schema language?  XML Schema is complex but pretty expressive - likely too much so for a place to start - but then again the schemas need be no more complex then you WANT them to be.  RelaXNG is another approach but also has its own limitations and complexities.  Schema in the instance languages like OBIX or KML (Schema tag) are too simple in most cases and would be hard to use as a basis of query definition, or to create early bindings to data for analysis.</p>


</section>

