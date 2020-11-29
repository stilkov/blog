---
layout: post
title: "OOP 2007: Ich bin ein Fan von Web 1.0"
date: "2006-12-10T20:02:00+01:00"
comments: false
categories: 
---

<p>Michael Stal, <a href="http://poweredbyweb20.blogspot.com/2006/12/oop-2007-empire-strikes-back.html">wie erwartet furchtlos bereit, in die Diskussion einzutreten</a>, schreibt als Reaktion auf <a href="/blog/st/2006/12/09/oop_2007_http_messaging_und_lose_kopplung.html">meinen letzten Beitrag</a> einen langen Text, aus dem ich nur einen Satz herausgreifen m&#246;chte:</p>

<blockquote>
<p>Ich bleibe natu&#776;rlich bei meiner Meinung, dass kein Weberfinder mit dem heutigen Wissen ein Protokoll wie HTTP entwerfen wu&#776;rde.</p>
</blockquote>

<p>Ich widerspreche ernergisch :-) Liest man z.B. die Findings der W3C TAG (der &#8220;Architekturgruppe&#8221; des W3C) oder aktuelle Statements von Roy T. Fielding, so stellt man fest, dass die Herren Web-Erfinder immer noch sehr stark von der urspr&#252;nglichen Vision des Web &#252;berzeugt sind. Mein Hintergrund liegt (ebenso wie bei Michael, das unterstelle ich zumindest mal) im &#8220;Enterprise&#8221;-Umfeld - Technologien wie RPC, DCE, CORBA, J2EE, Messaging &#8230; all das, was man als &#8220;Schwere Gesch&#252;tze&#8221; bezeichnen k&#246;nnte. Mit diesem Hintergrund liegt es nahe, das Web (und HTTP) als ein System zweiter Klasse zu betrachten, das all die sch&#246;nen Dinge (die &#8220;-ilities&#8221;) erst einmal lernen muss. Wir CORBA-Gurus und Enterprise-Helden retten das Web vor dem Untergang!</p>

<p>Es ist aber nicht CORBA, das die Grundlage der gr&#246;&#223;ten Anwendung der Welt (denn das ist das WWW) bildet; IIOP ist nicht das Standardprotokoll, das von aller Welt verstanden wird; Java hat nicht die gesamte Welt, sondern bestenfalls die halbe erobert (wobei der Prozentsatz von Java-Anwendungen im &#8220;offenen&#8221; Web sicher noch deutlich geringer ist). Der Grund daf&#252;r ist, dass das Web &#8212; HTTP, URIs, MIME-Typen, textuelle Formate &#8212; deutlich besser weltweit skaliert und auf <em>globaler Ebene</em> unendlich viel erfolgreicher als alle Alternativen ist.</p>

<p>Hinter HTTP steckt viel mehr, als man gemeinhin annimmt. Was Michael vermisst, zum Beispiel die fehlende Unterst&#252;tzung f&#252;r &#8220;stateful communication&#8221;, ist kein Bug, sondern ein Feature. Die lose gekoppelte Alternative zu Callbacks lautet RSS (oder besser: ATOM). Anwendungen, die sich hinter einer einzigen URI (einem &#8220;Endpoint&#8221;) verstecken (und am liebsten noch alles durch &#8220;POST&#8221; tunneln) sind im Web 1.0 noch gar nicht angekommen. Eigentlich deutlich verfr&#252;ht, um &#252;ber Web 2.0 zu sprechen &#8230;</p>


