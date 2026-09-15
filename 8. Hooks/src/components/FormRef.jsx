import { useRef, useState } from "react";

const FormRef = () => {
  let usernameRef = useRef("");
  let passRef = useRef("");
  // let [userName, setUsername] = useState("")
  // let [password, setPassword] = useState("")
  let [data, setData] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        username: usernameRef.current.value,
        password: passRef.current.value,
      },
    ]);
    // setUsername(usernameRef.current.value)
    // setPassword(passRef.current.value)
    usernameRef.current.value = "";
    passRef.current.value = "";
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 w-100 border-2 p-4"
      >
        <label htmlFor="user">Username</label>
        <input type="text" ref={usernameRef} id="user" className="border-2" />
        <label htmlFor="password">password</label>
        <input
          type="password"
          ref={passRef}
          id="password"
          className="border-2"
        />
        <button className="p-2 border-2 w-20">Submit</button>
        {/* <p>{userName}</p>
        <p>{password}</p> */}
      </form>
      <ul>
        {data.length > 0 &&
          data.map((el) => {
            return (
              <li>
                {el.username}-{el.password}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FormRef;
