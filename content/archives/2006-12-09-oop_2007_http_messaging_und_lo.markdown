---
layout: post
title: "OOP 2007: HTTP, Messaging und Lose Kopplung"
date: "2006-12-09T21:50:00+01:00"
comments: false
categories: 
---

<p>Ich habe gro&#223;en Respekt vor Michael Stals Beitr&#228;gen im Java-, .NET- und allgemeinen Architekturumfeld &#8230; aber manchmal haut auch er daneben. <a href="http://poweredbyweb20.blogspot.com/2006/11/oop2007-warum-web-20-auch-entwickler.html">So schreibt er</a> (im ebenfalls im <a href="http://www.sigs-datacom.de/sd/kongresse/oop_2007/index.php?cat=planet">Planet OOP 2007</a> aggregierten) Blog:</p>

<blockquote>
<p>W&#252;rden die Web-Pioniere wie Tim Berners-Lee mit ihrem heutigen Wissen exakt die gleichen Technologien zugrunde legen? Oder w&#252;rden sie das Web grundlegend anders gestalten? Ein zentrales Beispiel sind Webservices mittels SOAP over HTTP. HTTP ist denkbar ungeeignet, um Nachrichten &#252;ber das Web zu transportieren. Eigentlich war HTTP eine Technologie f&#252;r Pull-Kommunikation zwischen Browsern und Servern. Wegen der Idee statischer Webseiten, konnte HTTP auch problemlos in einem &#8220;zustandslosen Zustand&#8221; verharren. Sobald Mashups und Webservices ins Spiel kommen, m&#252;ssen Anwendungen genau unter diesen Limitationen leiden. </p>
</blockquote>

<p>&#8220;HTTP ist denkbar ungeeignet, um Nachrichten &#252;ber das Web zu transportieren?&#8221; Michael: <em>Nur HTTP</em> ist geeignet, Nachrichten &#252;ber das Web zu transportieren. Das Problem ist nicht HTTP und schon gar nicht REST, die HTTP und dem Web zugrunde liegende Architektur, sondern die Tatsache, dass das Verst&#228;ndnis derselben leider viel zu wenig verbreitet ist. Inbesondere Web Services haben dazu beigetragen, HTTP einen schlechten Ruf zu verpassen &#8212; indem sie es nicht benutzen, sondern missbrauchen. Mehr dazu z.B. im <a href="http://www.sigs-datacom.de/sd/publications/pub_article_show.htm?&amp;AID=1912&amp;Table=sd_article">ObjektSpektrum-Artikel</a> von <a href="/blog/pg/">Phillip Ghadir</a> und mir, f&#252;r Geduldige auch in Form einer <a href="http://www.bejug.org/confluenceBeJUG/display/PARLEYS/REST+-+The+Better+Web+Services+Model">45-Minuten-Pr&#228;sentation</a> auf der BeJUG Enterprise SOA-Konferenz.</p>


