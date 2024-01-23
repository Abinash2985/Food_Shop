import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>

        <p>

        We are beyond thrilled to share the news of the grand opening of "Abinash Food Shop" - your newest culinary destination in the heart of Jamshedpur! 🚀✨</p>
        <br />
        <p>
        👨‍🍳 Location: Nestled in the vibrant city of Jamshedpur, Abinash Food Shop is set to redefine your dining experience. Conveniently located at [Address], our doors are open to welcome you into a world where flavors dance and traditions come alive.
          <br></br>
          🍲 Culinary Magic: At Abinash Food Shop, we take pride in presenting a menu that reflects the rich tapestry of Indian cuisine. From mouthwatering street food delights to soul-soothing comfort meals, our culinary artisans have crafted a symphony of flavors that pay homage to the diverse palate of Jamshedpur.
          <br></br>
          🏡 Cozy Ambiance: Step into a warm and inviting atmosphere that blends modern aesthetics with the charm of a homely setting. Our space is designed to be your haven, where you can unwind, savor delicious dishes, and create lasting memories with friends and family.
          <br></br>
          🍛 Signature Specialties: Prepare your taste buds for an extraordinary journey! Abinash Food Shop introduces signature dishes that are a fusion of authenticity and innovation. Each plate tells a story, and we invite you to join us in this culinary exploration.
          <br></br>
          🍹 Local Flavors, Global Twists: Our bar is stocked with an eclectic array of beverages that perfectly complement our diverse menu. Indulge in refreshing mocktails, classic cocktails, and curated selections to enhance your dining experience.
          <br></br>
          👨‍🍳 Meet Our Maestros: Behind every delectable dish is a team of culinary maestros dedicated to bringing you the finest flavors. Meet our chefs, who have poured their passion into creating a menu that celebrates the essence of Jamshedpur.
          <br></br>
          🎉 Opening Day Extravaganza: Join us on [Opening Date] as we kick off the grand opening festivities! The first [Number] guests will receive a special treat as a token of our gratitude for being part of this momentous occasion.
          <br></br>
          📱 Stay Connected: Follow us on [Social Media Handles] for sneak peeks, exclusive offers, and updates. Your support means the world to us, and we can't wait to share the Abinash Food Shop experience with the wonderful people of Jamshedpur!</p>
      </Box>
    </Layout>
  );
};

export default About;