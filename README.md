# Movie-Library-Web

## How To Install

### Step 1
Create a .env file in the backend folder and add your own MongoDB key which links to your own MongoDB database.
Also create and add a secret key used for password hashing .

```
.env file template 

ATLAS_URI='your mongodb connection uri'
PORT='port no.' (default : 4000)
SECRET_KEY = 'Your Secret Key' 

```


### Step 2
Navigate to backend folder and install all node dependencies

```

cd backend/
npm i

```

### Step 3
Navigate to client folder and install all node dependencies

```

cd front/
npm i

```

## How To Run

### Step 1
Navigate to backend folder and start the server

```

cd backend/
node server.js

```

### Step 2
Navigate to frontend folder and start the react-scripts

```

cd front/
npm start

```


Now, You can Signin or register to use the application .










