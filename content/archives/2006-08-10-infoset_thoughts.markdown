---
layout: post
title: "Infoset Thoughts"
date: "2006-08-10T07:31:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.goland.org/datainfoset/">This</a> sounds suspiciously like attempting to invent some kind of meta-XML. </p>

<blockquote>
<p>To make matters more complex it&#8217;s pretty obvious to us that we need to have support for multiple data serializations. At a minimum we think we have to support XML and JSON but following the old computer science rule that there are only three numbers &#8220;0, 1 and infinity&#8221; this means we will eventually have to support more.</p>
</blockquote>

<p>It seems to me that the need for having to support both JSON and XML is not at all obvious, so this looks like starting from a false premise. But then again, <a href="http://www.goland.org/">Yaron Goland</a> is an extremely smart guy, so maybe I&#8217;m missing something.</p>

<section class="comments">

<div class="comment" id="comment-1005">
On <a href="#comment-1005" title="Permalink to this comment">August 10, 2006  7:30 PM</a>, <a href="http://www.goland.org" title="http://www.goland.org" rel="nofollow">Yaron Y. Goland</a>
said:
<p>In the case of Live our services have different consumers. We have two major targets though. One target are web page based experiences. Ideally we want our services to be directly consumed by the web page itself which makes JSON ideal. Speaking from recent experience consuming XML in Javascript is a nightmarish experience. JSON makes receiving and processing message content trivial. So we are certain we want to do JSON.</p>

<p>Our other target are server to server communication. Ideally we would use JSON there as well (that would be my preference) but the customer base (it is our belief, maybe we are wrong?) is very comfortable with XML (no matter how much it sucks) so we feel we have to provide a XML interface as well.</p>

<p>There are other interfaces to our services I also expect to see show up, for example, ATOM and RSS. Even though those are largely XML based they have their own effective data models that we have to map into. XML is just their serialization format. But the real action is at the data model level.</p>

<p>So very quickly we find ourselves with business reasons for having to support multiple different infosets/data models. So this forces us to come up with something that works across all of the choices. I don&#8217;t imagine our system is universal and I don&#8217;t imagine it will hold up forever (E.g. eventually the cost of tunneling and such will make us re-evaluate) but given our belief that we can&#8217;t just force a single format (e.g. JSON) on everyone we have to do something.</p>

<p>It&#8217;s worth pointing out, though, that if you look at the infoset I described it looks more than a little like JSON. That isn&#8217;t an accident.</p>


</section>

