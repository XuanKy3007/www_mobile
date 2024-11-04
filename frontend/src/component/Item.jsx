import React from "react";
import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import phone from "../assets/phone.png";
const Item = (props) => {
  return (
    <Box>
      <Card sx={{ width: 350 }}>
        <CardMedia
          image={phone}
          sx={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
            transition: "transform 0.6s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 60,
            height: 30,
            borderRadius: 2,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "red",
            color: "#fff",
            ml: 40,
            mt: -35,
          }}
        >
          <Typography>10%</Typography>
        </Box>
        <CardContent sx={{ width: 350 }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            Phone 01
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 1,
            }}
          >
            <Typography
              sx={{
                color: "red",
                mr: 2,
                fontWeight: "700",
                fontSize: 18,
              }}
            >
              80.000.00
            </Typography>
            <Typography
              sx={{
                textDecorationLine: "line-through",
                color: "gray",
              }}
            >
              100.000.00
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Item;
