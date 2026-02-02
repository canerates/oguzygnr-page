import React, { useState, useEffect } from "react"
import { Container, Grid, Button, Typography, styled } from "@mui/material"
import * as Scroll from "react-scroll"

/* ROOT */
const StyledHeroRoot = styled("section")(() => ({
  position: "relative",
  height: "90vh",
  minHeight: "600px",
  backgroundColor: "#E5E9EB",
  overflow: "hidden",
}));

/* BACKGROUND IMAGE */
// const StyledHeroBackground = styled("div")<{ img: string }>(({ img }) => ({
//   position: "absolute",
//   inset: 0,
//   backgroundImage: `url(${img})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   zIndex: 0,
// }));

/* OVERLAY */
const StyledHeroOverlay = styled("div")(() => ({
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.05)", // lighter than before
  zIndex: 1,
}));

/* CONTENT */
const StyledHeroContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const StyledHeroContent = styled("div")(() => ({
  maxWidth: "850px",
  padding: "0 1.5rem",
  color: "#fff",
}));

/* TEXT */
const StyledHeroTitle = styled(Typography)(() => ({
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(40px, 6vw, 72px)",
  letterSpacing: "-1px",
  marginBottom: "20px",
}));

const StyledHeroSubtitle = styled(Typography)(() => ({
  fontSize: "clamp(18px, 2vw, 24px)",
  fontWeight: 200,
  fontStyle: "italic",
  opacity: 0.95,
  marginBottom: "40px",
}));

/* BUTTON */
const StyledHeroButton = styled(Button)(() => ({
  backgroundColor: "#d17a48",
  color: "#fff",
  padding: "20px 50px",
  textTransform: "uppercase",
  letterSpacing: "3px",
  fontSize: "13px",
  fontWeight: 600,
  borderRadius: 0,
  boxShadow: "0 10px 20px rgba(209, 122, 72, 0.2)",
  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",

  "&:hover": {
    backgroundColor: "#d17a48",
    transform: "translateY(-5px)",
    boxShadow: "0 15px 30px rgba(209, 122, 72, 0.3)",
    letterSpacing: "4px",
  },
}));

const Hero = () => {
  return (
    <StyledHeroRoot id="Hero" data-scroll="Hero">
      <StyledHeroOverlay />

      <StyledHeroContainer maxWidth="lg">
        <StyledHeroContent>
          <StyledHeroTitle component="h1">
            Denizden Gelen Ritüel
          </StyledHeroTitle>

          <StyledHeroSubtitle>
            Arınmanın en saf ve dayanıklı hali.
          </StyledHeroSubtitle>

          <StyledHeroButton
            onClick={() =>
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ürünü Keşfet
          </StyledHeroButton>
        </StyledHeroContent>
      </StyledHeroContainer>
    </StyledHeroRoot>
  );
};

export default Hero;