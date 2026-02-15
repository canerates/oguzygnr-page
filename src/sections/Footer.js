import { Typography, Box, Button, styled } from "@mui/material";
import "animate.css";
import PageLogo from "../components/shared/PageLogo";

const StyledFooterRoot = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#1A2628",
  color: "#ffffff",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const StyledFooterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(4),
}));

const StyledFooterDescription = styled("p")({
  fontSize: "14px",
  opacity: 0.7,
  maxWidth: "500px",
  lineHeight: 1.7,
});

const StyledFooterCopyright = styled("p")(({ theme }) => ({
  marginTop: theme.spacing(4),
  fontSize: "13px",
  opacity: 0.3,
  letterSpacing: "1px",
}));



const Footer = () => {

  return (
    <StyledFooterRoot>
      <StyledFooterContainer>

        <PageLogo width={75} height={75} isSVG={false} />

        <StyledFooterDescription>
          Deniz odaklı üretim tecrübesiyle gelen uzun ömürlü güzellik.
        </StyledFooterDescription>

        <StyledFooterCopyright>
          © 2026 Seascrub. Tüm hakları saklıdır.
        </StyledFooterCopyright>

      </StyledFooterContainer>
    </StyledFooterRoot>

  )
}

export default Footer