---
layout: post
title: "Server state and REST"
date: "2003-10-19T22:29:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.dehora.net/journal/">Bill de hÓra</a> writes about <a href="http://www.dehora.net/journal/archives/000308.html">the Web scalability myth</a>:</p>
<blockquote>
The ideal multi-server model is where state is manged on the client. It's the one place on a client-server or service oriented network topology where a single point of failure is ok (think about it).
Now, this idea, this management of state of the server is also where the deployed web (HTTP  browsers) breaks with REST architecture.
</blockquote>
<p>Exactly! Very cool that this comes from a REST proponent. When I try to explain what REST is about, and get to the part of the story where I mention that it's not keeping state in server sessions what makes the Web's architecture so great, experienced developers look at me with doubtful eyes and wonder what the hell I'm talking about, with most of them having spent numerous days of their lives circumventing HTTP's statelesness by means of server-side state ID'd by cookies or session rewriting.</p>
<p>Maybe it's fair to say that REST is what the Web should have been. To use the existing Web as an example for a successful, RESTful system, might just be bogus.</p>

