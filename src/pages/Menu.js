import React from "react";
import { useState } from "react";
import "../styles/Menu.css";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  const [isOrderPlaced, setOrderPlaced] = useState(false);

  const handleOrderNow = () => {
    setTimeout(() => {
      setOrderPlaced(true);
    }, 300);
  };

  const handlePopupClose = () => {
    setOrderPlaced(false);
  };
  
  return (
    <>
  
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="h5" gutterBottom component={"div"}>
                  <button onClick={handleOrderNow} className="order-button" >
                    <center><p className="animated-text-item"><p> Order Now Only {menu.price} ₹ </p></p></center>
                  </button>
                  {isOrderPlaced && (
                    <div className="popup-overlay">
                      <div className="popup">
                        <div className="popup-content">
                          <h2>Payment Successful!</h2>
                          <p>Thank you for your order.</p>
                          <button onClick={handlePopupClose} className="close-button">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
    </>
  );
};

export default Menu;
