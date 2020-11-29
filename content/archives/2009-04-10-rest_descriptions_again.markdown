---
layout: post
title: "REST Descriptions, Again"
date: "2009-04-10T17:38:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.ibm.com/developerworks/blogs/page/chrisferris?entry=we_doan_need_no_steenkin">Chris Ferris</a> picks up a discussion the <a href="http://www.infoq.com/news/2007/06/rest-description-language">community has had</a> <a href="http://www.infoq.com/news/2007/03/WADL">a few times before</a>:</p>

<blockquote>
<p>Bottom line, for me, is that I have long believed that RESTful syetems would benefit from addition of exposed metadata in the form of descriptions such as those proposed by WSDL2.0 and WADL. Certainly, from my perspective, REST and a description of the constraints on an application/system's interface are not mutually exclusive of one another. </p>
</blockquote>

<p>This is a reaction to <a href="http://steve.vinoski.net/blog/2009/04/09/qcon-london-2008-presentation-video/">a post by Steve Vinoski</a>, who wrote:</p>

<blockquote>
<p>One problem I noticed, though, was that the client developers asked for a “REST-like interface” and also for a document listing all resource URIs, and for each one, the HTTP verbs that apply to it, the representations available from it, and what status codes to expect from invoking operations on it. Those two requests are sort of mutually exclusive, depending on what “REST-like” means; for a proper RESTful system, you don’t need a document like that, at least not the type of document they’re asking for.</p>
</blockquote>

<p>In my opinion, the key point is not that something is wrong with a description language; what's wrong is to keep it in isolation from the actual resources. If I do a GET on a resource and the server sends an HTML form, this is a perfectly fine description for a particular use case; the same could be done e.g. with (something like) WADL, which would make it perfectly RESTful.</p>

<section class="comments">



<div class="comment" id="comment-1957">
On <a href="#comment-1957" title="Permalink to this comment">April 10, 2009  7:15 PM</a>, <a href="http://appside.blogspot.com" title="http://appside.blogspot.com" rel="nofollow">ejohnson.pip.verisignlabs.com</a>

<a href="http://appside.blogspot.com" class="commenter-profile"></a>
said:
<p>The other issue is that description languages, at least the 2 you mention, can&#8217;t sufficiently express the URI space for many types of services.  Services that can derive resources dynamically from a submitted URI (and not just through query string arguments) are becoming common.  Even using URI templates, these description formats are limited to an effectively static URI list.  Supporting &#8220;late-bound&#8221; resources is a huge part of promoting &#8220;serendipitous reuse&#8221;.  What good is it to only describe the most obvious capabilities of a system?</p>


<div class="comment" id="comment-1958">
On <a href="#comment-1958" title="Permalink to this comment">April 10, 2009  7:49 PM</a>, <a href="http://steve.vinoski.net/" title="http://steve.vinoski.net/" rel="nofollow">svinoski.pip.verisignlabs.com</a>

<a href="http://steve.vinoski.net/" class="commenter-profile"></a>
said:
<p>I think Chris missed:</p>

<ol><li>The fact that I was talking about a <em>paper</em> document.</li><li>The link to Roy&#8217;s blog I provided, where he discusses the important role of hypermedia in RESTful systems.</li></ol>


<div class="comment" id="comment-1959">
On <a href="#comment-1959" title="Permalink to this comment">April 10, 2009  8:40 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Erik, I think this could be addressed by returning multiple description documents instead of a single one - each of them would be dynamically adapted to (or created for) a particular resource.</p>


<div class="comment" id="comment-1960">
On <a href="#comment-1960" title="Permalink to this comment">April 10, 2009  9:58 PM</a>, <a href="http://www.ibm.com/developerworks/blogs/page/chrisferris" title="http://www.ibm.com/developerworks/blogs/page/chrisferris" rel="nofollow">Christopher Ferris</a>
said:
<p>Steve, I missed the part where you mentioned paper. What is this paper of which you speak? I am not familiar with that concept. :-) I also did not miss the link to Roy&#8217;s rant. Again, I just don&#8217;t believe that HATEOAS (wow, do I dislike that acronym - not the phrase behind it, of course) and say WADL are somehow mutually exclusive. I also agree completely with Stefan&#8217;s comment about association of the WADL with the resource such that it can be retrieved either directly from the resource URI or from a URI that is returned as part of the metadata returned from the resource URI. </p>

<p>I&#8217;d be much more inclined to discuss over a beer or three sometime, Steve:-)</p>


<div class="comment" id="comment-1961">
On <a href="#comment-1961" title="Permalink to this comment">April 11, 2009  7:20 AM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>

<a href="http://plasmasturm.org/" class="commenter-profile"></a>
said:
<p>I can only repeat <a href="http://plasmasturm.org/log/460/" rel="nofollow">the position I have held for a very long time</a>:</p>

<p>You want a description of the media types, not a description of the URI space; period.</p>


<div class="comment" id="comment-1962">
On <a href="#comment-1962" title="Permalink to this comment">April 11, 2009  9:36 AM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Aristotle, one could argue we are talking about the media type WADL and its support for hypermedia …</p>


<div class="comment" id="comment-1963">
On <a href="#comment-1963" title="Permalink to this comment">April 11, 2009  7:58 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>

<a href="http://plasmasturm.org/" class="commenter-profile"></a>
said:
<p>I know. I still don’t like it. There are lots of expressive devices for URI space structure that serve no useful purpose but act as an attractive nuisance. You can ignore them but that isn’t the natural way to use the format; you have go against its grain. I’d be happier if they weren’t there at all. The format would be simpler, too.</p>

<p>There are more reasons for my dislike. Eg. you can use WADL more or less purely as a schema format for the responses returned by an XML-driven web service. But it doesn’t provide sufficient semantics to replace human readable documentation. And if it did you should ask yourself if you want to create as many different ad-hoc response formats as to need them documented in a stub generator friendly, machine-readable format.</p>

<p>I’ll leave it at that – sleepy with a full stomach doesn’t lend itself to listing all of my objections in detail. :)</p>

<p>Basically, I think the use of WADL for anything is a distraction. I have no particular quibbles with the format itself, I just think it set out to solve the wrong problem. The outcome of that effort ended up being usable for related but different things, but IMO it doesn’t do any of them very well. You don’t stand to benefit much using it.</p>


<div class="comment" id="comment-1964">
On <a href="#comment-1964" title="Permalink to this comment">April 12, 2009  3:20 AM</a>, johnstok
said:
<p>I think part of the reason for the confusion here is the HTML specification. It performs 2 tightly entwined roles:
<br /> 1. It provides the <i>structural definition</i> for the html language.
<br /> 2. It describes how the browser (ie client application) should <i>behave</i> when handling html documents.</p>

<p>Some examples:</p>

<p><a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.13.1" rel="nofollow">http://www.w3.org/TR/html401/interact/forms.html#h-17.13.1</a>
<br />Here the spec describes the HTTP verbs that can be used to submit a form.</p>

<p><a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4" rel="nofollow">http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4</a>
<br />Here the spec describes what types of representation must be used for form submission.</p>

<p><a href="http://www.w3.org/TR/html401/struct/links.html#h-12.1.1" rel="nofollow">http://www.w3.org/TR/html401/struct/links.html#h-12.1.1</a>
<br />Here the spec describes the anchor tag and how the &#8216;href&#8217; uri is used to retrieve another resource.</p>

<p>&#8212;</p>

<p>When we leave the comfortable world of HTML+HTTP perhaps to JSON+HTTP or XML+HTTP we lose the behavioural context within which to interpret a document. Atom solved this by mime type (application/atom+xml) - the response contains an xml document (structural definition) whose origin server supports the operations defined by the Atom Publishing Protocol (behavioural definition). The APP defines in detail the operations that are available on Atom types and how these operations map to http (http://tools.ietf.org/html/rfc5023#section-5). The URIs are not specified by the APP.</p>

<p>So perhaps third parties should be publishing documents like the APP and using their own mime types? tweets+json anyone?</p>


<div class="comment" id="comment-1965">
On <a href="#comment-1965" title="Permalink to this comment">April 14, 2009  5:00 PM</a>, keith.peters.myopenid.com

<a href="http://keith.peters.myopenid.com/" class="commenter-profile"></a>
said:
<p>Might be an obvious point but I have always thought that description languages like wadl are analogous to site maps for web sites. That is, they are useful to get an overview of the main resources a site is offering but are not required to navigate the site.</p>

<p>The same should be true for restful applications, providing a wadl document can be useful documentation for the app but it should still be possible to start from the &#8216;home page&#8217; url and use the app without ever consulting the document. Nor should it be mandatory or even preferable that the wadl document contains all of the urls the app exposes.</p>


</section>

