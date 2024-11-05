import React from 'react'
import { Box, Typography, InputBase } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <Box 
        display={'flex'} 
        alignItems={'center'} 
        justifyContent={'space-between'} 
        p={5}
        sx={{
            backgroundColor: '#fff',
            borderRadius: 3
        }}
    >
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          width: "600px",
          pl: 2,
          borderRadius: 2,
          borderColor: "#3E81FF",
        }}
      >
        <InputBase
          placeholder="Tìm Kiếm..."
          size="small"
          sx={{ width: "90%", mt: "4px" }}
        />
        <SearchIcon sx={{ ml: 2 }} />
      </Box>
      <Box
          sx={{
            display: "flex",
            mr: 6,
          }}
        >
          <AccountCircleIcon />
          <Typography variant="body1">Tài khoản</Typography>
        </Box>
    </Box>
  )
}

export default Header