import { useState } from "react";
import axios from "axios";
import { v4 as randomId } from "uuid";
import toast from "react-hot-toast";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
      gender,
      email,
      subject,
      id: randomId(),
    };
    let res = await axios.post("http://localhost:3000/users", user);
    console.log(res);

    if (res.status == 201) {
      toast.success("User Registered Successfully!!");
    }
    setUsername("");
    setPassword("");
    setEmail("");
    setGender("");
    setSubject("");
  };
  return (
    <div className="min-h-[calc(100vh-7rem)] flex flex-col justify-center items-center bg-surface py-16 px-4">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-ink tracking-tight">Create Account</h2>
        <p className="text-ink-muted mt-2 text-base">Join us and start shopping</p>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo to-violet mx-auto mt-4 rounded-full"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-card shadow-xl shadow-black/5 border border-gray-100 p-8 rounded-2xl w-full max-w-lg"
      >
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center gap-6 text-ink text-base py-2">
          <span className="font-medium">Gender :</span>
          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-ink-muted">Male</label>
            <input
              type="radio"
              value="male"
              checked={gender == "male"}
              onChange={(e) => setGender(e.target.value)}
              className="w-4 h-4 accent-indigo cursor-pointer"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-ink-muted">Female</label>
            <input
              type="radio"
              value="female"
              checked={gender == "female"}
              onChange={(e) => setGender(e.target.value)}
              className="w-4 h-4 accent-indigo cursor-pointer"
            />
          </div>
        </div>
        <div>
          <select
            name=""
            id=""
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base cursor-pointer"
          >
            <option value="" className="text-ink-muted">Select a Subject</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">React.js</option>
          </select>
        </div>
        <button className="mt-2 p-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo to-violet hover:shadow-lg hover:shadow-indigo/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-base tracking-wide">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;