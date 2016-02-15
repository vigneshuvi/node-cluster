# Node Cluster

Simple Node Service Manager is useful to create RESTful web services using Express and Node.js and test performance with cluster.

##Table of contents :

    1. Environment setup
    2. Run web server with Cluster 
    3. Run web server without Cluster
    4. Load test


####1. Environment setup

    -   Install node and load test module gloably. Command : `sudo npm install -g loadtest`
    -   Clone or Download the Node Cluster repostory [`https://github.com/vigneshuvi/node-cluster.git`](https://github.com/vigneshuvi/node-cluster.git)* .
    -   Open a terminal and move to `node-cluster` directory. Command : `cd node-cluster`
    -   Install requires dependency modules. Command : `sudo npm install`
    -   Environment ready for load testing our application.


####2. Run web server with Cluster
    
    -   Open a terminal 
    -   Run web server with cluster. Command : `node app-with-cluster.js`
    -   Open a another terminal
    -   loadtest http://localhost:3000/ -t 20 -c 10 --keepalive --rps 2000
    -   Get the results about our load test.


####3. Run web server without Cluster
    
    -   Open a terminal 
    -   Run web server without cluster. Command : `node app-without-cluster.js`
    -   Open a another terminal
    -   loadtest http://localhost:4000/ -t 20 -c 10 --keepalive --rps 2000
    -   Get the results about our load test.


####4. Load test
    
    -   Open a terminal 
    -   Run load test for the above web servers without cluster. Command : `node app-test.js`
    -   Get the results about our load test.

##Reference

    -   https://www.npmjs.com/package/loadtest
    -   http://expressjs.com/en/starter/installing.html

___

#### Do you like it?

Do you like this repo? Share it on Twitter, Facebook, Google+ or anywhere you like so that more of us can use it and help. Thanks!

Created by [Vignesh](http://vigneshuvi.github.io/) 

![alt text][logo]

[logo]: https://github.com/vigneshuvi/vigneshuvi.github.io/blob/master/favicon.ico/android-icon-48x48.png
