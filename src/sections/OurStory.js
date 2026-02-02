import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

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
    <StyledOurStoryRoot id="HİKAYEMİZ" data-scroll="HİKAYEMİZ">
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
              Denizden Üretim Tecrübemiz
            </StyledStoryTitle>

            <StyledStoryText>
              Seascrub, yıllardır denizin en zorlu koşullarına dayanacak ağlar üreten malzeme uzmanlığımızın doğal bir parçası olarak yaratıldı. Bu köklü tecrübeyi şimdi günlük bakım rutininizin bir parçası haline getiriyoruz.
            </StyledStoryText>

            <StyledStoryText>
              Sertifikalı dayanıklılığa sahip özel düğümlü ağ yapısı, uzun yıllar boyunca her duşta aynı performansı sunmak üzere tasarlandı. Seascrub ile duş yalnızca bir temizlik anı değil; bedeninizi canlandıran, enerjinizi tazeleyen bir ritüele dönüşür. Duştan daha hafif, daha canlı ve yenilenmiş hissederek çıkın.
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