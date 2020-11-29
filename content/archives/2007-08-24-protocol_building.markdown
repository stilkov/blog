---
layout: post
title: "Protocol Building"
date: "2007-08-24T13:07:00+01:00"
comments: false
categories: 
---

<p><a href="/blog/st/2007/08/21/ease_of_development_rest_vs_rpc.html#c107603">In a comment</a>, Mike Glendinning (who really needs to get a blog of his own) challenges my claim that you end up building your own protocol when using web services instead of relying on an existing one when using RESTful HTTP.</p>

<p>As usual, I think Mike is right to a certain degree &#8212; when you build applications using RESTful HTTP approach, there is still a lot of application-specific behavior that is not defined by HTTP or REST. But there is <em>a lot</em> of application behavior that <em>is</em> part of the pre-defined protocol. Let&#8217;s take identification (URIs) and hyperlinks as an example. If I build two systems, each of them responsible for maintaining its own data elements, and a data item in System A is associated with one in System B, the approach I take is very different in the web services and REST worlds. Let&#8217;s use the systems &#8220;ContractManagement&#8221; and &#8220;Partner&#8221; as examples, with the &#8220;Contract&#8221; and &#8220;Partner&#8221; as the managed entities.</p>

<ul>
<li>In the web services approach, there&#8217;ll be operations like <code>getPartner(id: PartnerIdType) : Partner</code> and <code>getContract(id: ContractIdType) : Contract</code>. I can now save the ID of a partner as part of a contract and vice versa. To store and resolve this reference, I have to know the type of ID, the endpoint of the service and operation to invoke, and I need to be able to interpret the return type. Resolving references works according to a protocol I&#8217;ve just defined, and which is probably very different for distinct entities <em>even within a single system</em>.</li>
<li>In the RESTful HTTP approach, every entity (that is supposed to be externally accessible) would have its own URI, so I need to be able to store URIs. The operation is HTTP GET, the &#8220;endpoint&#8221; is included in the URI. I still have to understand the format, of course.</li>
</ul>

<p>This example shows that at least for the case of resolving a reference, REST/HTTP includes a standardized &#8220;protocol&#8221; that is <em>extremely useful</em> in almost every scenario you can possibly think of. The same is true for many other aspects that are part of the RESTful HTTP world &#8212; updating, creating, and deleting resources, or even triggering arbitrary processing; selecting one of many available formats; handling common error scenarios. In the web services world, I need to invent <em>a lot</em> of this myself &#8212; I concede there are things the web services stack standardizes which have no analogy in RESTful HTTP, but I still claim that those parts that <em>are</em> standardized yield many more benefits.</p>

<p>It&#8217;s my experience that practically everybody who spends some time discussing the relative merits of web services and REST/HTTP agrees that being able to identify &#8220;things&#8221; in a consistent manner is very useful. A URI is only useful if I can do something with it, which immediately leads to a common (&#8220;uniform&#8221;) interface. Being able to do a GET on resources immediately poses the question of whether everybody wants to see a resource in the same way &#8230; continue this for a while and you&#8217;ll inevitably arrive at REST, or something very similar to it.</p>


