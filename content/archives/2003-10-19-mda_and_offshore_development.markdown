---
layout: post
title: "MDA and Offshore Development"
date: "2003-10-19T23:17:00+01:00"
comments: false
categories: 
---

<p>While I'm in a blogging mood, I might as well finally write about something I found quite interesting: A long term customer of ours who has been using <a href="http://www.omg.org/mda">MDA</a> for quite some time, was recently more or less forced to outsource part of its development work to an offshore IT shop. The approach they have taken is quite interesting.</p>
<p>Their development infrastructure relies heavily on modeling, in their case using <a href="http://www.mid.de/en/innovator/business">Innovator</a>, a modeling tool very popular here in Germany. Innovator is very powerful, but also pretty complex. In addition to this, they use our product, <a href="/iqgen">iQgen</a>, with a huge set of custom templates that drive the code generation. While they have achieved a high degree of automation &mdash; they can generate close to 100% of their backend code in most cases &mdash; it's not an environment that is well known, nor is it easy to learn in a short time.</p>
<p>So the problem was: How does one address this in the context of offshore development? Should they train the offshore developers in the usage of the toolset?</p><p>
</p><p>My recommendation was different: Continue to do the <em>modeling</em> on site, and ship the generated skeleton code to the offshore IT shop. This has the major advantage of agreeing on a specification that is as close to code as you can get, because it <em>is</em> code. In case you're wondering what the offshore IT developers have to do then, it's about implementing those parts of the code that cannot (or rather: are not) generated, which in this case includes the Swing client UI and those business logic elements that don't lend themselves to be modeled in UML easily.</p>
<p>The customer has taken this approach and exercised it for 3-4 months now, and it seems to work very well.</p>

