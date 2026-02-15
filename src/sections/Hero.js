import React, { useState, useEffect } from "react"
import { Container, Grid, Button, Typography, styled } from "@mui/material"
import * as Scroll from "react-scroll"

const StyledHeroRoot = styled("section")(() => ({
  position: "relative",
  height: "90vh",
  minHeight: "600px",
  backgroundColor: "#E5E9EB",
  overflow: "hidden",
}));

const StyledHeroBackground = styled("img")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 0,

  animation: "bgFade 1.2s ease forwards",

  "@keyframes bgFade": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const StyledHeroOverlay = styled("div")(() => ({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.25))",
}));

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

const Hero = ({ img }) => {
  return (
    <StyledHeroRoot id="hero" data-scroll="hero">
      {img && (
        <StyledHeroBackground
          src={img}
          alt="Deniz manzarası"
          decoding="async"
        />
      )}

      <StyledHeroOverlay />

      <StyledHeroContainer maxWidth="lg">
        <StyledHeroContent>
          <StyledHeroTitle component="h1">
            Denizden Gelen Ritüel
          </StyledHeroTitle>

          <StyledHeroSubtitle>
            Arınmanın en dayanıklı hali
          </StyledHeroSubtitle>

          <StyledHeroButton
            onClick={() =>
              document.getElementById("urunu-kesfet")?.scrollIntoView({ behavior: "smooth" })
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