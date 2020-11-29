---
layout: post
title: "Apple Killing Java?"
date: "2010-10-21T19:56:00+01:00"
comments: false
categories: 
---

<p>I got alerted to this earlier today <a href="http://blog.beatunes.com/2010/10/did-apple-just-kill-java-on-107.html">by my good friend Hendrik Schreiber</a>, who develops <a href="http://www.beatunes.com/itunes-library-inspection.html">awesome software for Mac OS X using Java</a>: It seems Apple <a href="http://tinyurl.com/24vcexq">has killed Java</a> on future OS X releases.</p>

<p>I can understand this, to a certain degree -- for Apple, Java is no longer a platform they want anyone to write apps in, so why waste engineering dollars to support it? On the other hand, there are tons of Java developers who use Macs, as shown by the Mac market share on any Java-centric conference in the last few years -- it's anything between 20 and 75%, with something as high as 90% among speakers. Of course it's going to hurt Apple if all of these folks switch to a different platform, and I do believe it might even be significant considering the network effect (as many of them, including me, were Mac OS X evangelists). I also know that in our company, <a href="/">innoQ</a>, roughly 40 of our 50 developers are Mac OS X users, and it's likely none of them will be anymore two or three years from now. Given an average lifetime of 2 years per 2500 € box, that's about 50k we'll invest somewhere else. I suspect the same will be true for many other shops who use Java and other JVM languages (mostly JRuby in our case).</p>

<p>It's entirely possible the Apple folks have considered this, and come up with more reasons to drop Java than to sustain it. And of course it might all be a misunderstanding, or they might change their mind again, as it happened with other things, such as the App store rules. I just wouldn't bet on it.</p>

<p>From a personal perspective, it sucks very, very much. But hey, they are very good reasons for using Linux too, right? </p>

<section class="comments">



<div class="comment" id="comment-2270">
On <a href="#comment-2270" title="Permalink to this comment">October 21, 2010  9:12 PM</a>, <a href="http://40bits.com" title="http://40bits.com" rel="nofollow">Oliver</a>
said:
<p>I&#8217;m also doing Java development on a MBP ever since 10.1. Apple had a mixed history with it&#8217;s JDK anyway. Was it 1.5 or 1.6 which took really long to get ported?</p>

<p>It sure sucks not having a Apple JVM anymore but I guess this is where OpenJDK steps in. Time to look at it. At the moment I&#8217;m not too worried.</p>

<p>Oliver</p>


<div class="comment" id="comment-2271">
On <a href="#comment-2271" title="Permalink to this comment">October 21, 2010  9:22 PM</a>, <a href="http://www.decodified.com" title="http://www.decodified.com" rel="nofollow">Mathias</a>
said:
<p>I&#8217;m not sure whether Apple finally pulling the plug on its own Java efforts will really void the value of its platform to JVM developers. IMHO there are two factors working against that &#8220;doom and gloom&#8221; scenario:</p>

<ol>
<li>Apples actions leave a space to be filled. The attention alternative implementations (like SoyLatte) receive will increase sharply and certainly push these projects along at a much higher pace.</li>
<li>Desktop virtualization. Tools like VMWare Fusion or Parallels increasingly blur the line between what&#8217;s running natively and what&#8217;s not. On my MacBook Pro a number of Java benchmarks already run faster in a Windows VM than in Apples JVM under OS/X. And moving your development environment in a Linux VM might actually yield other benefits, like reducing integration pain by unifying the development and production platforms.</li>
</ol>

<p>Cheers,</p>

<p>Mathias</p>


<div class="comment" id="comment-2272">
On <a href="#comment-2272" title="Permalink to this comment">October 21, 2010  9:32 PM</a>, Nick
said:
<p>Let&#8217;s face it, Apple&#8217;s business is consumer electronics nowadays. Even the todays kids want a MAC because it&#8217;s fancy.</p>


<div class="comment" id="comment-2273">
On <a href="#comment-2273" title="Permalink to this comment">October 21, 2010 10:59 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>One problem with OpenJDK/SoyLatte (pointed out to me today) is the lack of support for Cocoa. I don&#8217;t think I&#8217;d want to accept many Java developers would accept a Mac Java IDE requiring X. The same is true for a virtualized Linux or Windows - something like that is OK if it&#8217;s a test environment or something you use occasionally. But being able to run one&#8217;s main environment only as a second-rate citizen is not exactly a compelling reason to invest into a platform.</p>


<div class="comment" id="comment-2274">
On <a href="#comment-2274" title="Permalink to this comment">October 22, 2010  5:04 AM</a>, Anonymous
said:
<p>Apple OS is crap anyway. No one will use that piece of crap. Only blind ppl see i(stuff) is the best!</p>


<div class="comment" id="comment-2275">
On <a href="#comment-2275" title="Permalink to this comment">October 22, 2010  7:12 AM</a>, murphee
said:
<p>Stefan: Apple&#8217;s JVM doesn&#8217;t come with any Cocoa bindings either, so there&#8217;s no change.  Or I suppose you mean the AWT/Swing implementation on Cocoa; well, in that case just use Eclipse: SWT  works just fine on Soylatte, mainly because it bypasses the AWT and goes straight to Cocoa (ie. no X11 involved).
Try it: <a href="http://tech-nickel.blogspot.com/2009/01/java-on-mac-os-x-try-soy-latte.html" rel="nofollow">http://tech-nickel.blogspot.com/2009/01/java-on-mac-os-x-try-soy-latte.html</a></p>

<p>I see this step mainly as a signal to the Java community to step up and maintain their runtime themselves. After all - Java developers happily do their Java development on Windows and Linux&#8230; and yet neither MSFT nor any Linux distro maintains their own fully licensed Java port.  As a matter of fact, the whole situation is a nice change: instead of having to wait 18 -24 months for Apple to port a Java version; now Mac users can get the latest Java X as soon as the Java community (or ORCL?) manages to update &amp; release the Mac port.</p>

<p>After all - you say your devs use JRuby&#8230; Apple neither ships nor supports JRuby, yet apparently your team can download &amp; ship the JRuby runtime just fine. The main problem is now to get an OpenJDK version that runs on the Mac&#8230; considering the Java 6 versions works fine, that should be enough for a while. And as for Java 7&#8230; well&#8230; we&#8217;ll all in our hovercars by the time that&#8217;s available anyway&#8230;</p>


<div class="comment" id="comment-2276">
On <a href="#comment-2276" title="Permalink to this comment">October 22, 2010  8:16 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Werner, you are right, I meant a Cocoa-backed Swing implementation. SWT would only help Eclipse - I don&#8217;t see Netbeans or IntelliJ (or any number of Swing-based tools) being ported to use SWT just to be able to run them on the Mac. </p>

<p>Of course it would be ideal for everybody if Oracle stepped up and simply took care of providing an OS X version the same way they do for Windows and Linux. I somehow doubt it, but I would love to be proven wrong.</p>


<div class="comment" id="comment-2277">
On <a href="#comment-2277" title="Permalink to this comment">October 22, 2010  8:37 AM</a>, <a href="http://www.martin-probst.com" title="http://www.martin-probst.com" rel="nofollow">Martin Probst</a>
said:
<p>We probably won&#8217;t see Apple open sourcing their Swing/Cocoa implementation as a patch set against OpenJDK (that would be a hell-froze-over moment). Still, that would probably be the wisest thing; maintain Mac OS X as a compelling Java platform but avoid all the associated problems.</p>

<p>I can also understand very well why they won&#8217;t ship Java anymore. They just get a lot of security issues/worries and a horrible user experience in the browser in return for more or less nothing.</p>


<div class="comment" id="comment-2278">
On <a href="#comment-2278" title="Permalink to this comment">October 22, 2010 12:36 PM</a>, Chris M
said:
<p>This is a big deal for me. I transitioned from Windows and have been happy so far and done the iPad/iPhone thing on top. So I&#8217;ve bought into the platform.</p>

<p>Stevey boy had better realise that I can transition back to Windows just as easily if he wants me to buy a new MBP in the next year or so. I think there are a lot of devs like me who want to develop in native OS X when writing their server side java code. I have VMWare Fusion but would rather develop in OS X as it&#8217;s faster and more stable than a Windows/VM environment.</p>


<div class="comment" id="comment-2287">
On <a href="#comment-2287" title="Permalink to this comment">December 29, 2010  3:34 AM</a>, Anonymous
said:
<p>I am (was) considering switching from Linux to a MBP in 2011 for my Java development work.  With all this uncertainty, think I&#8217;ll stick with a PC system and dual boot it (with Ubuntu).</p>


</section>

