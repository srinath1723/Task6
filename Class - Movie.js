class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  static getPG(movies) {
      return movies.filter(movie => movie.rating == "PG");
    }
  }
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");// Creating an instance of Movie with the provided details
  //// Testing the getPG method with an array of movies
  const movies = [
    new Movie("Movie 1", "Studio 1", "PG-13"),
    new Movie("Movie 2", "Studio 2", "PG"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  