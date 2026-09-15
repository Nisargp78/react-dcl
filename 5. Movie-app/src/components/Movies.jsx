import Navbar from "./Navbar";
import Footer from "./Footer";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";

const Card = () => {
  const movies = [
    {
      name: "Dhurandhar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQFIdw3Nr510wCVjbjIatcmdWQ_4PvN4S-A6SEgaFne-AYsfTVMVJHag&s=10",
    },
    {
      name: "Kabir Singh",
      src: "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Dhurandhar 2",
      src: "https://m.media-amazon.com/images/M/MV5BNzdkNjAxNWMtNWY3My00NTI1LTg2YWQtOGI3MDA0NzdhMjEyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Welcome to the Jungle",
      src: "https://preview.redd.it/poster-of-welcome-3-aka-welcome-to-the-jungle-thoughts-v0-bsnxv7zw49nb1.jpg?width=640&crop=smart&auto=webp&s=1fe45d13ad8b261e82fb78da89f6890cf5d47c97",
    },
    {
      name: "Border 2",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmR1lqlJ7SVy-SGQq2I0h-y3QXWDr6BfPKX9D-6rv0U4kGtx4Dro7wEBJ&s=10",
    },
    {
      name: "Saiyaara",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBYXqI7NA1aCPL9Bs1V0Pue4bj4np7Yz4cXISzP1s6dEAID6XCEl_vUsidFX9BLWhTK42Jg&s=10",
    },
    {
      name: "Sikandar",
      src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiimCscWZ7Je9TLcsR6aGIGY6tbYa_nzcNBloBj9kJf9mX2JR7",
    },
    {
      name: "Dhamaal 4",
      src: "https://m.media-amazon.com/images/M/MV5BNTI2YTA2YzktMGUwOS00Njk3LWE0M2MtNDE4YTljNDdjNjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Housefull 5",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD2ZI0iKOuNmz8OdtqNDPWtbLUEwyHSKHiWpGb33sbm7qBed54y-Y8vcLsHOB__EhzZfO&s=10",
    },
    {
      name: "Animal",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82lQF9lHnTFqfmjWWsPA_rIV54gn1cT5a1iT1wDwAvQ&s",
    },
  ];
  return (
    <div className="flex p-6 gap-4 flex-wrap min-h-145 bg-slate-700">
      {movies.map((movie, i) => {
        return (
          <div
            key={i}
            className=" bg-slate-900 w-64 h-90 p-4 border rounded-xl flex flex-col gap-2"
          >
            <Link to="/reviews">
              <img
                src={movie.src}
                className="h-75 w-70 object-cover rounded-lg"
              />
            </Link>
            <h1 className="text-white flex justify-center">{movie.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
