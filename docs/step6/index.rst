.. _step6:

***********
API Gateway
***********

Now that we have a Lambda function that will access our table and return information, we need to make that logic accessable on the internet. This way we can write HTML and JavaScript code to get the information and present it in a web page. To do this we will use AWS API Gateway.

API Gateway is a service that can make a Lambda function accessable by a URL. Just like our Lambda function needed a parameter passed to it to know what user information to get back, as part of the URL we will pass in what user information we would like back.

Tasks:

- create a new API Gateway
	- add in CORS, so that any URL can access our API
	- create a "GET" request, to get the user info
- add in a "mapping" template, to specify what parameters are allowed to be passed in
- publish the API, so that it is visible on the internet

.. code-block:: shell

	## set what the Lambda parameter is : what will be passed in the URL

	#set($inputRoot = $input.path('$'))
	{"email_address":"$input.params('user_email')"}


.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>