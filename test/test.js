var assert = require('assert');
var jsdom = require('jsdom-global')();
global.fetch = require('node-fetch');
var test = require('../index.js');


describe('Test suite', function() {
  beforeEach(function() {
      jsdom = require('jsdom-global')()
  });
  afterEach(function(){
      jsdom();
  });
  describe('enter key', function() {
      it('should not search if there is no input', function(done) {
          let input = document.createElement('input');
          let button = document.createElement('button');
          input.setAttribute('id', 'searchBar');
          button.setAttribute('id', 'searchButton');
          button.addEventListener('click', function (e) { done('should not click'); });
          document.body.appendChild(input);
          document.body.appendChild(button);
          let event = new Event('keypress');
          event.keyCode = 13;
          test.fireEnterKey(event);
          setTimeout(function() { done(); }, 100);
      });
      it('should search only when there is input', function(done) {
          let input = document.createElement('input');
          let button = document.createElement('button');
          input.setAttribute('id', 'searchBar');
          input.value = 'marvel';
          button.setAttribute('id', 'searchButton');
          button.addEventListener('click', function(e) { done(); });
          document.body.appendChild(input);
          document.body.appendChild(button);
          let event = new Event('keypress');
          event.keyCode = 13;
          test.fireEnterKey(event);
      });
  });
  describe('display homepage', function() {
    it('should display popular movies', function(done) {
      let div = document.createElement('div');
      div.setAttribute('id', 'movie-list');
      let movieList = document.getElementById('movie-list');
      document.body.appendChild(div);
      test.showPopularMovies();
      if (movieList.hasChildNodes()) done();
    });
  });
  describe('searching', function() {
    it('should display search results', function(done) {
      let div = document.createElement('div');
      div.setAttribute('id', 'movie-list');
      let movieList = document.getElementById('movie-list');
      let input = document.createElement('input');
      div.setAttribute('id', 'searchBar');
      input.value = 'marvel';
      let button = document.createElement('button');
      button.setAttribute('id', 'searchButton');
      button.addEventListener('click', function(e) { done(); });
      document.body.appendChild(div);
      document.body.appendChild(input);
      document.body.appendChild(button);
      if (movieList.hasChildNodes()) done();
    });
  });
});
