---
layout: post
title: "SSDL Comments"
date: "2005-02-16T00:01:00+01:00"
comments: false
categories: 
---

<p>I have taken a closer look at <a href="http://ssdl.org">the SSDL effort</a>, and &#8212; similarly to <a href="http://www.jacek.cz/blog/archives/000054.html">Jacek</a>, although definitely with a lot less detailed knowledge &#8212; have mixed feelings. Some unordered comments follow &#8230;</p>

<ul>
<li>I don&#8217;t see how the idea of describing headers as part of the contract can work. WSDL (1.1, at least) leaves this out completely, which is bad; SSDL puts the header description in the contract, which is different - but just as bad. One of the benefits of SOAP is that one can emulate a sort of crude aspect orientation by spec&#8217;ing out a way to use SOAP headers to implement a technical feature, such as reliability or security, and combine it with arbitrary business contracts. Within the WS-* stack, the model to do this is to use a policy to specify orthogonal attributes that apply to e.g. an endpoint. What&#8217;s the analogy here?</li>
<li>I really like the idea of using Protocols as extensions to a base spec. </li>
<li>I&#8217;m not sure whether SSDL can be used to specify both sides of a communication, and if so, how the respective definitions would be related.</li>
<li>I am not totally convinced of the benefits one gains by dropping WSDL&#8217;s <code>interface</code> and <code>operation</code> elements &#8212; names are just names. </li>
<li>If SSDL aims to be a WSDL alternative, the spec itself should not reference WSDL &#8212; this way, it only adds complexity instead of reducing it (I still have to read and understand WSDL before I can make sense of SSDL).</li>
<li>I positively <em>hate</em> the InfoSet-speak of W3C specs, and it&#8217;s a pity it has found its way to this spec as well :-)</li>
</ul>

<p>Anyway, for a first release the content, amount of information, quality and layout is great! It&#8217;ll be interesting to see whether SSDL, or (more realistically, some of its ideas as least) find their way into the mainstream.</p>

<p>(On a related note, and somewhat unfairly, I would have been totally enthusiastic had SSDL been the Relax NG of contract languages &#8230; maybe some other time :-) )</p>


