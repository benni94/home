/* const express = require('express')
const cors = require('cors')
const app = express()

app.options('*', cors()) */

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

//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.options('*', cors())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/home'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/home/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);