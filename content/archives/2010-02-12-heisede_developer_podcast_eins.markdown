---
layout: post
title: "heise.de Developer Podcast: Einstieg in REST"
date: "2010-02-12T13:07:00+01:00"
comments: false
categories: 
---

<p>heise.de has released <a href="http://www.heise.de/developer/artikel/Episode-17-Einstieg-in-REST-921652.html">a new episode</a> of our <a href="http://www.heise.de/developer/podcast/">German SoftwareArchitekTOUR podcast</a>, the first of a two-part conversation I did with <a href="http://voelterblog.blogspot.com/">Markus Völter</a> on REST. </p>

<section class="comments">



<div class="comment" id="comment-2101">
On <a href="#comment-2101" title="Permalink to this comment">February 21, 2010  2:05 PM</a>, Marza
said:
<p>Hallo Herr Tilkov!</p>

<p>Ich habe sehr gespannt den Heise Developer Podcast verfolgt und mir stellen sich jetzt gerade weitere Fragen, in Richtung Sicherheit (Zugriffsschutz) und Transaktionen gehen. Wo ich bei SOAP mit MessageReceivern Header auswerten kann und Nachrichten, die bestimmte Bedingungen nicht erfüllen, mit einer Fehlermeldung verwerfen kann, fehlt mir bei REST ein Konzept. Klar - endlich können wir den HTTP-Error-Codes eine sinnvolle Bedeutung bei REST geben - aber es handelt sich hier nur um ein Architekturstil und nicht um einen Standard. Ich schätze den Mechanismus der WSDL-Datei sehr, in dem alles über die Schnittstelle dokumentiert ist. Müssen Konzepte wie WS-Security, die eine Ende-zu-Ende-Sicherheit zwischen Kommunikationspartner garantiert, auch über mehrere WS-Instanzen hinweg, für REST nicht erst entwickelt werden?</p>

<p>Ich lasse mich gerne vom Gegenteil überzeugen, dass REST insgesamt das bessere Konzept ist, aber im Moment kommt mir REST zu sehr gehypt vor.</p>

<p>Gruß Marza</p>


<div class="comment" id="comment-2102">
On <a href="#comment-2102" title="Permalink to this comment">February 21, 2010  4:25 PM</a>, Marza
said:
<p>Bzgl. Ende-zu-Ende-Sicherheit: Ich meine da mehr als nur HTTPS bzw. SSL.</p>


<div class="comment" id="comment-2103">
On <a href="#comment-2103" title="Permalink to this comment">February 21, 2010  6:22 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Transaktionen sind bei RESTful HTTP nicht standardisiert - stimmt. Macht aus meiner Sicht aber nichts: Verteilte Transaktionen sind, insbesondere in lose gekoppelten Systemen, sowieso ein schlechte Idee, lokale Transaktionen (z.B. gegen die Datenbank) sind natürlich immer noch möglich, und auch im WS-*-Umfeld sind Transaktionen auf Basis von WS-Coordination &amp; Co. nahezu überhaupt nicht verbreitet.</p>

<p>Zur Sicherheit gibt es im HTTP-Standard ein erweiterbares und ausgeklügeltes System zur Authentifizierung. Transportbasierte Sicherheit ist auf Basis von HTTPS ist natürlich auch kein Problem - und übrigens auch bei WS-* der 99%-Fall. Auch bei plain HTTP kann man XML Encryption und Digital Signature verwenden; eine standardisierte Lösung für nachrichtenbasierte Sicherheit gibt es allerdings nicht.</p>

<p>Einige weitere Themen habe ich in einem <a href="http://www.infoq.com/articles/tilkov-rest-doubts">Online-Artikel</a> beschrieben, und natürlich steht dazu auch etwas im <a href="http://rest-http.info">Buch</a> :-)</p>


</section>

