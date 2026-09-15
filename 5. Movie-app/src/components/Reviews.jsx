const Reviews = () => {
  let reviews = [
    {
      movie: "Dhurandhar",
      comment: "Abhi maza aayega na bhidu!!",
      author: "Johnny (Munna Bhai)",
    },
    {
      movie: "Kabir Singh",
      comment: "Maaf karna jara, Gusse me idhar udhar nikal jata hu!!",
      author: "Harmonium vale chacha",
    },
    {
      movie: "Saiyaara",
      comment: "Koi apse pyaar kyu karega !!😭",
      author: "Pookie baba",
    },
    {
      movie: "Animal",
      comment: "Baap pe janaa nahi !!!",
      author: "Dolly Bindra",
    },
    {
      movie: "Border 2",
      comment: "How's the Josh, High Sir!🫡",
      author: "Varun",
    },
    {
      movie: "Welcome to the Jungle",
      comment: "Beta, Tumse na ho payega😞",
      author: "Ramesh",
    },
    {
      movie: "Dhurandhar 2",
      comment: "Dekh raha hai Binod, Ye toh dhoti khol raha hai! 💀",
      author: "Bhushan (Van Rakshash)",
    },
    {
      movie: "Sikandar",
      comment: "Tauba, Tauba, Tauba! Sara mood kharab kar diya!",
      author: "Chacha",
    },
    {
      movie: "Housefull 5",
      comment: "Utha le re deva, Utha le re baba!😐",
      author: "Baburao Ganpatrao Apte",
    },
    {
      movie: "Dhamaal 4",
      comment: "Masst joke mara re ",
      author: "Baburao Ganpatrao Apte",
    },
  ];
  return (
    <div className="p-10 min-h-145 bg-slate-800">
      <div className="flex gap-5 align-center flex-wrap">
        {reviews.map((review, i) => {
          return (
            <div
              key={i}
              className="bg-cyan-700 text-amber-100 w-79 h-53 p-3 rounded-xl flex flex-col gap-3"
            >
              <h2 className="text-2xl ">{review.movie}</h2>
              <div className="h-25 p-3 rounded-2xl bg-cyan-200 text-slate-900">
                <p className="text-lg">{review.comment}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-lg text-sky-100">Author:</p>
                <p className="text-lg text-white"> {review.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
