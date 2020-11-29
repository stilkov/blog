---
layout: post
title: "A new kind of (SOA) Registry"
date: "2007-12-03T17:25:00+01:00"
comments: false
categories: 
---

<p><a href="http://pzf.fremantle.org/2007/12/new-kind-of-soa-registry.html">Paul Fremantle</a>:</p>

<blockquote>
<p>So fundamentally the approach we have taken is to build a registry/repository based on REST concepts. And as we looked at the REST space, we kept noticing how close the Atom Publishing Protocol (APP) is to our needs, so we&#8217;ve made that the public remote API to access the repository. Of course, if you are just browsing the registry, you only need a browser - APP is mainly there to support updating resources.</p>
</blockquote>

<p>The Systinet registry heavily relies on RESTful HTTP, too, but it&#8217;s still great to see this. If the road to acceptance of REST, Atom and AtomPub in hardcore SOA camps leads through the metadata use case first, that&#8217;s perfectly fine by me.</p>

<section class="comments">



<div class="comment" id="comment-1531">
On <a href="#comment-1531" title="Permalink to this comment">December  4, 2007  8:37 AM</a>, <a href="http://duryodhan.wordpress.com" title="http://duryodhan.wordpress.com" rel="nofollow">duryodhan</a>
said:
<p>Funny thing .. I just did something quite similar .. I converted all the calls present in the UDDI Subscription API to use ATOM. Creating subscriptions, viewing , deleting etc. the whole thing.</p>

<p>Ofcourse me being a lowly student ,I couldn&#8217;t get the resources to test it all out/publish.</p>

<p>Other than that , has anyone actually seen a major advantage to this sort of work? Other than the simplicity that a new registry will bring (i.e it won&#8217;t inherit any of the UDDI cruft), what other advantage would this bring ? The question of network load is not that important over intranets imho, whereas over the internet every service will use HTTPS so no caching would exist.</p>

<p>So other than simplicity in design , exactly what advantage does this give ? </p>

<p>I know all the REST advantages and I am an advocate of REST , so don&#8217;t run me down with a list of the advantages REST provides in general. I am looking for a list of advantages specific to this use case (intranet registry for services). Using simple XML instead of SOAP falls in simplicity too.</p>


<div class="comment" id="comment-1532">
On <a href="#comment-1532" title="Permalink to this comment">December  4, 2007  9:28 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>I would argue that simplicity in itself is a great advantage, I don&#8217;t see why you&#8217;d discount it this easily. The major benefit is that Atom tooling - clients such as newsreaders or authoring tools, aggregators, pipe and filter tools such as Yahoo! pipes plus all of the HTTP tooling (e.g. wget, curl) can be used to access the registry. Every content item is a first class citizen of the Web. And I don&#8217;t see at all why <em>everything</em> would have to be HTTPS on the Internet, so caching would be a significant benefit, too.</p>

<p>But I find the question strange from someone who has taken a look at the UDDI API, which is so bad that even jotting down service names on pieces of toilet paper seems to be a superior solution.</p>


<div class="comment" id="comment-1533">
On <a href="#comment-1533" title="Permalink to this comment">December  4, 2007  6:15 PM</a>, <a href="http://pzf.fremantle.org" title="http://pzf.fremantle.org" rel="nofollow">Paul Fremantle</a>
said:
<p>Firstly I&#8217;m not sure I like being called a hardcore SOA camp :)</p>

<p>Secondly, I think there are big advantages in this being REST since fundamentally it is about Resource Management. I&#8217;m not convinced everything is Resource management but this usecase definitely IS. Secondly, why APP? Basically we needed to do lots of things that were very close to APP, and it would be really annoying to do all those things but differently, when there&#8217;s a perfectly good standard to help us. And making things available as feeds is definitely important - subscription is a key part of a registry. So it made lots of sense.</p>

<p>And finally Duryodhan&#8230; come and join the fun - you don&#8217;t need to do it on your own - you can join the Open Source project and have fun. We&#8217;d welcome you!</p>

<p>Paul</p>


</section>

