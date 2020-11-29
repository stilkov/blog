---
layout: post
title: "Comment Feed"
date: "2005-12-29T00:08:00+01:00"
comments: false
categories: 
---

<p>So I <a href="/blog/st/2005/11/23/comments_we_have_comments_.html">finally</a> managed to build a <a href="/blog/st/comments.xml">comment feed</a> &#8212; all ready for you to use, in shiny Atom 1.0 that doesn&#8217;t validate (but will soon, hopefully). It displays nicely in NetNewsWire, at least.</p>

<p>Note that the links to should be to the individual comments; this does not yet work across all browsers. I&#8217;m not sure what the correct behavior is: OmniWeb can link to a <code>div</code> with an <code>id</code> when you use a fragment URI, Safari (and Webkit) can&#8217;t. I&#8217;ve switched the individual entry template to use an <code>a</code> element, but that will only work for new (or rebuilt) entries.</p>


