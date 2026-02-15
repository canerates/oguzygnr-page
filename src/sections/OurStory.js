import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"
import storyImg from "../assets/hero-bg.webp"

const StyledOurStoryRoot = styled("section", {
  name: "OurStorySectionRoot"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
  paddingLeft: "1rem",
  paddingRight: "1rem"
}));

const StyledOurStoryContainer = styled(Container, {
  name: "OurStoryContainer"
})(({ theme, ismobile }) => ({
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
    <StyledOurStoryRoot id="hikayemiz" data-scroll="hikayemiz">
      <StyledOurStoryContainer>
        <StyledOurStoryGrid 
        container
        spacing={6}
        >
          <StyledOurStoryGridItem 
          item
          xs={12}
          md={6}
          lg={6}
          >
            <StyledStorySubtitle component="h1">
              Hikayemiz
            </StyledStorySubtitle>
            <StyledStoryTitle component="h1">
              Denizden Gelen Üretim Tecrübemiz
            </StyledStoryTitle>

            <StyledStoryText>
              Seascrub, denizin en zorlu koşullarına dayanacak ağlar üretirken edindiğimiz malzeme uzmanlığımızın bir yansımasıdır. Yıllara dayanan tecrübemizi şimdi günlük bakım rutininize taşıyoruz.
            </StyledStoryText>

            <StyledStoryText>
              Hijyen ve dayanıklılığı belgelenmiş düğümlü ağ yapısı, her duşta uzun süre aynı performansı sunmak için tasarlandı. 
            </StyledStoryText>

            <StyledStoryText>
              Seascrub ile duş yalnızca temizlik değil; bedeninizi canlandıran keyifli bir bakım anına dönüşür. Duştan daha ferah ve yenilenmiş hissederek çıkarsınız.
            </StyledStoryText>
          </StyledOurStoryGridItem>

          <StyledOurStoryGridItem 
          item
          xs={12}
          md={6}
          lg={6}
          >
            <StyledStoryImageWrapper>
              <StyledOurStoryImage
                src={storyImg}
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