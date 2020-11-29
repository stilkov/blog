---
layout: post
title: "Applying WS-I Basic Profile"
date: "2005-01-13T23:46:00+01:00"
comments: false
categories: 
---

<p>I&#8217;m currently working on trying to define the best way to apply the <a href="http://www.ws-i.org/">WS-I</a>&#8217;s <a href="http://www.ws-i.org/Profiles/BasicProfile-1.1.html">Basic Profile</a> specification in a complex SOA scenario. In this particular project, we are building a set of tools, libraries, and technical services that together form a rich infrastructure platform for a very large, global company. One of the project&#8217;s decisions was to stick to standards wherever possible, adopt public specifications and best practices as wherever useful, and build whatever remains in a proprietary way as an intermediary solution (and move to standards as they become available and mature).</p>

<p>One of the goals, of course, is to enable the best possible interoperability without reducing our ambitious functional objectives. Thus, we are considering adopting the WS-I Basic Profile, and have come up with a set of pragmatic rules that I&#8217;d like to put here to gather some feedback:</p>

<ol>
<li><p>We&#8217;ll use WSDL 1.1 for describing service contracts, and validate our descriptions using the WS-I&#8217;s own <a href="http://www.ws-i.org/deliverables/workinggroup.aspx?wg=testingtools">testing tools</a>. As we&#8217;ll have other transport protocols than HTTP (which is a transfer protocol, but never mind), only some of our endpoints are going to be profile compliant; that doesn&#8217;t seem to be a problem, though, as long as we&#8217;re claiming conformance only for those that actually are conforming. For this, we are going to use the <a href="http://www.ws-i.org/Profiles/ConformanceClaims-1.0.html">compliance claim attachment mechanism</a>. We&#8217;ll apply that, as well as the UDDI v3 <a href="http://www.oasis-open.org/committees/uddi-spec/doc/tns.htm#WSDLTNV2">WSDL-to-UDDI mapping best practice</a> (which is actually a technical note), to publish our descriptions to our UDDI-based service registry. A profile-conforming WSDL will also be used as the input for our various code generation tools. This way, we&#8217;ll ensure that the largest possible number of tools and toolkits in the market will be able to accept our service descriptions as input. </p></li>
<li><p>For all of infrastructure (technical) services (or rather, ports) that are part of the platform, we&#8217;ll introduce SOAP/HTTP bindings (possibly in addition to others), claim conformance, and ensure it using appropriate test cases and the WS-I testing tools. This way, we&#8217;ll make sure that independently developed services will be able to access our infrastructure components.</p></li>
<li><p>All of our functional extensions &#8212; e.g. transactions (which will likely not include but I&#8217;ll use as an example anyway) &#8212; will be implemented using SOAP and WSDL extension mechanisms. This means that there may be custom SOAP headers, e.g. to propagate a transaction context, as well as meta-data, e.g. in the form of elements from other namespaces within our WSDLs.</p></li>
</ol>

<p>It&#8217;s the last point that I&#8217;m not 100% percent sure about yet. I believe the Basic Profile does not restrict the usage of extensions such as SOAP headers or additional WSDL elements &#8212; while they&#8217;ll obviously impact interoperability with simple and out-of-the-box service consumers and providers, it would be perfectly possible to interact with services that use these extensions if the toolkit or implementation technology of outside or 3rd parties support access to those extension elements. In other words: A service that expects certain specific SOAP headers to be set, or a WSDL that includes custom extensions, could still be profile compliant.</p>

<p>My plan is to follow up on this entry as I gather more information and become more familiar with WS-I&#8217;s work. And of course I have that strange feeling I might have more than a couple of readers who&#8217;d actually be more than qualified to help me go into the right direction ;-)</p>


