import { useState } from "react";
import type { FormEvent } from "react";
import type { Product } from "../context/ProductContext";

type Props = {
  initial?: Product;
  onSubmit: (product: Product) => void;
};

export default function ProductForm({ initial, onSubmit }: Props) {
  const [form, setForm] = useState<Product>(
    initial || {
      id: 0,
      ten: "",
      danhMuc: "",
      gia: 0,
      soLuong: 0,
      moTa: "",
    }
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.ten || form.ten.trim().length < 3)
      errs.ten = "Tên sản phẩm phải có ít nhất 3 ký tự";
    if (!form.danhMuc) errs.danhMuc = "Phải chọn danh mục";
    if (form.gia <= 0 || isNaN(form.gia))
      errs.gia = "Giá phải là số dương";
    if (form.soLuong <= 0 || isNaN(form.soLuong))
      errs.soLuong = "Số lượng phải là số nguyên dương";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Tên sản phẩm:
        <input
          type="text"
          value={form.ten}
          onChange={(e) => setForm({ ...form, ten: e.target.value })}
        />
        {errors.ten && <span className="error">{errors.ten}</span>}
      </label>

      <label>
        Danh mục:
        <select
          value={form.danhMuc}
          onChange={(e) => setForm({ ...form, danhMuc: e.target.value })}
        >
          <option value="">-- Chọn danh mục --</option>
          <option>Điện tử</option>
          <option>Quần áo</option>
          <option>Đồ ăn</option>
          <option>Sách</option>
          <option>Khác</option>
        </select>
        {errors.danhMuc && <span className="error">{errors.danhMuc}</span>}
      </label>

      <label>
        Giá:
        <input
          type="number"
          value={form.gia}
          onChange={(e) =>
            setForm({ ...form, gia: parseFloat(e.target.value) })
          }
        />
        {errors.gia && <span className="error">{errors.gia}</span>}
      </label>

      <label>
        Số lượng:
        <input
          type="number"
          value={form.soLuong}
          onChange={(e) =>
            setForm({ ...form, soLuong: parseInt(e.target.value) })
          }
        />
        {errors.soLuong && <span className="error">{errors.soLuong}</span>}
      </label>

      <label>
        Mô tả:
        <textarea
          value={form.moTa}
          onChange={(e) => setForm({ ...form, moTa: e.target.value })}
        />
      </label>

      <button type="submit" className="btn btn-primary">
        Lưu
      </button>
    </form>
  );
}
