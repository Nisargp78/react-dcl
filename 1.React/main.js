import ReactDOM from "react-dom/client";
import React from "react";

let root = ReactDOM.createRoot(document.getElementById("root"));

let veg = ["potato", "tomato", "onions", "chilli", "garlic", "corriander"];

let ul = (
  <ul>
    {veg.map((el, i) => {
      return (
        <li style={{ backgroundColor: "yellow" }} key={i}>
          {el}
        </li>
      );
    })}
  </ul>
);

// ! Ques -> we have data of students in form of array
let students = [
  {
    name: "abc",
    age: 20,
  },
  {
    name: "pranav",
    age: 24,
  },
];

let studentList = (
  <ol>
    {students.map((el, i) => {
      return (
        <li key={i} style={{ backgroundColor: "yellow" }}>
          {el.name} - {el.age}
        </li>
      );
    })}
  </ol>
);

root.render(
  <div style={{ backgroundColor: "red" }}>
    {ul}
    {studentList}
  </div>,
);
