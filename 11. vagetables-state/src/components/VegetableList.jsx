import { useState } from "react";
import VegetableCard from "./vegetableCard";

let vegetables = [
  { id: 1, name: "Tomato" },
  { id: 2, name: "Potato" },
  { id: 3, name: "Carrot" },
  { id: 4, name: "Onion" },
  { id: 5, name: "Cabbage" },
  { id: 6, name: "Cauliflower" },
  { id: 7, name: "Spinach" },
  { id: 8, name: "Broccoli" },
  { id: 9, name: "Brinjal" },
  { id: 10, name: "Capsicum" },
];
const VegetableList = () => {
  let [allData, setAllData] = useState(vegetables);
  let handleDelete = (id) => {
    let filtered = allData.filter((vege) => {
      return vege.id != id;
    });
    setAllData(filtered);
  };
  return (
    <div className="flex flex-wrap gap-5 pt-10 justify-center bg-cyan-900 h-screen" >
      {allData.map((vegetable,i) => {
        return (
          <VegetableCard key={i} data={vegetable} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default VegetableList;
