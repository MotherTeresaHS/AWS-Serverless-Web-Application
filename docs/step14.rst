.. _step14:

***
CSS
***

.. image:: ./images/AWSServerlessWebApplication-CSS.jpg
  :width: 720 px
  :alt: AWS Serverless Web App
  :align: center

To make our website look more professional and also be help in maintaining its style, we will be using `Google's MDL <https://getmdl.io/>`_. This will act as CSS to our website. Most basic websites have a navigation menu at the top and the content below. We will use this model. The navigation menu will contain:

- home
- sign up
- sign in (and will auto move you to profile page)
- sign out
- profile

To use Google's MDL, you add 2 CSS references in the **head** of your HTML code. MDL is based on `components <https://getmdl.io/components/index.html>`_. Components can be things like a button, or a navigation menu system, or a form. I will add these components to the HTML to create a better looking website.

Tasks:

- fix up some HTML code
- add Google's MDL CSS from its CDN, so we do not have to host it

HTML
****

.. tabs::

  .. group-tab:: index

    .. code-block:: html
        :linenos:

  .. group-tab:: Sign Up

    .. code-block:: html
        :linenos:

  .. group-tab:: Sign In

    .. code-block:: html
        :linenos:

  .. group-tab:: Sign Out

    .. code-block:: html
        :linenos:

  .. group-tab:: Profile

    .. code-block:: html
        :linenos:

JavaScript
**********

.. tabs::

  .. group-tab:: index

      .. code-block:: javascript
        :linenos:

  .. group-tab:: Sign Up

    .. code-block:: javascript
        :linenos:

  .. group-tab:: Sign In

    .. code-block:: javascript
        :linenos:

  .. group-tab:: Sign Out

    .. code-block:: javascript
        :linenos:

  .. group-tab:: Profile

    .. code-block:: javascript
        :linenos:

.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFcxxx" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>

.. seealso:: Google's `Material Design Lite <https://getmdl.io/index.html>`_ website