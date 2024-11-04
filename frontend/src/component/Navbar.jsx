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
            }
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              '&:hover':{
                color: '#000'
              }
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
            }
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              '&:hover':{
                color: '#000'
              }
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
            }
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              '&:hover':{
                color: '#000'
              }
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
            }
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              '&:hover':{
                color: '#000'
              }
            }}
          >
            Liên hệ
          </Typography>
        </Box>
    </Box>
  )
}

export default Navbar