---
layout: post
title: "SOAP vs. REST - Even More Comments"
date: "2006-02-23T22:57:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.dulciana.com/">Mike Glendinning</a> writes comments that are longer and more elaborate than most of my blog entries &#8212; check it out <a href="/blog/st/2006/02/22/more_soap_vs_rest_arguments.html#comments">here</a>. (You should get a blog, Mike.) I&#8217;ll try to address some of his points here:</p>

<ol>
<li><p>What is SOAP? I agree that &#8220;REST vs. SOAP&#8221; is basically just a wrong comparison; still, in a pars-pro-toto way, SOAP simply stands in for the WSDL+SOAP+some transport protocol+lots of extensions stack. It&#8217;s technically wrong, but OK for the purpose. (I&#8217;m the first to admit <a href="/blog/st/2005/03/05/beyond_soap_vs_rest.html">I changed my mind</a> on this.) </p></li>
<li><p>What is REST? Mike argues there&#8217;s no clear definition; I beg to differ. I find the REST definition in <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm">Fielding&#8217;s thesis</a> much more concise and detailed than any SOA definition I&#8217;ve seen so far, including my own. And as <a href="/blog/st/2004/10/07/on_rest.html">I&#8217;ve pointed out before</a>, the REST folks don&#8217;t argue very much with each other when they&#8217;re questioned whether something is to be considered RESTful or not.</p></li>
<li><p>REST is RPC &#8212; no, it&#8217;s not. Request/Response and RPC are different beasts. RPC aims to turn a network interaction into an implementation detail by means of proxies (stubs and skeletons). Request/Response is simply a (very common) communication pattern. </p></li>
<li><p>HTTP more complex than SOAP &#8212; I have to agree with Robert&#8217;s comment: if you simply take SOAP, especially 1.2 (which is a pretty good spec), it may be less complex; if you consider the contents and the value of HTTP, you&#8217;d have to map it to e.g. WS-RF (shudder).</p></li>
</ol>

<p>Tim Bray has picked up on the debate, as have <a href="http://blogs.msdn.com/mikechampion/archive/2006/02/23/537640.aspx">Mike Champion</a> (again) and <a href="http://www.1060.org/blogxter/entry?publicid=D06291B67CB855C5250C81341295B366">Steve Loughran</a>. Fun and entertainment, as usual &#8230;</p>


