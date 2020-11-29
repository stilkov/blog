---
layout: post
title: "Ruby Navigation"
date: "2007-04-05T10:17:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.bofh.org.uk/articles/2007/04/04/the-yes-is-no-problem">Piers Cawley</a> writes about Ruby&#8217;s dynamic nature:</p>

<blockquote>
<p>Say you&#8217;re looking at ActiveRecord::Timestamp#update<em>with</em>timestamps and you want to look at how #update<em>without</em>timestamps does its thing. If you simply grep for def update in the source code, you&#8217;ll find the implementation in ActiveRecord::Base and miss out on the alterations introduced by the locking module. You can&#8217;t simply look at the source code, you have to look at the order in which it was executed, and that can be a headache. Once you understand that you need to look at load order, and you find where that is defined, things get much easier, but things can get seriously scary when plugins come into play too.</p>
</blockquote>

<p>I agree that this is both Ruby&#8217;s blessing and its curse &#8212; Ruby enables some extremely powerful features, but at the cost of creating a powerful mess if these aren&#8217;t used properly. Piers points to Smalltalk as an example of where these problems are addressed properly:</p>

<blockquote>
<p>In a Smalltalk image, you can browse the source code at any time, and it always reflects the current specification of the system. In a Smalltalk implementation of ActiveRecord, as soon as you rename #update to #updateWithouLocking that&#8217;s what it&#8217;s called. When, later you&#8217;re looking at the definition of #update and you want to know what #updateWithoutLocking looks like, you can browse straight too it. The knowledge that #updateWithoutLocking used to be called #update hasn&#8217;t been lost, you&#8217;ll find it in your changes, but it&#8217;s irrelevant to how the system behaves now.</p>
</blockquote>

<p>I&#8217;ve spent some time (though not nearly enough) with Lisp and Scheme, but I&#8217;ve never managed to do the same with Smalltalk. Yet another thing I&#8217;d love to do if I had the time &#8230;</p>


