.. _step16:

***************
Cognito Trigger
***************

.. image:: ./images/AWSServerlessWebApplication-CognitoTrigger.jpg
  :width: 720 px
  :alt: AWS Serverless Web App
  :align: center

As mentioned in the last step, the reason to create a Lambda function to add a row to our **User** table, is for when a new user registers, we need a way to not only have Cognito know the user but also our DynamoDB as well. We now have a Lambda function that will create a new row. Now we need Cognito to trigger is.

If you go back to the user pool in Cognito that you created previously and then select **Triggers** on the left hand side, you will see a list of triggers that Cognito can execute during different stages of its process. The one we are interested in is **Post confirmation**. This occurs after our user has confirmed themeself by clicking on the link in the email that is sent to them. Once we have confirmed the user, we will trigger our Lambda function. To do this just select it from the dropdown menu and then **Save changes** at the bottom. 

Tasks:

- link our Lambda function to Cognito trigger
- test it out by creating a new user
- confirm the new user exists in the DynamoDB table

.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/IBfbIfa1YFcxxx" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  </div>
