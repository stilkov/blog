---
layout: post
title: "Should You Care about REST Advantages?"
date: "2007-06-12T12:34:00+01:00"
comments: false
categories: 
---

<p>In a <a href="/blog/st/2007/06/11/ws_advantages.html#c85089">comment</a>, <a href="http://www.marcdegraauw.com/">Marc de Graauw</a> points to <a href="/blog/st/2007/06/11/ws_advantages.html#c85089">a blog entry</a> where he writes:</p>

<blockquote>
<p>[W]hen do the advantages of REST (caching, linking and bookmarking to name some) matter less? For one of my customers I design part of the Dutch national healthcare exchange, which is used to exchange patient data between care providers. Nearly all messages involved include the patient id: therefore most messages are pretty unique, and tied to a particular care context: say a patient visits his GP, or collect medication from his apothecary. In such exchanges, caching doesn&#8217;t matter at all. It is possible some data (a patients medication history) is retrieved twice when the patient visits two doctors after another, but in general in such an infrastructure it&#8217;s better to simple turn off caching, GET the data twice in the outlier cases and not be bothered by the overhead involved in caching.</p>
</blockquote>

<p>Without any particularly evolved knowledge about the domain, I would still argue that there is probably a whole bunch of possible resource where caching would make a lot of sense in this case &#8212; a pharmacy, a doctor, a regulation, an insurance company &#8230; and even for those cases tied to a particular patient, the fact that he can bookmark his personal information record, his history, and other personal information would be very useful. In other words: I&#8217;m reasonably confident that Marc&#8217;s design could benefit from being converted to a REST approach &#8212; the fact that the patient ID is part of the message does not seem related to the problem domain, but rather to the solution domain.</p>

<section class="comments">



<div class="comment" id="comment-1363">
On <a href="#comment-1363" title="Permalink to this comment">June 12, 2007  2:29 PM</a>, <a href="http://www.marcdegraauw.com" title="http://www.marcdegraauw.com" rel="nofollow">Marc de Graauw</a>
said:
<p>I have my doubts about the caching for this case, but I certainly agree with the possible advantages of bookmarking and linking. Especially the ability to link documents to related resources in a uniform (URI&#8217;s) and widely supported way (HTTP + browsers or other HTTP-enabled apps) is a clear advantage.</p>


<div class="comment" id="comment-1364">
On <a href="#comment-1364" title="Permalink to this comment">June 12, 2007  7:51 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>I think it would also be useful for Marc to look at the <em>architectural properties</em> that are gained, such as simplicity, scalability, evolvability, etc..  I&#8217;m pretty confident that he&#8217;d need those.  If he does, and is not using the Web, then I&#8217;d be interested to know what architectural constraints he&#8217;s using to obtain them.  Marc?</p>


<div class="comment" id="comment-1365">
On <a href="#comment-1365" title="Permalink to this comment">June 13, 2007  8:32 PM</a>, <a href="http://www.marcdegraauw.com" title="http://www.marcdegraauw.com" rel="nofollow">Marc de Graauw</a>
said:
<p>Mark Baker: &#8220;I think it would also be useful for Marc to look at the architectural properties that are gained &#8230; Marc?&#8221;</p>

<p>True enough. We used HL7 + (a minimal set of) web services in Dutch Healthcare and  I would like to do an analysis of what it would look like with REST, and where the pros and cons of that approach would be - unfortunately that&#8217;s not something for a single blog entry, let alone a comment. But your remark is right on spot.</p>


<div class="comment" id="comment-1366">
On <a href="#comment-1366" title="Permalink to this comment">June 13, 2007  9:24 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>We&#8217;re available for contract work in the Netherlands, BTW :-)</p>


<div class="comment" id="comment-1367">
On <a href="#comment-1367" title="Permalink to this comment">June 14, 2007 10:36 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Me too! 8-)</p>


<div class="comment" id="comment-1368">
On <a href="#comment-1368" title="Permalink to this comment">June 14, 2007 11:51 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>We&#8217;d also be able to form a team! ;-)</p>


</section>

