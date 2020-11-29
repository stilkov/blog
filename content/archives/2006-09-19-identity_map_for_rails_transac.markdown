---
layout: post
title: "Identity Map for Rails Transactions"
date: "2006-09-19T09:03:00+01:00"
comments: false
categories: 
---

<p>A while back, <a href="http://www.adam-bien.com/roller/page/abien?entry=ror_and_transactions_the_solution">Adam Bien suggested</a> a possible solution to the problem of Rails reloading objects during a transaction. Now <a href="http://feeds.feedburner.com/~r/MyHovercraftIsFullOfEels/~3/23864380/000354.html">Simon Harris</a> has created a Rails plugin that adds an <a href="http://www.martinfowler.com/eaaCatalog/identityMap.html">identity map</a> to Active Record, all without having to change the framework.</p>


