---
layout: post
title: "What's the Use of UDDI"
date: "2004-04-20T22:48:00+01:00"
comments: false
categories: 
---

<p><a href="http://schneider.blogspot.com/2004_04_18_schneider_archive.html#108230245410098039">Jeff says</a>:</p>

<blockquote>I&#8217;d love to see someone try to explain to me why UDDI isn&#8217;t a complete piece of shit. Justify it - I&#8217;m listening.</blockquote>

<p>I believe when you consider setting up the registry part of an SOA &mdash; something I believe you&#8217;ll do sooner or later, at the latest when you have developed the first bunch of services &mdash; you need to decide which approach you want to take:</p>

<h1>Chaotic, self-organizing using concepts such as full text search, more peer-to-peer than centrally organized</h1>

<h1>Highly structured, planned in advance, with explicit metadata relationships, based on categorization schemas designed up front</h1>

<p>UDDI clearly is not a good match for option 1. If you want to do this, you&#8217;re clearly better off maybe using some XML database that supports REST-based XQuery/XPath interaction and maybe a full-text search. I&#8217;m not aware of any standard in this area yet. With option 2, you would be looking for something that defines how data is organized, how to associate metadata, how to define the structure of said metadata. I&#8217;m only aware of one standard specifically targeted at doing this in an SOA context, and that is UDDI. Surely you can build something of your own, and as usual it will likely match your requirements perfectly (if you are doing perfect requirements engineering and software development, that is). Of course you&#8217;d also lose all of the advantages associated with a standard - like available documentation, people skills, tools, existing definitions, different implementations to chose from, etc.</p>

<p>Still, I believe both options are fine given the appropriate circumstances. In an Internet scenario, I believe UDDI is not a good idea at all. The same is true for highly innovative, independent peers. You will probably go with the second option if you are trying to find a solution for a large organization such as a Fortune 500 company; and while I have a lot of things to criticize about UDDI as it is, I still believe it&#8217;s the best strategy for this option currently available.</p>


