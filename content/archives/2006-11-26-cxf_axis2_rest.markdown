---
layout: post
title: "CXF, Axis2, REST"
date: "2006-11-26T20:06:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.bloglines.com/blog/sanjiva?id=166">Sanjiva Weerawarana believes I&#8217;m wrong</a> in <a href="/blog/st/2006/10/27/rest_and_celtixfire.html">considering CeltixFire&#8217;s REST support</a> superior to Axis2&#8217;s:</p>

<blockquote>
<p>The only addition is some Java5 annotations for indicating whether the operation should have a GET binding or a POST binding etc.. Definitely a nice way to do it but does that make a class into a resource? I think not.</p>
</blockquote>

<p>Of course that doesn&#8217;t turn a class into a resource, but it&#8217;s a significant addition nonetheless. If you take a look at <a href="http://fisheye3.cenqua.com/browse/celtixfire/trunk/rt/bindings/http/src/test/java/org/apache/cxf/binding/http/bare/CustomerService.java?r=467368">this example</a> &#8212; always assuming I&#8217;m understanding it correctly &#8212;, what you get is meaningful resource URIs with mappings to methods according to HTTP verbs. While I&#8217;m not at all sure that something like CXF is needed to implement a RESTful solution, at least the external interface seems to look like <a href="/blog/st/2006/06/30/rest_vs_soap_oh_no_not_again.html">what you&#8217;d end up with</a> if you just used servlets.</p>

<p>If, for some unfathomable reason, you are still interested in this endless debate, a huge thread has emerged in the SOA discussion group over the weekend (<a href="http://tech.groups.yahoo.com/group/service-orientated-architecture/message/6423">here</a> and <a href="http://tech.groups.yahoo.com/group/service-orientated-architecture/message/6438">here</a>).</p>


