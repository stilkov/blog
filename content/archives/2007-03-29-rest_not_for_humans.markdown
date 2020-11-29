---
layout: post
title: "REST Not for Humans?"
date: "2007-03-29T19:16:00+01:00"
comments: false
categories: 
---

<p><a href="http://pragdave.pragprog.com/pragdave/2007/03/the_radar_archi.html">Dave Thomas writes</a> (emphasis mine):</p>

<blockquote>
<p>Does that mean I&#8217;m down on the RESTful, CRUD based approach to application development? Not at all. For some categories of application, I think it&#8217;s a great way of structuring your code. <em>But REST isn&#8217;t designed for talking to people</em>.</p>
</blockquote>

<p>Huh? </p>

<p>That&#8217;s definitely the first time I&#8217;ve heard this assertion &#8212; usually, <a href="http://www.infoq.com/articles/sanjiva-rest-myths">it&#8217;s just the other way around</a>. </p>

<p>There&#8217;s nothing unRESTful in returning an HTML &#8220;view&#8221; representation at <code>http://example.com/employees/1</code>, and a form to edit the same resource at <code>http://example.com/employees/1;edit</code> &#8212; provided you view these two things as different resources, and not two representations of the same resource. This is is a somewhat philosophical question. Even more importantly, reducing REST to back-end logic only seems to stress the (<a href="http://www.elharo.com/blog/software-development/web-development/2005/12/08/post-vs-put/">pretty</a> <a href="http://www.soundadvice.id.au/blog/2006/12/30/">broken</a>) CRUD analogy way too much for my taste, which will ultimately lead to <a href="http://def-end.blogspot.com/2006/07/all-is-not-crud.html">misunderstandings</a>.</p>


