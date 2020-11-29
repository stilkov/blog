---
layout: post
title: "Keeping Page History in Web Apps"
date: "2005-01-21T11:07:00+01:00"
comments: false
categories: 
---

<p>I just skimmed through an <a href="http://www-106.ibm.com/developerworks/web/library/wa-webflow/">article</a> describing <a href="http://wfnm.sourceforge.net/">WebFlow Navigation Manager</a>, a framework to support backwards navigation in Web browsers. I just have to comment on this:</p>

<blockquote>
<p>The Back button of the browser is not typically the best way for the user to navigate in reverse through a Web application. A better solution is to keep the navigation history on the server side. With the WebFlow Navigation Manager framework, you can do just that.</p>
</blockquote>

<p>WTF? If I can no longer use the Back and Forward, that&#8217;s a bug &#8212; and definitely not one in the browser. No amount of server-side history-keeping fumbling is going to alleviate that unless you make your URLs and HTTP interactions work as they are intended to.</p>

<p>[via <a href="http://patricklogan.blogspot.com/2005/01/models-for-backwards-navigation.html">Patrick Logan</a>]</p>

<section class="comments">

<div class="comment" id="comment-440">
On <a href="#comment-440" title="Permalink to this comment">January 21, 2005  3:25 PM</a>, <a href="http://www.xml-blog.com" title="http://www.xml-blog.com" rel="nofollow">Christian Romney</a>
said:
<p>Amen. The server-side idea is well-intentioned, but oh so misguided. The unfortunate problem is most web developers and programmers haven&#8217;t read the Architecture of the World Wide Web. The don&#8217;t understand concepts like idempotence, and they don&#8217;t understand best practices like &#8220;Don&#8217;t break the back button!&#8221;</p>


</section>

