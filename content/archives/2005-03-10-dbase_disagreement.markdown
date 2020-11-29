---
layout: post
title: "dBase dIsagreement"
date: "2005-03-10T21:48:00+01:00"
comments: false
categories: 
---

<p><a href="http://seanmcgrath.blogspot.com/archives/2005_03_06_seanmcgrath_archive.html#111027274624169161">Sean McGrath</a>:</p>

<blockquote>
<p>Here is the great irony of the Web. It was vastly easier to create a CRUD application (a database app with Create, Report, Update and Delete functions) in the days of Dbase II than it is today.</p>
</blockquote>

<p>Not true. After some educational playing around with Basic on a <a href="http://www.obsoletecomputermuseum.org/zx81/">Sinclair ZX 81</a> and TurboPascal on the PC, I built my first real commercial application with <a href="http://info.wlu.ca/~wwwccs/software/database/dbaseIII.shtml">dBase III Plus</a> &#8212; and I can assert that it was definitely not easier than it would be today.</p>

<p>Sometimes we tend to forget how much functionality we take for granted nowadays. </p>

<p>(And BTW, doesn&#8217;t &#8220;CRUD&#8221; stand for &#8220;Create, <em>Read</em>, Update, Delete&#8221;?)</p>

<section class="comments">

<div class="comment" id="comment-486">
On <a href="#comment-486" title="Permalink to this comment">March 10, 2005 11:20 PM</a>, <a href="http://blog.msdn.com/mikechampion" title="http://blog.msdn.com/mikechampion" rel="nofollow">Mike Champion</a>
said:
<p>I had assumed that Sean was talking about the difficulty of creating a CRUD (aka <em>truly</em> RESTful app that does something more that GET information) application on the Web. PUT and DELETE are not widely supported (or at least enabled) on real web servers.  In practice people have to write to the web with POST and some custom server-side code, which sortof defeats the point of the RESTful universal operations. I guess the MEST people would disagree, but I don&#8217;t grok the point of a single doStuff method :-)  </p>

<p>Of course, one doesn&#8217;t have to think very hard to come up with a long list of reasons why website administrators don&#8217;t like PUT and DELETE &#8230;.</p>


<div class="comment" id="comment-487">
On <a href="#comment-487" title="Permalink to this comment">March 11, 2005 11:30 AM</a>, <a href="http://seanmcgrath.blogspot.com" title="http://seanmcgrath.blogspot.com" rel="nofollow">Sean McGrath</a>
said:
<p>I was a Dbase/Clipper/Smart programmer for many years.</p>

<p>The drill was as followed : set up you database tables. From there - without doing another <em>ounce</em> of work - you could browser the database, add records, generate simple reports.</p>

<p>I know of no application that allows me to do that so easily today with a web front end. Maybe I&#8217;m missing something massive.</p>

<p>Sean</p>


<div class="comment" id="comment-488">
On <a href="#comment-488" title="Permalink to this comment">March 11, 2005  9:04 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Michael: +1 on the MEST puzzlement; I still fail to get it either. On the other hand, though, I can think of plenty of good reasons administrators would like enabling PUT and DELETE, e.g. to enable security boundaries right in the Web server configuration.</p>

<p>Sean; I missed your point (restricting it to Web apps). I agree that it&#8217;s puzzling there&#8217;s no widely accepted way to do this, although I&#8217;m sure one can dig up a number of open source, PHP-based solutions that offer something roughly similar.</p>

<p>I wanted to emphasize the point that when you built a <em>real</em> application in dBase, i.e. not use the generic UI, but an app-specific one, it took a lot of time with only a fraction of the functionality you&#8217;d get today using something like Ruby on Rails (or, for those so inclined, with a current MDA environment.)</p>


</section>

