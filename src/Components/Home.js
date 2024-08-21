import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Button } from 'react-bootstrap';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import "./Home.css"
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    })
      .then(response => {
        setMovies(response.data.result);
        console.log(response);
      })
      .catch(error => {
        console.error('There was an error fetching the movie data!', error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Movie List</h2>
      {movies.map((movie, index) => (
        <div key={index} className="movie-container d-flex align-items-start mb-4">
          {/* Votes Section */}
          <div className="votes-container d-flex flex-column align-items-center justify-content-center me-3">
            <BsFillCaretUpFill size={20} style={{ cursor: 'pointer' }} />
            <div className="vote-count">{movie.totalVoted}</div>
            <BsFillCaretDownFill size={20} style={{ cursor: 'pointer' }} />
            <div>Votes</div>
          </div>
          
          {/* Image and Description Section */}
          <div className="d-flex flex-grow-1">
            <Card.Img 
              src={movie.poster} 
              alt={movie.title} 
              style={{ 
                height: '150px', 
                objectFit: 'cover', 
                width: '150px',
                marginRight: '1rem'
              }} 
            />

            <Card className="flex-grow-1 border-0">
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <strong>Genre:</strong> {movie.genre}<br />
                  <strong>Director:</strong> {movie.director.join(', ')}<br />
                  <strong>Starring:</strong> {movie.stars.join(', ')}<br />
                  <strong>Released Date:</strong> {movie.releasedDate}<br />
                </Card.Text>
                <Button variant="primary" className="mt-2">Watch Trailer</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default MovieList;
