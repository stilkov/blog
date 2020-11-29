---
layout: post
title: "Declarative Process Definitions"
date: "2005-02-28T22:42:00+01:00"
comments: false
categories: 
---

<p>I have debated this issue multiple times, and the fact that it came up <em>again</em> in two distinct discussions today prompted this blog entry: </p>

<p>Whether it&#8217;s workflow, orchestration, business process management, or a similar concept under some local name familiar to you, one always seems to end up looking for a flexible, accessible way to define how data flows from one processing node to another. In an XML-centric world, you&#8217;ll think about XML documents that get transformed, separated into parts, aggregated again; and your search for the ideal solution always seems to follow a series of steps that look something like this:</p>

<ol>
<li>You start out thinking this is just a simple static configuration issue, and cook up your own little XML language.</li>
<li>You discover that it&#8217;s a little more than plain configuration and you need some control structures, and start adding one after the other.</li>
<li>You find out that this sucks and start looking for some standard that fulfills your needs.</li>
<li>After endless debates, you end up with some open source or commercial solution based on some half-baked standard that you just can&#8217;t seem to really like.</li>
</ol>

<p>To avoid going through all of this every single time, it helps to think about what, exactly, it is that you want to achieve. For all of the approaches above, you&#8217;ll need some engine capable of interpreting (or executing) your configuration (or process definition). Now let&#8217;s just say you pick the JVM as your engine, and Java as your process definition language &#8212; what exactly do you lose? Not dynamic enough? When was the last time you changed a process already in deployment without serious consideration? Even so, pick Jython, or Groovy &#8212; now what is the difference? How about using some other scripting language? </p>

<p>Call me a heretic, but I believe that every time somebody tries to sell you some XML-based, pseudo-declarative language it is either a) <a href="http://en.wikipedia.org/wiki/Turing-complete">Turing-complete</a> or b) sucks. And I have not yet seen convincing arguments that this would be different for <a href="http://www-128.ibm.com/developerworks/library/specification/ws-bpel/">BPEL</a>.</p>

<section class="comments">

<div class="comment" id="comment-472">
On <a href="#comment-472" title="Permalink to this comment">March  1, 2005 12:01 AM</a>, <a href="http://www.1060.org/blogxter/publish/5" title="http://www.1060.org/blogxter/publish/5" rel="nofollow">Steve Loughran</a>
said:
<p>Its a reasonable critique of the limits of declarativeness you&#8217;ve got there. Where would you out Ant in terms of (a) and (b)? We try very hard to not do proper workflow (no fault handling, no iteration), because we dont think people should be using Ant outside its role as a build tool. Does that make it suck? Only if you are trying to use it outside its envelope of intentional use.</p>


<div class="comment" id="comment-473">
On <a href="#comment-473" title="Permalink to this comment">March  1, 2005  2:01 PM</a>, <a href="http://www.ebpml.org" title="http://www.ebpml.org" rel="nofollow">Jean-Jacques Dubray</a>
said:
<p>Stefan:</p>

<p>the problem of modeling &#8220;processes&#8221; in different contexts (pageflow, workflow, BPM, , multi-agent/service/party conversation,&#8230;) is not that simple.</p>

<p>a) processes can be very dynamic (a user can decide to change on the fly the course of a process definition)</p>

<p>b) you must clearly identify whether you are describing the behavior of a participant in a process or the process itself. I have always argues that BPEL is well suited for the former and for instance WS-CDL / ebBP are well suited for the later. </p>

<p>c) critical concepts such as &#8220;State&#8221; or &#8220;Entity&#8221; are still missing from most models, not to mention that models are often incomplete (e.g. BPEL does not support users, it does not support B2B semantics though it is royally self-qualified as a &#8220;Business Process&#8221; standard.</p>

<p>It is clear to me that programming languages will have to evolve to include new concepts such as message, inbound/outbound interfaces (a.k.a contract), service, converstation/contract&#8230; I don&#8217;t know if you saw it but I had posted a while ago a &#8220;service definition&#8221; using a programming syntax (and not XML). Overall, I think it is time to capitalize on 10 years of metamodeling and use that knowledge to evolve programming languages.</p>

<p>Run time should support contract enforcement and dehydration/hydration at a minimum. </p>

<p>Cheers,</p>

<p>JJ-</p>


<div class="comment" id="comment-474">
On <a href="#comment-474" title="Permalink to this comment">March  1, 2005  2:18 PM</a>, <a href="http://blogs.msdn.com/garethj" title="http://blogs.msdn.com/garethj" rel="nofollow">Gareth Jones</a>
said:
<p>For me it comes down to the value proposition of a declarative language as compared to just using a general purpose language (presumably plus tailored libraries).
The number one on my list is the abstraction provided.  If the abstraction gives me a way to think only about the problem domain and discuss that problem with a domain expert without having to explain general purpose language syntax to her then I&#8217;ve gained something. </p>

<p>Assuming the language is turing complete then it won&#8217;t be totally trivial, but it can likely be shaped to elide more of the crud that goes along with implementation-oriented languages around getting the libraries in, initializing them etc.</p>

<p>I&#8217;m very happy if the two views are isomorphic (i.e. I only need a translator to get to an implementation). In practice , I think you often want some extra configuaration data annotated onto your declarative language to make a successful deployment - I&#8217;d prefer a separate annotation language so I can focus on one concern at a time.  If I&#8217;m starting in the implementation language then I need full-on aspect orientation to achieve that.  I&#8217;m incined to think that generating from an annotated model is a bit simpler to get right than than aspect weaving, but it is an interesting debate.</p>


<div class="comment" id="comment-475">
On <a href="#comment-475" title="Permalink to this comment">March  1, 2005 10:50 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Steve, I&#8217;m not intimately familiar with the Ant versions above 1.4.x, so I&#8217;m sure I&#8217;m up-to-date. But to me, Ant&#8217;s main benefit was the normalized task model &#8212; replacing the command line interfaces used from within make with something more appealing (and more logical) to Java developers. As to the syntax, I agree that Ant&#8217;s build file syntax (as of 1.4.x) is so simple that it qualifies as a decent XML application (and not a programming language). </p>

<p>I know, though, that when I used Ant I always had to do at least a little bit by e.g. embedding a little JavaScript (with Rhino) or similar stuff to achieve my goal. Which makes me think that maybe having a decent library and framework in conjunction with a full-featured programming language and its associated syntax might be more powerful. How about Groovy build files accessing Ant taks? What would that look like?</p>


<div class="comment" id="comment-476">
On <a href="#comment-476" title="Permalink to this comment">March  1, 2005 11:02 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>JJ, I believe your comments are similar to Paul Brown&#8217;s (at <a href="http://blogs.fivesight.com/pbblog/index.php?p=110)" rel="nofollow" /><a href="http://blogs.fivesight.com/pbblog/index.php?p=110)" rel="nofollow">http://blogs.fivesight.com/pbblog/index.php?p=110)</a> in that they highlight what the value add of an orchestration engine is. I believe we also agree that this is not really tied to the syntax or its pseudo-declarativeness &#8230; and that it&#8217;s the programming languages that should evolve. </p>

<p>Gareth, you basically make an argument for DSLs &#8212; which I understand and agree with. Obviously, though, the goal of this approach is to say the same with less words - and that does not really seem a convincing argument in many XML-oriented cases ;-)</p>


</section>

