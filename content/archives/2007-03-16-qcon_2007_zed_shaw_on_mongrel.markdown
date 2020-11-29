---
layout: post
title: "QCon 2007: Zed Shaw on Mongrel"
date: "2007-03-16T13:01:00+01:00"
comments: false
categories: 
---

<p>Again, unordered notes. Mongrel, the Ruby web server, is about 2500 lines of code, 6 person months of work. It&#8217;s written in Ruby, C, and ragel. Lots of statistics about downloads, traffic on the web site. Lots of companies using Mongrel, especially (off Apple is putting a lot of work into Ruby/Rails and thus Mongrel support in OS X. All of the competitors (like FastCGI, Monorail, mod_ruby, Litespeed. The Mongrel community is way more active, in his opinion the key for this is documentation. A small project with a great impact; e.g. DHH confessed to him that he had about 400 restarts a day at 37signals when using FastCGI; those problems are gone. In his opinion, Mongrel enabled a lot of companies to actually do what they&#8217;re doing, and helped them raise millions of VC capital. </p>

<p>Slogan &#38; naming &#8212; he came up with the name because he hated Tomcat. Stupid marketing tricks Documentation written based on an OpenWeb template, lots of CC-licensed pictures from Flickr, done using WebGen in 4 hours. Comedy and inside jokes, e.g. a joke certificate people took seriously. Frequent releases with announcements, but not too early and not too often. Expose quality processes, interviews and speaking engagements, answers to every question and email. Answers, not explanations &#8212; not &#8220;that&#8217;s because &#8230;&#8221; but &#8220;here&#8217;s what you need to do&#8221;. Cheaper to fix something than to explain why it&#8217;s broken over and over again. Documentation is the #1 requirement. Really successful open source projects have a 3:1 documentation to code ratio.</p>

<p>Mongrel was created to remove suffering, esp. with FastCGI. Things that didn&#8217;t matter: Insane configurability, extensive plugin extension API, Performance beyond Ruby&#8217;s capabilities, fixing frameworks, specialized I/O processing, keep-alives, pipelining, chunked encoding. </p>

<p>Chunked encoding was in there already &#8212; was taken out again because it wasn&#8217;t needed, but performance suffered. Mongrel&#8217;s reason for not doing keep alive is because it usually sits behind e.g. an Apache HTTPD. &#8220;Advice from the Marianas Trench&#8221;: As a corporation relying on open source, one needs to be like the new guy in the group &#8212; have some humor. Everyone&#8217;s usually trying to have fun. E.g. Apple submitted a patch and just expected him to include it &#8212; an attitude he calls &#8220;code fisting&#8221;. [How many Google referrals is that going to get me?]. As a company dealing with open source, you need to grow a thicker skin &#8212; you can&#8217;t control the communication channel.</p>

<p>Symbiotic, not parasitic &#8212; the first with mutual benefit, the second just benefits just one. Apple as a model &#8212; they asked him to change the license from LGPL to the Ruby license, and offered a conference ticket and OS X seed keys to all of the project developers. How to give back: donate patches, donate hardware or software, give free versions of your software, offer books or gift certificates, write glowingly about the project, most importantly: write documentation. </p>

<p>Beating Mongrel: He wants to see a company do a better Mongrel, because otherwise he&#8217;ll have to do it. Stop focusing on performance &#8212; unless your server is at least 10 times faster nobody will care. Ruby is not that fast. Problems to solve: clustering, sessions, caching, logging, recovery, management. Things to keep: one minute start (download, install, run instead of &#8220;Yak shaving&#8221;), no options required, strict operation (strict requirements of what the clients need to do &#8212; i.e. Google proxies didn&#8217;t honor connection close requests, and they complained to him about violating the spec). Documentation, again. Processes not containers, simple API.</p>

<p>Can it make cabbage? Hell no. No money to make with web servers, revenue would have come from services.  What? First reason: Blame Java &#8212; Q.: What the hell is &#8220;Enterprise Ruby&#8221; anyway? A.: Yet another stack of &#8216;crap&#8217; so complex that any salesperson can use Steak and Strippers to easily sell it to management thanks to the bikeshedding effect. Second reason: Zed, because his stuff already works.</p>

<p>Nice talk.</p>


