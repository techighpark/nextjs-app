import { Metadata } from "next";
import styles from '../../styles/home.module.css'
import MovieComponent from "@/components/movies/movie-component";

export const metadata: Metadata = {
    title: "Movies",
}

const API_URL: string = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies(): Promise<any> {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function Movies() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie: any) => (
                <MovieComponent key={movie.id} movie={movie} />
            ))}
        </div>
    )
}