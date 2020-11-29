---
layout: post
title: "MDA from a Developer's Perspective"
date: "2003-07-01T19:01:00+01:00"
comments: false
categories: 
---

<p>Back in December, I wrote an article for <a href="http://www.theserverside.com">TSS</a>, trying to introduce concepts from OMG's Model Driven Architecture (MDA) to developers. I'm reproducing it here (with some minor editorial corrections), with the goal of elaborating on some of the things in more detail, as well as addressing some of the comments posted in the <a href="http://www.theserverside.com/home/thread.jsp?thread_id=17053">the TSS discussion</a>, as well as in other places around the web.
</p>
<section class="comments">

<div class="comment" id="comment-29">
On <a href="#comment-29" title="Permalink to this comment">September 16, 2003 11:26 PM</a>, Suhas
said:
<p>Excellent article! Thank you very much.</p>

<p>-Suhas</p>


<div class="comment" id="comment-30">
On <a href="#comment-30" title="Permalink to this comment">September 17, 2003  9:09 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks! ;-)</p>


<div class="comment" id="comment-31">
On <a href="#comment-31" title="Permalink to this comment">October 18, 2003  2:59 AM</a>, <a href="http://erp4it.typepad.com/erp4it/index.rdf" title="http://erp4it.typepad.com/erp4it/index.rdf" rel="nofollow">charlie betz</a>
said:
<p>Rockin&#8217; post. The one quibble I have is the standard canard that &#8220;code generation didn&#8217;t work.&#8221; There are a lot of banks and big organizations that jumped on the CASE bandwagon and got a LOT done. Target Corporation (Wal-Mart&#8217;s #1 competitor) runs core transactional systems built by a CASE tool (CA&#8217;s Advantage:Gen, formerly Cool:Gen, formerly Composer, formerly Information Engineering Facility [IEF]). </p>

<p>The fundamental problem is that CASE did not scale down to smaller systems, or out to distributed systems. The secondary problem was that one was depending on the CASE tool vendor for repository, modeling tool, code generator, and in some cases you were even locked into their software development lifecycle. The OMG standards change all that.</p>


<div class="comment" id="comment-32">
On <a href="#comment-32" title="Permalink to this comment">October 18, 2003  3:09 AM</a>, <a href="http://erp4it.typepad.com/erp4it/index.rdf" title="http://erp4it.typepad.com/erp4it/index.rdf" rel="nofollow">charlie betz</a>
said:
<p>PS My blog (also MT-based) is www.erp4it.com.</p>


<div class="comment" id="comment-33">
On <a href="#comment-33" title="Permalink to this comment">January 31, 2004  6:37 PM</a>, <a href="http://www.ronin-intl.com/company/scottAmbler.html" title="http://www.ronin-intl.com/company/scottAmbler.html" rel="nofollow">Scott Ambler</a>
said:
<p>I have serious reservations about the MDA which I published in IEEE Software in the Autumn of 2003.  A PDF of the article can be found at www.agilemodeling.com/essays/mda.htm.  I&#8217;ll also be linking to forthcoming articles that I&#8217;m writing about the MDA which further question it&#8217;s viability.  Gut feel tells me that less than 1% of organizations will be able to acheive the MDA vision, the other 99% need to try something else. As I write at www.agilemodeling.com/essays/simpleTools.htm I&#8217;m a firm believer in using CASE tools when appropriate, I&#8217;ve just seen the MDA vision fail before (we called it ICASE in the late 80s) so experience has jaded me.</p>


<div class="comment" id="comment-34">
On <a href="#comment-34" title="Permalink to this comment">June  9, 2004 11:37 AM</a>, shiv
said:
<p>the images are missing in teh file. i guess either the path is wrong or the images are moved. looking at these images along with the explanation makes it an easy read.</p>


<div class="comment" id="comment-35">
On <a href="#comment-35" title="Permalink to this comment">June  9, 2004 11:55 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Shiv, thanks for pointing this out - one of the recent re-arrangements broke the links. I have fixed them ..</p>


<div class="comment" id="comment-36">
On <a href="#comment-36" title="Permalink to this comment">February  3, 2005  2:03 PM</a>, Radoslaw Wisniewski
said:
<p>Incredible good article!</p>

<p>I&#8217;m doing code generation (MDA?) since 2001 in production environments and live projects. I started  it without knowing all the MDA theory. But MDA in the interpretation as in the article i exactly that I&#8217;m going evolutionary to do. My first try was to use modeling without UML/XMI/MOF overhead, but it may/will change in the future. </p>

<p>What I have PROVEN is, that modeling with code-generation simply works, save my time and makes software development more agile. I have made code-generators for Java and PHP. It give me incredible feeling of power to make a &#8220;one change&#8221; in 15 places spread among the project by simply changing one line of my model, sometimes one day before deadline and sometimes on the eyes of customer. Adding one new property for a class stored in DB and edited by some GUI may in most optimistic case take under 2 minutes. The more mature your generator is, the more often optimistic case happens to you. I think, it is the strongest argument for unsing MDA, even stronger then technology independence that is actual slightly virtual.</p>

<p>Someday i write down all my experiences down to discuss with all the MDA community, but at now phone is ringing&#8230;, kinds are crying&#8230; i have simply no time to do it.</p>


<div class="comment" id="comment-37">
On <a href="#comment-37" title="Permalink to this comment">November 16, 2005  2:00 PM</a>, Ram
said:
<p>Good article on MDA. I hope to hear more on this, in this blog.</p>


<div class="comment" id="comment-38">
On <a href="#comment-38" title="Permalink to this comment">May 16, 2007 11:52 PM</a>, jonaskinny
said:
<p>Having used CASE tools for a few years as well as building an xml/xslt generation package I can say MDA&#8217;s long-reaching potential is appealing.  MOF is clearly the key if it can be applied to either a set of services or components within the system domain.  I am planning on implementing just such a model.</p>

<p>Thanks for the intro.</p>


</section>

