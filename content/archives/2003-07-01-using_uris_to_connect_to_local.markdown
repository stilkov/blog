---
layout: post
title: "Using URIs to connect to local apps"
date: "2003-07-01T16:33:00+01:00"
comments: false
categories: 
---

<p><a href="">Jon Udell</a> <a href="http://weblog.infoworld.com/udell/2003/07/01.html#a735" title="Jon's Radio">writes about</a> the TAG's <a href="http://www.w3.org/TR/2003/WD-webarch-20030627/">The Architecture of the World Wide Web</a> document, and while the article itself is - as always - very interesting, there is a small paragraph that introduces a great concept in passing:
</p>
<p>
</p><blockquote>If you're an IE user, you can try it here, after visiting Tools -> Internet Options -> Security -> Internet -> Custom Level -> Miscellaneous -> Access data sources across domains (shouldn't there be URLs for these things?)</blockquote>

<p>I think the answer is: Yes, there should be a URL. It's such a common thing to point others to a particular dialog or setting in some application that it would be great to have this opportunity. I can think of two ways to do this:</p>
<ol>
<li>Have the application act as a server that listens on some defined port, and open the setting if an HTTP get request is sent according to the URI requested,</li>
<li>Introduce a new scheme, turning the URI into something like &quot;myapp://settings/whatever/&quot;, that would fire up the appropriate dialog (I think this is the way Notes does it)</li>
</ol>
<p>Both approaches have disadvantages - having to implement an (albeit small) HTTP listening taks in the first case, and violating one of the principles in the TAG document in the other.</p>

