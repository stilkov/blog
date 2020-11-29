---
layout: post
title: "Yet Another (Boring) Spam Comment Attack"
date: "2004-05-23T11:53:00+01:00"
comments: false
categories: 
---

<p>Sometimes having not that many &#8216;real&#8217; comments is nice:
mysql> delete from mt<em>comment where comment</em>created_on > &#8216;2004-05-22&#8217;;
Query OK, 1133 rows affected (0.12 sec)</p>

<p>Even automated, setting the whole thing up must have taken the spammer much longer than 0.12 seconds :-)</p>

<p>What made the spam comments get through in the first place was that the URLs were using not ASCII letters, but Unicode numeric values (like <code>http://c&amp;#97;sinos-jp.com</code>), so the <a href="http://www.jayallen.org/projects/mt-blacklist/">MT-Blacklist</a> regexp covering &#8216;casino&#8217; didn&#8217;t catch it. I have now added an appropriate catch-all regexp for any URI containing <code>&amp;</code> &#8212; hopefully that will stop it next time. (And yes, I know this will catch some legitimate URIs as well, but so what.)</p>

<section class="comments">

<div class="comment" id="comment-296">
On <a href="#comment-296" title="Permalink to this comment">May 24, 2004 10:04 AM</a>, <a href="http://www.kung-foo.tv" title="http://www.kung-foo.tv" rel="nofollow">Adriaan</a>
said:
<p>Ha, I had that, too. I&#8217;m actually happy these moronic spammers are using html entities. It makes blocking comment spam so much easier.</p>


<div class="comment" id="comment-297">
On <a href="#comment-297" title="Permalink to this comment">June  4, 2004  1:08 AM</a>, <a href="http://www.jayallen.org/" title="http://www.jayallen.org/" rel="nofollow">Jay Allen</a>
said:
<p>Hey there.  Just catching up on reading and referrers.  In case you haven&#8217;t seen it, v1.64 (released three days before you posted this) takes care of this problem.</p>

<p>Stupid, stupid, stupid bug.   Entity escaping was present in v1.0a.  But somehow it got masked&#8230; <em>shrug</em></p>


</section>

