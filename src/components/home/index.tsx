import HeroArea from "./HeroArea";
// import BrandArea from './BrandArea'
import AboutArea from "./AboutArea";
import ServiceArea from "./ServiceArea";
import PortfolioArea from "./PortfolioArea";
// import TestimonoalArea from './TestimonoalArea'
// import BlogArea from './BlogArea'
import ContactArea from "./ContactArea";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterOne from "../../layouts/footers/FooterOne";
import ScrollTop from "../common/ScrollTop";
import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section id="hero">
              <HeroArea />
            </section>
            {/* <BrandArea /> */}
            <section id="about">
              <AboutArea />
            </section>
            <section id="service">
              <ServiceArea />
            </section>
            <section id="portfolio">
              <PortfolioArea />
            </section>
            {/* <TestimonoalArea /> */}
            {/* <BlogArea /> */}
            <section id="contact">
              <ContactArea />
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  );
}
