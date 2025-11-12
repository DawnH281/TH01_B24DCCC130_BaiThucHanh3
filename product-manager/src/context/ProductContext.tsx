import { createContext, useReducer, type ReactNode } from "react";
import { productReducer } from "./productReducer";
import { initialProducts } from "../data/initialProducts";

export type Product = {
  id: number;
  ten: string;
  danhMuc: string;
  gia: number;
  soLuong: number;
  moTa: string;
};

type ProductContextType = {
  products: Product[];
  addProduct: (p: Product) => void;
  updateProduct: (p: Product) => void;
  deleteProduct: (id: number) => void;
};

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const addProduct = (p: Product) =>
    dispatch({ type: "ADD_PRODUCT", payload: p });

  const updateProduct = (p: Product) =>
    dispatch({ type: "UPDATE_PRODUCT", payload: p });

  const deleteProduct = (id: number) =>
    dispatch({ type: "DELETE_PRODUCT", payload: id });

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
