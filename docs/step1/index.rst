.. _step1:

*******
Amplify
*******

We will use AWS Amplify to host our web app so it is always available and we do not need to worry about provisioning servers, auto-scaling instances or anything else about managing web content. We will also use AWS Cloud9 as our IDE to write our HTML in and then publish all the code to GitHub as our version control system.

Tasks:

- create GitHub repo
- create Cloud9 instance
- connect the root of Cloud9 instance to GitHub repo
- create index.html file in the root of Cloud9
- update GitHub repo
- create Amplify instance connected to GitHub repo 

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