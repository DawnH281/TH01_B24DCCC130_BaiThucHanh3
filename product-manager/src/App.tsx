import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import './App.css';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>🛒 Quản lý Sản phẩm</h2>
        <div>
          <Link to="/">Trang chủ</Link>
          <Link to="/add">Thêm sản phẩm</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </div>
    </div>
  );
}
