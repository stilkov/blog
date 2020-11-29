---
layout: post
title: "Mystery Requests"
date: "2006-12-07T17:29:00+01:00"
comments: false
categories: 
---

<p>For some reason I don&#8217;t know, I get strange requests to <a href="/blog/st/2004/10/30/data_is_code_code_is_data.html">an old blog post</a>. It happens about every one or two minutes, it&#8217;s always to requests from the same IP, one immediately after the other. IP addresses (except these pairs) never occur twice. The user agent string is always <code>Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)</code>, but only on the second request (the first one doesn&#8217;t have any). There&#8217;s no referrer string.</p>

<p>Example:</p>

<pre><code>88.83.212.250 - - [07/Dec/2006:17:08:04 +0100] "GET /blog/st/2004/10/30/data_is_code_code_is_data.html HTTP/1.1" 200 9254
88.83.212.250 - - [07/Dec/2006:17:08:04 +0100] "GET /blog/st/2004/10/30/data_is_code_code_is_data.html HTTP/1.1" 200 9254 "-" "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)"
208.61.114.21 - - [07/Dec/2006:17:10:23 +0100] "GET /blog/st/2004/10/30/data_is_code_code_is_data.html HTTP/1.1" 200 9254
208.61.114.21 - - [07/Dec/2006:17:10:23 +0100] "GET /blog/st/2004/10/30/data_is_code_code_is_data.html HTTP/1.1" 200 9254 "-" "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)"
82.121.46.145 - - [07/Dec/2006:17:10:58 +0100] "GET /blog/st/2004/10/30/data_is_code_code_is_data.html HTTP/1.1" 200 9254
82.121.46.145 - - [07/Dec/2006:17:10:58 +0100] "GET /blog/st/2004/10/30/data_is_code_code_is_data.html HTTP/1.1" 200 9254 "-" "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)"
</code></pre>

<p>The page is not defaced or anything, but for some reason, it was referenced from <a href="http://en.wikipedia.org/wiki/Data_as_code">this Wikipedia entry</a> (I removed it there and entered <a href="http://www.dehora.net/journal/2004/10/execute_this_managing_configuration_in_programming_languages.html">the post from Bill de h&#211;ra that I linked to</a> instead).</p>

<p>Any hints would be <em>greatly</em> appreciated.</p>

<section class="comments">

<div class="comment" id="comment-1132">
On <a href="#comment-1132" title="Permalink to this comment">December  8, 2006 12:41 AM</a>, <a href="http://shelter.nu/" title="http://shelter.nu/" rel="nofollow">Alex</a>
said:
<p>Well, the &#8220;.NET CLR 1.1.4322&#8221; part says that it&#8217;s using .NET (with version), and a bit of Googling reveals that a lot of sites are experiencing problems through this. My suspicion is that it&#8217;s someone&#8217;s blogging software trying your system (you&#8217;re using MovableType, right?) by traversing links, and goes in circles between your link to Bill and his trackback? One good suspect is <a href="http://www.metacentric.net/feed/reader/browser/Maxthon/index.jsp" rel="nofollow" /><a href="http://www.metacentric.net/feed/reader/browser/Maxthon/index.jsp" rel="nofollow">http://www.metacentric.net/feed/reader/browser/Maxthon/index.jsp</a> which uses that signature as one of many. Maybe pop them a mail?</p>


<div class="comment" id="comment-1133">
On <a href="#comment-1133" title="Permalink to this comment">December 16, 2006 11:48 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I&#8217;ve reconfigured the server so that requests to that particular post get redirected to the requester&#8217;s IP. Let&#8217;s see whether someone notices &#8230;</p>


<div class="comment" id="comment-1134">
On <a href="#comment-1134" title="Permalink to this comment">December 17, 2006 12:07 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>BTW, thanks for the comment - it seems very plausible, and I wrote an email to those folks (who never replied). And yes, I&#8217;m using MT.</p>


</section>

