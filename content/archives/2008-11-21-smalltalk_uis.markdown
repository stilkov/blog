---
layout: post
title: "Smalltalk UIs"
date: "2008-11-21T08:04:00+01:00"
comments: false
categories: 
---

<p>Every time I take a quick look at <a href="http://www.cincomsmalltalk.com/blog/blogView?showComments=true&amp;printTitle=Smalltalk_Daily_11/20/08:_Using_the_Tree_Widget&amp;entry=3404631730">James Robertson's Smalltalk Dailies</a> I can't help but wonder why VW and the apps built with it have a UI that sucks so much. Smalltalk is pretty obviously a great language, the development environment is great – why is there no support for native UIs? Don't point me at Ambrai, because a screenshot <a href="http://www.ambrai.com/smalltalk/screenshots/ClassBrowser.html">like this</a> makes my eyes bleed.</p>

<p>(Let me be clear: I'm not criticizing functionality, just appearance. This stuff matters, you know.) </p>

<section class="comments">



<div class="comment" id="comment-1854">
On <a href="#comment-1854" title="Permalink to this comment">November 21, 2008  9:33 AM</a>, <a href="http://www.martin-probst.com" title="http://www.martin-probst.com" rel="nofollow">Martin Probst</a>
said:
<p>I think you&#8217;re very right here. In particular the free Squeak SmallTalk implementation is a really good example of a really bad UI. It&#8217;s not only non-native, it&#8217;s just plain ugly. And they don&#8217;t support anti-aliased fonts (everything is bitmap even, I think) in 2008, at least not out of the box, and not on most platforms.</p>

<p>I once heard a talk from Gilad Bracha about his Newspeak environment. He simply said that a native GUI is a prerequisite to being a viable, commercial option for UIs, and I think he&#8217;s very right on that. He also mentioned the importance of a proper foreign function interface on the same level.</p>

<p>If I understood him right, he thinks that - at least some - Smalltalkers have or used to have this attitude that it&#8217;s either clean and proper Smalltalk, or it&#8217;s not worth doing. The whole image concept &amp; co. is very powerful, but it does create a concluded world, a walled garden. Smalltalk is it&#8217;s own operating system at that point. This might be one of the reasons why it didn&#8217;t work out that great in the long term - the language is very nice, and it has great features, but the platform is weird (at least to non-Smalltalkers), and very secluded.</p>

<p>I think this is one of the major things Ruby/Rails gets right. They simply play by the rules of the platforms, they embrace command lines, UNIX tools, operating system concepts like processes etc.</p>


<div class="comment" id="comment-1855">
On <a href="#comment-1855" title="Permalink to this comment">November 21, 2008  4:03 PM</a>, <a href="http://muellerware.org" title="http://muellerware.org" rel="nofollow">Patrick Mueller</a>

<a href="http://muellerware.org" class="commenter-profile"></a>
said:
<p>First, why does the Ambrai screenshot make your eyes bleed.  No fluff.  Do you really want more fluff than you need?  Looks gorgeously simple to me.  Loves me the simple stuff!</p>

<p>Second, you&#8217;re right.  VisualAge/Smalltalk (now sold by Instantiations, previously IBM via OTI) supported native GUIs.  It was an ongoing war between us and our competitors (including VisualWorks) whether native or painted was better.  Same arguments as SWT vs. Swing in Java.  Native wins, but you pay a cost in terms of constraints; usually it&#8217;s not a huge cost, and it&#8217;s always worth the cost anyway.  Also google &#8220;uncanny valley&#8221;.</p>

<p>See the recent post by Vassili Bykov, <a href="http://blog.3plus4.org/2008/11/13/how-to-design-a-smalltalk-ui-framework/" rel="nofollow">http://blog.3plus4.org/2008/11/13/how-to-design-a-smalltalk-ui-framework/</a> , which covers some additional sanity arguments like FFI vs &#8220;natives/primitives&#8221;.  Looking forward to what&#8217;s coming out of that &#8230;</p>


<div class="comment" id="comment-1856">
On <a href="#comment-1856" title="Permalink to this comment">November 21, 2008  5:27 PM</a>, johnofamber
said:
<p>The look is not that nice due to lack of graphical design and (maybe) usibility. However, I don&#8217;t know any employer building an internal app and willing to pay for graphical design (or usibility). The look would be as &#8220;not so nice&#8221; if native UIs would be in use. A quick rebuild (without a redisign) in e.g. Cocoa would prove that.</p>

<p>johnofamber</p>


<div class="comment" id="comment-1857">
On <a href="#comment-1857" title="Permalink to this comment">November 21, 2008  8:38 PM</a>, <a href="http://www.cincomsmalltalk.com/blog/blogView" title="http://www.cincomsmalltalk.com/blog/blogView" rel="nofollow">James Robertson</a>
said:
<p>The look issues of VW have less to do with lack of nativeness and more to do with the sheer age - the UI hasn&#8217;t received a serious facelift in a long while.  We wasted a lot of time and resource on something that ultimately failed: Widgetry.  </p>

<p>We now have to start over with the UI framework we have and make the system look and feel better.  </p>

<p>One change you&#8217;ll see starting in the next release is new and better graphics; Cairo is coming.  The advantage that gives us is simple: nice graphics capabilities across all of our platforms with one API.  If we instead went native, we would have to create a mapping layer to something on each platform.  If we had infinite resources, maybe that would work.  We don&#8217;t, so we have to be smarter about things.</p>


<div class="comment" id="comment-1858">
On <a href="#comment-1858" title="Permalink to this comment">November 22, 2008 12:41 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>@Martin: +1.</p>

<p>@Patrick, @johnofamber: My complaints about Ambrai are not because the use of native widgets, but rather about UI design – what&#8217;s the &#8220;>>&#8221; doing in the title bar? Why are the two top listboxes so misaligned? I know, because of the ugly radio buttons squeezed below the first one. Still, no excuse – no one would get praise for building a UI like this in the Mac community. Take a look at the UIs built by Apple, or many of the smaller Mac-only shops (the Versions Subversion client, NetNewsWire, MarsEdit, &#8230;  – the attention to detail and aesthetics is breathtaking. And of course I&#8217;m talking about end-user software, such as e.g. the Smalltalk IDE itself.</p>

<p>@James: I understand that you&#8217;re operating with limited resources - looking forward you&#8217;ll come up with.</p>


</section>

