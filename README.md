# Fake App 
Projeto User Crud Vuejs Teste para a Vaga de Dev Front-End. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```



## API DOCs

URL: https://gorest.co.in/public-api

Get an authentication token: [https://gorest.co.in/](https://gorest.co.in/)


### List all users

#### GET /public-api/users 

Headers:
> Authorization: Bearer {token}

```Javascript
{
  "_meta": {
    "success": true,
    "code": 200,
    "message": "OK. Everything worked as expected.",
    "totalCount": 2185,
    "pageCount": 110,
    "currentPage": 1,
    "perPage": 20,
    "rateLimit": {
      "limit": 30,
      "remaining": 29,
      "reset": 2
    }
  },
  "result": [
    {
      "id": "919",
      "first_name": "Verner",
      "last_name": "Abbott",
      "gender": "male",
      "dob": "1925-08-19",
      "email": "fritz48@example.org",
      "phone": "883.633.9397 x1928",
      "website": "https://www.stark.biz/eveniet-quia-repellat-neque-at-consectetur-eum-est",
      "address": "9846 Hane Glen Suite 161\nSouth Chasitymouth, HI 28058",
      "status": "active",
      "_links": {
        "self": {
          "href": "https://gorest.co.in/public-api/users/919"
        },
        "edit": {
          "href": "https://gorest.co.in/public-api/users/919"
        },
        "avatar": {
          "href": "https://lorempixel.com/250/250/people/?49945"
        }
      }
    }
  ]
}
```
Status codes:
> 200 | 401 | 404

### Create a new user

#### POST /public-api/users

Headers:
> Authorization: Bearer {token}

Payload
```Javascript
//The following fields are the only you need to create a new user
{
  "first_name": "Dummy",
  "last_name": "User",
  "gender": "mase",
  "email": "dummy@gmail.com"
}
```

Response: 
```Javascript
{
  "_meta": {
    "success": true,
    "code": 200,
    "message": "OK. Everything worked as expected.",
    "rateLimit": {
      "limit": 30,
      "remaining": 28,
      "reset": 4
    }
  },
  "result": {
    "id": "20160",
    "first_name": "Dummy",
    "last_name": "User",
    "gender": "male",
    "dob": null,
    "email": "user@gmail.com",
    "phone": null,
    "website": null,
    "address": null,
    "status": null,
    "_links": {
      "self": {
        "href": "https://gorest.co.in/public-api/users/20160"
      },
      "edit": {
        "href": "https://gorest.co.in/public-api/users/20160"
      },
      "avatar": {
        "href": null
      }
    }
  }
}
```
Status codes:
> 200 | 401 | 404 | 405

### List a specific user

#### GET /public-api/users/{user_id} 

Headers:
> Authorization: Bearer {token}

Response: 
```Javascript
{
  "_meta": {
    "success": true,
    "code": 200,
    "message": "OK. Everything worked as expected.",
    "rateLimit": {
      "limit": 30,
      "remaining": 29,
      "reset": 2
    }
  },
  "result": {
    "id": "919",
    "first_name": "Verner",
    "last_name": "Abbott",
    "gender": "male",
    "dob": "1925-08-19",
    "email": "fritz48@example.org",
    "phone": "883.633.9397 x1928",
    "website": "https://www.stark.biz/eveniet-quia-repellat-neque-at-consectetur-eum-est",
    "address": "9846 Hane Glen Suite 161\nSouth Chasitymouth, HI 28058",
    "status": "active",
    "_links": {
      "self": {
        "href": "https://gorest.co.in/public-api/users/919"
      },
      "edit": {
        "href": "https://gorest.co.in/public-api/users/919"
      },
      "avatar": {
        "href": "https://lorempixel.com/250/250/people/?49945"
      }
    }
  }
}
```
Status codes:
> 200 | 401 | 404

### Update a user

#### PATCH /public-api/users/{user_id}

Headers:
> Authorization: Bearer {token}

Payload
```Javascript
//The following fields are the only you need to update on an existing user
{
  "first_name": "Dummy",
  "last_name": "User",
  "gender": "female",
  "dob": "2000-05-18",
  "email": "user@gmail.com",
  "phone": "+13148009255",
  "website": "http://www.gerhold.biz/"
}
```

Response: 
```Javascript
{
  "_meta": {
    "success": true,
    "code": 200,
    "message": "OK. Everything worked as expected.",
    "rateLimit": {
      "limit": 30,
      "remaining": 29,
      "reset": 2
    }
  },
  "result": {
    "id": "920",
    "first_name": "Dummy",
    "last_name": "User",
    "gender": "female",
    "dob": "2000-05-18",
    "email": "user@gmail.com",
    "phone": "+13148009254",
    "website": "http://www.gerhold.biz/",
    "address": "",
    "status": "inactive",
    "_links": {
      "self": {
        "href": "https://gorest.co.in/public-api/users/920"
      },
      "edit": {
        "href": "https://gorest.co.in/public-api/users/920"
      },
      "avatar": {
        "href": "https://lorempixel.com/250/250/people/?66012"
      }
    }
  }
}
```
Status codes:
> 200 | 401 | 404 | 405

### Delete a user

#### DELETE /public-api/users/{user_id}

Headers:
> Authorization: Bearer {token}

Response: 
```Javascript
{
  "_meta": {
    "success": true,
    "code": 204,
    "message": "The request was handled successfully and the response contains no body content.",
    "rateLimit": {
      "limit": 30,
      "remaining": 29,
      "reset": 2
    }
  },
  "result": null
}
```
Status codes:
> 204 | 401 | 404 | 405