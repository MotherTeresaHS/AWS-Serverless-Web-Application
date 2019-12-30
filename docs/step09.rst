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
- add button to our HTML
- call the function, when button is pressed
- present the data in a table

.. code-block:: javascript
	:linenos:

	// Created by: Mr. Coxall
	// Created on: Jan 2020
	// This function returns a row from our chocolate_user DynamoDB
	//   2nd function just class the first one, but provides error checking for debugging

	/* global fetch */   // so that you do not get a warning about the fetch function 

	async function getUser(email_address) {
	  // get the user info from API
	  
	  const api_url = 'https://mfvjw1xkc9.execute-api.us-east-1.amazonaws.com/prod/user-info?user_email=' + email_address; 
	  const api_response = await fetch(api_url);
	  const api_data = await(api_response).json();
	  const user_info = JSON.parse(api_data['body']);
	  const div = document.getElementById('user_info');
	  var html_table = ' \
	    <table border=1> \
	      <tr> \
	        <th>Firstname</th> \
	        <th>Lastname</th> \
	        <th>Age</th> \
	        <th>Email</th> \
	      </tr>';

	  if (Object.entries(user_info).length === 0 && user_info.constructor === Object) {
	    // check if response id empty 
	    
	    html_table = html_table + ' \
	        <tr> \
	          <td colspan="4">No data!</td> \
	        </tr> \
	      <table> \
	    ';
	  } else {
	    // if there is data, place it in the table
	    
	    html_table = html_table + ' \
	        <tr> \
	          <td>' + user_info['first_name'] + '</td> \
	          <td>' + user_info['last_name'] + '</td> \
	          <td>' + user_info['age'] + '</td> \
	          <td>' + user_info['email'] + '</td> \
	        </tr> \
	      <table> \
	    ';
	  }
	  div.innerHTML = html_table;
	}

	function getUserProfile(email_address) {
	  getUser(email_address)
	    .then(success => {
	      console.log("Got the API data correctly")
	    })
	    .catch(error => {
	      console.error(error);
	    });
	}



.. code-block:: html
	:linenos:

	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="UTF-8">
	    <meta name="description" content="This website demos an AWS Serverless Web App">
	    <meta name="keywords" content="AWS Serverless Web App">
	    <meta name="author" content="Mr. Coxall">
	    <meta name="date" content="Jan 2020">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    
	    <title>Web App</title>
	    
	    <script async type="text/javascript" src="./js/get_user_profile.js"></script>
	  </head>
	  <body>
	    <div id='call_button'>
	      <button onclick="getUserProfile('mr.coxall@mths.ca')">Get Profile data</button>
	    </div>
	    <br>
	    <div id="user_info">
	    </div>
	  </body>
	</html>



.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>