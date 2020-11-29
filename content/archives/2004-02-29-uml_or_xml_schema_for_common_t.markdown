---
layout: post
title: "UML or XML Schema for Common Types?"
date: "2004-02-29T00:04:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.mindreef.com/people/markericson/weblog/comments/201_0_29_0_C/">Mark Ericson</a> commented on a blog entry from <a href="http://blum.typepad.com/coarsegrained/2003/11/xml_schemas.html">Adam Blum</a> regarding the usage of XML, or to be more specific, XML Schema, to describe common business types:</p>

<blockquote> XML schema is one of many concrete ways of representing the types, there are certainly many others including our programming languages and database schema. [&#8230;]  I haven&#8217;t thought of myself as a UML evangelist, but perhaps UML can provide a richer type modeling environment that promotes type reuse and can be mapped to both XSD and the &#8216;layered standard&#8217; when needed.</blockquote>

<p>I totally agree with Mark. In his answer, Adam (who actually alerted me to this comment, claiming it could have come from me ;-)) suggests that UML should be used by shops that are doing it anyway, while using XSD seems to become the default way of doing this.
I disagree with Adam: I strongly believe that it&#8217;s foolish to believe that common business types specified in XML Schema are a good idea if you are concerned about protecting your investments in the future. XSD just happens to be extraordinarily popular right now; and in time, it will be replaced by something else (RelaxNG? Schematron? Something totally different? Who knows.) In addition, XSD, even when combined with WSDL and the whole bunch of WS-* standards, is only a small part of your common business knowledge (the service interface layer), and captures zero information about your implementations.
Thus, I strongly believe that a common business knowledge repository should be on a meta-level, and be used to generate other representations &mdash; with XML Schema just being one of them, while others could be SQL DDL, Java, C#, or whatever your current technical environment requires.</p>

<section class="comments">

<div class="comment" id="comment-223">
On <a href="#comment-223" title="Permalink to this comment">March  5, 2004  5:04 AM</a>, Adam Blum
said:
<p>Well I certainly don&#8217;t want to be put into the &#8220;UML is bad&#8221; camp. I think repositories of data types are a good thing, whether expressed in UML or XML Schema.  What seems to be happening already is companies building libraries of XML document schemas for to reflect common business events across the organization  It seems a small step (enabled by tools) from there to an XML Schema type repository.    </p>

<p>I think UML could possibly have been just as useful as the basis for this &#8220;common repository of types&#8221;. Presumably existing UML-oriented repository products have enabled this for quite some time (a decade at least?).  Are companies actually doing this around UML and I&#8217;m just not aware of it?  If not, is there a reason why?</p>


</section>

