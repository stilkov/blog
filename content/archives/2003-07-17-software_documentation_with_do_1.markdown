---
layout: post
title: "Software Documentation with DocBook, Part 2"
date: "2003-07-17T20:27:00+01:00"
comments: false
categories: 
---

<p>&lt;oXygen/&gt;, while not bad, is not something I can get used to. It's written in Java which, in most cases at least, just plain sucks for desktop applications of this kind. It obviously relies on the Apache family of XML/XSL software, which is not exactly the best decision in terms of performance. It required an outrageous amount of memory, and took forever to transform a one-page XML document (although admittedly, the XSL stylesheets for DocBook are pretty monstrous).</p>
<p>So my next try was good old <a href="http://www.xemacs.org">XEmacs</a>, the world's best editor and an old aquaintance of mine (before it got replaced to edit Java with <a href="http://www.intellij.com">IDEA</a>. But that was not a great experience, either .... out of the box it wasn't possible to validate the XML, since it relies on <a href="http://openjade.sourceforge.net/download.html">OpenSP</a>. No problem, downloaded and built that, as well. Unfortunately, it failed to validate because it doesn't support referencing DTDs via URLs (that would be very unusal, I know, it's just about 99% of all XML files that do that). Downloading the docbook DTD and the accompanying files didn't help either - it complained about missing entity definitions. Sigh ... so the next thing to try is <a href="http://www.xmlspy.com/">XMLSPY</a> from Altova. Stay tuned.</p>
<p><b>Update:</b> XMLSpy seems to suck as well - load the XML, pick the stylesheet, run the transformation - all I get is the very informative message "A template with this name already exists". Firing up the debugger kills my machine for about 10 minutes; when it finally finishes opening up three dozen windows, the message is ... "A template with this name already exists". OK, I think I'll return to UltraEdit and perhaps Saxon. (Did I already mention that MS IE can't run the XSL as well?)</p>
<section class="comments">

<div class="comment" id="comment-58">
On <a href="#comment-58" title="Permalink to this comment">June 16, 2004  3:24 PM</a>, Charles Fulnecky
said:
<p>XMLSPY will work if you point to a 3rd party xslt engine like saxon.  See <a href="http://www.biglist.com/lists/xsl-list/archives/200205/msg01217.html" rel="nofollow" /><a href="http://www.biglist.com/lists/xsl-list/archives/200205/msg01217.html" rel="nofollow">http://www.biglist.com/lists/xsl-list/archives/200205/msg01217.html</a>
Instant saxon worked best for me on Win2k.</p>


</section>

