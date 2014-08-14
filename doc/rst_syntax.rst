###################
Rst-Html-Theme-Test
###################

:version: table.docinfo
:author:  author <author@mail.com>
:dedication: dedication.topic

.. contents:: 

raw::

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

    -- .attribution

raw::

    div.section h2
    ==============

        blockquote

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

raw::

    ``tt.literal`` `cite`

    **strong**

    *em*

    :math:`span.formular: \lim_{x \to \infty} \exp(-x) = 0`

    |subtext|

    .. |subtext| replace:: substitution with *hello*
       
transition: hr.docutils

----

raw::

    transition: hr.docutils

    ----

Lists
~~~~~

Bullet And enumerated list

1. ol.arabic

   - ol ul
   - ol ul

     a. ol ul ol.loweralpha
     b. ol ul ol

        I. ol ul ol ol.upperroman
        II. ol ul ol ol

- ul.simple

  1. ul ol.arabic
  2. ul ol

     - ul ol ul
     - ul ol ul

       * ul ol ul ul
       * ul ol ul ul


raw::

    1. ol.arabic
    
       - ol ul
       - ol ul
    
         a. ol ul ol.loweralpha
         b. ol ul ol
    
            I. ol ul ol ol.upperroman
            II. ol ul ol ol
    
    - ul.simple
    
      1. ul ol.arabic
      2. ul ol
    
         - ul ol ul
         - ul ol ul
    
           * ul ol ul ul
           * ul ol ul ul



table.field-list

:th.field-name: td.field-body

raw::

    table.field-list

    :th.field-name: td.field-body


definition list: dl

dt what
    dd Definition lists associate a term with a definition.

term 4 : span.classifier one : classifier two
    Definition 4.


raw::

    definition list: dl

    dt what
        dd Definition lists associate a term with a definition.

    term 4 : span.classifier one : classifier two
        Definition 4.

table.option-list 

-t option           td.option-group : td
-a                  command-line option "a"
-b file             options can have arguments
                    and long descriptions
--long              options can be long also

raw::

    table.option-list 

    -t option           td.option-group : td
    -a                  command-line option "a"
    -b file             options can have arguments
                        and long descriptions
    --long              options can be long also


Blocks
~~~~~~

pre.literal-block::

  Where is the Cat?

  Do you see it?

raw::

    pre.literal-block::

      Where is the Cat?

      Do you see it?

div.line-block

| div.line line 1
| div.line line 2


raw::

    div.line-block

    | div.line line 1
    | div.line line 2

doctest block

>>> pre.doctest-block
Python-specific usage examples; begun with ">>>"
>>> print '(cut and pasted from interactive Python sessions)'
(cut and pasted from interactive Python sessions)

raw::
    
    doctest block

    >>> pre.doctest-block
    Python-specific usage examples; begun with ">>>"
    >>> print '(cut and pasted from interactive Python sessions)'
    (cut and pasted from interactive Python sessions)

Tables
~~~~~~

table.docutils

+---------+---------+---------+
| th.head | th.head | th.head |
+=========+=========+=========+
| td      |  td     |         |
+---------+---------+---------+
| td      |  td     |         |
+---------+---------+---------+

raw::

    table.docutils

    +---------+---------+---------+
    | th.head | th.head | th.head |
    +=========+=========+=========+
    | td      |  td     |         |
    +---------+---------+---------+
    | td      |  td     |         |
    +---------+---------+---------+

Table without head

+----+-----+------+
| td |  td |   td |
+----+-----+------+
| td |  td |      |
+----+-----+------+

raw::

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
aefe1   a2
=====   ===

raw::

    simple table 

    table.docutils

    =====   ===
    aefe1   a2
    =====   ===
    aefe1   a2
    =====   ===

Links
~~~~~


a.reference.external
test@mail.com
http://github.com 
ftp://usr@10.0.2.10:3322
github_ 
`embedded uri <http://www.python.org>`_ 
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
 
raw::

    a.reference.external
    test@mail.com
    http://github.com 
    ftp://usr@10.0.2.10:3322
    github_ 
    `embedded uri <http://www.python.org>`_ 
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

raw::

        code: pre.code.python.literal-block

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

   img (image and figure)

.. image:: http://i4.minus.com/iblu46uOQ0N7Jx.jpg

raw::

    image and figure: img

 .. image:: http://i4.minus.com/iblu46uOQ0N7Jx.jpg

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

raw::

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

raw::

    blockquote.epigraph

 .. epigraph::

   No matter where you go, there you are.

----

p.rubic

.. rubric:: 
   *rubric* p.rubric

raw::

    p.rubic

    .. rubric:: 
       *rubric* p.rubric

div.formular

.. math::

  Î±_t(i) = P(O_1, O_2, â€¦ O_t, q_t = S_i Î»)

raw::

    div.formular

    .. math::

      Î±_t(i) = P(O_1, O_2, â€¦ O_t, q_t = S_i Î»)

    div.sidebar

.. sidebar:: div.sidebar-title
  :subtitle: div.sidebar-subtitle

  p.last

  Subsequent indented lines comprise
  the body of the sidebar, and are
  interpreted as body elements.

raw::

    div.sidebar

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

raw::

    div.topic

    .. topic:: p.topic-title

        Subsequent indented lines comprise
        the body of the topic, and are
        interpreted as body elements.

----

**option** 

sectnum: auto add section number

.. sectnum::

raw::

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

raw::

    error: unknown target
    span.problematic notar_

..

    warning: unexpected indent
.. unexpected indent


raw::

        warning: unexpected indent
    .. unexpected indent






