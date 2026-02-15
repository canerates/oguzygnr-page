import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"

const StyledContactRoot = styled("section", {
  name: "ContactSectionRoot"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(12),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const StyledContactContainer = styled(Container, {
  name: "ContactContainer"
})(({ theme, ismobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(6),
  gap: theme.spacing(3),
}));

const StyledContactGrid = styled(Grid, {
  name: "ContactGrid"
})(({ ismobile }) => ({
  alignItems: "flex-start",
}));

const StyledContactGridItem = styled(Grid, {
  name: "ContactGridItem"
})(({ theme }) => ({

}));

const StyledContactSubTitle = styled("span")({
  color: "#D17A48",
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontSize: "11px",
  fontWeight: 700,
});

const StyledContactTitle = styled("h2")({
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(32px, 4vw, 40px)",
  fontWeight: "500"
});

const StyledContactDescription = styled("p")({
  textAlign: "center",
  maxWidth: "600px",
  color: "#666",
  lineHeight: 1.7,
});

const StyledContactLinks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",
  marginTop: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "24px",
  },
}));

const StyledContactLink = styled("a")({
  color: "#1A2628",
  textDecoration: "none",
  fontWeight: 600,
  borderBottom: "1px solid #ccc",
  paddingBottom: "5px",
  transition: "all 0.3s ease",

  "&:hover": {
    color: "#56A9BB",
    borderColor: "#56A9BB",
  },
});

const Contact = () => {

  return (
    <StyledContactRoot id="iletisim" data-scroll="iletisim">
      <StyledContactContainer>

        <StyledContactSubTitle>İLETİŞİM</StyledContactSubTitle>

        <StyledContactTitle>Bilgi ve destek için bize ulaşın</StyledContactTitle>

        <StyledContactDescription>
          Seascub - Bir Çeşit Mensucat A.Ş. Markasıdır.
        </StyledContactDescription>

        <StyledContactLinks>
          <StyledContactLink href="mailto:destek@seascrub.co">
            destek@seascrub.co
          </StyledContactLink>

          <StyledContactLink href="mailto:isbirligi@seascrub.co">
            isbirligi@seascrub.co
          </StyledContactLink>
        </StyledContactLinks>

      </StyledContactContainer>
    </StyledContactRoot>
  )
}

export default Contact