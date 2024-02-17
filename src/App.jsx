import { useEffect, useState } from "react";
import "./dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductPage from "./pages/admin/product";
import DashboardPage from "./pages/admin/dashboard";
import { Route, Routes } from "react-router-dom";
import {
  addProduct,
  getProduct,
  removeProductById,
  updateProduct,
} from "./api/product";
import { ToastContainer, toast } from "react-toastify";
import ProductAddPage from "./pages/admin/product-add";
import ProductEditPage from "./pages/admin/product-edit";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ProductPageWebsite from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProduct();
      setProducts(data);
    })();
  }, []);

  const onHandleRemove = async (id) => {
    const confirm = window.confirm("Are you sure???");
    if (confirm) {
      try {
        await removeProductById(id);
        toast.success("Xóa sản phẩm thành công");
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        toast.error("Xóa sản phẩm không thành công");
      }
    }
  };

  const onHandleAdd = async (product) => {
    try {
      const data = await addProduct(product);
      toast.success("Thêm sản phẩm thành công");
      // reRender
      setProducts([...products, data]);
    } catch (error) {
      toast.error("Thêm sản phẩm không thành công");
    }
  };

  const onHandleUpdate = async (product) => {
    try {
      await updateProduct(product);
      toast.success("Cập nhật sản phẩm thành công");
      // reRender
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
    } catch (error) {
      toast.error("Cập nhật sản phẩm không thành công");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<h1>Home page</h1>} />
          <Route path="about" element={<h1>About page</h1>} />
          <Route path="products" element={<ProductPageWebsite products={products}/>} />
          <Route path="products/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route
            path="products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="products/add"
            element={<ProductAddPage onAdd={onHandleAdd} />}
          />
          <Route
            path="products/:id/edit"
            element={<ProductEditPage onUpdate={onHandleUpdate} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
