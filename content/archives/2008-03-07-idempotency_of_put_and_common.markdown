---
layout: post
title: "Idempotency of PUT, and common mistakes"
date: "2008-03-07T20:37:00+01:00"
comments: false
categories: 
---

<p><a href="http://soundadvice.id.au/blog/2008/03/07#put-idempotency">Benjamin Carlyle</a>:</p>

<blockquote>
<p>PUT and DELETE requests are all about specifying the expected outcome of an operation, and allowing the server to decide how to achieve the outcome. Consider the effect of an automated system either discarding intermediate request, or repeating requests when considering whether your PUT or DELETE request on a given URL is appropriate. If it doesn't make sense, you are probably not specifying the URL or method correctly.</p>
</blockquote>


