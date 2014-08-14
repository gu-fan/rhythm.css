rhythm.css
==========

    **r**\st **h**\tml **th**\e\ **\m**\e

    -- rhythm.css

A css theme for rst document, 
focused on reading.

Preview at http://rykka.github.io/rhythm.css/test

Post issues_ or fork_ it as you like.

Details
-------

dist/css/rhythm.css_ 
    Optimized for better reading.

    It's normalized, responsive, and rst syntax ready.

syntax/\*.css
    Used for pygment's syntax highlight. 

doc/rst_syntax.rst_
    A rst document with most rst syntax item.
    Userd to test css with rst converted html file.

    Preview at http://rykka.github.io/rhythm.css/test

Usage
-----

1. Install convert tool

.. code:: sh

   sudo pip install docutils pygments


2. Download

.. code:: sh

   git clone  https://github.com/Rykka/rhythm.css.git
   cd rhythm.css


3. Execute

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
.. _rhythm.css: dist/css/rhythm.css
.. _rst_syntax.rst: doc/rst_syntax.rst
.. _GhostWriter: http://ghost.jollygoodthemes.com/ghostwriter/
.. _issues: https://github.com/Rykka/rhythm.css/issues
.. _fork: https://github.com/Rykka/rhythm.css
