.. _step10:

*******
Sign In
*******

.. image:: ./images/AWSServerlessWebApplication-SignIn.jpg
  :width: 480 px
  :alt: AWS Serverless Web App
  :align: center

Now that we have a user in the Cognito system, we need a way for the user to actually sign into the app. Cognito does provide a built in UI for this as well, but it does not work nicely with the way we will be building our app. We will actually write our own html page, that uses some provided JavaScript libraries to log in.

What we will do is download the libraries we need and place them in a folder called "js". This is a standard name used to place all your JavaScript files in. Once all the librarys are downloaded, you then need to update the **config.js** file with the information from Cognito. The we will write the HTML to have the login and password entered and a button to login. When you click on the button, a function will be called to check if this is a valid user from Cognito and if it is we will retruned a **token** and the user name. This will prove it is a valid user.


Tasks:

- download the JavaScript libraries, `from here <https://github.com/MotherTeresaHS/AWS-Serverless-Web-Application/tree/master/js/>`_, and place them in a js folder
- update the config.js file with your app information
- write file sign-in.html, that has 2 input boxes and a sign in button
- write the JavaScript function to sign the user in
- if the user is valid, show the user email address, returned from Cognito as well as a JWT token

.. code-block:: shell
	:linenos:

	<!DOCTYPE html>

	<html lang="en">
	  <head>
	    <meta charset="utf-8">

	  	<!-- Javascript SDKs-->
	  	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	  	<script src="js/amazon-cognito-auth.min.js"></script>
	  	<script src="https://sdk.amazonaws.com/js/aws-sdk-2.596.0.min.js"></script> 
	  	<script src="js/amazon-cognito-identity.min.js"></script>   
	  	<script src="js/config.js"></script>
	  </head>
	  
	  <body>
	    <form>
	      <h1>Please sign in</h1>

	      <input type="text" id="inputUsername"  placeholder="Email address" name="username" required autofocus>
	      <input type="password" id="inputPassword"  placeholder="Password" name="password" required>    
	      <button type="button" onclick="signInButton()">Sign in</button>
	    </form>
	    
	    <br>
	    <div id='logged-in'>
	      <p></p>
	    </div>
	    
	    <p><a href="./profile.html">Profile</a></p>
	    
	    <br>
	    <div id='home'>
	      <p>
	        <a href='./index.html'>Home</a>
	      </p>
	    </div>

	    <script>
	    
		    var data = { 
					UserPoolId : _config.cognito.userPoolId,
	        ClientId : _config.cognito.clientId
	    	};
	    	var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
	    	var cognitoUser = userPool.getCurrentUser();

	      function signInButton() {
	        // sign-in to AWS Cognito
	    
	      	var authenticationData = {
	          Username : document.getElementById("inputUsername").value,
	          Password : document.getElementById("inputPassword").value,
	        };
		
	        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
	    
	        var poolData = {
	          UserPoolId : _config.cognito.userPoolId, // Your user pool id here
	          ClientId : _config.cognito.clientId, // Your client id here
	        };

	        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
		
	        var userData = {
	          Username : document.getElementById("inputUsername").value,
	          Pool : userPool,
	        };
	    	
	        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	    
		      cognitoUser.authenticateUser(authenticationDetails, {
	          onSuccess: function (result) {
				      var accessToken = result.getAccessToken().getJwtToken();
				      console.log(result);	
				      
				      //get user info, to show that you are logged in
							cognitoUser.getUserAttributes(function(err, result) {
								if (err) {
									console.log(err);
									return;
								}
								console.log(result);
								document.getElementById("logged-in").innerHTML = "You are logged in as: " + result[2].getValue();
							});
				      
	          },
	          onFailure: function(err) {
	            alert(err.message || JSON.stringify(err));
	          },
	        });
	      }
	    </script>
	    
	  </body>
	</html>

.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/b72PvMBcVTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>
