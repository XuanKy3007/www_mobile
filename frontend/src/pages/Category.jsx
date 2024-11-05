import { Box, Button, ButtonGroup, Checkbox, Typography } from "@mui/material";
import Item from "../component/Item";
import phone from "../assets/phone.png";
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
const Category = () => {
  return (
    <Box p={5} sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          width: "20%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonGroup orientation="vertical">{buttons}</ButtonGroup>
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
                gap: 1, // Adjust spacing between checkbox and label
              }}
            >
              <Checkbox />
              <Typography>{chip}</Typography>
            </Box>
          ))}
          <Typography sx={{ fontSize: 20, mt: 10 }}>Ram:</Typography>
          {["2GB", "4GB", "6GB", "8GB"].map((chip) => (
            <Box
              key={chip}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // Adjust spacing between checkbox and label
              }}
            >
              <Checkbox />
              <Typography>{chip}</Typography>
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
          gap: "50px",
          width: "80%",
        }}
      >
        <Item
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        ></Item>
        <Item
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        ></Item>
        <Item
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        ></Item>
        <Item
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        ></Item>
        <Item
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        ></Item>
        <Item
          name={"Phone01"}
          image={phone}
          new_price={"80.000.00"}
          old_price={"100.000.00"}
          sale={"10%"}
        ></Item>
      </Box>
    </Box>
  );
};
export default Category;
