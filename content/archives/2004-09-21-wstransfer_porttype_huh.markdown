---
layout: post
title: "WS-Transfer portType - Huh?"
date: "2004-09-21T09:04:00+01:00"
comments: false
categories: 
---

<p>Don Box on <a href="http://www.gotdotnet.com/team/dbox/default.aspx?key=2004-09-17T07:22:15Z">WS-Transfer</a>:</p>

<blockquote>
<p>Stage 3. Wow, I can model my entire universe using less verbs/operations than I have fingers on one hand.&#160; Why would I ever author another WSDL portType?
&#160;</p>
</blockquote>

<p>I was puzzled for a while; then I went to check <a href="http://msdn.microsoft.com/library/en-us/dnglobspec/html/ws-transfer.pdf">the spec</a>, which contains XSD like this:</p>

<pre><code>  &lt;xs:complexType name="AnyXmlOptionalType"&gt;
&lt;xs:sequence&gt;
&lt;xs:any minOccurs="0"/&gt;
&lt;/xs:sequence&gt;
&lt;/xs:complexType&gt;

&lt;xs:complexType name="AnyXmlType"&gt;
&lt;xs:sequence&gt;
&lt;xs:any minOccurs="1"/&gt;
&lt;/xs:sequence&gt;
&lt;/xs:complexType&gt;
</code></pre>

<p>And here&#8217;s the WSDL for the Resource portType:</p>

<pre><code>  &lt;wsdl:portType name="Resource"&gt;
&lt;wsdl:documentation&gt;
This port type defines a resource that may be read, written, and deleted.
&lt;/wsdl:documentation&gt;
&lt;wsdl:operation name="Get"&gt;
&lt;wsdl:input message="tns:Empty"/&gt;
&lt;wsdl:output message="tns:AnyXml"/&gt;
&lt;/wsdl:operation&gt;
&lt;wsdl:operation name="Put"&gt;
&lt;wsdl:input message="tns:AnyXml"/&gt;
&lt;wsdl:output message="tns:OptionalXml"/&gt;
&lt;/wsdl:operation&gt;
&lt;wsdl:operation name="Delete"&gt;
&lt;wsdl:input message="tns:Empty"/&gt;
&lt;wsdl:output message="tns:Empty"/&gt;
&lt;/wsdl:operation&gt;
&lt;/wsdl:portType&gt;
</code></pre>

<p>I wasn&#8217;t even <strong>aware</strong> that there was a standard portType in that spec before - now I can&#8217;t help but wonder what, exactly, this WSDL buys me. I had hoped that in contrast to the default REST model, WS-Transfer would enhance the uniform API idea by restricting resource representations to those that conform to a meaningful schema &#8230;  </p>

<p>I can&#8217;t help feeling that this is a significant departure of former mainstream WS-* thinking; essentially, it looks like we&#8217;re supposed to finally get around WSDL tools features with close ties to XML Schema by no longer really using them. </p>

<p>Which, IMO, is a Good Thing&trade;.</p>


