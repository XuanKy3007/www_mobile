import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box
} from '@mui/material';
const ProductList = () => {
  const products = [
    { id: 1, name: 'Sản phẩm A', quantity: 10, type: 'Google Pixel', price: 10000 },
    { id: 2, name: 'Sản phẩm B', quantity: 5, type: 'Google Pixel', price: 20000 },
    { id: 3, name: 'Sản phẩm C', quantity: 20, type: 'Google Pixel', price: 15000 },
    { id: 4, name: 'Sản phẩm A', quantity: 10, type: 'Google Pixel', price: 10000 },
    { id: 5, name: 'Sản phẩm B', quantity: 5, type: 'Google Pixel', price: 20000 },
    { id: 6, name: 'Sản phẩm C', quantity: 20, type: 'Google Pixel', price: 15000 },
    { id: 7, name: 'Sản phẩm A', quantity: 10, type: 'Google Pixel', price: 10000 },
    { id: 8, name: 'Sản phẩm B', quantity: 5, type: 'Google Pixel', price: 20000 },
    { id: 9, name: 'Sản phẩm C', quantity: 20, type: 'Google Pixel', price: 15000 },
    { id: 10, name: 'Sản phẩm A', quantity: 10, type: 'Google Pixel', price: 10000 },
    { id: 11, name: 'Sản phẩm B', quantity: 5, type: 'Google Pixel', price: 20000 },
    { id: 12, name: 'Sản phẩm C', quantity: 20, type: 'Google Pixel', price: 15000 },
  ];
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#fff',
        borderRadius: 2
      }}
    >
      <Typography
        variant='h4'
        fontWeight={700}
        mb={2}
      >Danh Sách Sản Phẩm</Typography>
      <TableContainer component={Paper} style={{maxHeight: 650}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell>Số lượng</TableCell>
            <TableCell>Loại</TableCell>
            <TableCell>Giá thành</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small" style={{ marginRight: '5px' }}>
                  Update
                </Button>
                <Button variant="contained" color="error" size="small">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  )
}

export default ProductList