import ProductCard from "./ProductCard";
import type { Product } from "../context/ProductContext";

type Props = {
  products: Product[];
  onDelete: (id: number) => void;
};

export default function ProductList({ products, onDelete }: Props) {
  if (products.length === 0) return <p>Không có sản phẩm nào.</p>;

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}
