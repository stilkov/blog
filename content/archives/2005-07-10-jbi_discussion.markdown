---
layout: post
title: "JBI Discussion"
date: "2005-07-10T07:47:00+01:00"
comments: false
categories: 
---

<p>Lots of links on <a href="http://www.jcp.org/en/jsr/detail?id=208">JBI</a>:</p>

<ul>
<li><a href="http://www.iona.com/blogs/newcomer/archives/000184.html">IONA&#8217;s Eric Newcomer</a></li>
<li><a href="http://pluralsight.com/blogs/dbox/archive/2005/07/07/12944.aspx">Microsoft&#8217;s Don Box</a></li>
<li><a href="http://www.capeclear.com/annrai/archives/2005/06/its_all_about_s_1.html">Cape Clear&#8217;s Annrai O&#8217;Toole</a></li>
<li>ServiceMix (and Groovy and ActiveSOAP and &#8230;) contributor <a href="http://radio.weblogs.com/0112098/2005/07/07.html%23a530">James Strachan</a></li>
<li><a href="http://www.iona.com/blogs/vinoski/archives/000186.html">IONA&#8217;s Steve Vinoski</a> (with a reply from <a href="http://pluralsight.com/blogs/dbox/archive/2005/07/09/13040.aspx">Don Box</a> again)</li>
</ul>

<p>Confirmed by a recent discussion at work, I think a lot of the confusion around JBI is due to the amazingly stupid name (making it sound as if you&#8217;d use JBI to integrate business apps), the fact that quite a few people pitch it as an &#8220;SOA implementation&#8221; (which is stupid, since there can be no such thing in a vendor&#8217;s product, and certainly not in an all-Java solution) and idiotic lines like &#8220;This JSR extends J2EE&trade; with business integration SPIs&#8221; (from the <a href="http://www.jcp.org/en/jsr/detail?id=208">JSR home page</a>) that are totally misleading. </p>

<p>JBI essentially is a spec that standardizes the implementation an integration product. Whether that product runs on one or more nodes in an SOA scenario, or forms the basis of an ESB product, is not specified. JBI enables components from different vendors to work together in a single JVM - take a SOAP 1.2/HTTP binding component (BC) from one vendor, a CORBA/IIOP one from another, and coordinate applications accessed via these BC via a BPEL service engine (SE) from a third one. </p>

<p>I&#8217;m not entirely sure why a market-leading middleware vendor would want to support something like this, and the two most important ones (BEA and IBM) <a href="http://searchwebservices.techtarget.com/originalContent/0,289142,sid26_gci1020556,00.html">don&#8217;t</a>.</p>

<p>Is JBI technically sound? I think so. Is it comparable to J2EE? I think that&#8217;s comparing apples and oranges (I&#8217;m totally with Eric here.) </p>

<p>Is it relevant? I honestly can&#8217;t make up my mind.</p>

<section class="comments">

<div class="comment" id="comment-587">
On <a href="#comment-587" title="Permalink to this comment">December  3, 2006  4:28 AM</a>, <a href="http://buy-soma-1234.blogspot.com/" title="http://buy-soma-1234.blogspot.com/" rel="nofollow">John</a>
said:
<p>buy soma</p>


</section>

