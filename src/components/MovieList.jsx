import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = [
    {
      title: "The Shawshank Redemption",
      image: "path/to/image1.jpg",
      price: 10.99,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      category: "Drama",
    },
    {
      title: "The Godfather",
      image: "path/to/image2.jpg",
      price: 12.99,
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      category: "Crime",
    },
    {
      title: "The Dark Knight",
      image: "path/to/image3.jpg",
      price: 14.99,
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      category: "Action",
    },
    {
      title: "Pulp Fiction",
      image: "path/to/image4.jpg",
      price: 9.99,
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      category: "Crime",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      image: "path/to/image5.jpg",
      price: 11.99,
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      category: "Fantasy",
    },
    {
      title: "Forrest Gump",
      image: "path/to/image6.jpg",
      price: 10.99,
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      category: "Drama",
    },
    {
      title: "Inception",
      image: "path/to/image7.jpg",
      price: 13.99,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      category: "Sci-Fi",
    },
    {
      title: "The Matrix",
      image: "path/to/image8.jpg",
      price: 12.99,
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      category: "Sci-Fi",
    },
    {
      title: "The Social Network",
      image: "path/to/image9.jpg",
      price: 11.99,
      description:
        "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
      category: "Drama",
    },
    {
      title: "Interstellar",
      image: "path/to/image10.jpg",
      price: 14.99,
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      category: "Sci-Fi",
    },
    {
      title: "Gladiator",
      image: "path/to/image11.jpg",
      price: 11.99,
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      category: "Action",
    },
    {
      title: "Titanic",
      image: "path/to/image12.jpg",
      price: 13.99,
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      category: "Romance",
    },
  ];

  return (
    <div className="movie_list">
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
