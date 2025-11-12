import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const { products, deleteProduct } = useContext(ProductContext);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchKeyword = p.ten.toLowerCase().includes(keyword.toLowerCase());
      const matchCategory = category ? p.danhMuc === category : true;
      const matchMin = min ? p.gia >= min : true;
      const matchMax = max ? p.gia <= max : true;
      return matchKeyword && matchCategory && matchMin && matchMax;
    });
  }, [products, keyword, category, min, max]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const currentProducts = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <SearchBar keyword={keyword} onChange={setKeyword} />
      <Filter
        category={category}
        onCategoryChange={setCategory}
        min={min}
        max={max}
        onMinChange={setMin}
        onMaxChange={setMax}
      />

      <ProductList products={currentProducts} onDelete={deleteProduct} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <p>
        Tổng: {filtered.length} sản phẩm – Trang {page}/{totalPages || 1}
      </p>
    </div>
  );
}
