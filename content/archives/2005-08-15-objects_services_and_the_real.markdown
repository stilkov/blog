---
layout: post
title: "Objects, Services, and the Real World"
date: "2005-08-15T21:48:00+01:00"
comments: false
categories: 
---

<p><a href="http://radovanjanecek.net/blog/archives/000269.html">Radovan</a> links to and has high praise for a presentation by Steve Jones. I guess you had to be there &#8230; anyway, I simply can&#8217;t resist attacking one of my favorite pet peeves: the idea that OO was and is successful because &#8220;objects model things from the real world&#8221;. In my former job I interviewed close to a hundred job applicants (in two years, as opposed to about 20 in the past six years); one of my routine questions was &#8220;How would you explain OO?&#8221;</p>

<p>Anyone answering with the standard real-world boilerplate had a hard time finding a good answer why, in this respect, an &#8220;Order&#8221; class should be in any way different from an Order struct in C or an Order table in an RDBMS &#8230; </p>

<p>OO successful because objects represent real-world things? You mean, like, files, application windows, linked lists?</p>

<p>Bullshit.</p>

<section class="comments">

<div class="comment" id="comment-596">
On <a href="#comment-596" title="Permalink to this comment">August 15, 2005 10:39 PM</a>, <a href="http://www.h3osoftware.com" title="http://www.h3osoftware.com" rel="nofollow">Clint</a>
said:
<p>I think i agree with you. Yet, I might be missing your point. Do you mean to say that OO never does a good job of representing real world things? Or do you mean that people don&#8217;t use OO properly to get what they need from the software, in order to represent real world things? I take it you beleive that OO isn&#8217;t the only thing that can represent real world things and the OO isn&#8217;t successful anymore than RDBMS or C is.</p>


<div class="comment" id="comment-597">
On <a href="#comment-597" title="Permalink to this comment">August 15, 2005 11:12 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I think OO is an excellent approach and I&#8217;m a big fan and user of it. I just happen to believe that it is a principle for software engineering, nothing more; and an OO software does not do a better or worse job of representing real-word &#8220;things&#8221; that (most) other technologies. Claiming that it does is just marketing.</p>


<div class="comment" id="comment-598">
On <a href="#comment-598" title="Permalink to this comment">August 16, 2005 12:44 AM</a>, <a href="http://vdm.cc/" title="http://vdm.cc/" rel="nofollow">Vincent D Murphy</a>
said:
<p>Taking the REST/Web point of view, the object, the struct, the row, the file, the (view within the) window, and so on are all just representations of an abstract resource.</p>

<p>There is a resource, but you can&#8217;t touch it or act on it (in a computational process or in your head, it doesn&#8217;t matter). You can only say things about it.</p>

<p>I think it is good to take this approach any time you take a bag of bits and think of them as anything more than an integer. That&#8217;s where you move from numerical to symbolic computing; and even that could be viewed as a false dichotomy; in that the bag of bits is always a symbol be it for a number or something else.</p>


<div class="comment" id="comment-599">
On <a href="#comment-599" title="Permalink to this comment">August 16, 2005  3:37 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Good point, the same is true for REST resources: Useful as they might be, they&#8217;re just another way to model things, not inherently more or less close to reality than any of the others.</p>


<div class="comment" id="comment-600">
On <a href="#comment-600" title="Permalink to this comment">September  3, 2005  3:12 PM</a>, <a href="http://service-architecture.blogspot.com/" title="http://service-architecture.blogspot.com/" rel="nofollow">Steve Jones</a>
said:
<p>As the person who wrote the &#8220;bullshit&#8221; I have to say the answer to the question is pretty straight forward&#8230;</p>

<p>A struct in C (or a database table) has only data and no behaviour.  The key difference to an OO object is that it models both the data and the the behaviour.  Now you can actually do OO in C by using function pointers et al within structs, and you can model behaviour in databases using triggers et al&#8230; but its much much harder.</p>

<p>Linked lists are a normally pure data (limited behaviour) so don&#8217;t really push OO at all, application windows however are great examples of how OO helps build things as the window object maintains not only the data about itself but also its constraints and actions.  Its that which differentiates Object Orientation from just lobbing data into classes, which I agree is no better than doing structs in C.  </p>

<p>OO = Structs + behaviour. And I stand by my comment that this is why OO works&#8230; I won&#8217;t deny however that its stunning how many people still don&#8217;t seem to understand the difference between data and behaviour.</p>


<div class="comment" id="comment-601">
On <a href="#comment-601" title="Permalink to this comment">September  3, 2005  6:11 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Hi Steve,</p>

<p>I did not intend to call what you wrote bullshit. My point is only that OO is useful because of many reasons, but not because it models things closer to the real world. Basically all OO practitioners, myself included, end up with modeling objects of distinct roles - some of them represent data, some of them represent processes since more often than not it&#8217;s not at all clear what object a given behavior belongs to. </p>

<p>If you look at the GoF design patterns book, you find a lot of useful and common applications of OO; most of them are driven by software engineering needs, not by analysis. </p>

<p>Again, I may have trouble making my point, so I&#8217;ll try once more: I like OO; classes are more useful than structs; I prefer even C++ to C; I&#8217;m not arguing that a procedural language and an OO language are equal &#8212; not at all. My point is that with regards to their resemblance to what&#8217;s going on in the real world there&#8217;s little, if any, difference.</p>


</section>

