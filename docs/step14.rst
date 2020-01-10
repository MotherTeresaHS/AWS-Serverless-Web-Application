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

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="description" content="AWS Serverless Web App tutorial">
        <meta name="keywords" content="HTML,CSS,XML,JavaScript">
        <meta name="author" content="Mr. Coxall">
        <meta name="date" content="Jan 2020">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!--Google's MDL-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.brown-indigo.min.css" /> 
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        
        <title>Chocolates</title>
      </head>
        
      <body>
        <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
              <!-- Title -->
              <span class="mdl-layout-title">Chocolates</span>
              <!-- Add spacer, to align navigation to the right -->
              <div class="mdl-layout-spacer"></div>
              <!-- Navigation. We hide it in small screens. -->
              <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="./index.html">Home</a>
                <a class="mdl-navigation__link" href="">Product</a>
                <a class="mdl-navigation__link" href="./sign-in.html">Sign In</a>
                <a class="mdl-navigation__link" href="">FAQ</a>
                <a class="mdl-navigation__link" href="">About</a>
              </nav>
            </div>
          </header>
          <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Chocolates</span>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="./index.html">Home</a>
              <a class="mdl-navigation__link" href="">Product</a>
              <a class="mdl-navigation__link" href="./sign-in.html">Sign In</a>
              <a class="mdl-navigation__link" href="">FAQ</a>
              <a class="mdl-navigation__link" href="">About</a>
            </nav>
          </div>
          <main class="mdl-layout__content">
            <div class="page-content"><!-- Your content goes here --></div>
          </main>
        </div>
        
        <!--Get below the nav menu at the top-->
        <br><br><br><br><br>
        
        <div>
          Welcome to the chocolates website. Please see the chocolates you can eat and login to keep track of those you have already eaten!
        </div>
        
        <!-- Icon List -->
        <style>
        .demo-list-icon {
          width: 500px;
        }
        </style>
        
        <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">account_box</i>
            <a href="https://web-app-num1.auth.us-east-1.amazoncognito.com/signup?client_id=6m2mqsko56so159pp9g46ht4pb&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://example.com">Sign up</a>, if you have not already!
        </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">cloud_off</i>
            <a href="./sign-out.html">Sign out</a>
          </span>
          </li>
        </ul>
      </body>
      
    </html>


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