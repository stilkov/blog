---
layout: post
title: "Using POST"
date: "2009-03-21T09:18:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.tbray.org/ongoing/When/200x/2009/03/20/Rest-Casuistry">Tim Bray</a> wrote an interesting post on using POST to initiate an action; interesting comments and <a href="http://roy.gbiv.com/untangled/2009/it-is-okay-to-use-post">an illuminating post</a> by Roy Fielding followed. My favorite comment comes from Andrew Wahbe:</p>

<blockquote>
<p>Worrying about the way you've structured the resources on the server is usually a sign that you actually aren't thinking RESTfully. Why? Because you should be worrying if your hypermedia format frees the client from any dependencies on that structure. If you've got that right (and most haven't) then you can worry about using the method with the strongest semantics for each operation (GET for idempotent and safe operations, PUT or DELETE for idempotent and un-safe operations and POST for everything else). That will allow you to tune the plumbing (e.g. caching) as needed. Anything else is a waste of time. Futzing with resource structures doesn't yield practical benefits and doesn't make your system more RESTful (despite popular opinion).</p>
</blockquote>

<section class="comments">



<div class="comment" id="comment-1951">
On <a href="#comment-1951" title="Permalink to this comment">March 21, 2009  8:04 PM</a>, <a href="http://www.ebpml.org/blog/175.htm" title="http://www.ebpml.org/blog/175.htm" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>So Stefan, you mean some resources have actions other than Create, Update, Delete? That&#8217;s news to me. I don&#8217;t know how many times we debated this question and I was under the impression that the interface to a resource is &#8220;uniform&#8221;. Specific actions transcoded as POST are still actions and part of the interface of the resources. This is no different at all as the PUT tunnelling via a POST on a uri /&#8230;./noun?verb=PUT.</p>

<p>And of course, you still argue that if you arbitrarily change the &#8220;action interface&#8221; a &#8220;client&#8221; can adapt without changes, and of course, there is no value in describing this &#8220;action interface&#8221; with metadata?</p>


<div class="comment" id="comment-1954">
On <a href="#comment-1954" title="Permalink to this comment">April  2, 2009  5:13 AM</a>, Dilip Krishnan
said:
<p>@JJD I believe this in specific reference handling certain &#8216;non-uniform&#8217; interactions such as POST, for e.g. partial updates to resources, restarting a vm like Tim&#8217;s example etc. Conditions where the the &#8220;action interface&#8221; does not represent a &#8216;standard&#8217; verb.</p>

<p>I believe that the disconnect that I see is that the POST is to a non-resource-uri, that serves as an action as opposed to further modeling it as an interaction with a resource-uri and using an appropriate verb, which as the comment suggest &#8220;doesn&#8217;t yield additional benefit nor make the system more RESTful&#8221;</p>


</section>

