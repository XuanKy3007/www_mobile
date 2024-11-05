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
const CustomerList = () => {
  const customer = [
    { id: 1, name: 'Nguyễn Văn A', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 2, name: 'Nguyễn Văn B', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 3, name: 'Nguyễn Văn C', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 4, name: 'Nguyễn Văn D', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 5, name: 'Nguyễn Văn E', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 6, name: 'Nguyễn Thị A', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 7, name: 'Nguyễn Thị B', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 8, name: 'Nguyễn Thị C', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 9, name: 'Nguyễn Thị D', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
    { id: 10, name: 'Nguyễn Thị E', gender: "Male", phoneNumber: '0909909909', address: "ABC st, XYZ captital" },
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
      >Danh Sách Khách Hàng</Typography>
      <TableContainer component={Paper} style={{maxHeight: 650}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Tên khách hàng</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Số điện thoại</TableCell>
            <TableCell>Địa chỉ</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map((customer, index) => (
            <TableRow key={customer.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.gender}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>
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

export default CustomerList