Rst Html Theme
==============

    A html theme for rst.

    -- rst-html-theme

This is created for riv.vim_. 
But can be used for any rst document.

Post issues_ or fork_ it as you like.

Details
-------

The main theme html.css_ is inspired by GhostWriter_, 
normalized, media sized and html4css.css are integrated.

You can use it as your rst document's themes.

The css file in syntax folder are pygment's syntax themes.

The test_doc.rst_ is for testing usage.
It contains the rendered html tags and it's effects.

You can view the effect at http://rykka.github.io/rst-html-theme/test

Usage
-----

First install docutils and pygments

.. code:: sh

   sudo pip install docutils pygments

If you are using rst2html's command tool.

download the files, then inside the folder, execute

.. code:: sh

    rst2html.py /path/to/your/rst \
        --stylesheet=html.css,syntax/molokai.css \
        --syntax-highlight=short \
        > /path/to/the/output_html


.. _riv.vim: http://github.com/rykka/riv.vim
.. _html.css: html.css
.. _test_doc.rst: test_doc.rst
.. _GhostWriter: http://ghost.jollygoodthemes.com/ghostwriter/
.. _issues: https://github.com/Rykka/rst-html-theme/issues
.. _fork: https://github.com/Rykka/rst-html-theme
