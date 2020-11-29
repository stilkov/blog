---
layout: post
title: "More on WSDL and XML Schema"
date: "2004-04-07T09:12:00+01:00"
comments: false
categories: 
---

<p><a href="http://webpages.charter.net/chrisfer/archives/2004_04_01_oldrants.html#108130652222632174">Chris Ferris</a> follows up on <a href="/blog/st/archives/000827.html">my take</a> on the WSDL-is-not-IDL article (as does <a href="http://www.markbaker.ca/2002/09/Blog/2004/04/06#2004-04-stefan-wsdl">Mark Baker</a>). </p>

<p>While I agree that the main problem is one of <a href="/blog/st/archives/000306.html">static typing tied to the schema</a>, I believe this is what XML Schema was intended to do. I may be wrong &mdash; I did neither follow nor look up history here &mdash; but the whole point of XML Schema seems to be to move from DTDs to something that resembles a programming language&#8217;s type system. I also still maintain that even if it&#8217;s theoretically possible to use something other than XSD with WSDL, this doesn&#8217;t matter for all practical purposes (since I don&#8217;t believe that a critical mass of tool vendors is to support, say, RELAX NG anytime soon).</p>

<p>I <a href="/blog/st/archives/000527.html">know</a> David Orchard&#8217;s <a href="http://www.pacificspirit.com/Authoring/Compatibility/ProvidingCompatibleSchemaEvolution.html">versioning article</a>, and it&#8217;s great and it shows how much he knows about XML Schema&#8217;s details and I&#8217;m going to use that information for my own Web services design work. Unfortunately, it also shows that all of the possible solutions differ only in the degree to which they suck. Versioning with XML should be, and I believe could be, trivially easy. Due to XML Schema, it clearly isn&#8217;t.</p>


