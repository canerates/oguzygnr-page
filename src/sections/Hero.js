import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"
import * as Scroll from "react-scroll"

const StyledHeroRoot = styled("section", {
  name: "HeroSectionRoot"
})(({ theme, isMobile }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: isMobile ? "auto" : "100vh",
  marginBottom: "1rem",
  marginTop: "4rem"
}));

const StyledHeroContainer = styled(Container, {
  name: "HeroContainer"
})(({ theme, ismobile }) => ({
  display: "flex !important",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  // maxWidth: "1000px !important",
  width: "unset",
  marginTop: "2rem",
}));

const StyledHeroGrid = styled(Grid)(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  // padding: "1rem",
  padding: "0rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledHeroGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "0rem",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    order: "1",
    // paddingLeft: "1rem",
    marginTop: "2rem",
  },
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  maxWidth: "100%",
  height: "auto",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },

}));

const Hero = ({ img }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
      <StyledHeroRoot id="Hero" data-scroll="Hero" isMobile={isMobile}>
        <StyledHeroContainer maxWidth={false} disableGutters>
          <StyledHeroImage alt="Image of Hero" src={img} />
          <StyledHeroGrid container>
            <StyledHeroGridItem
              item
              xs={12}
              md={12}
            >
            </StyledHeroGridItem>

          </StyledHeroGrid>
        </StyledHeroContainer>
      </StyledHeroRoot>
  )
}

export default Hero