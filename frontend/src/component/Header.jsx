import React from 'react'
import { Box, Typography, TextField, InputBase } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import shop_logo from '../assets/Shop_logo.png'
const Header = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <img src={shop_logo} alt="" style={{width: 100, height: 100}}/>
            <Typography
                variant='h4'
                fontWeight={700}
            >
                PhoneGO
            </Typography>
        </Box>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid black',
                width: '600px',
                pl: 2,
                borderRadius: 2,
                borderColor: '#3E81FF'
            }}
        >
            <InputBase placeholder='Tìm Kiếm...' size='small' sx={{width: '90%', mt: '4px'}}/>
            <SearchIcon sx={{ml: 2}}/>
        </Box>
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    mr: 6
                }}
            >
                <AccountCircleIcon />
                <Typography
                    variant='body1'
                >
                    Tài khoản
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    mr: 6
                }}
            >
                <ShoppingCartIcon />
                <Typography
                    variant='body1'
                >
                    Tài khoản
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Header