---
layout: post
title: "RESTful Rails"
date: "2006-01-23T09:27:00+01:00"
comments: false
categories: 
---

<p><a href="http://pezra.barelyenough.org/blog/2006/01/rough-resting-on-rails/">Peter Williams</a> asks for a more RESTful Rails &#8212; I don&#8217;t know enough about Rails&#8217; internals to judge whether what he asks for is easily doable, but it would surely be nice to have support for the programming model he suggests:</p>

<pre><code>class BooksController &lt; RestController
uri_base "/books/"

resource "." do
get "application/atom+xml" do
# return XML representation of collection containing all known books.
end

get "text/html" do
# return HTML representation of collection containing all known books.
end

post do
# create new book and add it to the collection
end
end

resource "./:id", :requirements =&gt; {:id =&gt; /^[[:digit:]]+$/}  do
get  do
# yield html representation of a individual book
end

put do
# update and individual book resource
end
end

resource "./:id/editor", :requirements =&gt; {:id =&gt; /^[[:digit:]]+$/}  do
get do
# yield a representation of the book editor (a page with a
#   form that puts to "./:id" on submit)
end
end

resource "./creator" do
get do
# yield a representation of the book creator (a page with a
#   form that posts to "." on submit)
end
end
end
</code></pre>


