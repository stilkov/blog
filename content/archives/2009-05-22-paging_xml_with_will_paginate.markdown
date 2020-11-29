---
layout: post
title: "Paging XML with will_paginate for Rails "
date: "2009-05-22T19:06:00+01:00"
comments: false
categories: 
---

<p>I needed to paginate an Atom feed, and didn&#8217;t want to build it myself (specifically because
I&#8217;m rendering the same content as HTML, anyway). So <a href="http://github.com/stilkov/will_paginate/tree/master">this fork</a> adds pagination support for XML, usable
in Atom feeds or other XML resource representations.</p>

<p>Usage example:</p>

<pre><code>xml.instruct! :xml, :encoding =&gt; "UTF-8"
xml.feed :xmlns =&gt; 'http://www.w3.org/2005/Atom', 'xml:base' =&gt; base_uri, 'xml:lang' =&gt; 'en-us' do
xml.link :rel =&gt; 'self', :type =&gt; 'application/atom+xml', :href =&gt; request.url
xml.link :rel =&gt; 'alternate', :type =&gt; 'text/html', :href =&gt; orders_url
will_paginate(@orders, :xml =&gt; true, :builder =&gt; xml)
xml.id orders_url
xml.title 'Feed for OM order updates'
xml.updated Order.maximum(:updated_at).iso8601
for order in @orders do
... # render entries
end
end
</code></pre>

<p>This will render something like this:</p>

<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en-us" xml:base="http://om.example.com/"&gt;
&lt;link type="application/atom+xml" rel="self" href="http://om.example.com/orders.atom?page=2"/&gt;
&lt;link type="text/html" rel="alternate" href="http://om.example.com/orders"/&gt;
&lt;link rel="next" href="/orders.atom?page=3"/&gt;
&lt;link rel="prev" href="/orders.atom?page=1"/&gt;
&lt;id&gt;http://om.example.com/orders&lt;/id&gt;
&lt;title&gt;Feed for OM order updates&lt;/title&gt;
&lt;updated&gt;2009-04-07T07:44:56Z&lt;/updated&gt;
</code></pre>

<p>In other words, use will_paginate as you would use it in HTML (the controller code can stay
unchanged), and add the :xml => true option. This will make will_paginate return an XML string
representation containing appropriate <link rel="..." /> elements. Alternatively, you can pass
in an XML builder and it will use that instead.</p>

<p>Works with Rails 2.3.2.</p>

<p>Note that my experience with git and GitHub is limited, I&#8217;m happy about suggestions on how to
make this more useful. I&#8217;m also entirely satisfied if there&#8217;s a better solution and someone points me to it.</p>

<section class="comments">



<div class="comment" id="comment-1981">
On <a href="#comment-1981" title="Permalink to this comment">May 22, 2009  7:33 PM</a>, stephan.schloepke.de

<a href="http://stephan.schloepke.de/" class="commenter-profile"></a>
said:
<p>I would also add the FIRST and LAST link relation if possible (first usually should always be possible) since RFC5005 recommends that you should have as many as practical and applicable of the four link relations.</p>


<div class="comment" id="comment-1982">
On <a href="#comment-1982" title="Permalink to this comment">May 22, 2009  8:36 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Good point. I&#8217;ve updated the code; it now supports a &#8220;:first&#8221; and &#8220;:last&#8221; option that when set to true will make the pagination generate the first and last relations. </p>


</section>

