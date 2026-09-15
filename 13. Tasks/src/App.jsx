import { useState } from "react"
import Password from "./components/Password"
// import Child1 from "./components/Child1"
// import Child2 from "./components/Child2"

const App = () => {
  // let [count, setCount] = useState(0);

  return (
    <div>
      <Password />
      {/* <Child1 setCount={setCount} count={count}/>
      <Child2 count={count}/> */}
    </div>
  )
}

export default App