---
layout: post
title: "Embedding Languages into Apache HTTPD"
date: "2006-09-26T20:10:00+01:00"
comments: false
categories: 
---

<p><a href="http://kasparov.skife.org/blog/2006/09/25/">A very interesting post</a> by Brian McCallister on the best possible dynamic language to use in a multi-threaded Apache HTTP environment. The problem, in his own words:</p>

<blockquote>
<p>The basic problem, in my opinion, is that ruby (and python) both like to be the language. You extend them, you don&#8217;t embed them. You use ruby to drive C, not C to drive ruby. Extending ruby is fun and easy. Extending httpd with ruby is pain. Anything can be worked around, of course, but it feels like just that, work. You are fighting the grain of the problem, and basically using a great general purpose web server and application platform as an HTTP scrubber, cache, and static resource server.</p>
</blockquote>

<p>He&#8217;s found a few languages that work differently:</p>

<blockquote>
<p>It is surprising how bad the state of robust, thread-friendly scripting languages is. I found three (and a half) so far that look like they&#8217;ll fit my needs. It is a surprising list until you think about it. They are Lua, JavaScript (SpiderMonkey), and TCL. The half is Ficl. I am not sure it works yet, but it should. It should also give me lots of headaches being Forth based :-)</p>
</blockquote>

<p>He finally settled for <a href="http://www.lua.org/">Lua</a>. Yet another entry in my ever-growing list of things to take a look at. Sigh.</p>


