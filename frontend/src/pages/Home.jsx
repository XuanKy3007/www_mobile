import React from "react";
import banner from '../assets/banner.png'
import { Box, Typography, Button, Divider } from "@mui/material";
import Item from "../component/Item";
import phone from "../assets/phone.png";

const Home = () => {

  return (
    <Box p={4}>
      <img src={banner} alt="" style={{width: '100%', height: 550}}/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "red",
            }}
          >
            SẢN PHẨM MỚI
          </Typography>
          <Divider
            sx={{
              width: "300px",
              backgroundColor: "red",
              height: 2,
            }}
          />
        </Box>
        <Button variant="contained">Sort</Button>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          mt: 2,
        }}
      >
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "red",
            }}
          >
            SIÊU ƯU ĐÃI
          </Typography>
          <Divider
            sx={{
              width: "300px",
              backgroundColor: "red",
              height: 2,
            }}
          />
        </Box>
        <Button variant="contained">Sort</Button>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          mt: 2,
        }}
      >
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
        <Item name="Phone 1" image={phone} sale="10%" new_price="80.000.00" old_price="100.00.000"/>
      </Box>
    </Box>
  );
};

export default Home;
