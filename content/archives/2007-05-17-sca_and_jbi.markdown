---
layout: post
title: "SCA and JBI"
date: "2007-05-17T22:19:00+01:00"
comments: false
categories: 
---

<p><a href="http://blogs.jboss.com/blog/mlittle/?permalink=Red_Hat_and_JBI_2_0.txt">Mark Little writes</a>:</p>

<blockquote>
<p>With any luck, 2008 will be the year of JBI (at long last!)</p>
</blockquote>

<p>His (long) entry is very much worth reading if you&#8217;re interested in both JBI and SCA. But while I have a lot of respect for Mark, I still maintain my opinion that both JBI and SCA are not worth the hassle.</p>

<p>JBI aims to standardize something that&#8217;s not worth standardizing &#8212; namely the internal interfaces between an ESB&#8217;s components. I&#8217;m not at all an ESB fan, but much less do I see the vendors collaborating to create pluggable components. JBI 1.0, to be quite frank, is not a great standard &#8212; it leaves such an amazing number of things open that I&#8217;d place almost any bet that two independently developed JBI components will not work together unless they&#8217;ve been built specifically for the same container. Even WS-* Web services are much more interoperable than JBI components, even though they can be developed in different languages and run on different platforms (which is not the case for JBI). Sure, maybe JBI 2.0 will improve dramatically, but I remain highly doubtful.</p>

<p>Regarding SCA, I simply refuse to believe both in a server-side component assembly model (the &#8220;just build those Lego&trade; bricks and stick them together&#8221; model) based on arbitrary interfaces, as well as in the possibility of having the same kind of abstract model for both fine-grained and coarse-grained services. I admit I&#8217;ve not yet looked into the programming model, but I thought <a href="https://jax-ws.dev.java.net/">we already had one</a> (whatever its quality) in the Java space.</p>

<p>And last of all, I don&#8217;t see that you lose anything by using neither JBI nor SCA &#8212; independently of whether you&#8217;re a WS-* or REST guy, they just seem to be another great excuse for the vendors to build new products.</p>

<section class="comments">



<div class="comment" id="comment-1307">
On <a href="#comment-1307" title="Permalink to this comment">May 18, 2007 10:01 AM</a>, <a href="http://service-architecture.blogspot.com" title="http://service-architecture.blogspot.com" rel="nofollow">Steve Jones</a>
said:
<p>The point of both JBI and SCA (which attack different problems) is for multi-technology development.  So sure JAX-WS is great if you want to write in Java, but what if you have a service that wants to have some BPEL, Biz Rules as well as Java, how to you package that up and how do the different bits of that service communicate (as infrastructure).</p>

<p>JBI and SCA are both aimed at multi-technology problems which aren&#8217;t solved elsewhere.</p>


<div class="comment" id="comment-1308">
On <a href="#comment-1308" title="Permalink to this comment">May 18, 2007 12:35 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>If I have a Java client written using JAX-WS, a service implemented in .NET/WCF, and a WS-BPEL engine, they&#8217;ll all be able to work together (in theory, at least) &#8212; all without SCA or JBI. I question the need for another integration layer, especially a Java-based one (JBI) and I don&#8217;t believe in the usefulness of an assembly model.</p>


<div class="comment" id="comment-1309">
On <a href="#comment-1309" title="Permalink to this comment">May 18, 2007  6:01 PM</a>, <a href="http://service-architecture.blogspot.com" title="http://service-architecture.blogspot.com" rel="nofollow">Steve Jones</a>
said:
<p>On JBI its not a developer integration challenge (which is where some of the crap examples have talked about it) its a product integration challenge.  So its how the rules engine will share messages and information with the process engine and how these two can be split effectively so you can replace the bits independently and do upgrades independently.</p>

<p>Its true that WS gives you a way to do invocation of the end-point across platforms and that it great for external integration, but SCA gives you the ability to have a single development model across the WS and other protocol stacks (in this way the client side model is like WCF, but its just part of the puzzle).</p>

<p>For SCA the big win (for me) is around service deployment and for JBI its around the service lifecycle.  There is a big assumption in JAX-WS and WCF that a service is a single technology thing, which means its pretty fine grained and then you have your BPEL &#8220;service&#8221; calling your Java &#8220;service&#8221; and your rules &#8220;service&#8221; being called from both.  The SCA (and in a different way JBI) view is that actually a service might include all of those technologies so its important that these are deployed and managed as a single entity (SCA) and that the engines that they rely on work in a known and consistent way (JBI).</p>

<p>For services to be bigger things that just low level technologies then this sort of technology agnostic binding is (IMO) certainly required.</p>


</section>

