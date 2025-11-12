import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { ProductContext } from "../context/ProductContext";

export default function EditProductPage() {
  const { id } = useParams();
  const { products, updateProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  const handleSubmit = (updated: typeof product) => {
    updateProduct(updated);
    navigate("/");
  };

  return (
    <div>
      <h2>Chỉnh sửa sản phẩm</h2>
      <ProductForm initial={product} onSubmit={handleSubmit} />
    </div>
  );
}
