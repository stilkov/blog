---
layout: post
title: "Scaling over Time"
date: "2006-01-23T23:40:00+01:00"
comments: false
categories: 
---

<p>A <a href="http://www.ftponline.com/ea/magazine/winter2006/features/akrapf/default.aspx">nice article</a> on the lack of support for versioning in current programming languages. I certainly know the problem &#8212; in fact, I believe it has come up twice in customer discussions this week.</p>

<p>Within the SOA space, though, I think the answer lies in <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_1_5">never having to change your interfaces in the first place</a>.</p>

<section class="comments">

<div class="comment" id="comment-772">
On <a href="#comment-772" title="Permalink to this comment">January 26, 2006 11:16 AM</a>, <a href="http://blogs.ittoolbox.com/eai/applications/" title="http://blogs.ittoolbox.com/eai/applications/" rel="nofollow">Robin Mulkers</a>
said:
<p>Never changing a service interface is not an option.
<a href="http://blogs.ittoolbox.com/eai/applications/archives/005634.asp" rel="nofollow" /><a href="http://blogs.ittoolbox.com/eai/applications/archives/005634.asp" rel="nofollow">http://blogs.ittoolbox.com/eai/applications/archives/005634.asp</a></p>

<p>Of course, there must be a good reason to change a service interface. It should not be for the fun of changing it. A good reason is for example when EU moved from local country currencies to Euro. That was a good reason for changing service interfaces!</p>

<p>I mean refactoring within the service should not impact the interface as long as the data stays the same.</p>

<p>Because services are reused, it might be that new service consumers want additional attributes or want to provide extra information in their requests. In this case, what should we do? Create a new service or adapt the existing service and reuse it? I think that it is necessary to make a distinction between backward compatible changes and non backward compatible changes to deal with those cases efficiently. Immutable service interfaces are definitely not an option when we are talking about adding new optional attributes to a type used within a service interface.</p>


<div class="comment" id="comment-773">
On <a href="#comment-773" title="Permalink to this comment">January 27, 2006 10:11 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I was actually trying to make a point that it does not make much sense to voluntarily introduce version dependencies into a layer where they are not needed &#8212; the concept of having breaking and non-breaking changes is much easier supported the more generic your interface.</p>


</section>

