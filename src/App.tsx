import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { fetchProducts } from "./store/slices/productsSlice";
import { useAppDispatch } from "./hook";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <Link to={"/about"}>ffff</Link>
      <Routes>
        <Route path="*" element={<ProductsPage />} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
