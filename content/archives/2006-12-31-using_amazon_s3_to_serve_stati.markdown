---
layout: post
title: "Using Amazon S3 to Serve Static Content"
date: "2006-12-31T11:00:00+01:00"
comments: false
categories: 
---

<p><a href="http://overstimulate.com/articles/2006/11/19/userscripts-and-s3.html">Jesse Andrews</a>:</p>

<blockquote>
<p>Since userscripts is a rails app I copied the public directory, deleted a few files (dispatch.*, robots.txt, &#8230;), removed all the .svn directories, then used S3Fox to copy the files up. By default the files are private, so clicking properties on each folder (images, stylesheets, javascripts) and setting it to be readable by the public (recursively &#8212; apply to subfolders). [&#8230;] After committing the changes I asked a few friends to kick the tires. I would have a friend browse userscripts for a few minutes with the latest changes (using S3) or the previous svn revision (not using S3), then after a few minutes change back. The results were unanimous with S3 providing a noticeable speed up. Ahh success!</p>
</blockquote>


