---
layout: post
title: "Shame on you, Amazon ..."
date: "2007-12-15T23:47:00+01:00"
comments: false
categories: 
---

<p>for releasing the shittiest &#8220;REST&#8221; API in a long time. What complete ignorant came up with <a href="http://docs.amazonwebservices.com/AmazonSimpleDB/2007-11-07/DeveloperGuide/?">this</a> API to <a href="http://www.amazon.com/b/ref=sc_fe_c_1_3435361_1?ie=UTF8&amp;node=342335011&amp;no=3435361&amp;me=A36L942TSJ2AJA">SimpleDB</a>?</p>

<blockquote>
<p>The following shows a REST request that puts three attributes and values for an item named Item123 into the domain named MyDomain.</p>
</blockquote>

<pre><code>    https://sdb.amazonaws.com/?Action=PutAttributes
&amp;DomainName=MyDomain
&amp;ItemName=Item123
&amp;Attribute.1.Name=Color&amp;Attribute.1.Value=Blue
&amp;Attribute.2.Name=Size&amp;Attribute.2.Value=Med
&amp;Attribute.3.Name=Price&amp;Attribute.3.Value=14.99
&amp;AWSAccessKeyId=&lt;valid_access_key&gt;
&amp;Version=2007-11-07
&amp;Signature=Dqlp3Sd6ljTUA9Uf6SGtEExwUQE=
&amp;SignatureVersion=1
&amp;Timestamp=2007-06-25T15%3A01%3A28-07%3A00
</code></pre>

<section class="comments">



<div class="comment" id="comment-1538">
On <a href="#comment-1538" title="Permalink to this comment">December 16, 2007 12:48 AM</a>, Gresco
said:
<p>Stefan, I am a new to REST style. Would you mind sharing with us what could be the right way of designing the above URL? Some pointers would be much appreciated too. Thanks.</p>


<div class="comment" id="comment-1539">
On <a href="#comment-1539" title="Permalink to this comment">December 16, 2007  2:41 AM</a>, <a href="http://www.briggs.net.nz/log" title="http://www.briggs.net.nz/log" rel="nofollow">Jason R Briggs</a>
said:
<p>Somebody didn&#8217;t bother to learn the basics.  I <em>do</em> hope there&#8217;s an equivalent DeleteAttributes action.  Something that you can provide as a link on a page&#8230;. ;-)</p>


<div class="comment" id="comment-1540">
On <a href="#comment-1540" title="Permalink to this comment">December 16, 2007  9:07 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Gresco, as it happens, I can point you to this: <a href="http://www.infoq.com/articles/rest-introduction">http://www.infoq.com/articles/rest-introduction</a></p>


<div class="comment" id="comment-1541">
On <a href="#comment-1541" title="Permalink to this comment">December 16, 2007  3:34 PM</a>, <a href="http://ghadir.de/blog" title="http://ghadir.de/blog" rel="nofollow">Phillip Ghadir</a>
said:
<p>Actually, the URL is almost as neat as it could be, isn&#8217;t it? :-)
Or do you see any difference to:</p>

<pre>
https://sdb.amazonaws.com/MyDomain/Item123/Attributes
&Color=Blue
&Size=Med
&Price=14.99
&AWSAccessKeyId=
&Version=2007-11-07
&Signature=Dqlp3Sd6ljTUA9Uf6SGtEExwUQE=
&SignatureVersion=1
&Timestamp=2007-06-25T15%3A01%3A28-07%3A00
</pre>

<p>Probably I&#8217;d drop the part Attributes in the URL &#8230;</p>

<p>I&#8217;m not sure about Version parameter. Maybe one would encode it into the URL directly.</p>

<p>In the end it boils down to the criticism on the action encoding in the url instead of identifying a resource that&#8217;s accessed via standard methods, and on the misuse of the parameters for building key-value-pairs like &#8216;attribute.&lt;no&gt;.name&#8217; and &#8216;attribute.&lt;no&gt;.value&#8217; instead of using parameters directly.</p>

<p>Do I miss something else?</p>


<div class="comment" id="comment-1542">
On <a href="#comment-1542" title="Permalink to this comment">December 16, 2007  4:33 PM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>I think that just about covers it - and I consider it bad enough.</p>

<p>On an unrelated note, this day will get a red mark in my calendar :-)</p>


<div class="comment" id="comment-1543">
On <a href="#comment-1543" title="Permalink to this comment">December 17, 2007 12:14 PM</a>, <a href="http://www.tagtraum.com/" title="http://www.tagtraum.com/" rel="nofollow">Hendrik Schreiber</a>
said:
<p>&#8230;just because Phillip left a comment in your blog? ;-)</p>


<div class="comment" id="comment-1544">
On <a href="#comment-1544" title="Permalink to this comment">December 22, 2007 11:08 AM</a>, <a href="/blog/st/">Stefan Tilkov</a>

<a href="/blog/st/" class="commenter-profile"><img src="/mt4/mt-static/images/comment/mt_logo.png" height="16" alt="Author Profile Page" width="16" /></a>
said:
<p>Exactly :)</p>


</section>

