Invoice management System
-------------------------

Description :

 Typically companies buy material/services from vendors and there is a need to invoice
 management system . We will build it in this project .
 
 User functions 
 --------------
    2 types of users 
	  1) Accountant 
	  2) Approver 
	Define 2 roles in the DB to mark these 2 types of users .
	
Screens 
------
1) User login 
2) forget password 
3) change password 
4) Dashboard 
     Once user logged in show a dashboard screen in which list down the invoices in DB.
	 For each and every invoice show amt , date , vendor name , and link to pdf (invoice
	  document stored in the server)
	  
5) if we click the link for pdf .. show pdf in browser 
6) if we click the invoice record show a edit page for invoice in which left side 
    show data for that invoice and right side show pdf 
7) in the edit page have a link to save the edited data and the submit for approval link
8) one the document is submitted change the status of the document  to submited 
      have status field for each and every document and put values in each and every stage
      of the document 
9) if approver logins in show the documents which needs to be approved .
10) if approver approves then change the status of the document 

 use reactjs for frontend and spring boot REST API's for 2 microservices


Bonus points  can be done after aws , devops class
---------------------------------------------------
1) Use Aws s3 buckets to store the pdf documents 
2) write the above project with 2 microservices 
3) dockerize and deploy it with kubernetes 
4) externalize the password to DB in spring cloud config server 
5) Use eureka server for service discovery , if kubernetes is used use kubernetes
    native service discovery 
 
    -   
