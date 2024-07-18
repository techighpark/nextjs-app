
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movies/movie-information";
import MovieVideos from "../../../components/movies/movie-videos";
import { PageProps } from "../../../../.next/types/app/movies/[id]/page";

// export const metadata: Metadata = {
//     title: 'Movie detail'
// }
interface IParams {
    params: { id: string }
}

export async function generateMetadata({ params }: IParams) {
    // cache 하기때문에 여러번 호출해도 된다
    const movie = await getMovie(params.id)
    return {
        title: movie.title
    }
}

const informationSuspense = <div className="bg-white h-40 animate-pulse rounded-md"></div>;
const videosSuspnese = <div className="bg-white h-40 animate-pulse rounded-md"></div>;

export default async function MovieDetailPage(props: PageProps) {
    return (
        <div >
            <Suspense fallback={informationSuspense}>
                <MovieInfo id={props.params.id} />
            </Suspense>
            <Suspense fallback={videosSuspnese}>
                <MovieVideos id={props.params.id} />
            </Suspense>
        </div>
    )
}