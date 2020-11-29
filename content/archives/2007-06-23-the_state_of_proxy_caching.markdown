---
layout: post
title: "The State of Proxy Caching"
date: "2007-06-23T23:01:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.mnot.net/blog/2007/06/20/proxy_caching">Mark Nottingham</a>:</p>

<blockquote>
<p>The good news is that the basics of URIs, HTTP connection handling and caching were not a problem; every implementation passed them with pretty much flying colours. When you send Cache-Control: no-cache or max-age, they&#8217;ll do the right thing, and generally they&#8217;ll parse the headers, forward them on, and return the response correctly.<br />The bad news is that more complex functionality is spottily supported, at best. I suspect this is because everyday browsing doesn&#8217;t exercise HTTP like more advanced uses like WebDAV, service APIs, etc.<br />See below for the details of the ups and downs. These are just the highlights; if you have more specific questions, raise them in comments and I&#8217;ll do my best to answer.</p>
</blockquote>

<p>Excellent information on the quality of common proxy/caching implementations &#8212; even though no specific products are named, it&#8217;s excellent to know what one can rely on.</p>


