import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

const StyledFeaturesRoot = styled("section", {
  name: "FeaturesSectionRoot"
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

const StyledFeaturesContainer = styled(Container, {
  name: "FeaturesContainer"
})(({ theme, ismobile }) => ({
  display: "flex !important",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  // maxWidth: "1000px !important",
  width: "unset",
  marginTop: "2rem",
}));

const StyledFeaturesGrid = styled(Grid, {
  name: "FeaturesGrid"
})(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  // padding: "1rem",
  padding: "0rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledFeaturesGridItem = styled(Grid, {
  name: "FeaturesGridItem"
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

const Features = () => {

  return(
    <StyledFeaturesRoot>
      <StyledFeaturesContainer>
        <StyledFeaturesGrid container>
          <StyledFeaturesGridItem item>
            <Typography>Features</Typography>
          </StyledFeaturesGridItem>
        </StyledFeaturesGrid>
      </StyledFeaturesContainer>
    </StyledFeaturesRoot>
  )
}

export default Features