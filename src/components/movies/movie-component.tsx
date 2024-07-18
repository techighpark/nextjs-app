"use client"

import Link from "next/link";
import styles from '../../styles/movie.module.css'
import { useRouter } from "next/navigation";

export type Movie = {
    title: string,
    id: string,
    poster_path: string
}
interface IMovieProps {
    movie: Movie,
}

export default function MovieComponent({ movie }: IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${movie.id}`)
    }
    return (
        <div className={styles.movie}>
            <img src={movie.poster_path} alt={movie.title} onClick={onClick} />
            <Link prefetch href={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
    )
}