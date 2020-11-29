---
layout: post
title: "Bruce Tate on Ruby and REST"
date: "2006-08-13T22:35:00+01:00"
comments: false
categories: 
---

<p><a href="http://it-and-more.blogspot.com/2006/08/rest-on-rails.html">Gernot Starke</a> points to <a href="http://www-128.ibm.com/developerworks/java/library/j-cb08016/index.html">this article by Bruce Tate.</a> Nice try, unfortunately including some misleading statements:</p>

<blockquote>
<p>Rather than inventing an exhaustive list of standards, REST uses existing Internet standards, including HTTP, XML, and TCP/IP.</p>
</blockquote>

<p>Maybe true for a RESTful application, but not for REST itself.</p>

<blockquote>
<p>REST clients use the same HTTP commands as your browser to access resources.</p>
</blockquote>

<p>Except for PUT and DELETE.</p>

<blockquote>
The HTTP commands map to CRUD like this:
<ul>
<li>Create: HTTP put</li>
<li>Read: HTTP get</li>
<li>Update: HTTP post</li>
<li>Delete: HTTP delete</li>
</ul>
</blockquote>

<p>The analogy isn&#8217;t very good, anyway, but if it&#8217;s used, PUT should map to update and POST to create.</p>

<p>But anyway, not bad, and good to see REST get most exposure.</p>

<section class="comments">

<div class="comment" id="comment-1006">
On <a href="#comment-1006" title="Permalink to this comment">August 15, 2006  1:42 PM</a>, <a href="http://sebstein.hpfsc.de/" title="http://sebstein.hpfsc.de/" rel="nofollow">Sebastian Stein</a>
said:
<p>I just want to point out that there seems to be no consensus whether PUT or POST should be used for creating resources. After reading the HTTP 1.1 RFC I came to the conclusion that POST is for updating and PUT for creating new resources.</p>


<div class="comment" id="comment-1007">
On <a href="#comment-1007" title="Permalink to this comment">August 15, 2006  2:12 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I disagree. The spec says &#8220;The PUT method requests that the enclosed entity be stored under the supplied Request-URI. &#8220;, which means that you need a URI to store something (and will later be able to retrieve its representation from the same URI). To me, this implies an update.</p>

<p>A POST often creates a new subordinate resource, such as a new item in a forum thread, and returns a new URI; but it can also do almost anything else that is not &#8220;safe&#8221; and/or &#8220;idempotent&#8221;. As I said, the analogy isn&#8217;t very good.</p>


</section>

