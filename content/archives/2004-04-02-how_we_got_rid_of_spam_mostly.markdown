---
layout: post
title: "How we got rid of spam (mostly, that is)"
date: "2004-04-02T21:55:00+01:00"
comments: false
categories: 
---

<p>At <a href="/">innoQ</a>, we use Lotus Domino/Notes for our email and collaboration needs. Notes does not have any real built-in anti-spam features, and most of the stuff you can get product-wise is based on either POP3 or IMAP (which we don&#8217;t use) or works only with specific clients (most notably, Outlook). So we have lived with the occasional 50 to 100 spam mails per person per day for quite some time - until I couldn&#8217;t stand it anymore.</p>

<p>After having used it for two months now, I can definitely recommend <a href="http://www.appriver.com/">AppRiver</a>&#8217;s service as a solution. This is a company that provides anti-spam (and anti-virus) features as a service, without requiring any local installation. The way it does this is that your domain&#8217;s DNS MX records are changed so that all the email flows through their servers, gets filtered there, and is then forwarded to the company mail server. Mail identified as spam (or containing a virus) is &#8220;held&#8221; at AppRiver&#8217;s servers, and you can use a Web UI to check every other day to see if there are any false positives. </p>

<p>In the last 60 days, we had one such false positive (i.e. a non-spam email that got caught in the spam filter), and usually around 2-3 spam mails per day make it through (false negatives). Other than that, there are one or two minor issues:</p>

<ul>
<li>the Web UI really should be secured via SSL</li>
<li>support requests are handled well; annoyingly, though, mails to the support email address generate an acknowledgment that promises an answer within minutes &mdash; which is a promise that probably doesn&#8217;t apply to my time zone</li>
</ul>

<p>Other than that, I&#8217;m very satisfied with AppRiver&#8217;s services; if you&#8217;re looking for a hassle-free, server-side anti-spam solution that works with any mail setup, I can highly recommend it.</p>

<section class="comments">

<div class="comment" id="comment-247">
On <a href="#comment-247" title="Permalink to this comment">April 21, 2004  4:09 AM</a>, <a href="http://www.appriver.com" title="http://www.appriver.com" rel="nofollow">AppRiver Support</a>
said:
<p>Hi Stefan,</p>

<p>Thanks for the comments regarding our service.  We have SSL certs for our servers available and used to use them by default but it made the pulls of high volume accounts really slow.  We can enable it for your domain if you prefer.  As far as the support autoresponders go we have been considering disabling them and just relying on the initial response from the level 1 support team.  If you have more suggestions please do send them our way.</p>

<p>Thanks in advance.</p>


</section>

