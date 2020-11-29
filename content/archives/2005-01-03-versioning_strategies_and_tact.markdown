---
layout: post
title: "Versioning Strategies and Tactics"
date: "2005-01-03T22:24:00+01:00"
comments: false
categories: 
---

<p>Great <a href="http://www.dehora.net/journal/2005/01/versioning_some_strategies_and_tactics.html">food for thought</a> from <a href="http://www.dehora.net/journal/">Bill de h&#211;ra</a> (and a very welcome pointer to <a href="http://webpages.charter.net/chrisfer/blog.html">Chris Ferris&#8217;s blog</a>, which I followed for a long time but somehow lost my <a href="http://webpages.charter.net/chrisfer/atom-feed.xml">subscription</a> to.) I agree with most of his points, although the last one (item 5) seems to be slightly misnamed for the whole bunch of stuff he puts into it :-) In any case, I have some disagreement here &#8212; I don&#8217;t think versioning was ever even remotely solved, or even properly addressed, in COM or J2EE (and I don&#8217;t think in .NET either), and I believe that while the very fact that interfaces and data formats become more explicitly exposed with Web services based APIs does indeed raise the stakes, it requires a more explicit thought process with regards to versioning (which is a Good Thing&trade;).</p>

<p>Another very interesting thing is contained in one of his footnotes:</p>

<blockquote>
<p>In Internet protocol design the default approach has been to reduce the risk of breakage by having highly constrained but highly generic interfaces.</p>
</blockquote>

<p>This is, of course, the REST discussion all over again. Yet somehow I came to think about it in a way that was new (to me only, I am sure): Is it really a <em>protocol</em> change if I change e.g. an RPC-style WS operation name? Doesn&#8217;t that very much depend on my point of view, i.e. whether I write (or at least look at) my code as dependent on the lower-level protocol (which is always going to be one level more generic that my high-level protocol) or dependent on the higher-level protocol? In other words, is versioning &#8212; which is going to be a problem in both cases &#8212; the perfect example showing that the perceived REST/WS schism is maybe not that big a deal?</p>


