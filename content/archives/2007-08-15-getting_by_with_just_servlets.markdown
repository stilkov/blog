---
layout: post
title: "Getting by with just Servlets and JSPs"
date: "2007-08-15T18:58:00+01:00"
comments: false
categories: 
---

<p><a href="http://www.dehora.net/journal/2007/08/lying_down_in_the_road.html">Bill de h&#211;ra wonders</a> how to use Servlets and JSPs without having to treat URIs like it&#8217;s 1999:</p>

<blockquote>
<p>However it&#8217;s easy to forget that Servlets were Java&#8217;s response to CGI, way back when. Here&#8217;s is the link for Stefan&#8217;s entry:</p>
</blockquote>

<pre><code>            /blog/st/2007/08/15/java_web_frameworks.html
</code></pre>

<blockquote>
<p>I&#8217;m wondering how would one produce a URL space for a blog style archive, using Servlets+JSP, and do so in a way that isn&#8217;t a CGI/RPC explicit call?</p>
</blockquote>

<p>Something like this?</p>

<pre><code>    import javax.servlet.http.*;

public class Blog extends HttpServlet {

public void doGet (HttpServletRequest request, HttpServletResponse response) {
try {
String path = request.getPathInfo();
// do something fancy with the path, like decomposing it into
// parts, retrieving the entry from the DB, creating an entry object,
// and setting it as a request attribute
// simulated here :-)
request.setAttribute("entry", "Entry with ID " + path);
getServletConfig().getServletContext().getRequestDispatcher("/internal/_entry.jsp").forward(request, response);
// Assumption: _entry.jsp will format the content from the entry
} catch (Exception ex) {
ex.printStackTrace ();
}
}
}
</code></pre>

<p>This servlet would be deployed e.g. at <code>/blog/st/*</code>, and could handle all URIs that start this way, so <code>2007/08/15/java_web_frameworks.html</code> would simply be returned by <code>getPathInfo()</code>. Of course any decent Java programmer could not help but create at least a small library to help with this, but that&#8217;s a far cry from a full-featured open source over-hyped Web framework &#8230;</p>

<p><em>Update</em>: Here are <a href="http://www.interact-sw.co.uk/iangblog/2004/01/12/shinyurl">two</a> <a href="http://www.interact-sw.co.uk/iangblog/2004/01/14/rewritingurls">posts</a> from Ian Griffiths showing something similar for the .NET-inclined (via Dilip via email).</p>

<p><em>Yet another update</em>: <a href="http://hughw.blogspot.com/2007/08/restful-servlets-jsp-my-framework.html">Hugh Winkler</a> has a nice micro-framework for the purpose.</p>


