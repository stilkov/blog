---
layout: post
title: "XProc: An XML Pipelining Language"
date: "2006-10-11T10:11:00+01:00"
comments: false
categories: 
---

<blockquote>
<p>An XML Pipeline specifies a sequence of operations to be performed on one or more XML documents, producing one or more XML documents as output. Steps in the pipeline may read or write non-XML resources as well.</p>
</blockquote>

<p><a href="http://www.w3.org/TR/2006/WD-xproc-20060928/">XProc</a> is currently a W3C working draft. Despite the involvement of <a href="http://norman.walsh.name/">Norm Walsh</a>, whom I greatly respect, I wonder whether we actually need another programming language with the worst possible syntax.</p>

<section class="comments">

<div class="comment" id="comment-1058">
On <a href="#comment-1058" title="Permalink to this comment">October 19, 2006 10:21 PM</a>, <a href="http://norman.walsh.name/" title="http://norman.walsh.name/" rel="nofollow">Norman Walsh</a>
said:
<p>We need it because without it we have no interoperable way of passing around XML documents for processing. I can send you an ant script, except maybe you don&#8217;t have Ant or even Java installed. I can send you a Makefile, except maybe you don&#8217;t have make or are on a platform that doesn&#8217;t have make. I can send you &#8230; well, you get the idea. Small. Declarative. Simple. Interoperable. That&#8217;s the plan.</p>

<p>As for &#8220;the worst possible syntax&#8221;, I&#8217;m afraid that&#8217;s likely to be a matter of opinion. But it&#8217;s not impossible to imagine that an alternate, compact syntax for XProc might be devised.</p>


<div class="comment" id="comment-1059">
On <a href="#comment-1059" title="Permalink to this comment">October 20, 2006  8:52 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>But if I send someone an XProc script, I assume they have an XProc processor in place &#8230; I believe there are two questions I have: the first one is whether XML pipeline processing is something that can be (and should be) described in a generic language, such as Python, Java, or Ruby, or whether it&#8217;s a good candidate for a DSL. I&#8217;m a DSL fan, so the I would probably agree that the answer is yes. As to the &#8220;worst possible syntax&#8221; thing, I did not intend to criticize the specific XML language, rather the usage of XML in the first place.</p>


<div class="comment" id="comment-1060">
On <a href="#comment-1060" title="Permalink to this comment">November 30, 2006  3:26 PM</a>, <a href="http://norman.walsh.name/" title="http://norman.walsh.name/" rel="nofollow">Norman Walsh</a>
said:
<p>You&#8217;re right about assuming they have an XProc processor. I hope that XProc processors quickly become as ubiquitous as XSLT processors. One of my strongest design goals is to keep it small and simple so as to maximize that possibility.
I hope we see implementations in Python, Java, and Ruby (and C and PL/I :-) so that it&#8217;s easy to use regardless of your platform of choice.</p>

<p>As for XML, well, I have the polar opposite view. I think an XML pipeline language that wasn&#8217;t expressed in XML would be (almost) entirely pointless.</p>


<div class="comment" id="comment-1061">
On <a href="#comment-1061" title="Permalink to this comment">November 30, 2006  8:03 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<blockquote>
<p>As for XML, well, I have the polar opposite view. I think an XML pipeline language that wasn’t expressed in XML would be (almost) entirely pointless.</p>
</blockquote>

<p>Why? I know you&#8217;re using RELAX, I assume you&#8217;re using RNC as well. I believe the issues are very similar &#8212; maybe it&#8217;s just a question of priorities, whether to do the compact syntax first and then do the XML as an interoperable and easily parseable interchange format, or vice versa?</p>


</section>

