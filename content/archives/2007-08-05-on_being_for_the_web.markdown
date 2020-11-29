---
layout: post
title: "On Being for the Web"
date: "2007-08-05T23:41:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.tbray.org/ongoing/When/200x/2007/07/31/Design-for-the-Web">Tim Bray</a>, talking about ETags:</p>

<blockquote>
<p>What you want to do is compute the ETag based on the underlying data resources that actually drive the page creation; the input to that process, not its output. This is often going to be a small number (sometimes one) of timestamp or version fields in a database row, or metadata from the underlying filesystem. It&#8217;s also going to be application-dependent. So a framework that was <em>really</em> designed for the Web would expose the ETag generation to the application programmer in a way that let them be smart about conserving the resources that actually matter.</p>
</blockquote>

<p>Very true; this is what Joe Gregorio wrote about <a href="http://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits">a while ago</a>. Contrary to the Tim&#8217;s impression, this seems to be exactly what Rails does:</p>

<pre><code>  def handle_conditional_get!
if body.is_a?(String) &amp;#38;&amp; (headers['Status'] ? headers['Status'][0..2] == '200' : true)  &amp;&amp; !body.empty?
self.headers['ETag'] ||= %("#{Digest::MD5.hexdigest(body)}")
self.headers['Cache-Control'] = 'private' if headers['Cache-Control'] == DEFAULT_HEADERS['Cache-Control']

if request.headers['HTTP_IF_NONE_MATCH'] == headers['ETag']
self.headers['Status'] = '304 Not Modified'
self.body = ''
end
end
end
</code></pre>

<p>In other words: you can set the header yourself; if you do so, it&#8217;s set and Rails will leave it as is. Back in March, <a href="/blog/st/2007/03/24/deep_etags.html">I thought</a> that it might make sense to add something in the lower layers to support this. I&#8217;m not so sure anymore; it&#8217;s probably better to leave this to the application developer.</p>

<section class="comments">



<div class="comment" id="comment-1404">
On <a href="#comment-1404" title="Permalink to this comment">August  6, 2007  5:49 AM</a>, <a href="http://www.tbray.org/ongoing/" title="http://www.tbray.org/ongoing/" rel="nofollow">Tim Bray</a>
said:
<p>Um, are you sure?  I&#8217;m reading that code and the first thing I see is</p>

<p>if body.is_a?(String) ...</p>

<p>which suggests that you&#8217;ve gone ahead and computed the whole result before you start thinking about conditional-get headers.  My point is that the big win would be in avoiding computing the result body. But I&#8217;m still a relative Rails newb, so maybe I&#8217;m missing something obvious</p>


<div class="comment" id="comment-1405">
On <a href="#comment-1405" title="Permalink to this comment">August  6, 2007 10:03 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>First disclaimer: this is not my code, it&#8217;s taken straight from Edge Rails. What I meant is: the default code computes an ETag if it isn&#8217;t set. If you set the ETag yourself, no magic happens and it&#8217;s passed straight through.</p>


</section>

