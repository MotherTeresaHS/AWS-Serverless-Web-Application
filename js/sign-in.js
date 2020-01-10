// JavaScript File

function signInButton() {
  // sign-in to AWS Cognito
  
  const data = { 
  	UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
  const cognitoUser = userPool.getCurrentUser();

	const authenticationData = {
    Username : document.getElementById("inputUsername").value,
    Password : document.getElementById("inputPassword").value,
  };

  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      const accessToken = result.getAccessToken().getJwtToken();
      console.log(result);	
      
      //get user info, to show that you are logged in
			cognitoUser.getUserAttributes(function(err, result) {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
				document.getElementById("logged-in").innerHTML = "You are logged in as: " + result[2].getValue();
				
				// now move to the profile page
				console.log("Here");
				window.location.replace("./profile.1.html");
			});
      
    },
    onFailure: function(err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}