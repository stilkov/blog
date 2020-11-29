---
layout: post
title: "Jonathan Weiss on Rails Patterns"
date: "2008-06-10T17:35:00+01:00"
comments: false
categories: 
---

<p>These are my unedited notes from Jonathan Weiss's talk "Rails Patterns". </p>

<ul>
<li>Knowledge gained in large-scale Rails projects</li>
<li>Typical issues: mdeia conversion, user data, lots of plugins, external dependencies, slow requests* LOVDbyLESS example</li>
<li>Using Stephen Bristol's LOVDbyLESS as an example</li>
<li>Pattern approach: context, problem, solution</li>
</ul>

<h3>Media conversion</h3>

<ul>
<li>Scenario: Users want to upload some type of data</li>
<li>Typical solution: do conversion inline (esp. with attachment_fu) or <code>system</code> call to ffmpeg</li>
<li>conversion happens within HTTP req/resp cycle (bad)</li>
<li>Problem: conversion takes time: rails process blocked, risk of connections dropped, user sees blank page, all resources consumed on app server; risk of both intentional as well as unintentional DOS attacks</li>
<li>Solution: process media files asynchronously</li>
<li>Pattern: Separate long-running and resource-hungry tasks</li>
<li>options: use of message bus, fork process; often best b/c easiest solution: poll a DB containing jobs
[ed.: Don't want to copy all of Jonathan's presentation – sticking to context, problem, solution only now]</li>
</ul>

<h3>Handling user generated data</h3>

<ul>
<li>Scenario/Context: users upload lots of data; usual approach: storing data locally, or with NFS, or on S3</li>
<li>Problem: NFS not scalable, S3 upload too slow, background jobs need to read/write from S3 (S3 problems now reduced because of local approaches)</li>
<li>Solution: save locally (fast); schedule asynchronous S3 upload (e.g. via message bus)</li>
<li>Audience question: S3 in Europe now? Jonathan: yes, but AWS:S3 doesn't work with S3 Europe (attachment_fu w/ S3 backend doesn't work at the moment)</li>
</ul>

<h3>You want to extract contacts from user email accounts</h3>

<ul>
<li>Scenario/Context: You want to extract data, search for a plug-in, pick the first one</li>
<li>Problem: most plugins aren't well maintained, have poor quality, are hard to adjust.</li>
<li>Even popular plugins have problems: Backgroundrb, acts_as_ferret, restful_authentication</li>
<li>Solution: Do not blindly use plugins</li>
<li>Pattern: Choose your dependencies wisely</li>
<li>Often, adding the missing 10% to a plugin is harder than coding yourself</li>
<li>Re-use is overrated :-)</li>
</ul>

<h3>External Dependencies</h3>

<ul>
<li>Scenario/Context: Your applications have several external dependencies, in specific versions, installed by different means (package management, source compile, gem, plugin)</li>
<li>Problem: deployment becomes brittle</li>
<li>Solution: "vendor everything" (all libs and dependencies in /vendor)</li>
<li>Pattern: Freeze your dependencies</li>
</ul>

<h3>Your site allows people to upload and download files</h3>

<ul>
<li>Scenario/Context: limited number of mongrels (typical: 500,000 PIs per day/use 10-20 CPUs, 6-8 mongrels each)</li>
<li>Problem: Denial of Service Attacks very easy: simply start many down/uploads over a slow/throttled line</li>
<li>Solution: contaminate slow requests: serve static files through webserver, define several clusters for different tasks, redirect depending on URL</li>
<li>Pattern:  Use the right tool for the job - consider e.g. using Merb, Pure CGI, C, Perl to handle uploads/downloads</li>
<li>new version of mod_rails/Passenger buffers uploads</li>
</ul>

<h3>Conclusion</h3>

<ul>
<li>Real life solutions are more complex than they seem</li>
<li>Don't be too fast with throwing foreign code at a problem</li>
<li>Look for patterns in other people's work</li>
</ul>

<p><em>Another very good talk.</em></p>


