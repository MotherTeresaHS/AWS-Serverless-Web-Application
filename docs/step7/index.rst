.. _step7:

**************
Error Handling
**************

Our API Gateway is now working if you pass the correct parameters into it. The next question is what happens if someone does not pass the proper parameters in or even no parameters at all? Sadly we get a really nasty error message coming back. This is OK, but really we should be nice programmers and handle it better. What we will do is alter our Lambda code to trap these kinds of errors.

Tasks:

- use try and except to catch wrog or no parameters being passed

.. code-block:: python

	def lambda_handler(event, context):
	    # get row from our chocolates_user table
	    
	    client = boto3.client('dynamodb')
	    dynamodb = boto3.resource('dynamodb')
	    table = dynamodb.Table('chocolate_users')
	    try:
	        response = table.get_item(
	            Key = {
	                'email':event['email_address']
	            }
	        )
	        
	        try:
	            results = response["Item"]
	            results = replace_decimals(results)
	        except:
	            results = {}
	            
	        return {
	            'statusCode': 200,
	            'body': json.dumps(results)
	        }
	    
	    except:
	        return {
	            'statusCode': 204,
	            'body': json.dumps({})
	        }



.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>