const FilmList = ({films}) => {

  return (
    <>
      {films?.map((film) => (
        <article key={film.imdbID}>
          <h2>{film.Title} ({film.Year})</h2>
          <img src={film.Poster} alt="Film poster"></img>
        </article>
      ))}
    </>
  )
}

export default FilmList;