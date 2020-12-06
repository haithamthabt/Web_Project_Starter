# Web Project Starter

This is a very good web project starter to start any web project using npm, webpack, and material design 

## Version

+ Github Release `v1.0.0`

### Description
On this version `v1.0.0` , we have a good starting point for any other web project, because now we can run the npm run build command and the start command they all work fine.

A starter kit to get you up and running with NPM, webpack and Material Components for the Web. 

This small project has the base line of almost every web project. One of the hardest thing to do is configuring webpack; however, this project has webpack already configured. 

In order for this project to work proberly, the versions of all the dependecies are all compatable and working with each other. Do Not upgrade to any other versions because this will not work and you will need to reconfigure it all from the bottom up.


### Log
- Note build command generate dist folder and then generate the bundle files, the start command process the files on the ram, and I changed teh webpack.config.js file so both commands can have same distination diroctory which is ./dist

- I had an issue with the webpack sass loader so I just turned off the `webpackImporter: false,`

- The name of the bundle files for js and css are main.js and main.css, so you have the option to change it to bundle.js or whatever you want,  you can do that inside   the webpack.config.js




