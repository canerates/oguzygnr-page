import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"
import experienceImg from "../assets/deneyim.jpg"

const StyledExperienceRoot = styled("section", {
  name: "ExperienceSectionRoot"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
  paddingLeft: "2rem",
  paddingRight: "2rem"
}));

const StyledExperienceContainer = styled(Container, {
  name: "ExperienceContainer"
})(({ theme, ismobile }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
  marginTop: "5rem",
}));

const StyledExperienceGrid = styled(Grid, {
  name: "ExperienceGrid"
})(({ theme, ismobile }) => ({
  background: "#1A2628",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "space-between",
  width: "auto",
  padding: theme.spacing(10),
}));

const StyledExperienceGridItem = styled(Grid, {
  name: "ExperienceGridItem"
})(({ theme }) => ({
  color: "#ffffff",
  padding: theme.spacing(3),
}));

const StyledExperienceSubtitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontSize: "11px",
  fontWeight: 700,
  color: "#56A9BB",
  marginBottom: theme.spacing(3),
}));

const StyledExperienceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontSize: "44px",
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    fontSize: "34px",
  },
}));

const StyledExperienceText = styled(Typography)(({ theme }) => ({
  fontWeight: 200,
  opacity: 0.8,
  fontSize: "18px",
  marginBottom: theme.spacing(3),
}));

const StyledExperienceImageWrapper = styled("div")({
  position: "relative",
  overflow: "hidden",
  borderRadius: "4px",
});

const StyledExperienceImage = styled("img")({
  width: "100%",
  display: "block",
  transition: "0.5s ease",

  "&:hover": {
    transform: "scale(1.02)",
  },
});

const Experience = () => {

  return(
    <StyledExperienceRoot id="arinma-seti" data-scroll="arinma-seti" >
      <StyledExperienceContainer>
        <StyledExperienceGrid 
        container
        >
          <StyledExperienceGridItem item xs={12} md={6}>
            <StyledExperienceSubtitle>
              DENEYİM
            </StyledExperienceSubtitle>

            <StyledExperienceTitle>
              Arınma Ritüeli
            </StyledExperienceTitle>

            <StyledExperienceText>
              Deniz odaklı üretim tecrübemizle şekillenen dayanıklı ağ yapısı,
              suyun cildinizdeki akışını bir ritüele dönüştürür.
            </StyledExperienceText>

            <StyledExperienceText>
              Ağ birleşme noktalarındaki düğümler, cildinize masaj yaparak
              kan dolaşımını canlandırır ve her kullanım sonrası kendinizi
              daha hafif hissedersiniz.
            </StyledExperienceText>
          </StyledExperienceGridItem>

          <StyledExperienceGridItem item xs={12} md={6}>
            <StyledExperienceImageWrapper>
              <StyledExperienceImage
                src={experienceImg}
                alt="Ritüel"
              />
            </StyledExperienceImageWrapper>
          </StyledExperienceGridItem>


        </StyledExperienceGrid>
      </StyledExperienceContainer>
    </StyledExperienceRoot>
  )
}

export default Experience