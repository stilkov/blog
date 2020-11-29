---
layout: post
title: "iQgen 2.1 on Mac OS X"
date: "2004-10-19T16:08:00+01:00"
comments: false
categories: 
---

<p>We&#8217;ve <a href="/iqgen/001192.html">released</a> a new version of our software generation tool, <a href="/iqgen/">iQgen</a>, with a couple of improvements. Most notably, its Eclipse support has been upgraded to 3.0; this was definitely the most requested feature. For the sole reason that I was sick of looking at a semi-cool UI on my platform of choice, we also now have a Mac OS X version. This means that the menu bar is where it makes sense (at the top of the screen), the look and feel is Aqua, Preferences, About box and Help are where you&#8217;ll expect them to be, everything is packaged as a Mac OS X application package &#8230; all in all, supporting this was trivially easy to do. I did most of the work based on <a href="http://developer.apple.com/technotes/tn/tn2042.html">these instructions</a>; the only thing a little tricky was figuring out how to bundle the application with Ant. In the end, though, the building of a new product release (which is done on Win2K or WinXP boxes) now builds the Mac OS X installer as well.  </p>

<p>(iQgen, in case you&#8217;re wondering, reads in model information in XMI format, and transforms it into output files based on templates that have been written as JSPs. It is very, very stable, works with almost any CASE tool in the market, and has command line, Ant, Swing and Eclipse interfaces. Essentially, it does only a small amount of things, but our aim has been to make it do those things extremely well. You can find more information <a href="/iqgen/">here</a>.)</p>


