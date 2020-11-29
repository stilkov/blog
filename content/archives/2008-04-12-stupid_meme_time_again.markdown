---
layout: post
title: "Stupid Meme Time (again)"
date: "2008-04-12T23:03:00+01:00"
comments: false
categories: 
---

<pre><code> slim:~ st$ history|awk '{a[$2]++} END{for(i in a){printf "%5d\t%s\n ",a[i],i}}'|sort -rn|head
132  cd
116  ls
18  ssh
17  vi
15  svn
15  rake
15  find
14  hg
13   script/server
11  killall
</code></pre>

<p>Major lesson learned: I should really do something about these hanging ssh connections. </p>

<p>[Meme spread via <a href="http://www.1060.org/blogxter/entry?publicid=B8BD78A5F8E68BBEDFC691799C8E7BAD">Steve</a> and many others]</p>

<section class="comments">



<div class="comment" id="comment-1680">
On <a href="#comment-1680" title="Permalink to this comment">April 15, 2008  9:06 AM</a>, <a href="http://www.martin-probst.com" title="http://www.martin-probst.com" rel="nofollow">Martin Probst</a>
said:
<p>If your ssh connection hangs, most of the time you wont need killall, you can terminate a connection by typing ~ . (tilde followed by dot). This only works if your terminal knows that you&#8217;re at the start of a line, so maybe you have to type Enter ~ .</p>

<p>Works like a charm, and is tremendously useful, especially if you change networks a lot and end up with three terminals that have a hanging ssh session all the time &#8230;</p>


<div class="comment" id="comment-1681">
On <a href="#comment-1681" title="Permalink to this comment">April 15, 2008  9:26 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Thanks, I&#8217;ll try this out.</p>


</section>

