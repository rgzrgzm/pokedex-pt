import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokedex from "./pages/pokedex/pokedex";
import PokemonDetail from "./pages/pokemonDetail/PokemonDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/details/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
