---
layout: post
title: "SSH protocol handler"
date: "2003-07-17T19:58:00+01:00"
comments: false
categories: 
---

<p>Am I the only one to feel that Mac OS X having registered Terminal as the default <a href="http://rentzsch.com/macosx/sshProtocolHandler" title="rentzsch.com: ssh:// protocol handler">SSH protocol handler</a> is a stupid idea? Many people, including me, put their public key on a server so that they don't have to type in their password all the time. In that setup, somebody could hide an ssh: link  somewhere and execute commands on the remote machine.</p>
<section class="comments">

<div class="comment" id="comment-51">
On <a href="#comment-51" title="Permalink to this comment">July 18, 2003  6:31 AM</a>, <a href="http://www.king.net" title="http://www.king.net" rel="nofollow">Steve Loranz</a>
said:
<p>Actually, what I think is a worse idea is not putting a passphrase on your private key.</p>


<div class="comment" id="comment-52">
On <a href="#comment-52" title="Permalink to this comment">July 18, 2003  9:43 AM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>In principle, you are right. On the other hand, there are lots of people who do it (including me), the favorite excuse being the use of CVS in combination with SSH (who wants to enter a password with every CVS interaction?). The process how to do this is documented in lots of places, and it&#8217;s likely that a lot of people are following it.</p>


<div class="comment" id="comment-53">
On <a href="#comment-53" title="Permalink to this comment">July 18, 2003  2:34 PM</a>, <a href="http://www.braino.org" title="http://www.braino.org" rel="nofollow">Daniel Von Fange</a>
said:
<p>I have a password on my private key, but I use ssh agent to keep the open when I am at the computer&#8230;.</p>

<p>If an evil person pointed the ssh command to localhost, I wonder if a computer iliterate person would enter their password, just because the terminal came up asking for it&#8230;</p>


<div class="comment" id="comment-54">
On <a href="#comment-54" title="Permalink to this comment">July 19, 2003  5:36 AM</a>, <a href="http://danonline.net" title="http://danonline.net" rel="nofollow">Daniel Axelrod</a>
said:
<p>There is a way to disable the ssh protocol opening Terminal.</p>

<p>-Open Internet Explorer (yes, even if you don&#8217;t use it for anything, it can still change systemwide preferences for some reason, and this particular setting isn&#8217;t in System Preferences).
-Go to Explorer>Preferences, and then select &#8220;Protocol Helpers&#8221; in the &#8220;Network&#8221; category on the left side of the dialog.
-Click the &#8220;Add&#8230;&#8221; button.
-In the &#8220;Helper for&#8221; field, type &#8220;ssh&#8221;.
-Click &#8220;Choose Helper&#8230;&#8221; and pick something like TextEdit.
-Click OK.</p>

<p>Now, ssh:// links will open TextEdit, which will proceed to do nothing. Terminal does not open.</p>

<p>This works for me on 10.2.5, but your milage may vary.</p>


<div class="comment" id="comment-55">
On <a href="#comment-55" title="Permalink to this comment">August  4, 2003  5:26 PM</a>, Carl Lindberg
said:
<p>If you can get it installed on both the CVS server and client, fsh (http://www.lysator.liu.se/fsh/ ) is a great tool (requires python though).  It keeps an open connection to the server, so each CVS command does not have to re-connect, and you don&#8217;t have to re-authenticate with SSH each time.  It&#8217;s really just a front for ssh, and there&#8217;s an fcp as well if you want to copy several files to the same host.</p>


<div class="comment" id="comment-56">
On <a href="#comment-56" title="Permalink to this comment">August  4, 2003  5:40 PM</a>, <a href="/en/staff/st/">Stefan Tilkov</a>
said:
<p>Carl, that sounds very interesting - I&#8217;ll surely take a look at it. Thanks.</p>


<div class="comment" id="comment-57">
On <a href="#comment-57" title="Permalink to this comment">October 24, 2003  6:42 PM</a>, Peter Marreck
said:
<p>You can trash IE and use the More Internet <a href="http://www.monkeyfood.com/software/MoreInternet/" rel="nofollow" /><a href="http://www.monkeyfood.com/software/MoreInternet/" rel="nofollow">http://www.monkeyfood.com/software/MoreInternet/</a> system prefpane to add or change protocol helpers.</p>

<p>I&#8217;m surprised that Apple still hasn&#8217;t included this functionality in the OS!</p>


</section>

