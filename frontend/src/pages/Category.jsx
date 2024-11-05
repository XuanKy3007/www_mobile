import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Slider,
  Typography,
} from "@mui/material";
import Item from "../component/Item";
import phone from "../assets/phone.png";
import { useState } from "react";

const Category = () => {
  const buttons = [
    <Button sx={{ width: "100%", fontSize: 20 }}>Sản phẩm mới</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Ưu đãi</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Iphone</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>SamSung</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Xiaomi</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Oppo</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Realme</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Oneplus</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Nokia</Button>,
    <Button sx={{ width: "100%", fontSize: 20 }}>Sony</Button>,
  ];

  const [value, setValue] = useState([0, 50000000]);

  const marks = [
    { value: 0, label: "0đ" },
    { value: 35000000, label: "35000000đ" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}đ`;
  }

  return (
    <Box p={5} sx={{ display: "flex" }}>
      <Box
        sx={{
          position: "sticky", // Make it stick to the viewport
          top: 20, // Add some space from the top
          height: "100vh",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto", // Enable scroll if content overflows
        }}
      >
        <ButtonGroup orientation="vertical">{buttons}</ButtonGroup>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            mt: 10,
          }}
        >
          <Typography sx={{ fontSize: 20 }}>Giá:</Typography>
          <Slider
            onChange={handleChange}
            min={0}
            value={value}
            max={35000000}
            step={5000000}
            marks={marks}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 10,
          }}
        >
          <Typography sx={{ fontSize: 20 }}>Chip:</Typography>
          {["MediaTek", "Qualcomm", "Apple", "Samsung"].map((chip) => (
            <Box
              key={chip}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Checkbox />
              <Typography>{chip}</Typography>
            </Box>
          ))}
          <Typography sx={{ fontSize: 20, mt: 10 }}>Ram:</Typography>
          {["2GB", "4GB", "6GB", "8GB"].map((ram) => (
            <Box
              key={ram}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Checkbox />
              <Typography>{ram}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          mt: 2,
          gap: "30px",
          width: "80%",
          ml: 3, // Add margin to separate from sidebar
        }}
      >
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
        <Item
          id={1}
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        />
      </Box>
    </Box>
  );
};

export default Category;
