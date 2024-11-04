import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-dom'
const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingX: 50,
        backgroundColor: '#3E81FF',
        height: '70px',
        mt: 2,
        alignItems: 'center'
      }}
    >
        <Box
          sx={{
            width: '150px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover':{
              backgroundColor: '#fff', 
              '& .text': {
                color: 'black',
              },
            }
          }}
        >
          <Typography
            className='text'
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Trang Chủ
          </Typography>
        </Box>
        <Box
          sx={{
            width: '150px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover':{
              backgroundColor: '#fff', 
              '& .text': {
                color: 'black',
              },
            }
          }}
        >
          <Typography
            className='text'
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Danh Mục
          </Typography>
        </Box>
        <Box
          sx={{
            width: '150px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover':{
              backgroundColor: '#fff', 
              '& .text': {
                color: 'black',
              },
            }
          }}
        >
          <Typography
            className='text'
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Khuyến Mãi
          </Typography>
        </Box>
        <Box
          sx={{
            width: '150px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover':{
              backgroundColor: '#fff', 
              '& .text': {
                color: 'black',
              },
            }
          }}
        >
          <Typography
            className='text'
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Giới thiệu
          </Typography>
        </Box>
        <Box
          sx={{
            width: '150px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover':{
              backgroundColor: '#fff', 
              '& .text': {
                color: 'black',
              },
            }
          }}
        >
          <Typography
            className='text'
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Liên hệ
          </Typography>
        </Box>
    </Box>
  )
}

export default Navbar