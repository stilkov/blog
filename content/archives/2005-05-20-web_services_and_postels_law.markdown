---
layout: post
title: "Web Services and Postel's Law"
date: "2005-05-20T22:14:00+01:00"
comments: false
categories: 
---

<p>A recent discussion made me wonder why we insist to treat Web services in a way that ignores Postel&#8217;s Law. This is the name a statement originally made under the heading &#8220;Robustness Principle&#8221; in <a href="http://www.ibiblio.org/pub/docs/rfc/rfc793.txt">RFC 793</a> (hat tip to <a href="http://diveintomark.org/archives/2004/01/08/postels-law">Mark Pilgrim</a>) goes by:</p>

<blockquote>
<p>TCP implementations will follow a general principle of robustness:  be
conservative in what you do, be liberal in what you accept from
others. </p>
</blockquote>

<p>This shouldn&#8217;t be any different in a Web services scenario, where instead XML messages are received with the expectation to conform to a schema defined in some description language (usually W3C XML Schema + WSDL):</p>

<ul>
<li>When a message is received, the receiver should be liberal and accept it if it can somehow work with it. </li>
<li>When a message is sent, the sender should be conservative; the message should strictly validate against a publicly defined schema. </li>
</ul>

<p>I&#8217;m not sure whether this implies that a more rigid schema language (such as W3C XSD) should be applied and validated against on the sending side, while a more flexible one such as Schematron might be more appropriate on the receiving side. In any case, the level of conservatism introduced by <a href="/blog/st/2005/05/18/rpcstyle_web_services.html">generating and compiling receiver-side code from the schema</a> - at least in the way we do it today - reduces robustness.</p>

<p>A possibly great way - taken in Microsoft&#8217;s Indigo to a certain degree, if I understand <a href="http://pluralsight.com/blogs/dbox/archive/2005/02/12/5819.aspx">some earlier samples</a> correctly - would be to generate code only for the subset that is actually used, e.g. specifying what to generate code for by using XPath expressions. Is there an XML binding for Java that works this way? I couldn&#8217;t find one within a few minutes.</p>

<section class="comments">

<div class="comment" id="comment-548">
On <a href="#comment-548" title="Permalink to this comment">March 29, 2007 12:31 PM</a>, yadnem
said:
<p>somehow related is : </p>

<p><a href="http://incubator.apache.org/servicemix/servicemix-bean.html" rel="nofollow" /><a href="http://incubator.apache.org/servicemix/servicemix-bean.html" rel="nofollow">http://incubator.apache.org/servicemix/servicemix-bean.html</a></p>

<p>for example the XPath annotation. </p>

<p><a href="http://fisheye6.cenqua.com/browse/~raw,r=506389/servicemix/tags/servicemix-3.1/deployables/serviceengines/servicemix-bean/src/test/java/org/apache/servicemix/bean/beans/PlainBean.java" rel="nofollow" /><a href="http://fisheye6.cenqua.com/browse/~raw,r=506389/servicemix/tags/servicemix-3.1/deployables/serviceengines/servicemix-bean/src/test/java/org/apache/servicemix/bean/beans/PlainBean.java" rel="nofollow">http://fisheye6.cenqua.com/browse/~raw,r=506389/servicemix/tags/servicemix-3.1/deployables/serviceengines/servicemix-bean/src/test/java/org/apache/servicemix/bean/beans/PlainBean.java</a></p>

<p>&#8230; takes the interesting parts of the message and ignores the rest &#8230;</p>


</section>

