---
layout: post
title: "The Impedance ImperativeTuples + Objects + Infosets =Too Much Stuff!"
date: "2003-10-03T22:48:00+01:00"
comments: false
categories: 
---

<p>An excellent <a href="http://www.jot.fm/issues/issue_2003_09/column1" title="JOT: Journal of Object Technology - The Impedance Imperative Tuples   Objects   Infosets = Too Much Stuff!, Dave Thomas">article</a> by Dave Thomas discusses the problems developers face when having to deal with the relational model, objects, and infosets, to build applications.</p>
<p>Unsurprisingly, my favorite quote is this:</p>
<blockquote>Meta programming [...] or generative programming is clearly the least offensive way to cope with this mess. A model driven generator can clearly address the syntactic redundancy and associated mappings. The generator handles the syntactic redundancy. </blockquote>
<p>Unfortunately, his critcism is also well-founded:</p>
<blockquote>This however is the easy part. Processing is still far too complicated. Unfortunately, most generative tools do not support debugging at the level of the abstraction, forcing programmers to have deep knowledge of the generated code and the underlying framework.</blockquote>
<p>This is very true, and one of my main problems with the <a href="/iqgen/whitepaper.html">approach</a> my own <a href="/">company</a> adovates. While I strongly believe that all but the most trivial systems should be developed in a model-driven way, it's obvious that while it's a pragmatic way, it's dealing with symptoms, not the underlying problem.</p>

