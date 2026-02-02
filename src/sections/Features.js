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

  return(
    <StyledFeaturesRoot id="NEDİR?" data-scroll="NEDİR?">
      <StyledFeaturesContainer>
        <StyledFeaturesSubtitle>ÖZELLİKLER</StyledFeaturesSubtitle>
        <StyledFeaturesTitle>Neden Seascrub?</StyledFeaturesTitle>
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
              <StyledFeaturesCardTitle>Uzun Ömürlü Üstün Dayanım</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Yüksek dayanımlı poliyamid elyaf yapısı sayesinde formunu kaybetmez; sarkma ve kopma yapmadan yıllarca ilk günkü performansıyla kullanılır.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Hamam Etkili Yoğun Köpük Deneyimi</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Akıllı gözenek yapısı sayesinde az miktarda duş jeli veya sabunla bile zengin ve yoğun köpük oluşturur. Seascrub ile her duş, arındırıcı ve rahatlatıcı bir hamam ritüeline dönüşür.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Pürüzsüz Bir Cilt, Derinlemesine Arınma</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Özel düğümlü ağ yapısı, cildi tahriş etmeden ölü derileri nazikçe arındırır. Düzenli kullanımda kan dolaşımını destekler, masaj etkisiyle hücrelerin oksijenlenmesine yardımcı olur. Zamanla daha pürüzsüz, canlı ve sağlıklı bir cilt görünümü sağlar.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

          <StyledFeaturesGridItem 
            item
            xs={12}
            md={6}
          >
            <StyledFeaturesCard>
              <StyledFeaturesCardTitle>Hızlı Kuruyan, Hijyenik Tasarım</StyledFeaturesCardTitle>
              <StyledFeaturesCardText>
                Suyu içinde tutmayan özel dokusu sayesinde klasik liflere kıyasla çok daha hızlı kurur. Bu özellik, bakteri oluşumunu azaltarak hijyenik bir kullanım sunar.
              </StyledFeaturesCardText>
            </StyledFeaturesCard>
          </StyledFeaturesGridItem>

        </StyledFeaturesGrid>
      </StyledFeaturesContainer>
    </StyledFeaturesRoot>
  )
}

export default Features