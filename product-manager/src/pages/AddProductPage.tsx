import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { ProductContext, type Product } from "../context/ProductContext";

export default function AddProductPage() {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (p: Product) => {
    addProduct(p);
    navigate("/");
  };

  return (
    <div>
      <h2>Thêm sản phẩm mới</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
