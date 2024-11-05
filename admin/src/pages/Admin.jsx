import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../component/ProductList'
import AddProduct from '../component/AddProduct'
import CustomerList from '../component/CustomerList'
import AddCustomer from '../component/AddCustomer'
import Supplier from '../component/Supplier'
import Statistics from '../component/Statistics'
const Admin = () => {
  return (
    <div>
        <Routes>
            <Route path="/DanhSachSanPham" element={<ProductList />} />
            <Route path="/ThemSanPham" element={<AddProduct />} />
            <Route path="/DanhSachKhachHang" element={<CustomerList />} />
            <Route path="/ThemKhachHang" element={<AddCustomer />} />
            <Route path="/NhaCungCap" element={<Supplier />} />
            <Route path="/ThongKe" element={<Statistics />} />
        </Routes>
    </div>
  )
}

export default Admin