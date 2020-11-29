---
layout: post
title: "RESTful Differences"
date: "2006-04-10T15:32:00+01:00"
comments: false
categories: 
---

<p><a href="http://groups.yahoo.com/group/rest-discuss/message/5843">An excellent post</a> by Benjamin Carlyle (on the REST-discuss group):</p>

<blockquote>
<p>REST pushes unformity of verbs and message structure at the network
level, and in fact forces us to rethink the application level
significantly. If the uniform version works, why waste time inventing a
more specific or type-safe version? Why validate the whole data
structure down in some network stack when you can transport the raw data
to where it is used and only process what is needed when it arrives? Why
insist on converting a message into an intricate structure of data when
you are just going to reencode it again for transmission or display it
to a user? Why not just retain it as strings until you know what you
will do with it?</p>
</blockquote>

<section class="comments">

<div class="comment" id="comment-864">
On <a href="#comment-864" title="Permalink to this comment">April 10, 2006 10:46 PM</a>, ramtin
said:
<p>I value the passage where at zero state RPC and REST start converging. The REST representation however looks better. I need to handle the error condition anyway, regardless if it is thrown as an exception or represented as 404.
I belief that the zero-state services are going to be introduced and also to be used. The fact that Googles translation service is not RESTFull does not mean that it is not USEfull.</p>


<div class="comment" id="comment-865">
On <a href="#comment-865" title="Permalink to this comment">April 11, 2006  9:47 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Why do you think the translation service is not RESTful? Because it doesn&#8217;t access a stateful resource?</p>


<div class="comment" id="comment-866">
On <a href="#comment-866" title="Permalink to this comment">April 11, 2006 11:43 AM</a>, ramtin
said:
<p>according to benjamin yes :-)</p>

<p>snip ..
This is not useful. The starting point for understanding a RESTful
architecture is to think about the state that needs to be retained on
the server side in order to keep things ticking along. In this case and
cases like it, there is no server-side state. Because there is no
server-side state, there are no server-side resources that need to exist
to manage or delimit that state.
&#8230;snap</p>


<div class="comment" id="comment-867">
On <a href="#comment-867" title="Permalink to this comment">April 11, 2006  1:15 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I read the same comment and seem to understand it as the exact opposite. In cases where there is no server-side state (and I would say this applys to the Google translator), REST does not suggest you invent one. Only if there is state it should be modeled as stateful resources.</p>


<div class="comment" id="comment-868">
On <a href="#comment-868" title="Permalink to this comment">April 11, 2006  4:03 PM</a>, ramtin
said:
<p>ups! I skipped the part where the original author creates the artifical state by &#8220;/convert.cgi?format=pdf&amp;document=mydocument.html&#8221;.</p>


</section>

