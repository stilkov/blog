---
layout: post
title: "Messaging vs. RPC"
date: "2005-09-11T20:45:00+01:00"
comments: false
categories: 
---

<p>Nothing like a nice pissing contest: Rich Turner and John Cavnar-Johnson go back and forth about how to do distributed programming the right way. The starting point was Rich&#8217;s <a href="http://msdn.microsoft.com/webservices/choosing/default.aspx?pull=/library/en-us/dnwebsrv/html/dsgprescriptiveguidance.asp">whitepaper on Developing Distributed Services Today</a>, to which John posted a somewhat less than favorable <a href="http://pluralsight.com/blogs/johncj/archive/2005/08/04/13855.aspx">comment</a>. Rich <a href="http://blogs.msdn.com/richardt/archive/2005/09/06/461617.aspx">responded</a> (a little childishly, IMO, even in the edited version); John <a href="http://pluralsight.com/blogs/johncj/archive/2005/09/11/14758.aspx">followed up</a> again. </p>

<p>The central issue is whether or not an RPC-style programming model is a good choice for building modern distributed systems (I agree with John that it&#8217;s not.) Not being an Indigo/WCF programmer, I was a little puzzled by this paragraph, though:</p>

<blockquote>
<p>At the heart of the internal model of Indigo is a very powerful concept of a message. Unfortunately, this conceptual model is never exposed to developers and architects directly. You can only manipulate it indirectly, either through low-level XML processing or by applying a set of opaque attributes to a .NET type.</p>
</blockquote>

<p>From <a href="http://pluralsight.com/blogs/dbox/archive/2005/02/12/5819.aspx">this old post</a> of Don Box, I understood that the <code>ProcessMessage</code> API was exactly what John is looking for &#8212; an API that gives you direct access to the message, without any method dispatch or O/X mapping going on. Can any reader knowledgeable in .NET maybe enlighten me? (Do I actually <em>have</em> .NET-aware readers? :-) )</p>

<section class="comments">

<div class="comment" id="comment-623">
On <a href="#comment-623" title="Permalink to this comment">September 12, 2005  7:36 AM</a>, <a href="http://savas.parastatidis.name" title="http://savas.parastatidis.name" rel="nofollow">Savas Parastatidis</a>
said:
<p>Yeah, I was surprised by that statement too. Indigo does provide a message-oriented API and it&#8217;s my understanding that the next beta 2.0 will make it even more easier to access a message&#8217;s XML. I just didn&#8217;t want to comment on this RPC vs messages exchange whilst my mind was in my move to Seattle. I agree with you of course&#8230; RPC is sooooo 90s.</p>


</section>

