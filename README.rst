rhythm.css
==========

:version: 0.62

..

    **r**\st **h**\tml **th**\e\ **\m**\e

    -- rhythm.css

A css theme focus on reading,
for rst document.

`Syntax Preview`__ 

`Article Preview`__

__ http://rykka.github.io/rhythm.css/rst_syntax
__ http://rykka.github.io/rhythm.css/article

Post issues_ or fork_ it as you like.

Details
-------

::
    
    .
    ├── less
    │   ├── docutils.less
    │   ├── *.less
    ├── dist
    │   └── css
    │       └── rhythm.css
    ├── doc
    │   ├── rst_syntax.rst
    │   └── *.rst
    ├── syntax
    │   ├── default.css
    │   ├── *.css
    │   └── murphy.css
    ├── Gruntfile.js
    └── README.rst

less/\*.less
    The source code

dist/css/rhythm.css 
    Css file ready for use
    
    Optimized for better reading, And rst syntax ready.

doc/\*.rst
    A rst document with most rst syntax item.
    Userd to test css with rst converted html file.

    Preview at http://rykka.github.io/rhythm.css/test

syntax/\*.css
    Theme for pygment's syntax highlight. 

    You can uset them in generate commands.

Gruntfile.js
    Build and testing commands included.

    First install with ``npm install``,
    Then build and test with ``grunt``.

Usage
-----

1. Install tool

.. code:: sh

   sudo pip install docutils pygments


2. Download

.. code:: sh

   git clone  https://github.com/Rykka/rhythm.css.git
   cd rhythm.css


3. Generate Html

.. code:: sh

   rst2html.py /path/to/your/rst \
        --stylesheet=rhythm.css,syntax/molokai.css \
        --syntax-highlight=short \
        > /path/to/the/output_html


TODO
----

- [X] 2014-08-15 Add less support.
- Add bare html support.
- Add more themes.
- optimize for chinese.


.. _riv.vim: http://github.com/rykka/riv.vim
.. _issues: https://github.com/Rykka/rhythm.css/issues
.. _fork: https://github.com/Rykka/rhythm.css
