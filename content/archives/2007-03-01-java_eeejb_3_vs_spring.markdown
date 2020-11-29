---
layout: post
title: "Java EE/EJB 3 vs. Spring"
date: "2007-03-01T16:21:00+01:00"
comments: false
categories: 
---

<p>I was collecting some opinions on when to choose Java EE over Spring (or vice versa). I know that one doesn&#8217;t have to choose, but I still believe most of the time only one of them (and not both) will become a core part of your architecture.</p>

<p>Here&#8217;s my preliminary list of resources:</p>

<ul>
<li><a href="http://www.devx.com/Java/Article/32314/0/page/1">Make the Right Decision with Our Side-by-Side Comparison of Spring and EJB 3.0</a>, Rod Coffin</li>
<li><a href="http://www.infoq.com/news/spring-ejb-3-compared">Spring and EJB Compared</a>, Floyd Marinescu; discusses this article</li>
<li><a href="http://www.onjava.com/pub/a/onjava/2005/06/29/spring-ejb3.html">POJO Application Frameworks: Spring Vs. EJB 3.0</a>, Michael Juntao Yuan (JBoss),  notable comments <a href="http://www.onjava.com/pub/a/onjava/2005/06/29/spring-ejb3.html?page=last#thread">here</a> and <a href="http://jroller.com/page/habuma/20050630#spring_vs_ejb3_article">here</a> </li>
</ul>

<p>I used the Spring IoC container once, and was very happy with it. I used EJB 2.x, and it sucked (but not as much as many claim), and EJB 3 is a vast improvement. I&#8217;m not leaning towards one or the other. At the moment, I see these main differences:</p>

<ul>
<li>Spring is &#8220;just&#8221; a very well established open source project (with a huge community); Java EE/EJB 3 is &#8220;just&#8221; a standard supported by commercial and open source products</li>
<li>Spring relies heavily on XML configuration (yuck!) while Java EE/EJB 3 relies on annotations (phew!)  </li>
<li>Spring can be stripped to its bare bones (cool!), with Java EE/EJB 3 you always get the whole &#8220;integrated&#8221; package (great!)</li>
</ul>

<p>Any pointers to things I&#8217;m obviously missing?</p>

<section class="comments">

<div class="comment" id="comment-1194">
On <a href="#comment-1194" title="Permalink to this comment">March  1, 2007  5:32 PM</a>, <a href="http://www.jboss.com" title="http://www.jboss.com" rel="nofollow">Kevin Barfield</a>
said:
<p>If you are comparing Spring to EJB 3, you really should take a look at the JBoss Seam framework.  The latest version also provides Spring integration.  <a href="http://jboss.com/products/seam" rel="nofollow" /><a href="http://jboss.com/products/seam" rel="nofollow">http://jboss.com/products/seam</a>   </p>

<p>Yes, I do work for JBoss.</p>

<p>Kevin</p>


<div class="comment" id="comment-1195">
On <a href="#comment-1195" title="Permalink to this comment">March  1, 2007  5:45 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Very valid comment, unfortunately probably not applicable in my client&#8217;s particular situation (for non-technical reasons).</p>


<div class="comment" id="comment-1196">
On <a href="#comment-1196" title="Permalink to this comment">March  1, 2007  6:15 PM</a>, <a href="http://blog.interface21.com/arjen" title="http://blog.interface21.com/arjen" rel="nofollow">Arjen Poutsma</a>
said:
<p>Well, I am biased, so I say use Spring :). But here are some remarks:</p>

<ol>
<li><p>Spring is not an alternative for Java EE. Rather, it builds on top of Java EE, by making the JEE libraries less verbose to use, and by solving common programming errors. Spring actually supports EJB3 features, especially the nice Java Persistence API. BEA´s WebLogic actually uses Spring to implement the EJB 3.0 interception and injection model. See <a href="http://blog.interface21.com/main/2007/02/11/weblogic-10-tech-preview-ships-builds-on-spring-framework/" rel="nofollow" /><a href="http://blog.interface21.com/main/2007/02/11/weblogic-10-tech-preview-ships-builds-on-spring-framework/" rel="nofollow">http://blog.interface21.com/main/2007/02/11/weblogic-10-tech-preview-ships-builds-on-spring-framework/</a></p></li>
<li><p>Spring is not a &#8220;package deal&#8221;. You can use the IoC container without using Spring WEB MVC, for instance. You can choose to use the JpaTemplate , but you can also use the EJB3 Java Persistence API directly, by injecting an EntityManager. It´s all about choice.</p></li>
<li><p>Spring does not &#8220;heavily rely&#8221; on using XML for configuration. It it the most popular format, but there are other formats, like Properties files, or the new Java configuration format, described here: <a href="http://blog.interface21.com/main/2006/11/28/a-java-configuration-option-for-spring/." rel="nofollow" /><a href="http://blog.interface21.com/main/2006/11/28/a-java-configuration-option-for-spring/." rel="nofollow">http://blog.interface21.com/main/2006/11/28/a-java-configuration-option-for-spring/.</a></p></li>
<li><p>One of the core ideas about Spring is that you keep it out of your architecture. Especially in the service layer and in your domain objects (the most important part of your application), you are not expected to use any Spring imports, or rely on Spring classes. Dependency Injection combined with externalized meta-data helps a lot with this true POJO style of development. In JEE, the two are often mixed because of the heavy usage of annotations (is an annotated object still a POJO?)</p></li>
<li><p>Currently, there aren´t a lot of Java EE app servers out there. Sure, there is Glassfish, JBoss 5, and WebLogic 10, but most of them are not in their preview stages. And I think that IBM has not even announced its support for JEE 5 yet.</p></li>
</ol>

<p>Cheers,</p>

<p>Arjen</p>


<div class="comment" id="comment-1197">
On <a href="#comment-1197" title="Permalink to this comment">August 18, 2007  8:34 AM</a>, Eric
said:
<p>Most review that I&#8217;ve read lists Spring&#8217;s XML configuration as a negative factor and hail EJB 3&#8217;s annotation as an improvement.  Weird, I like XML better than annotations. ;-)  It must have something to do with the variety of legacy java apps that I maintain that don&#8217;t support annotation but it could also be because I like XML&#8217;s structured nature better.  :-)</p>


</section>

