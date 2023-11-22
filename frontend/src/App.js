import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/Contexts/AppContext";
import "./App.css";
import Home from "./components/Home/Home";
import DogsPage from "./components/Dogs/DogsPage";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // const [allDogs, setAllDogs] = useState([]);
  // const [myCart, addToCart] = useState([{}]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get("/v1/dogs");
  //     return res;
  //   };
  //   getData()
  //     .then((res) => setAllDogs(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <AppProvider>
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<DogsPage />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
