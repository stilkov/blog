---
layout: post
title: "More About Decentralized Media Types"
date: "2008-02-11T23:15:00+01:00"
comments: false
categories: 
---

<p><a href="http://steve.vinoski.net/blog/2008/02/11/more-about-decentralized-media-types/">Steve Vinoski</a> changes his mind:</p>

<blockquote>
<p>At the end of the day, I understand the various explanations for why decentralizing media types is not a good idea after all, and I agree with them.</p>
</blockquote>

<p><a href="http://stucharlton.com/blog/archives/000186.html">Stu Charlton</a> believes there&#8217;s merit to the idea, if not the exact implementation:</p>

<blockquote>
<ul>
<li>
There are many that feel a need to introduce a standardized &#8220;more information on this representation&#8221; hook , beyond just the IANA media type.
</li>
<li>
A URI likely is the best candidate format for this hook.
</li>
<li>
Other media types are already offering this feature inside the representation body (e.g. XMLNS declarations, GRDDL declarations in HTML) &#8230;.
</li>
<li>
&#8230; But to work best with the deployed web, and to be most general-purpose, it seems this URI should be somewhere in the HTTP header.
</li>
<li>
The debate is mostly matter of whether a) there is such a thing as a general purpose &#8220;more info on this media type&#8221; resource , and b) if so, where to place the link, so that it fits well with the deployed Web and doesn&#8217;t necessarily cause problems for a future Semantic Web.
</li>
</ul>
</blockquote>

<p><a href="http://netzooid.com/blog/2008/02/10/the-universal-data-model/">Dan Diephouse</a> has no problem being uncool:</p>

<blockquote>
<p>There is this idea that we should stay far far away from anything that even remotely reminds anyone of WSDL (even if its not an IDL) because it can be misused. I can’t believe that no one isn’t throwing up their arms against this idea.  I suppose this will make me very non-cool, but just because a tool can be used in a bad way doesn’t means that you should never use it.</p>
</blockquote>

<p><a href="http://www.snellspace.com/wp/?p=884">James Snell</a> is opposed to the whole idea:</p>

<blockquote>
<p>The key is to focus on solving specific, real world problems as opposed to coming up with kitchen sink solutions that are so generalized that they’re of no use to anyone.</p>
</blockquote>

<section class="comments">



<div class="comment" id="comment-1614">
On <a href="#comment-1614" title="Permalink to this comment">February 12, 2008  1:08 AM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>This reminds me of the SOAPAction HTTP header vs. the QName of the first child of the soap:body element.  Which one is the &#8220;normative&#8221; place to figure out what the payload is?  The SOAP spec invented the SOAPAction header, but then the WS-I Basic Profile effectively deprecated it.  But the WS-I couldn&#8217;t eliminate SOAPAction because that meant changing a W3C spec and a number of implementations counted the existence of SOAPAction to correctly dispatch calls.  So, the SOAPAction header was put in a weird purgatory of being both required and ignored at the same time.  </p>

<p>Part of my concern is that the open media type &#8212; parameterized or not &#8212; creates the same situation: two places where you identify payload format.  Which one wins?  My other concern is that the URI parameter is being pitched as a URL to a RDDL.  Shouldn&#8217;t namespace declarations and documentation locations be separate?.  Think of all the XML namespace names with an HTTP:// scheme and how many people believed they were live URLs.  </p>

<p>But I can live with the basic proposal: putting a parameter after a registered media type.  It&#8217;s a good compromise.  But the parameter should be a URN declaration only and it should be optional (at least for application-xml).</p>


<div class="comment" id="comment-1615">
On <a href="#comment-1615" title="Permalink to this comment">February 12, 2008 12:37 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>The SOAPAction header, IIRC, was deprecated because it was protocol-dependent (which the WS people wanted to avoid at all costs), so I don&#8217;t think this situation is exactly comparable. But you are right that there&#8217;s a problem when the proposed URI and the actual content don&#8217;t agree about the schema to be used &#8212; I don&#8217;t see any way around this  though.</p>


</section>

