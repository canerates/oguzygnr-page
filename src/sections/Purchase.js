import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, Button, styled } from "@mui/material"
import products from "../contents/products.json"

const StyledPurchaseRoot = styled("section", {
  name: "PurchaseSectionRoot"
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

const StyledPurchaseContainer = styled(Container, {
  name: "PurchaseContainer"
})(({ theme, ismobile }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  marginTop: "5rem",
}));

const StyledPurchaseGrid = styled(Grid, {
  name: "PurchaseGrid"
})(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "auto",
}));

const StyledPurchaseGridItem = styled(Grid, {
  name: "PurchaseGridItem"
})(({ theme }) => ({
  
}));

const StyledPurchaseSubtitle = styled(Typography)(({ theme }) => ({
  color: "#D17A48",
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontSize: "11px",
  fontWeight: 700,
  marginBottom: "25px",
  textAlign: "center",
}));

const StyledPurchaseTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(32px, 4vw, 48px)",
  marginBottom: "60px",
}));

const StyledPurchaseCard = styled("div")(({ theme, featured }) => ({
  background: "#ffffff",
  padding: "60px 40px",
  textAlign: "center",
  border: featured
    ? "1.5px solid #D17A48"
    : "1px solid rgba(0,0,0,0.05)",
  transition: "all 0.4s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transform: featured ? "scale(1.05)" : "none",
  boxShadow: featured ? "0 20px 40px rgba(0,0,0,0.04)" : "none",

  "&:hover": {
    transform: featured ? "scale(1)" : "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
  },

  [theme.breakpoints.down("md")]: {
    transform: "none",
  },
}));

const StyledPurchaseBadge = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  background: "#D17A48",
  color: "#fff",
  fontSize: "10px",
  paddingTop: "6px",
  paddingBottom: "6px",
  fontWeight: 700,
  letterSpacing: "1px",
});

const StyledPurchasePrice = styled(Typography)(({ theme }) => ({
  fontSize: "38px",
  fontFamily: "'Playfair Display', serif",
  margin: "25px 0",
}));

const StyledPurchaseButton = styled(Button)(({ theme, featured }) => ({
  width: "100%",
  padding: "1rem",
  background: featured ? "#D17A48" : "#1A2628",
  color: "#ffffff",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontSize: "12px",
  fontWeight: 600,
  borderRadius: 0,
  transition: "0.3s",

  "&:hover": {
    background: featured ? "#b86536" : "#56A9BB",
  },
}));

const StyledPurchaseCardContent = styled("article")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledPurchaseCardInner = styled("section")(({ theme, featured }) => ({
  marginTop: featured ? "20px" : "0px",
}));

const StyledPurchaseName = styled("h3")(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontSize: "20px",
  fontWeight: 500,
  margin: 0,
}));

const StyledPurchaseDescription = styled("p")(({ theme }) => ({
  color: "#888",
  fontSize: "14px",
  margin: 0,
  paddingBottom: "1rem"

}));

const Purchase = () => {

  return(
    <StyledPurchaseRoot id="urunu-kesfet" data-scroll="urunu-kesfet">
      <StyledPurchaseContainer>

        <StyledPurchaseSubtitle>
          SATIN AL
        </StyledPurchaseSubtitle>

        <StyledPurchaseTitle>
          Ritüelinizi Bugün Başlatın
        </StyledPurchaseTitle>

        <StyledPurchaseGrid container spacing={4}>

          {products.map((product, index) => (
            <StyledPurchaseGridItem item xs={12} md={4} key={index}>

              <StyledPurchaseCard featured={product.featured ? 1 : 0}>

                {product.featured && (
                  <StyledPurchaseBadge>
                    EN ÇOK TERCİH EDİLEN
                  </StyledPurchaseBadge>
                )}

                <StyledPurchaseCardContent>

                  <StyledPurchaseCardInner featured={product.featured ? 1 : 0}>

                    <StyledPurchaseName>
                      {product.name}
                    </StyledPurchaseName>

                    <StyledPurchasePrice>
                      {product.price}
                    </StyledPurchasePrice>

                    <StyledPurchaseDescription>
                      {product.desc}
                    </StyledPurchaseDescription>

                  </StyledPurchaseCardInner>

                </StyledPurchaseCardContent>

                <StyledPurchaseButton featured={product.featured ? 1 : 0}>
                  {product.button}
                </StyledPurchaseButton>

              </StyledPurchaseCard>

            </StyledPurchaseGridItem>
          ))}

        </StyledPurchaseGrid>

      </StyledPurchaseContainer>
    </StyledPurchaseRoot>
  )
}

export default Purchase