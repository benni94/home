const express=require("express"),cors=require("cors"),app=express();let whitelist=["http://localhost:4200","https://github*","https://eu-api.coolkit.cc:8080/api/user/login"];console.log("hier cors"),app.use(cors({origin:function(e,r){return e&&-1===whitelist.indexOf(e)?r(new Error("The CORS policy for this origin doesnt allow access from the particular origin. Du Sohn!"),!1):r(null,!0)}}));