---
layout: post
title: "Cache Channels Beta"
date: "2008-01-04T10:57:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.mnot.net/blog/2008/01/04/cache_channels">Mark Nottingham</a>:</p>

<blockquote>
<p>And that’s pretty much what Cache Channels do. A few extra Cache-Control headers associate a channel with a response and allow saavy caches to incrementally extend the freshness of that response as long as two conditions are true;<br /><br />1) The cache is in touch with the channel, and <br />2) The channel doesn’t say that the response has become stale.<br /><br />The default implementation uses an archived Atom feed to represent the contents of the channel, which the cache to stay in touch. This takes the burden of keeping track of subscribed caches away from the server, and as a bonus, since HTTP is used as the transport, the channel it self is cacheable, meaning that scaling this to a large cluster of caches can be efficient easily.</p>
</blockquote>

<p>Very cool &#8212; implemented in <a href="http://www.squid-cache.org/Versions/v2/2.7/">Squid 2.7</a>, specified in an <a href="http://ietfreport.isoc.org/idref/draft-nottingham-http-cache-channels/">Internet Draft</a>. </p>


