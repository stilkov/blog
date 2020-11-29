---
layout: post
title: "Even more on WSDL vs. IDL"
date: "2004-04-07T09:25:00+01:00"
comments: false
categories: 
---

<p>This is really getting interesting ;-) <a href="http://www.markbaker.ca/2002/09/Blog/2004/04/06#2004-04-webber-wsdl-idl">Mark points</a> to an <a href="http://jim.webber.name/#060420042228">update from one of the authors</a>, Jim Webber:</p>

<blockquote>The killer differentiator is that for a given WSDL portType (or soon &#8220;interface&#8221; in WSDL 2.0) there is no implication that the portType is &#8220;implemented&#8221; by a specific class at the back-end. It might make sense for you to do that in certain situations, but at other times it might make sense for one operation in a portType to be handled by one computing system and another operation from the same portType to be processed by a completely different system.</blockquote>

<p>That is, indeed, a good point I was not really aware of before.  </p>

<p>Mark <a href="http://www.markbaker.ca/2002/09/Blog/2004/04/06#2004-04-webber-wsdl-idl">follows up</a> with asking what a successful response to a message in &#8220;contract mode&#8221; would look like, and that an HTTP 200 response code would not have semantic meaning with regards to the message. Right, it doesn&#8217;t &mdash; that&#8217;s why the response code doesn&#8217;t matter as much as the response&#8217;s content itself, and why we have things such as <a href="http://www-106.ibm.com/developerworks/library/ws-rm/">WS-ReliableMessaging</a>. You can maybe fault the WS community for misusing the HTTP application protocol as a transport protocol, but at least it&#8217;s done so consistently ;-)</p>


