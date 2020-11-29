---
layout: post
title: "James Clark on JSON vs. XML"
date: "2007-04-09T22:23:00+01:00"
comments: false
categories: 
---

<p><a href="http://blog.jclark.com/2007/04/xml-and-json.html">James Clark</a> on JSON vs. XML:</p>

<blockquote>
<p>It&#8217;s not surprising that XML is unappealing to a generation of programmers who are coming to it fresh, without making allowances for how it got to be this way. </p>
</blockquote>

<p>I&#8217;m too old to be part of this generation, but the same can be said for a whole lot of technologies, including Java, J2EE, Web services &#8230; what may have been a good excuse for their warts when they were new is often not convincing anymore today. </p>

<p>Another nice quote:</p>

<blockquote>
<p>A range of powerful supporting technologies have been developed for XML. Naturally I have a fondness for the ones that I had a role in developing: XPath, XSLT, RELAX NG. I also can see a lot of value in XPath2, XSLT2 and XQuery. On some days, if I&#8217;m in a particularly good mood and I try really hard, I can see value in XSD.</p>
</blockquote>

<p>The one thing I don&#8217;t happen to agree with (he writes this with regards to JSON):</p>

<blockquote>
<p>Some important datatypes are missing. In particular, I think support for binary data (XSD base64Binary or hexBinary) is critical. </p>
</blockquote>

<p>What&#8217;s the use case that can&#8217;t be solved by just referencing the binary content, preferably using <a href="http://gbiv.com/protocols/uri/rfc/rfc3986.html">some widely known way</a> to identify things?</p>

<section class="comments">

<div class="comment" id="comment-1237">
On <a href="#comment-1237" title="Permalink to this comment">April 10, 2007 12:08 AM</a>, <a href="http://www.eighty-twenty.net" title="http://www.eighty-twenty.net" rel="nofollow">Gordon Weakliem</a>
said:
<p>The one that pops to mind is encrypted content.  Still, Base64 is just a special case of a string, and as you mentioned, for some things (especially large binary objects), you&#8217;ll probably be better off handing off a link and using HTTP to retrieve it.</p>


<div class="comment" id="comment-1238">
On <a href="#comment-1238" title="Permalink to this comment">April 10, 2007 11:18 AM</a>, <a href="http://jacek.cz/blog/" title="http://jacek.cz/blog/" rel="nofollow">Jacek</a>
said:
<p>What&#8217;s one case when referencing doesn&#8217;t help? Packaging. The receiver endpoint may not be able/willing to resolve (arbitrary) URIs, or network may be unavailable at time of processing.</p>

<p>Gordon, check <a href="http://www.w3.org/TR/xop10/" rel="nofollow" /><a href="http://www.w3.org/TR/xop10/" rel="nofollow">http://www.w3.org/TR/xop10/</a> for a way of optimizing the base64 away from XML.</p>


<div class="comment" id="comment-1239">
On <a href="#comment-1239" title="Permalink to this comment">April 10, 2007 11:21 AM</a>, <a href="http://jacek.cz/blog/" title="http://jacek.cz/blog/" rel="nofollow">Jacek</a>
said:
<p>One thing I forgot - one can sometimes also use URIs from the data: scheme - base64 supported, any media type, data right there in the URI.</p>


<div class="comment" id="comment-1240">
On <a href="#comment-1240" title="Permalink to this comment">April 12, 2007  2:26 AM</a>, <a href="http://surveying-mapping-gis.blogspot.com" title="http://surveying-mapping-gis.blogspot.com" rel="nofollow">Dave Smith</a>
said:
<p>Sometimes a fresh set of eyes is just the thing needed&#8230;</p>


</section>

