---
layout: post
title: "distutils support in Jython"
date: "2003-05-21T16:33:00+01:00"
comments: false
categories: 
---

<p>I wanted to play around with <a href="http://www.jython.org/">Jython</a>, especially because I believe that Web services and dynamic languages should be a nice match. This is actually my first contact with Python, so I got stuck with a pretty simple problem: Most Python packages come with an installation routine based on <a href="http://www.python.org/sigs/distutils-sig/">distutils</a>. Unfortunately, I was unable to install anything this way because distutils is not available with a standard Jython installation.<br />
So I grabbed the distutils source itself, which I was unable to install either - it seems not to run with Jython out of the box.<br />
The following two patches, based on information in the <a href="http://www.python.org/sigs/distutils-sig/list.html">distutils mailing list</a>, did the trick:<br />
I added this to to INSTALL_SCHEMES dictionary:<br />
</p><pre><br />
'java': {<br />
'purelib': '$base',<br />
'platlib': '$base',<br />
'headers': '$base/Include/$dist_name',<br />
'scripts': '$base/Scripts',<br />
'data'   : '$base',<br />
},<br />
</pre><br />
and then patched file_util.py from<br />
<pre><br />
if preserve_times:<br />
os.utime(dst, (st[ST_ATIME], st[ST_MTIME]))<br />
if preserve_mode:<br />
os.chmod(dst, S_IMODE(st[ST_MODE]))<br />
</pre><br />
to this:<br />
<pre><br />
if hasattr(os, 'utime'):<br />
if preserve_times:<br />
os.utime(dst, (st[ST_ATIME], st[ST_MTIME]))<br />
if hasattr(os, 'chmod'):<br />
if preserve_mode:<br />
os.chmod(dst, S_IMODE(st[ST_MODE]))<br />
</pre><br />
Ugly, probably stupid as hell ... but it worked.
<section class="comments">

<div class="comment" id="comment-25">
On <a href="#comment-25" title="Permalink to this comment">March 20, 2007  5:34 AM</a>, <a href="http://www.siggraph.org/members/jryan" title="http://www.siggraph.org/members/jryan" rel="nofollow">Justin Ryan</a>
said:
<p>The second blurb can be simplified and possibly more efficient as:</p>

<pre>            if preserve_times and hasattr(os, 'utime'):

os.utime(dst, (st[ST_ATIME], st[ST_MTIME]))

if preserve_mode and hasattr(os, 'chmod')::

os.chmod(dst, S_IMODE(st[ST_MODE]))
</pre>

<p>the hasattr will never run if the first is false, and that&#8217;s really the important condition.</p>

<p>That said, this isn&#8217;t working for me with latest Jython, though I did find that some people are trying to make utime and chmod work with a new javaos.py implementation.</p>


</section>

