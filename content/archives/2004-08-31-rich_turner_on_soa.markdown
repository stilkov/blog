---
layout: post
title: "Rich Turner on SOA"
date: "2004-08-31T22:50:00+01:00"
comments: false
categories: 
---

<p>In two recent posts, <a href="http://weblogs.asp.net/richturner666/archive/2004/08/24/219752.aspx">What is SOA?</a> and
<a href="http://weblogs.asp.net/richturner666/archive/2004/08/24/219871.aspx">SO != WS</a>, Rich Turner argues that SOA is something more abstract than Web services, but that the easiest way to build SOA systems today is to use Web services.  He also wants to drop the &#8216;A&#8217; from SOA, leaving us with <em>Service Orientation</em>. </p>

<p>I&#8217;m trying to make up my mind by starting with some of my own personal definitions: </p>

<p>SO, <em>Service Orientation</em>, is an abstract methodology where Services play a central role. (I&#8217;m aware that this is extremely abstract.)</p>

<p>SOD, <em>Service Oriented Development</em>, is SO applied to the development of new applications, usually within your control, where you can and do apply sound principles like <a href="http://staff.newtelligence.net/clemensv/PermaLink.aspx?guid=3a029ead-58f2-405a-a5d1-6cc3513a59fa">Clemens Vasters&#8217;s PEACE</a>. </p>

<p>SOA, <em>Service Oriented Architecture</em>, is an what you get when you apply SO principles on an enterprise scale, with numerous compromises because you are essentially integrating systems, not developing them from scratch. (For example, let&#8217;s say you encapsulate an existing system&#8217;s functionality with a set of services. How can you make sure that they are autonomous (the &#8216;A&#8217; in &#8216;PEACE&#8217;?))</p>

<p>SOD and SOA have a lot of overlap, roughly similar to the fact that an application&#8217;s microflow (the sequence of an application&#8217;s dialogues and actions) is technically similar, but not equivalent to an overall workflow (multiple applications used to support activities). The more we can re-use for both, the better; but at the moment, trying to apply the exact same set of principles to both is not likely to work.</p>

<p>As to the Web services != SOA debate, I basically agree with <a href="http://radovanjanecek.net/blog/archives/000120.html">Radovan</a> (if I read him correctly) &#8212; this is a very academic discussion not likely to provide much value in the real world.</p>


