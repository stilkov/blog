---
layout: post
title: "MOF <--> XML, UML <--> XHTML"
date: "2005-01-07T09:23:00+01:00"
comments: false
categories: 
---

<p><a href="http://pluralsight.com/blogs/dbox/archive/2005/01/06/4785.aspx">Don Box</a> has written a response posting after our discussion about DSLs and UML. A point I only noticed during that discussion was that there is in fact a very nice analogy with MOF/UML and XML/XHTML &#8212; with a lot of arguments that could easily be interchanged between the two domains:</p>

<ul>
<li>If I build my own MOF meta-model (or DSL, if you prefer), I can explicitly build what I want &#8212; nothing unneeded, just what I require. The same is true if I design my own XML language.</li>
<li>If I instead use UML, I get a lot of pre-defined functionality and semantics, many of which I&#8217;ll be able to use, and a lot of unneeded baggage. The same is true with XHTML &#8212; I get a lot of things for free that I can probably use, but I also am unlikely to use 100% of it.</li>
<li>In both cases, I&#8217;ll be able to use general-purpose tools &#8212; those that understand MOF in the first case, those that can do XML in the second case.</li>
<li>With UML, I can use a CASE tool that understands what a class, an operation, a package etc. is. With XHTML, I get editors that know paragraphs, tables, blockquotes etc.</li>
<li>Both UML and XHTML offer their own extensibility mechanisms &#8212; much as the technology on the next meta-level does. (In fact, this is the reason I picked XHTML instead of HTML for the comparison).</li>
</ul>

<p>I&#8217;m sure there are many more similarities that I didn&#8217;t think of. It&#8217;s also interesting to take a look at an <a href="http://www.tbray.org/ongoing/When/200x/2004/06/17/CustomSchemas#p-11">old posting</a> by <a href="http://www.tbray.org/ongoing/">Tim Bray</a>:</p>

<blockquote>
<p>Here&#8217;s the real dirty secret; every time you cook up your own tag-set, you lose interoperability. The deep semantics that XML tags are labels for can&#8217;t be captured in any one of a schema or a write-up or lunchroom chats or running code; they need all of these things.
(The notion, inherent in the phrase &#8220;custom schemas&#8221;, that a schema captures the essence of a language, is just totally wrong).
The lesson is, to the extent that you can use a language that someone else already wrote, you win.</p>
</blockquote>

<p>Tim is talking about Office document formats, but obviously the reasoning works for the DSL/MOF/UML debate as well.</p>


