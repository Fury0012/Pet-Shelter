import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import AllPets from "./pages/AllPets";
import CreatePet from "./pages/CreatePet";
import UpdatePet from "./pages/UpdatePet";
import OnePet from "./pages/OnePet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPets />} />
        <Route path='/createpet' element={<CreatePet />} />
        <Route path='/pets/update/:id' element={<UpdatePet />} />
        <Route path='/pets/:id' element={<OnePet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </div>
  );
}

export default App;