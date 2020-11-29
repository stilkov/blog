---
layout: post
title: "CXF REST Conventions"
date: "2006-12-04T08:19:00+01:00"
comments: false
categories: 
---

<p><a href="http://feeds.feedburner.com/~r/netzooid/~3/56910444/">Dan Diephouse</a>:</p>

<blockquote>
<p>The latest code in CXF&#8217;s SVN takes a cue from the Ruby community and knows how to turn CRUD operations into resources automatically.</p>
</blockquote>

<p>Examples:</p>

<ul>
<li>Selection: <code>Collection&lt;People&gt; getPeople()</code> is mapped to an HTTP GET on /people</li>
<li><code>Person getPerson(id)</code> is mapped to an HTTP GET on /people/{id}.</li>
<li><code>void addPerson(Person person)</code> is mapped to an HTTP POST on /people.</li>
<li><code>void updatePerson(long id, Person person)</code> is mapped to an HTTP PUT on /people/{id}.</li>
<li><code>void deletePerson(long id)</code> is mapped to an HTTP DELETE on /people/{id}</li>
</ul>

<p><em>Very</em> neat.</p>

<section class="comments">

<div class="comment" id="comment-1120">
On <a href="#comment-1120" title="Permalink to this comment">December  4, 2006  4:55 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Hmm, but why the &#8220;People&#8221; qualifier on all the verbs?  What value does that add?  Why not just &#8220;Collection get()&#8221;?</p>


<div class="comment" id="comment-1121">
On <a href="#comment-1121" title="Permalink to this comment">December  4, 2006  5:00 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>One reason would be to have a single class &#8220;serve&#8221; multiple resources. Or would this be weird? I&#8217;m not sure. Is it your opinion that the implementation structure should match the &#8220;external resource view&#8221; 1:1?</p>


<div class="comment" id="comment-1122">
On <a href="#comment-1122" title="Permalink to this comment">December  4, 2006  5:35 PM</a>, <a href="http://www.markbaker.ca" title="http://www.markbaker.ca" rel="nofollow">Mark Baker</a>
said:
<p>Not necessarily, but I don&#8217;t see why it doesn&#8217;t in this case.</p>


<div class="comment" id="comment-1123">
On <a href="#comment-1123" title="Permalink to this comment">December  5, 2006  9:38 PM</a>, <a href="http://netzooid.com" title="http://netzooid.com" rel="nofollow">Dan Diephouse</a>
said:
<p>Mark: good question. As Stefan outlined there are often classes which serve out mulitiple different types of things. </p>

<p>If you are only serving out one type of resource - i.e. People - it is redundant and get/update/remove/delete are sufficient. It is also more RESTful that way. However, the way I implemented it seemed most natural for a lot of Java developers. Or at least to me. :-) I suppose it would be a good idea to support multiple conventions both the one you mentioned and the original one I did. </p>

<p>I would probably also want to support getAll() as I think people will find get() ugly from a Java POV. People are used to getters where they have getFoo(). I think they&#8217;ll tacitly feel that get() alone is ugly and want something like getPeople/getAll instead.</p>


</section>

