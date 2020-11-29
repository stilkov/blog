---
layout: post
title: "Monkey Code"
date: "2003-07-16T23:01:00+01:00"
comments: false
categories: 
---

<p>There's another <a href="http://www.theserverside.com/home/thread.jsp?thread_id=20314&amp;article_count=66" title="Model Driven Architecture State of the Union">MDA discussion at TSS</a>, and it has prompted this longer-than-usual post on Monkey Code.</p>
<section class="comments">

<div class="comment" id="comment-45">
On <a href="#comment-45" title="Permalink to this comment">February  7, 2004  7:22 PM</a>, Mike Bresnahan
said:
<p>I couldn&#8217;t agree with you more.  Creating those umpteen classes each with umpteen getter and setter methods is plain silly, because the responsibility of each and every one of them can be summed up as &#8220;this class holds a set of name-value pairs and provides access to them&#8221;.  We can easily do the same thing with only one class, e.g. a Tuple class.</p>


<div class="comment" id="comment-46">
On <a href="#comment-46" title="Permalink to this comment">February  7, 2004 10:06 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Thanks for your comment. I&#8217;d like to point out, though, that a generic (not generative!) solution has its own set of problems. I remember load of performance problems in projects that put attributes into a hashmap in the objects where they were then accessed with something like getAttribute(&#8220;SomeAttrib&#8221;) instead of getSomeAttrib(). This is an order of magnitude slower at the minimum. It&#8217;s a good idea, as always, to aim for a balance between generative and generic solutions in your application.</p>


<div class="comment" id="comment-47">
On <a href="#comment-47" title="Permalink to this comment">February  8, 2004  9:06 AM</a>, Mike Bresnahan
said:
<p>True, getAttribute(&#8220;SomeAttrib&#8221;) is slower than getSomeAttrib(), but it still much faster that a database call or the generation of a HTML page.  I have never found it to be a bottleneck.  Generating the code is a happy medium in some ways, but I find it leads to the need to generate more code, which leads to the need to generate more code, etc&#8230;  Although I have found successful ways to use Java reflection to mix the two paradaigms.</p>


<div class="comment" id="comment-48">
On <a href="#comment-48" title="Permalink to this comment">February  8, 2004 12:30 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I&#8217;m not condemning this on principle: Whether the better approach for a given project is getSomeAttrib() or getAttribute() depends on the usage pattern. The getAttribute() way works very nicely for UI patterns, where you link an attribute name to a control. It sucks if you have complex algorithms that access the attribute multiple times. Combining code generation and genericity/reflection allows you to wrap one by the other - i.e., either have getSomeAttrib() call getAttribute(&#8220;SomeAttrib&#8221;) or the other way round. An MDA approach allows you to swap one for the other even when your application is done &#8230;</p>


<div class="comment" id="comment-49">
On <a href="#comment-49" title="Permalink to this comment">February  8, 2004  6:41 PM</a>, Mike Bresnahan
said:
<p>Yup.  And it also works well for many classes of data processing applications as well (data entry, ETL, etc), because 90-95% of the attributes are just traveling from place to another.  There are few reasons to call getAttribute() on them.  However, I would probably not use the generic approach in a real-time control system.  How does MDA allow you to swap implementations after the application is done?</p>


<div class="comment" id="comment-50">
On <a href="#comment-50" title="Permalink to this comment">February  8, 2004  7:20 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>The basic idea is that you can separate your object model - let&#8217;s say including the classes Customer, Address, Contract, Order - from a decision like whether you want to have attribute methods use a generic or a typed/named approach. Which of these approaches you use is specified in template rules; these are applied to the object model, yielding either one or the other result.
Since you can re-generate even after you have manually added code that is not being generated from the model, you have a big opportunity to try things out easily.</p>


</section>

