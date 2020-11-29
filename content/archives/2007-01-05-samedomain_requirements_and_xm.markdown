---
layout: post
title: "Same-domain Requirements and XmlHttpRequest"
date: "2007-01-05T10:58:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.mernst.org/blog/archives/01-01-2007_01-31-2007.html#138">Matthias Ernst</a>:</p>

<blockquote>
<p>On the <a href="http://www.25hoursaday.com/weblog/PermaLink.aspx?guid=060ca7c3-b03f-41aa-937b-c8cba5b7f986">JSON v XML</a> debate: what good is a same-domain requirement for XmlHttpRequest if you can do a GET on any host via a SCRIPT element? It&#8217;s like saying &#8220;applets can&#8217;t contact arbitrary hosts <em>through sockets</em> but URLConnections are ok&#8221;.</p>
</blockquote>

<p>+1.</p>

<p><em>Update:</em> My insightful commenters seem to suggest I don&#8217;t know what I&#8217;m talking about, and it seems they&#8217;re right &#8212; I guess I have some more reading to do &#8230;</p>

<section class="comments">

<div class="comment" id="comment-1174">
On <a href="#comment-1174" title="Permalink to this comment">January  5, 2007  1:55 PM</a>, <a href="http://billhiggins.us/weblog/" title="http://billhiggins.us/weblog/" rel="nofollow">Bill Higgins</a>
said:
<p>Seems that way doesn&#8217;t it, but in practice script tags and XHR requests have a fundamental difference.  Script tags (to my knowledge) must be written/executed <em>as the page loads</em>.  XHR requests can happen anytime after the page loads.  In many newer Ajax application, the page loads once and never again - more like a web-based fat client.  The advantages of doing this is that you can maintain a lot of state on the client side (DOM state goes away between page loads) and of course you don&#8217;t get the jarring full-screen refresh behavior.</p>

<p>So in a lot of modern Ajax apps, your ability to dynamically load new code or data on the fly is <em>generally</em> constrained to XHR which makes the cross-domain restriction a big deal (but ultimately a good idea).</p>

<p>Note that some newer Ajax toolkits like Dojo provide other IO mechanisms (e.g. IFrame IO) that <em>do</em> allow cross-URL IO post-page load - not as clean as XHR, but you can definitely do it.</p>

<p>PS - I wrote an article for developerWorks on some of the architectural advantages of the stateful Ajax client architecture.  It&#8217;s at the URL below:
<a href="http://www-128.ibm.com/developerworks/java/library/wa-ajaxarch/" rel="nofollow" /><a href="http://www-128.ibm.com/developerworks/java/library/wa-ajaxarch/" rel="nofollow">http://www-128.ibm.com/developerworks/java/library/wa-ajaxarch/</a></p>

<p>PPS - I&#8217;ll post this same comment to the original guy (Matthias&#8217;s) blog.</p>


<div class="comment" id="comment-1175">
On <a href="#comment-1175" title="Permalink to this comment">January  5, 2007  2:01 PM</a>, <a href="http://billhiggins.us/weblog/" title="http://billhiggins.us/weblog/" rel="nofollow">Bill Higgins</a>
said:
<p>FYI, here&#8217;s a page on Dojo&#8217;s &#8220;Cross Domain XMLHttpRequest using an IFrame Proxy&#8221; mechanism:</p>

<p><a href="http://manual.dojotoolkit.org/WikiHome/DojoDotBook/Book75" rel="nofollow" /><a href="http://manual.dojotoolkit.org/WikiHome/DojoDotBook/Book75" rel="nofollow">http://manual.dojotoolkit.org/WikiHome/DojoDotBook/Book75</a></p>


<div class="comment" id="comment-1176">
On <a href="#comment-1176" title="Permalink to this comment">January  5, 2007  2:08 PM</a>, Norman Gerre
said:
<p>-1, misleading.</p>

<p>Just doing a GET on any host isn&#8217;t very interesting. You can do that with an img tag.</p>

<p>Without the same-domain restriction for XmlHttpRequest we would face a wave of (literally) unstoppable CSRF attacks, but the script src hack doesn&#8217;t suffer from the same vulnerability: you can do the GET, but the local script can&#8217;t read the response. The browser can execute it, but that&#8217;s all. It chokes on anything but JavaScript, so it can&#8217;t be used to load arbitrary pages. GET them, yes, but not read them.</p>

<p>That&#8217;s why the Yahoo APIs wrap JSON in a user-defined function call. The function is called when the remote script is loaded. The local script never gets access to the raw response the way it would with XmlHttpRequest.</p>


</section>

