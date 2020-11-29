---
layout: post
title: "What's so New About SOA?"
date: "2004-09-09T10:00:00+01:00"
comments: false
categories: 
---

<p>A great <a href="http://www.neward.net/ted/weblog/comment.jsp?entryID=1094709676078">discussion</a> going on at <a href="http://www.neward.net/ted/weblog/">Ted Neward&#8217;s</a> about whether, and if so, how, a service differs from a simple RPC interface. (Incidentally, there&#8217;s a very similar discussion going on in the <a href="http://groups.yahoo.com/group/service-orientated-architecture/">SOA mailing list</a>.) Since Ted&#8217;s weblog software keeps throwing exceptions when I try to leave a comment there, I&#8217;ll just post it here. </p>

<p>I think there is a difference between a service and, say, a component, and I hate the argument that an SOA is what we have been doing with CORBA, DCOM, and RPC. If you define SOA so that it is compatible with those approaches, I agree that it would be &#8220;just a buzzword&#8221;. </p>

<p>To me, there is a pretty clear distinction between a service and an RPC procedure, an EJB session bean or a DCE interface. Let me try to enumerate some points:</p>

<ol>
<li><p>A service has no association to a particular programming model; instead, it is defined by the logical protocol you use to talk to it. This protocol includes the definition of the messages you use to communicate with it, and the patterns those messages are exchanged in. Request/Response is perfectly fine, as is one-way fire and forget.</p></li>
<li><p>Messages are explicit, not just an implementation detail of how your parameters are marshalled. Ideally, the messages themselves have business semantics on their own, without being tied to any particular operation. Re-use of existing business vocabularies, such as e.g. UBL, is possible simply by exchanging a message as defined by its Schema there.</p></li>
<li><p>There is a way to address non-functional aspects, such as message correlation in asynchronous scenarios, transaction or process contexts, independently of the business semantics (e.g. within SOAP headers in the case of Web services), and this method is open to extension not just by middleware or toolkit vendors, but by users.</p></li>
<li><p>Policy governs how parties such as a service provider and a service consumer communicate, with negotiation ideally taking place at the latest possible time (during runtime).</p></li>
</ol>

<p>And to offer some answers to your questions: If I used some other term as an example, let&#8217;s say &#8220;component&#8221;, I could argue that a Web browser, a Web server and a database all are &#8220;components&#8221;. In the same way, they are all &#8220;services&#8221;. True, but utterly useless.</p>

<p>So IMO, the database, the Web server, and the Web browser are definitely not services.</p>

<section class="comments">

<div class="comment" id="comment-359">
On <a href="#comment-359" title="Permalink to this comment">September 10, 2004  5:11 PM</a>, Daniel
said:
<p>It seems to me that the most salient new feature of services vs. components is discovery. With stuff like WSDL and UDDI on the horizon, services advertise their capabilities and their interfaces. Although it was possible with components, it was always ad-hoc and thus not widely interoperable. Now, not only services are built with discovery in mind from the ground up, but there is a standard way to discover what a service provides.</p>


</section>

