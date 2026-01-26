import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

const StyledPurchaseRoot = styled("section", {
  name: "PurchaseSectionRoot"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const StyledPurchaseContainer = styled(Container, {
  name: "PurchaseContainer"
})(({ theme, ismobile }) => ({
  display: "flex !important",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  // maxWidth: "1000px !important",
  width: "unset",
  marginTop: "2rem",
}));

const StyledPurchaseGrid = styled(Grid, {
  name: "PurchaseGrid"
})(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  // padding: "1rem",
  padding: "0rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledPurchaseGridItem = styled(Grid, {
  name: "PurchaseGridItem"
})(({ theme }) => ({
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

const Purchase = () => {

  return(
    <StyledPurchaseRoot>
      <StyledPurchaseContainer>
        <StyledPurchaseGrid container>
          <StyledPurchaseGridItem item>
            <Typography>Purchase</Typography>
          </StyledPurchaseGridItem>
        </StyledPurchaseGrid>
      </StyledPurchaseContainer>
    </StyledPurchaseRoot>
  )
}

export default Purchase