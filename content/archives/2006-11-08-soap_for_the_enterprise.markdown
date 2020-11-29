---
layout: post
title: "SOAP for the Enterprise"
date: "2006-11-08T08:51:00+01:00"
comments: false
categories: 
---

<p>A great post by <a href="http://wanderingbarque.com/nonintersecting/2006/11/06/rest-and-soap-and-all-that/">Pete Lacey</a>:</p>

<blockquote>
<ol>
<li>The number of people using WS-ReliableMessaging in production today totals zero.</li>
<li>The number of people using all of WS-Security (and not just username tokens) approaches zero</li>
<li>These numbers hold true for WS-this-that-and-the-other-thing too.</li>
</ol>
<p>Zeroing in on WS-Security we can note a few other things. To argue that securing the message (admittedly handy, but handled by XML Digital Signatures and XML Encryption, and only complicated by WSS) and not the protocol is of absolute importance, ignores the fact that we&#8217;ve been building secure applications without this ability since time immemorial. It further ignores that a sound architecture does not ask the endpoint to do the decryption, but that the decryption is done upstream in a web service intermediary of some sort, possibly one that precedes other intermediaries, thus negating this argument entirely.
</p>
</blockquote>

<p>Pete highlights an aspect I did not address <a href="/blog/st/2006/11/06/soap_vs_pox_vs_rest.html">in my post</a> on this topic:</p>

<blockquote>
<p>Yes, the SOAP envelope all by itself can be a good thing, but SOAP is more than an envelope. You can&#8217;t ignore how SOAP is packaged and sold, how it is specified, and how it is implemented. SOAP, despite everyone&#8217;s best efforts, is still a remote object protocol, and somewhere in the message, whether it be in the SOAP Body, in a WS-Addressing header, the outer element of a wrapped doc/lit message, or in the SOAPAction HTTP Header, is the method to invoke on the remote object. And, remember, to the business developer, SOAP is also WSDL, and a mish-mash of encoding styles and serializations, and impenetrable XML Schema, and tModels, and vendor wars, and ESBs, and shoddy specifications, and on, and on, and on.</p>
</blockquote>

<p>I both agree and disagree with this assertion; it&#8217;s true that the current tools and frameworks still carry all of the old RPC baggage, but from a technical standpoint, SOAP <em>can</em> be used differently.</p>

<section class="comments">

<div class="comment" id="comment-1091">
On <a href="#comment-1091" title="Permalink to this comment">November  9, 2006  2:22 AM</a>, <a href="http://www.mnot.net/" title="http://www.mnot.net/" rel="nofollow">Mark Nottingham</a>
said:
<p>Well said. In theory, SOAP can be used in a way that&#8217;s complimentary to the Web. In practice, the tools don&#8217;t let you do this. This tripped up a number of Web enthusiasts who thought they could tame SOAP.</p>

<p>WRT WS-Security, I asked how many people were using it in a crowd of about 500 developers during a panel I was on at last year&#8217;s Java One. Two people held up their hands (and one was Axis maven Glen Daniels). I asked how many would be using it in the next year; still only a smattering of hands. Then we asked the same question about SSL, and most of the room had their hands up. Go figure.</p>


<div class="comment" id="comment-1092">
On <a href="#comment-1092" title="Permalink to this comment">November 10, 2006  5:58 AM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Maybe Mark misread your last sentence Stefan, because I agree with him, and not with you; the tools don&#8217;t let you use SOAP in a Web friendly way.  IMO, that&#8217;s game over for SOAP.</p>


<div class="comment" id="comment-1093">
On <a href="#comment-1093" title="Permalink to this comment">November 10, 2006  7:47 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>OK; let me rephrase that: From a <em>theoretical</em> standpoint, SOAP can be used in a Web-friendly way; from a <em>practical</em> standpoint, it&#8217;s very hard because the tools don&#8217;t give a damn (yet).</p>


</section>

