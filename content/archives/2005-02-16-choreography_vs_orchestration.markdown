---
layout: post
title: "Choreography vs. Orchestration"
date: "2005-02-16T22:55:00+01:00"
comments: false
categories: 
---

<p>Some people use the terms Choreography and Orchestration as synonyms, some claim they describe different concepts. A few days ago, I heard a very convincing reasoning. I&#8217;m not sure where it comes from:</p>

<p>In orchestration, there&#8217;s someone &#8212; the conductor &#8212; who tells everybody in the orchestra what to do and makes sure they all play in sync.</p>

<p>In choreography, every dancer follows a pre-defined plan &#8212; everyone independently of the others.</p>

<p>You may question the result. But the explanation is great :-)</p>

<section class="comments">

<div class="comment" id="comment-460">
On <a href="#comment-460" title="Permalink to this comment">February 17, 2005 10:50 AM</a>, <a href="http://www.metamaxim.com" title="http://www.metamaxim.com" rel="nofollow">Ashley McNeile</a>
said:
<p>I distinguish them as follows:</p>

<p>Orchestration defines procedure and Choreography defines protocol.</p>

<p>This fits with the conductor/dance analogy as a procedure is executed by a single party, whereas a protocol defines the rules whereby one party interacts with others.</p>

<p>I also think that &#8220;procedure&#8221; and &#8220;protocol&#8221; can be given formal meanings, and can therefore be formally distinguished. This might be a route to eliminating the confusion on this subject for good. </p>

<p>Rgds
Ashley</p>


<div class="comment" id="comment-461">
On <a href="#comment-461" title="Permalink to this comment">February 17, 2005 10:57 AM</a>, <a href="http://jacek.cz/blog/" title="http://jacek.cz/blog/" rel="nofollow">Jacek</a>
said:
<p>Hi Stefan, I don&#8217;t like this particular comparison because the choreography plan is in effect the same as the the conductor, since the conductor can be expected to be a program and the choreography plan is also a program.</p>

<p>I like to think that orchestration is when a service uses other services to do its job (and it can be scripted using an orchestration language), whereas choreography only describes a limited set of constraints regarding how a service (or a set of services) can be composed into a bigger situation. The difference would be that an orchestration description is complete, whereas a choreography description is not, intentionally so.</p>


<div class="comment" id="comment-462">
On <a href="#comment-462" title="Permalink to this comment">February 17, 2005 10:34 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Ashley, I agree with your points; what I like about the analogy is the easy mental link created (thinking of an orchestra and a conductor, and a ballet and its choreography).</p>

<p>Jacek: While all of this may be a rather philosophical discussion, I believe that something you&#8217;ve left out is that in the choreography (ballet) analogy, all of the participants execute the plan independently of each other. (OK, I admit that the orchestration analogy has the same problem. But anyway :-))</p>


<div class="comment" id="comment-463">
On <a href="#comment-463" title="Permalink to this comment">March 20, 2005 10:27 PM</a>, <a href="http://www.pi4tech.com" title="http://www.pi4tech.com" rel="nofollow">Steve Ross-Talbot</a>
said:
<p>When you have but 3 minutes to make a point it is difficult to do so without stretching analogies. My apologies for doing so.</p>

<p>Orchestration is generally a full-on execution mechanism for recursive composition of services (aka WS-BPEL). Choreography describes the observable behavior that makes up a contract between a set of peers. It doesn&#8217;t say how it is to be achieved just what can be observed. Orchestration is much imperative and choreography declarative. They can work hand-in-hand. For my money declarative is always a good news because we have rather a lot of imperative languages and I&#8217;d rather not see another one for some time.</p>


<div class="comment" id="comment-464">
On <a href="#comment-464" title="Permalink to this comment">August 19, 2005  4:04 PM</a>, <a href="http://www.xilution.com" title="http://www.xilution.com" rel="nofollow">Todd Brunia</a>
said:
<p>Orchestration is something you do while choreography is something that happens.</p>


<div class="comment" id="comment-465">
On <a href="#comment-465" title="Permalink to this comment">August 19, 2005  4:16 PM</a>, <a href="http://www.xilution.com" title="http://www.xilution.com" rel="nofollow">Todd Brunia</a>
said:
<p>Orchestration is something you do while choreography is something that happens.</p>


<div class="comment" id="comment-466">
On <a href="#comment-466" title="Permalink to this comment">May 16, 2006 12:10 AM</a>, jorge
said:
<p>hi, i have a simple cuestions. What is the relasionship between choreography and web services composition? It´s necesary the composition for make choreography?</p>


<div class="comment" id="comment-467">
On <a href="#comment-467" title="Permalink to this comment">May 16, 2006  4:49 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I think the boundaries are not exactly clear. When you build a composite service, you use some programming language to build a service that invokes other services. Arguably, this is in no way different from drawing a diagram, generating a BPEL script, deploying it to some engine, and expose the result a new service.</p>


<div class="comment" id="comment-468">
On <a href="#comment-468" title="Permalink to this comment">August 24, 2006  2:37 PM</a>, Antoon Prins
said:
<p>Jorge, I&#8217;m currently working on a glossery of composite services terms and I came across your question about composite services. So here&#8217;s my explanation: A composite service is a system that arranges existing services in a workflow of some sort (or process if you want) and deploys this arrangement as a service of it&#8217;s own. The added value of this system therefore is a previously non-existing functional construct. The key point is that the composite service is indeed a composition and not a simple collection of existing services and that within the composition the service invocations must! be coordinated, e.g. through choreography where the control is centralized.
So choreography is a mechanisme for coordination (control) in a composite service.</p>


</section>

