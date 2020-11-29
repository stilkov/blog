---
layout: post
title: "Microsoft and BPM"
date: "2004-05-09T22:04:00+01:00"
comments: false
categories: 
---

<p>In an <a href="http://www.bptrends.com/publicationfiles/05%2D04%20ART%20Microsofts%20Next%20Frontier%20%2D%20JJ%20%20Dubray%2Epdf"">interesting paper by Jean-Jacques Dubray tries to predict Microsoft&#8217;s plans in the BPM area. A side remark in the introduction caught my eye:</p>

<blockquote>
<p>[T]he notion of context independence is the  very definition and necessary condition for loose coupling, separating services from components.</p>
</blockquote>

<p>I beg to differ. I recently witnessed an SOA presentation by a smart architect, and it was very obvious that you just as well might have replaced the term &#8220;service&#8221; with &#8220;component&#8221; <em>without anybody noticing at all</em>. If something like this is possible, it clearly shows that a clear definition of the distinction &#8212; provided there is one &#8212; is needed. So I offer one we came up with inside <a href="/">my company</a> after a lot of heated discussion:</p>

<p><em>The major factor that separates a component from a service is that a component is re-used by deploying it into a component runtime, while a service is always used remotely.</em></p>

<section class="comments">

<div class="comment" id="comment-287">
On <a href="#comment-287" title="Permalink to this comment">May 11, 2004 11:29 AM</a>, <a href="http://www.ebpml.org" title="http://www.ebpml.org" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>Stephan:</p>

<p>It is like saying, I cannot have an OO approach with a procedural language like C and vice versa. Of course I can, I can pass a handle to a data structure for every function, once I enter the function, I initialize the context of execution of that function with the data structure pointed to by the handle.</p>

<p>OO relies on a small set of concepts.</p>

<p>Unfortunately, we don&#8217;t have this luxury for services.</p>

<p>Properties I found different:
1) components are extensible but services are composable
2) components can be stateless or stateful, services too, but in addition, you really want to design services in ways that are independent of their context of utilization, just like when you send a letter, the post office has no idea whether it is a PO, an invoice, a check, or a document, &#8230; How complex things would be if the price of shipping letters was dependent on its content !!</p>

<p>JJ-</p>


</section>

