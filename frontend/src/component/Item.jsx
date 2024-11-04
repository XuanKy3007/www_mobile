import React from 'react'
import { Box, Card, Typography, CardMedia, CardContent } from '@mui/material'
import phone from '../assets/phone.png'
const Item = ( props ) => {
  return (
    <Box>
        <Card sx={{maxWidth: 350}}>
            <CardMedia 
                image={phone}
                sx={{
                    width: '100%',
                    height: '300px'
                }}
            />
            <CardContent sx={{width: 350}}>
                <Typography
                    sx={{
                        fontWeight: '700',
                        fontSize: 20
                    }}
                >
                    Phone 01
                </Typography>
                <Typography>
                    100000000000
                </Typography>
                <Typography sx={{
                    color: 'red'
                }}>
                    200000000000
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Item