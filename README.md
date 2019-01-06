# certificate-blockchain

Postman workspace: https://app.getpostman.com/join-team?invite_code=85949b4751d9d7e0b0312ee6f25c05cd&ws=de5c5fe0-3b5a-4644-8cbf-c4b5a27d124c


Instructions:

run apps.py on all ports (5000,5001,5002 and 5003) eg: $python apps.py -p 5001 (default is 5000)

run app.js (site at http://localhost:8080) - For adding new certificate from the institutions's side

PS: Adding certificates from Postman won't work (Everything else will) - #Issue

After adding a certificate go to http://0.0.0.0:5003/transactions/current (or send a GET request using Postman) to see the certificates.

Verification process: run verify.js (the log will be displayed in the respective terminal tabs). Or follow the ..resolve/ -> ../verify -> ../mine order in Postman. (resolve conflicts before verifying from the leader's side).

The leader status changes like 5001->5002->5003->5000->5001->... Do the verification from the leader's port. 


Tasks:

Test API and functions (https://app.getpostman.com/join-team?invite_code=85949b4751d9d7e0b0312ee6f25c05cd&ws=de5c5fe0-3b5a-4644-8cbf-c4b5a27d124c)

Look for #..(TASK) comments in the code


Points to remember: 

Make sure that our chain is upto date before adding a new block (to add the block to the longest valid chain).

University keys:

U1:  "418a520d4e71e7cb6783bfc16e42dde2749cbb81d6dcac5b196db833818094dd"

U2:  "cd68875a5a7bf6943edf53d062b4d6ce8cea8e16a8167736bf077b6dd0f02bc2"

U3:  "72f397dc4e5c197e33a94397dcd95f1ff62912675b2d361ee3408e7783eb218c"

U4:  "d4f1dade285f4b60eb30088dbbf803d551caf3e39288b514a656e546b0def2f5"



