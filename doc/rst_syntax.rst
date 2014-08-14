###################
Rst-Html-Theme-Test
###################

:version: table.docinfo
:author:  author <author@mail.com>
:dedication: dedication.topic

.. contents:: 

div.section h2
==============

    blockquote

    Amet necessitatibus dolorum tempore labore maxime. Eaque praesentium illo labore excepturi ipsa, quos numquam quidem ab. Laboriosam dolorum officia minus mollitia quidem id temporibus! Perferendis exercitationem asperiores sit similique debitis.

    -- .attribution

Inline markups
~~~~~~~~~~~~~~

``tt.literal``

**strong**

*em*

`cite`

:math:`span.formular: \lim_{x \to \infty} \exp(-x) = 0`

|subtext|

.. |subtext| replace:: substitution with *hello*

transition: hr.docutils

----

Lists
~~~~~

Bullet And enumerated list

1. ol.arabic
   Dolor libero doloribus inventore at magni eaque. Labore fugiat cumque explicabo minus nihil! Explicabo quia esse aliquam assumenda expedita voluptate quia ullam doloremque omnis. Ipsa laudantium dolorem deserunt libero quam.

   - ol ul
     Adipisicing consectetur saepe saepe quo eos aliquam ratione, accusantium. Vero eligendi laudantium earum quibusdam laboriosam aliquid. Officiis a assumenda cumque officia dignissimos alias cupiditate rem. Dolor repudiandae ab culpa consectetur.
   - ol ul

     a. ol ul ol.loweralpha
     b. ol ul ol

        I. ol ul ol ol.upperroman
        II. ol ul ol ol

- ul.simple

  1. ul ol.arabic Consectetur cum delectus nisi fuga illo? Officia dolor veniam corporis modi vitae nam? Numquam fugit adipisci deleniti ipsa et beatae dignissimos impedit placeat. Explicabo dignissimos labore ipsa deleniti repellat! Dolorum.

     Elit obcaecati deleniti itaque vitae possimus libero numquam distinctio a beatae ipsam aliquid. Nobis nostrum ex distinctio vero sit ipsam officia unde. Id quia animi doloremque repudiandae accusamus facilis

     Sit quod vel nemo possimus nihil accusamus aspernatur. Eos nostrum nihil fugit accusamus quibusdam, numquam. Obcaecati eaque nisi corporis facere vel saepe doloremque. Vel natus cum at nemo modi. Cupiditate!

  2. ul ol
     Ipsum delectus doloremque tempora maiores sit doloremque quasi. Quos eos neque error distinctio facilis voluptatem cum. Magni eius eveniet ipsum est nam quis necessitatibus nostrum voluptatibus nobis beatae itaque eius?

     - ul ol ul Sit sit explicabo praesentium magni rerum adipisci. Nam rem deserunt velit sed nemo. Placeat veritatis beatae nihil dolorum quod qui sunt illum cum, dolorum quod tempore. Temporibus corporis architecto maiores.
     - ul ol ul Dolor quia nulla amet culpa neque officia vel. Asperiores cumque in perferendis praesentium vitae nesciunt nesciunt tempore deleniti? Dolorum velit laboriosam iure saepe dolor praesentium quam ratione aperiam reiciendis voluptatem!

       * ul ol ul ul
       * ul ol ul ul


table.field-list

:th.field-name: td.field-body
                Consectetur voluptatibus harum minima temporibus molestiae quas ducimus officiis doloribus quos praesentium excepturi molestias. Nesciunt deleniti similique nisi cumque odit! Architecto suscipit iste minima natus qui. Ullam maxime delectus dolorem.

definition list: dl

dt what
    dd Definition lists associate a term with a definition.
    Ipsum quo quisquam doloremque necessitatibus in id? Iusto voluptatibus unde modi animi earum assumenda corporis tenetur culpa. Officiis adipisci ad eos laboriosam obcaecati voluptas? Ut ullam tenetur perferendis qui perspiciatis!

term 4 : span.classifier one : classifier two
    Definition 4. Sit qui eos illo ratione rem obcaecati porro atque. Voluptatibus earum quas reiciendis veniam libero voluptatum. Molestias suscipit consequatur odio dolorem tempore maiores sint. Nisi delectus molestiae unde eum recusandae?


table.option-list 

-t option           td.option-group : td
-a                  command-line option "a"
-b file             options can have arguments
                    and long descriptions Adipisicing elit dolores culpa tempore sapiente cupiditate minima itaque. Nobis quod ipsa veniam voluptates dolores! Vero ea odit laudantium tenetur itaque? Debitis soluta rem inventore obcaecati quaerat est. Veritatis nobis.
--long              options can be long also

Blocks
~~~~~~

pre.literal-block::

  Consectetur culpa id eum quasi libero earum magnam tempore, nesciunt officia. 
  Optio illo ad quae maiores provident non praesentium pariatur iste veritatis alias. Beatae earum adipisci dignissimos dignissimos distinctio consequatur!

  Consectetur obcaecati quam eius fuga unde unde aliquam magnam. Suscipit eos rerum dignissimos repudiandae culpa quibusdam animi. 
  
  Est explicabo impedit illo dignissimos alias neque. Fugiat velit suscipit eius repudiandae quidem?

  

div.line-block

| div.line line 1
| div.line line 2 Sit ea pariatur ratione consectetur sequi molestias adipisicing neque. Suscipit tenetur sapiente laborum quia cupiditate asperiores. Sit rerum perferendis illum tempora dolorem, doloremque quibusdam esse aut earum iusto. Laborum eum!



doctest block

>>> pre.doctest-block
Python-specific usage examples; begun with ">>>"
>>> print '(cut and pasted from interactive Python sessions)'
(cut and pasted from interactive Python sessions)

Tables
~~~~~~

table.docutils

+---------+---------+---------------------------+
| th.head | th.head | th.head                   |
+=========+=========+===========================+
| td      |  td     | Sit impedit nesciunt      |
|         |         |                           |
|         |         | illum tempora dolorem,    |
|         |         | doloremque quibusdam esse |
+---------+---------+---------------------------+
| td      |  td     | 1. dolorem aes sit len    |
|         |         | 2. impledi mecisut        |
+---------+---------+---------------------------+

Table without head

+----+-----+------+
| td |  td |   td |
+----+-----+------+
| td |  td |      |
+----+-----+------+

simple table 

table.docutils

=====   ===
aefe1   a2
=====   ===
ae
lefe1   ao2
joel
=====   ===

Links
~~~~~

a.reference.external

test@mail.com

http://github.com 
ftp://usr@10.0.2.10:3322

github_ 

`uri with an extra long sentence. Elit id doloribus necessitatibus maiores reprehenderit? Necessitatibus obcaecati delectus optio quas modi nihil, beatae ipsa magnam dignissimos rerum ullam tempora beatae magnam deleniti eius fuga reiciendis! Vel ab illo tempora?  <http://www.python.org>`_ 

anoymous__

substition reference |RST|_

a.footnote.reference [1]_ 

a.citation.reference [Test]_ 


__ test
.. |RST| replace:: reStructuredText
.. _RST: http://docutils.sourceforge.net/rst.html
.. _github: http://github.com
.. [1] table.footnote
.. [Test] table.citation
 

Directives 
~~~~~~~~~~~

    pre.code.python.literal-block

.. code:: python 

   #!/usr/bin/python
   # -*- coding: utf-8 -*-
   """Check NetApp Volumes for Volumes which are not Guarantee NONE
   DV1@au.de 2014
   """

   import sys
   import os

   def print_usage():
       """Parameter Usage Print on Console"""
       print('<filer> -- Filer name\n')
       print('<user> -- User name\n')
       print('<password> -- Password\n')
       sys.exit(1)
 
   # Anzahl der Parameter pruefen
   COM_ARG = len(sys.argv) - 1
   if COM_ARG < 3:
       print_usage()

----

   imgage: img

.. image:: http://i4.minus.com/iblu46uOQ0N7Jx.jpg

----

   figure: img

.. figure:: http://i4.minus.com/iblu46uOQ0N7Jx.jpg
       :align: center

       This is the caption of the figure (a simple paragraph).

       It's also center aligned.

       Ipsum rerum voluptatibus illo recusandae sit, aspernatur, magnam distinctio eius officiis inventore nemo recusandae commodi nam perferendis ex dignissimos. Itaque nisi accusantium a excepturi sapiente.  Dicta debitis repellendus ratione nobis.


----

   div.admonition

.. DANGER::
   Watch out, Bears!
.. CAUTION::
   Beware killer rabbits!
.. WARNING::
   Take care of your self
.. Important::
   Remember the gold
.. HINT::
   What about one more shot?

----

   blockquote.epigraph

.. epigraph::

  No matter where you go, there you are.

----

p.rubic

.. rubric:: 
   *rubric* p.rubric

div.formular

.. math::

  Î±_t(i) = P(O_1, O_2, â€¦ O_t, q_t = S_i Î»)

.. sidebar:: div.sidebar-title
  :subtitle: div.sidebar-subtitle

  p.last

  Subsequent indented lines comprise
  the body of the sidebar, and are
  interpreted as body elements.

div.topic

.. topic:: p.topic-title

    Subsequent indented lines comprise
    the body of the topic, and are
    interpreted as body elements.

----

**option** 

sectnum: auto add section number

.. sectnum::

Docutils System
~~~~~~~~~~~~~~~

div.system-messages

div.system-message

p.system-message-title

    error: unknown target
    span.problematic notar_

..

    warning: unexpected indent
.. unexpected indent




