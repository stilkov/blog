---
layout: post
title: "An Alternative to Delta Encoding in HTTP"
date: "2008-06-08T22:50:00+01:00"
comments: false
categories: 
---

<p><a href="http://soundadvice.id.au/blog/2008/06/08#delta-encoding">Benjamin Carlyle</a> proposes an alternative to <a href="http://www.ietf.org/rfc/rfc3229.txt">RFC 3229 (HTTP Delta Encoding)</a> (which I admit I wasn't aware of):</p>

<blockquote>
<p>The two basic approaches here are a one-URL solution or an "n"-URL solution. rfc 3229 uses a one-URL approach, where different diffs are returned to different clients from the main resource URL. An "n"-URL solution would give a unique URL to each diff. Adding URLs seems to be the answer to most problems in the REST domain, so let's have a go at applying it to this one.</p>
</blockquote>

<p>At first glance, this seems pretty slick and in line with appropriate hypermedia usage.</p>


