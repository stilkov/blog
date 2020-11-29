---
layout: post
title: "A detailed description of the MDA code generation process with iQgen"
date: "2004-01-13T20:29:00+01:00"
comments: false
categories: 
---

<p><img src="/blog/st/images/generation.jpg" height="464" alt="Overview of the generation process" width="473" /><br />
This is an illustration of the code generation process when using <a href="/iqgen">iQgen</a>. I uploaded it here because I wanted to point to it from an email I sent, so I might as well spend some time describing it in more detail:</p>

<ul>
<li>First of all, you have a technical model. It&#8217;s technical, and not a pure business model, since it describes your business domain annotated (by means of UML stereotypes and tagged values) with information about the technical <em>nature</em> of your model elements. You might, for instance, have some UML classes that represent entities (in the most abstract sense), and others that represent processes.</li>
<li>The set of stereotypes and tagged values that are allowed when you (manually) refine your business model into a technical model define a <em>UML profile</em>. This UML profile, together with the UML itself, form the <em>metamodel</em> of your model. Thus, your technical model conforms to the UML profile. The UML profile itself is (in the case of iQgen) completely open to be extended in any way that makes sense for your requirements.</li>
<li>There is a set of templates that contain rules for code generation. These templates match the UML profile, and expect the model to conform to it. In the example given above, you might have one or more templates that are used for entities, others for processes, and some for both. Depending on your target platform and frameworks, the templates contain code skeletons and rules that are specific to this target environment. Thus, they match the technical platform (in this case - and this is only an example) - J2EE.</li>
<li>Based on the technical model as its input (which is represented by one or more XMI files) and the templates, the code generator emits source code. If code is being generated for the second or nth time, which is usually the case, the existing source code becomes input to the generator. This way, manually added code is available to be merged into the newly generated code.</li>
<li>Finally, the usual compile/build cycle is applied to turn your code into a running system.</li>
</ul>


