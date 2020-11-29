---
layout: post
title: "[OOP 2008] Conference Report"
date: "2008-01-25T23:01:00+01:00"
comments: false
categories: 
---

<p>I had a busy week at <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/index.php?lang=en&amp;cat=main_en">OOP 2008</a>, which turned out to be a great conference again. I was responsible for the very first Ruby and Ruby on Rails track at OOP (and, AFAICT, any bigger German conference), which started off on Monday with my colleagues Phillip Ghadir and Rubén Parés-Selders giving a <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=5">one-day RoR tutorial</a>. I only attended for a few minutes, but it seems that &#8212; as usual &#8212; it was a lot of fun for everybody involved. I presented on <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=10">Ruby Metaprogramming</a>. Fortunately, I had an extremely smart audience, and I thoroughly enjoyed introducing my favorite Ruby features. I&#8217;ve put <a href="/blog/st/presentations/2008/2008-01-21-Metaprogramming-Ruby--OOP-2008.pdf">the slides online</a>, but I actually spent most of the time just demoing stuff by coding it live.</p>

<p>Tuesday started with Bruce Tate (who is a very nice guy, despite his own claims of being a radical), <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?cat=session&amp;ID=18">talked about ChangingThePresent.org</a>, a charity web site that his team built using Rails. <a href="http://changingthepresent.org/">ChangingThePresent.org</a>&#8217;s concept is simple &#8212; you basically shop for donations supporting a cause, and then make a gift of them to somebody else. For example, instead of sponsoring some useless marketing gimmick, such as a conference bag, you can send someone a card saying that you&#8217;ve donated a goat or a chicken in their name, or provided medicine to some hospital, or any other number of donations that you seen on their web site. Another topic in is talk were his opinions on teams and staffing; this merits an entry of its own, so I&#8217;ll skip it here.</p>

<p><a href="http://dannorth.net/">Dan North</a> of ThoughtWorks almost didn&#8217;t manage to give <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=27">his talk</a>; I was about ready to step in when he did show up, having arrived with a flight that was late, fortunately neutralized by a taxi driver who drove like crazy. At his specific request, I&#8217;ve put up <a href="/blog/st/presentations/2008/dan-intro.001-001.jpg">the slide</a> I showed while the room was already filled with eager attendees :-) Dan&#8217;s talk on Ruby on Rails&#8217;s enterprise readiness was great (as I had expected.) Money quote: &#8220;The question is not whether Rails is ready for the enterprise, but whether the enterprise is ready for Rails&#8221;.</p>

<p>Next up were Norman Timmler and Andreas Wachowski, who talked about <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=36">the integration of XING&#8217;s Rails-based apps with its Perl-based core platform</a>. This was a very good talk, very unpretentious and down-to-earth, and based on a lot of experience gained in practice.</p>

<p>Finally, <a href="http://www.workingwithrails.com/person/5064-joshua-sierles">Joshua Sierles</a>, who had stepped in for Obie Fernandez, did a great job <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=44">introducing Rails</a> with just a dozen slides for introduction and a live coding session that ended in a text message being sent to his cell phone from the Web app he&#8217;d just built from scratch.</p>

<p>I also gave <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=63">a talk on REST for SOA</a>; I&#8217;ve put up <a href="/blog/st/presentations/2008/2008-01-23-REST--OOP.pdf">the slides</a>, too, although regular readers won&#8217;t find anything excitingly new. But REST was still news to most of the audience &#8212; I believe about 10 percent claimed to understand it, and most of the attendees were there to find out what the fuzz is about.        </p>

<p>I also participated in <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=79">a panel on SOA</a> and in <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2008/program.php?lang=en&amp;cat=session&amp;ID=150">a slightly less serious and funny panel</a> that look at the past year in IT (both led by Nicolai Josuttis), and was involved in the OOP&#8217;S &#8220;Dynamic Languages Shootout&#8221;. More on the latter later :-)</p>

<section class="comments">



<div class="comment" id="comment-1596">
On <a href="#comment-1596" title="Permalink to this comment">January 29, 2008  9:41 PM</a>, Patrick Podenski
said:
<p>Stefan,</p>

<p>I like your presentation on REST and SOA! It communicates quite clearly what REST is all about. I will share this presentation with others interested in REST and SOA.</p>

<p>One thing that I wondered about was whether one of the links on page 8 (2. Link Things To Each Other) was consistent with your other resource information.</p>

<p>In the following XML snippet, shouldn&#8217;t the self attribute of order actually refer to &#8216;http://example.com/orders/2007/10/776654&#8217; instead of ’http://example.com/customers/1234’? It seems to me that &#8216;self&#8217; would be an identifier for the order per se. The URI that I am referring to was shown on page 7 (1. Give Every “Thing” an ID).</p>

<p>I included the XML below but wasn&#8217;t sure how to format it in your blog such it would display  in literal format.</p>

<pre>&lt;order self=’http://example.com/customers/1234’&gt;
&lt;amount&gt;23&lt;/amount&gt;
&lt;product ref=’http://example.com/products/4554’ /&gt;
&lt;customer ref=’http://example.com/customers/1234’ /&gt;
&lt;/order&gt;
</pre>


<div class="comment" id="comment-1597">
On <a href="#comment-1597" title="Permalink to this comment">January 29, 2008 10:20 PM</a>, Stefan Tilkov

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>You are perfectly right, I&#8217;ve fixed this in other locations, e.g. here: <a href="http://www.infoq.com/articles/rest-introduction">http://www.infoq.com/articles/rest-introduction</a></p>


</section>

