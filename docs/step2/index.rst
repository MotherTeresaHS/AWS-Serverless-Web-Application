.. _step2:

****
IAM
****

Before we do any more work with AWS, the next thing we need is to create some permissions so that we can give access to certain AWS services by other services. For example eventually we will want some code (Lambda function) to access the database. Unless we create permissions to let this happen, hopefully the database will not just let anyone access it! 

Code:

.. code-block:: shell

	vocstartsoft:~/environment $ git init
	Initialized empty Git repository in /home/ubuntu/environment/.git/
	vocstartsoft:~/environment (master) $ git remote add origin https://github.com/Mr-Coxall/Amplify-Test
	vocstartsoft:~/environment (master) $ git pull origin master

.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/kfHxzvBbOHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
	</iframe>
  </div>