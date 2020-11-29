---
layout: post
title: "Simplifying Web Framework Deployment on Shared Hosting"
date: "2008-01-10T22:08:00+01:00"
comments: false
categories: 
---

<p><a href="http://tomayko.com/weblog/2008/01/10/web-frameworks-and-shared-hosting">Ryan Tomayko</a>:</p>

<blockquote>
<p>I&#8217;d personally like to see FastCGI and SCGI dumped as deployment options and for everyone to move hard on reverse proxy configurations. Most web servers have solid reverse proxy support (lighttpd 1.4 being the notable exception). Using HTTP all the way down has a nice architectural consistency, opens up additional options for caching between web and app, and performs well. If the world moved to this kind of layered HTTP approach, it would open up a lot of possibilities for simplifying configuration and maybe even application discovery.</p>
</blockquote>

<p>A big heartfelt +1.</p>


