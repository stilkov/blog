---
layout: post
title: "Everything Becomes Lisp"
date: "2008-12-12T07:27:00+01:00"
comments: false
categories: 
---

<p><a href="http://patricklogan.blogspot.com/2008/12/everything-becomes-lisp.html">Patrick Logan</a> points to <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new2/index.html?ca=drs-tp5008">an article</a> containing this example:</p>

<pre><code>function quoteWords()
{
return array_map('quoteWordsHelper',
function ($string) {
return preg_replace('/(\w)/','"$1"',$string);
});
}
</code></pre>

<p>There's little doubt lambda functions and closures have become mainstream if they're in PHP :-)</p>

<section class="comments">



<div class="comment" id="comment-1895">
On <a href="#comment-1895" title="Permalink to this comment">December 12, 2008  5:34 PM</a>, <a href="http://twitter.com/lqd" title="http://twitter.com/lqd" rel="nofollow">lqd</a>
said:
<p>and c++0x :)</p>


<div class="comment" id="comment-1901">
On <a href="#comment-1901" title="Permalink to this comment">December 14, 2008  9:38 AM</a>, myxomycetes
said:
<p>@Iqd  I just read a paper from Hans Böhm
<a href="http://www.hpl.hp.com/personal/Hans_Boehm/c++mm/threadsintro.html" rel="nofollow">http://www.hpl.hp.com/personal/Hans_Boehm/c++mm/threadsintro.html</a>
and there&#8217;s the line
&#8220;&#8230;, in spite of the fact that we do not expect it (C++0x Standard) to be formally adopted as an ISO standard until 2010 or 2011. A Committee Draft of the standard is currently available, and we expect a number of vendors to begin support for parts of it sooner than 2011.&#8221;
So I really wonder if C++ might have become irrelevant for the definition of &#8220;mainstream&#8221;.</p>


</section>

