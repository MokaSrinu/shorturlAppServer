# shorturlAppServer
This is the server App for generating short links for urls.The tech stacks used are node,express,and mongodb.

# End Point for the server app:

https://afternoon-dusk-89621.herokuapp.com

<h3>Routes</h3>


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
# GET-Request with Route "/users" will get all the users

    Sample:Output will be :{
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
     ## data May be large:
    {
     ...
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

 
 ## we need to pass the previously generated token in the header
         sample:output:{
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
                       
                       
# Post-Request with Route "/shortUrls" will be used for storing full url in database and getting shortLink

         sample:input:{
                         "fullurl":"https://jwt.io/"
                      }
         sample:output:{
                            "full": "https://jwt.io/",
                            "clicks": "0",
                            "_id": "62ff6d526a7318b44f207a8b",
                            "short": "hiCyjx38P",
                            "__v": 0
                       } 
# Post-Request with Route "/getfullbyshort" will be used for getting fullUrl by passing shortLink

         sample:input:{
                       "short":"hiCyjx38P"
                      }
         sample:output:{
                           "_id": "62ff6d526a7318b44f207a8b",
                           "full": "https://jwt.io/",
                           "clicks": "1",
                           "short": "hiCyjx38P",
                           "__v": 0
                        }    
 # GET-Request with Route "/getallurls" will be used for getting all urls data

         
         sample:output:{
                         "data": [
                                    {
                                       "_id": "62ff6d526a7318b44f207a8b",
                                       "full": "https://jwt.io/",
                                       "clicks": "3",
                                       "short": "hiCyjx38P",
                                       "__v": 0
                                    },
                                    {
                                      "_id": "62ff6da06a7318b44f207a99",
                                      "full": "https://course.masaischool.com/dashboard",
                                      "clicks": "5",
                                      "short": "cCB5-PwTD",
                                       "__v": 0
                                    }
                                  ]
                       }                        
                       
                                              
   
