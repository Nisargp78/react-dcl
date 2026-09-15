import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard.jsx";
import toast from "react-hot-toast";

const UserList = () => {
  let [data, setData] = useState(null);

  let getData = async () => {
    let res = await axios.get("http://localhost:3000/users");
    if (res.status == 200) {
      setData(res.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let addToCart = async (user) => {
    let alreadyExist = await axios.get(
      `http://localhost:3000/cart/?email=${user.email}`,
    );
    if (alreadyExist.data.length == 0) {
      let res = await axios.post("http://localhost:3000/cart", user);
      if (res.status == 201) {
        toast.success("User added to cart");
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Already Exist");
    }
  };

  let deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`);
    let filtered = data.filter((el) => {
      return el.id != id;
    });
    setData(filtered);
    // setData(data.filter((el) => el.id != id));
  };

  return (
    <div className="flex flex-wrap gap-5 items-center p-8 bg-slate-950 self-start">
      {data?.map((el) => {
        return (
          <UserCard
            key={el.id}
            data={el}
            deleteUser={deleteUser}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};

export default UserList;
