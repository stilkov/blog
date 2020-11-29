---
layout: post
title: "Why I like Schemaless Data Structures"
date: "2013-01-07T23:00:00+01:00"
comments: true
categories:
---

Martin Fowler has written an infodeck (which is actually a nice format for these kinds of things) <a href='http://martinfowler.com/articles/schemaless/'>on schemaless databases and in-memory structures</a>. I agree with most of it, at least as far as database design is concerned. But I believe there are two important concerns missing, and that's the reason why I don't agree with the conclusion. Note that my concern is not really with the database part, but with the extrapolation to in-memory data structures, so you should read the following with this in mind:

First, a major effect of using "schemaless", simple data structures is loose(r) coupling between pieces of logic (functions) operating on them. If I pass a map to a piece of code, that code will extract what it's interested in, possibly transforming the data in the process (ideally into a new data structure using efficient copy strategies). It will thus only depend on what it actually uses. Take the following Clojure code as an example (this would be doable similarly in Python, Ruby, Perl, Scala and even Java, although with way more boilerplate in it).

    ;; "projects" is a Clojure set containing three maps
    (def projects #{
                    {:id "1",
                     :kind :time-material,
                     :description "Consulting for BigCo",
                     :budget 25000,
                     :team [:joe, :chuck, :james]}
                    {:id "2",
                     :kind :fixed-price,
                     :description "Development for Startup",
                     :budget 100000,
                     :team [:john, :chuck, :james, :bill]}
                    {:id "3",
                     :kind :fixed-price,
                     :description "Clojure Training",
                     :budget 3000,
                     :team [:joe, :john]}})

    ;; all-members returns all team members in all projects
    (defn all-members
      [projects]
      (reduce conj #{} (flatten (map :team projects))))

    ;; yields #{:chuck :joe :james :john :bill}

The code and the data structure are coupled just by one map key (`:team` in the example); I can add other data elements without problems as long as I maintain that contract. In languages such as Clojure, a huge library of useful functions to manipulate data rely on this fact (`conj`, `flatten`, `map` and `reduce` in this case.)

More importantly, it's possible (and actually quite common) to use generic data structures at boundaries, such as between modules/namespaces. At their interfaces, these modules accept simple data structures, not complex object graphs. In fact this makes it a lot easier to evolve a single-process program into a distributed one: The kinds of interfaces you use internally resemble what you'd be using remotely (in fact there's a very nice mapping between a nested Clojure, Ruby or Python data structure and e.g. JSON.)

Some languages, such as Clojure, take this to an extreme: Almost everywhere you'd create a new class in an OO language, you'd just use a simple data structure, such as map, a vector, set or list. In a statically typed limited OO language such as Java, you will almost always end up creating new classes. Of course you can use Map in Java, too, but it would not be idiomatic (and the reverse is true for Clojure as well, which enables you to create "normal" Java classes, too.) Some languages are somewhere in the middle, as shown by the Ruby code in Martin's example. But I find it not very useful to favor one style over the other by default, unless you consider the language you're using.

Secondly, the use of custom-built data structures -- and that's what a schema boils down to if viewed from a programming language standpoint -- always means additional code. You might consider this irrelevant, but it's nicely shown in interfaces such as those of WSGI, Rack or Ring when you compare them to their equivalent in Java: A simple map containing a method or response code, headers and a body vs. different concrete classes for requests with tons of specific attributes (and bonus getters and setters). Restricting the use of schemaless design to the cases where you actually need dynamic variability misses this advantage.

In summary, I think of Martin's points are valid, and he definitely spent more time on articulating his conclusion than I did in writing this comment. But I think those two aspects -- coupling and verbosity -- are worth considering when you need to decide which approach to use.
