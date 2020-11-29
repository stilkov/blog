---
layout: post
title: "Web Services-Stile: Dokument- vs. RPC-orientiert"
date: "2003-03-01T10:41:00+01:00"
comments: false
categories: 
---

<p>SOAP unterstützt zwei orthogonale Konzepte: Den Stil (style), der entweder Dokument-orientiert oder RPC-orientiert sein kann, und das Encoding, das entweder &#8220;literal&#8221; oder &#8220;encoded&#8221; sein kann. Diese lassen sich im Prinzip beliebig kombinieren, tatsächlich relevant sind aber nur die Verknüpfungen &#8220;document/literal&#8221; und &#8220;rpc/encoded&#8221;.
Diese beiden Varianten unterscheiden sich zunächst einmal auf einer rein technischen Ebene, d.h. sie bestimmen, wie genau die Informationen zwischen den Kommunikationspartner ausgetauscht werden. Dabei sind sie auf den ersten Blick nur ein wenig relevantes Implementierungsdetail.
Interessanter sind jedoch die Konsequenzen, die sich für die Architektur einer Web Services-Lösung daraus ergeben. Auf beide Bereiche gehe ich nacheinander ein.</p>


