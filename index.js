'use strict';

let test = {};

let movieList = document.getElementById('movie-list');

test.showPopularMovies = function() {
  fetch("https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&sort_by=popularity.desc&page=1&format=json")
    .then(function (response) {
      return response.json();
    }).then(function (responseText) {
      if (responseText) {
        let results = responseText.results;
        results.map(movie => {
          let movieId = movie.id;
          let div = document.createElement('div');
          div.setAttribute('class', 'movie');
          let a = document.createElement('a');
          fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&format=json`)
            .then(function (response) {
              return response.json();
            }).then(function (responseText) {
              if (responseText) {
                let homepage = responseText.homepage;
                let p = document.createElement('p');
                p.setAttribute('class', 'title');
                p.innerHTML = movie.original_name;
                a.append(p);
                if (homepage) {
                  a.setAttribute('href', homepage);
                  div.append(a);
                } else {
                  div.append(a);
                }
                let imagePath = `http://image.tmdb.org/t/p/w185/${responseText.poster_path}`;
                let img = document.createElement('img');
                if (responseText.poster_path) {
                  img.setAttribute('src', imagePath);
                  a.append(img);
                } else {
                  imgTag.setAttribute('src', 'https://www.puc.edu/__data/assets/image/0014/4172/no_photo.jpg');
                  a.append(img);
                }
                movieList.append(div);
              }
            })
        })
      }
    })
}

test.searchMovies = function() {
  let input = document.getElementById('searchBar').value;
  if (input) {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=${input}&page=1&format=json`)
      .then(function (response) {
        return response.json();
      }).then(function (responseText) {
        if (responseText.total_results > 0) {
          movieList.innerHTML = "";
          let results = responseText.results;
          results.map(movie => {
            let movieId = movie.id;
            let a = document.createElement('a');
            let div = document.createElement('div');
            fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&format=json`)
              .then(function (response) {
                return response.json();
              }).then(function (responseText) {
                if (responseText) {
                  let homepage = responseText.homepage;
                  div.innerHTML = movie.original_name;
                  if (homepage) {
                    a.setAttribute('href', homepage);
                    a.append(div);
                  } else {
                    a.append(div);
                  }
                  let imagePath = `http://image.tmdb.org/t/p/w185/${responseText.poster_path}`;
                  let imgTag = document.createElement('img');
                  if (responseText.poster_path) {
                    imgTag.setAttribute('src', imagePath);
                    a.append(imgTag);
                  } else {
                    imgTag.setAttribute('src', 'https://www.puc.edu/__data/assets/image/0014/4172/no_photo.jpg');
                    a.append(imgTag);
                  }
                  movieList.append(a);
                }
              })
          })
        } else {
          movieList.innerHTML = "No movies found."
        }
      });
    }
}

test.fireEnterKey = function(event) {
  let input = document.getElementById('searchBar').value;
  if (event.keyCode == 13 && input)
    document.getElementById('searchButton').click();
}

module.exports = test;
