---
layout: post
title: "XML Schema usage and WinFS"
date: "2003-11-04T22:14:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.gotdotnet.com/team/dbox/default.aspx?key=2003-11-04T09:14:15Z" title="Don Box's Spoutlet">Don Box</a> writes:</p>
<blockquote>
As for WinFS's choice of coining a new schema language vs. using XML Schema, unless the WinFS data model is identical to the XML Infoset, it would be a mistake to bastardize XSD to describe something it wasn't intended to describe. WSDL/1.1 made that mistake once before (see use="encoded") and it's taking years to undo the damage.
</blockquote>
<p>I'm seriously puzzled, and I would kindly ask anyone to explain this to me. I was always convinced that it's actually <source>use="encoded"</source> where XML Schema is <strong>not</strong> used, while it is with <source>use="literal"</source>. So isn't this backwards &mdash; shouldn't the critique of WSDL/1.1/encoded be that it did <strong>not</strong> use XML Schema for something it was intended for?</p>
<p><strong>Update:</strong> After a longish IM session with <a href="http://www.radovanjanecek.net">Radovan</a>, I believe this is more due to a misunderstanding on the way the original article was phrased. I was wrong in assuming that WSDL/1.1 and SOAP encoding did not use XSD - it used it, but added WSDL-specific extensions, e.g. for array, while the use=literal sticked to pure XSD.</p>

