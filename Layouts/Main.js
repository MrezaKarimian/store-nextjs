import DesktopMenu from "../Components/Common/Menu/DesktopMenu";
import MobileMenu from "../Components/Common/Menu/MobileMenu";
import Footer from "../Components/Common/Footer";

import { useEffect, useState } from "react";

const getMedia = () => {
  return window.matchMedia(
    "screen and (min-width: 540px) and (max-width: 719px)"
  ).matches
    ? "sm"
    : window.matchMedia("screen and (min-width: 720px) and (max-width: 959px)")
        .matches
    ? "md"
    : window.matchMedia("screen and (min-width: 960px) and (max-width: 1199px)")
        .matches
    ? "lg"
    : window.matchMedia("screen and (min-width: 1200px)").matches
    ? "xl"
    : "xs";
};

export default function MainLayout({ children }) {
  const [media, setMedia] = useState();
  useEffect(() => {
    setMedia(getMedia());
  }, []);
  return (
    <>
      {media === "xs" || media === "sm" ? <MobileMenu /> : <DesktopMenu />}

      {children}

      <Footer />
    </>
  );
}
