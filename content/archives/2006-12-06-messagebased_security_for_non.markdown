---
layout: post
title: "Message-based Security for non WS-*, non-XML Use Cases"
date: "2006-12-06T23:10:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.stucharlton.com/blog/archives/000116.html">Stu Charlton writes about</a> message-level security features:</p>

<blockquote>
<p>The question is &#8212; why did we need to build these in a SOAP/XML stack that broke the semantics of HTTP and treats all other forms of data as second-class citizens?</p><p>I don&#8217;t think XML is the centre of the web universe &#8212; JSON is catching on like fire, and binary media types continue to grow in variety, etc. For some reason, people thought that all that businesses want is text data &#8212; the binary stuff can be shoved into Base64 or MIME attachments. What happens when we need to apply our XML security specs on top of them? Oops! &#8212; enter MTOM. Today, if I want to secure non-XML data within an XML-based security network, I have many layers of inert redundancy and complexity.</p>
</blockquote>

<p>I totally agree. I tried to highlight the lack of a need for something like MTOM in REST <a href="/blog/st/presentations/2006/REST-The-Better-Web-Services-Model.pdf">in my BeJUG presentation</a> &#8212; one more example of a problem that could have been avoided had people used the Web instead of abusing it.</p>


