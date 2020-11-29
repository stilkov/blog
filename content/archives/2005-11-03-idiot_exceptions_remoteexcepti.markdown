---
layout: post
title: "Idiot exceptions: RemoteException, SQLException"
date: "2005-11-03T07:58:00+01:00"
comments: false
categories: 
---

<p>Another great <a href="http://jroller.com/page/cpurdy?entry=the_seven_habits_of_highly3">part</a> in Cameron&#8217;s little series. I don&#8217;t agree with his bashing of the <a href="http://en.wikipedia.org/wiki/Seven_Fallacies_of_Distributed_Computing">7 Fallacies</a> (he may have been referring <a href="/blog/st/2004/11/18/a_note_on_distributed_computing.html">this paper</a>, too); the paper is great, just the conclusions the hypothetical unnamed junior Sun software engineer derived from it were wrong.</p>

<p>The semantics of a remote method invocation interface are different than those of a local interface, but to reduce that to a RemoteException that needs to be added to the method signature is just plain missing the point. It also means you can&#8217;t have the same interface signature for local and remote implementations &#8212; which was supposed to be the main benefit in the first place.
<!-- technorati tags start --></p><p style="text-align:right;font-size:10px;">Technorati Tags: <a href="http://www.technorati.com/tag/java" rel="tag">java</a></p><!-- technorati tags end -->


