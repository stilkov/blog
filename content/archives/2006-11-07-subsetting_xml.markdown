---
layout: post
title: "Subsetting XML"
date: "2006-11-07T09:13:00+01:00"
comments: false
categories: 
---

<p><a href="http://vowe.net/archives/007858.html">IE 7 does not support DTDs in feeds</a>? WTF?</p>

<section class="comments">

<div class="comment" id="comment-1086">
On <a href="#comment-1086" title="Permalink to this comment">November  7, 2006  5:32 PM</a>, <a href="http://www.agileprogrammer.com/eightytwenty" title="http://www.agileprogrammer.com/eightytwenty" rel="nofollow">Gordon Weakliem</a>
said:
<p>Michael Champion comments on this in the post you linked to.  Most feed readers won&#8217;t process DTDs and simply make the assumption that the standard HTML entities are defined.  The IE team seems to have opted for extreme correctness - they won&#8217;t process a feed with a DTD because they can&#8217;t guarantee a valid parse.  IE won&#8217;t do &#8220;liberal&#8221; parsing either.  That does make me wonder what IE will do with things like &amp;nbsp; (or any other HTML entity) in text nodes.</p>


<div class="comment" id="comment-1087">
On <a href="#comment-1087" title="Permalink to this comment">November  7, 2006 10:41 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks, I would have missed that.</p>


<div class="comment" id="comment-1088">
On <a href="#comment-1088" title="Permalink to this comment">November  7, 2006 11:12 PM</a>, <a href="http://blogs.msdn.com/mikechampion" title="http://blogs.msdn.com/mikechampion" rel="nofollow">Michael Champion</a>
said:
<p><a href="http://blogs.msdn.com/rssteam/articles/PublishersGuide.aspx" rel="nofollow" /><a href="http://blogs.msdn.com/rssteam/articles/PublishersGuide.aspx" rel="nofollow">http://blogs.msdn.com/rssteam/articles/PublishersGuide.aspx</a> and <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/8a65b5b1-d62a-4b21-b599-4d7fa5b7a8d6.asp" rel="nofollow" /><a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/8a65b5b1-d62a-4b21-b599-4d7fa5b7a8d6.asp" rel="nofollow">http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/8a65b5b1-d62a-4b21-b599-4d7fa5b7a8d6.asp</a> have some background information on the problem.</p>


</section>

