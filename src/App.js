import logo from "./logo.svg";
import "./App.css";

import Hero from "./section/hero";
import Features from "./section/features";
import Coin from "./section/coin";
import Community from "./section/community";
import Download from "./section/download";
import Steps from "./section/steps";
import CTA from "./section/cta";
import FAQ from "./section/FAQ";
import Footer from "./section/footer";
import AccordionContainer from "./section/FAQ";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleAssetsLoaded = async () => {
      await Promise.all([loadImages(), loadVideos(), loadFonts()]);
      setIsLoading(false);
    };

    handleAssetsLoaded();
  }, []);

  const loadImages = () => {
    const images = Array.from(document.images);
    const promises = images.map((image) => {
      return new Promise((resolve) => {
        if (image.complete) {
          resolve(true);
        } else {
          image.onload = () => resolve(true);
          image.onerror = () => resolve(true);
        }
      });
    });
    return Promise.all(promises);
  };

  const loadVideos = () => {
    const videos = Array.from(document.getElementsByTagName("video"));
    const promises = videos.map((video) => {
      return new Promise((resolve) => {
        video.onloadeddata = () => resolve(true);
        video.onerror = () => resolve(true);
      });
    });
    return Promise.all(promises);
  };

  const loadFonts = () => {
    return document.fonts.ready;
  };
  return (
    <>
      {isLoading ? (
        <div className="w-full h-dvh bg-black"></div>
      ) : (
        <div>
          <Hero />
          <Features />
          <Coin />
          <Steps />
          <Community />
          <Download />
          <CTA />
          <AccordionContainer />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
