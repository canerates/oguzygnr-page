import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

const StyledExperienceRoot = styled("section", {
  name: "ExperienceSectionRoot"
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

const StyledExperienceContainer = styled(Container, {
  name: "ExperienceContainer"
})(({ theme, ismobile }) => ({
  display: "flex !important",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  // maxWidth: "1000px !important",
  width: "unset",
  marginTop: "2rem",
}));

const StyledExperienceGrid = styled(Grid, {
  name: "ExperienceGrid"
})(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  // padding: "1rem",
  padding: "0rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledExperienceGridItem = styled(Grid, {
  name: "ExperienceGridItem"
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

const Experience = () => {

  return(
    <StyledExperienceRoot>
      <StyledExperienceContainer>
        <StyledExperienceGrid container>
          <StyledExperienceGridItem item>
            <Typography>Experience</Typography>
          </StyledExperienceGridItem>
        </StyledExperienceGrid>
      </StyledExperienceContainer>
    </StyledExperienceRoot>
  )
}

export default Experience