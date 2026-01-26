import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

const StyledOurStoryRoot = styled("section", {
  name: "OurStorySectionRoot"
})(({ theme }) => ({
  display: "flex",
  // flexWrap: "wrap",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const StyledOurStoryContainer = styled(Container, {
  name: "OurStoryContainer"
})(({ theme, ismobile }) => ({
  display: "flex !important",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
  marginTop: "2rem",
}));

const StyledOurStoryGrid = styled(Grid, {
  name: "OurStoryGrid"
})(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "auto",
  paddingBottom: "1rem",
  paddingTop: "1rem",
  gap: "3rem",
  flexWrap: "nowrap"
}));

const StyledOurStoryGridItem = styled(Grid, {
  name: "OurStoryGridItem"
})(({ theme }) => ({
  
}));

const StyledStoryTitle = styled(Typography, {
  name: "OurStoryTitle"
})(({ theme }) => ({
  fontSize: "42px",
  lineHeight: 1.2,
  marginBottom: "25px",
  fontFamily: "'Playfair Display', serif",
}));

const StyledStorySubtitle = styled(Typography, {
  name: "OurStorySubtitle"
})(({ theme }) => ({
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontSize: "11px",
  fontWeight: 700,
  color: "#d17a48",
  marginBottom: "25px",
}))

const StyledStoryText = styled(Typography, {
  name: "OurStoryText"
})(({ theme }) => ({
  fontSize: "17px",
  color: "#555",
  marginBottom: "20px",
}))

const StyledStoryImageWrapper = styled("div", {
  name: "OurStoryImageWrapper"
})(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
}))

const StyledOurStoryImage = styled("img", {
  name: "OurStoryImage"
})(({ theme }) => ({
  width: "100%",
  display: "block",
  transition: "transform 0.5s ease",

  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const OurStory = () => {

  return(
    <StyledOurStoryRoot id="OurStory" data-scroll="OurStory">
      <StyledOurStoryContainer>
        <StyledOurStoryGrid 
        container
        >
          <StyledOurStoryGridItem 
          item
          xs={12}
          md={6}
          >
            <StyledStorySubtitle component="h1">
              Uzmanlığımız
            </StyledStorySubtitle>
            <StyledStoryTitle component="h1">
              Denizle Geçen Yılların Tecrübesi
            </StyledStoryTitle>

            <StyledStoryText>
              Seascrub, hikayesini denizin hırçın ama tazeleyici ruhundan alıyor.
              Yıllardır denizin en zorlu şartlarına eşlik eden dayanıklı ağlar
              üretme konusundaki deniz odaklı üretim tecrübemizi, bugün
              banyonuzda bir kalite standardı olarak sunuyoruz.
            </StyledStoryText>

            <StyledStoryText>
              Düğümlü ağlarımızın sertifikalı dayanıklılığı ile size her
              dokunuşta uzun yıllar sürecek bir ferahlık vaat ediyoruz.
            </StyledStoryText>
          </StyledOurStoryGridItem>

          <StyledOurStoryGridItem 
          item
          xs={12}
          md={6}
          >
            <StyledStoryImageWrapper>
              <StyledOurStoryImage
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Seascrub Hikayemiz"
              />
            </StyledStoryImageWrapper>

          </StyledOurStoryGridItem>


        </StyledOurStoryGrid>
      </StyledOurStoryContainer>
    </StyledOurStoryRoot>
  )
}

export default OurStory