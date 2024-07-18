const URL: string = 'https://nomad-movies.nomadcoders.workers.dev/movies';
async function getMovies(): Promise<any> {
  await new Promise((res) => setTimeout(res, 5000))
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}


export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  )
}