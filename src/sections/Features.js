import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

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
  // display: "flex !important",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
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
  padding: theme.spacing(8),
  borderRadius: 2,
  border: "1px solid rgba(0,0,0,0.02)",
  boxShadow: "0 5px 15px rgba(0,0,0,0.01)",
  transition: "all 0.4s ease",
  height: "110px",

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

  return(
    <StyledFeaturesRoot id="NEDİR?" data-scroll="NEDİR?">
      <StyledFeaturesContainer>
        <StyledFeaturesSubtitle>FONKSİYONELLİK</StyledFeaturesSubtitle>
        <StyledFeaturesTitle>Seascrub Nedir?</StyledFeaturesTitle>
        <StyledFeaturesGrid 
          container
          spacing={5}
        >
          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Üstün Dayanım</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Materyal uzmanlığımız sayesinde uzun süre formunu kaybetmeden
                dayanım gösterir. Kopma ve sarkma yapmadan yıllarca size eşlik eder.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Hamam Etkisi</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Ağ gözleri sayesinde derinlemesine peeling özelliği sunar.
                Cildi yormadan ölü derilerden nazikçe arındırarak tazelik sağlar.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Köpük Performansı</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Düğümlü ağ yapısı, duş jelinizi saniyeler içinde zengin ve yoğun
                bir köpük bulutuna dönüştürür.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Hızlı Kuruma</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Suyu hapsetmeyen nefes alan dokusu sayesinde klasik liflerden
                çok daha hızlı kurur ve her zaman hijyenik kalır.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

        </StyledFeaturesGrid>
      </StyledFeaturesContainer>
    </StyledFeaturesRoot>
  )
}

export default Features