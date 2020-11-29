---
layout: post
title: "MEST Non-Semantics"
date: "2005-01-30T23:55:00+01:00"
comments: false
categories: 
---

<p><a href="http://hyperthink.net/blog">Steve Maine</a>, in <a href="http://hyperthink.net/blog/PermaLink,guid,7de8743c-29e0-46a9-ba8f-ee86c4198813.aspx">one of his posts</a> from the <a href="/blog/st/2005/01/30/wsaddressing_and_protocol_independence.html">permathread</a>, asks some questions about <a href="http://savas.parastatidis.name/2004/11/09/92ede84c-ca1f-41ab-8feb-8ba50d07e86f.aspx">MEST</a>. I also have problems with Savas&#8217;s concept, although I&#8217;m not sure they are the same: If there&#8217;s just one single generic application semantic, there&#8217;s not much point in having it. In REST, there&#8217;s a small set of verbs with different semantics. I think the minimal number you can reduce them to is 2, because at that level, you still can argue that your infrastructure, consumers and providers can treat them differently (which is, IMO, the whole point of a generic interface &#8212; enable generic applications to interoperate). </p>

<p>For some time, I carried around the idea of doing something REST-like with a pure message-oriented, SOAP-like approach: Differentiate between only two different generic verbs, GET and POST; encode this in the messages; have the infrastructure use this information. But as soon as you start encrypting your messages, this fails since the information about the verb is no longer accessible. (In fact, this <a href="http://www.markbaker.ca/2002/09/Blog/2005/01/17#2005-01-stefan">is the single bit Mark mentioned</a> some time ago.)</p>


