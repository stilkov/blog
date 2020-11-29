---
layout: post
title: "(Hopefully) Constructive Feedback on Mark Baker's Article"
date: "2003-11-26T23:20:00+01:00"
comments: false
categories: 
---

<p><strong>Update</strong>: Mark Mark <a href="http://www.markbaker.ca/2002/09/Blog//2003/11/26#2003-11-comments1">responded</a>; I&#8217;ll try to comment ASAP.</p>

<p>I have to admit that the last <a href="/blog/st/archives/000453.html">post</a> about <a href="http://www.oreillynet.com/pub/wlg/3998">Mark Baker&#8217;s article</a> was a bit harsh &mdash; and definitely did not contain much constructive criticism. So I probably deserved the <a href="http://www.innoq.org/movabletype/mt-comments.cgi?entry_id=453">comment</a> I got from Mark. Let me try to go into more detail about the problems I have with what Mark has written:</p>

<blockquote>As a proponent of using the REST architectural style for Web services development, I&#8217;ve often been frustrated when I hear REST dismissed out of hand as a solution for some problems, while at the same time, &#8220;document style Web services&#8221; are deemed amply suitable for it. This frustration stems from my view of REST as a generalization - an &#8220;uber architecture&#8221; of sorts - of coarse grained, loosely coupled, document oriented approaches to application integration, which suggests to me that anything that can be accomplished with document style Web services, can be accomplished within the constraints of REST, and in a not too dissimilar way either. </blockquote>

<p>Up to this point, I totally agree. I don&#8217;t claim to be an expert in REST in any respect, but from what I have gathered about it so far, it definitely seems that the ideas behind REST are applicable for a lot of scenarios.</p>

<blockquote>In this essay, I&#8217;ll describe how core features of the Web relate to document style services, and in doing so, will describe how to build the Web with Web services.</blockquote>

<p>Wow! This is going to be a great article &mdash; finally somebody who gets both REST and whatever-you-want-to-call-non-RESTual-services, is going to explain the differences and similarities! I&#8217;m thrilled.</p>

<blockquote>What a document isn&#8217;t, at least by the (IMO, accurate) use of the term in a Web services context, is a bag-o-bits which isn&#8217;t asking anything of anyone; the current time, a purchase order, a signup sheet for pickup floor hockey. </blockquote>

<p>Er &#8230; well, I think I can see the point, but I can&#8217;t really make sense of the examples. So, a purchase order <em>isn&#8217;t</em> asking anything from anyone? That can&#8217;t be true &mdash; so obviously, these are counter examples - a purchase order <em>is</em> asking something. Looking at the paragraph, even for some length of time, I have problems finding out what exactly Mark is getting at - I fail to see the similarity between a pure piece of data like <em>current time</em> and a very concrete, business level document like <em>purchase order</em>. Arguably, it&#8217;s just not phrased very clearly, or maybe it&#8217;s because I&#8217;m not a native English speaker.</p>

<blockquote>They aren&#8217;t asking anything of anyone, because their job is simply to capture state; a signup sheet captures the state of those who desire to play, a purchase order captures the state of the desire of a purchaser to acquire some goods or service, and the time, well, communicates the state of some clock.</blockquote>

<p>Now I&#8217;m totally lost. (Again, probably my English.) A purchase order isn&#8217;t asking anything of anyone, if just captures the desire of a purchase to acquire some goods or service? When I write a purchase order, I clearly ask the supplier to deliver some sort of goods to me. How can this not be <em>asking for something</em>?</p>

<blockquote>Documents <em>are</em> state.</blockquote>

<p>OK, I&#8217;ll buy that and move on, there&#8217;s surely going to be some more detailed explanation about this later, right?</p>

<blockquote>When dealing in documents/state, a designer often finds it useful to be able to know which documents are about the same thing. For example given two documents representing the state of some business process, it&#8217;s quite useful - and often necessary - to be able to determine if the two documents are both of the same business process even though they differ due to, perhaps, being snapshots taken at different times.</blockquote>

<p>Although I don&#8217;t consider &#8220;quite useful and often necessary&#8221; to be enough of an explanation, I agree, so let&#8217;s move on:</p>

<blockquote>There is more than one way to address this problem, of course. One way would be to include information in the document which could be used to uniquely identify the business process; the parties involved, the time it began, etc.. While this has its advantages, it also has two large disadvantages; the inability to support alternate formats (e.g. images) which can be used to represent the state of the same business process, and that those identifying characteristics are known only to software which also knows the format. That latter problem would prevent, for example, a generic caching mechanism.</blockquote>

<p>I almost wrote another &#8220;I agree&#8221; below this quote, but then I thought a bit about it. While Mark obviously was thinking of content negotiation, support for Expired headers and so on, he doesn&#8217;t talk about it at all. How is anybody supposed to make sense of that?</p>

<p>I&#8217;m also left with the question of what, exactly, the advantages of the first approach are (&#8220;&#8230; has its advantages &#8230;&#8221;).</p>

<p>I&#8217;m fine with the transfer/transport distinction. But then Mark goes on:</p>

<blockquote>And of course, what one could achieve with the &#8220;PROCESS-THIS&#8221; (aka POST) and &#8220;STORE-THIS&#8221; (aka PUT) operations would require that the protocol that defined these operations be used. They wouldn&#8217;t be &#8220;protocol independent&#8221;.</blockquote>

<p>So what? Is this an advantage? Or a disadvantage? How am I suppose to make sense of this remark, unless I have previously made up my mind on the question of REST/HTTP vs. SOAP/anything?</p>

<p>In the next paragraph, the point seems to be that GETting documents from somewhere might be useful too. I just have to agree.</p>

<p>OK, I&#8217;m a bit puzzled by now, but surely things are going to be clarified in the next few sections. (Seriously, that&#8217;s what I thought when I first read the article). Imagine my surprise when I saw that the next paragraph&#8217;s title is <strong>Conclusions</strong>:</p>

<blockquote>The relatively recent shift away from RPC and towards &#8220;document exchange&#8221; (aka state transfer) is extremely welcome progress for this POV, but IMO, just the first step of many towards fully appreciating the enormity of the World Wide Web project.</blockquote>

<p>In a conclusion, it makes sense to combine some of the preceding text&#8217;s contents and present them in the form of a summary. Now where was the &#8220;recent move away from RPC and towards document exchange&#8221; mentioned before? Who made this move? </p>

<p>So here&#8217;s is my conclusion: Maybe Mark is so smart that he just can&#8217;t explain things that he considers to be obvious to everybody. (Maybe the article was, as he <a href="http://www.oreillynet.com/cs/user/view/cs_msg/28049">explained</a>, really written for people he has already exchanged opinions with for hours.) So perhaps Mark really has a lot to say, and I just fail to understand it. Then again, perhaps not.</p>


