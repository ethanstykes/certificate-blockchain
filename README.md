# certificate-blockchain

Instructions:

run apps.py on all ports

run app.js (site at: http://localhost:8080)

Adding certificates from Postman won't work (Everything else will)

After adding a certificate go to http://0.0.0.0:5003/transactions/current (or send a GET request using Postman) to see the certificates

Verification process: change the ports in verify.js to demonstrate the process (the log will be displayed in the respective terminal tabs). Or follow the ..resolve/ -> ../verify -> ../mine order in Postman. (resolve conflicts before verifying from the leader's side. Not to be confused with the resolve conflict request from a node for getting the new chain from the leader after verification - it should be done too).

Remember: The leader status changes like 5001->5002->5003->5000->5001->... Do the verification from the leader's port. 
Find creative ways to demontrate our consensus algoritm (eg: add multiple blocks in single turn, add blocks when it's not a node's turn) and the verification algorithm (add a certificate with the address of a different institution)

Tasks:

Test API's and functions (https://app.getpostman.com/join-team?invite_code=85949b4751d9d7e0b0312ee6f25c05cd&ws=de5c5fe0-3b5a-4644-8cbf-c4b5a27d124c)

Look for #..(TASK) comments in the code 


Points to remember: 

Make sure that our chain is upto date before sending certificates for verification (to find the right leader), and more importantly, while adding a new block (to add the block to the largest existing chain).
Add these functionalities to back-end (verify chain and resolve conflicts by calling the corresponding API's before submitting the certificates/adding a new block)

University keys:

U1:  "418a520d4e71e7cb6783bfc16e42dde2749cbb81d6dcac5b196db833818094dd"

U2:  "cd68875a5a7bf6943edf53d062b4d6ce8cea8e16a8167736bf077b6dd0f02bc2"

U3:  "72f397dc4e5c197e33a94397dcd95f1ff62912675b2d361ee3408e7783eb218c"

U4:  "d4f1dade285f4b60eb30088dbbf803d551caf3e39288b514a656e546b0def2f5"



