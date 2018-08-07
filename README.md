# BingeFlix
Discover your favorite TV shows and movies with BingeFlix. Whether it's to watch or learn more about the show you like, we've got it all.

## Purpose
BingeFlix is a comprehensive TV show and movie searching application. Users are able to discover their favorite shows and movies by clicking on the link to be redirected to an external website containing more in-depth information, which typically is the main webpage for the particular show/movie.

## Install
Requires Node.js<br>
Requires Mocha<br>
Requires jsdom-global<br>
```
npm install --save-dev --save-exact jsdom jsdom-global
```
## Technologies
This is a full stack application built using Javascript frameworks. Javascript has the ```fetch``` function that is great for parsing data with API. I chose Mocha for unit testing because it provides compatibility for inclusive API tests. I also had to include JSDOM-Global to create a mock DOM in the Node.js environment to perform the actual testing. Hosted on Heroku, the application required an additional PHP conversion due to the fact Heroku doesn't launch webpages built with Javascript, HTML, and CSS.

## If I had more time...
In terms of the user interface, it serves to function properly with simplicity. If I had more time to work on the project, I would include features such as user authentication, reviews for shows/movies, star rating underneath the title, categories/genres, and autocomplete while searching. For the backend, I would include additional testing frameworks such as Chai and Chai-HTTP to create a more comprehensive testing suite. It was also my first time using Mocha and I had wish I had more time to learn about the many different imports available to strengthen the tests.
