---
layout: post
title: "Performance of Rails Metal"
date: "2008-12-20T14:17:00+01:00"
comments: false
categories: 
---

<p><a href="http://weblog.rubyonrails.org/2008/12/20/performance-of-rails-metal">Pratik Naik</a>:</p>

<blockquote>
<p>Now, if you compare these results, 3000 r/s against 800 r/s, you may think you’re seeing a 3x performance increase. However, that’d a wrong perception and throughput isn’t the best metric here.<br /><br />Difference in Time per request is what you should looking at. In my benchmarks, speed increase I get when using Metal is about 1 millisecond. And that’s a constant speed increase I’ll get over a regular Rails action. It’s very important to understand that it’s a constant speed increase. It’ll always be 1 ms for me.<br /><br />For example, if my Rails action takes 12ms, when I reimplement it all in Metal, it will take about 11 ms and not 4 ms.</p>
</blockquote>


