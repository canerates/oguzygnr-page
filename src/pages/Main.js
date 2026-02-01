import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"

import Navbar from "../sections/Navbar"
import Loader from "../sections/Loader"
import Footer from "../sections/Footer"

import Hero from "../sections/Hero"
import OurStory from "../sections/OurStory"
import Features from "../sections/Features"
import Experience from "../sections/Experience"
import Purchase from "../sections/Purchase"

import heroImage from "../assets/hero-ph.png"

const StyledMainPage = styled("div", {
  name: "MainPageRoot"
})(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));

const Main = () => {

  const [isLoading, setIsloading] = useState(true);
  const [heroImg, setHeroImg] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2900);

    const loadImage = async () => {
      const img = new Image();
      img.src = heroImage;
      await img.decode();
      setHeroImg(heroImage);
    };

    loadImage();

  }, []);

  return (

    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar isMain={true}/>
          <StyledMainPage>
              <Hero img={heroImg}/>
              <OurStory />
              <Features />
              {/* <Experience /> */}
              {/* <Purchase /> */}
              
          </StyledMainPage>
          <Footer />
        </>
      )}
    </>
  );
}

export default Main;