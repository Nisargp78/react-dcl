const Main = () => {
  
let students = [
  {
    name: "Nisarg",
    age: 21,
    qualification: "BE",
  },
  {
    name: "Yashvi",
    age: 20,
    qualification: "BE",
  },
  {
    name: "Ridham",
    age: 20,
    qualification: "BCOM",
  },
  {
    name: "Abhishek",
    age: 22,
    qualification: "BCA",
  },
];

  return (
    <div style={{ backgroundColor: '#44A1A4', padding: '30px 20px', height: "53vh", borderRadius: '10px' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: "wrap" }}>
        {students.map((student, i) => {
          return (
            <div key={i} style={{ backgroundColor: '#D8FFC5', width: '180px', height: '155px', padding: '15px', borderRadius: '12px' }}>
              <h2 style={{ fontSize: '26px' }}>{student.name}</h2>
              <p style={{ fontSize: '18px' }}>Age: {student.age}</p>
              <p style={{ fontSize: '18px' }}>Qualification: {student.qualification}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Main