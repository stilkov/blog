---
layout: post
title: "Docbook Webhelp"
date: "2003-08-07T16:50:00+01:00"
comments: false
categories: 
---

<p>Continuing my Docbook experiments, I have found <a href="http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/docbook/contrib/xsl/applethelp/" title="docbook/contrib/xsl/applethelp">this stylesheet</a>, which allows for generation of a Webhelp interface - i.e., something similar to Microsoft's help format, but with the navigation panel rendered via a Java applet. <br />
That applet is even provided by Microsoft as part of HTML Help Workshop - Microsoft providing an applet, strange, strange ... those were the days.<br />
Now if only I could find a working JavaScript alternative to the applet ...</p>
<section class="comments">

<div class="comment" id="comment-64">
On <a href="#comment-64" title="Permalink to this comment">November 20, 2006  2:18 PM</a>, JosÃ© Luis
said:
<p>A long time after your post, I&#8217;m having the same problem&#8230;</p>

<p>I&#8217;m trying Docbook to generate webhelp. As you said, applethelp.xsl renders navigation pantel via a Java applet. Did you find a javascript alternative? (another &#8220;.xsl&#8221;, &#8220;applethelp.xsl&#8221; parameters, etc.)</p>

<p>Thanks</p>


<div class="comment" id="comment-65">
On <a href="#comment-65" title="Permalink to this comment">November 20, 2006  8:15 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>No &#8212; sorry. If you find one, please let me know :-)</p>


<div class="comment" id="comment-2263">
On <a href="#comment-2263" title="Permalink to this comment">August 23, 2010  7:47 PM</a>, <a href="http://kasunbg.blogspot.com" title="http://kasunbg.blogspot.com" rel="nofollow">Kasun Gajasinghe</a>

<a href="http://kasunbg.blogspot.com" class="commenter-profile"><img src="/mt4/mt-static/images/comment/typekey_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Hi there.
Again, after a long time!</p>

<p>I along with my mentor David Cramer created a JavaScript version of DocBook WebHelp under the Google Summer of Code program. It is css-based, rather than frameset-based.</p>

<p>The proposal is at: <a href="kasunbg.blogspot.com/2010/04/proposal-web-help-output-for-docbook.html" rel="nofollow">Proposal for WebHelp output for DocBook</a>.
The demo is available here: <a href="http://www.thingbag.net/docbook/gsoc2010/doc/content/ch01.html " rel="nofollow" /><a href="http://www.thingbag.net/docbook/gsoc2010/doc/content/ch01.html" rel="nofollow">http://www.thingbag.net/docbook/gsoc2010/doc/content/ch01.html</a>
The documentation for WebHelp is included in the demo. You can download a beta version of the package fro there.</p>

<p>Final release notes are at: <a href="kasunbg.blogspot.com/2010/08/docbook-webhelp-project.html" rel="nofollow">DocBook WebHelp Project</a></p>

<p>SVN location: <a href="http://docbook.svn.sourceforge.net/viewvc/docbook/branches/webhelp/xsl/webhelp/" rel="nofollow" /><a href="http://docbook.svn.sourceforge.net/viewvc/docbook/branches/webhelp/xsl/webhelp/" rel="nofollow">http://docbook.svn.sourceforge.net/viewvc/docbook/branches/webhelp/xsl/webhelp/</a></p>

<p>Sorry for the huge no. of links. You may find some useful information there, contact us on DocBook mailing list if you need further help.</p>


</section>

