---
layout: post
title: "A New Generation of Features for Programming Languages"
date: "2005-01-09T10:43:00+01:00"
comments: false
categories: 
---

<p>Dare Obasanjo has an interesting <a href="http://www.25hoursaday.com/weblog/PermaLink.aspx?guid=48cd3ae8-3cb0-4cb3-9b10-10c886c7a9de">post</a> about programming language features, especially with regards to <a href="http://research.microsoft.com/Comega/">C&#969;</a>. This does indeed seem rather smart:</p>

<blockquote>
Take the following class definition as an example:
<pre>
public class Buffer {
public async Put(string s);
public string Get() &#38; Put(string s) { return s; }
}
</pre>
In the Buffer class a call to the Put() method blocks until a corresponding call to a Get() method is made. Once this happens the parameters to the Put() method are treated as local variable declarations in the Get() method and then the code block runs.&#160;Similarly a call to a Get() method blocks until a corresponding Put() method is called. This assumes that each corresponding Put() call&#160;has a corresponding Get() call and vice versa.
</blockquote>

<section class="comments">

<div class="comment" id="comment-432">
On <a href="#comment-432" title="Permalink to this comment">January 10, 2005  2:24 PM</a>, <a href="http://www.metamaxim.com" title="http://www.metamaxim.com" rel="nofollow">Ashley McNeile</a>
said:
<p>FYI: Dare Obasanjo has changed (I assume corrected) the description of the way this class works.</p>


<div class="comment" id="comment-433">
On <a href="#comment-433" title="Permalink to this comment">January 10, 2005 10:41 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks for pointing it out &#8230;</p>


</section>

