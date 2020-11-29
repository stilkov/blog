---
layout: post
title: "Deep Etags"
date: "2007-03-24T22:54:00+01:00"
comments: false
categories: 
---

<p><a href="http://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits">Joe Gregorio</a> writes about &#8220;Deep ETags&#8221;, i.e. creating an etag value (which is (one of the factors) used to control HTTP caching) as &#8220;low&#8221; as possible. I&#8217;ve wondered about this a few days ago, and checked the Rails sources &#8212; Etag support <a href="http://dev.rubyonrails.org/changeset/6158">has been added just recently</a>:</p>

<blockquote>
<p>Added that rendering will automatically insert the etag header on 200 OK responses. The etag is calculated using MD5 of the response body. If a request comes in that has a matching etag, the response will be changed to a 304 Not Modified and the response body will be set to an empty string. </p>
</blockquote>

<p>So Rails does etags, which is good, but I believe it could offer much better support if this was connected to the lower layers (i.e. ActiveRecord). Should be easy to do &#8230;</p>


