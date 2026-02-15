import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

import features from "../contents/features.json"

const StyledFeaturesRoot = styled("section", {
  name: "FeaturesSectionRoot"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "3rem",
  marginBottom: "5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem"
}));

const StyledFeaturesContainer = styled(Container, {
  name: "FeaturesContainer"
})(({ theme, ismobile }) => ({
  alignItems: "center",
  alignSelf: "center",
  marginTop: "5rem",
}));

const StyledFeaturesGrid = styled(Grid, {
  name: "FeaturesGrid"
})(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "auto",
}));

const StyledFeaturesGridItem = styled(Grid, {
  name: "FeaturesGridItem"
})(({ theme }) => ({

}));

const StyledFeaturesSubtitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontSize: "11px",
  fontWeight: 700,
  color: "#d17a48",
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const StyledFeaturesTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(32px, 4vw, 48px)",
  textAlign: "center",
  marginBottom: theme.spacing(8),
}));

const StyledFeaturesCard = styled("div")(({ theme }) => ({
  background: "#fff",
  padding: theme.spacing(5),
  borderRadius: 2,
  border: "1px solid rgba(0,0,0,0.02)",
  boxShadow: "0 5px 15px rgba(0,0,0,0.01)",
  transition: "all 0.4s ease",
  height: "160px",

  [theme.breakpoints.down("lg")]: {
    height: "200px"
  },

  [theme.breakpoints.down("md")]: {
    height: "140px"
  },

  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
    borderBottom: "4px solid #56A9BB",
  },
}));

const StyledFeaturesCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginBottom: theme.spacing(2),
  color: "#56A9BB",
  letterSpacing: "1px",
  fontWeight: 600,
}));

const StyledFeaturesCardText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "#666",
}));



const Features = () => {

  return (
    <StyledFeaturesRoot id="nedir" data-scroll="nedir">
      <StyledFeaturesContainer>
        <StyledFeaturesSubtitle>ÖZELLİKLER</StyledFeaturesSubtitle>
        <StyledFeaturesTitle>Neden Seascrub?</StyledFeaturesTitle>
        <StyledFeaturesGrid
          container
          spacing={5}
        >
          {features.map((feature) => (
            <StyledFeaturesGridItem
              item
              xs={12}
              md={6}
              key={feature.id}
            >
              <StyledFeaturesCard>
                <StyledFeaturesCardTitle>{feature.title}</StyledFeaturesCardTitle>
                <StyledFeaturesCardText>
                  {feature.description}
                </StyledFeaturesCardText>
              </StyledFeaturesCard>
            </StyledFeaturesGridItem>
          ))}
          
        </StyledFeaturesGrid>
      </StyledFeaturesContainer>
    </StyledFeaturesRoot>
  )
}

export default Features