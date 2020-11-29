---
layout: post
title: "10 Statements about SOA"
date: "2005-11-04T23:59:00+01:00"
comments: false
categories: 
---

<p><a href="http://schneider.blogspot.com/2005_10_30_schneider_archive.html#113102514893838258">Jeff Schneider</a> linked to and commented on <a href="http://www2.cio.com/analyst/report3932.html">Judith Hurwitz&#8217;s ten principles of SOA</a>, which somehow made me write down the first 10 SOA statements that came to my mind. Thanks to <a href="/blog/hw/">Hartmut</a> and <a href="/blog/mt/">Marcel</a> for early feedback &#8230; let me know what you think.</p>

<p><a name="1">1</a>. An SOA is primarily aimed at being an architecture for enterprise-wide usage. It is usable within a single application that is being decomposed using a services approach, but doing this makes the most sense when the ultimate goal is to arrive at a service landscape. For structuring applications internally, other technologies may be more appropriate.</p>

<p><a name="2">2</a>. A key concept within an SOA is loose coupling. Loose coupling has multiple dimensions, such as location, time, binding and address lookup, versioning, protocols and capabilities. It will not always be achievable, nor even desirable, to have loose coupling in all dimensions.</p>

<p><a name="3">3</a>. A service, as the primary concept within an SOA, encapsulates a business function that is accessed by means of messages, or documents, that are sent to it to request some function, which may possibly return a result message/document. With regards to their functionality, services are defined solely based on the type of documents they accept and emit. The number and type of documents a service can process define its &#8220;interface&#8221;, which some people prefer to call its &#8220;contract&#8221;. </p>

<p><a name="4">4</a>. The non-functional characteristics of a service are defined by means of a policy. Examples of aspects defined by policy are which security mechanism to apply, what transport or transfer protocol to use, and whether to perform reliable message delivery or not.</p>

<p><a name="5">5</a>. If you use Web services, you&#8217;re not necessarily doing SOA. Especially when you follow the examples and use the tools of the first generation, you can use Web services to build some of the worst RPC-style distributed computing systems ever. </p>

<p><a name="6">6</a>. You can do SOA without using Web services, but in general, that&#8217;s a bad idea. There are many benefits you can gain from Web services over distributed object technologies such as CORBA or DCOM, or messaging systems such as MQ or JMS, most notably with regards to loose coupling, interoperability, standards support and vendor independence.</p>

<p><a name="7">7</a>. A service, by definition, has a contract with its consumers, not with a runtime environment. This is one of the main aspects distiniguishing a service from a component (document-based interfaces being a close second).</p>

<p><a name="8">8</a>. In an advanced SOA, metadata plays a critical role in managing, administering, evaluating, optimizing, and evolving the services and their relationships. Whether metadata is created and maintained centrally and pushed towards the service endpoints, collected and cached in a central location, or maintained in a decentralized fashion, is a matter of choice.</p>

<p><a name="9">9</a>. Services can be combined and composed to build new services, or orchestrated to fully support a complete business process. Whether this is done using some programming language, or some engine with an associated declarative process specification language, is largely irrelevant.</p>

<p><a name="10">10</a>. Within an SOA, the focus is on the services, their contracts and policies, the standards being used, communication patterns and conventions, etc., not on any particular product. If an SOA effort relies on some vendor&#8217;s specific product instead of generally available standards, it misses one of the key points. You can&#8217;t buy an SOA.</p>

<section class="comments">

<div class="comment" id="comment-698">
On <a href="#comment-698" title="Permalink to this comment">November  5, 2005  1:52 PM</a>, <a href="http://www.pi4tech.com" title="http://www.pi4tech.com" rel="nofollow">Steve Ross-Talbot</a>
said:
<p>Wrt to point 9:</p>

<p>The notion of defining a Business Process over a set of services in an SOA is an attractive way of utilising the services to achieve a measurable objective. But the way it is realised is of importance.
One could realise a BP in an application server that is controlling the services (orchestration) or one could realise it as a script in which each service performs exactly what is required of it relative to the description of the BP. The former is server centric and so has an impact on the robustness of the system and the coupling of the BP to the services. The latter is higher up the stack and can be used to derive the former but can also be used to inform the services of their expected behavior and so yield a more distributed solution - more robust and looser coupling.</p>


<div class="comment" id="comment-699">
On <a href="#comment-699" title="Permalink to this comment">November  5, 2005  3:00 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Interesting aspect, definitely. I agree that any centralized component has a bad smell, and this is IMO true for a centralized orchestration engine as well. Given the definition from <a href="/blog/st/2005/02/16/choreography_vs_orchestration.html," rel="nofollow" /><a href="/blog/st/2005/02/16/choreography" rel="nofollow">/blog/st/2005/02/16/choreography</a><em>vs</em>orchestration.html, it seems that you prefer choreography over orchestration. Although I don&#8217;t have practical experience with either, I tend to agree with this.</p>


<div class="comment" id="comment-700">
On <a href="#comment-700" title="Permalink to this comment">November  5, 2005 11:45 PM</a>, <a href="http://jim.webber.name" title="http://jim.webber.name" rel="nofollow">Jim Webber</a>
said:
<p>Hey Stefan,</p>

<p>Point 5 contradicts point 3 I think - &#8220;request some function&#8221; and &#8220;return a result message&#8221; are precisely what most WS people think WS is all about. You capture this eloquently in point 5 I think.</p>

<p>I don&#8217;t think you went far enough with point 9. Yes it doesn&#8217;t matter what I use to compose services together functionally, but if I&#8217;m going to have an easier life I need some standard pattern (hint: extended transactions) to ensure end-to-end integrity of the composed process.</p>

<p>Jim</p>


<div class="comment" id="comment-701">
On <a href="#comment-701" title="Permalink to this comment">November  6, 2005 12:32 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hi Jim, thanks for the comments. I see your point with regard to 3 and 5, but I wonder: would you equate RPC with request/response? I&#8217;d argue that the RPC is something to be avoided because it tries to abstract away the net, while the second is still one of the most common patterns (if not the only one) in communication. I agree that a simpler, processMessage()-style communication plus some correlation mechanism is the basic building block for many more interesting patterns, but even then, request/response is still going to be the most common one. </p>

<p>As to point 9, I still have my doubts whether a transaction mechanism is a good idea and one will not have to design for failure explicitly, anyway - 2PC transactions violate loose coupling principles and other concepts, such as compensating transactions, seem to me to be an attempt at a solution that are never going to meet a 100% goal.</p>


<div class="comment" id="comment-702">
On <a href="#comment-702" title="Permalink to this comment">November  6, 2005  6:16 AM</a>, grumpY!
said:
<p>also, having a service does not mean using a service.</p>

<p>where i work (look at my name, guess), we have many webservices we offer to the public, many employing lower level schemes behind the scenes (shared memory, mem-mapped files, etc). internally we almost always use these lower level schemes to access the data. webservices help you cross domain, system, implementation boundaries. but crossing these boundaries has a cost. if you don&#8217;t need to incure that cost, don&#8217;t.</p>


<div class="comment" id="comment-703">
On <a href="#comment-703" title="Permalink to this comment">November  6, 2005  6:19 PM</a>, Jim Thomas
said:
<p>&#8220;You can do SOA without using Web services, but in general, that’s a bad idea&#8221; I really don&#8217;t agree with this statement. I think one could say that W.S. is the initial driver of SOA but I wouldn&#8217;t limit SOA to W.S. Primarily, consider the &#8220;oriented&#8221; portion of SOA. What if we had said &#8220;You can do Object Oriented programming without C++ but in general that&#8217;s a bad idea&#8221;.</p>


<div class="comment" id="comment-704">
On <a href="#comment-704" title="Permalink to this comment">November  6, 2005  6:56 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>This was the point I expected the most disagreement with :-)</p>

<p>I think the analogy should rather be &#8220;You can do Object Oriented Programming without using an object-oriented language but in general that&#8217;s a bad idea.&#8221; This definitely reflects what I think &#8212; you can do OOP in plain C or COBOL, and you can build service-oriented systems using CORBA or DCOM. </p>

<p>In my opinion, the message-orientation required for an architecture to qualify as an SOA implies XML or some equivalent. Since the latter is not exactly wide-spread (or are you passing around some hashtable/key-value variant?), the former is practically a requirement.</p>


<div class="comment" id="comment-705">
On <a href="#comment-705" title="Permalink to this comment">November  6, 2005  8:16 PM</a>, Jim Thomas
said:
<p>I don&#8217;t necessarily see SOA as requiring message-orientation, that sounds more like MOM to me. I see SOA as having the flexibility to facilitate and orchestrate all of these strategies.</p>


<div class="comment" id="comment-706">
On <a href="#comment-706" title="Permalink to this comment">November  6, 2005  8:58 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Maybe I need to rephrase my point 3 to make this clearer. I argue that the data exchanged on the wire is what&#8217;s in focus in an SOA; whether you call that a message or a document is not that important. If you invoke a remote method with some parameters and a return value that just happen to be mapped to some protocol message you don&#8217;t care about, your service relies on much more commonality than I&#8217;d tolerate in what I consider to be SOA.</p>


<div class="comment" id="comment-707">
On <a href="#comment-707" title="Permalink to this comment">November  7, 2005  6:14 PM</a>, <a href="http://atmanes.blogspot.com" title="http://atmanes.blogspot.com" rel="nofollow">Anne Thomas Manes</a>
said:
<p>Regarding your final sentence in Statement #3:</p>

<blockquote>
<blockquote>
<p>The number and type of documents a service can process define its “interface”, which some people prefer to call its “contract”.</p>
</blockquote>

<p></p></blockquote>

<p>IMO a contract defines much more than just the service&#8217;s interface. A contract comprises all aspects of agreement between a service consumer and a service provider, and it includes, for example, the definition of the interface, the agreed-to intersection of the constraints and capabilities of both the consumer and the provider, any service level agreements in place between the consumer and the provider, etc.</p>


<div class="comment" id="comment-708">
On <a href="#comment-708" title="Permalink to this comment">November  7, 2005  8:55 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Anne, point taken; it makes sense to distinguish between interface and contract and include interface, policy and other information as part of the contract. I wonder, though: once consumer/provider relationships enter into the contract, how many contracts does a provider have? One per consumer? Or one generic one with multiple specializations?</p>


<div class="comment" id="comment-709">
On <a href="#comment-709" title="Permalink to this comment">March 29, 2007 10:17 AM</a>, <a href="http://4utips.info/news_50.html" title="http://4utips.info/news_50.html" rel="nofollow">Bond James</a>
said:
<p><a href="http://4utips.info/news_50.html" rel="nofollow" /><a href="http://4utips.info/news" rel="nofollow">http://4utips.info/news</a><em>50.html</em> <a href="http://4utips.info/news_300.html" rel="nofollow" /><a href="http://4utips.info/news" rel="nofollow">http://4utips.info/news</a>300.html <a href="http://4utips.info" rel="nofollow" /><a href="http://4utips.info" rel="nofollow">http://4utips.info</a> <a href="http://4uthe.info/news_250.html" rel="nofollow" /><a href="http://4uthe.info/news" rel="nofollow">http://4uthe.info/news</a><em>250.html</em> <a href="http://4uthe.info/news_350.html" rel="nofollow" /><a href="http://4uthe.info/news" rel="nofollow">http://4uthe.info/news</a>350.html <a href="http://4uthe.info/news_400.html" rel="nofollow" /><a href="http://4uthe.info/news" rel="nofollow">http://4uthe.info/news</a><em>400.html</em> <a href="http://4usuper.info/news_50.html" rel="nofollow" /><a href="http://4usuper.info/news" rel="nofollow">http://4usuper.info/news</a>50.html <a href="http://4usuper.info/news_200.html" rel="nofollow" /><a href="http://4usuper.info/news" rel="nofollow">http://4usuper.info/news</a><em>200.html</em> <a href="http://4usuper.info/news_300.html" rel="nofollow" /><a href="http://4usuper.info/news" rel="nofollow">http://4usuper.info/news</a>300.html <a href="http://4usuper.info/news_400.html" rel="nofollow" /><a href="http://4usuper.info/news_400.html" rel="nofollow">http://4usuper.info/news_400.html</a> yo! i&#8217;ll come back&#8230;http://google.com.uk</p>


</section>

