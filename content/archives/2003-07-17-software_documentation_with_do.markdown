---
layout: post
title: "Software Documentation with DocBook, Part 1"
date: "2003-07-17T18:29:00+01:00"
comments: false
categories: 
---

<p>The document for <a href="/iqgen">iQgen</a> could use some overhaul, both in terms of content as well as form. As usual, that's the task nobody is that keen on doing, so it's left to me. </p>
<p>Thinking about the right way to do this, I decided to move everything to DocBook (it's XML following a self-made schema right now). While I'm at it, I thought I might as well document tools and approach I use as I move along.</p>
<p>The <a href="http://trieloff.net/docbook/" title="Software Documentation Weblog">Software Documentation Weblog</a> is a nice starting point for some information related to DocBook (apart from <a href="http://trieloff.net/docbook/">official book site</a>). The <a href="http://docbook.sourceforge.net/">DocBook Open Repository Project</a> contains XSL (and DSSSL) stylesheets to generate different output formats from DocBook instances (the DocBook DTD itself is maintained by <a href="http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=docbook">OASIS</a>).
The main benefits of DocBook for me are:</p>
<p>
</p><ul>
<li>I don't have to invent new XML constructs, since DocBook defines a whole bunch of them</li>
<li>There is a huge number of stylesheets that can transform DocBook instances into the most important output formats, being, for me, HTML, PDF, MS HTMLHelp and JavaHelp</li>
<li>I get to play around with a bunch of new stuff ;-)</li>
</ul>

<p>Working with the documentation is also a nice excuse to try out  &lt;oXygen/&gt;, which I wanted to do</a> anyway.</p>

