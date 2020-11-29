---
layout: post
title: "Hello World and Fibonacci"
date: "2008-05-20T19:51:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.tbray.org/ongoing/When/200x/2008/05/19/Language-Books">Tim Bray makes two points</a> about language books. The first one ('In any such book, the first example program should print the string “Hello world.”') is of course absolutely correct. The second one is perfectly addressed by <a href="http://blog.unto.net/miscellaneous/fibonacci-functions/">DeWitt Clinton</a> – what I like best is this gem from the <a href="http://moose56.com/">David Madden</a>'s <a href="http://blog.unto.net/miscellaneous/fibonacci-functions/#comment-3421">comment</a>:</p>

<pre><code>fib = Hash.new{ |h, n| n &lt; 2 ? h[n] = n : h[n] = h[n - 1] + h[n - 2] }
puts fib[15]
</code></pre>

<p>(For the none-Rubyists among you: the Hash constructor accepts a block that will be called when a lookup is performed for a key that has no value, in this case storing the value and then returning it – a simple write-through-cache.) </p>


