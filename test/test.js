var assert = require('assert');
var jsdom = require('jsdom-global')();
var test = require('../index.js');

describe('Search', function () {
    beforeEach(function() {
        jsdom = require('jsdom-global')()
    });
    afterEach(function(){
        jsdom();
    });
    it('should not search if there is no input', function (done) {
        let input = document.createElement('input');
        let button = document.createElement('button');
        input.setAttribute("id", "searchBar");
        button.setAttribute("id", "searchButton");
        button.addEventListener("click", function (e) { done('should not click'); });
        document.body.appendChild(input);
        document.body.appendChild(button);
        let event = new Event("keypress");
        event.keyCode = 13;
        test.fireEnterKey(event);
        setTimeout(function () { done(); }, 100);
    });
    it('should search only when there is input', function (done) {
        let input = document.createElement('input');
        let button = document.createElement('button');
        input.setAttribute("id", "searchBar");
        input.value = "some value";
        button.setAttribute("id", "searchButton");
        button.addEventListener("click", function (e) { done(); });
        document.body.appendChild(input);
        document.body.appendChild(button);
        let event = new Event("keypress");
        event.keyCode = 13;
        test.fireEnterKey(event);
    });
});
