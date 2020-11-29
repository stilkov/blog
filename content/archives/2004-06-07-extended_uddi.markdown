---
layout: post
title: "Extended UDDI"
date: "2004-06-07T15:21:00+01:00"
comments: false
categories: 
---

<p><a href="http://blum.typepad.com/coarsegrained/">Adam Blum</a> has written an article about using <a href="http://sys-con.com/story/?storyid=45102&#38;DE=1">UDDI as an Extended Web Services Registry</a>. I&#8217;m currently involved in a customer project where a lot of these issues, especially surrounding versioning, play an important role. </p>

<p>In passing, Adam&#8217;s article highlights one of the really annoying details of UDDI:</p>

<blockquote>
<p>Examples of this might be classifications of average response time (fast, medium, slow), categories of average throughput (>10 Mbps, 1-10Mbps, &lt;1Mbps), and overall reliability (99.99%, 99.9%, 99%).</p>
</blockquote>

<p>Hidden in this is the fact that with UDDI, there is no way to store a value like <code>10</code> and then later do a search for <code>&lt;20</code> &#8212; you can only do exact or wildcard searches.</p>


