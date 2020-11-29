---
layout: post
title: "C# generics"
date: "2003-05-10T21:31:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.gotdotnet.com/team/dbox/default.aspx#nn2003-05-10T06:02:33Z" title="Don Box's Spoutlet">Don Box</a> has this example about the upcoming C# support for generics:</p>

<blockquote>CLR generics that use members of a type parameter require an explicit predicate on the parameter to ensure that no runtime checks will need to be done.

<p>Here's an example of how this works in C#:</p></blockquote><br />
<code><br />
class Bob<t> where T : IHasG {</t><br />
T t;<br />
public : void f() { t.g(42); }<br />
};<br />
</code><br />
<blockquote><br />
which assumes an IHasG interface that looks more or less like this:<br />
</blockquote><br />
<code><br />
public interface IHasG {<br />
void g(int); <br />
}<br />
</code>

<p>which I find awfully disappointing. Not having to have classes derive from a specific abstract base class in C++ to do this has always been one of my favorite C++ features.</p>
<section class="comments">

<div class="comment" id="comment-12">
On <a href="#comment-12" title="Permalink to this comment">July 21, 2003 10:47 AM</a>, svkoli
said:
<p>that&#8217;s wrong. generics in C# do not require such an explicite predicate on the parameter, which is called constraint, they can optionally have one more oh them.
have a look at:
<a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dv_vstechart/html/vbconcprogramminglanguagefuturefeatures.asp" rel="nofollow" /><a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dv_vstechart/html/vbconcprogramminglanguagefuturefeatures.asp" rel="nofollow">http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dv_vstechart/html/vbconcprogramminglanguagefuturefeatures.asp</a></p>


<div class="comment" id="comment-13">
On <a href="#comment-13" title="Permalink to this comment">July 21, 2003 11:30 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>But they need to have a constraint if I want to call a method on the object - right? That&#8217;s how I understand the doc you pointed to, anyway &#8230;</p>


<div class="comment" id="comment-14">
On <a href="#comment-14" title="Permalink to this comment">August  5, 2003 11:09 AM</a>, Iulia
said:
<p>I have a problem with a program in c#. I have it in java but there is a section where the program generates the numbers randomly.
The code in java is : &#8221;             for(int j=0; j&lt;size; j++)
{
int n = (int)(lang.math.random()*99);</p>

<p>If you could help me with these matter i would be very gratefull.</p>


<div class="comment" id="comment-15">
On <a href="#comment-15" title="Permalink to this comment">August  5, 2003  1:37 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Iulia, I don&#8217;t program in C#, but a quick Google search for &#8220;C# random&#8221; yields <a href="http://www.experts-exchange.com/Programming/Programming_Languages/C_Sharp/Q_20403988.html," rel="nofollow" /><a href="http://www.experts-exchange.com/Programming/Programming" rel="nofollow">http://www.experts-exchange.com/Programming/Programming</a><em>Languages/C</em>Sharp/Q_20403988.html, which should help you.</p>


<div class="comment" id="comment-16">
On <a href="#comment-16" title="Permalink to this comment">February 19, 2004  5:02 PM</a>, Blublobb
said:
<p>Yes. You need that constraint. Thats whats called &#8220;type-safety&#8221;.. and not having it was actually one of the reasons why C++ templates sucked so hard.</p>


</section>

