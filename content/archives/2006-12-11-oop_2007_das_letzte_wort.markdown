---
layout: post
title: "OOP 2007: Das letzte (?) Wort"
date: "2006-12-11T11:01:00+01:00"
comments: false
categories: 
---

<p><a href="http://poweredbyweb20.blogspot.com/2006/12/oop-2007-das-vorletzte-wort.html">Michael Stal schreibt</a>:</p>

<blockquote>
<p>Gerade bei verbindungsorientierter Middleware, die auf Basis von HTTP betrieben werden soll, kommen die diversen Nachteile zum Tragen wie sich unschwer beweisen l&#228;sst. Stellt man Perfomanzanalysen gegen&#252;ber, die HTTP (selbst mit bin&#228;rer Kodierung) mit TCP/IP basierenden Implementierungen vergleichen (z.B. CORBA IIOP) so werden Performanznachteile von HTTP in der Gr&#246;&#223;enordnung von 30% bis teilweise mehr als 300% gemessen. Wir haben jedenfalls in Projekten derartige Vergleichsbenchmarks genutzt, um einen Vergleich zu erhalten. Diese Performanznachteile sind aber oft gar nicht relevant, weil es eben bei Enterprise-Anwendungen nicht immer auf jede Sekunde ankommt.</p>
</blockquote>

<p>Vielleicht haben wir eine Chance, uns zu einigen, uns nicht zu einigen: Ich stimme zu, dass HTTP als Basis f&#252;r verbindungsorientierte Middleware vollkommen ungeeignet ist. Unsere Meinungen unterscheiden sich wie folgt:</p>

<ul>
<li>Michael glaubt, dass man eine verbindungsorientierte Middleware braucht, und weil HTTP daf&#252;r ungeeignet ist, braucht man einen Nachfolger,</li>
<li>Ich glaube, dass verbindungsorientierte Middleware f&#252;r das Web ungeeignet ist, man diesen zum Scheitern verurteilten Versuch von vorneherein unterlassen und stattdessen HTTP 1.) verstehen und 2.) sich darauf einlassen sollte.</li>
</ul>

<p>Vielleicht m&#252;ssen wir das Thema noch einmal im direkten Dialog diskutieren (vielleicht sogar &#246;ffentlich auf der OOP?) &#8212; bis dahin empfehle ich <a href="http://lesscode.org/2005/07/21/motherhood-and-apple-pie/">diesen Beitrag</a> von Ryan Tomayko, der Tim Berners-Lees <a href="http://www.w3.org/DesignIssues/Principles.html#PLP">Axiome der Web-Architektur</a> zitiert: </p>

<ol>
<li>Simplicity</li>
<li>Modular Design</li>
<li>Tolerance</li>
<li>Decentralization</li>
<li>Test of Independent Invention</li>
<li>Principle of Least Power</li>
</ol>


