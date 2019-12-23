.. _step09:

**********
JavaScript
**********

.. image:: ./images/AWSServerlessWebApplication-JS.jpg
  :width: 480 px
  :alt: AWS Serverless Web App
  :align: center

The basics of our app are now complete. The next thing to tackle is to fix up our HTML. It is good practise to actually remove the JavaScript code and place it in a seperate file. This way the code and content are seperate. What we will do is remove the get_user() function and call it from our HTML. We will also place a button in the webpage to make the function call and a table to place the data in, so it looks nicer.

Tasks:

- create a js directory and a JavaScript file for our code
- add button and table to our HTML
- call the function, when button is pressed
- present the data in our new table

.. code-block:: javascript


.. code-block:: html

	<!DOCTYPE html>
	<html>
	  <head>
	    <title>Web App</title>
	  </head>
	  <body>
	    <div id="user_info">
	      <p>Please wait ...</p>
	    </div>
	    <div>
	      <button onclick="getUser()">Click me</button>
	    </div>
	  </body>
	  
	  <script type="text/javascript">
	    
	    async function getUser() {
	      // get the user info from API
	      
	      const api_url = 'your_API_URL?user_email=jane.smith@gmail.com'
	      const api_response = await fetch(api_url);
	      const api_data = await(api_response).json();
	      
	      const div_user_info = document.getElementById('user_info');
	      div_user_info.innerHTML = api_data['body'];
	    }
	  </script>
	</html>


.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>