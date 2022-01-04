import { useMovies } from "../MoviesContext"
import { Button } from "./Button";

export function SideBar() {
  const {genres, handleClickButton, selectedGenreId} = useMovies();
  // Complete aqui
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}