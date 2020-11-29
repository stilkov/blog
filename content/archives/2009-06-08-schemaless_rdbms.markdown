---
layout: post
title: "Schemaless RDBMS"
date: "2009-06-08T16:26:00+01:00"
comments: false
categories: 
---

<p>Alex Popescu, who is InfoQ.com's chief architect, <a href="http://themindstorms.blogspot.com/2009/06/schema-less-relational-database.html">makes a case for using a relational database without schemas</a>:</p>

<blockquote>
<p>By now the solution should become quite obvious: instead of persisting the object by storing it field by field, we would just serialize the whole object with all its properties. Basically, the table will need just 2 fields: an ID and a field that can store our serialized object.</p>
</blockquote>

<p>I'm usually a big fan of Alex's work and agree with almost everything he writes – but this time I couldn't disagree more: Using an RDBMS in this way is an <em>abuse</em> IMO, and in fact one of the examples I use as an anti-pattern when I rent about HTTP abuse. I know it's in no way cool to say so, but I'm in fact a big fan of relational databases. As with any technology, they're not always a good match, but in very many cases they are. (You might think you need a fast reliable replicated high-performance clustered key-value storage engine, but you're probably wrong as long as your app doesn't have a few hundred thousand users. [Which I admit InfoQ.com has, but I'm not sure that was Alex's context here.]) </p>

<p>Relational databases make sense when I can actually use them the way they were supposed to be used - namely, with the flexibility to select, filter, combine, update and delete available information in tabular form. If you can't do meaningful SELECTs anymore, why would you want to use a relational database? </p>

<section class="comments">



<div class="comment" id="comment-1991">
On <a href="#comment-1991" title="Permalink to this comment">June  8, 2009  6:55 PM</a>, <a href="http://dret.net/netdret/" title="http://dret.net/netdret/" rel="nofollow">dret</a>
said:
<p>i agree that this is a Bad Idea. if you want a key/value store, use a key/value store and get the simplicity, scalability, and performance gains that come with it. i guess this is a good example of &#8220;if all you&#8217;ve got is a hammer, everything looks like a nail&#8221;. it reminds me of the early papers about XML storage that proposed the same idea: have a generic table for the nodes and a generic table for the edges of the XML tree. it works in theory, but it&#8217;s a serious metamodel mismatch and almost useless when you want to start working with your actual model, the XML tree.</p>


<div class="comment" id="comment-1992">
On <a href="#comment-1992" title="Permalink to this comment">June  8, 2009  7:04 PM</a>, <a href="http://www.mhaller.de/" title="http://www.mhaller.de/" rel="nofollow">mike</a>
said:
<p>It&#8217;s a Bad Idea. And sometimes, even Bad Ideas (TM) need to be implemented. There are cases where you have an application&#8217;s persistence model in the relational database with all the benefits you need. Clean and neat. Then, the application needs to store &#8220;arbitrary custom fields&#8221; and this is the point where the architect has to decide whether to use another database type or stick with what the customer already has: the big fat DB2 or Oracle. And usually, you have to swallow the bitter pill and go with the latter. You KNOW it&#8217;s a bad idea from an IT professional point of view. You KNOW that at some point in the future your customer will cry out loud because of the mess in the database. You sometimes just can&#8217;t sell it to him before that point, because he does not want to listen or pay for it.</p>


<div class="comment" id="comment-1993">
On <a href="#comment-1993" title="Permalink to this comment">June  9, 2009 12:03 AM</a>, <a href="http://blogs.law.harvard.edu/pkeane" title="http://blogs.law.harvard.edu/pkeane" rel="nofollow">pkeane</a>

<a href="http://blogs.law.harvard.edu/pkeane" class="commenter-profile"></a>
said:
<p>Hmmm, I&#8217;m not so sure.  I agree that the relational model gets short-shrift these days, but complex queries can be quite expensive and a caching layer can be a life-saver.  In my situation (small IT shop at large university) my available tools are Red Hat 5, PHP, MySQL, period.  The amount of data has grown such that a two-column document table (unique ID, document &#8212; either atom entry or atom feed) in MySQL was kind of a no-brainer.  What we get in terms of indexing and concurrency is a world better than we&#8217;d have storing docs on the filesystem.  Add a timestamp, and it becomes pretty useful in easing the load on the db server.  Complex queries on the others tables can still still perform those complex operations, but if I have the unique ID, it&#8217;s just a quick read.  I&#8217;m not sure I see the rationale for absolutely avoiding that sort of &#8220;misuse.&#8221;</p>

<p>&#8212;peter keane</p>


<div class="comment" id="comment-1994">
On <a href="#comment-1994" title="Permalink to this comment">June  9, 2009  2:26 PM</a>, <a href="http://literateprogrammer.blogspot.com/" title="http://literateprogrammer.blogspot.com/" rel="nofollow">ctford</a>
said:
<p>I&#8217;m not surprised you don&#8217;t like this solution, Stefan. It&#8217;s very un-RESTful.</p>

<p>By analogy, a normalised DB schema <i>is</i> RESTful - many nouns (tables) with a constrained set of verbs (SQL) that are widely understood. It even has hyperlinks (foreign keys).</p>

<p>An object-serialised DB couples code and data persistance layer much like RPC couples client and server. Neither can change independently because changes to the data model or code could affect the serialisation.</p>

<p>As a consequence, a system using this design would not be well engineered for serendipity. For example, other applications or data imports would have difficulty interacting with the DB. Worse, extracting aggregate information from this DB would only be possible by extracting and de-serialising every object of a given class.</p>


<div class="comment" id="comment-1995">
On <a href="#comment-1995" title="Permalink to this comment">June  9, 2009 11:15 PM</a>, <a href="http://dehora.net/journal" title="http://dehora.net/journal" rel="nofollow">Bill de hÓra</a>
said:
<p>@stilkov: &#8220;If you can&#8217;t do meaningful SELECTs anymore, why would you want to use a relational database? &#8220;</p>

<p>The operational characteristics are well understood. Concurrency support is excellent. There&#8217;s less disk seeks (maybe). Some data is hard to fit into relational models (eg vcards and social graphs). For initial implementations, the data model can be allowed to evolve - I think starting with key/values and refactoring to normalized structures is a valid engineering technique.</p>

<p>KVS are relatively immature, but it seems people do actually need to store key/values. You could use X500/LDAP but the write speeds aren&#8217;t great and multi-attributes can hurt read performance. </p>

<p>I see this technique of holding key/values in an RDBMS along with approaches such as constrained tree schema as transitional.</p>

<p>@stilkov: &#8220;You might think you need a fast reliable replicated high-performance clustered key-value storage engine, but you&#8217;re probably wrong as long as your app doesn&#8217;t have a few hundred thousand users&#8221;</p>

<p>It&#8217;s not just the number of users, it&#8217;s the amount of data. Joining tables with tens to hundreds of millions of records - when you get to that size the amount of process required to do /anything/ to the data is expensive. I won&#8217;t even start on data sizes in the billions.</p>

<p>@dret: &#8220;i agree that this is a Bad Idea. if you want a key/value store, use a key/value store and get the simplicity, scalability, and performance gains that come with it&#8221;</p>

<p>In a few years from now. For now, I think doing this on top of an RDBMS makes operational sense (most shops understand how to manage rdbmses). Also for most use cases I&#8217;ve seen, we&#8217;re not talking about moving the whole domain into a KVS, just the stuff that&#8217;s eoither ad-hoc or hard to model relationally (for whatever reason including we not having time to get the model right). The cost of upgrading very large RDBMes where the schema is not stable is enormous, putting some data into KVS can help reduce that.</p>

<p>@mike &#8220;Then, the application needs to store “arbitrary custom fields” and this is the point where the architect has to decide whether to use another database type or stick with what the customer already has: the big fat DB2 or Oracle. And usually, you have to swallow the bitter pill and go with the latter. You KNOW it’s a bad idea from an IT professional point of view.&#8221;</p>

<p>I hear this a lot. But if this is the nature of systems and classic RDBMS modelling doesn&#8217;t support it, then so much the worse for RDBMS modelling. What should the business do, suspend revenue generation until the architects figure it out?</p>

<p>@ctford: &#8220;By analogy, a normalised DB schema is RESTful - many nouns (tables) with a constrained set of verbs (SQL) that are widely understood. It even has hyperlinks (foreign keys).&#8221;</p>

<p>:o</p>

<p>@ctford: &#8220;As a consequence, a system using this design would not be well engineered for serendipity. For example, other applications or data imports would have difficulty interacting with the DB. &#8220;</p>

<p>I suspect integration via databases kills most notions of engineering for serendipity ;) which is why it&#8217;s falling out of favor with the exception of ETL work. And I disagree, I think use of KVS can increase data reuse because the performance characteristics are predictable, whereas letting applications at normalized data (or adding to normalized data) requires upfront analysis.</p>


<div class="comment" id="comment-1996">
On <a href="#comment-1996" title="Permalink to this comment">June 10, 2009  1:58 AM</a>, <a href="http://themindstorms.blogspot.com" title="http://themindstorms.blogspot.com" rel="nofollow">http://getopenid.com/alexpopescu</a>

<a href="http://themindstorms.blogspot.com" class="commenter-profile"></a>
said:
<p>Firstly, I guess I&#8217;ll have to thank Bill for addressing almost all the points raised by Stefan and other commenters. </p>

<p>The only think I&#8217;d like to add at this point is that in a previous post (http://themindstorms.blogspot.com/2009/05/quick-reference-to-alternative-data.html) I have put together a list of KV storages and other alternatives. You&#8217;ll notice that most of them are in very early stages and so my suggestion would be that before trying out any of those to make sure you are including in your analysis the costs and risks you are exposing to. </p>

<p>While being aware of the limitations of the proposed solution and also to the fact that it might be considered a cannibalization of RDBMS, I do think that it might represent the most viable solution for the time being, a solution that will minimize your costs and risks and offer a well balanced set of features from both worlds. Moreover, my post is about an extreme scenario, but I think it would be quite easy to imagine midway approaches.</p>


<div class="comment" id="comment-1998">
On <a href="#comment-1998" title="Permalink to this comment">June 10, 2009  3:05 PM</a>, <a href="http://literateprogrammer.blogspot.com/" title="http://literateprogrammer.blogspot.com/" rel="nofollow">ctford</a>
said:
<p>@Bill It&#8217;s easy to engineer a database for serendipitous reuse. Just expose it directly to the the internet ;)</p>


<div class="comment" id="comment-1999">
On <a href="#comment-1999" title="Permalink to this comment">June 11, 2009  4:21 AM</a>, <a href="http://www.subbu.org" title="http://www.subbu.org" rel="nofollow">Subbu Allamaraju</a>
said:
<p>Agree with Bill&#8217;s observations. RDBMSs have solved a number of problems that most KV stores don&#8217;t yet address. </p>


<div class="comment" id="comment-2000">
On <a href="#comment-2000" title="Permalink to this comment">June 11, 2009 12:55 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>I have no problem at all with an architecture in which a &#8220;normal&#8221; database layout is extended to support some binary data with associated metadata. It&#8217;s the use of the DB as a general key value store that I object to.</p>


</section>

