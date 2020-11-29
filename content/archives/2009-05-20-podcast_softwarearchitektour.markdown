---
layout: post
title: "Podcast: SoftwareArchitekTOUR"
date: "2009-05-20T16:44:00+01:00"
comments: false
categories: 
---

<p>(<em>English summary: I'm doing a German podcast on software architecture together with some well-known folks.</em>)</p>

<p>Die mehr oder weniger interessanten Erfahrungen und Meinungen von <a href="http://www.stal.de/">Michael Stal</a>, <a href="http://www.voelter.de/">Markus Völter</a>, <a href="http://blogs.thinktecture.com/cweyer/">Christian Weyer</a> und <a href="/blog/st/">meiner Wenigkeit</a> sind seit Neuestem gemeinsam in Audioform konsumierbar, und zwar im Heise Developer-Podcast "<a href="http://www.heise.de/developer/podcast/">SoftwareArchitekTOUR</a>". Episode 0 (alle) ist eine allgemeine Vorstellung, bei Episode 1 (Stal, Völter) wird das Konzept von Entwurfsmustern vorgestellt. In Episode 2 (Tilkov, Völter) geht's um Patterns in Java, in Episode 3 (Stal, Weyer) um Patterns im .NET-Umfeld. </p>

<p>Die ganze Angelegenheit macht wirklich Spaß - zumindest uns Machern :-) Die nächsten paar Folgen sind schon produziert und folgen bald, Kommentare und Ideen für weitere Episoden sind sehr willkommen.</p>

<p>Einen <a href="http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=313825047">iTunes-Link</a> gibt's natürlich auch.</p>

<section class="comments">



<div class="comment" id="comment-1975">
On <a href="#comment-1975" title="Permalink to this comment">May 21, 2009  1:33 PM</a>, http://stephan.schloepke.de/openid.php

<a href="http://stephan.schloepke.de/openid.php" class="commenter-profile"></a>
said:
<p>Das ist euch aber mit Double Checked Locking ein kleiner Fehler unterlaufen im Java Podcast :-) In Java funktioniert DCL i.d.R. nicht da es keine garantierten Memory Barriers gibt (Ab Java5 geht es mit der geänderten volatile spec). Im Podcast klang es aber so als würde es ein wertvolles Idiom für die Programmierung in Java sein. Ist aber eigentlich eins was man verbieten sollte da es einfach nicht funktioniert (bzw. abhängig von der JVM dem Compiler und Optimizer).</p>


<div class="comment" id="comment-1976">
On <a href="#comment-1976" title="Permalink to this comment">May 21, 2009  2:06 PM</a>, 
<a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Sehr gut! Haben auch schon zwei andere gemerkt. Nicht, dass ich das etwa gewusst hätte, aber ich habe mich ja auch nicht aus dem Fenster gelehnt ;-)</p>

<p>Werden wir in einer der nächsten Episoden korrigieren.</p>


<div class="comment" id="comment-1979">
On <a href="#comment-1979" title="Permalink to this comment">May 21, 2009 11:15 PM</a>, stephan.schloepke.de

<a href="http://stephan.schloepke.de/" class="commenter-profile"></a>
said:
<p>Habe mal etwas gegoogled und die Seite gefunden <a href="http://www.cs.umd.edu/~pugh/java/memoryModel/DoubleCheckedLocking.html" rel="nofollow">http://www.cs.umd.edu/~pugh/java/memoryModel/DoubleCheckedLocking.html</a></p>

<p>Sie erklärt das Problem kurz und knapp und warum es eigentlich kein Java Problem ist sondern eher ein generelles. Das Pattern ist ursprünglich mal in C++ entstanden wo durch gezielte Memory Barriers das ganze auch funktioniert :-)</p>


<div class="comment" id="comment-1980">
On <a href="#comment-1980" title="Permalink to this comment">May 21, 2009 11:20 PM</a>, stephan.schloepke.de

<a href="http://stephan.schloepke.de/" class="commenter-profile"></a>
said:
<p>Die meisten vergessen das ein x = new B() eigentlich ein ALLOC B, INIT B, ASSIGN x=B ist und es nach optimierung auch ALLOC B, ASSIGN x=B, INIT B sein darf was dann das DCL kaputt macht wenn der Thread switch zwischen ASSING x=B und INIT B ist (zweiter Thread bekommt die Instanz nicht initialisiert und wird höchst wahrscheinleich eine Exception auslösen). Schlimmer ist noch das der INIT part auch noch inlined werden kann womit eine ganze Menge von Anweisungen das Problem verursachen kann.</p>


</section>

