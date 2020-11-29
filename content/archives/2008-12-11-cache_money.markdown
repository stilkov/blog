---
layout: post
title: "Cache Money"
date: "2008-12-11T09:23:00+01:00"
comments: false
categories: 
---

<p>Twitter&#8217;s <a href="http://magicscalingsprinkles.wordpress.com/2008/12/11/introducing-cache-money/">Nick Kallen</a>:</p>

<blockquote>
<p><a href="http://github.com/nkallen/cache-money/tree/master">Cache Money</a> is a plugin for ActiveRecord that transparently provides write-through and read-through caching functionality using Memcached. With <code>Cache Money</code>, queries are automatically cached for you; and similarly, cache expiry happens automatically as after_save and after_destroy events. <br /><br />This doesn’t just apply to trivial queries. Very complex, sophisticated queries are handled effortlessly; the vast majority of ActiveRecord usage is transparently materialized, indexed, and kept fresh in Memcached. </p>
</blockquote>

<p>I&#8217;m slightly skeptical towards magic like this, but it definitely sounds interesting.</p>


