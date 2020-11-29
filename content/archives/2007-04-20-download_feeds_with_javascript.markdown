---
layout: post
title: "Download Feeds with JavaScript"
date: "2007-04-20T19:19:00+01:00"
comments: false
categories: 
---

<p>The <a href="http://code.google.com/apis/ajaxfeeds/">Google AJAX Feed API</a>:</p>

<blockquote>
<p>With the AJAX Feed API, you can download any public Atom or RSS feed using only JavaScript, so you can easily mash up feeds with your content and other APIs like the Google Maps API.</p>
</blockquote>

<p>Example usage:</p>

<pre><code>function initialize() {
var feed = new google.feeds.Feed("http://www.digg.com/rss/index.xml");
feed.load(function(result) {
if (!result.error) {
var container = document.getElementById("feed");
for (var i = 0; i &lt; result.feed.entries.length; i++) {
var entry = result.feed.entries[i];
var div = document.createElement("div");
div.appendChild(document.createTextNode(entry.title));
container.appendChild(div);
}
}
});
}
</code></pre>

<p>Very neat. Puzzling at first sight, though, is the header:</p>

<pre><code>&lt;script type="text/javascript" src="http://www.google.com/jsapi?key=YOUR_KEY_HERE"&gt;&lt;/script&gt;
</code></pre>

<p>Why would one load a script from there instead of just downloading it? The answer is <a href="http://code.google.com/support/bin/answer.py?answer=65405&amp;topic=11330">security</a> &#8212; Google acts a a proxy, so the JS code never accesses anything other than the domain it was loaded from.</p>


