---
layout: post
title: "Ajax Alternatives"
date: "2007-04-10T21:51:00+01:00"
comments: false
categories: 
---

<p><a href="http://rmh.blogs.com/weblog/2007/04/ajax_plenty_of_.html">Richard Monson-Haefel</a> writes about alternatives to Ajax, and concludes:</p>

<blockquote>
<p>There are today three leading platforms for developing Rich Internet Applications: Ajax, Adobe Flash Player (with Adobe Flex 2 or OpenLaszlo), and Java Plug-in (used with Java applets). None of these solutions are perfect &#8211; they all offer some advantage over the others. The fact that Ajax has ignited a renewed interest in making the Web a much better user experience is to be applauded, but don&#8217;t confuse the hype around the technology with the basic facts about the strengths and weakness of Ajax compared to its counterparts, Adobe Flex and the Java Plug-in. Ajax is good, but there is plenty of room for improvement.</p>
</blockquote>

<p>Without a doubt Ajax is far from perfect. Personally, I think the acronym is stupid and the hype is totally undeserved. But the alternatives Richard mentions &#8212; Flash and Java Applets &#8212; lack one crucial feature IMO: A decent fallback strategy. My personal favorite is plain HTML, <a href="http://adactio.com/atmedia2005/">with optional Ajax goodness added later on</a>.</p>

<section class="comments">

<div class="comment" id="comment-1243">
On <a href="#comment-1243" title="Permalink to this comment">April 11, 2007 11:55 AM</a>, Asbjørn Ulsberg
said:
<p>+1! You can of course provide alternative HTML fallback to both Flash and Java, but it usually means that you have to develop your web application twice, instead of once (or once and then adding some Ajax sprinkly dust) as you would otherwise. There&#8217;s very little in a plain HTML web application that can be reused in a Java or Flash application, while an Ajax application not only reuses the code, but even relies on it.</p>


</section>

