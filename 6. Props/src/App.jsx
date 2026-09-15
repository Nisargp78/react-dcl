let SuperHeroList = [
  { name: "Iron Man", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCythtaM-iOKWi0JUUiQtcC3CH8o9bhUDiaFY53ZRWXFa4mGuVRFevtTZlWDusVoP6dl3e&s=10", classicLine: "I am Iron Man." },
  { name: "Captain America", img: "https://media.gq.com/photos/56a15e4ed312acff191b8bf2/16:9/w_2560%2Cc_limit/chris-evans-captain-america.jpg", classicLine: "I can eat them all" },
  { name: "Thor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmfgN3Pr1Jv3vSAy6iZmBO2YGGio4I55rEvB2MV0Hc7tT2P16UWYiYC5_MJvadL48qfJemw&s=10", classicLine: "Bring me Thanos" },
  { name: "Hulk", img: "https://i.ytimg.com/vi/jYQEQXxMAFc/maxresdefault.jpg", classicLine: "I am always angry" },
];

const App = () => {
  return (
    <div>
      {/* {SuperHeroList.map((hero, i) => {
        return (
          <div key={i}>
            <h1>{hero.name}</h1>
            <img src={hero.img} alt={hero.name} />
            <p>{hero.classicLine}</p>
          </div>
        );
      })} */}
      <button>
        <span>Click Me😇</span>
      </button>
      <button>
        <span>🔥 Login</span>
      </button>
    </div>
  );
};
export default App;
