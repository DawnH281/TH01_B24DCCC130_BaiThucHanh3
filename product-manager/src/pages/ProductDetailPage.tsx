import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div className="product-detail">
      <h2>{product.ten}</h2>
      <p><strong>Danh mục:</strong> {product.danhMuc}</p>
      <p><strong>Giá:</strong> {product.gia.toLocaleString()}đ</p>
      <p><strong>Số lượng:</strong> {product.soLuong}</p>
      <p><strong>Mô tả:</strong> {product.moTa}</p>
      <Link to="/" className="btn">← Quay lại</Link>
    </div>
  );
}
