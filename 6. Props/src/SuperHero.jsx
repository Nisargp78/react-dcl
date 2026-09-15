const MovieList = (data) => {
  return <div>
    <img src={data.img} alt="" width="200px" />
    <h1>{data.name}</h1>
    <p>{data.classicLine}</p>
  </div>;
};

export default MovieList;