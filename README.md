# shorturlAppServer
This is the server App for generating short links for urls.The tech stacks used are node,express,and mongodb.

# End Point for the server app:

https://afternoon-dusk-89621.herokuapp.com

<h3>Routes</h3>

# GET-Request with Route "/users" will get all the users

  ## Output:
   {
    "data": [
        {
            "_id": "62ff6cf96a7318b44f207a85",
            "name": "srinu moka",
            "email": "srinumoka925@gmail.com",
            "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5…",
            "createdAt": "2022-08-19T10:59:05.129Z",
            "updatedAt": "2022-08-19T10:59:05.129Z",
            "__v": 0
        }
    ]
}
# POST-Request with Route "/users" will be used for user Registration

          example: body:{
                         "user":{
                                   "name":"sample",
                                   "email":"sample123@gmail.com",
                                   "image":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5…",
                                   "password":"123456789"
                                }
                       }
                       
           ## If User Exists Output Will be:
           {
             "error": "User already exists"
           }
# POST-Request with Route "/users/login" will be used for user Login
     example: body:{
                    "email":"srinumoka925@gmail.com",
                    "password":"123456789"
                   }
                       
           ## For successful Login:
           {
            "data": {
                       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmY2Y2Y5NmE3MzE4YjQ0ZjIwN2E4NSIsImVtYWlsIjoic3JpbnVtb2thOTI1QGdtYWlsLmNvbSIsIm5hbWUiOiJzcmludSBtb2thIiwiaWF0IjoxNjYwOTA2Nzk2fQ.UBX7DGfQYdS0RRfTwgrB5nmQoZI5f0PYo5WYGT5goRs"
                    }
           }
# GET-Request with Route "/users/getLoggedIn" will be used for user gettingLoggedinuser(AuthenticatedUser)

example: body:{
                    "email":"srinumoka925@gmail.com",
                    "password":"123456789"
                   }
 
 -we need to pass the previously generated token in the header
 output:
 {
    "data": {
        "_id": "62ff6cf96a7318b44f207a85",
        "name": "srinu moka",
        "email": "srinumoka925@gmail.com",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5…",
        "createdAt": "2022-08-19T10:59:05.129Z",
        "updatedAt": "2022-08-19T10:59:05.129Z",
        "__v": 0
    }
}
