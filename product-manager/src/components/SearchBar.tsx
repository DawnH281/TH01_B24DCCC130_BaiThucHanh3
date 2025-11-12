type Props = {
  keyword: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ keyword, onChange }: Props) {
  return (
    <input
      className="search-input"
      placeholder="Tìm kiếm sản phẩm..."
      value={keyword}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
