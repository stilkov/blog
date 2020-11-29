---
layout: post
title: "Yahoo! Mail API Madness"
date: "2007-03-29T19:45:00+01:00"
comments: false
categories: 
---

<p><a href="http://intertwingly.net/blog/2007/03/29/The-Cost-of-Independence">Sam Ruby</a> quotes from the new <a href="http://developer.yahoo.com/mail/docs/html/wwhelp/wwhimpl/common/html/wwhelp.htm?context=yMail&amp;file=Overview.3.1.html#1569615">Yahoo! Mail API documentation</a>:</p>

<blockquote>
<p>Use WSDL to construct your SOAP client. Even though a service endpoint URL is indicated in the WSDL, you must provide a location URL to your SOAP toolkit. This is necessary to transmit the application ID and the WSSID. In addition, you must set the cookie header containing the cookie that was returned with the WSSID when you credentialed the user in the previous step.</p>
</blockquote>

<p><a href="http://blog.whatfettle.com/2007/03/29/show-me-the-interoperability/">Paul Downey</a> has <a href="http://developer.yahoo.com/mail/code/">another quote</a>:</p>

<blockquote>
<p>Not all languages that support SOAP are compatible with the Yahoo! Mail Web Service, but all languages that support JSON-RPC are.</p>
</blockquote>

<p>First of all, there&#8217;s support for the non-SOAP (JSON-RPC) version in more languages, secondly, the way SOAP is used here is so exotic it&#8217;s pretty unlikely any client developer will figure out how to use it anyway. </p>

<p>Maybe even more absurd is a fact noted by <a href="http://www.25hoursaday.com/weblog/PermaLink.aspx?guid=14a729f2-f534-4e62-91f5-9f0ebc848f4c">Dare Obasanjo</a>:</p>

<blockquote>
<p>[A]lthough Yahoo! provides SOAP and RESTful JSON web services for accessing one&#8217;s mail, I still can&#8217;t get POP access to my Yahoo! mail without shelling out $20/year.</p>
</blockquote>

<p>OK, I know, I know, company firewalls usually block POP and IMAP traffic. But still, shouldn&#8217;t the first protocol used for exposing a mail service actually be a <em>mail</em> protocol?</p>

<p>P.S. I&#8217;m continually amazed at the English language&#8217;s ability to &#8220;verb&#8221; nouns. &#8220;Credentialed&#8221;? Are you kidding?</p>

<section class="comments">

<div class="comment" id="comment-1227">
On <a href="#comment-1227" title="Permalink to this comment">March 29, 2007  8:16 PM</a>, <a href="http://unclehulka.com/ryan/blog/" title="http://unclehulka.com/ryan/blog/" rel="nofollow">Ryan Kennedy</a>
said:
<p>Stefan, the mail web service is quite a bit richer than what you can get from POP and IMAP. POP is pretty crippled and IMAP is inherently expensive to run, being a stateful protocol. Web services, on the other hand, can be quite lightweight and allow us to add several capabilities that aren&#8217;t present in either POP or IMAP (sending, advanced searching, mailbox preference controls, external mail fetching, etc).</p>

<p>Ryan Kennedy
Yahoo! Mail Web Service</p>


<div class="comment" id="comment-1228">
On <a href="#comment-1228" title="Permalink to this comment">March 29, 2007  8:24 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks for taking the time to reply. I understand the advantages of a Web services protocol (in the broadest sense) over POP and IMAP, but that doesn&#8217;t change the fact that both are supported by a gazillion of clients already. But I&#8217;m more interested in understanding why you exposed a SOAP API like this instead of sticking with a REST API (which, at least at a first look, the JSON RPC doesn&#8217;t seem to be).</p>


<div class="comment" id="comment-1229">
On <a href="#comment-1229" title="Permalink to this comment">March 29, 2007 11:04 PM</a>, <a href="http://unclehulka.com/ryan/blog/" title="http://unclehulka.com/ryan/blog/" rel="nofollow">Ryan Kennedy</a>
said:
<p>No, we don&#8217;t have a REST API. You have to understand a little more of what&#8217;s going on internally. We acquired Oddpost and had to mate them to the Yahoo! Mail backend. They were already talking to their SOAP service, so the easiest path was to implement SOAP for them. We did that and eventually added JSON-RPC support.</p>

<p>This newly offered web service is THAT web service, which is why we have an RPC slant. That&#8217;s not to say we won&#8217;t offer REST, it&#8217;s just that RPC is where the demand has been. I hope that people who prefer REST will speak up and let us know that they&#8217;d be willing to write apps on the web service if we offered a REST interface. That&#8217;s something I can take back to our managers to convince them to let me build it.</p>

<p>Ryan Kennedy
Yahoo! Mail Web Service</p>


<div class="comment" id="comment-1230">
On <a href="#comment-1230" title="Permalink to this comment">March 29, 2007 11:07 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Perfectly sensible &#8212; thanks.</p>


<div class="comment" id="comment-1231">
On <a href="#comment-1231" title="Permalink to this comment">March 30, 2007  1:48 AM</a>, <a href="http://netzooid.com" title="http://netzooid.com" rel="nofollow">Dan Diephouse</a>
said:
<p>There is a lovely word for that&#8230; &#8220;verbify&#8221;. As in &#8220;Joe verbified the word credential.&#8221; :-)</p>


<div class="comment" id="comment-1232">
On <a href="#comment-1232" title="Permalink to this comment">March 30, 2007  2:13 AM</a>, karl
said:
<p>Time to <a href="http://www.prescod.net/rest/restmail/" rel="nofollow">reinvent Mail using REST</a></p>


<div class="comment" id="comment-1233">
On <a href="#comment-1233" title="Permalink to this comment">April  1, 2007  7:53 PM</a>, <a href="http://jim.webber.name" title="http://jim.webber.name" rel="nofollow">Jim Webber</a>
said:
<p>British English tends not to turn nouns into verbs - it sounds like gibberish. American (as I understand it technically a dialect of English) however is much more tolerant of nouns crossing over.
English seems to be a good host language for DSLs (like Yanklish, Hinglish, Singlish, Chinglish, etc)&#8230;</p>


</section>

