---
layout: post
title: "Web Services: Avoiding APIs"
date: "2004-03-09T08:49:00+01:00"
comments: false
categories: 
---

<p>I&#8217;ve spent some time thinking about the pros and cons of using APIs vs. using standardized wire formats, prompted by a whole bunch of references to this issue - by <a href="http://www.gotdotnet.com/team/dbox/default.aspx?key=2004-01-31T05:16:25Z">Don Box</a>, <a href="http://www.pacificspirit.com/blog/2004/01/12/web_services_or_distributed_objects">Dave Orchard</a>, and <a href="http://www.itworld.com/nl/xml_prac/04182002/pf_index.html">Sean McGrath</a>. It&#8217;s becoming more and more clear to me what the advantages of standardizing on the wire formats are, so I thought I might as well share some of my ideas. Feedback, as usual, is very welcome.</p>

<p>So what&#8217;s the issue? I believe that when you take your first look at Web services, and have a strong background in Distributed Objects, or other, older RPC-based technologies, you get a strong feeling of <em>d&#233;j&#224; vu</em>. After all, isn&#8217;t this all just CORBA or DCOM reinvented, with a different wire protocol? What could be the advantage of using a fat, text-based format instead of a nice, binary, efficient protocol like DCE RPC, IIOP, or plain RMI? Why would anyone in their right mind even care about what the bits you send over the wire look like?</p>

<p>You might be tempted to support Web services standards, most notably SOAP, just as another, additional transport. Create a common API, and use it to send messages via RMI, CORBA, or JMS - without having to change anything in your application code. Have custom transports, and plug them in as needed. Isn&#8217;t this the best possible strategy?</p>

<p>Unsurprisingly, I think the answer is: no - on the contrary, it&#8217;s the worst thing you could possibly do.</p>

<p>First of all, there is an architectural difference between the way applications should be designed for tightly coupled vs. loosely coupled interactions. This is mostly related to the granularity of your services, as opposed to the granularity of your components&#8217; or objects&#8217; interfaces. While I believe this argument to be strong, it&#8217;s not really related to the technology being used - you can just as easily build a loosely coupled system based on, say, JMS. In fact, I have seen customers do exactly that - independent components on a common bus, with the ability to add and remove components that listen and send to specific topics or queues, allowing for great flexibility in system evolution.</p>

<p>But there is another aspect, and a downside that seems to be less clear: Standardizing on the API doesn&#8217;t buy you very much in terms of interoperability.</p>

<p>Let&#8217;s say you standardize an API used to access services (or objects or whatever) that reside somewhere in your infrastructure. The effect is that you have a high interoperability between the partners that use the same API. You can change the API implementation, and everyone using that API will be interoperable again - in the cases where you use dynamic linking, this will happen instantaneously. </p>

<p>But what about others? What about third party products, or products developed in different departments of a large organization? Do they use the same API? Are they even developed in the same programming language, and if not, do you have an implementation of the API for that programming language as well? How sure can you be that even if you have one, it&#8217;s in sync with the other implementations? </p>

<p>With a protocol like IIOP (which is what CORBA and J2EE use for transport), there is simply no way you could standardize the message on the wire format level. There&#8217;s no easy way to describe it, and the only way to make sure everybody can interoperate is that you use the same CORBA version and 100% compatible implementations. Of course, CORBA interop has become a lot better in the last few years. But problems always occur when the underlying format needs to be changed - as is the case e.g. for transactions (with the need to propagate a transaction context) or security. </p>

<p>The beauty of SOAP - wow, that alone should have somebody flaming me - is that it actually makes it very easy to standardize on the format level. XML in general, and SOAP headers in particular, are very easily extensible. Basing your interop standards on a certain kind of SOAP message, including standards-based and non-standards-based headers, yields interoperability on the wire level. This in turn, enables a C++ app to talk to a Java or C# one, and if there&#8217;s anything e.g. in the SOAP message&#8217;s header that is specific to a certain type of application or interaction, implementations that don&#8217;t understand this header can simply ignore it. With the level of support from a standardization perspective &mdash; after all, other people are likely to experience the same problems that any given organization does, so it&#8217;s likely there&#8217;ll be a common standard at some point in time &mdash;, and with more and more applications that provide SOAP interfaces out of the box, integrating applications becomes an order of magnitude easier.</p>

<section class="comments">

<div class="comment" id="comment-230">
On <a href="#comment-230" title="Permalink to this comment">March  9, 2004  3:47 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Damn, when I read the &#8220;Let&#8217;s say you standardize an API&#8221; paragraph I was sure you had it.  You do get incredible amounts of interop and flexibility when you have everybody agreeing on an API.  And that&#8217;s why HTTP is so great, because it provides such an API, and because everybody has already said that it&#8217;s great.</p>

<p>So to answer the subsequent paragraph when you wrote &#8220;What about third party products, or products developed in different departments of a large organization? Do they use the same API?&#8221;, the answer should be &#8220;YES!  If they&#8217;re on the Web, they do use the same API&#8221;.  That is, they identify their resources via URIs and permit data to be retrieved (GET) and submitted (POST) to/from them.  That&#8217;s how you break silos.</p>

<p>Having a common message format, be it text or binary, really doesn&#8217;t buy you very much IMO, at least when compared to what sharing the same API buys you.</p>


<div class="comment" id="comment-231">
On <a href="#comment-231" title="Permalink to this comment">March  9, 2004  5:13 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>One remote day, we&#8217;ll actually understand each other ;-)</p>

<p>I believe we are talking about different things. I believe I get your point, which is that a common API such as HTTP is preferable over service-specific APIs because applications can interoperate on that level &#8220;out of the box&#8221;. I&#8217;m still not 100% sure I agree, but I believe I have at least begun to appreciate the value in a lot of scenarios. For example, the advantages of having resources accessible via GET are pretty obvious, even to me.</p>

<p>But that&#8217;s not what I was talking about. My assertion was that having e.g. a Java API (where you can replace Java with your statically typed language of choice) that <em>totally hides the underlying transport (or transfer ;-)) protocol</em> is a bad idea, since only apps using that programming language API implementation can reliably talk to each other. It&#8217;s simply wrong - and you&#8217;ll probably agree with that - to ignore the underlying protocol and assume everybody you&#8217;ll ever want to interoperate with will use your abstraction.</p>


<div class="comment" id="comment-232">
On <a href="#comment-232" title="Permalink to this comment">March  9, 2004  6:48 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Heh.  I understood you, and agreed with your point.  I just try to never miss an opportunity to point out the value of using a single API for everything.</p>

<p>Repetition is the key to learning, or so I&#8217;m told. 8-)</p>


<div class="comment" id="comment-233">
On <a href="#comment-233" title="Permalink to this comment">March  9, 2004  7:04 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Repetitive? You? Who would&#8217;ve thought that ;-)</p>


</section>

