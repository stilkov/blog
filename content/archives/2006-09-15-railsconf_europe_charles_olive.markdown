---
layout: post
title: "RailsConf Europe: Charles Oliver Nutter on JRuby on Rails"
date: "2006-09-15T17:27:00+01:00"
comments: false
categories: 
---

<p>Charles demoed the Depot 2 application (from Agile Web Programming with Rails) application running on JRuby, integrated with a JMX bean and using JDBC as the database library. Needless to say, this is seriously cool. I asked about integration with Java EE on different tiers. Oliver&#8217;s answer was that integrating the JRuby runtime via a servlet should be easy (and has in fact been done for JavaOne), but using JRuby for e.g. writing EJBs (or rather, ERBs) would be a lot harder. My guess is that&#8217;s going to change once JRuby compiles down to byte code. </p>

<p>Even though it still performs quite a lot worse than Ruby (or CRuby, as he called it) &#8212; about 2-3 times worse &#8212; the online Depot demo looked perfectly fine. I also inquired about Strongtalk, and he confirmed that he is very interested and willing to work together with the original engineers who are still at Sun to profit from it.</p>


