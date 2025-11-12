type Props = {
  category: string;
  onCategoryChange: (val: string) => void;
  min: number;
  max: number;
  onMinChange: (val: number) => void;
  onMaxChange: (val: number) => void;
};

export default function Filter({
  category,
  onCategoryChange,
  min,
  max,
  onMinChange,
  onMaxChange,
}: Props) {
  return (
    <div className="filter-bar">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Tất cả danh mục</option>
        <option>Điện tử</option>
        <option>Quần áo</option>
        <option>Đồ ăn</option>
        <option>Sách</option>
        <option>Khác</option>
      </select>

      <input
        type="number"
        placeholder="Giá từ"
        value={min || ""}
        onChange={(e) => onMinChange(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Đến"
        value={max || ""}
        onChange={(e) => onMaxChange(Number(e.target.value))}
      />
    </div>
  );
}
