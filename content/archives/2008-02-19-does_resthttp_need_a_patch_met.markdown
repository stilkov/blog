---
layout: post
title: "Does REST/HTTP Need a PATCH Method?"
date: "2008-02-19T12:20:00+01:00"
comments: false
categories: 
---

<p>There&#8217;s quite a debate going on on whether and if so, how, to standardize a PATCH method for HTTP. James Snell, who edits <a href="http://www.greenbytes.de/tech/webdav/draft-dusseault-http-patch-11.html">the draft spec</a>, <a href="http://www.snellspace.com/wp/?p=894">has a list of links</a> to posts that make up the discussion. </p>

<p>I&#8217;m unsure I&#8217;d be happy about a PATCH method; my main gripe with it is that its semantics heavily depend on the content being sent (which needs to be some sort of diff format matching one of the resource&#8217;s representation formats). Right now, I agree with <a href="http://www.25hoursaday.com/weblog/2008/02/16/ThoughtsOnGooglesProposalForGranularUpdatesInAtomPub.aspx">Dare Obasanjo</a>:</p>

<blockquote>
<p>If a field is important enough that it needs to be identifiable and editable then it should be its own resource.</p>
</blockquote>

<section class="comments">



<div class="comment" id="comment-1617">
On <a href="#comment-1617" title="Permalink to this comment">February 19, 2008  4:24 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">Erik Johnson</a>
said:
<p>Wouldn&#8217;t decentralizing media types obviate the need for this?  Nothing in the specs say that the payload format for a given URL must match for different verbs anyway.  The specs do say that PUT is meant to replace an entire resource.  Many people believe that requires/infers payload symmetry with GET.  I don&#8217;t personally believe that, but we&#8217;ve ducked the issue by not using PUT at all (we&#8217;ll probably change that).  POST is there as a catch-all update already and the W3C was wise not to go too far to define its semantics.  </p>

<p>If you have multiple formats for updating resources, maybe you indicate which mechanism the caller is using through a media type value or (for XML) in a namespace declaration.  But you can&#8217;t just add PATCH without making it clear when to use it vs. POST and I don&#8217;t think the W3C will come to consensus about that.</p>

<p>BTW, I agree with Dare that it&#8217;s useful for fields to be addressable as resources.  But it doesn&#8217;t help all that much if your application typically needs to updates 15 out of the 200 fields in the resource.</p>


<div class="comment" id="comment-1618">
On <a href="#comment-1618" title="Permalink to this comment">February 19, 2008  5:56 PM</a>, <a href="http://www.martin-probst.com" title="http://www.martin-probst.com" rel="nofollow">Martin Probst</a>
said:
<p>The thing is that people want transactional updates, i.e., all or none semantics (C in ACID).</p>

<p>If you have twenty nested resources with their own URL, you cannot change all (or some) of them at once - if you fail at PUT request #17, the first 16 are broken in some way.</p>

<p>I think this will be difficult - it&#8217;s highly dependent on application semantics etc. And it might actually make more sense to handle this kind of operation in a service way, not in a resource way, as what you want is a mass-(rename|delete|change|&#8230;)-operation, rather than a resource change.</p>


<div class="comment" id="comment-1619">
On <a href="#comment-1619" title="Permalink to this comment">February 19, 2008 11:27 PM</a>, <a href="http://dehora.net/journal" title="http://dehora.net/journal" rel="nofollow">Bill de hOra</a>
said:
<p>&#8220;Right now, I agree with Dare Obasanjo:&#8221;</p>

<p>I guess one thing is that you&#8217;re breaking up your resources based on the details of the representation (eg, what Dare is saying isn&#8217;t entirely necessary with RDF/XML, nor is a diff format - you can send individual triples). That doesn&#8217;t seem like a good coupling. Another is resource composition. Even though you want to do fine grained editing, you might not want fine grained access (and probably taking on all the associated atomic/consistency issues) - cue Patrick Mueller&#8217;s point about resource composition. Another is, I&#8217;m not sure it captures a real use-case; not one requirement I have right now for partial uploads/updates is about picking out XML elements and just sending those. Another is field/document addressing - sure seems like a great idea, until you look at the debacle around HTML fragment identifiers. I think this needs to considered in terms of tradeoffs, like any optimization. </p>


<div class="comment" id="comment-1620">
On <a href="#comment-1620" title="Permalink to this comment">February 20, 2008 11:54 AM</a>, <a href="http://neuromancer.inf.um.es/blog" title="http://neuromancer.inf.um.es/blog" rel="nofollow">Diego Sevilla</a>
said:
<p>I find it very interesting, and a nice addition to HTTP at least (not sure its real application to REST at the moment). As for your worrying about the patch depending on the content, that&#8217;s the whole thing with HTTP, right? You have the content-type field to tell what you&#8217;re transferring. The same can be applied to patches&#8230;</p>

<p>In fact, the PATCH it is actually a POST with optimistically believed shared knowledge with the server.</p>

<p>Regards,
diego.</p>


<div class="comment" id="comment-2090">
On <a href="#comment-2090" title="Permalink to this comment">December 12, 2009  2:42 AM</a>, Michael Brown
said:
<p>Heya, I just want to add my views on patch, and about some comments already made.</p>

<p>Firstly, while PATCH could be used for transactional updates. I personally do not see it as its true role. If you want to do that surely the correct way is to have a multi-part body message, this can allow you to alter multiple resources at once as well. It is then also in the applications hands (as it should be) to decide if the request should be atomic or not. e.g</p>

<p>POST /emailserver/sendemail
Content-Type: multipart/mixed; boundary=&#8221;frontier&#8221;</p>

<p>&#8212;frontier
Content-Type: text/plain
Content-Location: /usr/mikey/emailtxt</p>

<p>This is the body of the message.
&#8212;frontier
Content-Type: application/octet-stream
Content-Transfer-Encoding: base64
Content-Location: /usr/mikey/email_resources/image</p>

<p>PGh0bWw+CiAgPGhlYWQ+CiAgPC9oZWFkPgogIDxib2R5PgogICAgPHA+VGhpcyBpcyB0aGUg
Ym9keSBvZiB0aGUgbWVzc2FnZS48L3A+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==
&#8212;frontier&#8212;</p>

<p>OK. so that aside. What is it for? Well most people seem to think its a &#8220;speed up&#8221; and to save bandwidth. I can see it may, but personally don&#8217;t believe its the true purpose of patch. After all to do a patch you need a point of reference, which is the original resource anyway, if you NEED to use patch to save bandwidth, you may as well just use paging (segment your data). And almost all updates or changes can be expressed as a PUT (&#8220;echo $data > /resource&#8221;) or a POST (&#8220;echo $data >> /resource&#8221;). Consider this, data can be &#8220;moved&#8221; in 4 ways on a computer. 1) Pipe (FIFO), 2) Stack (LIFO), 3) Queue (Order application defined). These three are a 1-to-1 Producer Consumer relationship, and are easily done with GET and POST/PUT. There is however 4) Shared Memory. THIS is the problem child. It has a many-to-many Producer Consumer relationship, and as such no-one can fully trust or know the state of the resource. THIS is where PATCH belongs, (in my opinion). And the reason why PATCH has been ignored for so long, is because not many applications (even on an operating system) use Shared Memory.</p>

<p>should the web support shared memory? - I dont think we should decided, im sure sooner or later someone will come up with a true situation which needs this.</p>

<p>MikeyB</p>


</section>

