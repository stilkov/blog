---
layout: post
title: "Dynamic Languages on the JVM (and CLR)"
date: "2006-05-05T21:50:00+01:00"
comments: false
categories: 
---

<p><a href="http://blogs.tedneward.com/2006/05/05/More+On+Monad+Vs+Ruby+Which+Really+Wasnt+Supposed+To+Be+A+Vs+At+All.aspx">Ted Neward</a> writes about the need for a dynamic language on top of the VM. I&#8217;m sure he&#8217;s going to get a lot heat from Ruby and RoR advocates, but I believe he has a point:</p>

<blockquote>
<p>If we can get those features we want from languages like Ruby onto a platform that we&#8217;ve already standardized on gives us a best-of-both-worlds result. Those developers who are comfortable with statically-typed objects can stay with statically-typed objects. Those who want the more dynamic features of &#8220;scripting&#8221; languages can do so. We can then blend the two together, to form an interesting and seamless whole: &#8220;Give me my Rails, but let me call into a J2EE Connector implementation to talk to the mainframe while we&#8217;re at it.&#8221; Getting Ruby to run on the JVM or CLR would be a Very Good Thing. It would answer one of the principal criticisms of Rails, for example, that of the idea that it doesn&#8217;t do well when dealing with Large Enterprise Things&#8212;if Rails could create a javax.transaction.XATransaction before it kicks into ActiveRecord code, for example, suddenly we have a two-phase commit possibility that includes not just databases but mainframes and messaging systems. And yes, people DO need those kinds of Large Enterprise Things in the real world sometimes. Would it not be a win for Ruby to be able to hook into those without having to write all that code themselves?</p>
</blockquote>

<p>I agree, although at least as much for political as for technical reasons &#8212; which is why I believe <a href="http://jruby.sourceforge.net/">JRuby</a>, which has picked up a lot of speed recently, is going to become a Really Cool Thing. Another neat example: <a href="http://www.iunknown.com/articles/2006/05/03/activerecord-and-windows-forms">RubyCLR used to connect Rails&#8217;s ActiveRecord and Windows Forms</a>.</p>


