import MovieCard from "../Components/MovieCard";

const Home = ({ movies, fetchData, setInput, input }) => {
  return (
    <main>
      <div className="max-w-[1300px]  flex-wrap px-5 mx-auto justify-center md:justify-end mt-10 flex items-center">
        <input
          value={input}
          className="mr-3 border py-2 rounded px-3 bg-transparent text-white"
          type="text"
          placeholder="Ejem. Avengers"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-transparent border text-white px-5 py-2 rounded"
          onClick={fetchData}
        >
          Send
        </button>
      </div>
      <section className="section flex w-[300px] md:w-[1300px] mx-auto pt-10 flex-wrap h-[440px] justify-center items-center">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            img={movie.Poster}
            year={movie.Year}
            id={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
