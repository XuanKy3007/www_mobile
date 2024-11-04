import React from 'react'

import { Box } from '@mui/material'
import Item from '../component/Item'
const Home = () => {
  return (
    <Box sx={{flexWrap: 'wrap', display: 'flex', flexDirection: 'row', gap: '100px', mt: 2}}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  )
}

export default Home