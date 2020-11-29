---
layout: post
title: "WADL Just A Hypermedia Format?"
date: "2007-06-05T09:25:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.crummy.com/2007/06/04/0">Leonard Richardson</a>:</p>

<blockquote>
<p>[H]ere is my defence of WADL, called &#8220;It&#8217;s Just a Hypermedia Format&#8221;. Sometimes people say they&#8217;d like to do strange things with WADL, things I don&#8217;t approve of and things they wouldn&#8217;t think of doing with HTML. But WADL is just a hypermedia format. I like WADL because it&#8217;s a better hypermedia format than HTML or plain XML.</p>
</blockquote>

<p>Excellent stuff; having someone like Leonard write about REST is a great addition to the REST community, IMO. I have one disagreement:</p>

<blockquote>
<p>I&#8217;d like to try a system where sending OPTIONS to a URI gets you a hypermedia description of that resource, and see where that goes.</p>
</blockquote>

<p>Why not use GET?</p>

<section class="comments">



<div class="comment" id="comment-1340">
On <a href="#comment-1340" title="Permalink to this comment">June  5, 2007 10:08 AM</a>, Asbjørn Ulsberg
said:
<p>&#8220;Why not use GET?&#8221; you say. What would that GET request look like? Would it contain some pixie dust in the Accept header, or perhaps in the URI? How will the server know from the GET request that the client wants the hypermedia description?</p>


<div class="comment" id="comment-1341">
On <a href="#comment-1341" title="Permalink to this comment">June  5, 2007 12:01 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I was indeed thinking of an Accept header; what is returned could either be the hypermedia description (which allows it to be specific for this particular resource), or link to a generic one, or be merged with the representation of the content.</p>


<div class="comment" id="comment-1342">
On <a href="#comment-1342" title="Permalink to this comment">June  5, 2007  1:20 PM</a>, <a href="http://www.crummy.com/" title="http://www.crummy.com/" rel="nofollow">Leonard Richardson</a>
said:
<p>GET is certainly a possibility. I like entertaining the OPTIONS possibility because it separates the state of the resource (GET) from the way you manipulate that state (OPTIONS). Of course that might be a false distinction.</p>


<div class="comment" id="comment-1343">
On <a href="#comment-1343" title="Permalink to this comment">June  5, 2007  3:17 PM</a>, <a href="http://muellerware.org" title="http://muellerware.org" rel="nofollow">Patrick Mueller</a>
said:
<p>There&#8217;s a big difference between asking for an object, and asking for a description of an object.  But I agree with Leonard that OPTIONS is not really viable; no one uses it.  GET is the right approach, but I think you&#8217;re getting two different things; two URLs in play.  One for the object itself, another for it&#8217;s description (schema).  Of course, many resources may be described by a single description.</p>

<p>Remember also the trick in Axis where appending ?help to a WS endpoint would give you some meta-data-driven &#8216;help&#8217;.</p>


<div class="comment" id="comment-1344">
On <a href="#comment-1344" title="Permalink to this comment">June  5, 2007  3:47 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Patrick, that&#8217;s exactly what I meant with the comment above:</p>

<blockquote>
<p>I was indeed thinking of an Accept header; what is returned could either be the hypermedia description (which allows it to be specific for this particular resource), or link to a generic one, or be merged with the representation of the content.</p>
</blockquote>

<p>In some cases there will be a single description which covers multiple resources, in other cases, it may differ.</p>


<div class="comment" id="comment-1345">
On <a href="#comment-1345" title="Permalink to this comment">June  5, 2007 11:40 PM</a>, Luis Bruno
said:
<p>Butbut, I thought the idea behind REST was to let each verb do one thing, and do it well! So I&#8217;d use a separate verb for getting at the metadata: multiplexing on &#8220;Accept:&#8221;, although completely workable, seems like a hack.</p>

<p>On the other hand, how can I use a browser to see the description? the &#8220;?help&#8221; trick is nice. Multiplexing on &#8220;Accept:&#8221; is like OPTIONS in this regard.</p>

<p>I think the real question is not OPTIONS vs. GET, but the ease of retrieving the metadata.</p>


<div class="comment" id="comment-1346">
On <a href="#comment-1346" title="Permalink to this comment">June  6, 2007  7:53 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Dispatching on Accept: makes sense if the what you retrieve is another representation of the resource. Whether this is the case or not is a design decision; but given that the meta-data may be resource-specific, I don&#8217;t see a problem at all.</p>


<div class="comment" id="comment-1347">
On <a href="#comment-1347" title="Permalink to this comment">June  8, 2007  6:12 PM</a>, Luis Bruno
said:
<p>I had some difficulty grokking &#8220;another representation of the resource&#8221;, but I think I get it now.</p>

<p>My working model is Atom, where you have one of several kinds of services based on the methods you support (list members gets you syndication, list, retrieve and delete members gets you a work queue, etc; see Joe Gregorio&#8217;s recent <a href="http://bitworking.org/news/193/Do-we-need-WADL" rel="nofollow">Do we need WADL?</a> post for more).</p>

<p>So I thought it was a good idea for me to &#8220;divine&#8221; what kind of service I got pointed at based on &#8220;OPTIONS /atomEndpoint&#8221;. It&#8217;s not. A better idea would be to use some kind of microformat in the body of &#8220;GET /atomEndpoint&#8221; that tells me the methods I have available.</p>

<p>Or, as I think you&#8217;ve said, I could just &#8220;Accept: application/atom+meta-description&#8221; and parse that format to know what methods I have available and how to invoke them.</p>

<p>What do you think?</p>


<div class="comment" id="comment-1348">
On <a href="#comment-1348" title="Permalink to this comment">June  8, 2007  9:43 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Yes, I think the microformat approach could be very reasonable here, and yes, that&#8217;s what I meant by sending another Accept header.</p>


</section>

