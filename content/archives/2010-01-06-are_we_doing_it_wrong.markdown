---
layout: post
title: "Are We Doing it Wrong?"
date: "2010-01-06T12:08:00+01:00"
comments: false
categories: 
---

<p>Tim Bray has a <a href="http://www.tbray.org/ongoing/When/201x/2010/01/02/Doing-It-Wrong">very interesting post</a> on enterprise development – check out the comments. I&#8217;ve said something like this there too, but like to elaborate a bit:</p>

<p>I strongly believe that building your own software is an essential ingredient for a successful, information-centric company such as a bank, an insurance company, or even a telco. I think it&#8217;s an excellent idea to use commodity services in all areas where you don&#8217;t have, nor want to have, any competitive advantages. But you should build something on your own if you want to innovate.</p>

<p>I also wrote that while it&#8217;s pretty fashionable to deride the claims that enterprise software is &#8220;inherently more complex&#8221; than much of the Web stuff, it <em>is</em> in fact true sometimes. One of the reasons is the absurd complexity of laws in some countries, and the rate in which more and more complexity is added to them. If you&#8217;re in a regulated business, this tends to create a huge amount of complexity you simply can&#8217;t escape from (unless you change the laws, or rather the whole legislative and political process, of course).</p>

<p>Another source of complexity is the business side, coming up with more and more complex product requirements. In many Web companies, there&#8217;s no difference between the business and technology decision makers – perfect &#8220;business/IT alignment&#8221;. This simply isn&#8217;t true in most large businesses. As a tech person, you have a choice of quitting or adapting to it …</p>

<p>I still agree that many of the practices, technologies and tools used on the Web can be put to excellent use within the enterprise. But even if you are given free choice of weapons in terms of tools and methodology, the typical constraints can ruin your day pretty soon.</p>

<p>Anyway, while I see some issues with Tim&#8217;s post, I still think there&#8217;s a lot of truth in it. Given that I spend most of my time in enterprise contexts, I strongly believe <a href="/blog/st/2009/09/the_web_in_the_enterprise.html">putting more of the Web into the enterprise</a> is an excellent idea. </p>

<section class="comments">



<div class="comment" id="comment-2091">
On <a href="#comment-2091" title="Permalink to this comment">January  6, 2010  1:15 PM</a>, <a href="http://twitter.com/mike__kelly" title="http://twitter.com/mike__kelly" rel="nofollow">Mike Kelly</a>
said:
<p>The key is defining a given company&#8217;s core competence.</p>

<p>For co&#8217;s in heavily regulated markets, part of their core competence should include operating efficiently within that complex environment - for such companies this will most likely exclude commodity SaaS, but not necessarily commodity platforms or infrastructure, or open standards, development frameworks, etc. where abouts in the &#8216;cloud stack&#8217; or open technologies they can draw from should be evaluated in this full context.</p>


<div class="comment" id="comment-2092">
On <a href="#comment-2092" title="Permalink to this comment">January  6, 2010  5:21 PM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<blockquote>
In many Web companies, there’s no difference between the business and technology decision makers – perfect “business/IT alignment”.
</blockquote>

<p>The picture isn&#8217;t rosy in web/tech companies too. When there are business requirements, those sometimes tend to  reflect the most vocal blogger of the day.</p>


<div class="comment" id="comment-2093">
On <a href="#comment-2093" title="Permalink to this comment">January  6, 2010  6:09 PM</a>, <a href="http://www.pautasso.info/" title="http://www.pautasso.info/" rel="nofollow">Cesare Pautasso</a>
said:
<p>This discussion on Enterprise Software Complexity reminds me of this interesting paper from 2007:</p>

<p><a href="http://sloanreview.mit.edu/the-magazine/articles/2007/fall/49101/the-trouble-with-enterprise-software/" rel="nofollow">http://sloanreview.mit.edu/the-magazine/articles/2007/fall/49101/the-trouble-with-enterprise-software/</a>
<a href="http://www.communitech-solutions.com/Resources/The%20Problem%20with%20Enterprise%20Software.pdf" rel="nofollow">http://www.communitech-solutions.com/Resources/The%20Problem%20with%20Enterprise%20Software.pdf</a></p>

<p>Interesting to read about what was the solution to simplify things back then :-)</p>


<div class="comment" id="comment-2094">
On <a href="#comment-2094" title="Permalink to this comment">January  6, 2010  7:15 PM</a>, <a href="http://parand.com/say/" title="http://parand.com/say/" rel="nofollow">parand.com</a>

<a href="http://parand.com/say/" class="commenter-profile"></a>
said:
<blockquote>I strongly believe that building your own software is an essential ingredient for a successful, information-centric company such as a bank, an insurance company, or even a telco.</blockquote>

<p>Having recently worked with an insurance company to help them build their own software, I walked away with the opposite conclusion - only the largest players in each market should be building their own software. I don&#8217;t believe enterprise software is inherently orders of magnitude more difficult than web software, but I do believe that the vast majority of enterprises are ill equipped to build their own wares.</p>

<p>A small or medium sized insurance company is not going to hire the best software developers. They will hire reasonably skilled personnel, and oversee them with a large bureaucratic management body. The software they develop will be designed by committee and lacking in usability and polish.</p>

<p>I&#8217;ve seen then happen so frequently that I&#8217;m convinced it takes a near miracle to avoid.</p>

<p>My current thinking is that small and medium sized players are best served using a combination of off-the-shelf software and small to medium sized vendors who develop (and possibly even operate) software for them. It&#8217;s lower cost and faster to market, but also results in higher quality products.</p>


<div class="comment" id="comment-2095">
On <a href="#comment-2095" title="Permalink to this comment">January  6, 2010  7:43 PM</a>, Jess Austin
said:
<p>With respect to heavily regulated industries, you&#8217;re right that regulations make straightforward development difficult, but that&#8217;s actually the intention of the largest regulated companies.  I&#8217;ve worked in telecom, and I&#8217;ve seen the PUC meetings where this crap is cooked up.  Once upon a time it was motivated by killing the CLECs and creating boondoggles like USF, but they&#8217;ve done it so long now they don&#8217;t know how to do it differently.  That doesn&#8217;t make building or maintaining the systems very pleasant.</p>

<p>That said, it isn&#8217;t always the case that complicated rules dictate custom development.  For example, if you sell taxable products or services in numerous USA jurisdictions, you really need to get Vertex, and forget about hiring a 20-head tax compliance department, plus five developers for them to harangue.  Your server admin spends ten minutes a month installing the rate update, your shopping cart calls the Vertex library, and you concentrate on your business.  Unless your core business is manipulating the regulatory apparatus (don&#8217;t laugh, this is certainly the case in telecom!), you might be very well served to let experts do your regulatory compliance for you.</p>

<p>With respect to committee design, Parand, I think it&#8217;s only certain well-run software-selling companies that avoid that pitfall.  It seems universal in other industries.</p>


<div class="comment" id="comment-2096">
On <a href="#comment-2096" title="Permalink to this comment">January  6, 2010  8:38 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>@parand: In my experience, the alternative to building custom software is to use an off-the-shelf package requiring a customization effort that&#8217;s at least equal to, and sometimes exceeds the cost of building the custom solution. </p>

<p>I do agree regarding the problems with (some, not all) in-house staff – in fact, a company like mine makes money with large enterprise customers for precisely this reason.</p>


<div class="comment" id="comment-2097">
On <a href="#comment-2097" title="Permalink to this comment">January  8, 2010  5:39 PM</a>, <a href="http://www.johndapps.com/" title="http://www.johndapps.com/" rel="nofollow">johnapps</a>

<a href="http://www.johndapps.com/" class="commenter-profile"></a>
said:
<p>Great discussion! Is this not where the whole concept and &#8220;spirit&#8221; of open source should come into play? Perhaps I am just naive and optimistic, but the sooner inudstry realises that open source (I do not mean products here, but the concept) is the way to go, the sooner we will move along faster.</p>


<div class="comment" id="comment-2098">
On <a href="#comment-2098" title="Permalink to this comment">January 14, 2010 11:56 AM</a>, <a href="http://it-tactics.blogspot.com" title="http://it-tactics.blogspot.com" rel="nofollow">Martin Wildam</a>
said:
<p>I wasted weeks of time last year evaluating ECM systems for our customer needs and my final result is: It is similar everywhere. For getting real efficient and most benefit for business needs from the actual point of view, you must develop something new.</p>

<p>Even the bigger Open Source systems have been designed around 2004 and earlier. Other commercial systems have their roots even before 2000 and are grown huge and are inefficient. SAP is another good example. I don&#8217;t know any single user who likes it.</p>


</section>

