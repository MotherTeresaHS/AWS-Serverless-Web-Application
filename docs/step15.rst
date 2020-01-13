.. _step15:

****************
Post to dataBase
****************

.. image:: ./images/AWSServerlessWebApplication-PostToDB.jpg
  :width: 720 px
  :alt: AWS Serverless Web App
  :align: center

The next step we need to be able to do is actually create a new row in the database. To do this we run the command **put_Item**. We will once again have to make a Lambda function to runthis code and then have an API Gateway to be able to access it from the internet and pass in the information we need to create the row.

Tasks:

- create Lambda function called **add_user**
- write code to create the row in our database
- write test case to see new row show up in database
- create API Gateway to be able to access the function from web
- test it out by calling API Gateway and seeing row show up

.. code-block:: python
  :linenos:
  :caption: Lambda function to create row in DynamoDB

    #!/usr/bin/env python3

    # Created by: Mr. Coxall
    # Created on: Dec 2019
    # This function adds a row from our chocolate_user DynmamoDB

    import json
    import boto3
    from botocore.exceptions import ClientError
    import decimal

    def replace_decimals(obj):
            # Helper class to Decimals in an arbitrary object
            #   from: https://github.com/boto/boto3/issues/369

        if isinstance(obj, list):
            for i in range(len(obj)):
                obj[i] = replace_decimals(obj[i])
            return obj
        elif isinstance(obj, dict):
            for k, v in obj.items():
                obj[k] = replace_decimals(v)
            return obj
        elif isinstance(obj, set):
            return set(replace_decimals(i) for i in obj)
        elif isinstance(obj, decimal.Decimal):
            if obj % 1 == 0:
                return int(obj)
            else:
                return float(obj)
        else:
            return obj

    def lambda_handler(event, context):
        # function returns a row from our chocolate_user DynmamoDB
        
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('chocolate_user')
        
        try:
            response = table.put_item(
                Item = {
                    'email': event['email_address'],
                    'first_name': event['first_name'],
                    'last_name' : event['last_name'],
                    'age' : decimal.Decimal(event['age'])
                }
            )
            
            try:
                result = response['Item']
            except:
                result = {}
            
            print(result)
            
            return_var = {
                'statusCode': 200,
                'body': json.dumps(result)
            }
        
            return return_var
            
        except:
           return {
                'statusCode': 204,
                'body': json.dumps("error")
            }

.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFcxxx" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  </div>

.. seealso:: Google's `Material Design Lite <https://getmdl.io/index.html>`_ website