---
layout: post
title: "Ron's View of SOA"
date: "2006-04-10T20:04:00+01:00"
comments: false
categories: 
---

<p><em>Update: I may have misunderstood the intent of the original posting &#8212; see <a href="/blog/st/2006/04/10/rons_view_of_soa.html#comments">the comments</a> below.</em></p>

<p><a href="http://blogs.sun.com/roller/page/rtenhove?entry=the_developer_s_view_of">Ron Ten-Hove</a>, JBI spec lead, makes a number of points regarding the developer&#8217;s view on SOA &#8212; and I fail to get them. Let&#8217;s see:</p>

<blockquote>
<p>Modern incarnations of SOA don&#8217;t (yet) agree on the definition of SOA, let alone how a typical software developer ought to use SOA. In fact, some versions of SOA impose a unreasonable amount of extra conceptual baggage on developers. From my perspective, this is a Big Mistake &#8212; anything that slows down development of new applications (or services), especially complexity, is Wrong with a capital &#8216;W&#8217;. </p>
</blockquote>

<p>No disagreement, I guess ;-)</p>

<blockquote>
<p>What SOA should be about is what I like to call &#8220;invisible plumbing&#8221; that enables reuse and refactoring of composite applications. The key part for developers is the word &#8220;invisible&#8221;. When I write an EJB, for example, I don&#8217;t want to have to simultaneously think about how the EJB is used in a composite application. I don&#8217;t want the developer concurrently developing business logic (which he ought to be doing), and providing for the system architecture (which is conceptual overload). Instead, the developer ought to work exclusively in domains he is expert in, and leave the business of weaving the EJB he writes into the overall SOA fabric to another expert. The SOA plumbing ought to be invisible to the developer. This isn&#8217;t anything new; separation of concerns is a standard approach to reducing complexity in software development.</p>
</blockquote>

<p>&#8220;No!,&#8221; I cry, this can&#8217;t be true. I thought we had left this idea behind, and I thought even the JBI folks accepted that distribution in itself can&#8217;t be hidden via configuration. Distributed programming is <em>not</em> a simple aspect than can be added as an afterthought &#8230;</p>

<p>Ron then goes on to describe the benefits of JBI as the &#8220;invisible plumbing&#8221;, and then writes:</p>

<blockquote>
<p>Some embrace a wider definition of &#8220;service&#8221;, including annotated Java, WSDL, IDL, and even annotated C++, all at once. Setting aside practical issues of interoperation and semantic mismatches between these different technologies, we are left with a problem for our developer: the plumbing is more visible. By having to deal with multiple service implementation technologies, the developer must necessarily be aware of this services model before he can use it from within his application code. This adds complexity.</p>
</blockquote>

<p>Guess what: Some even embrace a definition that says a service is completely independent of the underlying technology. Wasn&#8217;t that the whole point of Web services in the first place?</p>

<p>More stuff I just don&#8217;t get:</p>

<blockquote>
<p>This &#8220;mixed&#8221; services model, despite its complexity, has some advantages. In particular, it allows for creation of a component model that combines close-coupling and loose-coupling in a uniform fashion. </p>
</blockquote>

<p><em>Huh</em>?</p>

<blockquote>
<p>This is attractive, at first blush, but the problems I mentioned previously of reconciling the different service technologies (interop &#38; semantics) make this approach difficult, perhaps problematic. It certainly makes the developer&#8217;s view of SOA much more complex, and virtually mandates complex tooling to handle many of the development issues it creates.</p>
</blockquote>

<p>I notice that I would have to quote the whole posting if I wanted to cite everything I disagree with. This is just amazing &#8230;</p>

<p>In summary, the argument seems to be that JBI simplifies things because it streamlines everything &#8230; although I don&#8217;t understand how that relates to its purported invisibility &#8230; or why JBI has benefits for a JAX-WS service implementation, which could talk to a WSDL-defined C++ service just as easily &#8230; nope, I fail to see the argument.</p>

<section class="comments">

<div class="comment" id="comment-869">
On <a href="#comment-869" title="Permalink to this comment">April 11, 2006  8:27 PM</a>, Anon
said:
<p>I think you failed to recognize a critic of SCA. Read it again with than in mind.</p>


<div class="comment" id="comment-870">
On <a href="#comment-870" title="Permalink to this comment">April 12, 2006 12:20 AM</a>, <a href="http://blogs.sun.com/rtenhove" title="http://blogs.sun.com/rtenhove" rel="nofollow">Ron Ten-Hove</a>
said:
<p>Stefan,</p>

<p>I&#8217;ve been accused of putting too much information into my blogs, and perhaps you are a victim of this. I&#8217;m not advocating the &#8220;mixed services model&#8221; that I was discussing. If you read carefully, I was warning against it! I suspect that we agree on many of these points.</p>

<p>We obviously disagree on other points. I believe that allowing developers to work within a straightforward web services model is a good thing, and that attempts to introduce new component &amp; distribution models to existing programming models (such as EJB or JSP) is unneeded. Technologies like JBI will transparently host such application artifacts (EJBs etc) within a SOA environment. </p>

<p>My measure of transparency of the application &#8220;distribution&#8221; mechanism is simple. Do I have to change any application code to alter application partitioning? For example, say I have an EJB that uses JAX-WS to consume a particular service. What do I have to do to change the endpoint of the provider? In most SOA alternatives, the answer would be &#8220;change the WSDL, run wsimport, recompile the EJB, and redeploy it.&#8221; That is a terrible answer! Invisible plumbing, such as JBI, allows such changes to be made without touching application code, or deployed application artifacts. </p>

<p>Note that I&#8217;m not saying that the distributed nature of a composite application built atop a SOA is completely hidden from the deveolper. That is simply impractical, given the nature of networks. That&#8217;s why I&#8217;m careful to use examples where web service technologies are used; these already reflect Deutsche&#8217;s eight fallicies of distributed computing (http://today.java.net/jag/Fallacies.html). While JBI enables integration of a virtually unlimited range of application/technical domains to the WSDL 2.0 services model, the most straightforward way to discuss composite applications running atop a JBI infrastructure is to talk about web service from the application level. This does JBI something of a disservice, but it general discussions of JBI and SOA, it serves well.</p>


<div class="comment" id="comment-871">
On <a href="#comment-871" title="Permalink to this comment">April 12, 2006 12:34 AM</a>, <a href="http://blogs.sun.com/rtenhove" title="http://blogs.sun.com/rtenhove" rel="nofollow">Ron Ten-Hove</a>
said:
<p>Oh, and one other thing: JBI is structured so that locality of service providers and consumers is not a primary feature of the messaging APIs. Determining locality CAN be done, but ordinarily isn&#8217;t. The reasons are quite simple: to get the main benefits of SOA, you have to decouple provider from consumer. Bringing locality to he fore of interactions between consumer and provider introduces several undesirable side effects:
- more coupling
- two different interaction models, with potentially different semantics
- testing. Many partitioning combinations must be exercised in order to exercise all the code paths!</p>


<div class="comment" id="comment-872">
On <a href="#comment-872" title="Permalink to this comment">April 12, 2006  8:09 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hi Ron,</p>

<p>Thanks for the comments. As to the first one, I agree with basically everything you write here. I&#8217;m still not sure what you mean by the &#8220;mixed model&#8221; &#8212; I understood your post to mean that advocated against it, so that&#8217;s not the problem. My disagreement was that to me, SOA is explicitly about being able to mix C++ and Java and C# and Ruby implementations, since all I&#8217;m focusing on is their interfaces. Now I guess what you really meant is that none of these technologies is suited to describe the interface &#8212; which I totally agree with.</p>

<p>I&#8217;m not positive I really understand your second comment, though.</p>

<p>Stefan</p>


</section>

