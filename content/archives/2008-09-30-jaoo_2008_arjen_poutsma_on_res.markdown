---
layout: post
title: "JAOO 2008: Arjen Poutsma on RESTful Web services with Spring"
date: "2008-09-30T16:23:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Arjen Poutsma's very good talk at JAOO.</p>

<ul>
<li>REST intro (using very nice Airport pictures)</li>
<li>pointer to http://livehttpheaders.mozdev.org/</li>
<li>The fact that PUT can be used to create resources in addition to updating them is one of the major differences between HTTP and CRUD</li>
<li>"Representations as reflection of resources on the cave wall" ... where have I heard this before? ;-)</li>
<li>Example for usefulness of stateless communication: Google results in the form of pages, state not kept on the server, but in the representations sent to the client [Note to self: Paging is an excellent example.]</li>
<li>OrderManagement and CustomerManagement example [pictures by me ;-)]</li>
<li>Next up: REST in Java</li>
<li>servlets handle OPTIONS correctly (?)</li>
<li>spring mvc - classic mvc has limited multi-method handling, Spring @MVC (2.5) improves this</li>
<li>servlets can be wired up within Spring just like a controller</li>
<li>Struts 2 has a REST plugin</li>
<li>Restlet is pretty good in his opinion</li>
<li>Restlet creates abstraction over HTTP, has Spring support</li>
<li>JAX-RS - annotation-based REST framework, considered pretty cool</li>
<li>JAX-RS example</li>
<li>client side: java.net has proxy issues and surprises</li>
<li>commons HTTP client - powerful, but very verbose</li>
<li>REST + Spring</li>
<li>@Controller annotation for classes, get picked up automagically</li>
<li>URI template support for @RequestMapping method annotation</li>
<li>automatic conversion of content of specific types to Java objects and back</li>
<li>view resolution based on accept header</li>
<li>Formats: XML based on Spring-WS OXM (abstraction over mapping layers), JSON, Atom, RSS, Flex</li>
<li>Shallow ETag support w/ a very simple ServletFilter</li>
<li>RestTemplate as core client-side component, similar to other templates (Jdbc, Jms, WS)</li>
<li>getForObject - performs GET and converts</li>
<li>postForLocation - performs POST and retrieves location header</li>
<li>put, delete</li>
<li>uri = "http://example.com/hotels/{id}"; HotelList result = template.getForObject(uri, HotelList.class, "1")</li>
<li>will be part of Spring 3.0, PathParam in M1 (Oct), REST follows later</li>
<li>3.0 final planned for early 2009</li>
<li>Spring security nicely integrated with HTTP authentication</li>
</ul>


