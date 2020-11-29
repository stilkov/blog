---
layout: post
title: "APP not General Purpose?"
date: "2007-06-10T13:02:00+01:00"
comments: false
categories: 
---

<p>Dare Obasanjo believes <a href="http://some-site.com/">GData/APP fails as a general purpose editing protocol for the Web</a> and points out three problems:</p>

<ol>
<li>Mismatch with data models that aren&#8217;t microcontent</li>
<li>Lack of support for granular updates to fields of an item</li>
<li>Poor support for hierarchy</li>
</ol>

<p><a href="http://www.dehora.net/journal/2007/06/app_on_the_web_has_failed_miserably_utterly_and_completely.html" title="Bill de hÓra: APP on the Web has failed: miserably, utterly, and completely">Bill de hÓra</a> acknowledges that the third is indeed missing from APP, considers the second problem a general issue with PUT, and disagrees about the first one; but he adds two more problems: update resumption and batch/multi-part uploads.</p>

<p><a href="http://www.snellspace.com/wp/?p=681" title="snellspace.com  &raquo; Blog Archive   &raquo; Silly">James Snell</a> considers Dare&#8217;s post &#8220;silly&#8221;. For the first issue, he suggests using a non-Atom resource, an idea that Dare considered and dismissed in his post, claming it would be bad reinvention of WebDAV. For the second issue, he suggests using <a href="http://www.snellspace.com/wp/?p=683" title="snellspace.com  &raquo; Blog Archive   &raquo; Beyond APP - Partial updates">PATCH + a diff format</a>. The third issue (lack of hierarchy support) is something that he doesn&#8217;t see as a problem at all.   </p>

<p>Personally, I don&#8217;t understand Dare&#8217;s WebDAV analogy at all &#8212; it seems to question the very foundation of Atom and APP&#8217;s design, namely the division into entry resources and media resources. I don&#8217;t see many alternatives, unless we come up with the old &#8220;let&#8217;s stuff everything into an XML envelope&#8221; approach, which will lead to <a href="http://www.w3.org/TR/xop10/" title="XML-binary Optimized Packaging">utter</a> <a href="http://www.w3.org/TR/soap12-mtom/" title="SOAP Message Transmission Optimization Mechanism">madness</a>. I&#8217;m not at all sure I like the PATCH approach, too &#8212; I&#8217;m not really keen on having to tunnel even more verbs through POST because they&#8217;re not widely supported. The hierarchy issue only is a problem when you need to have everything inline within the feed; I&#8217;m not sure how much of a problem it is in practice to use the link approach described by <a href="http://www.snellspace.com/wp/?p=681" title="snellspace.com  &raquo; Blog Archive   &raquo; Silly">James</a>. (If you&#8217;re looking for it, there&#8217;s <a href="http://www.w3.org/TR/soap12-rep/" title="Resource Representation SOAP Header Block">a mad solution</a> in the parallel universe, too.)</p>

<p>Most importantly, though, I think it would be very bad if Microsoft &#8212; and I don&#8217;t think one should underestimate Dare&#8217;s influence in this particular area &#8212; chooses to not adopt APP because of some preceived or real technical reasons without trying to resolve them <em>in an APP-compliant way</em> first (i.e. by either finding a workaround, building an extension, or even trying to influence the protocol itself [for which, admittedly, it may be too late now]). As usual, <a href="http://bitworking.org/news/197/In-which-we-narrowly-save-Dare-from-inventing-his-own-publishing-protocol" title="Joe Gregorio | BitWorking | In which we narrowly save Dare from inventing his own publishing
protocol">Joe Gregorio makes this point</a> much better than I can.</p>


