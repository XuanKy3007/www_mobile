import React from "react";
import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import phone from "../assets/phone.png";
const Item = ( {name, image, sale, new_price, old_price} ) => {
  return (
    <Box>
      <Card sx={{ width: 350 }}>
        <CardMedia
          image={image}
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
          <Typography>{sale}</Typography>
        </Box>
        <CardContent sx={{ width: 350 }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            {name}
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
              {new_price}
            </Typography>
            <Typography
              sx={{
                textDecorationLine: "line-through",
                color: "gray",
              }}
            >
              {old_price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Item;
