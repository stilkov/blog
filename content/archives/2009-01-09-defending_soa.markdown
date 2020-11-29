---
layout: post
title: "Defending SOA"
date: "2009-01-09T08:11:00+01:00"
comments: false
categories: 
---

<p>It's been a while, but I clearly remember getting involved in MDA (Model Driven Architecture) <em>ages</em> ago (i.e. in about 2002, originally <a href="http://www.theserverside.com/news/thread.tss?thread_id=17053">here</a>, now preserved <a href="/blog/st/2003/07/mda_from_a_developers_perspective.html">here</a>). It was all the rage, until it suddenly became uncool. Much of it was deserved, but much wasn't. I feel the same is true with SOA: It's plain to see that the cool kids associate big, fat, dumb, enterprisey ideals with SOA and view it as something to ridicule.</p>

<p>I think they're wrong.</p>

<p>I think there is a strong case to be made for the core ideas of SOA. In fact, I don't think there's an alternative. On the other hand, it's been oversold with so many ridiculous promises that I can't really blame people for not wanting to be part of it.</p>

<p>My interests are somewhat ambiguous. <a href="/">My company</a> (and thus myself) make money doing SOA: talking about it, conducting workshops, offering trainings, and actually implementing it in companies. On the other hand, we've never been really part of the SOA mainstream, since many of our views were pretty different from many others'. (I'm not necessarily arguing better, but different.) We've always viewed it from a technical perspective, we've always claimed it had nothing to do with vendors, and most recently (i.e. in the last couple years) we've argued that RESTful HTTP is a much better way to achieve it than WS-*. We do Java, J2EE, and Java EE, but we do more and more Ruby on Rails projects – and I don't see this as a conflict at all.</p>

<p>Here are my reasons to believe in SOA, intended for consumption by those who think it's just a load of crap:</p>

<p>In practically any company, many individual systems make up the complete IT landscape. They run on different technologies, they've been built using different tools. Some come from commercial vendors, some may have been built in-house. After a short while, you will want to connect them because there's value in doing so. You can do this in a point-to-point way, exporting some data here, periodically importing it over there, via files, share data bases, or individual integration solutions. This will lead to a brittle, unmanageable landscape unless you have only two or three applications. Because it is so hard to integrate systems, you (and your vendor) will opt for making them fatter and fatter, unless you have to invest an absurd amount of effort (or money) to change them. Introducing a big, fat, centralized integration middleware bottleneck in the middle – whether you call it an EAI solution or an enterprise service bus – is not a good solution, although it might seem tempting at first: you become dependant on the single vendor, who will get bought by somebody else, go out of business, or become legacy after you merge with your competitor who has bought another product of this type more recently. </p>

<p>So what do you do instead? You treat the problem in a reasonable way – by reducing the amount of effort for integrating individual systems by limiting the amount of different technologies used at the interface layer, by picking a good interface abstraction, and by modularizing the big applications into smaller chunks. You take care not to depend on a particular vendor, be it a middleware or an applications vendor; you want to make it easy to (re)use stuff. </p>

<p>That's how I define SOA: A software architecture that is not applied to an individual system, but to a set of systems within a company; focusing on network/wire interfaces, not implementation; standardizing whatever is necessary to ensure smooth communication and serendipitous re-use, but nothing more. Give it any name you like, I don't care – I still believe this is a reasonable approach. In fact, this is what Ruby on Rails folks end up doing: build small, focused applications and integrate them using a standard technology and architecture for distributed systems (HTTP/REST). </p>

<p>Defined this way, it doesn't really matter what particular technology you pick, or what approach you take to get from here to there. In my personal opinion, the best technology to pick for this purpose is RESTful HTTP, offering significant advantages over SOAP/WSDL-based web services and any other integration technology I'm aware of. I believe the best approach to introduce it is not top-down, but rather evolutionary, defining a rough set of guidelines, but not aiming to define an "enterprise anything" model.</p>

<p>YMMV.</p>

<p>(BTW, I wrote this because of <a href="http://www.infoq.com/news/2009/01/is-soa-dead">this debate</a>. Check it out, but be sure to ignore the trolling in the comments.)</p>

<section class="comments">



<div class="comment" id="comment-1913">
On <a href="#comment-1913" title="Permalink to this comment">January  9, 2009  1:47 PM</a>, <a href="http://colinjack.lostechies.com" title="http://colinjack.lostechies.com" rel="nofollow">colinjack.myopenid.com</a>

<a href="http://colinjack.lostechies.com" class="commenter-profile"></a>
said:
<p>Biggest problem, for me, with term SOA is the fact that people like Erl have presented their interpretation (entity services, reuse, upfront, blueprints and all that) as the only way to view SOA. From the other-side vendors have also repackaged the term, but all of this is covered well in this PDF: <a href="http://www.rgoarchitects.com/Files/SOADefined.pdf" rel="nofollow">http://www.rgoarchitects.com/Files/SOADefined.pdf</a></p>

<p>My particular viewpoint is a bit different. When I think of SOA I think of big autonomous business services such as Finance or CRM. They expose multiple endpoints/resources, they publish messages, they wrap domain models/databases and also form part of the language we use when talking to the business. What this means is that the resource for a Customer in the context of the Finance service might be completely different from the resource for it in the CRM service, which is fine. We can then say that where possible communication between these large autonomous business services is via pub-sub (http://msdn.microsoft.com/en-us/architecture/bb245672.aspx).</p>

<p>At the REST resource level this frees me up to be more technical, for example I can let caching affect my resource design because although the large level autonomouse services and the domain models are understood by the business (and make up the ubiquitous language) the resources are more technical (as they have to be if I want to fully embrace REST).</p>

<p>Thats my way of looking at the system we&#8217;re just starting workin on anyway, dunno if its a viewpoint I&#8217;ll keep.</p>


</section>

