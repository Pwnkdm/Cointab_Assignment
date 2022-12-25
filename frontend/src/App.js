import { Route, Routes } from "react-router-dom";
import Home from "./componants/Home";
import Profiles from "./componants/Profiles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="details" element={<Profiles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
