##Node Web API

An example setting up a Node.js server with express and connecting it to mongoDB. Using mongoose and REST to get, post, update and delete data.

Also uses a pet server as an interface to the dog and cat servers which have their own mongo databases.

###Async Requests
We have multiple asynchronous requests that need to get done e.g. getting back all cats and all dogs via the pets server. We want to manage them so when they are all done we can grab the data and merge them together then display them.

The Async module allows you to run your requests in sequence, parallel or stage them up do a few and wait then a few more.  

##Set up
* mongoDB installed
* npm forever module installed
* npm nodemon installed
``` npm install ```
Run the following:
``` forever start cat_server.js ```
``` forever start dog_server.js ```
``` nodemon pet_server.js ```
* Add cats and dogs via postman(chrome plugin) POST request. Exmample body is ```{"name":"jim","age":"14","type":"alley"}```.
* Pull back the pets at ```http://localhost:3002```
