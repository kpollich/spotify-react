# Spotify Search with React

Just a little proof of concept/learning experience to search Spotify using their open search API, and to render results using React.

# Running it

Just run `npm install && npm start` from the project root and you'll get a webpack-dev-server instance running on localhost:8080. Or if you're me you'll only be able to access it from 127.0.0.1:8080 for unexplained and mysterious reasons. Navigate to `localhost:8080/webpack-dev-server/index.html` to view the app, and to get live reloading functionality. See [webpack's docs](https://webpack.github.io/docs/webpack-dev-server.html) for more info.

# More Info

JS/JSX code lives in `src/`. All code is ES6 transpiled via the babel loader for webpack. The webpack config is slightly modified from a tutorial I was following somewhere, I don't remember where. I'm sure I'm using antipatterns all over the place here and I'm definitely open to code review if for some reason someone feels they want to do that. Issues/PR's are welcome.
