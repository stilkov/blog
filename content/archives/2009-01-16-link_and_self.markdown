---
layout: post
title: "link and self"
date: "2009-01-16T10:52:00+01:00"
comments: false
categories: 
---

<p>The Atom Syndication Format <a href="http://tools.ietf.org/html/rfc4287#section-4.2.7">defines an XML element named &#8220;link&#8221;</a> that contains a &#8220;rel&#8221; and an &#8220;href&#8221; attribute (among others). Possible value for the rel attribute are either URIs (IRIs, to be exact) or simple text strings. In the latter case, they have to be one of the values <a href="http://www.iana.org/assignments/link-relations/">registered at IANA</a>; they should be considered equivalent to the URI created by appending the value to &#8220;http://www.iana.org/assignments/relation/&#8221; (which makes me wonder why IANA is unable to map this URI to the registry, but I digress).</p>

<p>I&#8217;m wondering about the &#8220;self&#8221; relation. According to the IANA registry, its definition is the one from Atom, which says</p>

<blockquote>
<p>The value &#8220;self&#8221; signifies that the IRI in the value of the href attribute identifies a resource equivalent to the containing element.</p>
</blockquote>

<p>The reason for my wondering is that I just re-read <a href="http://www.subbu.org/blog/2008/12/resource-identity-and-cool-uris">Subbu&#8217;s post on using URIs for identity</a>. He argues there&#8217;s a problem because in using URIs for identity because you might retrieve the &#8220;same&#8221; object in different ways – e.g. you might retrieve a person&#8217;s information in two ways, just with the basic data:</p>

<pre><code>GET /person/abc
Host: www.example.org

200 OK
Content-Type: ...

&lt;person&gt;
&lt;link href="http://www.example.org/person/abc" rel="self"/&gt;
&lt;link href="http://www.example.org/person/abc?include=addressbook"
rel="http://www.example.org/rels/person-with-addressbook"/&gt;
&lt;first-name&gt;Subbu&lt;/first-name&gt;
&lt;last-name&gt;Allamaraju&lt;/last-name&gt;
&lt;email&gt;subbu@nospam.com&lt;/email&gt;
...
&lt;person&gt;
</code></pre>

<p>or including some additional information:</p>

<pre><code>GET /myapp/person/abc?include=addressbook
Host: www.example.org

200 OK
Content-Type: ...

&lt;person&gt;
&lt;link href="http://www.example.org/person/abc?include=addressBook" rel="self"/&gt;
&lt;first-name&gt;Subbu&lt;/first-name&gt;
&lt;last-name&gt;Allamaraju&lt;/last-name&gt;
&lt;addresses&gt;
&lt;address&gt;
...
&lt;/address&gt;
...
&lt;/addresses&gt;
&lt;person&gt;
</code></pre>

<p>The problem, as described by Subbu, is this:</p>

<blockquote>
<p>Let me start with the &#8220;self&#8221; links. The person has a self link in each case, but they are all different. The client can not determine that the person with name Subbu Allamaraju found in the search results is the same as the one in the first or the second response. So, self links are useless to implement these scenarios.      </p>
</blockquote>

<p>But is this really a problem? The way I&#8217;ve used &#8220;self&#8221; links so far is to refer to a <em>canonical</em> resource, i.e. the one that represents the object or entity itself in the default way.</p>

<p>In other words, I&#8217;d turn Subbu&#8217;s second example into this:</p>

<pre><code>GET /myapp/person/abc?include=addressbook
Host: www.example.org

200 OK
Content-Type: ...
&lt;personWithAddressBook&gt;
&lt;link href="http://www.example.org/person/abc?include=addressBook" rel="self"/&gt;
&lt;person&gt;
&lt;link href="http://www.example.org/person/abc" rel="self"/&gt;
&lt;first-name&gt;Subbu&lt;/first-name&gt;
&lt;last-name&gt;Allamaraju&lt;/last-name&gt;
&lt;person&gt;
&lt;addresses&gt;
&lt;address&gt;
...
&lt;/address&gt;
...
&lt;/addresses&gt;
&lt;/personWithAddressBook&gt;
</code></pre>

<p>Arguably, another option could be:</p>

<pre><code>GET /myapp/person/abc?include=addressbook
Host: www.example.org

200 OK
Content-Type: ...

&lt;person&gt;
&lt;link href="http://www.example.org/person/abc" rel="self"/&gt;
&lt;first-name&gt;Subbu&lt;/first-name&gt;
&lt;last-name&gt;Allamaraju&lt;/last-name&gt;
&lt;addresses&gt;
&lt;address&gt;
...
&lt;/address&gt;
...
&lt;/addresses&gt;
&lt;person&gt;
</code></pre>

<p>This has the downside that retrieving the resource identified by the outermost self link would yield something different than what you&#8217;re looking at. Whether this is acceptable or not depends on whether you consider these two resources to be &#8220;identical&#8221;. I&#8217;m undecided whether the official definition of the self link relation allows for this usage.</p>

<p>But in conclusion, I stand by my opinion that URIs can and should be used for identity – whatever &#8220;identity&#8221; might mean for you.</p>

<section class="comments">



<div class="comment" id="comment-1918">
On <a href="#comment-1918" title="Permalink to this comment">January 16, 2009  2:41 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>
said:
<p>Your use of self is precisely in the spec&#8217;s intent. The original motivation for self links was that if feeds had a proper media type, it would be possible to click the feed and have the browser save a temporary copy on which an aggregator is invoked, because the aggregator is registered as an application that handles this media type. But then the aggregator would have no external indication of the URI, which would there need to be inside the feed.</p>

<p>This is exactly how net radio streaming works &#8211; you download a playlist, which is handled by the MP3 player app on your system, and which contains the URL of the stream.</p>

<p>In other words, the self link advertises the URI of the feed which you want aggregators to subscribe to.</p>


<div class="comment" id="comment-1919">
On <a href="#comment-1919" title="Permalink to this comment">January 16, 2009  4:58 PM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<p>I struggled with the definition in the Atom RFC, and concluded that the &#8220;self&#8221; relation is a URI for the link&#8217;s context whatever that be. See <a href="http://tools.ietf.org/id/draft-nottingham-http-link-header-03.txt." rel="nofollow">http://tools.ietf.org/id/draft-nottingham-http-link-header-03.txt.</a> 4287 defines the self as to identify a resource equivalent to the containing element. Neither of these define a canonical resource.</p>

<p>Part of my interpretation is also based on how atom:id is specified. 4287 says &#8220;If multiple atom:entry elements with the same atom:id value appear in an Atom Feed Document, they represent the same entry.&#8221; It does not say that &#8220;if those entries have the same self link&#8221;. That is, it relies solely on atom:id for equivalence and not URIs.</p>

<p>I am not so sure about Aristotle&#8217;s last sentence. Feed subscribers rely on &#8220;alternate&#8221; relation for discovering feed links.</p>

<p>It would be interesting to see Mark and other contributors to 4287 think about this.</p>


<div class="comment" id="comment-1920">
On <a href="#comment-1920" title="Permalink to this comment">January 16, 2009  6:32 PM</a>, <a href="http://plasmasturm.org/" title="http://plasmasturm.org/" rel="nofollow">Aristotle Pagaltzis</a>
said:
<blockquote><p>Feed subscribers rely on “alternate” relation for discovering feed links.</p></blockquote>

<p>In the scenario I described, which is what “self” was originally for, they can’t.</p>


<div class="comment" id="comment-1922">
On <a href="#comment-1922" title="Permalink to this comment">January 16, 2009 11:38 PM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<p>A related question is, if the self link is supposed to be a canonical URI for the resource, what is the need for an &#8220;edit&#8221; relation? Two related links I came across include</p>

<p><a href="http://www.imc.org/atom-protocol/mail-archive/msg06630.html" rel="nofollow">http://www.imc.org/atom-protocol/mail-archive/msg06630.html</a>
<a href="http://diveintomark.org/archives/2004/05/28/howto-atom-id" rel="nofollow">http://diveintomark.org/archives/2004/05/28/howto-atom-id</a></p>


<div class="comment" id="comment-1923">
On <a href="#comment-1923" title="Permalink to this comment">January 17, 2009 11:35 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Mark&#8217;s old entry brings up a relevant issue:</p>

<blockquote>
<p>An entry ID should never change, even if the permalink changes. “Permalink changes”? Yes, permalinks are not as permanent as you might think. Here’s an example that happened to me. My permalink URLs were automatically generated from the title of my entry, but then I updated an entry and changed the title. Guess what, the “permanent” link just changed! If you’re clever, you can use an HTTP redirect to redirect visitors from the old permalink to the new one (and I did). But you can’t redirect an ID. </p>
</blockquote>

<p>I&#8217;m not sure I agree with this. Redirection is exactly what enables IDs to live much longer than any domain value-based key &#8212; i.e. you can have meaningful URIs (with possibly more than one identifying the same URI), unique without requiring centralized minting, without fear of leaving dangling references elsewhere.</p>


<div class="comment" id="comment-1925">
On <a href="#comment-1925" title="Permalink to this comment">January 18, 2009 12:11 AM</a>, <a href="http://blogs.msdn.com/alexj/archive/2009/01/17/the-problem-with-function-signatures.aspx" title="http://blogs.msdn.com/alexj/archive/2009/01/17/the-problem-with-function-signatures.aspx" rel="nofollow">alex.james.myopenid.com</a>

<a href="http://blogs.msdn.com/alexj/archive/2009/01/17/the-problem-with-function-signatures.aspx" class="commenter-profile"><img src="/mt4/mt-static/images/comment/typekey_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>&#8230;So I was reading Stefan Tilkov’s latest post, about link and self. Good stuff.
Now the bit that prompted this post was his discussion of the possibility of having different representations of the same thing&#8230;</p>


<div class="comment" id="comment-1926">
On <a href="#comment-1926" title="Permalink to this comment">January 18, 2009  4:32 AM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<p>Here is a longer response that is longer than a comment :)</p>

<p><a href="http://www.subbu.org/blog/2009/01/uris-vs-identifiers-take-two" rel="nofollow">http://www.subbu.org/blog/2009/01/uris-vs-identifiers-take-two</a></p>

<p>In brief, IMO, the question is whether URI non-equivalence implies resource non-equivalence.</p>


<div class="comment" id="comment-1927">
On <a href="#comment-1927" title="Permalink to this comment">January 21, 2009  1:01 AM</a>, <a href="http://www.brettdargan.com" title="http://www.brettdargan.com" rel="nofollow">bdargan.myopenid.com</a>

<a href="http://www.brettdargan.com" class="commenter-profile"><img src="/mt4/mt-static/images/comment/typekey_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>IMHO URI non-equivalence does not imply resource non-equivalence.
And if that is really important to your application there SHOULD be ways to handle it.</p>

<p>I agree with Stefan on providing a canonical resource. </p>

<p>You can argue both ways that person and person with address book are either two representations of a person resource, or two different resources, that is the great thing about the Web.</p>

<p>For this case in the atom self link what about using the <b>rev tag</b> to identify the canonical resource that makes sense for your application.</p>

<p>Since rev also accepts space separated list of link-types you could mark it with both the type and the uri of the canonical resource.</p>

<pre>

&lt;link href="http://www.example.org/person/abc?include=addressBook" rel="self" rev="canonical <a href="http://www.example.org/person/abc" rel="nofollow">http://www.example.org/person/abc"/&gt;</a>

</pre>

<p>As to whether or not <b>two different entities that returned from different URI</b> are based on the <b>same version of the canonical resource or not</b>:</p>

<p>I would use an EntityTag that encoded some value of resource state and some value of the representation.
Eg. template for xhtml representation may change without resource state and the ETag must change in order to reflect that. </p>

<p>To KISS.</p>

<p>If you had an ETag consisted of something like &#8220;resourceVersion=20,reprVersion={date}
Then your application could extract out the self links with <b>identical rev tags</b> and extract from the ETag the resourceVersion.</p>

<p>I have a longer response, not quite yet ready: <a href="http://brettdargan.com/blog/2009/01/21/link-and-self/" rel="nofollow">http://brettdargan.com/blog/2009/01/21/link-and-self/</a></p>


</section>

