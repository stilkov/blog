---
layout: post
title: "Google Research Publication: Chubby Distributed Lock Service"
date: "2007-01-31T18:25:00+01:00"
comments: false
categories: 
---

<p><a href="http://labs.google.com/papers/chubby.html">Mike Burrows</a>:</p>

<blockquote>
<p>We describe our experiences with the Chubby lock service, which is intended to provide coarse-grained locking as well as reliable (though low-volume) storage for a loosely-coupled distributed system. Chubby provides an interface much like a distributed file system with advisory locks, but the design emphasis is on availability and reliability, as opposed to high performance. Many instances of the service have been used for over a year, with several of them each handling a few tens of thousands of clients concurrently. The paper describes the initial design and expected use, compares it with actual use, and explains how the design had to be modified to accommodate the differences.</p>
</blockquote>

<p>[via <a href="http://bitworking.org/news/100/The-Chubby-lock-service">Joe Gregorio</a>]</p>


