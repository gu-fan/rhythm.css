Rst Html Theme
==============

The html theme for rst.

Basically, this is for riv.vim_'s Html Theme.  

You can view the effect at http://rykka.github.io/rst-html-theme/

Post issues or fork it as you like.

Files
-----

The main theme html.css_ is inspired by GhostWriter_, 
normalized and html4css.css are integrated.

You can use it as your rst2html's themes.
and you can edit the theme as you like.

The css file in syntax folder are pygment's syntax themes.

The test_doc.rst_ is for testing usage.

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
