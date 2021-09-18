const express = require('express')
const cors = require('cors')
const app = express()

app.options('*', cors())

/* let whitelist = ['http://localhost:4200', 'https://github*','https://eu-api.coolkit.cc:8080/api/user/login']
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    if(!origin) return callback(null, true);
    if(whitelist.indexOf(origin) === -1){
      var message = 'The CORS policy for this origin doesnt ' +
                'allow access from the particular origin. Du Sohn!';
      return callback(new Error(message), false);
    }
    return callback(null, true);
  }
})); */