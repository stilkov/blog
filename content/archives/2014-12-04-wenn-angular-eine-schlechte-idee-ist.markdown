---
layout: post
title: "Wenn AngularJS eine schlechte Idee ist"
date: "2014-12-04T11:23:00+01:00"
comments: true
lang: de
categories: 
---

_Mein Kollege Sebastian Janzen, seines Zeichens bekennender
AngularJS-Fan, hat den folgenden Text in seinem internen Blog
gepostet – und ich konnte es mir nicht verkneifen, ihn zu fragen, ob
ich ihn als Gast-Post hier veröffentlichen darf. Hier also seine
(weisen) Worte …_

Ich habe nun mehrmals zwei Phänomene beobachtet: Ein Entscheider - je
größer die Firma desto eher zutreffend - hat keine Lust mehr, in die
gelangweilten, von Prozess-Narben geprägten Gesichter seiner
Entwickler zu schauen. Er möchte das Team positiv überraschen und überträgt
für das nächste Projekt AngularJS von einer Buzzword- in die
Requirements-Liste, denn Entwickler möchten endlich mal was Cooles
machen. In einem Meeting für eine neue Webseite packt er stolz den
heiligen SPA-Gral AngularJS aus. Alle Probleme sind gelöst, die
Entwickler sind happy, das kommt in die Requirements.

Und nun wird noch jemand von innoQ dazu geholt und hinterfragt
kritisch das Entwickler-Glück. "AngularJS? Sie wissen schon, dass dies
an der Stelle nicht so ganz zu Ihrem Problem passt?"

So sehr ich Angular mag und es im ein oder anderen Bereich für richtig
halte eine SPA zu bauen, so fatal kann es auch laufen, wenn man damit
versucht Probleme zu erschlagen, die gegensätzlicher nicht sein
könnten. Beispiele:

* _Meine Anwendung soll rasend schnell sein!_ <br/> Ja, das kann sie als SPA
sein, jedoch nicht, wenn man zwischen dieser und anderen Seiten
ständig hin und her wechselt. Ein OpenID-Provider liefert in der Regel
zwei Seiten aus: Login und Success + Redirect. Die Aufenthaltsdauer
muss eine SPA rechtfertigen! Und für den Besucher ist es egal, ob es
eine technisch perfekte Seite ist. Das wird seine Aufenthaltszeit
nicht verlängern, sondern verkürzen.

* _Die coolen Seitenübergänge gehen nur in Angular!_ <br/>  Nein, die sind
mit CSS erzeugt oder im Fallback mit jQuery.animate. Genau dieser
Technik bedient sich Angular auch, denn es ist in JavaScript
geschrieben - nicht mehr und nicht weniger. Es hat weder Zugriff auf
Hardware, noch kann es den IE 8 zu einem coolen Browser machen.

* _Bei Angular muss ich mich nicht mehr um den DOM kümmern_ <br/>  Uiuiui,
als ich das mal gehört habe hat sich bei mir alles rumgedreht. Ich
glaube ich habe in meiner Angular-Zeit noch nie so viel über die
Verzahnung zwischen DOM und JS gelernt - einfach aus der Not heraus,
Bugs zu finden. Manch einer erschlägt diese Bugs mit genügend
Timeouts. Und viele Plugin-Entwickler machen das auch so, aber das ist
ziemlich weit weg von geil. Und vom eigentlichen
Performance-Ziel. Grundkonzepte wie Asynchronität in einem Browser
müssen verstanden werden, nicht hintergangen! Aus meiner Sicht geht
Angular mit diesem Umstand hervorragend um, es muss nur genutzt
werden.

* _Wir haben viel Angular-Erfahrung im Team_ <br/>  Sicher? Unterhaltet Euch
vorher mit dem Team, stellt Fragen, was die do's und don'ts sind. Wenn
da nichts kommt oder die Frage "Wofür setzt man Angular nicht ein?"
unbeantwortet bleibt, dann haben diese Menschen nicht viel damit
gemacht. Da ist eine Lernphase von teilweise mehreren Wochen
einzuplanen und viel Debugging-Zeit. Eine schöne Frage ist auch "Was
sind Promises?"

* _Dieses Angular ist nur Frontend, dafür plane ich als Senior
Consultant mal zwei Stunden ein_ <br/>  Das wird scheitern. Angular ist ein
Framework, mit dem man tatsächlich eine Frontend-Architektur, die
diesem Namen auch gerecht wird, aufsetzen und planen kann. Es gibt
mehr als nur Data-Binding und Routen!

Performante SPAs, die in allen modernen Browsern und im IE >= 8 laufen
sind das Werk von Menschen, die sich durch und durch mit der Materie
beschäftigt haben und sehr viel Arbeit dort hinein gesteckt haben. Das
muss in den Zeitschätzungen berücksichtigt werden, wenn man mal wieder
"Die beste Seite aller Zeiten" bauen will.

