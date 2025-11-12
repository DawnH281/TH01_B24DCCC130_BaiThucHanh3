import { Link } from "react-router-dom";
import type { Product } from "../context/ProductContext";

type Props = {
  product: Product;
  onDelete: (id: number) => void;
};

export default function ProductCard({ product, onDelete }: Props) {
  return (
    <div className="product-card">
      <h3>{product.ten}</h3>
      <p><strong>Danh mục:</strong> {product.danhMuc}</p>
      <p><strong>Giá:</strong> {product.gia.toLocaleString()}đ</p>
      <p><strong>Số lượng:</strong> {product.soLuong}</p>
      <div className="card-actions">
        <Link to={`/products/${product.id}`} className="btn">
          Xem
        </Link>
        <Link to={`/edit/${product.id}`} className="btn btn-edit">
          Sửa
        </Link>
        <button
          className="btn btn-delete"
          onClick={() => {
            if (confirm("Bạn có chắc muốn xóa sản phẩm này không?"))
              onDelete(product.id);
          }}
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
