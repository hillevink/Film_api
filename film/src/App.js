import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Layout from './components/Layout';
import Nav from './components/Nav';
// import filmList from './data/filmList';

function App() {
  const [films, setFilms] = useState([])
  const [searchValue, setSearchValue] = useState("toy story")
  
  const getFilm = async(searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e03a1442&type=movie`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setFilms(responseJson.Search)
    }

  }

  useEffect(() => {
    getFilm(searchValue)
  }, [searchValue])

  return (
    <Layout>
      <Nav heading="Films" setSearchValue={setSearchValue} searchValue={searchValue} />
      <section>
        <FilmList films={films} />
      </section>
    </Layout>
  );
}

export default App;
