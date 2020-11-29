---
layout: post
title: "RailsConf Europe: DHH on Simply RESTful and Simply Helpful"
date: "2006-09-14T11:37:00+01:00"
comments: false
categories: 
---

<p>DHH demoed the new resources_scaffold generator which is going to be available in Rails 1.2.0 (or rather, he showed the code that it&#8217;ll generate). This ensures that default Rails controllers &#8212; and hopefully, custom code that is created using them as an example &#8212; will use decent URLs and the appropriate HTTP verbs. I&#8217;m not entirely sure I&#8217;m happy with the decision to use extensions (suffixes, such as .xml or .html) to distinguish content types, but maybe that&#8217;s a way that&#8217;s easier to grasp for most people. He also showed ActiveResource, the client side framework that &#8212; based on the conventions introduced by Simply Restful &#8212; allows for very easy usage of resources via HTTP. Again, I&#8217;m not totally convinved &#8212; I wonder how well this will work when the resources you are talking to are not implemented with Rails. In general, it all seems very much reduced to a RESTful mapping of ActiveRecord and thus C/R/U/D, which is not the best possible analogy.</p>

<p>The second part of the talk was about Simply helpful, currently available as a plugin for edge rails. This simplifies a lot of redundancy in view development by relying on conventions, e.g. for names CSS classes and IDs, forms etc.</p>

<p>He did not use a &#8220;real&#8221; presentation, just his editor and shell, which worked very well. Overall, a great talk.</p>

<p>Update: <a href="http://www.loudthinking.com/arc/000599.html">DHH&#8217;s post on European RailsConf</a>, sadly no slides to download (as there weren&#8217;t any; then again, he could have put up the Ruby code ;-) )</p>


