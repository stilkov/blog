---
layout: post
title: "Domain Specific Languages"
date: "2004-11-13T17:16:00+01:00"
comments: false
categories: 
---

<p>Microsoft has released the <a href="http://lab.msdn.microsoft.com/vs2005/teamsystem/workshop/dsltools/">Microsoft Tools for Domain Specific Languages Technology Preview</a>, a graphical designer for Visual Studio that enables its users to build modelers for custom meta-models. The terminology used by MS seems strange to me; it somehow feels like they try to avoid calling it meta-modeling just to differ from <a href="http://www.omg.org/mof/">the OMG approach</a>. To me, domain specific languages (DSLs) pretty much equal (textual) programming languages &#8212; although you can call a meta-model a language, it seems a little strange to me. Whatever.</p>

<p>I believe that meta-modeling (or DSLs if you prefer) are definitely the way to go. In the same way that there is no single software (or system, or service) architecture that will be a good match for every situation, there will be no single modeling language that is a good fit for every need. If you&#8217;ve read stuff I wrote before, you&#8217;ll know that I believe that this is more than just an analogy; in fact I believe that your modeling language needs to match your architecture. And while with the current crop of CASE tools, UML&#8217;s profiling mechanism (stereotypes and tagged values) are a pragmatic approach &#8212; and one that we at innoQ are applying ourselves rather successfully &#8212;, it&#8217;s obviously not something that one would do if there were better options and tools. (As an aside, I strongly believe that <em>all</em> CASE tools suck. I would be happy to be proven wrong.)</p>

<p>Once upon a time, I used to believe the OMG shared the vision of modeling based on custom meta-models &#8212; after all, what MS now claims as its innovation is something that is very much aligned with the original MOF concept. Sadly, though, with OMG&#8217;s <a href="http://www.uml.org/#UML2.0">ridiculous monster of a modeling language</a> that aims to be everything to everybody, this seems to be no longer the case. (If anybody needs proof that <a href="tp://tbray.org/ongoing/When/200x/2004/11/11/AtomInnovation">Tim Bray</a> is right in asserting that standards bodies should never invent anything, and is tired of using another well-known monster to do so, UML 2 would be a great candidate.) </p>

<p>So in the end, it seems to come down to MOF in its sort-of-working semi-compatible non-standardized incarnation (<a href="http://www.eclipse.org/emf/">EMF</a>), embedded into Eclipse, vs. Microsoft&#8217;s proprietary DSL stuff, embedded into Visual Studio. And the strangest thing is: I&#8217;d rather place a bet on something that is backed by eclipse.org than on an OMG standard nobody gives a fuck about. Care for another example? Take <a href="http://www.omg.org/technology/documents/formal/components.htm">this</a>.</p>

<section class="comments">

<div class="comment" id="comment-401">
On <a href="#comment-401" title="Permalink to this comment">January  5, 2005  4:24 PM</a>, <a href="http://www.theserverside.net" title="http://www.theserverside.net" rel="nofollow">Paul Ballard</a>
said:
<p>You may be interested in participating in an open debate that we are running on Software Factories vs. MDA.  You can view the debate at www.theserverside.net.</p>

<p>Thanks,
Paul Ballard</p>


<div class="comment" id="comment-402">
On <a href="#comment-402" title="Permalink to this comment">April 20, 2005  4:19 PM</a>, <a href="http://blogs.msdn.com/alan%5Fcameron%5Fwills/" title="http://blogs.msdn.com/alan%5Fcameron%5Fwills/" rel="nofollow">Alan Cameron Wills</a>
said:
<p>I guess we called them domain-specific &#8220;languages&#8221; because &#8220;language&#8221; to us means a collection of symbols and rules for sticking them together so as to convey meaning; it doesn&#8217;t matter whether it&#8217;s pictures or text or sounds or gestures or relations in a database or whatever.  Meanwhile, &#8220;modeling&#8221; doesn&#8217;t cover just things that are made with pictures: people in this business have been talking about modeling since it was done in wacky specification languages like VDM and Z, which were long before there were pictures. And more widely, when scientists or mathematicians talk about a model, they mean a set of statements (in any language) that you can draw inferences from.  For me, that&#8217;s the important thing about a model; and a modeling language is any language that helps you do that.</p>


</section>

