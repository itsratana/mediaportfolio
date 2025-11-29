import HeroArea from "./HeroArea";
// import BrandArea from './BrandArea'
import AboutArea from "./AboutArea";
import ServiceArea from "./ServiceArea";
import PortfolioArea from "./PortfolioArea";
// import TestimonoalArea from './TestimonoalArea'
// import BlogArea from './BlogArea'
import ContactArea from "./ContactArea";
import CompanyArea from "./CompanyArea";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterHome from "../../layouts/footers/FooterHome";
import ScrollTop from "../common/ScrollTop";
//import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";
import SkillArea from "../about/SkillArea";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const targetId = localStorage.getItem('scrollTo');
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior:'smooth', block: 'center' });
          localStorage.removeItem('scrollTo'); // clean up
        }
      }, 300);
    }
  }, []);  
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
              <SkillArea />
            </section>
            <section id="company">
              <CompanyArea />
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
          <FooterHome />
        </div>
      </div>
      <ScrollToTop />
      <ScrollTop />
    </>
  );
}
