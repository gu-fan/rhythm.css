rhythm.css
==========

    **r** st _  **h** tml _ **th** e **m** e 

    -- rhythm.css

A css theme focus on reading.

Preview at http://rykka.github.io/rhythm.css/test

Post issues_ or fork_ it as you like.

Details
-------

rhythm.css_ 
    Optimized for better reading.

    It's normalized, responsive, and rst syntax ready.

syntax/xxx.css
    Used for pygment's syntax highlight. 

test_doc.rst_
    Test css with rst converted html file.

    Contains 95% syntax items in rst.

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

- Add less support.
- Add bare html support.


.. _riv.vim: http://github.com/rykka/riv.vim
.. _rhythm.css: rhythm.css
.. _test_doc.rst: test_doc.rst
.. _GhostWriter: http://ghost.jollygoodthemes.com/ghostwriter/
.. _issues: https://github.com/Rykka/rhythm.css/issues
.. _fork: https://github.com/Rykka/rhythm.css
