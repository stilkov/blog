---
layout: post
title: "Steve Vinoski's RPC Talk"
date: "2009-03-18T21:47:00+01:00"
comments: false
categories: 
---

<p>I actually think <a href="http://steve.vinoski.net/blog/2009/03/18/qcon-london-the-best-one-yet/">Steve Vinovski</a>'s <a href="http://qconlondon.com/london-2009/file?path=/qcon-london-2009/slides/SteveVinoski_RPCAndItsOffspringConvenientYetFundamentallyFlawed.pdf">slide deck from his QCon talk</a> is way too wordy to be used in an actual presentation (in other words, Steve, the talk would probably be even more effective if you just used the titles and used the rest as notes). It's excellent for you, dear reader, if you weren't there :-) </p>

<p>I do actually have a real disagreement, though. Steve's research is sound (as always), but I stil think there are two aspects that merit distinct treatment: One is the idea of making a remote invocation look like a local one (bad, bad idea); the other one is to have a different interface for every specific occasion (another bad idea). I think even the most die-hard RPC fans now concede the first one is a failure; it's the second one that is still not widely accepted. </p>

<section class="comments">



<div class="comment" id="comment-1948">
On <a href="#comment-1948" title="Permalink to this comment">March 18, 2009 11:30 PM</a>, <a href="http://steve.vinoski.net/" title="http://steve.vinoski.net/" rel="nofollow">Steve Vinoski</a>
said:
<p>Hi Stefan, thanks for the feedback. A couple things to note:</p>

<ol><li>I specifically wrote the slides to be read, not only to be presented, because I figure far more people see them after the conference than attend the talk. When I gave the talk, I didn&#8217;t read from the slides, but rather just talked about what was on them.</li>
<li>I specifically chose to focus on the history of RPC rather than on all the problems with RPC, including the one you mention, because I think the issues are already more than adequately covered elsewhere. The text in the slides that mentions RPC problems is due to the coverage of those problems in the sources I cite, and from the fact that programming languages played such a key role in the evolution of RPC.</li></ol>

<p>That said, I fully agree with you that the second issue you mention, while certainly not a new issue, is still not widely accepted as being a problem. The answer seems quite obvious to me, and became so when I first read Roy&#8217;s thesis, but I fear too many argue the issue without ever having read Roy&#8217;s thesis, or anything else on the topic for that matter. I&#8217;ve never met Roy in person but I feel like I owe him big time for helping put me on the right track.</p>

<p>All in all, getting the industry over the effects of the long history of language-first distributed systems development just isn&#8217;t going to be easy.</p>


<div class="comment" id="comment-1949">
On <a href="#comment-1949" title="Permalink to this comment">March 19, 2009  9:43 AM</a>, <a href="http://www.mbohlen.de" title="http://www.mbohlen.de" rel="nofollow">Matthias Bohlen</a>
said:
<p>Stefan, what do you mean by &#8220;to have a different interface for every specific occasion&#8221;?</p>


<div class="comment" id="comment-1950">
On <a href="#comment-1950" title="Permalink to this comment">March 19, 2009  9:44 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Matthias, I&#8217;m referring to the difference between a SOAP/WSDL style interface with specific methods for every service vs. the generic (uniform) REST interface.</p>


</section>

