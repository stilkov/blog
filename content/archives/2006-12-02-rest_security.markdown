---
layout: post
title: "REST Security"
date: "2006-12-02T09:54:00+01:00"
comments: false
categories: 
---

<p><a href="http://wanderingbarque.com/nonintersecting/2006/12/01/restful-security/">Pete Lacey</a> responds to <a href="http://1raindrop.typepad.com/1_raindrop/2006/12/rest_security_o.html">Gunnar Peterson&#8217;s claims</a> about REST&#8217;s lack of message level security.</p>

<p>I find it awfully hard to add anything to that, so go read <a href="http://wanderingbarque.com/nonintersecting/2006/12/01/restful-security/">the original post</a>.</p>

<section class="comments">

<div class="comment" id="comment-1113">
On <a href="#comment-1113" title="Permalink to this comment">December  2, 2006  1:20 PM</a>, <a href="http://1raindrop.typepad.com" title="http://1raindrop.typepad.com" rel="nofollow">Gunnar</a>
said:
<p>With all due respect, he did nothing of the sort. He restated a bunch of transport level security mechanisms that do nothing to address the message level security issue I described. For some places that do have some clue on this go here</p>

<p><a href="http://docs.amazonwebservices.com/AWSSimpleQueueService/2006-04-01/RequestAuthenticationArticle.html" rel="nofollow" /><a href="http://docs.amazonwebservices.com/AWSSimpleQueueService/2006-04-01/RequestAuthenticationArticle.html" rel="nofollow">http://docs.amazonwebservices.com/AWSSimpleQueueService/2006-04-01/RequestAuthenticationArticle.html</a></p>

<p>and</p>

<p><a href="http://www.franklinmint.fm/blog/archives/000934.html" rel="nofollow" /><a href="http://www.franklinmint.fm/blog/archives/000934.html" rel="nofollow">http://www.franklinmint.fm/blog/archives/000934.html</a></p>

<p>Good luck!</p>


<div class="comment" id="comment-1114">
On <a href="#comment-1114" title="Permalink to this comment">December  2, 2006  9:08 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Gunnar, I fail to get your point.</p>

<p>First of all, you point to several cases of identity theft. I don&#8217;t see any connection to transport-level vs. message-level security.</p>

<p>Secondly, you claim that REST does not address message-level security.</p>

<p>Never mind that REST is an architectural style and you should rather be talking about HTTP. Even if you did, standards such as XML Encryption and XML Digital Signature are completely orthogonal to the REST vs. SOAP debate &#8212; there&#8217;s nothing stopping you from using them while using HTTP in a RESTful way.</p>

<p>There is one valid point (that I actually failed to find expressed this way in your comment, I may have missed it): With WS-Security, there&#8217;s some standardization as to how to communicate metadata about the usage of WML Encryption and DSIG, and there&#8217;s no equivalent mapping to plain HTTP.</p>

<p>Still, the most crucial point seems to be that you see WSS as the critical success factor for SOAP (vs. RESTful HTTP). To which I say: <em>No-one</em> uses WSS right now.</p>


</section>

