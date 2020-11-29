---
layout: post
title: "QCon SF 2009: Brian Guthrie, Internal DSLs in Groovy, Ruby, and Others"
date: "2009-11-20T19:58:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Brian Guthrie's talk about Internal DSLs in Groovy, Ruby, and Others</p>

<ul>
<li>A DSL is a computer programming language of limited expressiveness focused on a particular domain</li>
<li>PHP originally started out as a DSL, but is no more</li>
<li>SQL is an excellent example of a DSL</li>
<li>Ant as an example of focus on a particular domain</li>
<li>2 flavors of DSLs internal and external</li>
<li>An internal DSL is a kind of API</li>
<li>Expressiveness matters more than the implementation details</li>
<li>methods in a DSL make little sense out of context</li>
<li>Example: fluid interface as DSL, <code>calendar.add("dentist").from(fourPM).to(fivePM).at("123 N Southwest Ave");</code></li>
<li>Example of something that hides intent in lots of ceremony</li>
<li>be declarative, be accepting</li>
<li>every API is a conversation - with yourself, your team members, your business</li>
<li>Patterns for internal DSLs</li>
<li>method chaining | type transmogrification</li>
<li>Explanation of fluid interface pattern using the Calendar example</li>
<li>Example: Mocha, Ruby mocking framework as another example</li>
<li>the finishing problem: what's the final thing that gets returned?</li>
<li>nested closures | semantic model</li>
<li>a lot of times, a DSL is an interface to a library, but there should be an underlying model</li>
<li><p>Awsymandias: DSL to describe Amazon EC2 environments</p>

<p>stack = define ... do |s|
s.instance :db, :instance_type => "m1.large"
end
stack.launch</p></li>
<li><p>(classical model of using ruby class methods and blocks)</p></li>
<li>definition should != domain model</li>
<li>high-level DSL should be separate from the domain model [I very much agree; much of it is due to the tricks you have to do to get something that reads nicely]</li>
<li>keep domain model clean</li>
<li>literal extension | string polishing</li>
<li>monkey patching and converting something that's nearly code to actual code</li>
<li>Groovy example of a simple DSL, similar to what you'd do with Hpricot</li>
<li>digression: shows how to re-open classes in Ruby, using things like <code>5.seconds</code></li>
<li>shotgun approach to opening classes</li>
<li>Groovy's category support enables clean addition of methods to classes</li>
<li>[Didn't know Groovy has some kind of extension method support, pretty neat]</li>
<li>literal extension | method chaining</li>
<li>Example: jQuery uses Javascripts prototype model to add functions to objects as needed to support fluid method chains</li>
<li>method chaining andChaining andChaining</li>
<li>example: Ioke</li>
<li>DSL for Starbuck's weird combinations </li>
<li>ispec is the coolest spec framework ever</li>
<li>a DSL is an API, a language, a conversation</li>
<li>be declarative</li>
<li>know your audience</li>
<li>use fluent interfaces, message chains</li>
<li>nested function | closure</li>
<li>audience comment: Showing a complex API that's simplified misses the point, which is about having domain experts understand the language [I disagree, the domain expert in this example might be someone who understands the simplified code, but not the convoluted mess it's become]</li>
<li>Martin Fowler: both DSLs for programmers and non-programmers are useful</li>
<li>Q. Another useful pattern: natural language interpretation, Cucumber as an example</li>
<li>Q. Real world use? A. Often used in high-level functional test specs</li>
</ul>


