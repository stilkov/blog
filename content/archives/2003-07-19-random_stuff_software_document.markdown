---
layout: post
title: "Random Stuff: Software Documentation with DocBook, Part 3"
date: "2003-07-19T13:59:00+01:00"
comments: false
categories: 
---

<p>Continuing from <a href="/blog/st/2003/07/software-documentation-with-docbook-part-1/" title="Random Stuff: Software Documentation with DocBook, Part 2">part 2</a>, a test of <a href="http://xmlwriter.net/">XMLWriter </a> (suggested by <a href="http://trieloff.net/docbook/archive/000398.html">Lars Trieloff</a>) did not really convince me. I gave <a href="http://www.intellij.com">IDEA</a>, which I use for Java development, a try, but it went berserk when I asked it to validate against the DocBook DTD. So at the moment, I'm back at <a href="http://www.oxygenxml.com/buy.html">oXygen</a>, which is not the fastest, but still the best of the lot so far. <br />
BTW, I don't have any problems with using Java desktop apps in general; but unless they're really well done, one area that they have huge problems is text editing. So my next try will be <a href="http://www.xmlmind.com/xmleditor/">XMLmind XML Editor</a> to see how usable it is ...</p>
<section class="comments">

<div class="comment" id="comment-59">
On <a href="#comment-59" title="Permalink to this comment">July 19, 2003 11:18 PM</a>, <a href="http://talios.blog-city.com" title="http://talios.blog-city.com" rel="nofollow">Mark Derricutt</a>
said:
<p>I use XMLMind&#8217;s XXE quite alot for my DocBook authoring, and love it.  Its fast to use, easy to operate, and once you learn some of the quick keys very nice to use.  ( ctrl-click and shift-click on a node type in the document path at the top to insert before/after the current section ).</p>

<p>It&#8217;s also extentable via scripting, and plugins ( although I&#8217;ve not yet tacked that side ).</p>

<p>The professional verion has a FOP plugin built in for PDF generation, but I have my PDFs built server side with Saxon/FOP running from the Anthill build server.</p>

<p>Now I just have to convince the others at work that DocBook is good.</p>


<div class="comment" id="comment-60">
On <a href="#comment-60" title="Permalink to this comment">July 19, 2003 11:20 PM</a>, <a href="http://talios.blog-city.com" title="http://talios.blog-city.com" rel="nofollow">Mark Derricutt</a>
said:
<p>Also - one thing to be aware of with XXE is that it doesnt handle external entity includes.  When it loads and parses the XML file, it will include them in memory, and when saving, write out one large file without said entities.</p>

<p>The forthcoming version is supposed to have XInclude support thou.</p>


</section>

